const UserDetailsPage = (props) => {
  return (
    <div>
      <h1>Profile page of {props.data.firstName}</h1>
    </div>
  );
};

export const getStaticPaths = async () => {
  const data = await (await fetch("https://dummyjson.com/users")).json();
  const userIds = data.users.map((user) => user.id);
  return {
    paths: userIds.map((userId) => ({ params: { id: `${userId}` } })),
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const userId = context.params.id;
  const data = await (
    await fetch(`https://dummyjson.com/users/${userId}`)
  ).json();
  return {
    props: {
      data,
    },
  };
};

export default UserDetailsPage;
