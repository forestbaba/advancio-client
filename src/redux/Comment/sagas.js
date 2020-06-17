import { call, put, take, takeEvery, takeLatest } from "redux-saga/effects";
import { channel } from "redux-saga";
import * as actions from "./action";
import actionTypes from "./actionTypes";
import axios from "axios";
import { BASE_URL } from '../config'

const {
  fetchAllComment, fetchAllCommentFailure, fetchAllCommentSuccess
} = actions;

const {
  FETCH_ALL_COMMENT,
  FETCH_ALL_COMMENT_FAILURE,
  FETCH_ALL_COMMENT_SUCCESS
} = actionTypes;


function* intiateFetchAllComments() {
  const allComments = channel();
  try {
    yield axios.get(`${BASE_URL}/comments`).then(comments => {
      if (comments) {
        allComments.put(fetchAllCommentSuccess(comments))

      }
    })



    while (true) {
      const action = yield take(allComments);
      yield put(action);

    }

  } catch (error) {
    yield put(fetchAllCommentFailure(error));
  }
}

// function* userLogin({ payload }) {
//   const loggIn = channel();
//   try {
//     if (payload) {
//       yield authentication.signInWithEmailAndPassword(payload.email, payload.password).then(res => {
//         dataBase.collection('users').where('uid', '==', res.user.uid).get()
//           .then(querySnapshot => {
//             console.log(querySnapshot)
//             querySnapshot.docs.map(doc => {
//               let userData = doc.data();
//               console.log(userData)
//               loggIn.put(actions.loginSuccess(userData));
//             });
//           });

//       });
//       while (true) {
//         const action = yield take(loggIn);
//         yield put(action);
//       }
//     }

//   } catch (error) {
//     yield put(actions.loginFailure(error));
//   }
// }
// function* userSignup({ payload }) {
//   console.log('==', payload)
//   const loggIn = channel();
//   try {
//     if (payload) {


//       authentication.createUserWithEmailAndPassword(payload.email, payload.password)
//         .then(user => {

//           // user.user.uid
//           dataBase.collection("users").doc(user.user.uid).set({
//             email: payload.email,
//             uid: user.user.uid
//           }).then(newU => {
//             loggIn.put(actions.signpSuccess(newU))
//             console.log('Done')
//           }).catch(err => {
//             alert('Error creating user, Please try again later')
//             //console.log('ERRX: ', err)
//           })
//         })






//       while (true) {
//         const action = yield take(loggIn);
//         yield put(action);
//       }
//     }

//   } catch (error) {
//     yield put(actions.signupFailure(error));
//   }
// }
// function* userLogout() {
//   const loggOut = channel();
//   try {
//     yield authentication.signOut()
//       .then(() => {
//         loggOut.put(actions.logOutSuccess("Logged out"))
//       })

//     while (true) {
//       const action = yield take(loggOut);
//       yield put(action);
//     }

//   } catch (error) {
//     yield put(actions.logOutFailure(error));
//   }
// }

export default function* commentPropSaga() {
  yield takeEvery(FETCH_ALL_COMMENT, intiateFetchAllComments);
  // yield takeEvery(LOG_IN, userLogin);
  // yield takeEvery(IS_LOGOUT, userLogout);
  // yield takeEvery(SIGN_UP, userSignup);

}
