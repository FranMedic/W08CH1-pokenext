import Link from "next/link";
import styles from "../../styles/Pokemon.module.css";
const PokedexSsr = ({ pokemonsSSR }) => {
  return (
    <>
      {" "}
      <ul className={styles.menu}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/pokemon">
            <a>Pokemon</a>
          </Link>
        </li>
        <li>
          <Link href="/pokedexSSR">
            <a>My Pokedex SSR</a>
          </Link>
        </li>
        <li>
          <Link href="/pokedexSSG">
            <a>My Pokedex SSG</a>
          </Link>
        </li>
        <li>
          <Link href="/pokedexISR">
            <a>My Pokedex ISR</a>
          </Link>
        </li>
      </ul>
      <h1 className={styles.title}>Welcome to Pokemons SSR </h1>
      <ul className={styles.listContainer}>
        {pokemonsSSR.map((pokemonSSR) => (
          <li key={pokemonSSR.id}>{pokemonSSR.name}</li>
        ))}
      </ul>
    </>
  );
};

export default PokedexSsr;

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
