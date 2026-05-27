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
      <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-blue-300 text-sm font-semibold tracking-widest uppercase mb-4">About Us · 关于我们</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-5">深圳市泷晟商业<br />有限责任公司</h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
            成立于 2020 年，专注电子商务与国际贸易，旗下自有品牌 KAJKEY 已于 2023 年完成美国商标注册，
            产品覆盖户外应急、木工工具、海洋固件与工业精密配件四大领域。
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* Company Introduction */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">公司简介</h2>
            <div className="space-y-4 text-gray-600 text-sm leading-8">
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">发展历程</h2>
            <div className="relative pl-6 border-l-2 border-blue-100 space-y-8">
              {milestones.map((m) => (
                <div key={m.year} className="relative">
                  <div className="absolute -left-[29px] w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow" />
                  <p className="text-xs font-bold text-blue-500 mb-1">{m.year}</p>
                  <p className="text-sm text-gray-700 leading-6">{m.event}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Address & Contact */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">地址与联系方式</h2>
          <div className="bg-gray-50 rounded-2xl border border-gray-100 divide-y divide-gray-100">
            <div className="flex items-start gap-4 px-6 py-5">
              <div className="w-9 h-9 flex-shrink-0 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mt-0.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-medium text-gray-400 mb-1">地址</p>
                <p className="text-sm text-gray-800">深圳市南山区招商街道花果山社区工业六路4号兴华工业大厦7栋AB座415A-5</p>
              </div>
            </div>
            <div className="flex items-start gap-4 px-6 py-5">
              <div className="w-9 h-9 flex-shrink-0 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mt-0.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-medium text-gray-400 mb-1">电话</p>
                <p className="text-sm text-gray-800">+86 15170999770</p>
              </div>
            </div>
            <div className="flex items-start gap-4 px-6 py-5">
              <div className="w-9 h-9 flex-shrink-0 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mt-0.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-medium text-gray-400 mb-1">邮箱</p>
                <a href="mailto:yangbin@longsheng-sz.com" className="text-sm text-blue-600 hover:underline">yangbin@longsheng-sz.com</a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
