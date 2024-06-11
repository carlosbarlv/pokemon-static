import { pokeApi } from "@/api";
import MainLayout from "@/components/layouts/MainLayout";
import { Pokemon } from "@/interfaces";
import { capitalize } from "@/utils/strings";
import { StarFilled } from "@ant-design/icons";
import { Button, Card, Col, Row } from "antd";
import { NextPage } from "next";
import Image from "next/image";
import React from "react";

interface Props {
  params: { id: string };
}

export function generateMetadata({ params }: Props) {
  return {
    title: `Pokémon #${params.id}`,
  };
}

export const generateStaticParams = async () =>
  Array.from(Array(151).keys()).map((it) => ({
    id: (it + 1).toString(),
  }));

const getPokemonData = async (id: string) => {
  const { data } = await pokeApi.get<Pokemon>("/pokemon/" + id);

  return data;
};

const PokemonPage: NextPage<Props> = async ({ params }) => {
  const cardHeight = 212;
  const pokemonAllData = await getPokemonData(params.id);

  return (
    <MainLayout>
      <Row gutter={[16, 4]}>
        <Col xs={24} sm={10} md={4}>
          <Card style={{ height: cardHeight }}>
            <Image
              alt="example"
              src={
                pokemonAllData.sprites.other?.dream_world.front_default ??
                "/no-image.png"
              }
              width={200}
              height={cardHeight-50}
            />
          </Card>
        </Col>
        <Col>
          <Card
            extra={
              <Button
                icon={<StarFilled style={{ color: "gold" }} />}
                type="primary"
              >
                Guardar en favoritos
              </Button>
            }
            style={{ height: cardHeight }}
            title={capitalize(pokemonAllData.name)}
          >
            <div>Sprites:</div>
            <Image
              src={pokemonAllData.sprites.front_default}
              alt={pokemonAllData.name}
              width={100}
              height={100}
            />
            <Image
              src={pokemonAllData.sprites.back_default}
              alt={pokemonAllData.name}
              width={100}
              height={100}
            />
            <Image
              src={pokemonAllData.sprites.front_shiny}
              alt={pokemonAllData.name}
              width={100}
              height={100}
            />
            <Image
              src={pokemonAllData.sprites.back_shiny}
              alt={pokemonAllData.name}
              width={100}
              height={100}
            />
          </Card>
        </Col>
      </Row>
    </MainLayout>
  );
};

export const dynamicParams = false;
export default PokemonPage;
