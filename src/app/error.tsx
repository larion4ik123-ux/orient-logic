'use client'

import { useEffect } from 'react'
import { FaExclamationTriangle, FaHome, FaRedoAlt } from 'react-icons/fa'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Логирование ошибки
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-red-50 px-4 pt-20">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <FaExclamationTriangle className="text-8xl text-red-500 mx-auto" />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Произошла ошибка
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          К сожалению, произошла непредвиденная ошибка. 
          Попробуйте обновить страницу или вернуться на главную.
        </p>

        {process.env.NODE_ENV === 'development' && (
          <div className="mb-8 p-4 bg-red-100 rounded-lg text-left">
            <p className="text-sm font-mono text-red-800 break-all">
              {error.message}
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center btn-primary"
          >
            <FaRedoAlt className="mr-2" />
            Попробовать снова
          </button>
          
          <Link
            href="/"
            className="inline-flex items-center justify-center btn-outline"
          >
            <FaHome className="mr-2" />
            На главную
          </Link>
        </div>

        <div className="mt-12">
          <p className="text-gray-600 mb-4">
            Если проблема повторяется, свяжитесь с нами:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <a href="tel:+79186798706" className="text-primary-500 hover:underline">
              +7 (918) 679-87-06
            </a>
            <a href="mailto:orientlogic@bk.ru" className="text-primary-500 hover:underline">
              orientlogic@bk.ru
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
