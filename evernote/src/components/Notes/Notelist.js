import React from 'react'
import Note from './Note.js'
const Notelist = ({notes}) => {
    return (
        <div className="notelist">
           {notes && notes.map(note=> <Note note={note} key={note.id} />) }
        </div>
    )
}

export default Notelist
