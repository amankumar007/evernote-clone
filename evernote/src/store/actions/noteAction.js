export const addNote = note=>{
    return ((dispatch,getState, {getFirestore})=>{
        const firestore =getFirestore();
        firestore.collection('notes')
        .add({ 
            ...note,
            favourite:false,
            created:new Date()
        }).then(()=>{
            console.log("succesfully added")
        } )
        .catch(err=>{
            console.log(err);
        })
    })
} 