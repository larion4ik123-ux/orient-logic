import { Metadata } from 'next'
import { FaPhone, FaEnvelope, FaTelegram, FaWhatsapp, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Контакты — Orient Logic',
  description: 'Свяжитесь с Orient Logic: телефон, email, мессенджеры. Форма обратной связи для заказа доставки из Китая в Россию.',
}

export default function ContactsPage() {
  return (
    <div className="pt-20">
      {/* Hero секция */}
      <section className="gradient-bg text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Контакты
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
            Свяжитесь с нами удобным способом — мы всегда на связи
          </p>
        </div>
      </section>

      {/* Контактная информация */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Левая колонка - контактная информация */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Наши контакты</h2>
              
              <div className="space-y-6">
                {/* Телефоны */}
                <div className="card">
                  <div className="flex items-start">
                    <div className="text-3xl text-primary-500 mr-4 mt-1">
                      <FaPhone />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Телефон</h3>
                      <a href="tel:+79186798706" className="text-lg text-gray-700 hover:text-primary-500 transition-colors block mb-1">
                        +7 (918) 679-87-06
                      </a>
                      <a href="tel:+79618506131" className="text-lg text-gray-700 hover:text-primary-500 transition-colors block">
                        +7 (961) 850-61-31
                      </a>
                      <p className="text-sm text-gray-500 mt-2">Звоните в рабочее время</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="card">
                  <div className="flex items-start">
                    <div className="text-3xl text-primary-500 mr-4 mt-1">
                      <FaEnvelope />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Email</h3>
                      <a href="mailto:orientlogic@bk.ru" className="text-lg text-gray-700 hover:text-primary-500 transition-colors">
                        orientlogic@bk.ru
                      </a>
                      <p className="text-sm text-gray-500 mt-2">Ответим в течение часа</p>
                    </div>
                  </div>
                </div>

                {/* Мессенджеры */}
                <div className="card">
                  <div className="flex items-start">
                    <div className="text-3xl text-primary-500 mr-4 mt-1">
                      <FaTelegram />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3">Мессенджеры</h3>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <a 
                          href="https://t.me/+79186798706" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center bg-[#0088cc] text-white px-6 py-3 rounded-lg hover:bg-[#006699] transition-colors"
                        >
                          <FaTelegram className="mr-2" />
                          Telegram
                        </a>
                        <a 
                          href="https://wa.me/79186798706" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center bg-[#25D366] text-white px-6 py-3 rounded-lg hover:bg-[#1da851] transition-colors"
                        >
                          <FaWhatsapp className="mr-2" />
                          WhatsApp
                        </a>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">Быстрые ответы в мессенджерах</p>
                    </div>
                  </div>
                </div>

                {/* Режим работы */}
                <div className="card">
                  <div className="flex items-start">
                    <div className="text-3xl text-primary-500 mr-4 mt-1">
                      <FaClock />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Режим работы</h3>
                      <p className="text-gray-700">Понедельник - Пятница: 9:00 - 18:00</p>
                      <p className="text-gray-700">Суббота: 10:00 - 15:00</p>
                      <p className="text-gray-700">Воскресенье: выходной</p>
                      <p className="text-sm text-gray-500 mt-2">Время московское (МСК)</p>
                    </div>
                  </div>
                </div>

                {/* География */}
                <div className="card">
                  <div className="flex items-start">
                    <div className="text-3xl text-primary-500 mr-4 mt-1">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">География работы</h3>
                      <p className="text-gray-700 mb-2">
                        <strong className="text-primary-500">🇨🇳 Китай:</strong> Любая точка КНР — от крупных городов до удаленных регионов
                      </p>
                      <p className="text-gray-700">
                        <strong className="text-primary-500">🇷🇺 Россия:</strong> Любая точка РФ — доставка в каждый уголок страны
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Правая колонка - форма обратной связи */}
            <div>
              <div className="lg:sticky lg:top-24">
                <h2 className="text-3xl font-bold mb-6">Форма обратной связи</h2>
                <p className="text-gray-600 mb-6">
                  Оставьте заявку, и мы свяжемся с вами в ближайшее время для уточнения деталей и расчета стоимости доставки.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Часто задаваемые вопросы</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="card">
              <h3 className="text-xl font-bold mb-2 text-primary-500">Как быстро вы отвечаете на заявки?</h3>
              <p className="text-gray-700">
                Мы стараемся отвечать на все заявки в течение 1 часа в рабочее время. 
                В выходные и праздничные дни ответ может занять больше времени.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-2 text-primary-500">Можно ли получить расчет стоимости до оформления заказа?</h3>
              <p className="text-gray-700">
                Да, конечно! Мы предоставляем бесплатный расчет стоимости доставки. 
                Для этого нам нужно знать характеристики груза (вес, объем, наименование) и маршрут доставки.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-2 text-primary-500">В какие города России вы доставляете?</h3>
              <p className="text-gray-700">
                Мы доставляем грузы в любой город России. Основные направления: Москва, Санкт-Петербург, 
                Екатеринбург, Новосибирск и другие крупные города.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-2 text-primary-500">Какие документы нужны для таможенного оформления?</h3>
              <p className="text-gray-700">
                Список документов зависит от типа груза. Обычно требуются: инвойс, паспорт сделки, 
                контракт с поставщиком. Мы поможем подготовить все необходимые документы.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-2 text-primary-500">Предоставляете ли вы страхование груза?</h3>
              <p className="text-gray-700">
                Да, мы предлагаем страхование грузов от всех рисков. Стоимость страхования составляет 
                около 0.3-0.5% от стоимости груза.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-bg text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Остались вопросы?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Свяжитесь с нами любым удобным способом — мы с радостью поможем!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+79186798706" className="inline-block bg-white text-primary-500 hover:bg-gray-100 font-semibold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Позвонить
            </a>
            <a href="mailto:orientlogic@bk.ru" className="inline-block border-2 border-white text-white hover:bg-white hover:text-primary-500 font-semibold py-4 px-10 rounded-lg transition-all duration-300">
              Написать Email
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
