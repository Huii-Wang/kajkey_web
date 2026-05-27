export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-3">凯键五金</h3>
            <p className="text-sm leading-6">精品工具与配件供应商，覆盖户外、木工、海洋及工业应用场景。</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">快速导航</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white transition-colors">首页</a></li>
              <li><a href="/products" className="hover:text-white transition-colors">产品</a></li>
              <li><a href="/brands" className="hover:text-white transition-colors">品牌</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">关于我们</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">联系我们</h3>
            <ul className="space-y-2 text-sm">
              <li>电话：待填写</li>
              <li>邮箱：待填写</li>
              <li>地址：待填写</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-xs">
          © {new Date().getFullYear()} 凯键五金. 保留所有权利。
        </div>
      </div>
    </footer>
  );
}
