'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations('Footer');
  const tNav = useTranslations('Navbar');

  const navLinks = [
    { href: '/' as const, label: tNav('home') },
    { href: '/products' as const, label: tNav('products') },
    { href: '/brands' as const, label: tNav('brands') },
    { href: '/about' as const, label: tNav('about') },
  ];

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-14">

          <div className="sm:col-span-1">
            <p className="text-white text-base font-black tracking-[0.2em] uppercase mb-4">KAJKEY</p>
            <p className="text-[13px] leading-7 text-gray-500 max-w-xs font-light">
              {t('brandDesc')}
            </p>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-600 mb-5">{t('navHeading')}</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[13px] text-gray-500 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-600 mb-5">{t('contactHeading')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-gray-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+8615170999770" className="text-[13px] text-gray-500 hover:text-white transition-colors">
                  +86 151 7099 9770
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-gray-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:yangbin@longsheng-sz.com" className="text-[13px] text-gray-500 hover:text-white transition-colors break-all">
                  yangbin@longsheng-sz.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-gray-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-[13px] text-gray-500 leading-6">深圳市南山区招商街道花果山社区<br />工业六路4号兴华工业大厦<br />7栋AB座415A-5</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-gray-600 tracking-wide">
          <p>{t('copyright', { year: new Date().getFullYear() })}</p>
          <p>{t('trademark')}</p>
        </div>
      </div>
    </footer>
  );
}
