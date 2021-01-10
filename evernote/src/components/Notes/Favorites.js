import React from 'react'
import {useFirestoreConnect }from 'react-redux-firebase'
import {useSelector} from 'react-redux'
import Notelist from "./Notelist"

const Favorites = () => {
    useFirestoreConnect([{collection: 'notes',where:["favourite","==",true],orderBy:['created','desc'],storeAs:['favNotes']}]);
    const favNotes = useSelector(state=>state.firestore.ordered.favNotes);
    console.log("favNotes",favNotes);
    
    return (
        <div className="favorite">
            <Notelist notes={favNotes}/>           
        </div>
    )
}

export default Favorites
