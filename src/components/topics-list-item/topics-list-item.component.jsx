import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './topics-list-item.styles.scss';

const TopicsListItem = ({ item, match }) => {
  const path = `${match.path}`;
  console.log(path);
  return (
    <Link className="listItem" to={path.includes(`topic`) : `${item.slug}` ? `topic/${item.slug}`}>
      <span className="itemName">{item.title}</span>
      <span className="itemPostCount">{`${item.postCount} Posts`}</span>
    </Link>
  );
};

export default withRouter(TopicsListItem);
