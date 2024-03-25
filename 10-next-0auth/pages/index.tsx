"use-client"
import Image from "next/image";
import { Inter } from "next/font/google";
import { useUser } from "@auth0/nextjs-auth0/client";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const {user, error, isLoading} = useUser()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>
  if(user){
    console.log(user)
    return(
      <div>
        Hello {user.nickname}!
        <a href="/api/auth/logout">Logout</a>
      </div>
    )
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      <h1>Hello</h1>
    <a href="/api/auth/login">Login</a>
    </main>
  )
}
