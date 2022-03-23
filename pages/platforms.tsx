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
    return game.platform.name;
  });

  const images = games.map((game) => {
    return game.platform.url;
  });
  const arrayOfImagesFiltred = Array.from(new Set(images));
  const arrayOfplatformsFiltred = Array.from(new Set(platforms));

  return {
    props: {
      platforms: arrayOfplatformsFiltred,
      images: arrayOfImagesFiltred,
    },
  };
};
export default function Platforms({ platforms, images }) {
  return (
    <div>
      <Layout />
      {images.map((image) => {
        {
          console.log(image);
          <img src={`${image}`} />;
        }
      })}
      <div>
        {platforms.map((platform) => {
          return (
            <Link href={`/platforms/${platform}`}>
              <h1>{platform}</h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
