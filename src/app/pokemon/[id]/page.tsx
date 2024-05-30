import MainLayout from "@/components/layouts/MainLayout";
import React from "react";

interface Props {
  params: { id: string };
}

const page = (params: Props) => {
  return (
    <MainLayout>
      <div>page</div>
    </MainLayout>
  );
};

export default page;
