import { GetServerSideProps } from "next";
import Layout from "../../components/layout";
import { getDatabase } from "../../src/utils/database";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const mongodb = await getDatabase();
  const data = JSON.stringify(context.params.platforms);
  const games = await mongodb
    .db()
    .collection("games")
    .find({ "platform.name": `${data}` })
    .toArray();

  console.log("slug", data);
  console.log("sortie après la recherhce mongo", games);

  return {
    props: {
      games: games,
    },
  };
};
export default function Games({ games }) {
  return (
    <Layout>
      <div>toto</div>
    </Layout>
  );
}
