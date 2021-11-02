const initialState = [
    {
        active: false,
        firstName : 'please enter1..',
        secondName : 'please enter1..',
        phoneNumber : 'please enter1..',
    },
    {
        active: false,
        firstName : 'please enter2..',
        secondName : 'please enter2..',
        phoneNumber : 'please enter2..',
    },
    {
        active: false,
        firstName : 'please enter3..',
        secondName : 'please enter3..',
        phoneNumber : 'please enter3..',
    },
    {
        active: false,
        firstName : 'please enter4..',
        secondName : 'please enter4..',
        phoneNumber : 'please enter4..',
    },
    {
        active: false,
        firstName : 'please enter5..',
        secondName : 'please enter5..',
        phoneNumber : 'please enter5..',
    },
    {
        active: false,
        firstName : 'please enter6..',
        secondName : 'please enter6..',
        phoneNumber : 'please enter6..',
    },
    {
        active: false,
        firstName : 'please enter7..',
        secondName : 'please enter7..',
        phoneNumber : 'please enter7..',
    },
    {
        active: false,
        firstName : 'please enter8..',
        secondName : 'please enter8..',
        phoneNumber : 'please enter8..',
    },
];

function frameReducer(state = initialState, action) {
    switch (action.type){
        case "FETCH_ALL":
            return [...action.data];
        case "UPDATE_ONE":
            return [...action.data];
        default:
            return state;
    }
}

export default frameReducer;