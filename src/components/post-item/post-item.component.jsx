import React from 'react';
import Logo from '../../assets/del.png';

import './post-item.styles.scss';

const PostItem = ({ item }) => (
  <div className="item-container">
    <div className="user-details">
      <span className="user-name">{item.postedBy}</span>
      <span className="time-posted">{item.timestamp}</span>
    </div>
    <div className="content">
      <div className="post-title">{item.title}</div>
      <div className="post-message">{item.message}</div>
    </div>
    <span className="del">
      <img src={Logo} />
    </span>
  </div>
);

export default PostItem;
