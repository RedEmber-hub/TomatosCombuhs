import { useState } from 'react';
import './HomePage.scss';

import { filters } from '@/configs/filters';
import { Header } from '@/components/molecules/Header';
import { ChipsGroup } from '@/components/molecules/ChipsGroup';
import { Combuh } from '@/components/molecules/Combuh';
import { MOCK_COMBOS } from '@/mocks/combuh';
import { BandGroup } from '../BandGroup';

export default function HomePage() {
  const [selectedTribe, setSelectedTribe] = useState('Все');
  const [selectedGameType, setSelectedGameType] = useState('Все');

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

        <p className="homePage__description">Крупнейшая библиотека безумных комбо Hearthstone</p>
      </div>

      <div className="homePage__main">
        <div className="homePage__filters">
          <ChipsGroup
            filters={filters.category}
            selected={selectedTribe}
            onChange={setSelectedTribe}
            backgroundColor="green"
            hoverBorderColor="green"
          />
          <ChipsGroup
            filters={filters.gameType}
            selected={selectedGameType}
            onChange={setSelectedGameType}
            backgroundColor="yellow"
            hoverBorderColor="yellow"
          />
        </div>

        <div className="homePage__table">
          {MOCK_COMBOS.map((combo) => (
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
    </div>
  );
}
