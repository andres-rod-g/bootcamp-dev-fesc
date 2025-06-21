import { useEffect, useState, type FC } from 'react';

interface IPokemon {
    name: string,
    url: string
}

type Props = {};
const PokemonPage: FC<Props> = ({ }) => {

    const [pokemonList, setPokemonList] = useState<IPokemon[]>([])

    useEffect(() => {

        const getPokemon = async () => {
            const resp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=90", {
                method: "GET"
            })

            const data = await resp.json()

            await new Promise(resolve => setTimeout(resolve, 5000));

            setPokemonList(data.results)
        }

        getPokemon()

    }, [])

    return (
        <div className=' flex flex-col gap-2'>
            {
                pokemonList.map((v, i) => {
                    return (
                        <div className=' flex p-4 bg-white rounded-full hover:bg-white/50 '>
                            <p>{v.name}</p>
                        </div>
                    )
                })
            }
        </div>
    );
};
export default PokemonPage;