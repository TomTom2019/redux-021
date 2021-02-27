// DISPATCH COME FROM ACTION  AND SEND TO REDUCER
/// GETTING THE DATA FROM THE STORE

import React, { Component } from "react";
import { connect } from "react-redux";
import { articleList, getUser } from "../store/actions";

class Home extends Component {
  getarticleHandler() {
    this.props.dispatch(articleList());
  }

  getUserHandler() {
    this.props.dispatch(getUser());
  }

  render() {
    const { article } = this.props;
    return (
      <>
        {article && article.articleList
          ? article.articleList.map((item) => (
              <div key={item.title}>article: {item.title}</div>
            ))
          : null}
        <button onClick={() => this.getarticleHandler()}>Get Articles</button>
        <button onClick={() => this.getUserHandler()}>Get User</button>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { article: state.data };
};

export default connect(mapStateToProps)(Home);
