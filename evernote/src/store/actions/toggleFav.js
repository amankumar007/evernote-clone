export const toggleFav = note=>{
    return ((dispatch,getState, {getFirestore})=>{
        const firestore =getFirestore();
        firestore.collection('notes').doc(note.id)
        .update({ 
            favourite:!note.favourite,
        }).then(()=>{
            console.log("succesfully added")
        } )
        .catch(err=>{
            console.log(err);
        })
    })
} 