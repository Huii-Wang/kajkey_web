export const metadata = {
  title: '品牌 | 凯键',
  description: 'KAJKEY 品牌介绍——美国注册商标，深圳市泷晟商业有限责任公司旗下精品工具与配件品牌。',
};

const coverage = [
  { icon: '🌧️', area: '户外应急', desc: '轻便便携的应急防雨装备，适用于徒步、露营等户外场景' },
  { icon: '🪵', area: '木工工具', desc: '硬质合金铣刀套装，满足直槽、圆鼻等多种切削需求' },
  { icon: '⚓', area: '海洋固件', desc: '304 不锈钢按扣与螺钉扣件，耐盐水腐蚀，适用船舶与帆布' },
  { icon: '🔩', area: '工业配件', desc: '精密黄铜 LPG 气嘴，兼容灶具、烤架及丙烷设备转换' },
];

export default function BrandsPage() {
  return (
    <div className="bg-white">

      {/* Brand Hero */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <div className="flex-shrink-0 w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-xl">
              <span className="text-xl font-black text-slate-900 tracking-wider">KAJKEY</span>
            </div>
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-semibold bg-white/10 text-gray-200 border border-white/15 px-3 py-1 rounded-full">
                  美国注册商标
                </span>
                <span className="text-xs font-semibold bg-white/5 text-slate-300 border border-white/10 px-3 py-1 rounded-full">
                  Reg. No. 6960021
                </span>
                <span className="text-xs font-semibold bg-white/5 text-slate-300 border border-white/10 px-3 py-1 rounded-full">
                  自 2020 年
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-3">KAJKEY</h1>
              <p className="text-slate-300 leading-relaxed max-w-xl">
                精品工具与配件品牌，由深圳市泷晟商业有限责任公司创立并运营，
                产品覆盖户外应急、木工工具、海洋固件与工业精密配件。
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* Brand Story */}
        <section className="max-w-3xl">
          <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-4">Brand Story</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">品牌简介</h2>
          <div className="space-y-5 text-gray-600 text-sm leading-8">
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
        </section>

        {/* Product Coverage */}
        <section>
          <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-4">Coverage</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">产品覆盖</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {coverage.map((item) => (
              <div key={item.area} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">{item.area}</h3>
                <p className="text-xs text-gray-500 leading-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
