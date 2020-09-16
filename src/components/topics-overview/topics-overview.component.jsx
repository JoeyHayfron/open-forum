import React from 'react';

import { connect } from 'react-redux';
import { selectPostsList } from '../../redux/posts/post.selector';
import PostItem from '../post-item/post-item.component';
import PostArea from '../post-area/post-area.component';
import TopicsList from '../topics-list/topics-list.component';

import './topics-overview.styles.scss';

const TopicsOverview = ({ postList, match }) => {
  console.log(match);
  return (
    <div className="topicsContent">
      <PostArea />

      <h2 className="posts-heading">Posts</h2>
      {postList.map((item) => (
        <PostItem key={item.id} item={item} />
      ))}
      <TopicsList />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  postList: selectPostsList(ownProps.match.params.catId)(state),
});
export default connect(mapStateToProps)(TopicsOverview);
