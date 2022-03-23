import { GetServerSideProps } from "next";
import Layout from "../components/layout";
import { getDatabase } from "../src/utils/database";

export const getServerSideProps: GetServerSideProps = async () => {
  const mongodb = await getDatabase();

  const games = await mongodb.db().collection("games").find().toArray();
  const gamesString = JSON.stringify(games);

  return {
    props: {
      games: gamesString,
    },
  };
};
export default function Games({ games }) {
  const gamesJson = JSON.parse(games);
  return (
    <Layout>
      <div>toto</div>
    </Layout>
  );
}
