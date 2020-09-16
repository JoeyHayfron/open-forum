import React from 'react';

import { Route } from 'react-router-dom';

import TopicsOverview from '../../components/topics-overview/topics-overview.component';
import PostArea from '../../components/post-area/post-area.component';

const Topic = ({ match }) => {
  return (
    <div>
      <Route exact path={`${match.path}/:catId`} component={TopicsOverview} />
    </div>
  );
};

export default Topic;
