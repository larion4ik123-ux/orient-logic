import { Metadata } from 'next'
import { FaShippingFast, FaGlobeAsia, FaHandshake, FaClock } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'О компании — Orient Logic',
  description: 'Orient Logic — надежный партнер в международной логистике. Более 3 лет опыта, 500+ успешных доставок из Китая в Россию.',
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero секция */}
      <section className="gradient-bg text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            О компании Orient Logic
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
            Мы — команда профессионалов с многолетним опытом в сфере международной логистики
          </p>
        </div>
      </section>

      {/* Основная информация */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Надежный партнер в логистике
              </h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  <strong className="text-primary-500">Orient Logic</strong> — это надежная логистическая компания, 
                  специализирующаяся на международных грузоперевозках между Китаем и Россией.
                </p>
                <p>
                  За время работы мы накопили богатый опыт в организации доставки грузов любой сложности, 
                  от небольших посылок до крупногабаритных партий товаров.
                </p>
                <p>
                  Наша команда состоит из квалифицированных специалистов, которые знают все тонкости 
                  таможенного оформления, транспортировки и логистического сопровождения грузов.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="card text-center">
                <div className="text-4xl text-primary-500 mb-4 flex justify-center">
                  <FaClock />
                </div>
                <div className="text-3xl font-bold text-primary-500 mb-2">3+</div>
                <div className="text-gray-600">года на рынке</div>
              </div>
              <div className="card text-center">
                <div className="text-4xl text-primary-500 mb-4 flex justify-center">
                  <FaShippingFast />
                </div>
                <div className="text-3xl font-bold text-primary-500 mb-2">500+</div>
                <div className="text-gray-600">успешных доставок</div>
              </div>
              <div className="card text-center">
                <div className="text-4xl text-primary-500 mb-4 flex justify-center">
                  <FaGlobeAsia />
                </div>
                <div className="text-3xl font-bold text-primary-500 mb-2">2</div>
                <div className="text-gray-600">страны работы</div>
              </div>
              <div className="card text-center">
                <div className="text-4xl text-primary-500 mb-4 flex justify-center">
                  <FaHandshake />
                </div>
                <div className="text-3xl font-bold text-primary-500 mb-2">100%</div>
                <div className="text-gray-600">довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Миссия и ценности */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Наша миссия и ценности</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Мы стремимся делать международную логистику простой, надежной и доступной для каждого
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-2xl font-bold mb-4 text-primary-500">Надежность</h3>
              <p className="text-gray-700">
                Мы гарантируем сохранность вашего груза и соблюдение всех договоренностей. 
                Каждая доставка застрахована и отслеживается на всех этапах.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-bold mb-4 text-primary-500">Прозрачность</h3>
              <p className="text-gray-700">
                Открытое ценообразование, отсутствие скрытых платежей. Вы всегда знаете, 
                где находится ваш груз и когда он будет доставлен.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-bold mb-4 text-primary-500">Профессионализм</h3>
              <p className="text-gray-700">
                Наша команда постоянно совершенствует свои навыки и следит за изменениями 
                в законодательстве и логистических процессах.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* География работы */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">География работы</h2>
            <p className="section-subtitle">
              Работаем по всей территории России и Китая — от любой точки отправления до любого пункта назначения
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">🇨🇳</div>
                <h3 className="text-2xl font-bold">Любая точка Китая</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Работаем со всеми городами и регионами КНР:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="text-primary-500 mr-2">✓</span>
                  Гуанчжоу, Шэньчжэнь, Гонконг
                </li>
                <li className="flex items-center">
                  <span className="text-primary-500 mr-2">✓</span>
                  Иу (Yiwu), Шанхай, Нинбо
                </li>
                <li className="flex items-center">
                  <span className="text-primary-500 mr-2">✓</span>
                  Пекин, Тяньцзинь, Циндао
                </li>
                <li className="flex items-center">
                  <span className="text-primary-500 mr-2">✓</span>
                  Далянь, Чунцин, Чэнду
                </li>
                <li className="flex items-center">
                  <span className="text-primary-500 mr-2">✓</span>
                  <strong>Любой другой город Китая</strong>
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">🇷🇺</div>
                <h3 className="text-2xl font-bold">Любая точка России</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Доставляем грузы в любой регион РФ:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="text-primary-500 mr-2">✓</span>
                  Москва, Санкт-Петербург
                </li>
                <li className="flex items-center">
                  <span className="text-primary-500 mr-2">✓</span>
                  Екатеринбург, Новосибирск
                </li>
                <li className="flex items-center">
                  <span className="text-primary-500 mr-2">✓</span>
                  Казань, Нижний Новгород
                </li>
                <li className="flex items-center">
                  <span className="text-primary-500 mr-2">✓</span>
                  Краснодар, Владивосток
                </li>
                <li className="flex items-center">
                  <span className="text-primary-500 mr-2">✓</span>
                  <strong>Любой другой город России</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Направления деятельности */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Направления деятельности</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center">
              <div className="text-5xl mb-4">🚢</div>
              <h3 className="text-xl font-bold mb-2">Морские перевозки</h3>
              <p className="text-gray-600">
                Контейнерные и сборные грузы
              </p>
            </div>
            <div className="card text-center">
              <div className="text-5xl mb-4">✈️</div>
              <h3 className="text-xl font-bold mb-2">Авиадоставка</h3>
              <p className="text-gray-600">
                Быстрая доставка грузов
              </p>
            </div>
            <div className="card text-center">
              <div className="text-5xl mb-4">🚂</div>
              <h3 className="text-xl font-bold mb-2">Ж/Д перевозки</h3>
              <p className="text-gray-600">
                Оптимальная цена и сроки
              </p>
            </div>
            <div className="card text-center">
              <div className="text-5xl mb-4">🚛</div>
              <h3 className="text-xl font-bold mb-2">Автодоставка</h3>
              <p className="text-gray-600">
                До двери получателя
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-bg text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готовы начать сотрудничество?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Свяжитесь с нами для получения консультации и расчета стоимости доставки
          </p>
          <a href="/contacts" className="inline-block bg-white text-primary-500 hover:bg-gray-100 font-semibold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
            Связаться с нами
          </a>
        </div>
      </section>
    </div>
  )
}
