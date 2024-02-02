import Navbar from './sections/Navbar.tsx'
import HeroSection from './sections/HeroSection.tsx'
import AboutSection from './sections/AboutSection.tsx'
import ProductsSection from './sections/ProductsSection.tsx'
import ImpactSection from './sections/ImpactSection.tsx'
import BlogSection from './sections/BlogSection.tsx'
import Footer from './sections/Footer.tsx'

function App() {
  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center p-5 md:p-24 gap-10 md:gap-36'>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <ImpactSection />
        <BlogSection />
      </div>
      <Footer />
    </>
  )
}

export default App
