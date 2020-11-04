import React from 'react';

import {connect} from 'react-redux';

import { selectCurrentUser } from '../../redux/user/user.selector';
import {createPost, fetchPostsAsync} from './../../redux/posts/post.action'

import CustomButton from '../button/button.component';
import CustomInput from '../input/input.component';
import CustomTextArea from '../textarea/textarea.component';
import './post-area.styles.scss';
import { create } from 'domain';

class PostArea extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      message: '',
      category: this.props.categoryName,
      postedBy: '',
      createdAt: new Date()
    }
  }


  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value})
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const {
      title,
      message,
      category,
      createdAt
    } = this.state;

    if(this.props.currentUser){
      
      const post = {
        title,
        message,
        postedBy: this.props.currentUser.name,
        category,
        createdAt
      }

      const postAdded = await createPost(post);

      if(postAdded)
      {
        alert('Post created succesfully');
      }
    }else{
      alert('You need to sign in to post')
    }


  }


  render(){
      return (
      <div className="postContainer">
        <h2 className="postHeader"> Post a Comment</h2>
        <form onSubmit={this.handleSubmit} className="post-form">
          <CustomInput label="title" type="text" name="title" onChange={this.handleChange}/>
          <CustomTextArea label="message" name="message" rows="7" onChange={this.handleChange}/>
          <CustomButton postBtn>
            Post
          </CustomButton>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  currentUser: selectCurrentUser(state),
})

const mapDispatchToProps = (dispatch) => ({ 
  createPost: (post) => dispatch(createPost(post)),
  fetchPostsAsync: () => dispatch(fetchPostsAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(PostArea);
