export async function getRecipes() {
    try {
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json()
        return data.recipes

    } catch (error) {
        return []
    }
}

export async function getRecipeById(id) {
    try {
        const response = await fetch(`https://dummyjson.com/recipes/${id}`);
        const data = await response.json()
        return data

    } catch (error) {
        return {}
    }
}