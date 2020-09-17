import React from 'react';

import {
  CreateCategoryContainer,
  CreateCategoryHeading,
  ModalInput,
  ImagePreview,
  FileInput,
  CreateButton,
  Cancel,
} from './create-category-modal.styles';

import { connect } from 'react-redux';
import { selectShowModal } from '../../redux/modal/modal.selector';
import { toggleModal } from '../../redux/modal/modal.action';
import { createStructuredSelector } from 'reselect';

const CreateCategoryModal = ({ toggleModal }) => {
  return (
    <CreateCategoryContainer>
      <CreateCategoryHeading>
        Create Category<Cancel onClick={() => toggleModal()}> &#10005;</Cancel>
      </CreateCategoryHeading>
      <form>
        <ModalInput name="title" label />
        <ModalInput name="subtitle" label />
        <ModalInput name="imageurl" label />
        <CreateButton>Create</CreateButton>
      </form>
    </CreateCategoryContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleModal: () => dispatch(toggleModal()),
});

export default connect(null, mapDispatchToProps)(CreateCategoryModal);
