import { useMemo } from "react";
import { HeroCard, Publisher, getHoroesByPublisher } from "..";

interface Props {
  publisher: Publisher;
}

export const HeroList = ({ publisher }: Props) => {
  const heroes = useMemo(()=> getHoroesByPublisher(publisher), [publisher]);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {
        heroes.map(hero => (
            // <li key={hero.id}>{hero.superhero}</li>
            <HeroCard key={hero.id} {...hero} />
        ))
      }
    </div>
  );
};
