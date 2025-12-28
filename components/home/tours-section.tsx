import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Heart, Plus, ArrowRight } from "lucide-react";
import { fetchTouristStates } from "../../lib/api/TourApi";

const ToursSection = () => {
  const [tours, setTours] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    async function loadTours() {
      try {
        const data = await fetchTouristStates();
        // Map API data to UI format
        const mapped = Array.isArray(data)
          ? data.map((item, idx) => ({
              id: item.id || idx,
              image: "/assets/images/tours/default.jpg",
              title: item.state || "Unknown State",
              description: "No description available.",
              days: "N/A",
              price: "N/A",
              href: "/tour-details",
            }))
          : [];
        setTours(mapped);
      } catch (error) {
        console.error("Failed to fetch tours:", error);
      } finally {
        setLoading(false);
      }
    }
    loadTours();
  }, []);

  const displayedTours = showMore ? tours : tours.slice(0, 3);

  if (loading) {
    return (
      <div
        role="status"
        className="max-w-sm p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700"
      >
        <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
          </svg>
        </div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        <div className="flex items-center mt-4">
          <svg
            className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
          </svg>
          <div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
            <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-center mb-12">
          <div className="text-center max-w-3xl">
            <div className="flex items-center justify-center gap-2 mb-4">
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Awesome Popular trips
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              reprehenderit reiciendis neque tempore itaque dolorem unde, quasi
              sint voluptates sequi amet aut quisquam excepturi expedita
              asperiores? Doloremque nihil fuga excepturi.
            </p>
            <button
              onClick={() => setShowMore(!showMore)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedTours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Tour Image */}
              <div className="relative h-64 overflow-hidden rounded-t-3xl">
                <Image
                  src={tour.image}
                  alt="tour-image"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay */}
                <Link href={tour.href}>
                  <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-t-3xl">
                    <Plus className="w-8 h-8 text-white" />
                  </div>
                </Link>

                {/* Ribbon */}
                <div className="absolute top-10 -left-2 z-10">
                  <div className="bg-orange-500 text-white px-6 py-3 flex items-center gap-3 font-semibold text-sm relative">
                    <Calendar className="w-4 h-4" />
                    <span>{tour.days}</span>
                    <Heart className="w-5 h-5 ml-2 hover:fill-current cursor-pointer transition-colors" />

                    {/* Ribbon Arrow */}
                    <div className="absolute -top-2 left-0 w-0 h-0 border-l-2 border-l-transparent border-b-2 border-b-red-700"></div>
                    <div className="absolute top-0 -right-4 w-0 h-0 border-t-6 border-t-transparent border-b-6 border-b-transparent border-l-4 border-l-orange-500"></div>
                  </div>
                </div>
              </div>

              {/* Tour Content */}
              <div className="p-8">
                {/* Tour Title */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    <Link
                      href={tour.href}
                      className="hover:text-blue-600 transition-colors duration-300"
                    >
                      {tour.title}
                    </Link>
                  </h3>
                </div>

                {/* Tour Description */}
                <div className="mb-6">
                  <p className="text-gray-600 leading-relaxed line-clamp-4">
                    {tour.description}
                  </p>
                </div>

                {/* Tour Footer */}
                <div className="flex items-center justify-between">
                  {/* Price Box */}
                  <div className="relative bg-blue-600 text-white px-6 py-3 rounded-r-lg">
                    <div className="absolute -left-8 top-0 w-0 h-0 border-t-6 border-t-transparent border-b-6 border-b-transparent border-r-8 border-r-blue-600"></div>
                    <span className="text-sm font-medium mr-1">From:</span>
                    <span className="text-lg font-bold">{tour.price}</span>
                  </div>

                  {/* Book Now Button */}
                  <Link
                    href={tour.href}
                    className="group/btn bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-4 h-4 -rotate-45 group-hover/btn:rotate-0 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .border-t-6 {
          border-top-width: 24px;
        }

        .border-b-6 {
          border-bottom-width: 24px;
        }

        .border-r-8 {
          border-right-width: 32px;
        }

        .border-l-4 {
          border-left-width: 16px;
        }
      `}</style>
    </section>
  );
};

export default ToursSection;
