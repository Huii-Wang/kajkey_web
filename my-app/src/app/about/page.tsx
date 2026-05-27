export const metadata = {
  title: '关于我们 | 凯键五金',
  description: '了解凯键五金的公司背景、团队与联系方式。',
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">关于我们</h1>
        <p className="text-gray-500">了解凯键五金的发展历程与核心价值。</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">公司简介</h2>
          <div className="space-y-3 text-gray-500 text-sm leading-7">
            <p>内容待填写。</p>
            <p>请在此处描述公司背景、成立年份、服务范围等信息。</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">我们的优势</h2>
          <ul className="space-y-3">
            {['优势一：待填写', '优势二：待填写', '优势三：待填写', '优势四：待填写'].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-gray-500">
                <span className="mt-0.5 w-5 h-5 flex-shrink-0 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white rounded-xl border border-gray-200 p-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">联系我们</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { label: '电话', value: '待填写' },
            { label: '邮箱', value: '待填写' },
            { label: '地址', value: '待填写' },
          ].map((contact) => (
            <div key={contact.label} className="flex flex-col gap-1">
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">{contact.label}</span>
              <span className="text-gray-600 text-sm">{contact.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
