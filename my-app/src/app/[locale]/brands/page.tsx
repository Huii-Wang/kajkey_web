import { getTranslations } from 'next-intl/server';

const coverageIcons = [
  (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-4.584-7H7a4 4 0 00-4 3z" />
    </svg>
  ),
  (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 17l9 4 9-4M3 12l9 4 9-4M3 7l9 4 9-4" />
    </svg>
  ),
  (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
];

export async function generateMetadata() {
  const t = await getTranslations('BrandsPage');
  return {
    title: t('metaTitle'),
    description: t('metaDesc'),
  };
}

export default async function BrandsPage() {
  const t = await getTranslations('BrandsPage');

  const coverage = [
    { area: t('area1'), desc: t('area1Desc'), icon: coverageIcons[0] },
    { area: t('area2'), desc: t('area2Desc'), icon: coverageIcons[1] },
    { area: t('area3'), desc: t('area3Desc'), icon: coverageIcons[2] },
    { area: t('area4'), desc: t('area4Desc'), icon: coverageIcons[3] },
  ];

  return (
    <div className="bg-white">

      {/* Brand Hero */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10">
            <div className="flex-shrink-0 w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl">
              <span className="text-sm font-black text-gray-900 tracking-[0.1em]">KAJKEY</span>
            </div>
            <div>
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="text-[11px] font-semibold tracking-[0.12em] uppercase bg-white/10 text-gray-300 border border-white/15 px-3 py-1 rounded-full">
                  {t('heroBadge1')}
                </span>
                <span className="text-[11px] font-semibold tracking-[0.12em] uppercase bg-white/5 text-gray-400 border border-white/10 px-3 py-1 rounded-full">
                  {t('heroBadge2')}
                </span>
                <span className="text-[11px] font-semibold tracking-[0.12em] uppercase bg-white/5 text-gray-400 border border-white/10 px-3 py-1 rounded-full">
                  {t('heroBadge3')}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">KAJKEY</h1>
              <p className="text-gray-400 leading-7 max-w-xl font-light">{t('heroDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 space-y-20">

        {/* Brand Story */}
        <section className="max-w-3xl">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-400 mb-4">{t('storyLabel')}</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-8">{t('storyHeading')}</h2>
          <div className="space-y-5 text-gray-500 text-sm leading-8 font-light">
            <p>
              {t.rich('story1', {
                date1: <strong key="date1" className="text-gray-900 font-semibold">{t('story1Date1')}</strong>,
                date2: <strong key="date2" className="text-gray-900 font-semibold">{t('story1Date2')}</strong>,
              })}
            </p>
            <p>{t('story2')}</p>
            <p>{t('story3')}</p>
          </div>
        </section>

        {/* Product Coverage */}
        <section>
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-400 mb-4">{t('coverageLabel')}</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-10">{t('coverageHeading')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 rounded-2xl overflow-hidden">
            {coverage.map((item) => (
              <div key={item.area} className="bg-white p-8 hover:bg-gray-50 transition-colors">
                <div className="w-9 h-9 bg-gray-900 text-white rounded-lg flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold tracking-tight text-gray-900 mb-3">{item.area}</h3>
                <p className="text-[13px] text-gray-500 leading-7 font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
