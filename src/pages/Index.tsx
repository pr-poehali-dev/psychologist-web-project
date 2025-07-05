import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [activeSection, setActiveSection] = useState("about");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Здесь будет обработка формы
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-gray-900">
                Психолог-аналитик
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button
                  onClick={() => setActiveSection("about")}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === "about"
                      ? "text-gray-900 border-b-2 border-gray-900"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  Обо мне
                </button>
                <button
                  onClick={() => setActiveSection("collaborate")}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === "collaborate"
                      ? "text-gray-900 border-b-2 border-gray-900"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  Сотрудничаю
                </button>
                <button
                  onClick={() => setActiveSection("consult")}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === "consult"
                      ? "text-gray-900 border-b-2 border-gray-900"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  Консультирую
                </button>
                <button
                  onClick={() => setActiveSection("write")}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === "write"
                      ? "text-gray-900 border-b-2 border-gray-900"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  Пишу
                </button>
                <button
                  onClick={() => setActiveSection("contact")}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === "contact"
                      ? "text-gray-900 border-b-2 border-gray-900"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  Контакты
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="/img/db6ecd47-34f1-4db2-9e3a-2594907007f9.jpg"
                  alt="Психолог имидж-аналитик"
                  className="w-80 h-80 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <Icon name="User" size={32} className="text-gray-600" />
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:pl-8">
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Анна Смирнова
                  </h2>
                  <p className="text-xl text-gray-600 mb-6">
                    Психолог • Имидж-аналитик • Консультант
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Помогаю людям найти гармонию между внутренним миром и
                    внешним образом. Работаю с психологическими аспектами
                    самопрезентации и формированием уверенности в себе.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Более 8 лет опыта в психологическом консультировании и
                    имидж-анализе. Сертифицированный специалист по работе с
                    личностными трансформациями.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Button
                    onClick={() => setActiveSection("contact")}
                    className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3"
                  >
                    Записаться на консультацию
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setActiveSection("about")}
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3"
                  >
                    Узнать больше
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Мои услуги
            </h2>
            <p className="text-lg text-gray-600">
              Комплексный подход к развитию личности
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" size={24} className="text-gray-600" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  Сотрудничество
                </CardTitle>
                <CardDescription>
                  Работаю с командами и организациями по развитию корпоративной
                  культуры
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Тренинги по командообразованию</li>
                  <li>• Консультации по HR-вопросам</li>
                  <li>• Работа с конфликтами</li>
                </ul>
              </CardContent>
            </Card>

            {/* Service Card 2 */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon
                    name="MessageCircle"
                    size={24}
                    className="text-gray-600"
                  />
                </div>
                <CardTitle className="text-xl font-semibold">
                  Консультирование
                </CardTitle>
                <CardDescription>
                  Индивидуальные и групповые психологические консультации
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Работа с самооценкой</li>
                  <li>• Имидж-консультирование</li>
                  <li>• Личностные трансформации</li>
                </ul>
              </CardContent>
            </Card>

            {/* Service Card 3 */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="PenTool" size={24} className="text-gray-600" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  Авторские материалы
                </CardTitle>
                <CardDescription>
                  Статьи, методики и экспертные материалы по психологии
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Статьи в профильных изданиях</li>
                  <li>• Методические пособия</li>
                  <li>• Вебинары и лекции</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Связаться со мной
            </h2>
            <p className="text-lg text-gray-600">
              Готова ответить на ваши вопросы и обсудить сотрудничество
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Отправить сообщение</CardTitle>
                <CardDescription>
                  Заполните форму, и я свяжусь с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Ваш email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Ваше сообщение"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gray-900 hover:bg-gray-800"
                  >
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Контактная информация
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" size={20} className="text-gray-600" />
                    <span className="text-gray-700">
                      anna.smirnova@example.com
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={20} className="text-gray-600" />
                    <span className="text-gray-700">+7 (999) 123-45-67</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" size={20} className="text-gray-600" />
                    <span className="text-gray-700">
                      Москва, Центральный район
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Социальные сети
                </h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" className="p-2">
                    <Icon name="Instagram" size={20} />
                  </Button>
                  <Button variant="outline" size="sm" className="p-2">
                    <Icon name="Linkedin" size={20} />
                  </Button>
                  <Button variant="outline" size="sm" className="p-2">
                    <Icon name="Facebook" size={20} />
                  </Button>
                  <Button variant="outline" size="sm" className="p-2">
                    <Icon name="MessageCircle" size={20} />
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Время работы
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p>Пн-Пт: 10:00 - 18:00</p>
                  <p>Сб: 11:00 - 16:00</p>
                  <p>Вс: выходной</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Анна Смирнова • Психолог-аналитик • Все права защищены
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
