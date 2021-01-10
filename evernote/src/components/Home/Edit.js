import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useInput from '../../customhook/UseInput'
import {updateNote} from "../../store/actions/updateNote.js"
import {useHistory } from "react-router-dom"

const Edit = () => {
    const note = useSelector(state=>state.note);
    console.log("edit Note",note);
    const history=useHistory();
    const [title,bindTitle,resetTitle]=useInput(note.title);
    const [content, bindContent,resetContent]=useInput(note.content);
    const dispatch =useDispatch()
    const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch(updateNote({id:note.id,title,content}))
        resetTitle();
        resetContent();
        history.push("/")

    }
    return (
        <div className="section">
            <form onSubmit={handleSubmit}  className="white">
                <h5 className="green-text text-darken-4">New Note</h5>
                <div className="input-field">
                    <input  id="note_title" type="text" className="validate" {...bindTitle}></input>
                    <label className="active" htmlFor="note_title">Note Title</label>
                </div>
                <div className="input-field">
                    <textarea id="note_content" className="materialize-textarea" {...bindContent}></textarea>
                    <label className="active" htmlFor="note_content">Note Content</label> 
                </div>
                <div className="white">
                <button className="btn green" >UPDATE</button>
                <br/>
                </div>
                
            </form>
            
        </div>
    )
}

export default Edit
