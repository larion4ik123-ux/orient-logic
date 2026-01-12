'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Закрыть меню при изменении маршрута
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const navLinks = [
    { href: '/', label: 'Главная' },
    { href: '/about', label: 'О компании' },
    { href: '/services', label: 'Услуги' },
    { href: '/contacts', label: 'Контакты' },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Логотип */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="gradient-text">Orient Logic</span>
            </div>
          </Link>

          {/* Десктопная навигация */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-gray-700 hover:text-primary-500 transition-colors font-medium ${
                  pathname === link.href ? 'text-primary-500' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Контакты и CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+79186798706" 
              className="flex items-center text-gray-700 hover:text-primary-500 transition-colors"
            >
              <FaPhone className="mr-2" />
              <span className="font-semibold">+7 (918) 679-87-06</span>
            </a>
            <Link href="/contacts" className="btn-primary !py-2 !px-6">
              Связаться
            </Link>
          </div>

          {/* Мобильная кнопка меню */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-primary-500 transition-colors text-2xl"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Мобильное меню */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-gray-700 hover:text-primary-500 transition-colors font-medium ${
                    pathname === link.href ? 'text-primary-500' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <a 
                  href="tel:+79186798706" 
                  className="flex items-center text-gray-700 hover:text-primary-500 transition-colors"
                >
                  <FaPhone className="mr-2" />
                  <span className="font-semibold">+7 (918) 679-87-06</span>
                </a>
                <Link href="/contacts" className="btn-primary block text-center">
                  Связаться
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
