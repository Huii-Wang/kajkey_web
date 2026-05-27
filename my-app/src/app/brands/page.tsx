export const metadata = {
  title: '品牌 | 凯键',
  description: 'KAJKEY 品牌介绍——美国注册商标，深圳市泷晟商业有限责任公司旗下精品工具与配件品牌。',
};

export default function BrandsPage() {
  return (
    <div className="bg-white">

      {/* Brand Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col sm:flex-row items-center gap-12">
          <div className="flex-shrink-0 w-36 h-36 bg-white rounded-2xl flex items-center justify-center shadow-xl">
            <span className="text-3xl font-black text-slate-900 tracking-wider">KAJKEY</span>
          </div>
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs font-semibold bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">
                美国注册商标
              </span>
              <span className="text-xs font-semibold bg-white/10 text-slate-300 px-3 py-1 rounded-full">
                Reg. No. 6960021
              </span>
              <span className="text-xs font-semibold bg-white/10 text-slate-300 px-3 py-1 rounded-full">
                自 2020 年
              </span>
            </div>
            <h1 className="text-4xl font-bold mb-3">KAJKEY</h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
              精品工具与配件品牌，由深圳市泷晟商业有限责任公司创立并运营，
              产品覆盖户外应急、木工工具、海洋固件与工业精密配件。
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* Brand Story */}
        <section>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-5">品牌简介</h2>
            <div className="space-y-4 text-gray-600 text-sm leading-8">
              <p>
                KAJKEY 由深圳市泷晟商业有限责任公司创立，总部位于深圳市南山区。品牌自
                <strong className="text-gray-900"> 2020 年 4 月</strong>起正式投入商业运营，
                并于 <strong className="text-gray-900">2023 年 1 月</strong>完成美国专利商标局（USPTO）商标注册，
                注册号 6960021，在美国市场享有正式品牌保护。
              </p>
              <p>
                KAJKEY 的选品逻辑以"实用、精准、耐久"为核心——无论是户外突发状况下的应急防雨装备，
                还是木工工坊中对切削精度的严苛要求，或是船舶、帆布场景下需要长期承受腐蚀与拉力的固定件，
                KAJKEY 均以严格的材质标准与品质把关，提供可信赖的解决方案。
              </p>
              <p>
                品牌旗下产品采用硬质合金（Carbide）、海洋级 304 不锈钢及精密黄铜等高性能材料，
                确保在最苛刻的使用条件下依然稳定可靠。
              </p>
            </div>
          </div>
        </section>

        {/* Product Range */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">产品覆盖</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {[
              { icon: '🌧️', area: '户外应急', desc: '轻便便携的应急防雨装备，适用于徒步、露营等户外场景' },
              { icon: '🪵', area: '木工工具', desc: '硬质合金铣刀套装，满足直槽、圆鼻等多种切削需求' },
              { icon: '⚓', area: '海洋固件', desc: '304 不锈钢按扣与螺钉扣件，耐盐水腐蚀，适用船舶与帆布' },
              { icon: '🔩', area: '工业配件', desc: '精密黄铜 LPG 气嘴，兼容灶具、烤架及丙烷设备转换' },
            ].map((item) => (
              <div key={item.area} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.area}</h3>
                <p className="text-xs text-gray-500 leading-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
