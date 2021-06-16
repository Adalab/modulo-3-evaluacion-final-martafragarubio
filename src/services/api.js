const getDataApi = () => {
  /* return fetch("https://rickandmortyapi.com/api/character") */
  return fetch(
    "https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json"
  )
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
      const cleanData = data.results.map((caracter) => {
        //console.log(caracter.name);
        return {
          id: caracter.id,
          image: caracter.image,
          name: caracter.name,
          species: caracter.species,
          status: caracter.status,
          gender: caracter.gender,
          location: caracter.location.name,
          episodes: caracter.episode,
        };
      });
      //console.log(cleanData);
      return cleanData;
    });
};

export default getDataApi;
