import React, {useState} from 'react'
import {MyButton} from '../../../common/MyButton/MyButton';
import styles from './Users.module.scss'
import { hwReducer } from '../../../redux/hwReducer';

export type UserType = {id: string, name: string, age: number}

export function Users() {

    let usersInitial = [
        {id: '1', name: 'Max', age: 18},
        {id: '2', name: 'Sergey', age: 25},
        {id: '3', name: 'Grisha', age: 18},
        {id: '4', name: 'Semen', age: 31},
        {id: '5', name: 'Vasya', age: 45},
        {id: '6', name: 'Misha', age: 18},
        {id: '7', name: 'Andrey', age: 54},
    ]
    const [users, setUsers] = useState<UserType[]>(usersInitial)
    let filterUp = () => {
        let action = {type: 'SORT', payload: 'up'}
        let filteredUsers = hwReducer(users, action)
        setUsers(filteredUsers)
    }
    let filterDown = () => {
        let action = {type: 'SORT', payload: 'down'}
        let filteredUsers = hwReducer(users, action)
        setUsers(filteredUsers)
    }
    let filterAge = () => {
        let action = {type: 'CHECK', payload: 18}
        let filteredUsers = hwReducer(users, action)
        setUsers(filteredUsers)
    }
    let allUsers = () => {
        setUsers(usersInitial)
    }



    return (
        <div className={styles.container}>
            <div>
                <MyButton btnName={'Up'} onClick={filterUp} styled={'default'}/>
                <MyButton btnName={'Down'} onClick={filterDown} styled={'default'}/>
                <MyButton btnName={'Age 18'} onClick={filterAge} styled={'secondary'}/>
                <MyButton btnName={'All users'} onClick={allUsers} styled={'default'}/>
            </div>
            <div>
                <ol>
                    {users.map (u => <li key={u.id}>Name: {u.name} --- age: {u.age}</li>)}
                </ol>
            </div>
        </div>
    )
}