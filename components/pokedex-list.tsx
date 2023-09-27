import React from 'react';
import Link from "next/link";

interface PokedexListProps {
    pokemonList: any
}

export function PokedexList({ pokedexList } : PokedexListProps){

    console.log(pokedexList)
    return (
        <div className="absolute bottom-0 left-0 bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
            {pokedexList.map((pokedex: any) => {
                var id = pokedex.url.replace("https://pokeapi.co/api/v2/pokedex/", "");
                return(
                    <div key={pokedex.name} className="p-3 border-solid border-1 border-gray-600">
                        <Link href={`pokedex/${id}`} >{pokedex.name}</Link>
                    </div>
                )
            })}
        </div>
    );
}