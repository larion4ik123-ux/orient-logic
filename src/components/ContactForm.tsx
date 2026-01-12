'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'

interface FormData {
  name: string
  contact: string
  message: string
}

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setSubmitStatus('loading')
    setErrorMessage('')

    try {
      // Получаем URL API Gateway из переменных окружения
      const apiUrl = process.env.NEXT_PUBLIC_API_GATEWAY_URL || '/api/contact'
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Ошибка при отправке формы')
      }

      setSubmitStatus('success')
      reset()
      
      // Сбросить статус через 5 секунд
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      setErrorMessage('Произошла ошибка при отправке. Попробуйте позже или свяжитесь с нами по телефону.')
      
      // Сбросить статус через 5 секунд
      setTimeout(() => {
        setSubmitStatus('idle')
        setErrorMessage('')
      }, 5000)
    }
  }

  return (
    <div className="card">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Имя */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            Ваше имя *
          </label>
          <input
            id="name"
            type="text"
            {...register('name', { 
              required: 'Пожалуйста, укажите ваше имя',
              minLength: { value: 2, message: 'Имя должно содержать минимум 2 символа' }
            })}
            className="input-field"
            placeholder="Иван Иванов"
            disabled={submitStatus === 'loading'}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        {/* Контакт */}
        <div>
          <label htmlFor="contact" className="block text-sm font-semibold text-gray-700 mb-2">
            Телефон или Email *
          </label>
          <input
            id="contact"
            type="text"
            {...register('contact', { 
              required: 'Пожалуйста, укажите способ связи',
              validate: (value) => {
                const phoneRegex = /^[\d\s\+\-\(\)]+$/
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                
                if (phoneRegex.test(value) || emailRegex.test(value)) {
                  return true
                }
                return 'Укажите корректный телефон или email'
              }
            })}
            className="input-field"
            placeholder="+7 (999) 123-45-67 или email@example.com"
            disabled={submitStatus === 'loading'}
          />
          {errors.contact && (
            <p className="mt-1 text-sm text-red-600">{errors.contact.message}</p>
          )}
        </div>

        {/* Сообщение */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            Сообщение *
          </label>
          <textarea
            id="message"
            rows={5}
            {...register('message', { 
              required: 'Пожалуйста, опишите ваш запрос',
              minLength: { value: 10, message: 'Сообщение должно содержать минимум 10 символов' }
            })}
            className="textarea-field"
            placeholder="Опишите ваш груз, маршрут и интересующие услуги..."
            disabled={submitStatus === 'loading'}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>

        {/* Кнопка отправки */}
        <button
          type="submit"
          disabled={submitStatus === 'loading' || submitStatus === 'success'}
          className={`w-full flex items-center justify-center btn-primary ${
            submitStatus === 'loading' ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {submitStatus === 'loading' ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Отправка...
            </>
          ) : (
            <>
              <FaPaperPlane className="mr-2" />
              Отправить заявку
            </>
          )}
        </button>

        {/* Статус отправки */}
        {submitStatus === 'success' && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-start">
            <FaCheckCircle className="text-green-500 text-xl mr-3 mt-0.5" />
            <div>
              <p className="text-green-800 font-semibold">Заявка успешно отправлена!</p>
              <p className="text-green-700 text-sm mt-1">Мы свяжемся с вами в ближайшее время.</p>
            </div>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start">
            <FaExclamationCircle className="text-red-500 text-xl mr-3 mt-0.5" />
            <div>
              <p className="text-red-800 font-semibold">Ошибка отправки</p>
              <p className="text-red-700 text-sm mt-1">{errorMessage}</p>
            </div>
          </div>
        )}

        {/* Политика конфиденциальности */}
        <p className="text-xs text-gray-500">
          Отправляя форму, вы соглашаетесь на обработку персональных данных в соответствии с политикой конфиденциальности.
        </p>
      </form>
    </div>
  )
}
