const initState = {
    plans: [
        {id: '1', title: 'cardio workout', content: 'nananan nanan ananna'},
        {id: '2', title: 'power workout', content: 'nananan nanan ananna'},
        {id: '3', title: 'strong workout', content: 'nananan nanan ananna'},
    ]
}

const planReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PLAN':
            console.log('created plan', action.plan);
            return state;
        case 'CREATE_PLAN_ERROR':
            console.log('create plan error', action.err);
            return state;
        default:
            return state;
    }
};

export default planReducer;