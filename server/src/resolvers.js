export const resolvers = {
    Query: {
        allRecipes: async (parent, args, {db, recipe}) => {
            try {
                const getAll = await recipe.find()
                console.log(getAll);
                return getAll
            }
            catch (error) {
                console.log(error)
            }
        },
        //if you know there's a chance that nothing is returned do you handle it in the resolver or in the client?
        filterRecipes: async (parent, args, {db, recipe}) => {
            try {
                const where = args.filter || "";
                const regex = where.map(function (e) { return new RegExp(e, "i"); });
                const getAll = await recipe.find({ ingredients: {$all: regex}});

                //arguments for predicate function should be arrays already lower case
                //returns true or false
                const testContains = (arrayToTest, arrayToCheckAgainst) => {
                    return arrayToCheckAgainst.every(elem => arrayToTest.includes(elem));
                }

                const reducer = (acc, item) => {

                    const ingredientString = (item.ingredients).join();
                    const ingredientArray = ingredientString.toLowerCase().split(",");
                    if(testContains(ingredientArray, where))
                    {
                        let newObj = {};
                        newObj.name = item.name;
                        newObj.ingredients = item.ingredients;
                        newObj.steps = item.steps;
                        newObj.meal = item.meal;

                        console.log(newObj);
                        acc.push(newObj);
                    }
                    return(acc);
                };

                const finalArray = getAll.reduce(reducer, []);
                console.log(finalArray);
                return finalArray;
            }
            catch (error) {
                console.log(error)
            }
        },
        filterRecipes2: async (parent, args, {db, recipe}) => {
            try {
                const {inputs} = args
                const {pagination} = inputs
                const {cursor} = pagination
                const {textSearch} = inputs
                const where = args.filter || "Ca Kho";
                console.log(where);
                const getAll = await recipe.find( { name: {$eq: where}});
                return getAll
            }
            catch (error) {
                console.log(error)
            }
        },

        getSoupRecipes: async (parent, args, {db, recipe}) => {
            try {
                const getAllSoups = await recipe.find({ meal: {$eq: "Soup"}});
                return getAllSoups
            }
            catch (error) {
                console.log(error)
            }
        },

        getEntreRecipes: async (parent, args, {db, recipe}) => {
            try {
                const getAllEntres = await recipe.find({ meal: {$eq: "Entre"}});
                return getAllEntres
            }
            catch (error) {
                console.log(error)
            }
        },

        getDessertRecipes: async (parent, args, {db, recipe}) => {
            try {
                const getAllDesserts = await recipe.find({ meal: {$eq: "Dessert"}});
                return getAllDesserts
            }
            catch (error) {
                console.log(error)
            }
        }


    }
};