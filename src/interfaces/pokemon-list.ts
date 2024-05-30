export interface PokemonListResponse {
    count: number;
    results: SmallPokemon[];
    next: string;
    previous: null | string;
}

export interface SmallPokemon {
    name: string;
    url: string;
    id: number;
    img: string;
}