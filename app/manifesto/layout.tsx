import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LongStrider — The AI Layer That Never Forgets',
  description:
    'LongStrider is the persistent intelligence layer that accumulates institutional knowledge across every person and every interaction — permanently, sovereignly, in your environment.',
  robots: { index: false, follow: false }, // hidden from search engines
};

export default function DeckLayout({ children }: { children: React.ReactNode }) {
  return children;
}
