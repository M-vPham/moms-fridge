import React, { useState } from 'react';
import { Button, Card, Divider, Form, Message } from 'semantic-ui-react';

import { gql, useLazyQuery } from "@apollo/client"

import "../styles/SearchRecipe.css";

const GET_FILTER_RECIPES = gql`
    query filterList($input: [String]) {
        filterRecipes(filter: $input) {
            name,
            ingredients,
            steps,
            meal
        }
    }
`;

const SearchRecipe = () => {
    const [input, setInput] = useState(null);
    const [executeSearch, {loading, data}] = useLazyQuery(GET_FILTER_RECIPES);

    if (loading) return <p>Loading ...</p>;

    //there's still the issue where the user will type like apple,orange,lemon
    const handleChange = (e) => {
        const userInput = e.target.value;
        const splitArray = userInput.toLowerCase().split(", ");
        console.log(splitArray);
        setInput(splitArray);
    }

    const clearInput = () => {
        document.getElementById("ingredient-input-form").reset();
    }

    return (
        <div>
            <div className="SearchBar">
                <h1>Mom's Fridge</h1>
                <p>Input your ingredients below!</p>
                <Form id="ingredient-input-form">
                        <Form.Input placeholder='Cabbage, Salt, Onion, etc' onChange={handleChange}/>
                </Form>
                <br/>
                <Button color="green" type="submit"
                onClick={() => {
                    executeSearch
                    ({
                        variables: { input : input }
                    })
                }
                }>Search</Button>
                <Button color="red"
                onClick={() => {
                    setInput(null)
                    executeSearch
                    ({
                        variables: { input : null }
                    })
                    clearInput()
                }
                }>
                    Clear
                </Button>
            </div>

            <Divider horizontal>Recipes</Divider>

            <div>
                <Card.Group centered stackable>
                {
                    (data &&
                    data.filterRecipes) ? (
                        data.filterRecipes.map((recipe) =>
                    <Card>
                        <div className="cardContent">
                            <Card.Header> <h2> {recipe.name} </h2></Card.Header>
                            <Card.Meta> {recipe.meal}</Card.Meta>
                            <Divider horizontal>Ingredients</Divider>
                            <Card.Meta> {recipe.ingredients.join(", ")} </Card.Meta>
                            <Divider horizontal>Steps</Divider>
                            <Card.Description textAlign="left"> {recipe.steps.map((step) => (<p>{step}</p>))} </Card.Description>
                        </div>
                    </Card>)
                    ) :
                    <Message negative> No Recipes found yet. </Message>
                }
                </Card.Group>
            </div>
        </div>

    );
}

export default SearchRecipe