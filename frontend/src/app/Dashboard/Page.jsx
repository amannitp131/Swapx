"use client";

import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  // 🧪 Dummy user and item data (replace with real data later)
  const user = {
    name: "Jai Kumar",
    email: "jai@example.com",
    role: "user",
    points: 120,
  };

  const listedItems = [
    {
      id: "1",
      title: "Denim Jacket",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1eEWi_zPNrq5KlXXP3SXlIKKMWfpVVEsmNQ&s",
      condition: "Good",
    },
    {
      id: "2",
      title: "Red Hoodie",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1eEWi_zPNrq5KlXXP3SXlIKKMWfpVVEsmNQ&s",
      condition: "Like New",
    },
  ];

  const ongoingSwaps = [
    { id: "swp1", item: "Summer Dress", status: "Awaiting Confirmation" },
  ];

  const completedSwaps = [
    { id: "swp2", item: "Vintage Shirt", status: "Completed" },
  ];

  return (
    <main className="min-h-screen bg-black text-white py-10 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Profile */}
        <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-xl p-8 shadow-lg border border-red-600 flex flex-col sm:flex-row items-center gap-8 mb-8">
            <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-red-600 shadow-lg bg-gray-700 flex items-center justify-center">
                    <Image
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1eEWi_zPNrq5KlXXP3SXlIKKMWfpVVEsmNQ&s"
                        alt={user.name}
                        width={96}
                        height={96}
                        className="object-cover"
                    />
                </div>
            </div>
            <div className="flex-1">
                <h2 className="text-2xl font-extrabold text-red-600 mb-2">
                    Welcome, {user.name}!
                </h2>
                <div className="grid grid-cols-2 gap-4 text-lg">
                    <div>
                        <span className="font-semibold text-gray-300">Email:</span>
                        <span className="ml-2 text-white">{user.email}</span>
                    </div>
                    <div>
                        <span className="font-semibold text-gray-300">Role:</span>
                        <span className="ml-2 text-white capitalize">{user.role}</span>
                    </div>
                    <div>
                        <span className="font-semibold text-gray-300">Points:</span>
                        <span className="ml-2 text-yellow-400 font-bold">
                            {user.points}
                        </span>
                    </div>
                    <div>
                        <Link href="/profile/edit">
                            <span className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow transition-all cursor-pointer">
                                Edit Profile
                            </span>
                        </Link>
                    </div>
                </div>
                {/* Back to Home Button */}
                <div className="mt-6">
                    <Link href="/">
                        <span className="inline-block bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg shadow transition-all cursor-pointer">
                            ← Back to Home
                        </span>
                    </Link>
                </div>
            </div>
        </section>
        <section>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-red-600">
                    Your Listed Items
                </h2>
                <Link href="/add-item">
                    <span className="bg-red-600 hover:bg-red-700 px-4 py-2 text-sm rounded text-white">
                        + Add New Item
                    </span>
                </Link>
            </div>
            {listedItems.length === 0 ? (
                <p className="text-gray-400">You haven't listed any items yet.</p>
            ) : (
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {listedItems.map((item) => (
                        <div
                            key={item.id}
                            className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden"
                        >
                            <div className="relative h-40 w-full">
                                <Image
                                    src={item.imageUrl}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold">{item.title}</h3>
                                <p className="text-sm text-gray-400">
                                    Condition: {item.condition}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
        <section>
          <h2 className="text-xl font-bold text-red-600 mb-3">Ongoing Swaps</h2>
          {ongoingSwaps.length === 0 ? (
            <p className="text-gray-400">No ongoing swaps.</p>
          ) : (
            <ul className="space-y-2">
              {ongoingSwaps.map((swap) => (
                <li
                  key={swap.id}
                  className="bg-gray-800 px-4 py-2 rounded border border-gray-700"
                >
                  {swap.item} —{" "}
                  <span className="text-yellow-400">{swap.status}</span>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Completed Swaps */}
        <section>
          <h2 className="text-xl font-bold text-red-600 mb-3">
            Completed Swaps
          </h2>
          {completedSwaps.length === 0 ? (
            <p className="text-gray-400">
              You haven't completed any swaps yet.
            </p>
          ) : (
            <ul className="space-y-2">
              {completedSwaps.map((swap) => (
                <li
                  key={swap.id}
                  className="bg-gray-800 px-4 py-2 rounded border border-gray-700"
                >
                  {swap.item} —{" "}
                  <span className="text-green-400">{swap.status}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}
