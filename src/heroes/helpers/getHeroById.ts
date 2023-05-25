import { Hero, heroes } from "../data/heroes"

export const getHeroById = (id: string|undefined): Hero | undefined => {
    return heroes.find(hero => hero.id === id);
}