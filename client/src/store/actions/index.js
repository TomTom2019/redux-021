// ACTION IS OBJETC STORE DATA
//1 KEY YOU IMPORT
//2 YOU CONNECT
//3 YOU DISPATCH
//4 GO TO REDUCER AND GET THE DATA
export const articleList = () => {
  return {
    type: "ARTICLE_LIST",
    payload: [
      { id: 1, title: "Hello1" },
      { id: 2, title: "Hello2" },
      { id: 3, title: "Hello3" },
    ],
  };
};
