export default function(state = [], action) {
  switch (action.type) {
    case 'get_data':
      return action.payload;
    default:
      return state;
  }
}