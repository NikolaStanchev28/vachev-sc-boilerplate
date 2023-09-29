import { StartIcon } from "assets";
import { HelloForm } from "collections";
import { NextPage } from "next";
import {} from "sections";

const Home: NextPage = () => {
  return (
    <main>
      <h1>The Index Page</h1>
      <StartIcon />
      <HelloForm />
    </main>
  );
};

export default Home;
