import { PokeList } from "~/components/poke-list/PokeList";
import { pokemonList } from "~/mock-data/list";

export default function ListPage() {
  return <PokeList pokemons={pokemonList.results} />;
}
