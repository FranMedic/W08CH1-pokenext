import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../styles/Pokemon.module.css";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
      );
      const pokemonsDatas = await response.json();
      const pokemonsList = pokemonsDatas.results;
      setPokemon(pokemonsList);
    })();
  }, [setPokemon]);

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
      <h1 className={styles.title}>Welcome to Pokemons </h1>
      <ul className={styles.listContainer}>
        {pokemon.map((pokemon) => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Pokemon;
