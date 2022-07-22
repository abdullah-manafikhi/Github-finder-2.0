const GithubReducer = (state , action) => {
    switch (action.type) {
        case "GET_USERS":
            return {
                ...state, 
                users:action.payload,
                loading:false
            }
            break;
        case "CLEAR":
            return {
                ...state, 
                users:action.payload,
                loading:false
            }
            break;
        case "USER_PROFILE":
            return {
                ...state, 
                user:action.payload,
                loading:false
            }
            break;
         case "SET_LOADING":
            return {
                ...state, 
                loading: true
            }
            break;
        case "GET_REPOS":
            return {
                ...state,
                repos:action.payload,
                loading: true
            }
            break;   
    
        default: 
        return{
            ...state,
            loading:false
        }
            break;
    }
}

export default GithubReducer