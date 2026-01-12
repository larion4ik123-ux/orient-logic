import Link from 'next/link'
import { FaHome, FaArrowLeft } from 'react-icons/fa'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 px-4 pt-20">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold gradient-text">404</h1>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Страница не найдена
        </h2>
        
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          К сожалению, запрашиваемая страница не существует или была перемещена.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="inline-flex items-center justify-center btn-primary"
          >
            <FaHome className="mr-2" />
            На главную
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center btn-outline"
          >
            <FaArrowLeft className="mr-2" />
            Вернуться назад
          </button>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <Link href="/about" className="card hover:shadow-xl transition-shadow">
            <h3 className="font-bold text-primary-500 mb-2">О компании</h3>
            <p className="text-sm text-gray-600">Узнайте больше о нас</p>
          </Link>
          
          <Link href="/services" className="card hover:shadow-xl transition-shadow">
            <h3 className="font-bold text-primary-500 mb-2">Услуги</h3>
            <p className="text-sm text-gray-600">Наши предложения</p>
          </Link>
          
          <Link href="/contacts" className="card hover:shadow-xl transition-shadow">
            <h3 className="font-bold text-primary-500 mb-2">Контакты</h3>
            <p className="text-sm text-gray-600">Свяжитесь с нами</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
