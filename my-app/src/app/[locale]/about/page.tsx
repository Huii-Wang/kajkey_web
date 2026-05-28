import { getTranslations } from 'next-intl/server';

const milestoneYears = ['2020.04', '2020.10', '2021.06', '2023.01', '2023.10'];

export async function generateMetadata() {
  const t = await getTranslations('AboutPage');
  return {
    title: t('metaTitle'),
    description: t('metaDesc'),
  };
}

export default async function AboutPage() {
  const t = await getTranslations('AboutPage');

  const milestones = [
    { year: milestoneYears[0], event: t('milestone1') },
    { year: milestoneYears[1], event: t('milestone2') },
    { year: milestoneYears[2], event: t('milestone3') },
    { year: milestoneYears[3], event: t('milestone4') },
    { year: milestoneYears[4], event: t('milestone5') },
  ];

  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-500 mb-5">{t('heroLabel')}</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5 leading-[1.15] whitespace-pre-line">
            {t('heroHeading')}
          </h1>
          <p className="text-gray-400 leading-7 max-w-2xl font-light">{t('heroDesc')}</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 space-y-24">

        {/* Company Introduction + Milestones */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-400 mb-4">{t('companyLabel')}</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-8">{t('companyHeading')}</h2>
            <div className="space-y-5 text-gray-500 text-sm leading-8 font-light">
              <p>
                {t.rich('company1', {
                  date1: () => <strong className="text-gray-900 font-semibold">{t('company1Date1')}</strong>,
                  brand: () => <strong className="text-gray-900 font-semibold">KAJKEY</strong>,
                  date2: () => <strong className="text-gray-900 font-semibold">{t('company1Date2')}</strong>,
                })}
              </p>
              <p>{t('company2')}</p>
              <p>
                {t.rich('company3', {
                  date1: () => <strong className="text-gray-900 font-semibold">{t('company3Date1')}</strong>,
                  date2: () => <strong className="text-gray-900 font-semibold">{t('company3Date2')}</strong>,
                })}
              </p>
            </div>
          </div>

          {/* Milestones */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-400 mb-4">{t('historyLabel')}</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-10">{t('historyHeading')}</h2>
            <div className="relative pl-5 border-l-2 border-gray-100 space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className="relative">
                  <div className={`absolute -left-[25px] w-3 h-3 rounded-full border-2 border-white shadow-sm ${i === milestones.length - 1 ? 'bg-gray-900' : 'bg-gray-300'}`} />
                  <p className="text-[11px] font-bold tracking-widest text-gray-400 mb-1.5 tabular-nums uppercase">{m.year}</p>
                  <p className="text-sm text-gray-700 leading-7">{m.event}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Address & Contact */}
        <section>
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-400 mb-4">{t('contactLabel')}</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-8">{t('contactHeading')}</h2>
          <div className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden max-w-2xl">
            {[
              {
                label: t('fieldAddress'),
                content: t('address'),
                icon: (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                href: undefined,
              },
              {
                label: t('fieldPhone'),
                content: '+86 151 7099 9770',
                icon: (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ),
                href: 'tel:+8615170999770',
              },
              {
                label: t('fieldEmail'),
                content: 'yangbin@longsheng-sz.com',
                icon: (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                href: 'mailto:yangbin@longsheng-sz.com',
              },
            ].map((item, i, arr) => (
              <div key={item.label} className={`flex items-start gap-4 px-6 py-5 ${i < arr.length - 1 ? 'border-b border-gray-100' : ''}`}>
                <div className="w-8 h-8 flex-shrink-0 bg-gray-100 text-gray-600 rounded-lg flex items-center justify-center mt-0.5">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-gray-400 mb-1">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm text-gray-900 hover:underline">{item.content}</a>
                  ) : (
                    <p className="text-sm text-gray-800">{item.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
