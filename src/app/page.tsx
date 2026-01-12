import HeroSection from '@/components/home/HeroSection'
import AboutPreview from '@/components/home/AboutPreview'
import ServicesPreview from '@/components/home/ServicesPreview'
import Advantages from '@/components/home/Advantages'
import Statistics from '@/components/home/Statistics'
import CTASection from '@/components/home/CTASection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <Advantages />
      <Statistics />
      <CTASection />
    </>
  )
}
