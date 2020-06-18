import { all } from 'redux-saga/effects';
import { userPropSaga } from './User';
import { commentPropSaga } from './Comment'

export default function* rootSaga() {
    yield all([
        userPropSaga(),
        commentPropSaga()
    ]);
}