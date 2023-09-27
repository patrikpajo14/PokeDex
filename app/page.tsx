import {getPokeDexList, getPokemonList} from "@/lib/pokemonAPI";
import {PokemonList} from "@/components/pokemon-list";
import {PokedexList} from "@/components/pokedex-list";

export default async function Home() {
  const pokemonList = await getPokemonList();
  const pokedexList = await getPokeDexList();
  return (
    <main>
        <PokedexList pokedexList={pokedexList} />
      <PokemonList pokemonList={pokemonList} />
    </main>
  )
}
