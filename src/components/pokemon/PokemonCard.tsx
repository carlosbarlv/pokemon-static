"use client";
import { SmallPokemon } from "@/interfaces/pokemon-list";
import { Card, Col, Row } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

interface PokemonCardProps {
  pokemon: SmallPokemon;
}

const PokemonCard: FC<PokemonCardProps> = ({ pokemon }) => {
  const router = useRouter();

  const handleOnPokemonClick = () => {
    console.log("Click on pokemon: ", pokemon.name);
    router.push(`/pokemon/${pokemon.id}`);
  };

  return (
    <Col xs={12} sm={8} md={8} xl={4} xxl={6}>
      <Card
        cover={
          <Image
            alt="Pokémon image"
            width={140}
            height={140}
            src={pokemon.img}
          />
        }
        onClick={handleOnPokemonClick}
        hoverable
        style={{ margin: 5, padding: 5 }}
      >
        <Row>
          <Col span={12}>#{pokemon.id}</Col>
          <Col span={12} style={{ textAlign: "end" }}>
            {pokemon.name.replace(/./, pokemon.name[0].toUpperCase())}
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default PokemonCard;
