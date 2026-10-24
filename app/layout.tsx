import type { ReactNode } from 'react';
import { Dela_Gothic_One, Zen_Kaku_Gothic_New } from 'next/font/google';
import './globals.css';

const dela = Dela_Gothic_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dela',
});

const zen = Zen_Kaku_Gothic_New({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-zen',
});

const title = 'Saiko Ramen — Ramen japonais';
const description =
  'Saiko Ramen, restaurant japonais spécialiste du ramen. Commande en ligne et réservation.';

export const metadata = {
  title,
  description,
  keywords: [
    'Saiko Ramen',
    'ramen',
    'restaurant japonais',
    'tonkotsu',
    'shoyu',
    'miso',
    'shio',
    'gyoza',
    'commande en ligne',
    'réservation',
  ],
  openGraph: {
    title,
    description,
    type: 'website' as const,
    locale: 'fr_FR',
    siteName: 'Saiko Ramen',
  },
};

const PLATFORM_URL = 'https://platform.yumco.fr/yumco-restaurant-6';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Saiko Ramen',
  description,
  servesCuisine: ['Japonais', 'Ramen'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '3bis rue jean jaurès',
    addressCountry: 'FR',
  },
  telephone: '0666694831',
  email: 'dwain@gmail.com',
  acceptsReservations: true,
  hasMenu: PLATFORM_URL,
  potentialAction: [
    {
      '@type': 'OrderAction',
      target: PLATFORM_URL,
    },
    {
      '@type': 'ReserveAction',
      target: PLATFORM_URL,
    },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Friday', 'Saturday', 'Sunday'],
      opens: '12:00',
      closes: '14:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Friday', 'Saturday'],
      opens: '19:00',
      closes: '22:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday'],
      opens: '19:00',
      closes: '23:00',
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={`${dela.variable} ${zen.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
