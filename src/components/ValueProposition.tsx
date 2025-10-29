import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ValueProposition = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#0EA5E9]/5 to-transparent">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Что конкретно получаете после проекта
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Не просто код — готовый к масштабированию продукт с полным контролем
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-gradient-to-br from-white/10 to-white/5 border-white/20 backdrop-blur-sm hover:scale-105 transition-transform">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-xl bg-[#0EA5E9]/20 flex items-center justify-center mx-auto mb-4">
                <Icon name="Code" className="text-[#0EA5E9]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Полный исходный код</h3>
              <p className="text-white/70 mb-4">
                Приватный репозиторий GitHub с документацией, комментариями и CI/CD настройками
              </p>
              <ul className="text-sm text-white/60 space-y-1 text-left">
                <li>✓ Весь код — ваш, без ограничений</li>
                <li>✓ Можете продолжить с любой командой</li>
                <li>✓ Автотесты и линтеры настроены</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-white/10 to-white/5 border-white/20 backdrop-blur-sm hover:scale-105 transition-transform">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-xl bg-[#10B981]/20 flex items-center justify-center mx-auto mb-4">
                <Icon name="Rocket" className="text-[#10B981]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Задеплоенный продукт</h3>
              <p className="text-white/70 mb-4">
                Работающий SaaS с доменом, SSL, мониторингом, логами и автоматическими бэкапами
              </p>
              <ul className="text-sm text-white/60 space-y-1 text-left">
                <li>✓ Готов к приёму пользователей</li>
                <li>✓ Настроен CI/CD для обновлений</li>
                <li>✓ Мониторинг метрик и алертов</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-white/10 to-white/5 border-white/20 backdrop-blur-sm hover:scale-105 transition-transform">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-xl bg-[#F59E0B]/20 flex items-center justify-center mx-auto mb-4">
                <Icon name="FileText" className="text-[#F59E0B]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Документация и передача</h3>
              <p className="text-white/70 mb-4">
                Техническая документация, Runbook, API-спецификация и обучение вашей команды
              </p>
              <ul className="text-sm text-white/60 space-y-1 text-left">
                <li>✓ Описание архитектуры и компонентов</li>
                <li>✓ Инструкции для новых разработчиков</li>
                <li>✓ План развития (roadmap v2)</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-br from-[#0EA5E9]/10 to-[#10B981]/10 border-[#0EA5E9]/30 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  💡 Бонус: Первые пользователи и обратная связь
                </h3>
                <p className="text-white/80 mb-4">
                  Помогаем привлечь первых 10-50 пользователей для тестирования через наши каналы и сообщества.
                </p>
                <p className="text-white/70">
                  Вы получаете не только продукт, но и реальные отзывы для следующих итераций.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-white/5 p-4 rounded-lg">
                  <Icon name="Users" className="text-[#0EA5E9]" size={24} />
                  <div>
                    <p className="text-white font-medium">Бета-тестеры</p>
                    <p className="text-white/60 text-sm">Привлечение первых пользователей</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-4 rounded-lg">
                  <Icon name="MessageCircle" className="text-[#10B981]" size={24} />
                  <div>
                    <p className="text-white font-medium">Обратная связь</p>
                    <p className="text-white/60 text-sm">Интервью и сбор метрик</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-4 rounded-lg">
                  <Icon name="TrendingUp" className="text-[#F59E0B]" size={24} />
                  <div>
                    <p className="text-white font-medium">Аналитика</p>
                    <p className="text-white/60 text-sm">Отчёты по юнит-экономике</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ValueProposition;
