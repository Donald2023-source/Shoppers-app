"use client";
import Container from "@/Components/Container";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, Provider } from "@/firebase";
import { redirect, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "@/types";
import { addUser } from "@/redux/shoppersSlice";
const page = () => {
  const dispatch = useDispatch();
  const shoppers = useSelector((state: StoreState) => state.shoppers);

  const router = useRouter();
  const handleSignup = () => {
    signInWithPopup(auth, Provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        console.log(user);

        if (user) {
          dispatch(
            addUser({
              id: user.uid,
              name: user.displayName,
              email: user.email,
              token: token,
            })
          );
          router.push("/");
        }

        console.log("Sign up was successful", user);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <Container>
      <h2>This is the sign page</h2>
      <button
        onClick={handleSignup}
        className="py-2 px-10 border rounded-lg bg-blue-600 text-white cursor-pointer"
      >
        Sign In With Google
      </button>
    </Container>
  );
};

export default page;
