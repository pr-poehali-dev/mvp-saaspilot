import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <Badge className="mb-6 bg-[#0EA5E9]/20 text-[#0EA5E9] border-[#0EA5E9]/30">
            ⚡ Готовый продукт за 3–6 недель
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            Создаём MVP и онлайн‑сервисы для стартапов
          </h1>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Превращаем вашу идею в работающий SaaS‑продукт. Полный цикл разработки — от концепции до деплоя и поддержки.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-lg px-8">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Написать в Telegram
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg px-8">
              Посмотреть кейсы
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
