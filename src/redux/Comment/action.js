import actionTypes from './actionTypes';

const {
	FETCH_ALL_COMMENT,
	FETCH_ALL_COMMENT_FAILURE,
	FETCH_ALL_COMMENT_SUCCESS,

	FETCH_COMMENT_REPLY,
	FETCH_COMMENT_REPLY_FAILURE,
	FETCH_COMMENT_REPLY_SUCCESS,

	ADD_COMMENT_REPLY,
	ADD_COMMENT_REPLY_FAILURE,
	ADD_COMMENT_REPLY_SUCCESS,
	UPDATE_COMMENT,UPDATE_COMMENT_FAILURE,UPDATE_COMMENT_SUCCESS,

	ADD_COMMENT, ADD_COMMENT_FAILURE, ADD_COMMENT_SUCCESS,
	DELETE_COMMENT,DELETE_COMMENT_FAILURE,DELETE_COMMENT_SUCCESS
} = actionTypes;


export const fetchAllComment = () => ({
	type: FETCH_ALL_COMMENT,
});

export const fetchAllCommentSuccess = payload => ({
	payload: payload.data,
	type: FETCH_ALL_COMMENT_SUCCESS,
});

export const fetchAllCommentFailure = payload => ({
	payload,
	type: FETCH_ALL_COMMENT_FAILURE,
});

export const fetchCommentReply = payload => ({
	payload,
	type: FETCH_COMMENT_REPLY,
});

export const fetchCommetReplySuccess = payload => ({
	payload:payload.data,
	type: FETCH_COMMENT_REPLY_SUCCESS,
});
export const fetchCommentReplyFailure = payload => ({
	payload,
	type: FETCH_COMMENT_REPLY_FAILURE,
});


export const addComment = payload => ({
	payload,
	type: ADD_COMMENT,
});

export const addCommentSuccess = payload => ({
	payload:payload,
	type: ADD_COMMENT_SUCCESS,
});
export const addCommentFailure = payload => ({
	payload,
	type: ADD_COMMENT_FAILURE,
});


export const addCommentReply = payload => ({
	payload,
	type: ADD_COMMENT_REPLY,
});

export const addCommentReplySuccess = payload => ({
	payload:payload,
	type: ADD_COMMENT_REPLY_SUCCESS,
});
export const addCommentReplyFailure = payload => ({
	payload,
	type: ADD_COMMENT_REPLY_FAILURE,
});
export const deleteComment = payload => ({
	payload,
	type: DELETE_COMMENT,
});

export const deleteCommentSuccess = payload => ({
	payload:payload,
	type: DELETE_COMMENT_SUCCESS,
});
export const deleteCommentFailure = payload => ({
	payload,
	type: DELETE_COMMENT_FAILURE,
});

export const updateComment = payload => ({
	payload,
	type: UPDATE_COMMENT,
});

export const updateCommentSuccess = payload => ({
	payload:payload,
	type: UPDATE_COMMENT_SUCCESS,
});
export const updateCommentFailure = payload => ({
	payload,
	type: UPDATE_COMMENT_FAILURE,
});