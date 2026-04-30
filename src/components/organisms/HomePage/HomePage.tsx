import { useState } from 'react';
import './HomePage.scss';

import { filters } from '@/configs/filters';
import { Header } from '@/components/molecules/Header';
import { ChipsGroup } from '@/components/molecules/ChipsGroup';
import { Combuh } from '@/components/molecules/Combuh';
import { MOCK_COMBOS } from '@/mocks/combuh';
import { BandGroup } from '../BandGroup';
import { Footer } from '@/components/molecules/Footer';

export default function HomePage() {
  const [selectedTribe, setSelectedTribe] = useState('Все');
  const [selectedGameType, setSelectedGameType] = useState('Все');

  const filtredCombo = MOCK_COMBOS.filter((combo) => {
    const tribeMatch = selectedTribe === 'Все' || combo.tribe === selectedTribe;
    const gameTypeMatch = selectedGameType === 'Все' || combo.gameType === selectedGameType;
    return tribeMatch && gameTypeMatch;
    console.log('ggbcsjds');
  });

  return (
    <div className="homePage">
      <div className="homePage__header">
        <Header />
      </div>

      {/* <Divider /> */}

      <div className="homePage__background">
        <BandGroup />
      </div>

      <div className="homePage__info">
        <h2 className="homePage__title">КОМБУХИ</h2>
        <h2 className="homePage__title">ТОМАТОСА</h2>

        <p className="homePage__description">Контент, гайды и безумные сборки по Hearthstone</p>
      </div>

      <div className="homePage__main">
        <div className="homePage__last-video">
          <div className="homePage__last-video-header">
            <h2 className="homePage__last-video-title">Последнее видео</h2>
            <p className="homePage__last-video-subtitle">Cвежее с канала Томатоса</p>
          </div>

          <div className="homePage__last-video-player" />

          <div className="homePage__last-video-meta">
            <h3 className="homePage__last-video-video-title">Название последнего видео</h3>

            <p className="homePage__last-video-description">Краткое описание видео</p>
          </div>
        </div>

        <div className="homePage__filters">
          <ChipsGroup
            filters={filters.gameType}
            selected={selectedGameType}
            onChange={setSelectedGameType}
            backgroundColor="yellow"
            hoverBorderColor="yellow"
          />
          <ChipsGroup
            filters={filters.category}
            selected={selectedTribe}
            onChange={setSelectedTribe}
            backgroundColor="green"
            hoverBorderColor="green"
          />
        </div>

        <div className="homePage__table">
          {filtredCombo.map((combo) => (
            <Combuh
              key={combo.id}
              tribe={combo.tribe}
              gameType={combo.gameType}
              hero={combo.hero}
              usedCards={combo.usedCards}
              videoUrl={combo.videoUrl}
              img={combo.imageUrl}
              description={`Комбуха с ${combo.tribe}`}
            />
          ))}
        </div>
      </div>

      <div className="homePage__footer">
        <Footer />
      </div>
    </div>
  );
}
