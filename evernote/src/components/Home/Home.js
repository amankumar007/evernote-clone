import React from 'react'
import Form from './Form'
import Notelist from '../Notes/Notelist.js'
import {useSelector } from 'react-redux'
import {useFirestoreConnect} from 'react-redux-firebase'
const Home = () => {
    useFirestoreConnect([{collection: 'notes',orderBy:['created','desc']}]);
    const notes =useSelector(state=>state.firestore.ordered.notes);
    return (
        <div className="container">
            <div className="row center-align">
                <div className="col s7"><Form /></div>
                <div className="col s5"><Notelist notes={notes}/></div>
            </div>
            
        </div>
    )
}

export default Home
