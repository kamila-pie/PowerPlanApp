export const createPlan = (plan) => {
    return (dispatch, getState) => {
        // make async call to database
        dispatch({ type: 'CREATE_PLAN', plan})
    }
}