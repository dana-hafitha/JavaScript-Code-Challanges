export async function fetchData() {
    let myPromise = new Promise((res, rej) => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((json) => {
                res(json.json())
            })
    })
    return await myPromise;
}