import React, {ChangeEvent, useState} from 'react'
import {Films} from './Films/Films'
import {Select} from './Select/Select';
import {Radio} from './Radio/Radio';
import {Phones} from './Phones/Phones';


export function Junior() {
    let favoriteGames = ['GTA', 'CS', 'DOTA', 'HeroesIII', 'Star Craft'] // For <Select />
    let [game, setGame] = useState('DOTA')
    let onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setGame(e.currentTarget.value)
    }


    return (
        <div>
            <Films/>
            <Select value={game} onChange={onChangeHandler} favoriteGames={favoriteGames}/>
            <Radio />
            <Phones />
        </div>
    )
}