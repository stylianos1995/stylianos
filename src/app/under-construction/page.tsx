export default function UnderConstruction() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          🚧 Under Construction 🚧
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          This project is currently being developed. Check back soon!
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}
