import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    comment: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#0F1419]">
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

      <section id="process" className="py-20 px-4 bg-gradient-to-b from-transparent to-[#10B981]/5">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">🔄 Как мы работаем</h2>
            <p className="text-xl text-white/70">Прозрачный процесс от идеи до запуска</p>
          </div>

          <div className="space-y-8">
            {[
              {
                num: '1',
                title: 'Аналитика и прототип',
                desc: 'Системный аналитик помогает сформулировать видение, user stories и UI‑прототип.',
                result: 'Согласованный план работ на 3–6 недель и беклог по спринтам.',
                icon: 'FileText'
              },
              {
                num: '2',
                title: 'Разработка MVP',
                desc: 'Итерации по 1–2 недели, код‑ревью, линтеры, автотесты, демо в конце каждой итерации.',
                result: 'Приватный репозиторий, доступы на stage, регулярные демонстрации.',
                icon: 'Code'
              },
              {
                num: '3',
                title: 'Запуск продукта',
                desc: 'Подготавливаем инфраструктуру, деплой, миграции, мониторинг, алерты.',
                result: 'Запущенный онлайн‑сервис с документацией (Runbook, /health, эндпоинты).',
                icon: 'Zap'
              },
              {
                num: '4',
                title: 'Поддержка и развитие',
                desc: 'Фиксируем SLA, анализируем метрики и формируем roadmap v2.',
                result: 'Стабильный продукт с планом развития.',
                icon: 'TrendingUp'
              }
            ].map((step, idx) => (
              <Card key={idx} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0EA5E9] to-[#10B981] flex items-center justify-center text-white text-2xl font-bold">
                        {step.num}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-3">
                        <Icon name={step.icon as any} className="text-[#0EA5E9] mt-1" size={24} />
                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                      </div>
                      <p className="text-white/70 mb-4">{step.desc}</p>
                      <div className="bg-[#10B981]/10 border border-[#10B981]/30 rounded-lg p-4">
                        <p className="text-[#10B981] font-semibold flex items-start gap-2">
                          <Icon name="CheckCircle" className="flex-shrink-0 mt-0.5" size={20} />
                          <span>Выход: {step.result}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">🧩 Примеры проектов</h2>
            <p className="text-xl text-white/70">Реальные кейсы с конкретными результатами</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white/5 border-white/10 backdrop-blur-sm rounded-xl px-6">
              <AccordionTrigger className="text-white hover:text-[#0EA5E9] text-left py-6">
                <div className="flex items-center gap-4">
                  <Badge className="bg-[#0EA5E9]/20 text-[#0EA5E9] border-[#0EA5E9]/30">1</Badge>
                  <span className="text-xl font-semibold">ERP для логистики</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-white/70 pb-6">
                <div className="space-y-4">
                  <p>Управление заявками, проверка подрядчиков, назначение исполнителей, контроль статусов.</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-[#0EA5E9]/30 text-[#0EA5E9]">FastAPI</Badge>
                    <Badge variant="outline" className="border-[#0EA5E9]/30 text-[#0EA5E9]">React</Badge>
                    <Badge variant="outline" className="border-[#0EA5E9]/30 text-[#0EA5E9]">PostgreSQL</Badge>
                    <Badge variant="outline" className="border-[#0EA5E9]/30 text-[#0EA5E9]">Redis</Badge>
                  </div>
                  <div className="bg-[#10B981]/10 border border-[#10B981]/30 rounded-lg p-4 mt-4">
                    <p className="text-[#10B981] font-semibold">✓ Результат: Сокращение времени обработки заявок на 65%</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white/5 border-white/10 backdrop-blur-sm rounded-xl px-6">
              <AccordionTrigger className="text-white hover:text-[#0EA5E9] text-left py-6">
                <div className="flex items-center gap-4">
                  <Badge className="bg-[#0EA5E9]/20 text-[#0EA5E9] border-[#0EA5E9]/30">2</Badge>
                  <span className="text-xl font-semibold">Система автоторгов</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-white/70 pb-6">
                <div className="space-y-4">
                  <p>Интеграция с площадками заказчиков, расчёт ставок по бизнес‑правилам, учёт ограничений.</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-[#0EA5E9]/30 text-[#0EA5E9]">FastAPI</Badge>
                    <Badge variant="outline" className="border-[#0EA5E9]/30 text-[#0EA5E9]">External API</Badge>
                    <Badge variant="outline" className="border-[#0EA5E9]/30 text-[#0EA5E9]">MongoDB</Badge>
                    <Badge variant="outline" className="border-[#0EA5E9]/30 text-[#0EA5E9]">Telegram Bot</Badge>
                  </div>
                  <div className="bg-[#10B981]/10 border border-[#10B981]/30 rounded-lg p-4 mt-4">
                    <p className="text-[#10B981] font-semibold">✓ Результат: Автоматизация участия в 200+ торгах ежемесячно</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white/5 border-white/10 backdrop-blur-sm rounded-xl px-6">
              <AccordionTrigger className="text-white hover:text-[#0EA5E9] text-left py-6">
                <div className="flex items-center gap-4">
                  <Badge className="bg-[#0EA5E9]/20 text-[#0EA5E9] border-[#0EA5E9]/30">3</Badge>
                  <span className="text-xl font-semibold">Аналитика для маркетплейсов</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-white/70 pb-6">
                <div className="space-y-4">
                  <p>Дашборды продаж и остатков по Wildberries с автообновлением и фильтрацией.</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-[#0EA5E9]/30 text-[#0EA5E9]">Python</Badge>
                    <Badge variant="outline" className="border-[#0EA5E9]/30 text-[#0EA5E9]">Yandex DataLens</Badge>
                    <Badge variant="outline" className="border-[#0EA5E9]/30 text-[#0EA5E9]">API Wildberries</Badge>
                  </div>
                  <div className="bg-[#10B981]/10 border border-[#10B981]/30 rounded-lg p-4 mt-4">
                    <p className="text-[#10B981] font-semibold">✓ Результат: Рост прибыли на 35% за счёт data-driven решений</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white/5 border-white/10 backdrop-blur-sm rounded-xl px-6">
              <AccordionTrigger className="text-white hover:text-[#0EA5E9] text-left py-6">
                <div className="flex items-center gap-4">
                  <Badge className="bg-[#0EA5E9]/20 text-[#0EA5E9] border-[#0EA5E9]/30">4</Badge>
                  <span className="text-xl font-semibold">Бронирования рабочих мест</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-white/70 pb-6">
                <div className="space-y-4">
                  <p>Платформа для офисов/коворкингов: бронирование столов, переговорок, парковок. Роли админ/сотрудник, календарь, аналитика использования.</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="outline" className="border-[#0EA5E9]/30 text-[#0EA5E9]">FastAPI</Badge>
                    <Badge variant="outline" className="border-[#0EA5E9]/30 text-[#0EA5E9]">React</Badge>
                    <Badge variant="outline" className="border-[#0EA5E9]/30 text-[#0EA5E9]">PostgreSQL</Badge>
                    <Badge variant="outline" className="border-[#0EA5E9]/30 text-[#0EA5E9]">Telegram Bot</Badge>
                  </div>
                  <p className="text-white/60">Срок MVP: 4 недели</p>
                  <div className="bg-[#10B981]/10 border border-[#10B981]/30 rounded-lg p-4 mt-4">
                    <p className="text-[#10B981] font-semibold">✓ Результат: Оптимизация использования офисных площадей на 45%</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white/5 border-white/10 backdrop-blur-sm rounded-xl px-6">
              <AccordionTrigger className="text-white hover:text-[#0EA5E9] text-left py-6">
                <div className="flex items-center gap-4">
                  <Badge className="bg-[#0EA5E9]/20 text-[#0EA5E9] border-[#0EA5E9]/30">5</Badge>
                  <span className="text-xl font-semibold">Подписки на консультации</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-white/70 pb-6">
                <div className="space-y-4">
                  <p>Онлайн‑платформа для экспертов (психологи, юристы, коучи): планировщик встреч, оплата, напоминания, интеграция с календарями Google.</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="outline" className="border-[#0EA5E9]/30 text-[#0EA5E9]">FastAPI</Badge>
                    <Badge variant="outline" className="border-[#0EA5E9]/30 text-[#0EA5E9]">React</Badge>
                    <Badge variant="outline" className="border-[#0EA5E9]/30 text-[#0EA5E9]">Stripe API</Badge>
                  </div>
                  <p className="text-white/60">Срок MVP: 5 недель</p>
                  <div className="bg-[#10B981]/10 border border-[#10B981]/30 rounded-lg p-4 mt-4">
                    <p className="text-[#10B981] font-semibold">✓ Результат: 10+ экспертов привлечено в первый месяц</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-transparent to-[#0EA5E9]/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">🤝 Обсудим вашу идею?</h2>
            <p className="text-xl text-white/70">
              Мы предложим план пилотного проекта на 3–6 недель с оценкой сроков и бюджета.
            </p>
            <p className="text-white/60 mt-2">
              CTO свяжется с вами в течение 1 рабочего дня.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-xl bg-[#0EA5E9]/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="MessageCircle" className="text-[#0EA5E9]" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Написать в Telegram</h3>
                <p className="text-white/60 mb-4">Быстрый ответ в мессенджере</p>
                <Button className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 w-full">
                  Открыть Telegram
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-xl bg-[#10B981]/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="FileText" className="text-[#10B981]" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Заполнить форму</h3>
                <p className="text-white/60 mb-4">Опишите задачу подробно</p>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 w-full">
                  К форме заявки
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-white/10 to-white/5 border-white/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white font-medium">Имя</label>
                    <Input 
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white font-medium">Телефон</label>
                    <Input 
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-white font-medium">Комментарий (необязательно)</label>
                  <Textarea 
                    placeholder="Кратко опишите идею или задачу"
                    value={formData.comment}
                    onChange={(e) => setFormData({...formData, comment: e.target.value})}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40 min-h-[120px]"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-lg">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-white/10">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-[#0EA5E9] to-[#10B981] bg-clip-text text-transparent mb-4">
              Python-Team
            </div>
            <p className="text-white/60 mb-4">MVP → CI/CD → Prod · /health · Logs · SLA</p>
            <p className="text-white/40">Россия · SaaS‑стартапы</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
