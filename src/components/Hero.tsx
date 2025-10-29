import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <Badge className="mb-6 bg-[#0EA5E9]/20 text-[#0EA5E9] border-[#0EA5E9]/30 text-base">
            ⚡ Готовый сервис за 1 месяц
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent leading-tight">
            Есть бизнес-идея?
            <br />
            Превратите её в работающий сайт или приложение
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-4xl mx-auto font-medium">
            Фиксированная цена. Никаких технических рисков.
          </p>
          <p className="text-lg text-white/70 mb-8 max-w-3xl mx-auto">
            Мы — ваши руки в мире технологий. Пока вы проверяете спрос на свою идею среди первых клиентов, мы берём на себя всю сложную техническую часть: дизайн, программирование, запуск и поддержку.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-lg px-8 py-6">
              <Icon name="Calculator" className="mr-2" size={20} />
              Рассчитать стоимость и срок
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6">
              Посмотреть, как мы работаем
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;