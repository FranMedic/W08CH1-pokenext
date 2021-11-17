import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/Pokemon.module.css";

const PokedexSSRID = ({ pokemonsSSR }) => {
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

      <h1 className={styles.title}>DETAILS SSR</h1>

      <h2 className={styles.details}>{pokemonsSSR.name}</h2>
    </>
  );
};

export const getStaticPaths = async () => {
  const response = await fetch("https://pokeapi-menchu.herokuapp.com/pokemon");
  const pokemonsSsr = await response.json();

  const paths = pokemonsSsr.map((pokemonSsr) => ({
    params: { id: "" + pokemonSsr.id },
  }));

  return { paths, fallback: "blocking" };
};

export const getServerSideProps = async () => {
  const response = await fetch("https://pokeapi-menchu.herokuapp.com/pokemon");
  const pokemonsSSR = await response.json();

  if (!pokemonsSSR) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: { pokemonsSSR },
  };
};
export default PokedexSSRID;
