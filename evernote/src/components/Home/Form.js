import React from 'react'
import {useDispatch} from 'react-redux'
import useInput from '../../customhook/UseInput'
import {addNote} from "../../store/actions/noteAction"
const Form = () => {
    const [title,bindTitle,resetTitle]=useInput();
    const [content, bindContent,resetContent]=useInput();
    const dispatch =useDispatch()
    const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch(addNote({title,content}))
        resetTitle();
        resetContent();

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
                    <label htmlFor="note_content">Note Content</label> 
                </div>
                <div className="white">
                <button className="btn green" >Add</button>
                <br/>
                </div>
                
            </form>
            
        </div>
    )
}

export default Form
