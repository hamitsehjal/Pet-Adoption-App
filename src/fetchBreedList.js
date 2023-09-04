const fetchBreedList = async ({ queryKey }) => {
    const animal = queryKey[1];

    if (!animal) return [];

    const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`);

    if (!res.ok) {
        throw new Error(`breeds ${animal} fetch not OK`)
    }

    return res.json();
}

export default fetchBreedList;