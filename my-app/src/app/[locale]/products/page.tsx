import { getTranslations } from 'next-intl/server';
import ProductCard from '@/components/ProductCard';

const products = [
  { id: 1, name: 'Disposable Emergency Rain Poncho Balls', subtitle: 'Set of 4 – Outdoor Portable Hooded Raincoat', image: '/images/products/61vVTiXCAXL._AC_SX679_.jpg', slug: 'rain-poncho', tagKey: 'outdoor' as const },
  { id: 2, name: 'Carbide Straight Router Cutter Bits', subtitle: '7 Pcs – 6mm Shank, 3/4/5/6/8/10/12 mm', image: '/images/products/615f0E9onmL._AC_SL1500_.jpg', slug: 'router-cutter-straight', tagKey: 'woodworking' as const },
  { id: 3, name: 'Canvas Press Stud Snap Fastener Set', subtitle: '62 Sets – Stainless Steel with 2 Fixing Tools', image: '/images/products/617-RhJnlJL._AC_SL1000_.jpg', slug: 'press-stud-canvas', tagKey: 'marine' as const },
  { id: 4, name: 'Carbide Round Nose Cove Milling Cutter Set', subtitle: '5 Pcs – 6mm Shank, 6/8/10/12/18 mm', image: '/images/products/51suDW10pvL._SL1000_.jpg', slug: 'router-cutter-round', tagKey: 'woodworking' as const },
  { id: 5, name: 'Screw Press Stud Button Set', subtitle: '150 Pcs / 50 Sets – 15mm, Marine Grade Stainless Steel', image: '/images/products/815o0UUBH5L._AC_SL1500_.jpg', slug: 'press-stud-screw', tagKey: 'marine' as const },
  { id: 6, name: 'LPG Gas Conversion Nozzle Set', subtitle: '12 Pcs – Brass, for Stove / Grill / Propane', image: '/images/products/5112I2QZ0dL._AC_SL1200_.jpg', slug: 'lpg-nozzle', tagKey: 'industrial' as const },
];

export async function generateMetadata() {
  const t = await getTranslations('ProductsPage');
  return {
    title: t('metaTitle'),
    description: t('metaDesc'),
  };
}

export default async function ProductsPage() {
  const t = await getTranslations('ProductsPage');
  const tTags = await getTranslations('Tags');

  const translatedProducts = products.map((p) => ({
    ...p,
    tag: tTags(p.tagKey),
  }));

  return (
    <div className="bg-white">

      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-400 mb-4">{t('label')}</p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-3">{t('heading')}</h1>
          <p className="text-gray-400 text-sm font-light">{t('summary', { count: products.length })}</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {translatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

    </div>
  );
}
