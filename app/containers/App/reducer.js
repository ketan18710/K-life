/*
 *
 * App reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  GET_DATA,
  SET_DATA,
  SAVE_DATA,
  SAVE_DATA_RESULT,
  SAVE_IMAGE,
  SAVE_IMAGE_RESULT,
  GET_INQUIRY,
  SET_INQUIRY,
} from './constants';
import { API_CONSTANTS } from '../../utils/constants';
export const initialState = {
  config: {
    status: API_CONSTANTS.init,
    data: null,
  },
  save: {
    status: API_CONSTANTS.init,
    data: null,
  },
  imageUpload: {
    status: API_CONSTANTS.init,
    data: null,
  },
  inquiry: {
    status: API_CONSTANTS.init,
    data: null,
  },
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, { type, payload }) =>
  produce(state, draft => {
    switch (type) {
      case DEFAULT_ACTION:
        break;
      case GET_DATA: {
        draft.config.status = API_CONSTANTS.loading;
        break;
      }
      case SET_DATA: {
        draft.config.status = payload.status;
        draft.config.data = payload.data;
        break;
      }
      case GET_INQUIRY: {
        draft.inquiry.status = API_CONSTANTS.loading;
        break;
      }
      case SET_INQUIRY: {
        draft.inquiry.status = payload.status;
        draft.inquiry.data = payload.data;
        break;
      }
      case SAVE_DATA: {
        draft.save.status = API_CONSTANTS.loading;
        break;
      }
      case SAVE_DATA_RESULT: {
        draft.save.status = payload.status;
        draft.save.data = payload.data;
        break;
      }
      case SAVE_IMAGE: {
        draft.imageUpload.status = API_CONSTANTS.loading;
        break;
      }
      case SAVE_IMAGE_RESULT: {
        draft.imageUpload.status = payload.status;
        draft.imageUpload.data = payload.data;
        break;
      }
    }
  });

export default appReducer;
