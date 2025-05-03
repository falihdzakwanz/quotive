import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary">
      <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-red-500">
        404 - Page Not Found
      </h1>
      <Link
        href="/"
        className="mt-4 px-4 py-2 bg-[#FFB433] text-white hover:bg-[#FF9149] transition-colors duration-200 rounded-md text-sm md:text-base lg:text-lg"
      >
        Back to Homepage
      </Link>
    </div>
  );
}
