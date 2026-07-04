import axios from "axios";

const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

function generateSlug(value) {

    return value
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");

}



export { client ,generateSlug}