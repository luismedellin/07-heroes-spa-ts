import { Publisher, getHoroesByPublisher } from "..";

interface Props {
  publisher: Publisher;
}

export const HeroList = ({ publisher }: Props) => {
  const heroes = getHoroesByPublisher(publisher);

  return (
    <ul>
      {
        heroes.map(hero => (
            <li key={hero.id}>{hero.superhero}</li>
        ))
      }
    </ul>
  );
};
