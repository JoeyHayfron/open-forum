import React from 'react';

import './home.styles.scss';

import CatList from '../../components/cat-list/cat-list.component';
import ModalContainer from '../../components/modal/modal.component';
import CreateCategoryModal from '../../components/create-category-modal/create-category-modal.component';

import { connect } from 'react-redux';
import { selectShowModal } from '../../redux/modal/modal.selector';
import { toggleModal } from '../../redux/modal/modal.action';
import {
  selectCategoriesList,
  selectCategoryLoading,
  selectCategoryFetching,
} from '../../redux/categories/category.selector';
import { fetchCategoriesAsync } from '../../redux/categories/categories.action';
import { createStructuredSelector } from 'reselect';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CatListWithSpinner = WithSpinner(CatList);

class HomePage extends React.Component {
  componentDidMount() {
    const { fetchCategoriesAsync } = this.props;

    fetchCategoriesAsync();
  }

  render() {
    const {
      showModal,
      toggleModal,
      categories,
      isLoading,
      isFetching,
    } = this.props;
    console.log(categories);
    return (
      <div className="home-page">
        <ModalContainer showModal={showModal}>
          <CreateCategoryModal />
        </ModalContainer>
        <div className="home-header">
          <h1>Categories</h1>
          <button onClick={() => toggleModal()}>Add Category</button>
        </div>
        <CatListWithSpinner isLoading={!isFetching} categories={categories} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  showModal: selectShowModal,
  categories: selectCategoriesList,
  isLoading: selectCategoryLoading,
  isFetching: selectCategoriesList,
});

const mapDispatchToProps = (dispatch) => ({
  toggleModal: () => dispatch(toggleModal()),
  fetchCategoriesAsync: () => dispatch(fetchCategoriesAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
