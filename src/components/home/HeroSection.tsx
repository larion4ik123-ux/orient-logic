'use client'

import Link from 'next/link'
import { FaShippingFast, FaCheckCircle } from 'react-icons/fa'

export default function HeroSection() {
  return (
    <section className="relative gradient-bg text-white pt-32 pb-20 overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Левая колонка - текст */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <FaCheckCircle className="text-green-400 mr-2" />
              <span className="text-sm">Более 500 успешных доставок</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Orient Logic
            </h1>
            <p className="text-2xl md:text-3xl mb-6 text-blue-100">
              Надёжная логистика без границ
            </p>
            <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-2xl mx-auto lg:mx-0">
              Международные грузоперевозки из Китая в Россию. Полный цикл логистического сопровождения с гарантией качества и сроков.
            </p>

            {/* Преимущества */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">3+</div>
                <div className="text-sm text-blue-100">года опыта</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">500+</div>
                <div className="text-sm text-blue-100">доставок</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">100%</div>
                <div className="text-sm text-blue-100">гарантия</div>
              </div>
            </div>

            {/* CTA кнопки */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="/contacts" 
                className="inline-block bg-white text-primary-500 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Связаться с нами
              </Link>
              <Link 
                href="/services" 
                className="inline-block border-2 border-white text-white hover:bg-white hover:text-primary-500 font-semibold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Наши услуги
              </Link>
            </div>
          </div>

          {/* Правая колонка - иконка/иллюстрация */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="text-[20rem] text-white/10">
                <FaShippingFast />
              </div>
              {/* Анимированные круги */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 border-4 border-white/20 rounded-full animate-pulse"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 border-4 border-white/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Волна внизу */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
