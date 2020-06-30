import React, {useState} from 'react'
import {EditableSpan} from '../../../common/EditableSpan/EditableSpan';
import {MyButton} from '../../../common/MyButton/MyButton';
import styles from './Films.module.scss'
import { saveState, restoreState } from '../../../common/helpers';

type FilmType = {id: number, name:string}

export function Films() {

    let filmList = [
        {id: 1, name: 'True Detective'},
        {id: 2, name: 'Defending Jacob'},
        {id: 3, name: 'Fight Club'},
        {id: 4, name: 'Troy'},
        {id: 5, name: 'Gladiator'},
    ]
    const [films, setFilms] = useState<FilmType[]>(filmList)

    const updateFilmName = (newFilmName:string, id:number) => {
        let copyFilms = films.map ( f => {
            if(f.id === id) return {...f, name: newFilmName}
            return f
        })
        setFilms(copyFilms)
    }

    const saveFilms = () => {
        saveState('films', films)
    }
    const loadFilms = () => {
        setFilms(restoreState('films', films))
    }

    return (
        <div className={styles.container}>
            <div>
                <MyButton btnName={'Save'} onClick={saveFilms} style={'default'}/>
                <MyButton btnName={'Load'} onClick={loadFilms} style={'secondary'}/>
            </div>
            <div>Favorit films:</div>
            <div>
                <ol>
                    {films.map((f, index) =>
                        <li key={f.id}>
                            <EditableSpan value={f.name} updateTitle={updateFilmName} id={f.id}/>
                        </li>
                    )}
                </ol>
            </div>
        </div>
    )
}