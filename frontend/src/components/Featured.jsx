'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Featured() {
    const featuredItems = [
  {
    id: '1',
    title: 'Vintage Denim Jacket',
    condition: 'Good',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1eEWi_zPNrq5KlXXP3SXlIKKMWfpVVEsmNQ&s',
  },
  {
    id: '2',
    title: 'Red Cotton Hoodie',
    condition: 'Like New',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1eEWi_zPNrq5KlXXP3SXlIKKMWfpVVEsmNQ&s',
  },
  {
    id: '3',
    title: 'Boho Summer Dress',
    condition: 'Excellent',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1eEWi_zPNrq5KlXXP3SXlIKKMWfpVVEsmNQ&s',
  },
  {
    id: '4',
    title: 'Casual Checked Shirt',
    condition: 'Very Good',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1eEWi_zPNrq5KlXXP3SXlIKKMWfpVVEsmNQ&s',
  },
];

  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-red-600">
          Featured Items
        </h2>

        {featuredItems.length === 0 ? (
          <p className="text-center text-gray-400">No featured items available.</p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {featuredItems.map(item => (
              <div
                key={item.id}
                className="bg-gray-900 rounded-lg overflow-hidden shadow hover:shadow-red-600 transition-shadow"
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
                  <Link
                    href={`/item/${item.id}`}
                    className="inline-block mt-2 text-sm text-red-500 hover:underline"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
