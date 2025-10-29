import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-[#1A1F2C]/80 backdrop-blur-md z-50 border-b border-white/10">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold bg-gradient-to-r from-[#0EA5E9] to-[#10B981] bg-clip-text text-transparent">
          Python-Team
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-white/80 hover:text-white transition-colors">Услуги</a>
          <a href="#process" className="text-white/80 hover:text-white transition-colors">Как работаем</a>
          <a href="#cases" className="text-white/80 hover:text-white transition-colors">Кейсы</a>
          <a href="#contact" className="text-white/80 hover:text-white transition-colors">Контакты</a>
          <Button className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90">
            Обсудить проект
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
