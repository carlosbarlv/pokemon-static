import { pokeApi } from "@/api";
import MainLayout from "@/components/layouts/MainLayout";
import PokemonCard from "@/components/pokemon/PokemonCard";
import { PokemonListResponse, SmallPokemon } from "@/interfaces/pokemon-list";
import { Row } from "antd";
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
      <Row>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Row>
    </MainLayout>
  );
};

export default HomePage;
