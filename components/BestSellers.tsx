"use client";

import { useGetBestSellersQuery } from "@/redux/services/api";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, Star } from "lucide-react";

const BestSellers = () => {
  const {
    data: products = [],
    isLoading,
    isError,
  } = useGetBestSellersQuery(undefined);

  if (isLoading) {
    return (
      <section className="px-6 py-10">
        <div className="flex justify-center">Loading best sellers...</div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="px-6 py-10">
        <p className="text-center text-red-500">Failed to load best sellers.</p>
      </section>
    );
  }

  return (
    <section className="px-6 py-10">
      <div className="mb-5 flex items-center">
        <div className="flex-1" />

        <div className="text-center">
          <h2 className="text-xl font-semibold tracking-wide">BEST SELLERS</h2>

          <div className="mt-1 flex items-center justify-center gap-2">
            <span className="h-px w-10 bg-orange-300" />

            <Heart size={14} className="fill-orange-500 text-orange-500" />

            <span className="h-px w-10 bg-orange-300" />
          </div>
        </div>

        <div className="flex-1 text-right">
          <Link href="/products" className="text-sm font-semibold text-red-900">
            VIEW ALL →
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="overflow-hidden rounded-md border bg-white"
          >
            <div className="relative aspect-square bg-[#f8eee7]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />

              <button
                type="button"
                aria-label={`Add ${product.name} to wishlist`}
                className="absolute right-2 top-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white shadow-sm transition hover:scale-105"
              >
                <Heart
                  size={18}
                  strokeWidth={1.8}
                  className="text-gray-700 transition hover:fill-red-500 hover:text-red-500"
                />
              </button>
            </div>

            <div className="p-3">
              <h3 className="truncate text-sm font-medium">{product.name}</h3>

              <div className="mt-2 flex items-center gap-1">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={14}
                      strokeWidth={1.5}
                      className={
                        star <= Math.round(product.rating)
                          ? "fill-orange-500 text-orange-500"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>

                <span className="text-xs text-gray-600">
                  ({product.reviewCount})
                </span>
              </div>

              <p className="mt-2 text-base font-bold">
                ₹{product.price.toLocaleString("en-IN")}
              </p>

              <Link
                href="/cart"
                aria-label={`Add ${product.name} to cart`}
                className="mt-3 flex w-full cursor-pointer items-center justify-center gap-2 rounded border py-2 text-sm font-medium transition hover:bg-gray-50"
              >
                <ShoppingCart size={16} strokeWidth={1.8} />
                ADD TO CART
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
