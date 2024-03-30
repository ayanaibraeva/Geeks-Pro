import React, {useEffect, useState} from 'react';
import axios, {get} from "axios";
import s from "./Pokemon.module.scss"

const Pokemon = ({pokemon}) => {
    const [pokemonOne, setPokemonOne] = useState({})

    const getPokemonURL = async (url) => {
        try{
            const { data } = await axios.get(url)
            return data
        }catch (e){
            console.log('error'. e );
        }finally {
            console.log('final')
        }
    }

    useEffect(() => {
        getPokemonURL(pokemon.url).then(pok => setPokemonOne(pok))
    }, [pokemon.url]);

    return (
        <div className={s.wrapper}>
            <div className={s.card}>
                {
                    pokemonOne ? <img src={pokemonOne?.sprites?.other?.dream_world?.front_default} alt="pokemon"/>
                        : <p>Loading...</p>
                }
                {pokemon.name}
            </div>
        </div>
    );
};

export default Pokemon;