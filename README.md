# Cave Run Muskie Guide Service & The Muskie Lodge — Redesign

A full Next.js 14 redesign of [kymuskie.com](http://www.kymuskie.com), with a Supabase-powered admin system for managing content, leads, services, media, and settings.

## Stack
- Next.js 14 App Router (TypeScript)
- Tailwind CSS
- Framer Motion
- Supabase (Auth, Postgres, Storage)
- React Hook Form + Zod
- Sonner (toasts)
- Lucide icons

## Local setup
```bash
npm install
cp .env.example .env.local      # fill in Supabase keys
# In Supabase: SQL editor → run supabase/schema.sql
npm run dev
```
Public site: `http://localhost:3000`
Admin: `http://localhost:3000/admin/login`

## First-time admin
1. Create a Supabase project.
2. Run `supabase/schema.sql` in the SQL editor.
3. Add your `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, and `SUPABASE_SERVICE_ROLE_KEY` to `.env.local`.
4. In Supabase Auth → Users → "Add user" with your email + password.
5. In SQL editor:
   ```sql
   insert into profiles (id, role, name, email)
   values ('<your-auth-user-uuid>', 'admin', 'Tony', 'tonygrantoutdoors@gmail.com');
   ```
6. Visit `/admin/login` and sign in.

## Deploy
Push the repo to Vercel or Netlify, set the same env vars, point your domain at the deployment.

## Project layout
```
src/
  app/
    (site)/         Public pages — homepage, services, lodge, packages, etc.
    (admin)/admin/  Auth-gated admin (/admin/...)
    api/            API routes (contact form, etc.)
  components/
    site/           Public components
    admin/          Admin components
    ui/             Primitives
  lib/              Supabase clients, content loader, utils
public/images/
  hero/             Slider/hero photos
  lodge/            Lodge interior + exterior
  guides/           Guide portraits
  trophies/         Trophy/catch photos
  gallery/          Recent gallery photos
  boats/            Boats & equipment
  maps/             Cave Run Lake area maps
```
