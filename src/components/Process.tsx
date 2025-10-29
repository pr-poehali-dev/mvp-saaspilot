import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Process = () => {
  const steps = [
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
  ];

  return (
    <section id="process" className="py-20 px-4 bg-gradient-to-b from-transparent to-[#10B981]/5">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">🔄 Как мы работаем</h2>
          <p className="text-xl text-white/70">Прозрачный процесс от идеи до запуска</p>
        </div>

        <div className="space-y-8">
          {steps.map((step, idx) => (
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
  );
};

export default Process;
