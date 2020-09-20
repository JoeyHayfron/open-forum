import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './cat-list.styles.scss';

import CatItem from '../cat-item/cat-item.component';

const CatList = ({ categories }) => {
  console.log(categories);

  return (
    <div className="cat-list">
      {categories
        .sort((a, b) => b.createdAt - a.createdAt)
        .map((item) => (
          <CatItem
            key={item.title}
            title={item.title}
            subtitle={item.subtitle}
            imageUrl={item.imageUrl}
            slug={item.slug}
          />
        ))}
    </div>
  );
};

export default CatList;
