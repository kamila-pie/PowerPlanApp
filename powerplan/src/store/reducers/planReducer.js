const initState = {
    plans: [
        {id: '1', title: 'cardio workout', content: 'nananan nanan ananna'},
        {id: '2', title: 'power workout', content: 'nananan nanan ananna'},
        {id: '3', title: 'strong workout', content: 'nananan nanan ananna'},
    ]
}

const planReducer = (state = initState, action) => { return state };

export default planReducer;