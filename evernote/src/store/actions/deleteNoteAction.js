export  const deleteNote = note=>{
    return ((dispatch,getState, {getFirestore})=>{
        const firestore =getFirestore();
        firestore.collection('notes').doc(note.id)
        .delete().then(()=>{
            console.log("succesfully deleted")
        } )
        .catch(err=>{
            console.log(err);
        })
    })
} 