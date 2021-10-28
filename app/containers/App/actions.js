/*
 *
 * App actions
 *
 */

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

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export const getData = () => ({
  type: GET_DATA,
});
export const setData = data => ({
  type: SET_DATA,
  payload: data,
});
export const getInquiry = data => ({
  type: GET_INQUIRY,
  payload: data,
});
export const setInquiry = data => ({
  type: SET_INQUIRY,
  payload: data,
});
export const saveData = data => ({
  type: SAVE_DATA,
  payload: data,
});
export const saveDataResult = data => ({
  type: SAVE_DATA_RESULT,
  payload: data,
});
export const saveImage = data => ({
  type: SAVE_IMAGE,
  payload: data,
});
export const saveImageResult = data => ({
  type: SAVE_IMAGE_RESULT,
  payload: data,
});
