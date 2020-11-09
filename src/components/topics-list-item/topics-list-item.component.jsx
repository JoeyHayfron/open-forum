import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './topics-list-item.styles.scss';

const TopicsListItem = ({ item, match }) => {
  const path = match.path.toString();
  let hasTopic = '';
  if(path.indexOf('topic') !== -1)
    hasTopic = true;
  else
    hasTopic = false;
  return (
    <Link className="listItem" to={hasTopic  ? `${item.slug}` : `topic/${item.slug}`}>
      <span className="itemName">{item.title}</span>
      <span className="itemPostCount">{`${item.postCount} Posts`}</span>
    </Link>
  );
};

export default withRouter(TopicsListItem);
