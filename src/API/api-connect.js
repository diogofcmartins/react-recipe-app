const apiKey = process.env.REACT_APP_API_KEY;
const apiId = process.env.REACT_APP_API_ID;

export async function fetchData(searchValue) {

    try {
        const response = await fetch(
            `https://api.edamam.com/search?q=${searchValue}&app_id=${apiId}&app_key=${apiKey}`
        );
        return await response.json();
    } catch (error) {
        console.log(error)
    }
}
