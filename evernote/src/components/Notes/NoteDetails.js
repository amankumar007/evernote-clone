import React from 'react'
import {useFirestoreConnect,isLoaded,isEmpty} from 'react-redux-firebase'
import {useSelector} from 'react-redux'
import moment from 'moment'

const NoteDetails = (props) => {

    const id = props.match.params.id;
    useFirestoreConnect([{collection:'notes',doc:id}]);
    const note =useSelector(({firestore:{data}})=> data.notes && data.notes[id]);
    
    
    const noteMarkup = !isLoaded(note)? (  <div className="NoteDetails container section">
                                                 <div class="row">
                                                    <div class="col s12 m12">
                                                      <div class="card blue-grey darken-1">
                                                        <div class="card-content white-text">
                                                          <span class="card-title"><b>Loading</b> </span>
            
                                                        </div>
                                                      </div>
                                                    </div>
                                                </div>
                                            </div> ):(isEmpty(note)?(<div className="NoteDetails container section">
                                                                         <div class="row">
                                                                            <div class="col s12 m12">
                                                                              <div class="card blue-grey darken-1">
                                                                                <div class="card-content white-text">
                                                                                  <span class="card-title"><b>This content is not available</b> </span>                                                                                
                                                                                </div>
                                                                              </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>):(<div className="NoteDetails container section">
                                                                                 <div class="row">
                                                                                    <div class="col s12 m12">
                                                                                      <div class="card blue-grey darken-1">
                                                                                        <div class="card-content white-text">
                                                                                          <span class="card-title"><b>{note.title}</b> </span>
                                                                                          <p> {note.content} </p>
                                                                                        </div>
                                                                                        <div className="card-action grey lighten-4 grey-text">
                                                                                            {moment(note.created.toDate()).calendar()}
                                                                                        
                                                                                        </div>
                                                                                      </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>))
    return noteMarkup
        
}

export default NoteDetails
