import { takeLatest, call, put } from 'redux-saga/effects';
import { GET_DATA,SAVE_DATA, SAVE_IMAGE } from './constants';
import {request} from 'utils/common'
import {API_CONSTANTS,PROD_DOMAIN,STATUS_CODES} from 'utils/constants'
import {saveDataResult, setData,saveImageResult} from './actions'

// Individual exports for testing
export default function* appSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(GET_DATA, getDataFunc);
  yield takeLatest(SAVE_DATA, saveDataFunc);
  yield takeLatest(SAVE_IMAGE, saveImageFunc);
}
function* getDataFunc(){
  try{
    const userData =  yield call(
      request, 
      `${PROD_DOMAIN}/data/last`,
      {
          method: 'GET',
          headers: {
              'Content-type': 'application/json; charset=UTF-8',
          },
      }
    ) 
    console.log(userData)
    // debugger
    const {statusCode} = userData
    if(statusCode === STATUS_CODES.SUCCESS){
      yield put(
        setData({
          status: API_CONSTANTS.success,
          data: userData.data.data
        }),
      );
    }else{
      yield put(
        setData({
          status: API_CONSTANTS.error,
          data: userData.error
        }),
      );
    }
  }catch (err) {
    // Set error state
    console.log(err);
    yield put(
      setData({
        status: API_CONSTANTS.error,
        data: err.message
      }),
    );
    debugger
    // yield put(setFetchUserData({ status: API_CONSTANTS.error }));
  }
}
function* saveDataFunc(data){
  // console.log(data,'userData')
  debugger
  try{
    const userData =  yield call(
      request, 
      `http://localhost:3100/push`,
      {
          method: 'POST',
          body : JSON.stringify(data.payload),
          headers: {
              'Content-type': 'application/json; charset=UTF-8',
          },
      }
    ) 
    console.log(userData,'userData')
    debugger
    yield put(
      saveDataResult({
        status: API_CONSTANTS.success,
        data: userData
      }),
    );
  }catch (err) {
    // Set error state
    console.log(err);
    debugger
    yield put(
      saveDataResult({
        status: API_CONSTANTS.error,
        data: err.message
      }),
    );
    // yield put(setFetchUserData({ status: API_CONSTANTS.error }));
  }
}
function* saveImageFunc(data){
  // console.log(data,'userData')
  // debugger
  try{
    const image =  yield call(
      request, 
      `http://localhost:3100/api/v1/upload`,
      {
          method: 'POST',
          body : JSON.stringify(data.payload),
          headers: {
              'Content-type': 'application/json; charset=UTF-8',
          },
      }
    ) 
    console.log(image,'image')
    debugger
    yield put(
      saveDataResult({
        status: API_CONSTANTS.success,
        data: image
      }),
    );
  }catch (err) {
    // Set error state
    console.log(err);
    debugger
    yield put(
      saveDataResult({
        status: API_CONSTANTS.error,
        data: err.message
      }),
    );
    // yield put(setFetchUserData({ status: API_CONSTANTS.error }));
  }
}