import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Services = () => {
  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">🔧 Что мы делаем</h2>
          <p className="text-xl text-white/70">Конкретные результаты для вашего бизнеса</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-[#0EA5E9]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Icon name="Rocket" className="text-[#0EA5E9]" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">🚀 MVP / SaaS‑продукты</h3>
                  <p className="text-white/60">Срок: от 3 недель · Бюджет: от 250 000 ₽</p>
                </div>
              </div>
              <ul className="space-y-3 text-white/70 mb-6">
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-[#10B981] mt-0.5 flex-shrink-0" size={20} />
                  <span>Создаём цифровые сервисы под ключ — от идеи до продакшена</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-[#10B981] mt-0.5 flex-shrink-0" size={20} />
                  <span>Backend: авторизация, роли доступа, биллинг, интеграции</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-[#10B981] mt-0.5 flex-shrink-0" size={20} />
                  <span>Frontend: личные кабинеты, таблицы, фильтры, визуализации</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-[#10B981] mt-0.5 flex-shrink-0" size={20} />
                  <span>ИИ‑функции: чат‑ассистенты, автотегирование, поиск</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-white/10">
                <p className="text-[#10B981] font-semibold">✓ Работающий продукт с первыми пользователями</p>
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
                  <h3 className="text-2xl font-bold text-white mb-2">⚙️ Интеграции и автоматизация</h3>
                  <p className="text-white/60">Срок: от 2–4 недель · Бюджет: от 300 000 ₽</p>
                </div>
              </div>
              <ul className="space-y-3 text-white/70 mb-6">
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-[#10B981] mt-0.5 flex-shrink-0" size={20} />
                  <span>Интеграции: CRM, платёжные шлюзы, API‑платформы</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-[#10B981] mt-0.5 flex-shrink-0" size={20} />
                  <span>Автоматизация: уведомления, сбор данных, отчётность</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-[#10B981] mt-0.5 flex-shrink-0" size={20} />
                  <span>Сбор данных: классификация и систематизация</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-[#10B981] mt-0.5 flex-shrink-0" size={20} />
                  <span>Рассылки и триггерные сценарии</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-white/10">
                <p className="text-[#10B981] font-semibold">✓ Экономия до 40 часов работы в неделю</p>
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
                  <h3 className="text-2xl font-bold text-white mb-2">🧠 ИИ‑возможности</h3>
                  <p className="text-white/60">Срок: от 2 недель · Бюджет: от 200 000 ₽</p>
                </div>
              </div>
              <ul className="space-y-3 text-white/70 mb-6">
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-[#10B981] mt-0.5 flex-shrink-0" size={20} />
                  <span>LLM‑ассистенты: чат‑боты и голосовые помощники</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-[#10B981] mt-0.5 flex-shrink-0" size={20} />
                  <span>RAG‑поиск: точные ответы из ваших документов</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-[#10B981] mt-0.5 flex-shrink-0" size={20} />
                  <span>OCR и классификация: распознавание документов</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-[#10B981] mt-0.5 flex-shrink-0" size={20} />
                  <span>Автоматические теги и категоризация контента</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-white/10">
                <p className="text-[#10B981] font-semibold">✓ Снижение нагрузки на поддержку до 70%</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-orange-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Icon name="Settings" className="text-orange-400" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">🧩 Поддержка и DevOps</h3>
                  <p className="text-white/60">Формат: по подписке</p>
                </div>
              </div>
              <ul className="space-y-3 text-white/70 mb-6">
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-[#10B981] mt-0.5 flex-shrink-0" size={20} />
                  <span>CI/CD и деплой в облаке или on‑premise</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-[#10B981] mt-0.5 flex-shrink-0" size={20} />
                  <span>Мониторинг метрик, логов и алертов (RPS, Latency)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-[#10B981] mt-0.5 flex-shrink-0" size={20} />
                  <span>Безопасность, бэкапы, управление доступами</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-[#10B981] mt-0.5 flex-shrink-0" size={20} />
                  <span>SLA‑поддержка 24/7 с гарантиями uptime</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-white/10">
                <p className="text-[#10B981] font-semibold">✓ Uptime 99.9% и быстрое реагирование</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
