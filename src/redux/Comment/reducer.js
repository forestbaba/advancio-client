import actionTypes from "./actionTypes";

const {
  FETCH_ALL_COMMENT,
  FETCH_ALL_COMMENT_FAILURE,
  FETCH_ALL_COMMENT_SUCCESS,

  FETCH_COMMENT_REPLY,
  FETCH_COMMENT_REPLY_FAILURE,
  FETCH_COMMENT_REPLY_SUCCESS,

  ADD_COMMENT_REPLY,ADD_COMMENT_REPLY_FAILURE,ADD_COMMENT_REPLY_SUCCESS,
  ADD_COMMENT, ADD_COMMENT_FAILURE, ADD_COMMENT_SUCCESS,
  DELETE_COMMENT,DELETE_COMMENT_FAILURE,DELETE_COMMENT_SUCCESS,
  UPDATE_COMMENT,UPDATE_COMMENT_FAILURE,UPDATE_COMMENT_SUCCESS

} = actionTypes;

const initialState = {
  loading: "false",
  allComments: [],
  allCommentReply:[],
  error: {},
  isAuthenticated: false,
  successSignup: false,
  addCommentSuccess: false,
  addCommentReplySuccess: false,
  deleteCommentSuccess: false,
  updateCommentSuccess: false
 
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
    
    case FETCH_COMMENT_REPLY:
      return { ...state, loading: true };

    case FETCH_COMMENT_REPLY_SUCCESS:
      return {
        ...state,
        loading: false,
        allCommentReply: payload
      };

 
    case FETCH_COMMENT_REPLY_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    
    case ADD_COMMENT:
      return { ...state, loading: true, payload };
    
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false, payload,
        addCommentSuccess: true
      };
    
    case ADD_COMMENT_FAILURE:
      return { ...state, loading: false, payload };
    
    
    case ADD_COMMENT_REPLY:
      return { ...state, loading: true, payload };
    
    case ADD_COMMENT_REPLY_SUCCESS:
      return {
        ...state,
        loading: false, payload,
        addCommentReplySuccess: true
      };
    
    case ADD_COMMENT_REPLY_FAILURE:
      return {
        ...state,
        loading: false,
        payload
      };
    case DELETE_COMMENT:
      return { ...state, loading: true, payload };
    
    case DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false, payload,
        deleteCommentSuccess: true
      };
    
    case DELETE_COMMENT_FAILURE:
      return {
        ...state,
        loading: false,
        payload
      };
    case UPDATE_COMMENT:
      return { ...state, loading: true, payload };
    
    case UPDATE_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false, payload,
        updateCommentSuccess: true
      };
    
    case UPDATE_COMMENT_FAILURE:
      return {
        ...state,
        loading: false,
        payload
      };
    default:
      return state;
  }
};
