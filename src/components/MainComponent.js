import React, {Component} from 'react';
import Body from './BodyComponent';
import Header from './HeaderComponent';
import Answer from './AnswerComponent';
import Ingredients from './IngredientsComponent';
import { fetchRecipes, fetchAnswer, fetchIngredients } from '../redux/ActionCreators';
import {connect} from 'react-redux';
import Recipe from './RecipeComponent';

const mapStateToProps = state => ({
      recipes: state.recipes,
      answer: state.answer,
      ingredients: state.ingredients
  })
  
  const mapDispatchToProps = dispatch => ({
    fetchRecipes: (name) => { dispatch(fetchRecipes(name)) },
    fetchAnswer: (question) => { dispatch(fetchAnswer(question))},
    fetchIngredients: (ingredients) => { dispatch(fetchIngredients(ingredients))}
    
  });

class Main extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchRecipes();
        this.props.fetchAnswer();
        this.props.fetchIngredients();
    }
    render() {
        return (
            <div>
                <Header fetchRecipes={this.props.fetchRecipes}/>
                <Body fetchRecipes={this.props.fetchRecipes}
                        fetchAnswer={this.props.fetchAnswer} 
                        fetchIngredients={this.props.fetchIngredients} />
                <Answer answer={this.props.answer}
                        answerisLoading={this.props.answer.isLoading}
                        answererrMess={this.props.answer.errMess}
                    />
                <Ingredients ingredients={this.props.ingredients.ingredients}
                            isLoading={this.props.ingredients.isLoading}
                            errMess={this.props.ingredients.errMess} />
                <Recipe recipes={this.props.recipes}
                        recipesisLoading={this.props.recipes.isLoading}
                        recipeserrMess={this.props.recipes.errMess}
                        
                        >
                            </Recipe>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);