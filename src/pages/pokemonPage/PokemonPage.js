import React, {useEffect, useState} from 'react';
import axios, {get} from "axios";
import Pokemon from "../../components/pokemon/Pokemon";
import s from "./PokemonPage.module.scss"
import Pagination from "../../components/pagination/Pagination";
const PokemonPage = () => {

    const [pokemonList, setPokemonList] = useState([])
    const getPokemon = async () => {
        try{
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)
            return setPokemonList(data.results)
        }catch (e){
            console.log('error' .e );
        }finally {
            console.log('final')
        }
    }

    const limit = 6;
    const [offset, setOffset] = useState(1)
    let page = Math.floor(offset/limit) + 1
    if(page <= 0){
        page = 1
        setOffset(1)
    }
    const handlePrev = () => {
        setOffset(prev => prev - limit)
    }
    const handleNext = () => {
        setOffset(prev => prev + limit)
    }

    useEffect(() => {
        getPokemon(limit, offset)
    }, [offset]);

    return (
        <div className={s.container}>
            {
                pokemonList.map(pokemon =>  <Pokemon key={pokemon.name} pokemon={pokemon} />)
            }
            <Pagination page={page} handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    );
};

export default PokemonPage;