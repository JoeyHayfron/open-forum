import React from 'react';

import {ListContainer} from './post-list.styles';

const PostList = ({children}) => {
    return (
<ListContainer>
{children}
</ListContainer>
    );
}

export default PostList;
