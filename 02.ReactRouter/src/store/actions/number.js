const add_number = () => {
    return{
        type:'ADD_NUMBER'
    }
}

const minus_number = () => {
    return{
        type:'MINUS_NUMBER'
    }
}

module.exports = {
    add_number,
    minus_number
}