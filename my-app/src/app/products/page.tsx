import ProductCard from '@/components/ProductCard';

export const metadata = {
  title: '产品 | 凯键五金',
  description: '凯键产品目录，涵盖户外应急、木工工具、固定配件及工业精密配件。',
};

const products = [
  {
    id: 1,
    name: 'Disposable Emergency Rain Poncho Balls',
    subtitle: 'Set of 4 – Outdoor Portable Hooded Raincoat',
    image: '/images/products/61vVTiXCAXL._AC_SX679_.jpg',
    slug: 'rain-poncho',
  },
  {
    id: 2,
    name: 'Carbide Straight Router Cutter Bits',
    subtitle: '7 Pcs – 6mm Shank, 3/4/5/6/8/10/12 mm',
    image: '/images/products/615f0E9onmL._AC_SL1500_.jpg',
    slug: 'router-cutter-straight',
  },
  {
    id: 3,
    name: 'Canvas Press Stud Snap Fastener Set',
    subtitle: '62 Sets – Stainless Steel with 2 Fixing Tools',
    image: '/images/products/617-RhJnlJL._AC_SL1000_.jpg',
    slug: 'press-stud-canvas',
  },
  {
    id: 4,
    name: 'Carbide Round Nose Cove Milling Cutter Set',
    subtitle: '5 Pcs – 6mm Shank, 6/8/10/12/18 mm',
    image: '/images/products/51suDW10pvL._SL1000_.jpg',
    slug: 'router-cutter-round',
  },
  {
    id: 5,
    name: 'Screw Press Stud Button Set',
    subtitle: '150 Pcs / 50 Sets – 15mm, Marine Grade Stainless Steel',
    image: '/images/products/815o0UUBH5L._AC_SL1500_.jpg',
    slug: 'press-stud-screw',
  },
  {
    id: 6,
    name: 'LPG Gas Conversion Nozzle Set',
    subtitle: '12 Pcs – Brass, for Stove / Grill / Propane',
    image: '/images/products/5112I2QZ0dL._AC_SL1200_.jpg',
    slug: 'lpg-nozzle',
  },
];

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">产品中心</h1>
        <p className="text-gray-500">共 {products.length} 款产品</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
