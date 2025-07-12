'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function BrowseItems() {
  // 🔧 Dummy item data – replace with real fetch/API call later
  const items = [
    {
      id: '1',
      title: 'Denim Jacket',
      condition: 'Good',
      size: 'M',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1eEWi_zPNrq5KlXXP3SXlIKKMWfpVVEsmNQ&s',
    },
    {
      id: '2',
      title: 'Red Hoodie',
      condition: 'Like New',
      size: 'L',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1eEWi_zPNrq5KlXXP3SXlIKKMWfpVVEsmNQ&s',
    },
    {
      id: '3',
      title: 'Boho Summer Dress',
      condition: 'Excellent',
      size: 'S',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1eEWi_zPNrq5KlXXP3SXlIKKMWfpVVEsmNQ&s',
    },
    {
      id: '4',
      title: 'Checkered Shirt',
      condition: 'Very Good',
      size: 'M',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1eEWi_zPNrq5KlXXP3SXlIKKMWfpVVEsmNQ&s',
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-red-600 mb-10">
          Browse Items
        </h1>

        {items.length === 0 ? (
          <p className="text-center text-gray-400">No items available for swap.</p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {items.map(item => (
              <div
                key={item.id}
                className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 shadow hover:shadow-red-600 transition-shadow"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-400">Condition: {item.condition}</p>
                  <p className="text-sm text-gray-400">Size: {item.size}</p>
                  <Link
                    href={`/item/${item.id}`}
                    className="inline-block text-sm text-red-500 hover:underline mt-2"
                  >
                    View Item →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
