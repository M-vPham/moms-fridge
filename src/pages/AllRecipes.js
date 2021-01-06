import React, { useState } from 'react';
import gql from "graphql-tag";
import { useQuery } from '@apollo/client'

import { Card, Divider, Header, Message} from 'semantic-ui-react';
import "../styles/AllRecipesStyle.css";

function useAllRecipesQuery() {
    const GET_ALL_RECIPES = gql`
        query listAllRecipes{
            allRecipes {
                name,
                ingredients,
                steps,
                meal
            }
        }
    `;
    const { loading, data } = useQuery(GET_ALL_RECIPES);
    return  {loading, data}
}

function useGetSoupRecipesQuery() {
    const GET_SOUP_RECIPES = gql`
        query listSoupRecipes{
            getSoupRecipes {
                name,
                ingredients,
                steps,
                meal
            }
        }
    `;

    const { loading, data } = useQuery(GET_SOUP_RECIPES);
    return {loading, data}
}

function useGetEntreRecipesQuery() {
    const GET_ENTRE_RECIPES = gql`
        query listEntreRecipes{
            getEntreRecipes {
                name,
                ingredients,
                steps,
                meal
            }
        }
    `;

    const { loading, data } = useQuery(GET_ENTRE_RECIPES);
    return {loading, data}
}

function useGetDessertRecipesQuery() {
    const GET_DESSERT_RECIPES = gql`
        query listDessertRecipes{
            getDessertRecipes {
                name,
                ingredients,
                steps,
                meal
            }
        }
    `;

    const dessertNullFlag = <Message negative> No Dessert Recipes were found </Message>;
    const { loading, data } = useQuery(GET_DESSERT_RECIPES);
    if (!!data){
        return {loading, dessertNullFlag }
    }
    return {loading, data}
}



function AllRecipes() {

    const allRecipes = useAllRecipesQuery()
    const allSoupRecipes = useGetSoupRecipesQuery();
    const allEntreRecipes = useGetEntreRecipesQuery();
    const allDessertRecipes = useGetDessertRecipesQuery();

    if (allRecipes.loading || allSoupRecipes.loading || allEntreRecipes.loading || allDessertRecipes.loading) return <h2>Loading...</h2>;


    return (
        <div>
        {
            <div className="recipeCards">
                <Header as="h2" centered>
                    All of Mom's Recipes
                    <Header.Subheader> Organized by the type of meal</Header.Subheader>
                </Header>
                <Divider horizontal> Soups </Divider>
                <div>
                    <Card.Group centered stackable>
                        {
                            allSoupRecipes.data.getSoupRecipes.map((recipe) => (
                                <Card>
                                <div className="cardContent">
                                    <Card.Header> <h2> {recipe.name} </h2></Card.Header>
                                    <Divider horizontal>Ingredients</Divider>
                                    <Card.Meta> {recipe.ingredients.join(", ")} </Card.Meta>
                                    <Divider horizontal>Steps</Divider>
                                    <Card.Description textAlign="left"> {recipe.steps.map((step) => (<p>{step}</p>))} </Card.Description>
                                </div>
                            </Card>))
                        }
                    </Card.Group>
                </div>

                <Divider horizontal> Entrés </Divider>
                <div>
                <Card.Group centered stackable>
                        {
                            allEntreRecipes.data.getEntreRecipes.map((recipe) => (
                                <Card>
                                <div className="cardContent">
                                    <Card.Header> <h2> {recipe.name} </h2></Card.Header>
                                    <Divider horizontal>Ingredients</Divider>
                                    <Card.Meta> {recipe.ingredients.join(", ")} </Card.Meta>
                                    <Divider horizontal>Steps</Divider>
                                    <Card.Description textAlign="left"> {recipe.steps.map((step) => (<p>{step}</p>))} </Card.Description>
                                </div>
                            </Card>))
                        }
                    </Card.Group>
                </div>

                <Divider horizontal> Desserts </Divider>
                <div>

                    <Card.Group centered stackable>
                        {
                            allDessertRecipes.data &&
                            allDessertRecipes.data.getDessertRecipes &&
                            (allDessertRecipes.data.getDessertRecipes).map((recipe) => (
                                <Card>
                                <div className="cardContent">
                                    <Card.Header> <h2> {recipe.name} </h2></Card.Header>
                                    <Divider horizontal>Ingredients</Divider>
                                    <Card.Meta> {recipe.ingredients.join(", ")} </Card.Meta>
                                    <Divider horizontal>Steps</Divider>
                                    <Card.Description textAlign="left"> {recipe.steps.map((step) => (<p>{step}</p>))} </Card.Description>
                                </div>
                            </Card>))
                        }
                    </Card.Group>
                </div>
            </div>
        }
        </div>
    )

};
export default AllRecipes;