"use client"
import { PokemonCard } from "./pokemon-card";

interface PokemonListProps {
    pokemonList: any
}

export function PokemonList({ pokemonList } : PokemonListProps) {

    return (
        <>
            <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
                {pokemonList.map((pokemon : any) => {
                    return (
                        <PokemonCard name={pokemon.name} key={`${pokemon.name}Card`}/>
                    )
                })}
            </div>
        </>
    )
}