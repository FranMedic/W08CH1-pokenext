import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/Pokemon.module.css";

const PokedexIsrID = ({ pokemonsISR }) => {
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

      <h1 className={styles.title}>DETAILS ISR </h1>

      <h2 className={styles.details}>{pokemonsISR.name}</h2>
    </>
  );
};

export const getStaticPaths = async () => {
  const response = await fetch("https://pokeapi-menchu.herokuapp.com/pokemon");
  const pokemonsISR = await response.json();

  const paths = pokemonsISR.map((pokemonISR) => ({
    params: { id: "" + pokemonISR.id },
  }));

  return { paths, fallback: true };
};

export const getStaticProps = async ({ params: { id } }) => {
  const response = await fetch(
    "https://pokeapi-menchu.herokuapp.com/pokemon/" + id
  );
  const pokemonsISR = await response.json();

  return {
    props: { pokemonsISR },
    revalidate: 30,
  };
};

export default PokedexIsrID;
