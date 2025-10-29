import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ForFounders = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-[#0EA5E9]/5">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Зачем фаундеру этот проект?
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              У вас есть идея, но непонятно, как проверить её без риска потратить бюджет впустую. Мы решаем эту проблему.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 animate-fade-in">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center mb-4">
                  <Icon name="AlertCircle" className="text-red-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Типичные проблемы</h3>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">❌</span>
                    <span><strong className="text-white">Не знаю, с чего начать:</strong> Идея есть, но нет понимания технической реализации и архитектуры</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">❌</span>
                    <span><strong className="text-white">Страх неудачи:</strong> Боюсь вложить 2–5 млн ₽ и получить продукт, который никому не нужен</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">❌</span>
                    <span><strong className="text-white">Нет техкоманды:</strong> В штате нет CTO, разработчиков и DevOps — не понимаю, кого нанимать</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">❌</span>
                    <span><strong className="text-white">Сроки горят:</strong> Конкуренты уже на рынке или окно возможностей быстро закрывается</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 animate-fade-in">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-[#10B981]/20 flex items-center justify-center mb-4">
                  <Icon name="CheckCircle" className="text-[#10B981]" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Что вы получаете</h3>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-[#10B981] mt-1">✅</span>
                    <span><strong className="text-white">Работающий MVP за 3–6 недель:</strong> Готовый продукт для проверки гипотезы на реальных пользователях</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10B981] mt-1">✅</span>
                    <span><strong className="text-white">Прозрачность и контроль:</strong> Фиксированная цена от 250 000 ₽, понедельные демо, нет скрытых платежей</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10B981] mt-1">✅</span>
                    <span><strong className="text-white">Технический партнёр:</strong> CTO в команде — помогает принимать решения, консультирует по архитектуре</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10B981] mt-1">✅</span>
                    <span><strong className="text-white">Полная передача проекта:</strong> Исходный код, документация, доступы — всё ваше, можете продолжить с любой командой</span>
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
                  <h3 className="text-2xl font-bold text-white mb-3">Какие задачи решаем</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-white/90 font-medium mb-1">🎯 Валидация идеи за минимальный бюджет</p>
                      <p className="text-white/70 text-sm">Вместо найма команды за 800 000 ₽/мес — создаём MVP за 250–500 тыс. и проверяем спрос за 4–6 недель</p>
                    </div>
                    <div>
                      <p className="text-white/90 font-medium mb-1">⚡ Быстрый выход на рынок</p>
                      <p className="text-white/70 text-sm">По данным McKinsey, правильная MVP-стратегия ускоряет запуск на 40% и снижает риски провала на 60%</p>
                    </div>
                    <div>
                      <p className="text-white/90 font-medium mb-1">💼 Техническая экспертиза без найма CTO</p>
                      <p className="text-white/70 text-sm">Наш CTO участвует в проекте — помогает с архитектурой, технологиями, roadmap. Без долгосрочных обязательств</p>
                    </div>
                    <div>
                      <p className="text-white/90 font-medium mb-1">📊 Данные для инвесторов и следующих раундов</p>
                      <p className="text-white/70 text-sm">Получаете работающий продукт с первыми пользователями — сильный аргумент для привлечения инвестиций</p>
                    </div>
                  </div>
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