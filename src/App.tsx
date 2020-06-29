import React from 'react';
import './App.scss';
import {Header} from './components/Header/Header';
import {PreJunior} from './components/PreJunior/PreJunior';
import {JuniorPlus} from './components/JuniorPlus/JuniorPlus';
import {Junior} from './components/Junior/Junior';
import {Route, Switch, Redirect} from 'react-router-dom';

export type MessageDataType = { name: string, message: string, date: string }

function App() {

    const dataForMessage: MessageDataType = {
        name: 'Viktor',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
            'Dolores impedit nisi optio quaerat temporibus voluptas. Adipisci ' +
            'blanditiis distinctio dolorum error, eveniet exercitationem, ' +
            'explicabo illum labore laudantium, libero, numquam obcaecati sint suscipit!',
        date: '27:05:2020, 12:28',
    }


    return (
        <div className="app">
            <Header/>
            <div className="container">
                <Switch>
                    <Redirect exact from={'/'} to={'/preJunior'} />
                    <Route path='/preJunior'
                    render={ () => <PreJunior messageData={dataForMessage}/>} />
                    <Route path='/junior' render={ () => <Junior/>} />
                    <Route path='/juniorPlus' render={ () => <JuniorPlus/>} />
                </Switch>
            </div>
        </div>
    );
}

export default App;
