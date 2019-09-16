import React, { Component } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./../RecipeCard/RecipeCard";
import store, { DELETE_RECIPE } from '../../store';
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState();
    this.state = {
      recipes: reduxState.recipes
    };

    this.deleteRecipe = this.deleteRecipe.bind(this)
  }

  componentDidMount() {
    store.subscribe(() => {
      const reduxState = store.getState();
      this.setState({
        recipes: reduxState.recipes
      });
    });
  }

  deleteRecipe(index){
    store.dispatch({
      type: DELETE_RECIPE,
      payload: index
    })
  }

  render() {
    const recipes = this.state.recipes.map((recipe, i) => {
      return (
        <RecipeCard
          key={i}
          name={recipe.name}
          category={recipe.category}
          authorFirst={recipe.authorFirst}
          authorLast={recipe.authorLast}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
          uniqID={i}
          deleteID={this.deleteRecipe}
        />
      );
    });
    return (
      <div className="Home">
        <Link to="/add/name">
          <button>Create New Recipe</button>
        </Link>
        <div className="card_container">{recipes}</div>
      </div>
    );
  }
}

export default Home;
