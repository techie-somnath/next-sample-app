import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import useSWR from "swr";

const userFetcher = (...args) => fetch(...args).then((res) => res.json());

const userInfoPage = () => {
  const router = useRouter();
  const id = router.query.id;
  const { data, error } = useSWR(
    `https://dummyjson.com/users/${id}`,
    userFetcher
  );

  if (error) {
    return <h1> An error occured while fetching User Details.</h1>;
  }

  if (!data) return <h1>Loading...</h1>;
  // const [userDetails, setUserDetails] = useState([]);

  // useEffect(() => {
  //   async function getUserById(id) {
  //     const userData = await fetch(`https://dummyjson.com/users/${id}`);
  //     setUserDetails(await userData.json());
  //   }
  //   getUserById(id);
  // }, [router.query.id]);
  return (
    <div>
      <h1>User Details</h1>

      <h5>Name : {data.firstName}</h5>
      <h5>Email : {data.email}</h5>
    </div>
  );
};

export default userInfoPage;
