'use client'

import { FaShip, FaPlane, FaTrain, FaTruck, FaBoxes, FaFileContract, FaWarehouse, FaHandsHelping } from 'react-icons/fa'

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero секция */}
      <section className="gradient-bg text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Наши услуги
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
            Полный комплекс логистических услуг для вашего бизнеса
          </p>
        </div>
      </section>

      {/* Основные услуги */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Международные грузоперевозки</h2>
            <p className="section-subtitle">
              Выберите оптимальный способ доставки вашего груза
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Морские перевозки */}
            <div className="card">
              <div className="flex items-start mb-6">
                <div className="text-5xl text-primary-500 mr-6">
                  <FaShip />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Морские перевозки</h3>
                  <p className="text-gray-600">Оптимально для крупных партий</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">✓</span>
                  <span>Контейнерные перевозки (20ft, 40ft, 40HQ)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">✓</span>
                  <span>Сборные грузы (LCL)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">✓</span>
                  <span>Негабаритные и тяжеловесные грузы</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">✓</span>
                  <span>Срок доставки: 30-45 дней</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong className="text-primary-500">Экономично:</strong> Идеальный вариант для товаров большого объема. 
                  Минимальная стоимость за кубометр.
                </p>
              </div>
            </div>

            {/* Авиаперевозки */}
            <div className="card">
              <div className="flex items-start mb-6">
                <div className="text-5xl text-primary-500 mr-6">
                  <FaPlane />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Авиаперевозки</h3>
                  <p className="text-gray-600">Максимальная скорость</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">✓</span>
                  <span>Экспресс-доставка грузов</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">✓</span>
                  <span>Малогабаритные ценные грузы</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">✓</span>
                  <span>Документы и образцы</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">✓</span>
                  <span>Срок доставки: 5-10 дней</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong className="text-primary-500">Быстро:</strong> Лучший выбор для срочных грузов и товаров 
                  с высокой добавленной стоимостью.
                </p>
              </div>
            </div>

            {/* Железнодорожные перевозки */}
            <div className="card">
              <div className="flex items-start mb-6">
                <div className="text-5xl text-primary-500 mr-6">
                  <FaTrain />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Железнодорожные перевозки</h3>
                  <p className="text-gray-600">Оптимальное соотношение цена/время</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">✓</span>
                  <span>Контейнерные перевозки</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">✓</span>
                  <span>Сборные грузы</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">✓</span>
                  <span>Вагонные отправки</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">✓</span>
                  <span>Срок доставки: 20-30 дней</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong className="text-primary-500">Оптимально:</strong> Золотая середина между стоимостью морских 
                  и скоростью авиаперевозок.
                </p>
              </div>
            </div>

            {/* Автоперевозки */}
            <div className="card">
              <div className="flex items-start mb-6">
                <div className="text-5xl text-primary-500 mr-6">
                  <FaTruck />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Автомобильные перевозки</h3>
                  <p className="text-gray-600">Доставка до двери</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">✓</span>
                  <span>Доставка от двери до двери</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">✓</span>
                  <span>Сборные и FTL грузы</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">✓</span>
                  <span>Междугородние перевозки по РФ</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">✓</span>
                  <span>Гибкие сроки доставки</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong className="text-primary-500">Удобно:</strong> Максимальная гибкость в маршрутах и графиках доставки.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Дополнительные услуги */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Полное логистическое сопровождение</h2>
            <p className="section-subtitle">
              Весь спектр услуг для комфортной работы с грузами
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center">
              <div className="text-5xl text-primary-500 mb-4 flex justify-center">
                <FaFileContract />
              </div>
              <h3 className="text-xl font-bold mb-3">Таможенное оформление</h3>
              <p className="text-gray-600">
                Полное сопровождение на таможне, декларирование, оплата пошлин
              </p>
            </div>

            <div className="card text-center">
              <div className="text-5xl text-primary-500 mb-4 flex justify-center">
                <FaWarehouse />
              </div>
              <h3 className="text-xl font-bold mb-3">Складское хранение</h3>
              <p className="text-gray-600">
                Временное хранение грузов на наших складах в Китае и России
              </p>
            </div>

            <div className="card text-center">
              <div className="text-5xl text-primary-500 mb-4 flex justify-center">
                <FaBoxes />
              </div>
              <h3 className="text-xl font-bold mb-3">Консолидация</h3>
              <p className="text-gray-600">
                Сбор товаров от разных поставщиков в одну партию
              </p>
            </div>

            <div className="card text-center">
              <div className="text-5xl text-primary-500 mb-4 flex justify-center">
                <FaHandsHelping />
              </div>
              <h3 className="text-xl font-bold mb-3">Страхование</h3>
              <p className="text-gray-600">
                Защита вашего груза от всех возможных рисков
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Индивидуальные решения */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Индивидуальные логистические решения
              </h2>
              <p className="text-lg text-gray-700 mb-6 text-center">
                Мы понимаем, что каждый бизнес уникален. Поэтому мы предлагаем персонализированные логистические решения, 
                адаптированные под специфику вашей деятельности.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary-500">Для интернет-магазинов</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      <span>Выкуп товаров у поставщиков</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      <span>Проверка качества товара</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      <span>Упаковка и маркировка</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      <span>Dropshipping</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary-500">Для производственных компаний</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      <span>Поиск и контроль поставщиков</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      <span>Контроль производства</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      <span>Регулярные поставки</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      <span>Just-in-time доставка</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 text-center">
                <a href="/contacts" className="btn-primary">
                  Обсудить индивидуальное решение
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Как мы работаем */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Как мы работаем</h2>
            <p className="section-subtitle">
              Простой и прозрачный процесс доставки
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Заявка</h3>
              <p className="text-gray-600">
                Вы оставляете заявку, мы рассчитываем стоимость
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Договор</h3>
              <p className="text-gray-600">
                Заключаем договор, согласовываем детали
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Доставка</h3>
              <p className="text-gray-600">
                Забираем груз и отправляем выбранным способом
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Получение</h3>
              <p className="text-gray-600">
                Вы получаете груз в целости и сохранности
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-bg text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Нужна консультация?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Свяжитесь с нами, и мы подберем оптимальное решение для вашего груза
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contacts" className="inline-block bg-white text-primary-500 hover:bg-gray-100 font-semibold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Связаться с нами
            </a>
            <a href="tel:+79186798706" className="inline-block border-2 border-white text-white hover:bg-white hover:text-primary-500 font-semibold py-4 px-10 rounded-lg transition-all duration-300">
              +7 (918) 679-87-06
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
