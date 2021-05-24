import React from "react";

export default function PokemonRenderer({props}){
    const {name , moves} = props;
    console.log(moves[0]);
    
    return (
        <div>
            <h2>{name}</h2>
            <div>
                <p>Liste des attacks</p>
                <ul>
                    {
                        moves.map(m => (
                            <li>
                                {m?.move?.name}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}