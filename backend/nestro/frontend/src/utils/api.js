import { client } from "./helper"
import { cookies } from "next/headers";


export const fetchProduct = async ({ category = null, room = null, minPrice = null, maxPrice = null, stock = null, bestSeller = null, status = null, featured = null, sort = null, page = null } = {}) => {

    try {
        const query = new URLSearchParams();

        if (category) {
            query.append('category', category);
        }
        if (room) {
            query.append('room', room);
        }
        if (minPrice) {
            query.append('min', minPrice);
        }
        if (maxPrice) {
            query.append('max', maxPrice);
        }
        if (stock !== null) {
            query.append('stock', stock);
        }
        if (sort) {
            query.append('sort', sort);
        }
        if (page) {
            query.append('page', page);
        }

        if (bestSeller !== null) {
            query.append('best_seller', bestSeller);
        }
        if (status !== null) {
            query.append('status', status);
        }
        if (featured !== null) {
            query.append('featured', featured);
        }
        const response = await client.get(`product?${query.toString()}`);
        if (response.data.success) {
            return {
                data: response.data.products,
                success: response.data.success,
                pages: response.data.pages
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

export const fetchCategory = async ({ status = null } = {}) => {
    try {

        const query = new URLSearchParams();
        if (status !== null) {
            query.append('status', status);
        }
        const response = await client.get(`category?${query.toString()}`);
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


export const fetchRoom = async ({ status = null } = {}) => {
    try {
        const query = new URLSearchParams();
        if (status !== null) {
            query.append('status', status);
        }
        const response = await client.get(`room-type?${query.toString()}`);
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


export const getProfile = async () => {
    try {
        const cookie = await cookies();
        const token = cookie.get("jwt")?.value || null;

        const response = await client.get("user/get-me",
            {
                headers: {
                    Authorization: token
                }
            }
        );


        if (response.data.success) {
            return {
                data: response.data.user,
                success: response.data.success
            }
        }

    } catch (error) {
        return {
            data: null,
            success: false
        }

    }

}