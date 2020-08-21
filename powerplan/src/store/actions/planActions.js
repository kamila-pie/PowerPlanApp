export const createPlan = (plan) => {
    return (dispatch, getState, { getFireBase, getFirestore }) => {
        // make async call to database
        //reference to my project database
        const firestore = getFirestore();
        firestore.collection('plans').add({
            ...plan,
            authorName: 'Kamila',
            authorSurname: 'Pietraszuk',
            authorId: 5241,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PLAN', plan });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PLAN_ERROR', err });
        })
    }
};