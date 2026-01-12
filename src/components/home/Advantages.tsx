'use client'

import { FaShieldAlt, FaDollarSign, FaClock, FaHeadset, FaChartLine, FaFileContract } from 'react-icons/fa'

export default function Advantages() {
  const advantages = [
    {
      icon: FaShieldAlt,
      title: 'Надежность',
      description: 'Гарантируем сохранность груза на всех этапах доставки. Полное страхование.',
    },
    {
      icon: FaDollarSign,
      title: 'Прозрачные цены',
      description: 'Честное ценообразование без скрытых платежей. Все расходы известны заранее.',
    },
    {
      icon: FaClock,
      title: 'Точные сроки',
      description: 'Соблюдаем оговоренные сроки доставки. Отслеживание груза 24/7.',
    },
    {
      icon: FaHeadset,
      title: 'Поддержка 24/7',
      description: 'Наши специалисты всегда на связи и готовы ответить на ваши вопросы.',
    },
    {
      icon: FaChartLine,
      title: 'Опыт и экспертиза',
      description: 'Более 3 лет успешной работы и 500+ выполненных доставок.',
    },
    {
      icon: FaFileContract,
      title: 'Полный пакет документов',
      description: 'Берем на себя все вопросы таможенного оформления и документооборота.',
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Наши преимущества</h2>
          <p className="section-subtitle">
            Почему клиенты выбирают Orient Logic
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon
            return (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Icon className="text-2xl text-primary-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
