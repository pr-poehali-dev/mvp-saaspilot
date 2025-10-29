import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ForFounders = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-[#0EA5E9]/5">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Вам не нужно разбираться в технологиях.
              <br />
              Вам нужно быстро проверить свою идею.
            </h2>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              Представьте, что вы архитектор. Вам не нужно уметь класть кирпичи, чтобы построить дом. Вы создаёте проект и управляете процессом. <strong className="text-white">Мы — ваша строительная бригада</strong>, которая по вашему проекту быстро и качественно возводит стены.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 animate-fade-in">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center mb-4">
                  <Icon name="AlertCircle" className="text-red-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Ваши сложности</h3>
                <ul className="space-y-4 text-white/80">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🤔</span>
                    <div>
                      <p className="font-semibold text-white mb-1">«Я не знаю, во сколько это обойдётся и сколько займёт времени»</p>
                      <p className="text-sm text-white/70">Мы делаем работу за фиксированную цену и срок</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">😟</span>
                    <div>
                      <p className="font-semibold text-white mb-1">«Боюсь нанять непонятных ребят, которые сделают не так и сльют бюджет»</p>
                      <p className="text-sm text-white/70">Мы работаем по прозрачному плану с еженедельными отчётами</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">👤</span>
                    <div>
                      <p className="font-semibold text-white mb-1">«У меня нет технического сооснователя»</p>
                      <p className="text-sm text-white/70">Наш старший разработчик станет вашим временным техническим партнёром</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">💼</span>
                    <div>
                      <p className="font-semibold text-white mb-1">«Мне нужно показать инвесторам РАБОТАЮЩИЙ прототип»</p>
                      <p className="text-sm text-white/70">Мы запускаем полноценный онлайн-сервис, в который можно войти и попробовать</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 animate-fade-in">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-[#10B981]/20 flex items-center justify-center mb-4">
                  <Icon name="CheckCircle" className="text-[#10B981]" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Наши решения</h3>
                <ul className="space-y-4 text-white/80">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✅</span>
                    <div>
                      <p className="font-semibold text-white mb-1">Полная ясность по бюджету и срокам</p>
                      <p className="text-sm text-white/70">Стоимость и дата запуска известны до начала работы</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">👨‍💻</span>
                    <div>
                      <p className="font-semibold text-white mb-1">Личный технический советник</p>
                      <p className="text-sm text-white/70">Специалист, который отвечает на все ваши вопросы и помогает принимать верные решения</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🚀</span>
                    <div>
                      <p className="font-semibold text-white mb-1">Запуск в интернете через 3-6 недель</p>
                      <p className="text-sm text-white/70">Ваша идея станет осязаемой очень быстро</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">💻</span>
                    <div>
                      <p className="font-semibold text-white mb-1">Готовый к использованию сайт или приложение</p>
                      <p className="text-sm text-white/70">Он будет делать ровно то, что нужно для проверки вашей главной идеи</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>


        </div>
      </div>
    </section>
  );
};

export default ForFounders;