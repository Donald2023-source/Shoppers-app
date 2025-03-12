"use client";
interface Props {
  searchParams: {
    session_id: string | null;
  };
}

import { redirect } from "next/navigation";
import React from "react";
import SucessContainer from "@/Components/SucessContainer";

const SuccessPage = ({ searchParams }: Props) => {
  console.log(searchParams);

  const id = searchParams?.session_id;
  console.log("My long ID", id);
  
  if (!id) {
    redirect("/");
  }
  return (
    <div>
      <SucessContainer id={id} />
    </div>
  );
};

export default SuccessPage;
