import React from 'react';

import './home.styles.scss';

import CatList from '../../components/cat-list/cat-list.component';
import ModalContainer from '../../components/modal/modal.component';
import CreateCategoryModal from '../../components/create-category-modal/create-category-modal.component';

import { connect } from 'react-redux';
import { selectShowModal } from '../../redux/modal/modal.selector';
import { toggleModal } from '../../redux/modal/modal.action';
import { createStructuredSelector } from 'reselect';

const HomePage = ({ showModal, toggleModal }) => {
  return (
    <div className="home-page">
      <ModalContainer showModal={showModal}>
        <CreateCategoryModal />
      </ModalContainer>
      <div className="home-header">
        <h1>Categories</h1>
        <button onClick={() => toggleModal()}>Add Category</button>
      </div>
      <CatList />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  showModal: selectShowModal,
});

const mapDispatchToProps = (dispatch) => ({
  toggleModal: () => dispatch(toggleModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
