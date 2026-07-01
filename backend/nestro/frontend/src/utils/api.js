import { client } from "./helper"


export const fetchProduct = async () => {
    try {
        const response = await client.get('product');
        if (response.data.success) {
            return {
                data: response.data.products,
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

export const fetchProductById = async (id) => {
    try {
        const response = await client.get(`product/${id}`);
        if (response.data.success) {
            return {
                data: response.data.product,
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


export const fetchRoom = async () => {
    try {
        const response = await client.get('room-type');
        if (response.data.success) {
            return {
                data: response.data.rooms,
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

export const fetchRoomById = async (id) => {
    try {
        const response = await client.get(`room-type/${id}`);
        if (response.data.success) {
            return {
                data: response.data.room,
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