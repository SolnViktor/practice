import styles from "./Cases.module.scss";
import React, {ChangeEvent, useState} from "react";
import {v1} from "uuid";


export function Cases() {
    const thingsArr = [
        {id: v1(), thing: "Работа", priority: "Hight"},
        {id: v1(), thing: "Фильм", priority: "Low"},
        {id: v1(), thing: "Рект", priority: "Middle"},
        {id: v1(), thing: "Собака", priority: "Hight"},
        {id: v1(), thing: "Поесть", priority: "Low"}
    ]
    let [priority, setPriority] = useState('All')

    const FilteredThings = thingsArr
        .filter(item => {
            if(priority === 'All') {
                return item
            } else if (item.priority === priority){
                return item
            }
        })
        .map(item => <li key={item.id}>{item.thing}</li>)

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
                    <option value="Hight">Hight</option>
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

