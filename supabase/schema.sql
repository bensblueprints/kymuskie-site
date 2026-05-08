-- =========================================================
-- Cave Run Muskie Guide Service — Supabase Schema
-- Run this in Supabase Studio → SQL Editor
-- =========================================================

create extension if not exists "pgcrypto";

-- ---------- profiles ----------
create table if not exists profiles (
  id uuid references auth.users on delete cascade primary key,
  role text not null default 'admin',
  name text,
  email text,
  created_at timestamptz default now()
);

-- ---------- pages ----------
-- Each public page is one row; admin can edit hero/headlines/etc.
create table if not exists pages (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text,
  meta_description text,
  hero_heading text,
  hero_subheading text,
  hero_cta_text text,
  body_content jsonb,
  updated_at timestamptz default now()
);

-- ---------- services / offerings ----------
create table if not exists services (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  short_description text,
  full_description text,
  icon text,
  display_order integer default 0,
  active boolean default true,
  created_at timestamptz default now()
);

-- ---------- packages ----------
create table if not exists packages (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  duration text,
  price numeric(10, 2) not null,
  party_size text default 'Up to 2 anglers',
  best_for text,
  featured boolean default false,
  display_order integer default 0,
  active boolean default true
);

-- ---------- guides ----------
create table if not exists guides (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text,
  bio text,
  photo_url text,
  display_order integer default 0,
  active boolean default true
);

-- ---------- leads ----------
create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  name text,
  email text,
  phone text,
  service text,
  party_size text,
  preferred_dates text,
  message text,
  source_page text,
  status text default 'new',         -- new | contacted | converted | closed
  notes text,
  created_at timestamptz default now()
);
create index if not exists leads_status_idx on leads(status);
create index if not exists leads_created_at_idx on leads(created_at desc);

-- ---------- media ----------
create table if not exists media (
  id uuid primary key default gen_random_uuid(),
  file_name text,
  storage_path text,
  url text,
  alt_text text,
  width integer,
  height integer,
  uploaded_at timestamptz default now()
);

-- ---------- testimonials ----------
create table if not exists testimonials (
  id uuid primary key default gen_random_uuid(),
  author text not null,
  quote text not null,
  display_order integer default 0,
  active boolean default true
);

-- ---------- settings (key/value) ----------
create table if not exists settings (
  key text primary key,
  value text,
  updated_at timestamptz default now()
);

insert into settings (key, value) values
  ('business_name', 'Cave Run Muskie Guide Service & The Muskie Lodge'),
  ('phone', '(606) 776-6567'),
  ('lodge_phone', '(606) 768-3911'),
  ('email', 'tonygrantoutdoors@gmail.com'),
  ('address', '10752 Highway 1274, Wellington, KY 40387'),
  ('tagline', 'Trophy Muskie. Mountain Country.'),
  ('hours', 'Daylight to dark, year-round. Best to call.'),
  ('google_analytics_id', ''),
  ('facebook_pixel_id', '')
on conflict (key) do nothing;

-- ---------- seed: services ----------
insert into services (slug, name, short_description, icon, display_order) values
  ('muskie', 'Muskie Fishing', 'Year-round trophy muskie on Cave Run.', 'Fish', 1),
  ('crappie', 'Crappie & Multi-Species', 'Spring slabs, summer white bass, year-round bass.', 'Star', 2),
  ('lodge', 'Lodging at Mountain Muskie Lodge', 'Seven rooms attached to The Muskie Shack.', 'BedDouble', 3),
  ('turkey', 'Spring Turkey Hunts', 'Cave Run gobblers with Tim Newsome.', 'Compass', 4)
on conflict (slug) do nothing;

-- ---------- seed: packages ----------
insert into packages (slug, name, duration, price, best_for, featured, display_order) values
  ('half-day',      'Half Day',      'Half-Day Guided Trip',                  325, 'Quick taste before lunch',                          false, 1),
  ('day-charter',   'Day Charter',   'Full-Day Guided Trip',                  450, 'Day-tripping from Lexington',                       false, 2),
  ('cabin-day',     'Cabin Day',     '1 Day Guided + 1 Night Lodging',        525, 'First-time visitors who want a real Cave Run morning', false, 3),
  ('long-weekend',  'Long Weekend',  '2 Days Guided + 3 Nights Lodging',      895, 'The package that catches the most fish per dollar', true,  4),
  ('whole-hunt',    'The Whole Hunt','3 Days Guided + 4 Nights Lodging',     1345, 'Going for the wall fish — give yourself the days',  false, 5)
on conflict (slug) do nothing;

-- =========================================================
-- ROW LEVEL SECURITY — admins can do everything
-- =========================================================
alter table profiles      enable row level security;
alter table pages         enable row level security;
alter table services      enable row level security;
alter table packages      enable row level security;
alter table guides        enable row level security;
alter table leads         enable row level security;
alter table media         enable row level security;
alter table testimonials  enable row level security;
alter table settings      enable row level security;

-- helper
create or replace function is_admin() returns boolean language sql stable as $$
  select exists (
    select 1 from profiles where id = auth.uid() and role = 'admin'
  );
$$;

-- Admin policies (ALL)
do $$
declare t text;
begin
  for t in select unnest(array['profiles','pages','services','packages','guides','leads','media','testimonials','settings']) loop
    execute format('drop policy if exists "admin_all" on %I', t);
    execute format('create policy "admin_all" on %I for all using (is_admin()) with check (is_admin())', t);
  end loop;
end $$;

-- Public read for content tables (so the public site can SSR them)
create policy "public_read_pages"        on pages        for select using (true);
create policy "public_read_services"     on services     for select using (active = true);
create policy "public_read_packages"     on packages     for select using (active = true);
create policy "public_read_guides"       on guides       for select using (active = true);
create policy "public_read_testimonials" on testimonials for select using (active = true);
create policy "public_read_settings"     on settings     for select using (true);

-- Public can INSERT a lead via the API route (anon key + RLS-friendly)
create policy "public_insert_leads" on leads for insert with check (true);
