import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import HeroHeading from '@/components/HeroHeading';
import { getTranslations } from 'next-intl/server';

const valueIcons = [
  (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  ),
  (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
];

const featuredProducts = [
  { name: 'Carbide Straight Router Cutter Bits', tagKey: 'woodworking' as const, image: '/images/products/615f0E9onmL._AC_SL1500_.jpg' },
  { name: 'Canvas Press Stud Snap Fastener Set', tagKey: 'marine' as const, image: '/images/products/617-RhJnlJL._AC_SL1000_.jpg' },
  { name: 'LPG Gas Conversion Nozzle Set', tagKey: 'industrial' as const, image: '/images/products/5112I2QZ0dL._AC_SL1200_.jpg' },
  { name: 'Disposable Emergency Rain Poncho Balls', tagKey: 'outdoor' as const, image: '/images/products/61vVTiXCAXL._AC_SX679_.jpg' },
];

export default async function HomePage() {
  const t = await getTranslations('HomePage');
  const tTags = await getTranslations('Tags');

  const values = [
    { title: t('value1Title'), desc: t('value1Desc'), icon: valueIcons[0] },
    { title: t('value2Title'), desc: t('value2Desc'), icon: valueIcons[1] },
    { title: t('value3Title'), desc: t('value3Desc'), icon: valueIcons[2] },
  ];

  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="hero-animated text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 sm:py-40">
          <div className="max-w-3xl">
            <HeroHeading line1={t('heroLine1')} line2={t('heroLine2')} />
            <p className="text-base sm:text-lg text-gray-300 leading-8 mb-10 max-w-xl font-light">
              {t('heroDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/products"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 hover:bg-gray-100 font-semibold px-7 py-3 rounded-xl transition-colors text-sm tracking-wide"
              >
                {t('browseCta')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/about"
                className="inline-flex items-center justify-center border border-white/20 hover:border-white/50 text-gray-300 hover:text-white font-medium px-7 py-3 rounded-xl transition-colors text-sm tracking-wide"
              >
                {t('learnMore')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-lg mb-14">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-400 mb-4">{t('valuesLabel')}</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">{t('valuesHeading')}</h2>
            <p className="text-gray-500 leading-7">{t('valuesDesc')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 rounded-2xl overflow-hidden">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-8 hover:bg-gray-50 transition-colors">
                <div className="w-9 h-9 bg-gray-900 text-white rounded-lg flex items-center justify-center mb-6">
                  {v.icon}
                </div>
                <h3 className="text-base font-semibold tracking-tight text-gray-900 mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-7">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-400 mb-4">{t('productsLabel')}</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">{t('productsHeading')}</h2>
            </div>
            <Link href="/products" className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-gray-900 transition-colors">
              {t('viewAll')}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredProducts.map((p) => (
              <Link href="/products" key={p.name}
                className="group bg-gray-50 rounded-2xl overflow-hidden border border-transparent hover:border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden bg-white">
                  <Image src={p.image} alt={p.name} fill sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-contain p-4 group-hover:scale-[1.05] transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="px-4 py-4">
                  <span className="inline-block text-[10px] font-semibold tracking-[0.12em] uppercase text-gray-400 mb-2">
                    {tTags(p.tagKey)}
                  </span>
                  <p className="text-sm font-medium text-gray-900 leading-snug line-clamp-2">{p.name}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 sm:hidden text-center">
            <Link href="/products" className="text-sm font-medium text-gray-500">{t('viewAllMobile')}</Link>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-28 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <div className="w-px h-12 bg-white/20 mx-auto mb-10" />
          <blockquote className="text-xl sm:text-2xl font-light leading-relaxed text-gray-200 mb-8 tracking-tight">
            &ldquo;{t('missionText')}<span className="text-white font-semibold">{t('missionHighlight')}</span>&rdquo;
          </blockquote>
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-500">{t('missionTag')}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-gray-900 rounded-3xl px-8 py-16 text-center text-white">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-500 mb-6">{t('ctaLabel')}</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">{t('ctaHeading')}</h2>
            <p className="text-gray-400 mb-10 max-w-lg mx-auto leading-7 font-light">{t('ctaDesc')}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/products"
                className="inline-flex items-center justify-center bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-3 rounded-xl transition-colors text-sm tracking-wide"
              >
                {t('ctaBrowse')}
              </Link>
              <Link href="/about"
                className="inline-flex items-center justify-center border border-white/10 hover:border-white/30 text-gray-400 hover:text-white font-medium px-8 py-3 rounded-xl transition-colors text-sm tracking-wide"
              >
                {t('ctaContact')}
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
