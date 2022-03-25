import { TocTwoTone } from "@material-ui/icons";
import { GetServerSideProps } from "next";
import Link from "next/link";
import Layout from "../../../../components/layout";
import { getDatabase } from "../../../../src/utils/database";
import Platforms from "../../../platforms";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const mongodb = await getDatabase();

  const game = await mongodb
    .db()
    .collection("basket")
    .insertOne({ "platform.name": `${context.params.game}` });

  const data = await mongodb.db().collection("basket").find().toArray();
  const gameString = JSON.stringify(data);
  // const dataArray = data.map((game) => {
  //   return game;
  // });

  console.log(gameString);

  return {
    props: {
      data: gameString,
    },
  };
};

export default function Games({ data }) {
  const gamesJson = JSON.parse(data);

  return (
    <Layout>
      <div>
        <div>
          {gamesJson.map((game: any) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div className="container" style={{ maxWidth: "18rem" }}>
                <h5>{game._id}</h5>
              </div>
            );
          })}
        </div>
        <button>
          <Link href="/panier/remove">
            <a>Supprimer Le panier</a>
          </Link>
        </button>
      </div>
    </Layout>
  );
}
