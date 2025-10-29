import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ForFounders = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-[#0EA5E9]/5">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-white mb-4">
              Зачем фаундеру Python-Team?
            </h2>
            <p className="text-xl text-white/70">
              Проверка гипотезы без лишних рисков и трат
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 animate-fade-in">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center mb-4">
                  <Icon name="AlertCircle" className="text-red-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Боли фаундера</h3>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Идея есть, но непонятно с чего начать</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Боюсь потратить бюджет впустую</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Нет технической экспертизы в команде</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Нужно быстро выйти на рынок</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 animate-fade-in">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-[#10B981]/20 flex items-center justify-center mb-4">
                  <Icon name="CheckCircle" className="text-[#10B981]" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Что получаете</h3>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-[#10B981] mt-1">✓</span>
                    <span>Готовый MVP для тестирования гипотезы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10B981] mt-1">✓</span>
                    <span>Фиксированный бюджет и сроки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10B981] mt-1">✓</span>
                    <span>CTO-консультация на каждом этапе</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10B981] mt-1">✓</span>
                    <span>Запуск в production за 3–6 недель</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-[#0EA5E9]/20 to-[#10B981]/20 border-[#0EA5E9]/30 backdrop-blur-sm animate-scale-in">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#0EA5E9]/30 flex items-center justify-center flex-shrink-0">
                  <Icon name="TrendingUp" className="text-[#0EA5E9]" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Снижение рисков на 60%</h3>
                  <p className="text-white/80 mb-4">
                    Согласно отчёту McKinsey, продуманная стратегия MVP снижает риск провала продукта на <span className="text-[#10B981] font-bold">60%</span> и ускоряет выход на рынок на <span className="text-[#10B981] font-bold">40%</span>.
                  </p>
                  <p className="text-white/70">
                    Мы помогаем проверить гипотезу на реальных пользователях, чтобы вы не тратили ресурсы впустую.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ForFounders;
