import MainLayout from "@/components/layouts/MainLayout";
import React from "react";

interface Props {
  params: { id: string };
}

export function generateMetadata({ params }: Props) {
  return {
    title: `Pokémon ${params.id}`,
  };
}

const page = (params: Props) => {
  // eslint-disable-next-line no-console
  console.log(params);
  
  return (
    <MainLayout>
      <div>page</div>
    </MainLayout>
  );
};

export default page;
