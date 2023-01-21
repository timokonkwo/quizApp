export default function shuffle(array){

   let shuffled = array
        .map(value => ({value, sort: Math.random()}))
        .sort((a, b) => a.sort - b.sort)
        .map(({value}) => value)

    console.log(shuffled)

    return shuffled;

}