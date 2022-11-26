const callToApi = (userSearch) => {
    return fetch(`https://api.tvmaze.com/search/shows?q=${userSearch}`)
        .then((response) => response.json())
        .then((response) => {
            const result = response.map((obj) => { //return (response.map((obj))) etc.
                return {
                    id: obj.show.id,
                    name: obj.show.name,
                }

            })
            console.log(result)
            return result
        })

}
export default callToApi;


/* ESTRUCTURA PARA FILTRAR
.then((data)=>{
    const cleanData = data.map((obj)=>{
        return {
            id:crypto.randomUUID() ESTO GENERA UN STRING DISTINTO CADA VEZ Q LO LLAMAS
            title:obj.title
            synopsis:obj.synopsis
        }
    })ACABA EL MAP
    console.log o lo que necesites
})

ESTO FUNCIONA, PERO NO FILTRA
const callToApi = (userSearch) => {
    return fetch(`https://api.tvmaze.com/search/shows?q=${userSearch}`)
        .then((response) => response.json())
        .then((response) => {
            const result = response;
            return result;
        });
};
*/