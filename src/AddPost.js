import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "./Context";
import { useContext } from "react";
import "./AddPost.css";
import Signin from "./Signin";

const AddPost = () => {
  const navigate = useNavigate();
  const { loggedIn, addPostArr, setAddPostArr, addPostCount, setAddPostCount } =
    useContext(CartContext);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");

  const [error, setError] = useState("");

  const handleImageUpload = (event) => {
    let image = URL.createObjectURL(event.target.files[0]);
    setImage(image);
  };

  const upload = () => {
    if (title == "" || content == "" || image == "" || type == "") {
      setError("Fields can't be Empty!");
    } else {
      setAddPostArr([
        ...addPostArr,
        {
          id: addPostCount,
          title: title,
          content: content,
          type: type,
          image: image,
        },
      ]);
      setAddPostCount(addPostCount + 1);

      setError("");
      setTitle("");
      setContent("");
      setImage("");
      setType("");
      alert("Blog Uploaded Successfully!");
    }
    navigate("/");
  };
  // console.log(addPostArr);
  // console.log(addPostCount);

  return !loggedIn ? (
     <Signin />
   ) : (
   (
    <div className="addPostMain">
      <h2>ADD POST</h2>
      <div className="addPost">
        <p id="error">{error}</p>

        <div className="post">
          <p>Blog Title</p>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="post">
          <p>Blog Content</p>
          <textarea
            type="text"
            id="content"
            value={content}
            cols={30}
            rows={4}
            onChange={(event) => setContent(event.target.value)}
          ></textarea>
        </div>

        <div className="post">
          <p>Blog Type</p>
          <input
            type="text"
            id="type"
            value={type}
            onChange={(event) => setType(event.target.value)}
          />
        </div>
        <div className="post">
          <p>Image</p>
          <input
            type="file"
            id="image"
            // value={image}
            onChange={handleImageUpload}
          />
        </div>
        <div className="showBlogImage">
            <img src={image} alt=''/>
        </div>

        <button onClick={upload}>UPLOAD</button>
      </div>
    </div>
  )
  );
};

export default AddPost;
