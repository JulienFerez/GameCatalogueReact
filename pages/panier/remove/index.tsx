import { TocTwoTone } from "@material-ui/icons";
import { Db } from "mongodb";
import { GetServerSideProps } from "next";
import Link from "next/link";
import Layout from "../../../components/layout";
import { getDatabase } from "../../../src/utils/database";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const mongodb = await getDatabase();

  const game = await mongodb.db().collection("basket").drop();

  const newDb = await mongodb.db().createCollection("basket");

  console.log(game);
  console.log(newDb);

  return {
    props: {
      game: game,
    },
  };
};

export default function Delete() {
  return (
    <>
      <Layout>
        <h1>Votre Panier est supprimé</h1>

        <button>
          <Link href="/">
            <a>Retour à la Home Page</a>
          </Link>
        </button>
      </Layout>
    </>
  );
}
