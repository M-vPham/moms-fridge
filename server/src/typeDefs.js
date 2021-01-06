import { gql } from "apollo-server-express";


export const typeDefs = gql`


    type Query {
        allRecipes: [Recipe]
        filterRecipes(filter: [String]): [Recipe]
        filterRecipes2(inputs: FilterInput): [Recipe]

        getSoupRecipes: [Recipe]
        getEntreRecipes: [Recipe]
        getDessertRecipes: [Recipe]
    }

    input PaginationInput {
        limit: Int
        cursor: ID
    }
    input FilterInput {
        textSearch: String
        pagination: PaginationInput
    }

    type Recipe {
        name: String!
        ingredients: [String]
        steps: [String]
        meal: String
    }
`