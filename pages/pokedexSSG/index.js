import Link from "next/link";
import styles from "../../styles/Pokemon.module.css";
const PokedexSsg = ({ pokemons }) => {
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
      <h1 className={styles.title}>Welcome to Pokemons SSG </h1>
      <ul className={styles.listContainer}>
        {pokemons.map((pokemon) => (
          <Link href={`/pokedexSSG/${pokemon.id}`} key={pokemon.name} passHref>
            <li key={pokemon.id}>{pokemon.name}</li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export const getStaticProps = async () => {
  const response = await fetch("https://pokeapi-menchu.herokuapp.com/pokemon");
  const pokemons = await response.json();

  if (!pokemons) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: { pokemons },
  };
};
export default PokedexSsg;
