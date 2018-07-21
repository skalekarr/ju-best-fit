import { TOGGLE_MODAL, UPDATE_PRODUCT, SAVE_SIZE, GET_SIZE  } from '../../constants/app';

export const updateProduct = (product) => ({
  type: UPDATE_PRODUCT,
  data: product,
});

export const toggleModal = (modal) => ({
  type: TOGGLE_MODAL,
  modal
});

export const saveSize = (product) => ({
  type: SAVE_SIZE,
  payload: product,
});

export const getSize = () => ({
  type: GET_SIZE,
});
