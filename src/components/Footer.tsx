'use client'

import Link from 'next/link'
import { FaPhone, FaEnvelope, FaTelegram, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      {/* Основной контент футера */}
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* О компании */}
          <div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">Orient Logic</h3>
            <p className="text-gray-400 mb-4">
              Надежная логистика без границ. Международные грузоперевозки из Китая в Россию.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://t.me/+79186798706" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-[#0088cc] transition-colors"
                aria-label="Telegram"
              >
                <FaTelegram />
              </a>
              <a 
                href="https://wa.me/79186798706" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-[#25D366] transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Навигация */}
          <div>
            <h4 className="text-lg font-bold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  О компании
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Услуги
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="text-gray-400 hover:text-white transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Услуги */}
          <div>
            <h4 className="text-lg font-bold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Морские перевозки</li>
              <li>Авиаперевозки</li>
              <li>Железнодорожные перевозки</li>
              <li>Автоперевозки</li>
              <li>Таможенное оформление</li>
              <li>Складское хранение</li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="text-lg font-bold mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:+79186798706" 
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <FaPhone className="mr-2" />
                  +7 (918) 679-87-06
                </a>
              </li>
              <li>
                <a 
                  href="tel:+79618506131" 
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <FaPhone className="mr-2" />
                  +7 (961) 850-61-31
                </a>
              </li>
              <li>
                <a 
                  href="mailto:orientlogic@bk.ru" 
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <FaEnvelope className="mr-2" />
                  orientlogic@bk.ru
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Копирайт */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="text-center text-gray-400">
            <p>&copy; {currentYear} Orient Logic. Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
