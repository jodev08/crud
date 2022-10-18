import React from "react";

import "./createPost.css";

const CreatePost = () => {
  return (
    <div>
      <form className="create-global">
        <textarea placeholder="Message..."></textarea>
        <input type="submit" value="Envoyer"></input>
      </form>
    </div>
  );
};

export default CreatePost;
