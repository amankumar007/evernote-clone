export const updateNote = note=>{
    return ((dispatch,getState, {getFirestore})=>{
        const firestore =getFirestore();
        firestore.collection('notes').doc(note.id)
        .update({ 
            title:note.title,
            content:note.content
        }).then(()=>{
            console.log("succesfully updated")
        } )
        .catch(err=>{
            console.log(err);
        })
    })
} 