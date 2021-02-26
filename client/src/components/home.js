// DISPATCH COME FROM ACTION  AND SEND TO REDUCER
/// GETTING THE DATA FROM THE STORE

import React, { Component } from "react";
import { connect } from "react-redux";
import { articleList } from "../store/actions";

class Home extends Component {
  getarticleHandler() {
    this.props.dispatch(articleList());
  }

  render() {
    console.log(this.props);
    const { article } = this.props;
    return (
      <>
        {article && article.articleList
          ? article.articleList.map((item) => (
              <div key={item.title}>article: {item.title}</div>
            ))
          : null}
        <button onClick={() => this.getarticleHandler()}>Get Articles</button>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { article: state.data };
};

export default connect(mapStateToProps)(Home);
