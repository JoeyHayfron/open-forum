import React from 'react';

import { connect } from 'react-redux';
import { selectCategoriesList } from '../../redux/categories/category.selector';
import { createStructuredSelector } from 'reselect';

import TopicsListItem from '../topics-list-item/topics-list-item.component';

import './topics-list.styles.scss';

const TopicsList = ({ categories }) => {
  console.log(categories);
  return (
    <div className="topicsListContainer">
      <h3 className="topicsTitle">Topics</h3>
      {categories.map((item) => (
        <TopicsListItem key={item.id} item={item} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  categories: selectCategoriesList,
});

export default connect(mapStateToProps)(TopicsList);
