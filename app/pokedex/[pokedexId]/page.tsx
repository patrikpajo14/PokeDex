
export default async function PokedexPage({ params } : { params: { pokedexId: string } }) {
    const { pokedexId } = params;

    return (
        <>
            <h1 className="text-4xl text-bold pt-4">{pokedexId}</h1>
        </>
    )
}