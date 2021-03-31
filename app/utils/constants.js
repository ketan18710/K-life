export const RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';
export const DAEMON = '@@saga-injector/daemon';
export const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';
export const DEFAULT_IMAGE_1 = 'http://www.klifecare.com//upload/data/productimg/1070gl2.jpg'
export const DEFAULT_IMAGE_2 = 'http://www.klifecare.com//upload/data/productimg/9835Three-Channel-ECG.jpg';
export const APP_ROUTES = {
  HOME : '/',
  ROUGH : '/rough',
  ABOUT_US : '/about-us',
  PRODUCT_CATEGORY : '/products/:category_slug/:sub_category_slug',
  PRODUCT_CATEGORY_ALIAS : '/products/',
  PRODUCT : '/products/:category_slug/:sub_category_slug/:model_id',
  PRODUCT_ALIAS : (category_slug,sub_category_slug,model_id)=>`/products/${category_slug}/${sub_category_slug}/${model_id}`,
  GALLERY : '/gallery'
}