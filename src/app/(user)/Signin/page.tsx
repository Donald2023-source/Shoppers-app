import React from "react";
import Container from "@/Components/Container";
import googleImage from "@/public/googleImage.png";
import Image from "next/image";
import { signIn } from "@/auth";
import { redirect } from "next/dist/server/api-utils";
const SignInPage = () => {
  return (
    <Container className="py-20 flex flex-col justify-center items-center">
      <form
        className="flex items-center gap-2 border border-blue-500 font-semibold px-4 py-2 rounded-md bg-blue-100 hover:bg-blue-600 cursor-pointer hoverEffect "
        action={async() => {
          "use server";
          await signIn("google", { redirectTo: "/" });
        }}
      >
        <Image className="w-8" src={googleImage} alt="google Image" />
        <button>Sign in with google</button>
      </form>
    </Container>
  );
};

export default SignInPage;
