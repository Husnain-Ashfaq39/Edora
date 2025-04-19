"use client";
import Image from "next/image";

interface CourseCardProps {
  title: string;
  description: string;
  imageUrl: string;
  instructor: string;
  instructorAvatar: string;
  duration: string;
}

export function CourseCard({
  title,
  description,
  imageUrl,
  instructor,
  instructorAvatar,
  duration,
}: CourseCardProps) {
  return (
    <div className="w-full group">
      <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
        <div className="p-6 pb-3">
          <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
            {title}
          </h3>
        </div>
        <div className="relative h-48 w-full px-6 overflow-hidden">
          <div className="h-full w-full relative overflow-hidden rounded-lg">
            <Image 
              src={imageUrl} 
              alt={title}
              fill
              className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            />
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
              <Image
                src={instructorAvatar}
                alt={`${instructor} avatar`}
                width={40}
                height={40}
                className="rounded-full border-2 border-gray-200 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {instructor}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {duration}
              </p>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
} 