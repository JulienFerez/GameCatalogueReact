import { TocTwoTone } from "@material-ui/icons";
import { GetServerSideProps } from "next";
import Layout from "../../../../components/layout";
import { getDatabase } from "../../../../src/utils/database";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const mongodb = await getDatabase();

  const game = await mongodb
    .db()
    .collection("basket")
    .insertOne({ "platform.name": `${context.params.game}` });

  const gameString = JSON.stringify(game);
  console.log("gameString", gameString);

  const data = await mongodb.db().collection("basket").find().toArray();
  const dataArray = data.map((game) => {
    return game;
  });

  const basket = JSON.stringify(dataArray);
  console.log(basket);

  return {
    props: {
      game: basket,
    },
  };
};

export default function Games({ game, data }) {
  // const gamesJson = JSON.parse(game);

  return (
    <Layout>
      <h1>Mon putain de panier</h1>
      {game}
      <button>
        <a href="/panier/remove">Supprimer Le panier</a>
      </button>
    </Layout>
  );
}
