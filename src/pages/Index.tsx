import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      title: 'Путешествие по сказкам',
      subtitle: 'Сказка "Репка"',
      type: 'title',
      content: 'Открытое занятие во второй младшей группе'
    },
    {
      id: 1,
      title: 'Начало сказки',
      character: '👴',
      text: 'Посадил дед репку',
      description: 'Дедушка посадил в землю маленькое семечко репки'
    },
    {
      id: 2,
      title: 'Репка выросла',
      character: '🥕',
      text: 'Выросла репка большая-пребольшая',
      description: 'Репка росла-росла и стала очень большой!'
    },
    {
      id: 3,
      title: 'Дед зовёт бабку',
      character: '👴👵',
      text: 'Позвал дед бабку',
      description: 'Дедушка не может вытянуть репку один'
    },
    {
      id: 4,
      title: 'Бабка зовёт внучку',
      character: '👧',
      text: 'Позвала бабка внучку',
      description: 'Бабка с дедом тянут-потянут, а вытянуть не могут'
    },
    {
      id: 5,
      title: 'Внучка зовёт Жучку',
      character: '🐕',
      text: 'Позвала внучка Жучку',
      description: 'Внучка помогает, но репка крепко сидит в земле'
    },
    {
      id: 6,
      title: 'Жучка зовёт кошку',
      character: '🐈',
      text: 'Позвала Жучка кошку',
      description: 'Даже с Жучкой не получается вытянуть репку'
    },
    {
      id: 7,
      title: 'Кошка зовёт мышку',
      character: '🐭',
      text: 'Позвала кошка мышку',
      description: 'Нужна помощь ещё одного друга!'
    },
    {
      id: 8,
      title: 'Вытянули репку!',
      character: '🎉',
      text: 'Тянут-потянут — и вытянули репку!',
      description: 'Все вместе смогли вытянуть большую репку!'
    },
    {
      id: 9,
      title: 'Чему учит сказка',
      type: 'conclusion',
      lessons: [
        '🤝 Вместе мы сильнее',
        '💪 Нужно помогать друг другу',
        '⭐ Даже маленькая мышка важна',
        '❤️ Дружба помогает справиться с трудностями'
      ]
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 relative overflow-hidden">
      <div className="cloud cloud-1">☁️</div>
      <div className="cloud cloud-2">☁️</div>
      <div className="cloud cloud-3">☁️</div>
      
      <div className="star star-1">✨</div>
      <div className="star star-2">⭐</div>
      <div className="star star-3">✨</div>
      <div className="star star-4">⭐</div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <Card className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm shadow-2xl border-4 border-purple-200 rounded-3xl overflow-hidden animate-scale-in">
          <div className="p-8 md:p-12 min-h-[500px] flex flex-col justify-between">
            {slide.type === 'title' ? (
              <div className="text-center space-y-8 flex-1 flex flex-col justify-center animate-fade-in">
                <div className="text-7xl mb-6 animate-bounce">📚</div>
                <h1 className="text-6xl md:text-7xl font-bold text-purple-600 mb-4 font-caveat">
                  {slide.title}
                </h1>
                <h2 className="text-4xl md:text-5xl text-pink-500 font-caveat">
                  {slide.subtitle}
                </h2>
                <p className="text-2xl text-purple-400 mt-8">
                  {slide.content}
                </p>
              </div>
            ) : slide.type === 'conclusion' ? (
              <div className="space-y-8 flex-1 flex flex-col justify-center animate-fade-in">
                <h1 className="text-5xl md:text-6xl font-bold text-purple-600 text-center font-caveat">
                  {slide.title}
                </h1>
                <div className="grid gap-6 mt-8">
                  {slide.lessons?.map((lesson, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-2xl text-2xl md:text-3xl text-purple-700 hover-scale animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {lesson}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-6 flex-1 flex flex-col justify-center animate-fade-in">
                <h2 className="text-4xl md:text-5xl font-bold text-purple-600 text-center font-caveat">
                  {slide.title}
                </h2>
                <div className="text-9xl text-center my-8 animate-bounce">
                  {slide.character}
                </div>
                <p className="text-3xl md:text-4xl text-pink-500 text-center font-caveat font-bold">
                  {slide.text}
                </p>
                <p className="text-xl md:text-2xl text-purple-400 text-center mt-4">
                  {slide.description}
                </p>
              </div>
            )}

            <div className="flex items-center justify-between mt-8 pt-6 border-t-2 border-purple-200">
              <Button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                size="lg"
                className="bg-purple-500 hover:bg-purple-600 text-white rounded-full px-8 text-xl disabled:opacity-30"
              >
                <Icon name="ChevronLeft" size={24} />
                Назад
              </Button>

              <div className="text-2xl font-bold text-purple-600">
                {currentSlide + 1} / {slides.length}
              </div>

              <Button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                size="lg"
                className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-8 text-xl disabled:opacity-30"
              >
                Вперёд
                <Icon name="ChevronRight" size={24} />
              </Button>
            </div>
          </div>
        </Card>

        <div className="flex justify-center gap-3 mt-6 flex-wrap max-w-4xl mx-auto">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all hover-scale ${
                index === currentSlide
                  ? 'bg-purple-600 w-12'
                  : 'bg-purple-300 hover:bg-purple-400'
              }`}
              aria-label={`Слайд ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
