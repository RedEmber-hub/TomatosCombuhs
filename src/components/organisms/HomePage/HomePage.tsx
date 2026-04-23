import './HomePage.scss';
import { Header } from '../../molecules/Header';
import { Divider } from '../../atoms/Divider';
import { ChipsGroup } from '../../molecules/ChipsGroup';
import { useState } from 'react';
import { MOCK_COMBOS } from '../../../mocks/combuh';
import { Combuh } from '../../molecules/Combuh';

export default function HomePage() {
  const filtersTribeArray = [
    'Все',
    'Звери',
    'Мурлоки',
    'Нежить',
    'Элементали',
    'Пираты',
    'Свинобразы',
    'Демоны',
    'Драконы',
    'Механизмы',
    'Наги',
  ];
  const filtersGameTypeArray = ['Все', 'Поля сражений', 'Арена', 'Дуэли'];
  const [selectedTribe, setSelectedTribe] = useState('Все');
  const [selectedGameType, setSelectedGameType] = useState('Все');

  return (
    <div className="homePage">
      <div className="homePage__header">
        <Header />
      </div>

      <Divider />

      <div className="homePage__main">
        <div className="homePage__info">
          <h2 className="homePage__title">КОМБУХИ ТОМАТОСА</h2>

          <p className="homePage__description">Крупнейшая библиотека безумных комбо Hearthstone</p>
        </div>

        <div className="homePage__filters">
          <ChipsGroup
            filters={filtersTribeArray}
            selected={selectedTribe}
            onChange={setSelectedTribe}
            backgroundColor="green"
            hoverBorderColor="green"
          />
          <ChipsGroup
            filters={filtersGameTypeArray}
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
