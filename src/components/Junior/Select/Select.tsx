import React, {ChangeEvent} from 'react'
import styles from './Select.module.scss'

type SelectPropsType = {
    value: string
    onChange: (e:ChangeEvent<HTMLSelectElement>) => void
    favoriteGames: Array<string>
}
export function Select(props: SelectPropsType) {


    return (
        <div className={styles.container}>
            <span>Favorite game</span>
            <select name="Favorite game" defaultValue={'GTA'} onChange={props.onChange}>
                {props.favoriteGames.map ((game, i) =>
                    <option key={i} value={game}>{game}</option>)
                }
            </select>
        </div>
    )
}