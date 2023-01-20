
import {createStore} from 'redux'

let initialState = {
  username: "",
  userId: null,
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "LOGIN":
      let newState = {
        username: action.payload.username,
        userId: action.payload.id
      }
      return newState
    case 'LOGOUT':
      return initialState
    default:
      return state
  }
}

const store = createStore(reducer)

export default store