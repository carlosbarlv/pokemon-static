import { pokeApi } from "@/api";
import MainLayout from "@/components/layouts/MainLayout";
import { Pokemon } from "@/interfaces";
import { capitalize } from "@/utils/strings";
import { StarFilled } from "@ant-design/icons";
import { Button, Card, Col, Flex, Row } from "antd";
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
  const pokemonSprites = [
    pokemonAllData.sprites.front_default,
    pokemonAllData.sprites.back_default,
    pokemonAllData.sprites.front_shiny,
    pokemonAllData.sprites.back_shiny,
  ];

  return (
    <MainLayout>
      <Row gutter={[16, 4]}>
        <Col xs={24} sm={10} md={10} lg={6}>
          <Card style={{ height: cardHeight }}>
            <Image
              alt="example"
              src={
                pokemonAllData.sprites.other?.dream_world.front_default ??
                "/no-image.png"
              }
              width={200}
              height={cardHeight - 50}
            />
          </Card>
        </Col>
        <Col xs={24} sm={14} md={14} lg={12}>
          <Card
            extra={
              <Button
                icon={<StarFilled style={{ color: "gold" }} />}
                type="dashed"
              >
                Guardar en favoritos
              </Button>
            }
            style={{ height: cardHeight }}
            title={capitalize(pokemonAllData.name)}
          >
            <Row>Sprites:</Row>
            <Flex
              justify="space-evenly"
              align="center"
              style={{ width: "100%" }}
            >
              {pokemonSprites.map((sprite, index) => (
                <Col key={index + "specialKey"} xs={6}>
                  <Image
                    src={sprite}
                    alt={pokemonAllData.name}
                    width={100}
                    height={100}
                  />
                </Col>
              ))}
            </Flex>
          </Card>
        </Col>
      </Row>
    </MainLayout>
  );
};

export const dynamicParams = false;
export default PokemonPage;
