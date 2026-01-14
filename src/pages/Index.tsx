import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedStory, setSelectedStory] = useState<string | null>(null);

  const stories = {
    repka: [
      {
        id: 0,
        title: 'Начало сказки',
        character: '👴',
        text: 'Посадил дед репку',
        description: 'Дедушка посадил в землю маленькое семечко репки'
      },
      {
        id: 1,
        title: 'Репка выросла',
        character: '🥕',
        text: 'Выросла репка большая-пребольшая',
        description: 'Репка росла-росла и стала очень большой!'
      },
      {
        id: 2,
        title: 'Дед зовёт бабку',
        character: '👴👵',
        text: 'Позвал дед бабку',
        description: 'Дедушка не может вытянуть репку один'
      },
      {
        id: 3,
        title: 'Бабка зовёт внучку',
        character: '👧',
        text: 'Позвала бабка внучку',
        description: 'Бабка с дедом тянут-потянут, а вытянуть не могут'
      },
      {
        id: 4,
        title: 'Внучка зовёт Жучку',
        character: '🐕',
        text: 'Позвала внучка Жучку',
        description: 'Внучка помогает, но репка крепко сидит в земле'
      },
      {
        id: 5,
        title: 'Жучка зовёт кошку',
        character: '🐈',
        text: 'Позвала Жучка кошку',
        description: 'Даже с Жучкой не получается вытянуть репку'
      },
      {
        id: 6,
        title: 'Кошка зовёт мышку',
        character: '🐭',
        text: 'Позвала кошка мышку',
        description: 'Нужна помощь ещё одного друга!'
      },
      {
        id: 7,
        title: 'Вытянули репку!',
        character: '🎉',
        text: 'Тянут-потянут — и вытянули репку!',
        description: 'Все вместе смогли вытянуть большую репку!'
      }
    ],
    kolobok: [
      {
        id: 0,
        title: 'Испекли колобок',
        character: '👵',
        text: 'Испекла бабка колобок',
        description: 'Бабушка замесила тесто и испекла румяный колобок'
      },
      {
        id: 1,
        title: 'Колобок убежал',
        character: '🏃',
        text: 'Покатился колобок по дорожке',
        description: 'Колобок остыл на окошке и укатился в лес'
      },
      {
        id: 2,
        title: 'Встреча с зайцем',
        character: '🐰',
        text: 'Встретил колобок зайца',
        description: 'Заяц хотел съесть колобка, но он спел песенку и укатился'
      },
      {
        id: 3,
        title: 'Встреча с волком',
        character: '🐺',
        text: 'Встретил колобок волка',
        description: 'Волк хотел съесть колобка, но он снова спел и укатился'
      },
      {
        id: 4,
        title: 'Встреча с медведем',
        character: '🐻',
        text: 'Встретил колобок медведя',
        description: 'Медведь хотел съесть колобка, но колобок опять укатился'
      },
      {
        id: 5,
        title: 'Встреча с лисой',
        character: '🦊',
        text: 'Встретил колобок лису',
        description: 'Лиса попросила колобка спеть громче'
      },
      {
        id: 6,
        title: 'Хитрая лиса',
        character: '😔',
        text: 'Лиса съела колобка',
        description: 'Лиса оказалась хитрее всех и обманула колобка'
      }
    ],
    ryaba: [
      {
        id: 0,
        title: 'Курочка Ряба',
        character: '🐔',
        text: 'Жили-были дед да баба',
        description: 'И была у них курочка Ряба'
      },
      {
        id: 1,
        title: 'Золотое яичко',
        character: '🥚',
        text: 'Снесла курочка яичко',
        description: 'Яичко не простое — золотое!'
      },
      {
        id: 2,
        title: 'Дед бил-бил',
        character: '👴',
        text: 'Дед бил-бил — не разбил',
        description: 'Дедушка пытался разбить яичко, но не смог'
      },
      {
        id: 3,
        title: 'Баба била-bila',
        character: '👵',
        text: 'Баба била-била — не разбила',
        description: 'Бабушка тоже пыталась, но яичко было крепкое'
      },
      {
        id: 4,
        title: 'Мышка бежала',
        character: '🐭',
        text: 'Мышка бежала, хвостиком махнула',
        description: 'Мышка случайно задела яичко хвостиком'
      },
      {
        id: 5,
        title: 'Яичко упало',
        character: '💔',
        text: 'Яичко упало и разбилось',
        description: 'Золотое яичко разбилось на мелкие кусочки'
      },
      {
        id: 6,
        title: 'Утешение',
        character: '🐔',
        text: 'Не плачь, дед, не плачь, баба',
        description: 'Курочка Ряба успокаивает их и обещает снести простое яичко'
      }
    ]
  };

  const storyMenu = [
    { id: 'repka', name: 'Репка', emoji: '🥕', color: 'from-orange-100 to-yellow-100' },
    { id: 'kolobok', name: 'Колобок', emoji: '🌝', color: 'from-yellow-100 to-orange-100' },
    { id: 'ryaba', name: 'Курочка Ряба', emoji: '🐔', color: 'from-amber-100 to-yellow-100' }
  ];

  const conclusionSlide = {
    id: 999,
    title: 'Чему учит сказка',
    type: 'conclusion',
    lessons: selectedStory === 'repka' 
      ? [
          '🤝 Вместе мы сильнее',
          '💪 Нужно помогать друг другу',
          '⭐ Даже маленькая мышка важна',
          '❤️ Дружба помогает справиться с трудностями'
        ]
      : selectedStory === 'kolobok'
      ? [
          '⚠️ Нельзя убегать от взрослых',
          '🧠 Не нужно хвастаться',
          '👂 Важно слушаться родителей',
          '🦊 Осторожно с незнакомцами'
        ]
      : [
          '💎 Не всё то золото, что блестит',
          '😊 Простые вещи тоже ценны',
          '🤗 Главное — быть вместе',
          '🐭 Маленькие поступки имеют большие последствия'
        ]
  };

  const getCurrentSlides = () => {
    if (!selectedStory) return [];
    return [...stories[selectedStory as keyof typeof stories], conclusionSlide];
  };

  const slides = getCurrentSlides();

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

  const selectStory = (storyId: string) => {
    setSelectedStory(storyId);
    setCurrentSlide(0);
  };

  const backToMenu = () => {
    setSelectedStory(null);
    setCurrentSlide(0);
  };

  if (!selectedStory) {
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
            <div className="p-8 md:p-12 min-h-[500px] flex flex-col justify-center">
              <div className="text-center space-y-8 animate-fade-in">
                <div className="text-7xl mb-6 animate-bounce">📚</div>
                <h1 className="text-6xl md:text-7xl font-bold text-purple-600 mb-4 font-caveat">
                  Путешествие по сказкам
                </h1>
                <p className="text-2xl text-purple-400 mb-12">
                  Открытое занятие во второй младшей группе
                </p>

                <div className="grid md:grid-cols-3 gap-6 mt-12">
                  {storyMenu.map((story, index) => (
                    <button
                      key={story.id}
                      onClick={() => selectStory(story.id)}
                      className={`bg-gradient-to-br ${story.color} p-8 rounded-3xl shadow-lg hover-scale border-4 border-purple-200 transition-all animate-fade-in`}
                      style={{ animationDelay: `${index * 0.15}s` }}
                    >
                      <div className="text-7xl mb-4 animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
                        {story.emoji}
                      </div>
                      <h3 className="text-3xl font-bold text-purple-700 font-caveat">
                        {story.name}
                      </h3>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

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
        <div className="mb-4">
          <Button
            onClick={backToMenu}
            className="bg-purple-400 hover:bg-purple-500 text-white rounded-full px-6"
          >
            <Icon name="Home" size={20} />
            К выбору сказок
          </Button>
        </div>

        <Card className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm shadow-2xl border-4 border-purple-200 rounded-3xl overflow-hidden animate-scale-in">
          <div className="p-8 md:p-12 min-h-[500px] flex flex-col justify-between">
            {slide.type === 'conclusion' ? (
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
