import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, { UPDATE_AUTHORFIRST, UPDATE_AUTHORLAST } from "../../store";
import './Author.css';

class Author extends Component {
  constructor(props) {
    super(props);
    // Bring the data in from Store, if there is anything to show.
    const reduxState = store.getState()
    this.state = {
      authorFirst: reduxState.authorFirst,
      authorLast: reduxState.authorLast
    };
  }

  handleAuthorFirstChange(nameVal) {
    this.setState({
      authorFirst: nameVal
    });
  }

  handleAuthorLastChange(nameVal) {
    this.setState({
      authorLast: nameVal
    });
  }

  // Dispatch new data to update Store State
  saveChanges() {
    // Send data to Redux state
    store.dispatch({
      type: UPDATE_AUTHORFIRST,
      payload: this.state.authorFirst
    });
    store.dispatch({
      type: UPDATE_AUTHORLAST,
      payload: this.state.authorLast
    });
  }
  render() {
    return (
      <div className="Author forms">
        <div className="input_container">
          <h2>Author First Name:</h2>
          <input
            value={this.state.authorFirst}
            onChange={e => this.handleAuthorFirstChange(e.target.value)}
          />
        </div>
        <div className="input_container">
          <h2>Author Last Name:</h2>
          <input
            value={this.state.authorLast}
            onChange={e => this.handleAuthorLastChange(e.target.value)}
          />
        </div>
        <Link to="/add/name">
          <button onClick={() => this.saveChanges()} className="left_button">
            Previous
          </button>
        </Link>
        <Link to="/add/ingredients">
          <button onClick={() => this.saveChanges()} className="right_button">
            Next
          </button>
        </Link>
      </div>
    );
  }
}

export default Author;
