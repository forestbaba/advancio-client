import actionTypes from './actionTypes';

const {
	IS_LOGGIN,
	LOG_IN,
	LOG_IN_FAILURE, LOG_IN_SUCCESS, SIGN_UP, SIGN_UP_FAILURE, SIGN_UP_SUCCESS,
	IS_LOGGIN_FAILURE, IS_LOGIN_SUCCESS,
	IS_LOGOUT, IS_LOGOUT_SUCCESS, IS_LOGOUT_FAILURE,
	

} = actionTypes;


export const isLogin = payload => ({
	payload,
	type: IS_LOGGIN,
});

export const isLoginSuccess = payload => ({
	payload,
	type: IS_LOGIN_SUCCESS,
});

export const isLoginFailure = payload => ({
	payload,
	type: IS_LOGGIN_FAILURE,
});

export const login = payload => ({
	payload,
	type: LOG_IN,
});

export const loginSuccess = payload => ({

	payload:payload,
	type: LOG_IN_SUCCESS,
});
export const loginFailure = payload => ({
	payload,
	type: LOG_IN_FAILURE,
});
export const logOut = () => ({
	type: IS_LOGOUT,
});

export const logOutSuccess = payload => ({
	payload,
	type: IS_LOGOUT_SUCCESS,
});

export const logOutFailure = payload => ({
	payload,
	type: IS_LOGOUT_FAILURE
});
export const signup = payload => ({
	payload,
	type: SIGN_UP,
});

export const signpSuccess = payload => ({
	payload,
	type: SIGN_UP_SUCCESS,
});

export const signupFailure = payload => ({
	payload,
	type: SIGN_UP_FAILURE,
	
});