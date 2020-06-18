import { call, put, take, takeEvery, takeLatest } from "redux-saga/effects";
import { channel } from "redux-saga";
import * as actions from "./action";
import actionTypes from "./actionTypes";
import axios from "axios";
import { BASE_URL } from '../config';
import jwdtDecode from 'jwt-decode';

const {
  isLogin,
  login, isLoginSuccess, isLoginFailure, logOutSuccess, logOutFailure, signpSuccess, signupFailure
} = actions;

const {
  IS_LOGGIN,
  LOG_IN,
  IS_LOGOUT,
  SIGN_UP
} = actionTypes;


function* checkLogin() {
  const loggedIn = channel();
  try {
    if (localStorage.getItem('jwtToken')) {
      const decodedToken = jwdtDecode(localStorage.getItem('jwtToken'))

      if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem('jwtToken')
      } else {
        loggedIn.put(isLoginSuccess(decodedToken))
      }
    }
    // yield authentication.onAuthStateChanged(user => {
    //   if (user) {
    //     loggedIn.put(isLoginSuccess(user))
    //   } else {
    //     loggedIn.put(isLoginFailure(user))
    //   }

    // })

    while (true) {
      const action = yield take(loggedIn);
      yield put(action);

    }

  } catch (error) {
    yield put(isLoginFailure(error));
  }
}

function* userLogin({ payload }) {
  const loggIn = channel();
  try {
    if (payload) {
      yield axios.post(`${BASE_URL}/users/login`, {
        email: payload.email,
        password: payload.password
      }).then(res => {
        if (res) {
          localStorage.setItem("jwtToken", res.data.user.token)
          // localStorage.removeItem("jwtToken")
          loggIn.put(actions.loginSuccess(res.data))
        }

      });
      while (true) {
        const action = yield take(loggIn);
        yield put(action);
      }
    }

  } catch (error) {
    yield put(actions.loginFailure(error));
  }
}
function* userSignup({ payload }) {
  const loggIn = channel();
  try {
    if (payload) {


      yield axios.post(`${BASE_URL}/users/signup`, {
        name: payload.name,
        email: payload.email,
        password: payload.password,
        confirmPassword: payload.confirmPassword
      }).then(res => {
        if (res) {
          localStorage.setItem("jwtToken", res.data.token)
          // localStorage.removeItem("jwtToken")
          loggIn.put(actions.signpSuccess(res.data))
        } else {
        }

      }).catch(err => {
        loggIn.put(actions.signupFailure(err.response.data))
      });



      

      while (true) {
        const action = yield take(loggIn);
        yield put(action);
      }
    }

  } catch (error) {
    yield put(actions.signupFailure(error));
  }
}
function* userLogout() {
  const loggOut = channel();
  try {
    // yield authentication.signOut()
    //   .then(() => {
    //     loggOut.put(actions.logOutSuccess("Logged out"))
    //   })
     localStorage.removeItem('jwtToken')

      loggOut.put(logOutSuccess('Logged out'))

    while (true) {
      const action = yield take(loggOut);
      yield put(action);
    }

  } catch (error) {
    yield put(actions.logOutFailure(error));
  }
}

export default function* userPropSaga() {
  yield takeEvery(IS_LOGGIN, checkLogin);
  yield takeEvery(LOG_IN, userLogin);
  yield takeEvery(IS_LOGOUT, userLogout);
  yield takeEvery(SIGN_UP, userSignup);

}
