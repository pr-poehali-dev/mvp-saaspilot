import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <Badge className="mb-6 bg-[#0EA5E9]/20 text-[#0EA5E9] border-[#0EA5E9]/30">
            ⚡ Готовый SaaS за 3–6 недель
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            От идеи до работающего продукта без технических рисков
          </h1>
          <p className="text-xl text-white/70 mb-4 max-w-3xl mx-auto">
            Создаём MVP для стартапов с фиксированным бюджетом и сроками. Вы проверяете гипотезу на реальных пользователях — мы берём на себя всю техническую часть.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-white/60">
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle" size={20} className="text-[#10B981]" />
              <span>Фикс цена и сроки</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Code" size={20} className="text-[#0EA5E9]" />
              <span>Полный цикл: от идеи до деплоя</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Users" size={20} className="text-[#10B981]" />
              <span>CTO-консультация в команде</span>
            </div>
          </div>
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