import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CartContext from "./Context";
import { useContext } from "react";

const EditBlog = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const { addPostArr, setAddPostArr } = useContext(CartContext);
  const [title, setTitle] = useState(addPostArr[id]["title"]);
  const [content, setContent] = useState(addPostArr[id]["content"]);
  const [image, setImage] = useState(addPostArr[id]["image"]);
  const [type, setType] = useState(addPostArr[id]["type"]);

  const handleImageUpload = (event) => {
    let image = URL.createObjectURL(event.target.files[0]);
    setImage(image);
  };

  const update = () => {
    setAddPostArr(
      addPostArr.filter((item, index) => {
        if (id == index) {
          item.title = title;
          item.content = content;
          item.type = type;
          item.image = image;

          return item;
        }
        return item;
      })
    );
    navigate("/");
  };

  console.log(addPostArr);
  return (
    <div className="addPostMain">
      <h2>UPDATE POST</h2>

      <div className="addPost">
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
        <div className="showBlogImage">
          <img src={image} alt="" />
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
        <button id={id} onClick={update}>
          UPDATE
        </button>
      </div>
    </div>
  );
};

export default EditBlog;
