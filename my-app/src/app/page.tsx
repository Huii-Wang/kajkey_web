import Image from 'next/image';
import Link from 'next/link';

const values = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: '品质为本',
    desc: '硬质合金刀具、304 级海洋不锈钢、精密黄铜铸件——每件产品的材质选择都经过严苛把关，确保在最苛刻的使用场景中依然稳定可靠。',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '覆盖全场景',
    desc: '从山野户外的应急防雨，到木工工坊的精密切削；从船舶帆布的耐候扣件，到燃气设备的精密喷嘴——凯键一站式满足专业与日常的多元需求。',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: '以客为先',
    desc: '深入理解采购方的实际痛点，提供精准匹配的产品组合与专业选型建议，让每一次合作都高效、省心、有保障。',
  },
];

const featuredProducts = [
  {
    name: 'Carbide Straight Router Cutter Bits',
    tag: '木工精密工具',
    image: '/images/products/615f0E9onmL._AC_SL1500_.jpg',
  },
  {
    name: 'Canvas Press Stud Snap Fastener Set',
    tag: '船舶 · 帆布固定',
    image: '/images/products/617-RhJnlJL._AC_SL1000_.jpg',
  },
  {
    name: 'LPG Gas Conversion Nozzle Set',
    tag: '燃气精密配件',
    image: '/images/products/5112I2QZ0dL._AC_SL1200_.jpg',
  },
  {
    name: 'Disposable Emergency Rain Poncho Balls',
    tag: '户外应急装备',
    image: '/images/products/61vVTiXCAXL._AC_SX679_.jpg',
  },
];

export default function HomePage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 text-white">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 80% 20%, #1d4ed8 0%, transparent 40%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36">
          <div className="max-w-3xl">
            <p className="text-blue-300 text-sm font-semibold tracking-widest uppercase mb-5">
              Kajkey · 精品工具与配件
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-7">
              精选工具与配件，<br />
              <span className="text-blue-400">覆盖每一个场景</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-8 max-w-xl mb-10">
              从户外应急到精密木工，从船舶固件到燃气配件——
              凯键以严选材质与专业品控，为工匠、采购方与终端用户提供可信赖的工具与配件解决方案。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-3.5 rounded-full transition-colors"
              >
                浏览产品
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center border border-white/20 hover:border-white/50 text-white font-semibold px-8 py-3.5 rounded-full transition-colors"
              >
                了解我们
              </Link>
            </div>
          </div>
        </div>
      </section>



      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">我们的核心价值观</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              凯键以"品质、覆盖、服务"三位一体的理念，持续为客户创造实用价值。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-5">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-7">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">精选产品</h2>
              <p className="text-gray-500">横跨户外、木工、海洋、工业四大领域</p>
            </div>
            <Link href="/products" className="hidden sm:inline-flex items-center gap-1 text-blue-600 font-medium text-sm hover:text-blue-800 transition-colors">
              查看全部
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredProducts.map((p) => (
              <Link href="/products" key={p.name}
                className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="relative aspect-square overflow-hidden bg-white">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-contain p-5 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <span className="inline-block text-xs font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full mb-2">
                    {p.tag}
                  </span>
                  <p className="text-xs text-gray-600 font-medium leading-snug line-clamp-2">{p.name}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 sm:hidden text-center">
            <Link href="/products" className="inline-flex items-center gap-1 text-blue-600 font-medium text-sm">
              查看全部产品 →
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <svg className="w-8 h-8 text-blue-400 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="text-2xl sm:text-3xl font-light leading-relaxed text-slate-200 mb-8">
            "无论是深山雨夜的一件雨衣，还是工坊里精准走刀的一把铣刀，
            凯键相信——<span className="text-blue-400 font-semibold">好工具，是完成好工作的开始。</span>"
          </blockquote>
          <p className="text-slate-400 text-sm">— 凯键 · 企业使命</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">准备好开始合作了吗？</h2>
          <p className="text-gray-500 mb-8 leading-7">
            无论您是分销商、工厂采购还是个人用户，凯键都能为您提供合适的产品与专业的支持。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-full transition-colors"
            >
              浏览产品目录
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-8 py-3.5 rounded-full transition-colors"
            >
              联系我们
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
