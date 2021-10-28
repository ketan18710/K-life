/**
 * @description Validation helpers deals with all types of in app validation
 */

import { FORM_ERROR_MESSAGES, CONTACT_US_VALIDATION } from 'utils/constants';

const errorValidation = {};

const ValidationHelpers = {
  isRequired: value => {
    if (value === null) return FORM_ERROR_MESSAGES.REQUIRED_MESSAGE;
    if (value === 'null') return FORM_ERROR_MESSAGES.REQUIRED_MESSAGE;
    if (value === undefined) return FORM_ERROR_MESSAGES.REQUIRED_MESSAGE;
    if (typeof value === 'number' || typeof value === 'boolean') {
      return value ? null : FORM_ERROR_MESSAGES.REQUIRED_MESSAGE;
    }
    return value.trim().length > 0
      ? null
      : FORM_ERROR_MESSAGES.REQUIRED_MESSAGE;
  },
  isEmpty: value => {
    if (value && value.length > 0) {
      return null;
    }
    return FORM_ERROR_MESSAGES.REQUIRED_MESSAGE;
  },
  checkEmail: value => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (value && !regex.test(String(value).toLowerCase())) {
      return FORM_ERROR_MESSAGES.INVALID_EMAIL_ADDRESS;
    }
    return null;
  },
  checkFullName: value => {
    const regex = /[a-zA-Z0-9'-]\s{0,}/;
    if (value && !regex.test(String(value).toLowerCase())) {
      return FORM_ERROR_MESSAGES.INVALID_NAME;
    }
    return null;
  },
  checkFirstName: value => {
    const regex = /^[a-zA-Z\s]{0,30}$/;
    if (value && !regex.test(String(value).toLowerCase())) {
      return FORM_ERROR_MESSAGES.INVALID_NAME;
    }
    return null;
  },
  checkPhoneNumber: value => {
    const regex = /^[0-9]{0,12}$/;
    if (value && !regex.test(String(value).toLowerCase())) {
      return FORM_ERROR_MESSAGES.INVALID_NUMBER;
    }
    return null;
  },
  checkNumber: value => {
    const regex = /^[0-9]{0,}$/;
    if (value && !regex.test(String(value).toLowerCase())) {
      return FORM_ERROR_MESSAGES.INVALID_INPUT;
    }
    return null;
  },
  checkImageFile: value => {
    const regex = /.(gif|jpe?g|tiff?|png|webp|bmp)$/i;
    if (value && !regex.test(String(value).toLowerCase())) {
      return FORM_ERROR_MESSAGES.INVALID_INPUT;
    }
    return null;
  },
  checkExcelFile: value => {
    const regex = /^.+\.(xlsx|xls|csv)$/;
    if (value && !regex.test(String(value).toLowerCase())) {
      return FORM_ERROR_MESSAGES.INVALID_INPUT;
    }
    return null;
  },
  checkPassword: value => {
    if (value && value.length < 8) {
      return FORM_ERROR_MESSAGES.PASSWORD_CRITERIA;
    }
    return null;
  },
  checkDomain: value => {
    const regex = /^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/;
    if (value && !regex.test(String(value).toLowerCase())) {
      return FORM_ERROR_MESSAGES.INVALID_DOMAIN;
    }
  },
  handleContactUsValidation(values) {
    // debugger
    const errors = {};
    errors[CONTACT_US_VALIDATION.name] = this.isEmpty(
      values[CONTACT_US_VALIDATION.name],
    );
    errors[CONTACT_US_VALIDATION.email] =
      this.isEmpty(values[CONTACT_US_VALIDATION.email]) ||
      this.checkEmail(values[CONTACT_US_VALIDATION.email]);
    errors[CONTACT_US_VALIDATION.phone] =
      this.isEmpty(values[CONTACT_US_VALIDATION.phone]) ||
      this.checkPhoneNumber(values[CONTACT_US_VALIDATION.phone]);
    errors[CONTACT_US_VALIDATION.inquiry] = this.isEmpty(
      values[CONTACT_US_VALIDATION.inquiry],
    );
    return errors;
  },
};

export default ValidationHelpers;
