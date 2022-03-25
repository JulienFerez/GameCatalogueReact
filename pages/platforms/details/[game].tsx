import { GetServerSideProps } from "next";
import { getDatabase } from "../../../src/utils/database";
import Link from "next/link";
import Layout from "../../../components/layout";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const mongodb = await getDatabase();
  console.log("context", context);
  console.log("context.params.game", context.params.game);
  const data = await mongodb
    .db()
    .collection("games")
    .find({ name: `${context.params.game}` })
    .toArray();
  console.log("data", data);
  // const platforms = data.map((element) => {
  //   return element.platform;
  // });
  // const filteredArray = platforms.filter(function (element, index, before) {
  //   if (index !== 0) {
  //     if (element.name !== before[index - 1].name) {
  //       return element;
  //     }
  //   }
  // });

  // const [unique] = [filteredArray.splice(0, 9)];
  const game = JSON.stringify(data);
  return {
    props: {
      data: game,
    },
  };
};
export default function Platforms({ data }: any) {
  const gamesJson = JSON.parse(data);
  console.log("gamesJson", gamesJson);
  return (
    <>
      {" "}
      {gamesJson.map((game: any, index: any) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div className="alignement">
            <Link href={`/${game.name}`}>
              <a>
                <h5 className="display-5 fw-bolder">{game.name}</h5>
              </a>
            </Link>
            <p className="lead">{game.summary}</p>
            <div key={index} style={{ maxWidth: "22rem" }}>
              {game?.cover?.url ? (
                <img
                  src={game.cover.url}
                  style={{ height: "40rem", width: "25rem" }}
                  className="card-img-top"
                />
              ) : (
                <img
                  src="..."
                  style={{ maxHeight: "18rem" }}
                  className="card-img-top"
                />
              )}
            </div>{" "}
          </div>
        );
      })}
    </>
  );
}
