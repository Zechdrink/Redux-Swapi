import axios from 'axios';
export const LOADING = "LOADING";
export const ERROR = "ERROR";
export const SUCCESS = "SUCCESS";


export const fetchCharacters = () => dispatch =>  {
       dispatch({type: LOADING})

        axios
            .get(`https://swapi.co/api/people`)
            .then(({ data })=> {
                dispatch({
                    type: SUCCESS, 
                    payload: data.results

                })
            })

            .catch(error => {
                dispatch({
                    type: ERROR,
                    payload: 'Uh Oh, Oh NO!!! Something went wrong!'
                })
            })
    }
