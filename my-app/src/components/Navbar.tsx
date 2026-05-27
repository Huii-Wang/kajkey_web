'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: '首页' },
  { href: '/products', label: '产品' },
  { href: '/brands', label: '品牌' },
  { href: '/about', label: '关于我们' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 bg-gray-900 rounded-lg">
              <span className="text-white text-xs font-black tracking-tight">KJ</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-sm font-bold text-gray-900 tracking-tight">凯键五金</span>
              <span className="text-[10px] text-gray-400 font-medium tracking-widest uppercase">KAJKEY</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-5 text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-gray-900'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gray-900 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Link
              href="/about"
              className="text-sm font-medium text-white bg-gray-900 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
            >
              联系我们
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                pathname === link.href
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 pb-1">
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center px-3 py-2.5 rounded-lg text-sm font-medium text-white bg-gray-900 hover:bg-gray-700 transition-colors"
            >
              联系我们
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
