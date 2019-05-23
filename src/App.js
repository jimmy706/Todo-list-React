import React from 'react';
import './App.scss';
import TodoContainer from './components/todo-container/TodoContainer';
import { connect } from "react-redux";
import ChangeThem from './components/change-theme/ChangeThem';

function App(props) {
  return (
    <div className={"App " + props.visibleTheme}>
      <ChangeThem />
      <TodoContainer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    visibleTheme: state.visibleTheme
  }
}

export default connect(mapStateToProps, null)(App);