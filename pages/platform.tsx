import { GetServerSideProps } from "next";
import { getDatabase } from "../src/database"

export const getServerSideProps: GetServerSideProps = async () {
  const mongodb = await getDatabase();

  const games = await mongodb.db().collection("games").find().toArray();

  return {
    props: {
      games: games
    }
  };
}

const Platform: React.FC = () => {
  return (
    <div>
      Home
    </div>
  );
}
