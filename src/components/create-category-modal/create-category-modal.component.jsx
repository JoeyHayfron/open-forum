import React from 'react';

import {
  CreateCategoryContainer,
  CreateCategoryHeading,
  ModalInput,
  CreateButton,
  Cancel,
} from './create-category-modal.styles';

import { connect } from 'react-redux';
import { toggleModal } from '../../redux/modal/modal.action';
import {
  addCategory,
  fetchCategoriesAsync,
} from '../../redux/categories/categories.action';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { withRouter } from 'react-router-dom';

class CreateCategoryModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      subtitle: '',
      imageUrl: '',
      postCount: 20,
      createdBy: 'atta',
      createdAt: new Date(),
    };
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const {
      addCategory,
      toggleModal,
      fetchCategoriesAsync,
      currentUser,
      history,
      match,
    } = this.props;

    const {
      title,
      subtitle,
      imageUrl,
      postCount,
      createdBy,
      createdAt,
    } = this.state;

    if (currentUser) {
      const category = {
        title,
        subtitle,
        imageUrl,
        postCount,
        slug: title.toLowerCase().replace(' ', '-'),
        createdBy: currentUser.name,
        createdAt,
      };

      const categoryAdded = await addCategory(category);

      if (categoryAdded) {
        toggleModal();
        fetchCategoriesAsync();
      } else {
        alert('An error occured');
      }
    } else {
      alert('You must be signed in to create a category');
      history.push(`${match.path}signin/`);
    }

    this.setState({
      title: '',
      subtitle: '',
      imageUrl: '',
      postCount: 20,
      createdBy: 'atta',
      createdAt: new Date(),
    });
  };
  render() {
    const { toggleModal } = this.props;
    return (
      <CreateCategoryContainer>
        <CreateCategoryHeading>
          Create Category
          <Cancel onClick={() => toggleModal()}> &#10005;</Cancel>
        </CreateCategoryHeading>
        <form onSubmit={this.handleSubmit}>
          <ModalInput name="title" label onChange={this.handleChange} />
          <ModalInput name="subtitle" label onChange={this.handleChange} />
          <ModalInput name="imageUrl" label onChange={this.handleChange} />
          <CreateButton>Create</CreateButton>
        </form>
      </CreateCategoryContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  toggleModal: () => dispatch(toggleModal()),
  addCategory: (category) => dispatch(addCategory(category)),
  fetchCategoriesAsync: () => dispatch(fetchCategoriesAsync()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CreateCategoryModal));
