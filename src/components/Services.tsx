import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Services = () => {
  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Сколько это стоит и что входит?
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Понятные пакеты услуг. Выбирайте под вашу задачу.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-[#0EA5E9]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Icon name="Rocket" className="text-[#0EA5E9]" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Пакет «Проверка идеи»</h3>
                  <p className="text-white/60">от 250 000 ₽</p>
                </div>
              </div>
              <p className="text-white/80 mb-4 text-lg">
                <strong className="text-white">Для кого:</strong> У вас есть идея, и вам нужно быстро создать работающий прототип для первых пользователей или инвесторов.
              </p>
              <p className="text-white/70 mb-4">
                <strong className="text-white">Что входит:</strong>
              </p>
              <ul className="space-y-2 text-white/70 mb-6 ml-4">
                <li>• Проектирование и дизайн интерфейса</li>
                <li>• Разработка ключевых функций</li>
                <li>• Запуск онлайн с доменом</li>
                <li>• Передача всех доступов</li>
              </ul>
              <div className="pt-4 border-t border-white/10">
                <p className="text-[#10B981] font-semibold text-lg">✅ Результат: Работающий сайт/приложение за 3-4 недели</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Icon name="Link2" className="text-purple-400" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Пакет «Автоматизация бизнеса»</h3>
                  <p className="text-white/60">от 300 000 ₽</p>
                </div>
              </div>
              <p className="text-white/80 mb-4 text-lg">
                <strong className="text-white">Для кого:</strong> Вы тратите много времени на рутину (отчёты, уведомления, перенос данных из одной системы в другую).
              </p>
              <p className="text-white/70 mb-4">
                <strong className="text-white">Что входит:</strong>
              </p>
              <ul className="space-y-2 text-white/70 mb-6 ml-4">
                <li>• Интеграция с вашими сервисами (Telegram, CRM, Excel)</li>
                <li>• Создание системы автоматизации</li>
                <li>• Настройка уведомлений и отчётов</li>
              </ul>
              <div className="pt-4 border-t border-white/10">
                <p className="text-[#10B981] font-semibold text-lg">✅ Результат: Экономия 10-40 часов работы в неделю</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-[#10B981]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Icon name="Brain" className="text-[#10B981]" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Пакет «Умный помощник с ИИ»</h3>
                  <p className="text-white/60">от 200 000 ₽</p>
                </div>
              </div>
              <p className="text-white/80 mb-4 text-lg">
                <strong className="text-white">Для кого:</strong> Вы хотите добавить в свой бизнес чат-бота, который отвечает на вопросы клиентов, или систему, которая анализирует документы.
              </p>
              <p className="text-white/70 mb-4">
                <strong className="text-white">Что входит:</strong>
              </p>
              <ul className="space-y-2 text-white/70 mb-6 ml-4">
                <li>• Разработка ИИ-ассистента</li>
                <li>• Обучение на ваших данных</li>
                <li>• Интеграция с вашим сайтом/Telegram</li>
              </ul>
              <div className="pt-4 border-t border-white/10">
                <p className="text-[#10B981] font-semibold text-lg">✅ Результат: Снижение нагрузки на поддержку до 70%</p>
              </div>
            </CardContent>
          </Card>


        </div>
      </div>
    </section>
  );
};

export default Services;