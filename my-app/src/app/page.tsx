import Image from 'next/image';
import Link from 'next/link';

const values = [
  {
    title: '品质为本',
    desc: '硬质合金刀具、304 级海洋不锈钢、精密黄铜铸件——每件产品的材质选择都经过严苛把关，确保在最苛刻的使用场景中依然稳定可靠。',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: '覆盖全场景',
    desc: '从山野户外的应急防雨，到木工工坊的精密切削；从船舶帆布的耐候扣件，到燃气设备的精密喷嘴——凯键一站式满足专业与日常的多元需求。',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: '以客为先',
    desc: '深入理解采购方的实际痛点，提供精准匹配的产品组合与专业选型建议，让每一次合作都高效、省心、有保障。',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const featuredProducts = [
  { name: 'Carbide Straight Router Cutter Bits', tag: '木工精密工具', image: '/images/products/615f0E9onmL._AC_SL1500_.jpg' },
  { name: 'Canvas Press Stud Snap Fastener Set', tag: '船舶 · 帆布固定', image: '/images/products/617-RhJnlJL._AC_SL1000_.jpg' },
  { name: 'LPG Gas Conversion Nozzle Set', tag: '燃气精密配件', image: '/images/products/5112I2QZ0dL._AC_SL1200_.jpg' },
  { name: 'Disposable Emergency Rain Poncho Balls', tag: '户外应急装备', image: '/images/products/61vVTiXCAXL._AC_SX679_.jpg' },
];

export default function HomePage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '48px 48px' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
              <span className="text-gray-300 text-xs font-semibold tracking-widest uppercase">KAJKEY · 精品工具与配件</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight mb-6">
              精选工具与配件，<br />
              <span className="text-gray-300">覆盖每一个场景</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-8 mb-10">
              从户外应急到精密木工，从船舶固件到燃气配件——凯键以严选材质与专业品控，
              为工匠、采购方与终端用户提供可信赖的解决方案。
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/products"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 hover:bg-gray-100 font-semibold px-7 py-3 rounded-xl transition-colors text-sm"
              >
                浏览产品
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/about"
                className="inline-flex items-center justify-center border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold px-7 py-3 rounded-xl transition-colors text-sm"
              >
                了解我们
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-gray-700">
            {[
              { num: '2020', label: '品牌创立' },
              { num: '6+', label: '精选产品' },
              { num: 'USPTO', label: '美国注册商标' },
            ].map((s) => (
              <div key={s.label} className="py-5 text-center">
                <p className="text-xl sm:text-2xl font-bold">{s.num}</p>
                <p className="text-gray-400 text-xs mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-12">
            <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-3">核心价值观</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">我们为什么与众不同</h2>
            <p className="text-gray-500 text-sm leading-7">
              凯键以"品质、覆盖、服务"三位一体的理念，持续为客户创造实用价值。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-gray-900 text-white rounded-xl flex items-center justify-center mb-5">
                  {v.icon}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-7">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-3">精选产品</p>
              <h2 className="text-3xl font-bold text-gray-900">横跨四大应用领域</h2>
            </div>
            <Link href="/products" className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
              查看全部
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredProducts.map((p) => (
              <Link href="/products" key={p.name}
                className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden bg-white">
                  <Image src={p.image} alt={p.name} fill
                    className="object-contain p-4 group-hover:scale-[1.06] transition-transform duration-300"
                  />
                </div>
                <div className="px-4 py-3">
                  <span className="inline-block text-[11px] font-semibold text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full mb-2">
                    {p.tag}
                  </span>
                  <p className="text-xs text-gray-700 font-medium leading-snug line-clamp-2">{p.name}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 sm:hidden text-center">
            <Link href="/products" className="text-sm font-medium text-gray-700">查看全部产品 →</Link>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '48px 48px' }}
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mx-auto mb-8">
            <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <blockquote className="text-xl sm:text-2xl font-light leading-relaxed text-slate-200 mb-6">
            "无论是深山雨夜的一件雨衣，还是工坊里精准走刀的一把铣刀，
            凯键相信——<span className="text-white font-semibold">好工具，是完成好工作的开始。</span>"
          </blockquote>
          <p className="text-slate-500 text-sm">— 凯键 · 企业使命</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-3xl px-8 py-12 sm:py-14 text-center text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">准备好开始合作了吗？</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-7">
              无论您是分销商、工厂采购还是个人用户，凯键都能为您提供合适的产品与专业的支持。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/products"
                className="inline-flex items-center justify-center bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-3 rounded-xl transition-colors text-sm"
              >
                浏览产品目录
              </Link>
              <Link href="/about"
                className="inline-flex items-center justify-center border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-semibold px-8 py-3 rounded-xl transition-colors text-sm"
              >
                联系我们
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
