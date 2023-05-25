import { heroes } from "../data/heroes";

export type Publisher = "DC Comics" | "Marvel Comics";

export const getHoroesByPublisher = (publisher: Publisher) => 
    heroes.filter(heroe => heroe.publisher === publisher);