import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/Pokemon.module.css";

const PokedexSsgID = ({ pokemonsSsg }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading....</h1>;
  }

  return (
    <>
      <ul className={styles.menu}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
      </ul>

      <h1 className={styles.title}>DETAILS Ssg</h1>

      <h2 className={styles.details}>{pokemonsSsg.name}</h2>
    </>
  );
};

export const getStaticPaths = async () => {
  const response = await fetch("https://pokeapi-menchu.herokuapp.com/pokemon");
  const pokemonsSsg = await response.json();

  const paths = pokemonsSsg.map((pokemonSsg) => ({
    params: { id: "" + pokemonSsg.id },
  }));

  return { paths, fallback: true };
};

export const getStaticProps = async ({ params: { id } }) => {
  const response = await fetch(
    "https://pokeapi-menchu.herokuapp.com/pokemon/" + id
  );
  const pokemonsSsg = await response.json();

  return {
    props: { pokemonsSsg },
  };
};

export default PokedexSsgID;
