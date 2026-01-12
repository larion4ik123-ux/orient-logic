'use client'

import { useEffect, useState, useRef } from 'react'
import { FaShippingFast, FaUsers, FaGlobeAsia, FaStar } from 'react-icons/fa'

export default function Statistics() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Проверка на доступность window (для SSR/SSG)
    if (typeof window === 'undefined') return
    
    const currentRef = sectionRef.current
    if (!currentRef) return
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(currentRef)

    return () => {
      observer.unobserve(currentRef)
    }
  }, [])

  const stats = [
    {
      icon: FaShippingFast,
      value: 500,
      suffix: '+',
      label: 'Успешных доставок',
      color: 'text-blue-500',
    },
    {
      icon: FaUsers,
      value: 100,
      suffix: '%',
      label: 'Довольных клиентов',
      color: 'text-green-500',
    },
    {
      icon: FaGlobeAsia,
      value: 2,
      suffix: '',
      label: 'Страны работы',
      color: 'text-purple-500',
    },
    {
      icon: FaStar,
      value: 3,
      suffix: '+',
      label: 'Года опыта',
      color: 'text-yellow-500',
    },
  ]

  return (
    <section ref={sectionRef} className="section-padding gradient-bg text-white relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Orient Logic в цифрах
          </h2>
          <p className="text-xl text-blue-100">
            Наши достижения и результаты работы
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className={`text-5xl mb-4 flex justify-center ${stat.color}`}>
                    <Icon />
                  </div>
                  <div className="text-5xl font-bold mb-2">
                    {isVisible ? (
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    ) : (
                      '0' + stat.suffix
                    )}
                  </div>
                  <div className="text-lg text-blue-100">{stat.label}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Компонент для анимации чисел
function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000 // 2 секунды
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value])

  return <>{count}{suffix}</>
}
