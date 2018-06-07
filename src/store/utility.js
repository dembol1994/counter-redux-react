export default (state, updValue) => {
    return {
        ...state,
        ...updValue
    }
}