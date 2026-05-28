'use client';

import Image from 'next/image';
import { useState } from 'react';

type Product = {
  id: number;
  name: string;
  subtitle: string;
  image: string;
  slug: string;
  tag?: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-gray-300 hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-square bg-gray-50 overflow-hidden">
        {imgError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-200 gap-2">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-xs text-gray-300">图片待上传</span>
          </div>
        ) : (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-4 group-hover:scale-[1.06] transition-transform duration-300"
            onError={() => setImgError(true)}
          />
        )}
      </div>
      <div className="px-4 py-4 border-t border-gray-50">
        {product.tag && (
          <span className="inline-block text-[10px] font-semibold tracking-[0.12em] uppercase text-gray-400 mb-2">
            {product.tag}
          </span>
        )}
        <h3 className="text-sm font-medium text-gray-900 leading-snug mb-1 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-[12px] text-gray-400 leading-5 font-light">{product.subtitle}</p>
      </div>
    </div>
  );
}
