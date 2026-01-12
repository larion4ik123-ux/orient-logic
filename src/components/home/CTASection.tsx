import Link from 'next/link'
import { FaPhone, FaEnvelope, FaTelegram, FaWhatsapp } from 'react-icons/fa'

export default function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <div className="card max-w-4xl mx-auto bg-white shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Готовы начать работу с нами?
            </h2>
            <p className="text-xl text-gray-600">
              Свяжитесь с нами для получения бесплатной консультации и расчета стоимости доставки
            </p>
          </div>

          {/* Контактные способы */}
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <a 
              href="tel:+79186798706" 
              className="flex items-center justify-center bg-primary-50 hover:bg-primary-100 p-6 rounded-lg transition-colors group"
            >
              <FaPhone className="text-3xl text-primary-500 mr-4 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <div className="text-sm text-gray-600">Позвоните нам</div>
                <div className="text-lg font-semibold text-gray-900">+7 (918) 679-87-06</div>
              </div>
            </a>

            <a 
              href="mailto:orientlogic@bk.ru" 
              className="flex items-center justify-center bg-primary-50 hover:bg-primary-100 p-6 rounded-lg transition-colors group"
            >
              <FaEnvelope className="text-3xl text-primary-500 mr-4 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <div className="text-sm text-gray-600">Напишите Email</div>
                <div className="text-lg font-semibold text-gray-900">orientlogic@bk.ru</div>
              </div>
            </a>
          </div>

          {/* Мессенджеры */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a 
              href="https://t.me/+79186798706" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center bg-[#0088cc] hover:bg-[#006699] text-white p-4 rounded-lg transition-colors"
            >
              <FaTelegram className="text-2xl mr-3" />
              <span className="font-semibold">Написать в Telegram</span>
            </a>
            <a 
              href="https://wa.me/79186798706" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center bg-[#25D366] hover:bg-[#1da851] text-white p-4 rounded-lg transition-colors"
            >
              <FaWhatsapp className="text-2xl mr-3" />
              <span className="font-semibold">Написать в WhatsApp</span>
            </a>
          </div>

          {/* CTA кнопка */}
          <div className="text-center pt-6 border-t border-gray-200">
            <Link href="/contacts" className="btn-primary inline-block">
              Оставить заявку на сайте
            </Link>
            <p className="text-sm text-gray-500 mt-4">
              Ответим в течение часа в рабочее время
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
