'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useState } from 'react';
import { Link, usePathname, useRouter } from '@/i18n/navigation';

export default function Navbar() {
  const t = useTranslations('Navbar');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '/' as const, label: t('home') },
    { href: '/products' as const, label: t('products') },
    { href: '/brands' as const, label: t('brands') },
    { href: '/about' as const, label: t('about') },
  ];

  function toggleLocale() {
    router.replace(pathname, { locale: locale === 'en' ? 'zh' : 'en' });
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <Link href="/" className="flex items-center">
            <span className="text-base font-black text-gray-900 tracking-[0.15em] uppercase">KAJKEY</span>
          </Link>

          <nav className="hidden md:flex items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-5 text-[13px] font-medium tracking-wide transition-colors ${
                  pathname === link.href
                    ? 'text-gray-900'
                    : 'text-gray-400 hover:text-gray-900'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-4 right-4 h-px bg-gray-900" />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleLocale}
              className="text-[12px] font-semibold tracking-widest text-gray-400 hover:text-gray-900 transition-colors uppercase px-2 py-1"
            >
              {locale === 'en' ? 'ZH' : 'EN'}
            </button>
            <Link
              href="/about"
              className="text-[13px] font-semibold tracking-wide text-white bg-gray-900 hover:bg-gray-700 px-5 py-2 rounded-lg transition-colors"
            >
              {t('contact')}
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-gray-900 hover:bg-gray-50 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center px-3 py-2.5 rounded-lg text-sm font-medium tracking-wide transition-colors ${
                pathname === link.href
                  ? 'bg-gray-50 text-gray-900'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 flex gap-2">
            <button
              onClick={() => { toggleLocale(); setMenuOpen(false); }}
              className="flex-1 flex items-center justify-center px-3 py-2.5 rounded-lg text-sm font-semibold text-gray-500 border border-gray-200 hover:border-gray-400 transition-colors uppercase tracking-widest"
            >
              {locale === 'en' ? 'ZH' : 'EN'}
            </button>
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="flex-1 flex items-center justify-center px-3 py-2.5 rounded-lg text-sm font-semibold text-white bg-gray-900 hover:bg-gray-700 transition-colors"
            >
              {t('contact')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
