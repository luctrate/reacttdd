import React, {Component} from 'react';
import Header from './component/header';
import './app.scss';
import SharedButton from './component/button';
import ListItem from './component/listItem';
import {connect} from 'react-redux';
import {fetchPosts} from './actions'
import Headline from './component/headline';

const tempArr = [
  {
    fName: 'Joe',
    lName: 'Bloggs',
    email: 'jb@gmail.com',
    age: 24,
    onlineStatus: true
  }
];

class App extends Component {

  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
  };

  fetch() {
    this.props.fetchPosts();
  };

  render() {
    const {posts} = this.props;
    const configButton = {
      buttonText: 'Get Posts',
      emitEvent: this.fetch,
    };
    return (<div className="App" data-test="appComponent">
      <Header/>

      <section className="main">
        <Headline header="tse" desc="Click the Button to render posts"/>
        <SharedButton {...configButton} />
        {posts.length > 0 &&
        <div>
          {posts.map((post,index) => {
            const {title, body} = post;
            const configListItem = {title, desc: body};
            return(<ListItem key={index} {...configListItem} />);
          })}
        </div>}
      </section>
    </div>);
  }
}

const mapStateToProps = state => {
  return {posts: state.posts};
};

export default connect(mapStateToProps, {fetchPosts})(App);
