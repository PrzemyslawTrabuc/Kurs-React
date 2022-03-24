import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash'; // biblioteka przydanytch funkcji JS


export const fetchPostsAndUsers =()=> async (dispatch, getState) =>{
    await dispatch(fetchPosts());
    ////////////////// standard
    // const userIds = _.uniq(_.map(getState().posts, 'userId'));
    // userIds.forEach(id=>dispatch(fetchUser(id)));    
    ////////////////// chain version
    _.chain(getState().posts)
        .map('userId')
            .uniq()
                .forEach(id=>dispatch(fetchUser(id)))
                    .value();
};

export const fetchPosts = () => async dispatch =>{
    const response = await jsonPlaceholder.get('/posts');
    dispatch({type:'FETCH_POSTS', payload:response.data})
};

export const fetchUser = (id) => async dispatch =>{
        const response = await jsonPlaceholder.get(`/users/${id}`);
        dispatch({type:'FETCH_USER', payload:response.data})
};

// MEMOIZED VERSION off/////////////////////////////////////////////////
//  export const fetchUser = id => dispatch =>{
//     _fetchUser(id, dispatch);
// };
   
// const _fetchUser = _.memoize(async(id, dispatch)=>{
//     const response = await jsonPlaceholder.get(`/users/${id}`);       
//     dispatch({type:'FETCH_USER', payload:response.data})
// });
////////////////////////////////////////////////////////////////////////
// export const fetchUser = (id) => async dispatch =>{
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({type:'FETCH_USER', payload:response.data})
//     };

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