import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans, Yesteryear } from "next/font/google";
import "./globals.css";
import Toaster from "@/components/ui/toaster";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const script = Yesteryear({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cave Run Muskie Guide Service & The Muskie Lodge",
  description:
    "Trophy muskie and crappie fishing on Cave Run Lake — Kentucky's mountain-country muskie water. State-record guides. Mountain Muskie Lodge. Three decades of catching big fish.",
  metadataBase: new URL("https://kymuskie.com"),
  openGraph: {
    title: "Cave Run Muskie Guide Service & The Muskie Lodge",
    description:
      "Trophy muskie and crappie fishing on Cave Run Lake — guided trips and lodging in eastern Kentucky.",
    images: ["/images/hero/bigfishslider-961x440.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${script.variable}`}
    >
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
