import { all } from './Comment/node_modules/redux-saga/effectsdules/redux-saga/effects';
import { userPropSaga } from './User';
import { commentPropSaga } from './Comment'

export default function* rootSaga() {
    yield all([
        userPropSaga(),
        commentPropSaga()
    ]);
}