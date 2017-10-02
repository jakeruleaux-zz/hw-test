export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_NAME':
    const { name, id } = action;
    return [
      ...state,
      {
        name: name,
        id: id
      }
    ]
    default:
    return state;
  }
}
