export const getGifs = async (category) => {
  const url = `https://rickandmortyapi.com/api/character?api_key=6M6UgR5IL5NTekVhDB8yXQDzP3yEuvR7&q=${category}`;
  const resp = await fetch(url);
  const { results } = await resp.json();

  const gifs = results.map((character) => ({
    id: character.id,
    name: character.name,
    status: character.status,
    image: character.image,
    species: character.species,
    type: character.type,
    gender: character.gender,
    origin: character.origin,
    created: character.created,
  }));

  return gifs;
};

export const getCharacter = async (charName) => {
  const url = `https://rickandmortyapi.com/api/character/?name=${charName}`;
  const resp = await fetch(url);
  const { results } = await resp.json();
  return results?.[0] || {};
};
   