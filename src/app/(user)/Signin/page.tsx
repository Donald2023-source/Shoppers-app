'use client'
import Container from '@/Components/Container'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, Provider } from '@/firebase'

const page = () => {
    const handleSignup = () => {
        signInWithPopup(auth, Provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result)
                const token = credential?.accessToken;
                const user = result.user
                console.log('Sign up was successfully', user)
            }).catch((error) => {
                console.error(error.message)
            })
    }
  return (
    <Container>
      <h2>This is the sign page</h2>
      <button onClick={handleSignup} className='py-2 px-10 border rounded-lg bg-blue-600 text-white cursor-pointer'>Sign In With Google</button>
    </Container>
  )
}

export default page
