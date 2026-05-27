export const metadata = {
  title: '品牌 | 凯键五金',
  description: '凯键五金代理品牌一览，正品授权，品质保障。',
};

export default function BrandsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">合作品牌</h1>
        <p className="text-gray-500">我们与多个知名品牌建立正式合作关系，为您提供正品保障。</p>
      </div>

      {/* Placeholder brand grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col items-center justify-center aspect-video hover:shadow-md transition-shadow"
          >
            <div className="w-16 h-8 bg-gray-100 rounded mb-2" />
            <span className="text-xs text-gray-400">品牌 {i + 1}</span>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 rounded-xl p-8 text-center">
        <h2 className="text-lg font-semibold text-blue-900 mb-2">品牌内容即将上线</h2>
        <p className="text-sm text-blue-700">更多品牌信息正在整理中，敬请期待。</p>
      </div>
    </div>
  );
}
