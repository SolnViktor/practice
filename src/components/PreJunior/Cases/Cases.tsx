import styles from "./Cases.module.scss";
import React, {ChangeEvent, useState} from 'react';
import {v1} from "uuid";
import {MyButton} from '../../../common/MyButton/MyButton';


export function Cases() {
    const initialThings = [
        {id: v1(), thing: "Работа", priority: "Hight"},
        {id: v1(), thing: "Фильм", priority: "Low"},
        {id: v1(), thing: "Рект", priority: "Middle"},
        {id: v1(), thing: "Собака", priority: "Hight"},
        {id: v1(), thing: "Поесть", priority: "Low"}
    ]
    const [things, setThings] = useState(initialThings)
    const [priority, setPriority] = useState('All')
    const onClickDeleteThing = (id:string) => {
        let newThings = [...things].filter ( thing => thing.id !== id)
        setThings(newThings)
    }

    const FilteredThings = things
        .filter(item => {
            if(priority === 'All') {
                return item
            } else if (priority === item.priority){
                return item
            }
        })
        .map(item =>
            <li key={item.id} className={styles.li_item}>{item.thing}
            <MyButton btnName={'Delete'} styled={'secondary'}
                      onClick={ () => onClickDeleteThing(item.id)} />
            </li>)

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setPriority(e.currentTarget.value)
    }

    return (
        <div className={styles.container}>
            <div>
                <span>Сортировать по приоритету:</span>
                <select onChange={onChangeHandler} defaultValue={'All'} id="priority">
                    <option value="All">All</option>
                    <option value="Low">Low</option>
                    <option value="Middle">Middle</option>
                    <option value="Height">Height</option>
                </select>
            </div>
            <div>
                <span>Дела:</span>
                <ol>
                    {FilteredThings}
                </ol>
            </div>
        </div>
    );
}

