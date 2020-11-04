import React from 'react';

import { connect } from 'react-redux';
import { selectPostsList, selectPostLoading, postFetchingDone } from '../../redux/posts/post.selector';
import PostArea from '../post-area/post-area.component';
import PostList from './../posts-list/posts-list.component';
import TopicsList from '../topics-list/topics-list.component';
import {fetchPostsAsync} from './../../redux/posts/post.action';
import WithSpinner from './../with-spinner/with-spinner.component';
import PostItem from '../post-item/post-item.component';


import './topics-overview.styles.scss';

const PostListWithSpinner = WithSpinner(PostList)
class TopicsOverview extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    const {fetchPostsAsync} = this.props;
    fetchPostsAsync();
  }


  render(){
    const {postsList, isLoading, isFetching } = this.props;
    return (
      <div className="topicsContent">
        <PostArea categoryName={this.props.match.params.catId}/>
  
        <h2 className="posts-heading">Posts</h2>
        <PostListWithSpinner isLoading={!isFetching}>
        {postsList.map((item) => (
    <PostItem key={item.id} item={item} />
  ))}
          </PostListWithSpinner>
        <TopicsList />
      </div>
    ); 
  }
};

const mapStateToProps = (state, ownProps) => ({
  postsList: selectPostsList(ownProps.match.params.catId)(state),
  isLoading: selectPostLoading(state),
  isFetching: postFetchingDone(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchPostsAsync: () => dispatch(fetchPostsAsync()), 
})
export default connect(mapStateToProps, mapDispatchToProps)(TopicsOverview);
