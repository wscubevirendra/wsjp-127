import { client } from "./helper"

export const fetchCategory = async () => {
    try {
        const response = await client.get('category');
        if (response.data.success) {
            return {
                data: response.data.categories,
                success: response.data.success
            }
        }

    } catch (error) {
        return {
            data: [],
            success: false
        }
    }
}

export const fetchCategoryById = async (id) => {
    try {
        const response = await client.get(`category/${id}`);
        if (response.data.success) {
            return {
                data: response.data.category,
                success: response.data.success
            }
        }

    } catch (error) {
        return {
            data: {},
            success: false
        }
    }
}