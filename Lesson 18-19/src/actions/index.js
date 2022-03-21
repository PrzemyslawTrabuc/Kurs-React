import jsonPlaceholder from '../apis/jsonPlaceholder';


export const fetchPosts = () => async dispatch =>{
    const response = await jsonPlaceholder.get('/posts');

    dispatch({type:'FETCH_POSTS', payload:response})
    };

// BEFORE REFACTOR ES6 SYNTAX    
/*export const fetchPosts = () =>{
    return function(dispatch, getState){
    const response = jsonPlaceholder.get('/posts');

    return{
        type:'FETCH_POSTS',
        payload: response
    };

    };
};
*/

// TOTALLY FINE!

export const selectPost=()=>{
    return{
        type: 'SELECT_POST'
    }
};