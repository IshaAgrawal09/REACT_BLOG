import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import CartContext from "./Context";
import { useContext } from "react";
import "./Home.css";
const Home = () => {
  const { addPostArr, setAddPostArr } = useContext(CartContext);

  const remove = (event) => {
    console.log(addPostArr[event.currentTarget.id]);

    setAddPostArr(
      addPostArr.filter((item, index) => {
        return event.currentTarget.id != index;
      })
    );
  };
  return (
    <div>
      <Header />
      <div className="showPost">
        {addPostArr.map((item, index) => {
          return (
            <>
              {index % 2 === 0 ? (
                <div className="singlePost1" key={index}>
                  <div className="postImage">
                    <img src={item.image} alt="" />
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.content}</p>
                  <div className="postIcon">
                    <p id="blogType">{item.type}</p>
                    <div>
                      <Link to={`/edit/${index}`}>
                        <i className="fa-solid fa-pencil"></i>
                      </Link>
                      <button id={index} onClick={remove}>
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="singlePost2" key={index}>
                  <div className="postImage">
                    <img src={item.image} alt="" />
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.content}</p>
                  <div className="postIcon">
                    <p id="blogType">{item.type}</p>
                    <div>
                      <Link to={`/edit/${index}`}>
                        <i className="fa-solid fa-pencil"></i>
                      </Link>
                      <button id={index} onClick={remove}>
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
