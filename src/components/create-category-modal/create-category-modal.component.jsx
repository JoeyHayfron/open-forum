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

    const { addCategory, toggleModal, fetchCategoriesAsync } = this.props;
    const {
      title,
      subtitle,
      imageUrl,
      postCount,
      createdBy,
      createdAt,
    } = this.state;

    const category = {
      title,
      subtitle,
      imageUrl,
      postCount,
      slug: title.toLowerCase().replace(' ', '-'),
      createdBy,
      createdAt,
    };

    const categoryAdded = await addCategory(category);
    console.log(categoryAdded);

    if (categoryAdded) {
      toggleModal();
      fetchCategoriesAsync();
    } else {
      alert('An error occured');
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

const mapDispatchToProps = (dispatch) => ({
  toggleModal: () => dispatch(toggleModal()),
  addCategory: (category) => dispatch(addCategory(category)),
  fetchCategoriesAsync: () => dispatch(fetchCategoriesAsync()),
});

export default connect(null, mapDispatchToProps)(CreateCategoryModal);
