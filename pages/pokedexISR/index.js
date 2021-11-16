import Link from "next/link";
import styles from "../../styles/Pokemon.module.css";

const PokedexIsr = ({ pokemonsISR }) => {
  return (
    <>
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
      <h1 className={styles.title}>Welcome to Pokemons ISR </h1>
      <ul className={styles.listContainer}>
        {pokemonsISR.map((pokemonIsr) => (
          <li key={pokemonIsr.id}>{pokemonIsr.name}</li>
        ))}
      </ul>
    </>
  );
};

export default PokedexIsr;

export const getStaticProps = async () => {
  const response = await fetch("https://pokeapi-menchu.herokuapp.com/pokemon");
  const pokemonsISR = await response.json();

  if (!pokemonsISR) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: { pokemonsISR },
    revalidate: 30,
  };
};
