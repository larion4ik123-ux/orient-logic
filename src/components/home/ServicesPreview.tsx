'use client'

import Link from 'next/link'
import { FaShip, FaPlane, FaTrain, FaTruck, FaArrowRight } from 'react-icons/fa'

export default function ServicesPreview() {
  const services = [
    {
      icon: FaShip,
      title: 'Морские перевозки',
      description: 'Контейнерные и сборные грузы. Оптимальная стоимость для крупных партий.',
      time: '30-45 дней',
      color: 'text-blue-500',
    },
    {
      icon: FaPlane,
      title: 'Авиаперевозки',
      description: 'Экспресс-доставка для срочных и ценных грузов.',
      time: '5-10 дней',
      color: 'text-sky-500',
    },
    {
      icon: FaTrain,
      title: 'Ж/Д перевозки',
      description: 'Оптимальное соотношение цены и скорости доставки.',
      time: '20-30 дней',
      color: 'text-indigo-500',
    },
    {
      icon: FaTruck,
      title: 'Автоперевозки',
      description: 'Доставка от двери до двери по всей территории России.',
      time: 'По договоренности',
      color: 'text-cyan-500',
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Наши услуги</h2>
          <p className="section-subtitle">
            Полный спектр логистических решений для вашего бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="card hover:border-primary-500 border-2 border-transparent">
                <div className={`text-5xl ${service.color} mb-4`}>
                  <Icon />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-semibold text-primary-500 mr-2">⏱</span>
                  {service.time}
                </div>
              </div>
            )
          })}
        </div>

        {/* Дополнительные услуги */}
        <div className="card bg-gradient-to-r from-primary-50 to-secondary-50 border-2 border-primary-100">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Полное логистическое сопровождение</h3>
            <p className="text-gray-700 mb-6">
              Таможенное оформление, складское хранение, консолидация грузов, страхование, 
              выкуп товара, контроль качества и многое другое.
            </p>
            <Link 
              href="/services" 
              className="inline-flex items-center btn-primary"
            >
              Все услуги
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
