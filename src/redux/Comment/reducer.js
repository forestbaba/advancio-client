import actionTypes from "./actionTypes";

const {
  FETCH_ALL_COMMENT,
  FETCH_ALL_COMMENT_FAILURE,
  FETCH_ALL_COMMENT_SUCCESS

} = actionTypes;

const initialState = {
  loading: "false",
  allComments: [],
  error: {},
  isAuthenticated: false,
  successSignup:false
 
};

export default (state = initialState, { payload, type }) => {
  switch (type) {
    case FETCH_ALL_COMMENT:
      return { ...state, loading: true };

    case FETCH_ALL_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        allComments: payload
      };

 
    case FETCH_ALL_COMMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    // case LOG_IN:
    //   return { ...state, loadingAddress: true };

    // case LOG_IN_SUCCESS:
    //   return {
    //     ...state,
    //     loadingAddress: false,
    //     loggedInUser: payload
    //   };

    // case LOG_IN_FAILURE:
    //   return { ...state, loading: false, error: payload };
    
    
    // case IS_LOGOUT:
    //   return { ...state, loadingAddress: true };

    // case IS_LOGOUT_SUCCESS:
    //   return {
    //     ...state,
    //     loadingAddress: false,
    //     isAuthenticated: false
    //   };

    // case IS_LOGOUT_FAILURE:
    //   return {
    //     ...state,
    //     loading: false,
    //    isAuthenticated: false
    //   };
    
    
    // case SIGN_UP:
    //   return { ...state, loadingAddress: true };

    // case SIGN_UP_SUCCESS:
    //   return {
    //     ...state,
    //     successSignup: true,
    //     loadingAddress: false,
    //   };

    // case SIGN_UP_FAILURE:
    //   return {
    //     ...state,
    //     successSignup: false,
    //     loading: false
    //   };
    
    
    default:
      return state;
  }
};
