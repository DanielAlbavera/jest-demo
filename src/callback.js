const url = 'https://pokeapi.co/api/v2/pokemon/garchomp';

async function getData() {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data.name;
    }
    catch (error) {
        return error;
    }
}

module.exports = { getData };