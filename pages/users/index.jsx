import { useEffect, useState } from "react";
import Link from "next/link";
import useSWR from "swr";

import styles from "../../styles/User.module.css"

const userFetcher = (...args) => fetch(...args).then((res) => res.json());

const UserPage = () => {
  const { data, error } = useSWR("https://dummyjson.com/users", userFetcher);

  if (error) {
    return <h1> An error occured while fetching data.</h1>;
  }

  if (!data) return <h1>Loading...</h1>;
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   async function fetchUsers() {
  //     const data = await fetch("https://dummyjson.com/users");
  //     setUsers(await data.json());
  //   }
  //   fetchUsers();
  // }, []);

  return (
    <div>
      <h1> Users</h1>
      {data &&
        data.users &&
        data.users.map((user) => (
          <Link href={`/users/${user.id}`} key={user.id}>
            <div className={styles['text']}>{user.firstName}</div>
          </Link>
        ))}
    </div>
  );
};

export default UserPage;
