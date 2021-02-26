/// METHODE 2 HOOK /////////////
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { articleData } from "../store/actions";

const Article = (props) => {
  const article = useSelector((state) => state.article);
  const dispatch = useDispatch();

  const getArticle = () => {
    dispatch(articleData());
  };
  console.log(article);

  return (
    <>
      {article && article.articleData ? (
        <div>
          <div>Title: {article.articleData.title}</div>
          <div>Year: {article.articleData.year}</div>
        </div>
      ) : null}
      <button onClick={() => getArticle()}>Get data</button>
    </>
  );
};

export default Article;
