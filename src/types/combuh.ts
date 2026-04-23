type GameType = 'Поля сражений' | 'Арена';
type TribeType = 'Все' | 'Мурлоки' | 'Звери' | 'Нежить' | 'Элементали' | 'Пираты' | 'Смешанное';

export interface CombuhInterface {
  id: number;
  imageUrl: string;
  videoUrl: string;
  tribe: TribeType;
  usedCards: string[];
  gameType: GameType;
  hero: string;
}
