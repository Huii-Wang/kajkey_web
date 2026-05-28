import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <SmoothScroll>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </SmoothScroll>
    </NextIntlClientProvider>
  );
}
