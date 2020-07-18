const apiKey = process.env.REACT_APP_API_KEY;
const apiId = process.env.REACT_APP_API_ID;


export async function fetchData(searchValue) {

    try {
        const response = await fetch(
            `https://api.edamam.com/search?q=${searchValue}&app_id=${apiId}&app_key=${apiKey}`
        );

        return await response.json();
    } catch (error) {
        console.log("Error: ", error);
    }
}

/*

export async function fetchData(searchValue) {
    console.log(searchValue)
    const data = fetch(`https://api.edamam.com/search?q=${searchValue}&app_id=${apiId}&app_key=${apiKey}`)
        .then(response => response.json())
        .then(res => {
            return res
        })
        .catch(error => console.error(error));
    console.log(data);
    return data;
}
*/
