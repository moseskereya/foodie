import React, { Component } from 'react';
import axios from "axios"
class Recipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            recipes:[]
        }
    }

    OnsetValue = (event) => {
        this.setState({ search: event.target.value });
    }
    
    OnGetRecipes = (e) => {
        e.preventDefault()
        const app_id = "4deec980";
        const app_key = "675b79c5fb21725d10aa2c152a0c4d30"
        var query = this.state.search
        const url = `https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}&from=0&to=100&health=alcohol-free`;
        axios.get(url)
            .then(res => {
                this.setState({ recipes: res.data.hits })
                console.log(this.state.recipes)
            })
            .catch(err => {
            console.log(err)
        })
    }



    render() {
        const myrecipes = this.state.recipes;
        return (
            <>
            <div className="recipe">
                <form onSubmit={this.OnGetRecipes}>
                    <input placeholder="Search you recipe here" onChange={this.OnsetValue} />
                    <button type="submit">Search</button>
                </form>
                </div>
                <div className="maincontainer">
                    {myrecipes.map((recipe) => {
                        return (
                            <div className="single_recipe">
                                <h4>{recipe.recipe.label}</h4>
                                <img src={recipe.recipe.image} alt=""/>
                            </div>
                        )
                    })}
                </div>
            </>
         );
    }
}
 
export default Recipe;