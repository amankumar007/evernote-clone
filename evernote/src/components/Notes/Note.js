import React from 'react'
import {deleteNote} from "../../store/actions/deleteNoteAction"
import {toggleFav} from "../../store/actions/toggleFav"
import {useDispatch} from 'react-redux'
import moment from 'moment'
import {Link} from "react-router-dom"

const Note = ({note}) => {

        const dispatch = useDispatch();
        
        const handleDeleteNote = ()=> {
            dispatch(deleteNote(note));
        }
        
        const handleToggleFav =( )=>{
            dispatch(toggleFav(note));
        }
        
        const handleEditNote=()=>{
            dispatch({type:'Edit_Note',payload: note});
        }
        
        const heartmarkup = note.favourite ? "favorite" : "favorite_border";
    return (
        <div className="note white">
            <div className="right-align">
                <i className="material-icons red-text favorite"  style={{cursor:'pointer', fontSize: 20}} onClick={handleToggleFav}>{heartmarkup}</i>
                <i className="material-icons delete" style={{cursor:'pointer',fontSize: 20}} onClick={ handleDeleteNote } >delete</i>
            </div>
            <Link to={"/note/"+note.id}>
                <h5 className="black-text">{note.title}</h5>
            </Link>
            
            <p className="blue-text truncate">{note.content} </p>
            <p className="grey-text left-align">{ moment(note.created.toDate()).fromNow()}</p>
            <div className="right-align">
                <Link to={"/edit/"+note.id }>
                    <i className="material-icons black-text edit" style={{cursor:'pointer',fontSize: 15}} onClick={ handleEditNote }>edit</i>
                </Link> 
            </div>
        </div>
    )
}

export default Note
