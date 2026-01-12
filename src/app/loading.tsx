export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        {/* Spinner */}
        <div className="inline-block relative w-20 h-20 mb-4">
          <div className="absolute border-4 border-primary-200 rounded-full w-20 h-20"></div>
          <div className="absolute border-4 border-primary-500 rounded-full w-20 h-20 border-t-transparent animate-spin"></div>
        </div>
        
        {/* Текст */}
        <p className="text-lg text-gray-600 font-semibold">
          Загрузка...
        </p>
      </div>
    </div>
  )
}
