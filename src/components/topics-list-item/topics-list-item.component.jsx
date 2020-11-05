import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './topics-list-item.styles.scss';

const TopicsListItem = ({ item }) => {
  return (
    <Link className="listItem" to={`open-forum/topic/${item.slug}`}>
      <span className="itemName">{item.title}</span>
      <span className="itemPostCount">{`${item.postCount} Posts`}</span>
    </Link>
  );
};

export default withRouter(TopicsListItem);
