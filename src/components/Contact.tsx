import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Contact = () => {
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
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-transparent to-[#0EA5E9]/5">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Готовы сделать первый шаг?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Бесплатно оценим вашу идею, составим предварительный план и назовём точную стоимость и сроки.
          </p>
          <p className="text-white/60 mt-3 text-lg">
            Без обязательств. Ответим в течение 1 рабочего дня.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-xl bg-[#0EA5E9]/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Icon name="MessageCircle" className="text-[#0EA5E9]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Написать в Telegram</h3>
              <p className="text-white/60 mb-4">Быстрая консультация в мессенджере</p>
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
              <h3 className="text-xl font-bold text-white mb-2">Записаться на консультацию</h3>
              <p className="text-white/60 mb-4">Заполните форму ниже</p>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 w-full" onClick={() => document.getElementById('contact-form')?.scrollIntoView({behavior: 'smooth'})}>
                К форме
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card id="contact-form" className="bg-gradient-to-br from-white/10 to-white/5 border-white/20 backdrop-blur-sm">
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
  );
};

export default Contact;