import Link from 'next/link';

const navLinks = [
  { href: '/', label: '首页' },
  { href: '/products', label: '产品' },
  { href: '/brands', label: '品牌' },
  { href: '/about', label: '关于我们' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">

          <div className="sm:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-gray-900 text-xs font-black">KJ</span>
              </div>
              <div className="leading-none">
                <p className="text-white text-sm font-bold">凯键五金</p>
                <p className="text-slate-500 text-[10px] tracking-widest uppercase mt-0.5">KAJKEY</p>
              </div>
            </div>
            <p className="text-sm leading-7 text-slate-400 max-w-xs">
              精品工具与配件供应商，覆盖户外应急、木工、海洋及工业应用场景。
            </p>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-5">快速导航</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-5">联系我们</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+8615170999770" className="text-slate-400 hover:text-white transition-colors">
                  +86 151 7099 9770
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:yangbin@longsheng-sz.com" className="text-slate-400 hover:text-white transition-colors break-all">
                  yangbin@longsheng-sz.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="leading-6">深圳市南山区招商街道花果山社区<br />工业六路4号兴华工业大厦<br />7栋AB座415A-5</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} 深圳市泷晟商业有限责任公司 · 凯键五金. 保留所有权利。</p>
          <p>KAJKEY® · USPTO Reg. No. 6960021</p>
        </div>
      </div>
    </footer>
  );
}
