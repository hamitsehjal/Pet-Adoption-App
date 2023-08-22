
import { useEffect, useState } from "react";
import Pet from './Pet';
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
    const [location, setLocation] = useState("");
    const [animal, updateAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]);
    const BREEDS = [];

    useEffect(() => {
        requestPets();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const requestPets = async () => {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );
        const json = await res.json();
        setPets(json.pets);

    }
    return (
        <div className="search-params">
            <form onSubmit={(e) => {
                e.preventDefault();
                requestPets();
            }}>
                <label htmlFor="location">
                    Location
                    <input id="location"
                        onChange={(e) => setLocation(e.target.value)}
                        value={location} placeholder="Location" />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select
                        id="animal"
                        value={animal}
                        onChange={(e) => {
                            updateAnimal(e.target.value);
                            setBreed("");
                        }}
                    >
                        <option />
                        {ANIMALS.map((animal) => (
                            <option key={animal} value={animal}>{animal}</option>
                        ))}
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                </label>
                <select id="breed"
                    value={breed}
                    disabled={BREEDS.length === 0}
                    onChange={(e) => setBreed(e.target.value)}
                >
                    <option />
                    {BREEDS.map((breed) => (
                        <option key={breed} value={breed}>{breed}</option>
                    ))}

                </select>

                <button>Submit</button>
            </form>
            {
                pets.map((pet) => (
                    <Pet
                        key={pet.id}
                        name={pet.name}
                        animal={pet.animal}
                        breed={pet.breed} />
                ))
            }
        </div>
    );
};

export default SearchParams;