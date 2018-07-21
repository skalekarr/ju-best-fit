import * as ACTIONS from '../../actions/constants/app';

const productDetails = {
  image: 'https://image.ibb.co/dzPRTd/justice.png',
  fit: '',
  color: '',
  size: '',
  description: "Style with a smile.Boxy shortened cut that's totally on-trend. Colorful rainbow designs to brighten her look",
  name: 'Casual tee',
  shortDescription: 'rainbow fun tee'
}

const initialState = { modals: {}, productDetails };

export default function reducer(state = initialState, action) {
  const { type, modal, data } = action;

  switch(type) {
    case ACTIONS.TOGGLE_MODAL:
      return Object.assign({}, state, {
        modals: {
          ...state.modals,
          [modal.modal]: {
            ...state[modal.modal],
            active: modal.active,
            type: modal.type,
          },
        },
      });

    case ACTIONS.UPDATE_PRODUCT:
      const updateProductDetails = state.productDetails;
      updateProductDetails.size = data.size;
      updateProductDetails.color = data.color;
      updateProductDetails.fit = data.fit;
      return Object.assign({}, state, {
        ...state,
        productDetails: {
          ...state.productDetails,
          updateProductDetails,
        },
      });

    default:
      return state;
  }
}
