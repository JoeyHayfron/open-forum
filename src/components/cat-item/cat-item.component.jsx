import React from 'react';
import Logo from '../../assets/del.png';
import { withRouter } from 'react-router-dom';

import './cat-item.styles.scss';

const CatItem = ({ title, subtitle, imageUrl, history, match, slug }) => {
  return (
    <div className="cat-item">
      <div
        className="item-text"
        onClick={() => history.push(`${match.path}topic/${slug}`)}
      >
        <div className="cat-title">{title}</div>
        <div className="cat-subtitle">{subtitle}</div>
      </div>
      <div className="images-container">
        <img src={Logo} />
        <div className="image-container">
          <img src={imageUrl} alt={title} className="image" />
        </div>
      </div>
    </div>
  );
};

export default withRouter(CatItem);
