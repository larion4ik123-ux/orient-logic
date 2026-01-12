'use client'

import Link from 'next/link'
import { FaArrowRight, FaGlobeAsia, FaHandshake, FaAward } from 'react-icons/fa'

export default function AboutPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Левая колонка - текст */}
          <div>
            <h2 className="section-title">О компании Orient Logic</h2>
            <p className="section-subtitle">
              Ваш надежный партнер в международной логистике
            </p>
            <div className="space-y-4 text-gray-700 text-lg mb-8">
              <p>
                <strong className="text-primary-500">Orient Logic</strong> — специализируемся на организации 
                международных грузоперевозок между Китаем и Россией.
              </p>
              <p>
                За более чем 3 года работы мы выполнили свыше 500 успешных доставок различной сложности — 
                от небольших партий товаров до крупногабаритных грузов.
              </p>
              <p>
                Наша команда профессионалов обеспечивает полный цикл логистического сопровождения: 
                от выкупа товара у поставщика до доставки на ваш склад.
              </p>
            </div>
            <Link 
              href="/about" 
              className="inline-flex items-center text-primary-500 hover:text-primary-600 font-semibold text-lg transition-colors"
            >
              Подробнее о компании
              <FaArrowRight className="ml-2" />
            </Link>
          </div>

          {/* Правая колонка - карточки */}
          <div className="grid grid-cols-2 gap-6">
            <div className="card text-center">
              <div className="text-5xl text-primary-500 mb-4 flex justify-center">
                <FaGlobeAsia />
              </div>
              <h3 className="text-xl font-bold mb-2">Международный опыт</h3>
              <p className="text-gray-600">
                Работаем в любой точке России и Китая без ограничений
              </p>
            </div>

            <div className="card text-center">
              <div className="text-5xl text-primary-500 mb-4 flex justify-center">
                <FaHandshake />
              </div>
              <h3 className="text-xl font-bold mb-2">Индивидуальный подход</h3>
              <p className="text-gray-600">
                Персональные решения для каждого клиента
              </p>
            </div>

            <div className="card text-center col-span-2">
              <div className="text-5xl text-primary-500 mb-4 flex justify-center">
                <FaAward />
              </div>
              <h3 className="text-xl font-bold mb-2">Гарантия качества</h3>
              <p className="text-gray-600">
                Полная ответственность за сохранность и своевременность доставки вашего груза
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
