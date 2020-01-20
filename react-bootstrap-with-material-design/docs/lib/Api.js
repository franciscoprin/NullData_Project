import axios from 'axios'

// Redux Constants
const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS '
const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR'

// Redux Success Action
const fetchData = data => ({
  type: FETCH_DATA_SUCCESS,
  payload: data // Returns { message: 'Your email was sent!' }
})

// Redux Error Action
const fetchError = data => ({
  type: FETCH_DATA_ERROR,
  payload: data // Returns { error: 'There was a problem with your request, please try back later.' }
})

const url = 'http://localhost:8000/api/save/'
// Function for querying the api.
const requester = async (input,reqType) => {
  try {
    // POST to my backend.
    if(reqType == "POST"){
      const { data } = await axios.post(url, input)
    }
    else if(reqType == "GET"){
     const { data } = await axios.get(url, input)
    }
    return data
  } catch (e) {
    throw e
  }
}

// Redux Async-Action-Creator
const registerUser = (values,reqType) => async dispatch => {
  // Await the backend Promise of success or error.
  const data = await requester(values)
  // If an error let redux handle the proper UI message to be rendered.
  if (data.error) return dispatch(fetchError(data))
  // Dispatch to the redux store.
  return dispatch(fetchData(data))
}
export default registerUser;

