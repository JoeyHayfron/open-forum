import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCategoriesList } from '../../redux/categories/category.selector';

import './cat-list.styles.scss';

import CatItem from '../cat-item/cat-item.component';

const CatList = ({ categories, match, history }) => {
  return (
    <div className="cat-list">
      {categories.map((item) => (
        <CatItem
          key={item.id}
          title={item.title}
          subtitle={item.subtitle}
          imageUrl={item.imageUrl}
          slug={item.slug}
        />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  categories: selectCategoriesList,
});

export default connect(mapStateToProps)(CatList);
