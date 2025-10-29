import { Card, CardContent } from '@/components/ui/card';

const ResultSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Что вы получите в результате?
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Конечный результат — ваш запущенный цифровой продукт
          </p>
        </div>

        <div className="space-y-6">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <span className="text-4xl">🎯</span>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Готовый к использованию сайт или приложение
                  </h3>
                  <p className="text-white/70 text-lg leading-relaxed">
                    Не просто картинка в Figma, а ваш реальный сервис. Он будет делать ровно то, что нужно для проверки вашей главной идеи. 
                    Пользователи смогут зайти, зарегистрироваться и попробовать ваш продукт.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <span className="text-4xl">💰</span>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Полная ясность по бюджету и срокам
                  </h3>
                  <p className="text-white/70 text-lg leading-relaxed">
                    Стоимость и дата запуска известны до начала работы. Никаких неожиданностей в процессе. 
                    Вы платите фиксированную сумму и точно знаете, когда получите результат.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <span className="text-4xl">🤝</span>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Личный технический советник
                  </h3>
                  <p className="text-white/70 text-lg leading-relaxed">
                    Специалист, который отвечает на все ваши «глупые» вопросы и помогает принимать верные решения. 
                    Вы не останетесь один на один с непонятными техническими терминами.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <span className="text-4xl">⚡</span>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Запуск в интернете через 3-6 недель
                  </h3>
                  <p className="text-white/70 text-lg leading-relaxed">
                    Ваша идея станет осязаемой очень быстро. Уже через месяц вы сможете показывать работающий продукт клиентам, 
                    инвесторам и получать первую обратную связь.
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

export default ResultSection;
