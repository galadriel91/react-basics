const initialState = {
    title:'React Redux Setting',
    number:0
}

const numberReducer = (prevState = initialState , action) => {
    switch(action.type){
        case 'ADD_NUMBER':
            return{
                ...prevState,
                number:prevState.number + 1
            }
        case 'MINUS_NUMBER':
            return{
                ...prevState,
                number:prevState.number - 1
            }    
        default:
            return prevState
    }
}

module.exports = numberReducer