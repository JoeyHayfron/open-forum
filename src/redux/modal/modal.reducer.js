const INITIAL_STATE = {
  showModal: false,
};

const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return {
        ...state,
        showModal: !state.showModal,
      };
    default:
      return state;
  }
};

export default modalReducer;
