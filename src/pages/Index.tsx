import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ForFounders from '@/components/ForFounders';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Cases from '@/components/Cases';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#0F1419]">
      <Header />
      <Hero />
      <ForFounders />
      <Services />
      <Process />
      <Cases />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
