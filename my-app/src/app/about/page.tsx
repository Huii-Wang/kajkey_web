export const metadata = {
  title: '关于我们 | 凯键',
  description: '深圳市泷晟商业有限责任公司，KAJKEY 品牌运营方，专注精品工具与配件的贸易与电子商务。',
};

const milestones = [
  { year: '2020.04', event: 'KAJKEY 品牌正式投入商业运营，首批产品上线' },
  { year: '2020.10', event: '深圳市泷晟商业有限责任公司正式注册成立' },
  { year: '2021.06', event: '向美国专利商标局（USPTO）提交 KAJKEY 商标申请' },
  { year: '2023.01', event: 'KAJKEY 商标正式获得 USPTO 注册，注册号 6960021' },
  { year: '2023.10', event: '正式入驻亚马逊平台，开展跨境电商运营' },
];

export default function AboutPage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '48px 48px' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-gray-400 text-xs font-semibold tracking-widest uppercase mb-4">About Us</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-5 leading-tight">
            深圳市泷晟商业<br />有限责任公司
          </h1>
          <p className="text-slate-300 leading-relaxed max-w-2xl">
            成立于 2020 年，专注电子商务与国际贸易，旗下自有品牌 KAJKEY 已于 2023 年完成美国商标注册，
            产品覆盖户外应急、木工工具、海洋固件与工业精密配件四大领域。
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* Company Introduction + Milestones */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-4">Company</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">公司简介</h2>
            <div className="space-y-5 text-gray-600 text-sm leading-8">
              <p>
                <strong className="text-gray-900">2020 年 4 月</strong>，自有品牌
                <strong className="text-gray-900"> KAJKEY </strong>
                正式投入商业运营，首批产品上线销售。同年 <strong className="text-gray-900">10 月</strong>，
                深圳市泷晟商业有限责任公司（Shenzhen Longsheng Commercial Co., Ltd.）在深圳市场监督管理局正式注册成立，
                为品牌的持续发展提供完整的主体支撑。
              </p>
              <p>
                公司主营电子商务、国内贸易及商品批发零售，经营范围涵盖日用百货、家居用品、工具配件等多品类商品的销售与贸易代理。
                依托深圳完善的供应链与物流体系，持续拓展国内外市场，为终端消费者与企业采购方提供优质产品与服务。
              </p>
              <p>
                KAJKEY 已于 <strong className="text-gray-900">2023 年 1 月</strong>取得美国专利商标局（USPTO）正式注册，
                注册号 6960021，并于同年 10 月正式入驻亚马逊平台开展跨境电商运营，
                以"精选材质、专业品控、场景适配"的理念持续赢得海内外用户信赖。
              </p>
            </div>
          </div>

          {/* Milestones */}
          <div>
            <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-4">History</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">发展历程</h2>
            <div className="relative pl-5 border-l-2 border-gray-100 space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className="relative">
                  <div className={`absolute -left-[25px] w-3 h-3 rounded-full border-2 border-white shadow-sm ${i === milestones.length - 1 ? 'bg-gray-900' : 'bg-gray-300'}`} />
                  <p className="text-xs font-bold text-gray-500 mb-1 tabular-nums">{m.year}</p>
                  <p className="text-sm text-gray-700 leading-6">{m.event}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Address & Contact */}
        <section>
          <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-4">Contact</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">地址与联系方式</h2>
          <div className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden max-w-2xl">
            {[
              {
                label: '地址',
                content: '深圳市南山区招商街道花果山社区工业六路4号兴华工业大厦7栋AB座415A-5',
                icon: (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                href: undefined,
              },
              {
                label: '电话',
                content: '+86 15170999770',
                icon: (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ),
                href: 'tel:+8615170999770',
              },
              {
                label: '邮箱',
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
                  <p className="text-xs font-medium text-gray-400 mb-1">{item.label}</p>
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
