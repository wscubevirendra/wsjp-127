export const fetchStudent = async () => {
    try {
        const response = await fetch("http://localhost:5000/api/student");
        const data = await response.json();
        return {
            data: data.students
        }

    } catch (error) {
        console.log(error)
        return {
            data: []
        }
    }
}