import * as ACTIONS from '../../actions/constants/app';

const productDetails = {
  image: 'https://image.ibb.co/iQGcYd/Webp_net_resizeimage.jpg',
  fit: '',
  color: '',
  size: '',
  description: 'Easy and effortless in rich doubleweave, our seamed V-neck sheath dress is a modern take on polish. V-neck. Sleeveless. Back zip. Lined.',
  name: 'V-neck sheath',
  shortDescription: 'Seamed V-Neck Sheath Dress'
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
