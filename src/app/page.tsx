import { pokeApi } from "@/api";
import MainLayout from "@/components/layouts/MainLayout";
import { PokemonListResponse, SmallPokemon } from "@/interfaces/pokemon-list";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Listado de Pokémons",
};

interface HomePageProps {
  pokemons: SmallPokemon[];
}

const getPokemons = async () => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");
  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => ({
    ...pokemon,
    id: ++index,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      index + 1
    }.svg`,
  }));
  return pokemons;
};

const HomePage: NextPage<HomePageProps> = async () => {
  const pokemons = await getPokemons();

  return (
    <MainLayout>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
    </MainLayout>
  );
};

export default HomePage;
