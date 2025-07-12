"use client";
import Image from "next/image";

export default function ItemDetailPage() {
  // Dummy item data
  const item = {
    title: "Red Cotton Hoodie",
    condition: "Like New",
    size: "L",
    category: "Men",
    type: "Hoodie",
    description:
      "Warm and stylish red cotton hoodie, worn only twice. Perfect for winter layering.",
    tags: ["winter", "hoodie", "red"],
    uploader: {
      name: "Tanmay Gupta",
      email: "tanmay@example.com",
    },
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1eEWi_zPNrq5KlXXP3SXlIKKMWfpVVEsmNQ&s",
    isAvailable: true,
    redeemPoints: 30,
  };

  // Example user coin balance
  const userCoins = 20; // Change this value to test

  const hasEnoughCoins = userCoins >= item.redeemPoints;

  return (
    <main className="min-h-screen bg-black text-white px-4 py-10">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Item Image */}
        <div className="relative w-full h-80 rounded-lg overflow-hidden shadow border border-gray-700">
          <div className="relative w-full h-80 rounded-lg overflow-hidden shadow border-4 border-red-600">
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Item Details */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-red-600">{item.title}</h1>
          <p className="text-gray-300">{item.description}</p>

          <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
            <p>
              <strong>Category:</strong> {item.category}
            </p>
            <p>
              <strong>Type:</strong> {item.type}
            </p>
            <p>
              <strong>Size:</strong> {item.size}
            </p>
            <p>
              <strong>Condition:</strong> {item.condition}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              <span
                className={item.isAvailable ? "text-green-400" : "text-red-500"}
              >
                {item.isAvailable ? "Available" : "Unavailable"}
              </span>
            </p>
            <p>
              <strong>Redeem Points:</strong> {item.redeemPoints}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-red-700 px-2 py-1 rounded-full text-white"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Uploader Info */}
          <div className="mt-6 text-sm text-gray-400 border-t border-gray-700 pt-4">
            <p>
              <strong>Uploaded by:</strong> {item.uploader.name}
            </p>
            <p>
              <strong>Contact:</strong> {item.uploader.email}
            </p>
          </div>

          {/* Actions */}
          {item.isAvailable && (
            <div className="flex flex-wrap gap-4 mt-6">
              <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded text-white transition-colors">
                Request Swap
              </button>
              {hasEnoughCoins ? (
                <button className="border border-red-600 hover:bg-red-700 hover:text-white px-6 py-2 rounded text-red-500 transition-colors">
                  Redeem via Points
                </button>
              ) : (
                <span className="px-6 py-2 rounded text-red-400 border border-red-600 bg-gray-900">
                  Purchase coins
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
