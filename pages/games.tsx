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
      <div>
        <div>
          {gamesJson.map((game) => {
            return (
              <div className="container" style={{ maxWidth: "18rem" }}>
                <div className="item">
                  {game?.cover?.url ? (
                    <img src={game.cover.url} style={{ maxHeight: "18rem" }} />
                  ) : (
                    <img src="..." style={{ maxHeight: "18rem" }} />
                  )}
                  <div>
                    <h5>{game.name}</h5>
                    <button>Ajouter au panier</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
