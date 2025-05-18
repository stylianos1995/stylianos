export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
          Loading...
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Preparing your experience
        </p>
      </div>
    </div>
  );
}
