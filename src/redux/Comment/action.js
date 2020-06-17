import actionTypes from './actionTypes';

const {
	FETCH_ALL_COMMENT,
	FETCH_ALL_COMMENT_FAILURE,
	FETCH_ALL_COMMENT_SUCCESS
} = actionTypes;


export const fetchAllComment = () => ({
	type: FETCH_ALL_COMMENT,
});

export const fetchAllCommentSuccess = payload => ({
	payload,
	type: FETCH_ALL_COMMENT_SUCCESS,
});

export const fetchAllCommentFailure = payload => ({
	payload,
	type: fetchAllCommentFailure,
});

// export const login = payload => ({
// 	payload,
// 	type: LOG_IN,
// });

// export const loginSuccess = payload => ({
// 	payload,
// 	type: LOG_IN_SUCCESS,
// });
// export const loginFailure = payload => ({
// 	payload,
// 	type: LOG_IN_FAILURE,
// });
// export const logOut = () => ({
// 	type: IS_LOGOUT,
// });

// export const logOutSuccess = payload => ({
// 	payload,
// 	type: IS_LOGOUT_SUCCESS,
// });

// export const logOutFailure = payload => ({
// 	payload,
// 	type: IS_LOGOUT_FAILURE
// });
// export const signup = payload => ({
// 	payload,
// 	type: SIGN_UP,
// });

// export const signpSuccess = payload => ({
// 	payload,
// 	type: SIGN_UP_SUCCESS,
// });

// export const signupFailure = payload => ({
// 	payload,
// 	type: SIGN_UP_FAILURE
// });