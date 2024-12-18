import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  // const myImageLoader = ({ src, width, quality }) => {
  //   return `https://images.pexels.com/photos/754430/pexels-photo-754430.jpeg?auto=compress&cs=tinysrgb&w=${width}&h=750&dpr=1`;
  // };

  const session = useSession();

  console.log(session);

  if (session.data === null) {
    return <button onClick={signIn}>Login</button>;
  }

  return (
    <div className={styles.container}>
      {/* <Image
        loader={myImageLoader}
        src={"https://images.pexels.com/photos/754430/pexels-photo-754430.jpeg"}
        alt="Basketball Image"
        width={1200}
        height={900}
      ></Image> */}

      <h1>Hello {session?.data?.user?.name}</h1>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}
