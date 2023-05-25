import { Hero, heroes } from "../data/heroes"

export const getHeroById = (id: string): Hero | undefined => {
    return heroes.find(hero => hero.id === id);
}