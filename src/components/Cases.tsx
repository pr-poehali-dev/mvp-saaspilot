import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Cases = () => {
  return (
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
  );
};

export default Cases;
