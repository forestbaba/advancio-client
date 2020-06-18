import { call, put, take, takeEvery, takeLatest } from "redux-saga/effects";
import { channel } from "redux-saga";
import * as actions from "./action";
import actionTypes from "./actionTypes";
import axios from "axios";
import { BASE_URL } from '../config'

const {
  fetchAllCommentFailure,
  fetchAllCommentSuccess,
  fetchCommentReplyFailure,
  fetchCommetReplySuccess,
  addComment,
  addCommentFailure,
  addCommentSuccess,

  addCommentReplyFailure,
  addCommentReplySuccess,

  deleteCommentFailure,
  deleteCommentSuccess,

  updateCommentFailure,
  updateCommentSuccess
} = actions;

const {
  FETCH_ALL_COMMENT,
  FETCH_COMMENT_REPLY,
  ADD_COMMENT,
  ADD_COMMENT_REPLY,
  DELETE_COMMENT,
  UPDATE_COMMENT

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

function* intiateFetchAllCommentReply(payload) {
  let uid = parseInt(payload)

  const allCommentReply = channel();
  try {
    yield axios.get(`${BASE_URL}/comments/${payload.payload}`).then(replies => {
      if (replies) {
        allCommentReply.put(fetchCommetReplySuccess(replies))

      }
    })



    while (true) {
      const action = yield take(allCommentReply);
      yield put(action);

    }

  } catch (error) {
    yield put(fetchCommentReplyFailure(error));
  }
}

function* createPost(payload) {

  const addComment = channel();
  try {

    yield axios.post(`${BASE_URL}/comments`, {
      comment: payload.payload
    },
      {
        headers: {
          Authorization: localStorage.getItem('jwtToken')
        }
      }).then(post => {
        addComment.put(addCommentSuccess(post))

      })

    while (true) {
      const action = yield take(addComment);
      yield put(action);

    }

  } catch (error) {
    yield put(addCommentFailure(error));
  }
}
function* initiateCommentReply(payload) {

  const addComment = channel();
  try {

    yield axios.post(`${BASE_URL}/comments/reply/${payload.payload.id}`, {
      commentReply: payload.payload.reply
    },
      {
        headers: {
          Authorization: localStorage.getItem('jwtToken')
        }
      }).then(post => {
        addComment.put(addCommentReplySuccess(post))

      })

    while (true) {
      const action = yield take(addComment);
      yield put(action);

    }

  } catch (error) {
    yield put(addCommentReplyFailure(error));
  }
}
function* initiateDeleteComment(payload) {

  const deleteComment = channel();
  try {

    yield axios.delete(`${BASE_URL}/comments/${payload.payload}`,
      {
        headers: {
          Authorization: localStorage.getItem('jwtToken')
        }
      }).then(post => {
        deleteComment.put(deleteCommentSuccess(post))

      })

    while (true) {
      const action = yield take(deleteComment);
      yield put(action);

    }

  } catch (error) {
    yield put(deleteCommentFailure(error));
  }
}

function* initiateUpdateComment(payload) {

  const updateComment = channel();
  try {

    yield axios.patch(`${BASE_URL}/comments/${payload.payload.id}`, {
      comment: payload.payload.post
    },
      {
        headers: {
          Authorization: localStorage.getItem('jwtToken')
        }
      }).then(post => {
        updateComment.put(updateCommentSuccess(post))

      })

    while (true) {
      const action = yield take(updateComment);
      yield put(action);

    }

  } catch (error) {
    yield put(updateCommentFailure(error));
  }
}

export default function* commentPropSaga() {
  yield takeEvery(FETCH_ALL_COMMENT, intiateFetchAllComments);
  yield takeEvery(FETCH_COMMENT_REPLY, intiateFetchAllCommentReply);
  yield takeEvery(ADD_COMMENT, createPost);
  yield takeEvery(ADD_COMMENT_REPLY, initiateCommentReply);
  yield takeEvery(DELETE_COMMENT, initiateDeleteComment);
  yield takeEvery(UPDATE_COMMENT, initiateUpdateComment);


}
