export const RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';
export const DAEMON = '@@saga-injector/daemon';
export const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';
export const DEFAULT_IMAGE_1 =
  'http://www.klifecare.com//upload/data/productimg/1070gl2.jpg';
export const DEFAULT_IMAGE_2 =
  'http://www.klifecare.com//upload/data/productimg/9835Three-Channel-ECG.jpg';
export const PROD_DOMAIN = 'https://api.loopedincode.com/klife';
export const NO_IMAGE =
  'https://klife.s3.ap-south-1.amazonaws.com/important/No+Image.png';
export const STATUS_CODES = {
  SUCCESS: 200,
  LOGIN_EXPIRED: 401,
};
export const APP_ROUTES = {
  HOME: '/',
  PRODUCTS: '/products',
  ROUGH: '/rough',
  ABOUT_US: '/about-us',
  DOWNLOADS: '/downloads',
  CONTACT_US: '/contact-us',
  PRODUCT_CATEGORY: '/products/:category_slug/:model_id',
  PRODUCT_CATEGORY_ALIAS: '/products',
  PRODUCT_CATEGORY_OPEN: category_slug =>
    `/products?category_slug=${category_slug}`,
  GALLERY: '/gallery',
  DASHBOARD: '/dashboard',
  DASHBOARD_ABOUTUS: '/dashboard/aboutUS',
  DASHBOARD_GALLERY: '/dashboard/gallery',
};
export const redirectFor = {
  DASHBOARD: 'dashboard',
  DASHBOARD_ABOUTUS: 'dashboard_aboutUS',
  DASHBOARD_GALLERY: '/dashboard_gallery',
};
export const CONTACT_US_VALIDATION = {
  name: 'name',
  email: 'email',
  phone: 'phone',
  inquiry: 'inquiry',
};
export const FORM_ERROR_MESSAGES = {
  REQUIRED_MESSAGE: 'Required!',
  EMPTY_MESSAGE: 'Please select a value',
  INVALID_EMAIL_ADDRESS: 'Please enter a valid email address',
  PASSWORD_CRITERIA: 'Password should be of atleast 8 characters',
  INVALID_NAME: 'Please enter a valid full name',
  INVALID_NUMBER: 'please enter valid contact number',
  INVALID_INPUT: 'please enter a valid input',
  INVALID_DOMAIN: 'please enter a valid domain',
};
export const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
};
export const API_CONSTANTS = {
  init: null,
  loading: 0,
  success: 1,
  error: -1,
};
export const EMAIL_EDITOR_API_KEY =
  'ga4dnck6hyhe9lqbyhc24k145pddst7dkhome4921qp37bhe';
