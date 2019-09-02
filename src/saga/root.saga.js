import { all } from 'redux-saga/effects'
import { memberSaga } from './member.saga'
import { newsSaga} from './news.saga'
import { categorySaga } from './category.saga';
import { biographySaga } from './biography.saga'
import { boardMemberSaga } from './boardMember.saga'
import { contactSaga } from './contact.saga'
import { parliamentSaga } from './parliament.saga';
import { loginSaga } from './login.saga';
import { advertismentSaga } from './advertisment.saga';
import { aboutSaga } from './about.saga';

export default function* rootSaga() {
    yield all ([
        memberSaga(),
        newsSaga(),
        categorySaga(),
        biographySaga(),
        boardMemberSaga(),
        contactSaga(),
        parliamentSaga(),
        loginSaga(),
        advertismentSaga(),
        aboutSaga()
    ])
}
