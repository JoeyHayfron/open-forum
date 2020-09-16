import React from 'react';

import CustomButton from '../button/button.component';
import CustomInput from '../input/input.component';
import CustomTextArea from '../textarea/textarea.component';
import './post-area.styles.scss';

const PostArea = () => (
  <div className="postContainer">
    <h2 className="postHeader"> Post a Comment</h2>
    <form className="post-form">
      <CustomInput label="Title" type="text" name="post-title" />
      <CustomTextArea label="Message" name="post-message" rows="7" />
      <CustomButton postBtn type="submit">
        Post
      </CustomButton>
    </form>
  </div>
);

export default PostArea;
