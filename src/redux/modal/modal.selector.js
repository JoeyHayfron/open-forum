import { createSelector } from 'reselect';

export const selectModal = (state) => state.modal;

export const selectShowModal = createSelector(
  [selectModal],

  (modal) => modal.showModal
);
