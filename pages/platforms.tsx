import { GetServerSideProps } from "next";
import { getDatabase } from "../src/utils/database";
import Link from "next/link";
import Layout from "../components/layout";

// import "dotenv/config";
// export default function Page({ games }) {
//   return <>{games}</>;
// }

export const getServerSideProps: GetServerSideProps = async (context) => {
  const mongodb = await getDatabase();

  const games = await mongodb.db().collection("games").find().toArray();

  const platforms = games.map((game) => {
    return game.platform;
  });

  const filteredArray = platforms.filter(function (
    element,
    position,
    previous
  ) {
    if (position !== 0) {
      if (element.name !== previous[position - 1].name) {
        return element;
      }
    }
  });

  return {
    props: {
      platforms: filteredArray,
    },
  };
};
export default function Platforms({ platforms }) {
  return (
    <div>
      <Layout />
      <div>
        {platforms.map((platform) => {
          return (
            <Link href={`/platforms/${platform}`}>
              <h1>
                {platform.name}
                <p>
                  {platform?.platform_logo_url ? (
                    <img
                      src={platform.platform_logo_url}
                      style={{ height: "18rem" }}
                      className="card-img-top"
                    />
                  ) : (
                    <img
                      src="..."
                      style={{ height: "18rem" }}
                      className="card-img-top"
                    />
                  )}
                </p>
              </h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
