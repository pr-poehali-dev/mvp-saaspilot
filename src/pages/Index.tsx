import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ForFounders from '@/components/ForFounders';
import ResultSection from '@/components/ResultSection';
import Process from '@/components/Process';
import Services from '@/components/Services';
import Cases from '@/components/Cases';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#0F1419]">
      <Header />
      <Hero />
      <ForFounders />
      <ResultSection />
      <Process />
      <Services />
      <Cases />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;