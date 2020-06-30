import { hwReducer } from "./hwReducer";

test('sort state by user age for low to up', () => {
    let initialState = [
        {id: '1', name: 'Max', age: 41},
        {id: '2', name: 'Sergey', age: 25},
        {id: '3', name: 'Grisha', age: 37},
        ]
    let action =  {type: 'SORT', payload: 'up'}
    let resultState = hwReducer(initialState, action)
    expect(resultState[0]).toBe(initialState[1]);
    expect(resultState[1]).toBe(initialState[2]);
    expect(resultState[2]).toBe(initialState[0]);
});

test('sort state by user age for up to low', () => {
    let initialState = [
        {id: '1', name: 'Max', age: 41},
        {id: '2', name: 'Sergey', age: 25},
        {id: '3', name: 'Grisha', age: 37},
    ]
    let action =  {type: 'SORT', payload: 'down'}
    let resultState = hwReducer(initialState, action)

    expect(resultState[0]).toBe(initialState[0]);
    expect(resultState[1]).toBe(initialState[2]);
    expect(resultState[2]).toBe(initialState[1]);
});

test('check state by user age for value 18', () => {
    let initialState = [
        {id: '1', name: 'Max', age: 18},
        {id: '2', name: 'Sergey', age: 25},
        {id: '3', name: 'Grisha', age: 18},
    ]
    let action =  {type: 'CHECK', payload: 18}
    let resultState = hwReducer(initialState, action)

    expect(resultState.length).toBe(2);
    expect(resultState[0]).toBe(initialState[0]);
    expect(resultState[1]).toBe(initialState[2]);
});