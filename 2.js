// array of country objects

let country=[
    {
        name:"India",
        capital:"Delhi",
        population:1417284809

    },
    {
        name:"Vatican City",
        capital:"Vatican City",
        population:825
    },
    {
        name:"Niue",
        capital:"Alofi",
        population:1549
    },
    {
        name:"Iceland",
        capital:"Reykjavík",
        population:381370
    },
    {
        name:"Bhutan",
        capital:"Thimphu",
        population:763200
    }
]

for(let i=0; i<country.length;i++)
{
    if(country[i].population < 2000)
    {
        console.log(country[i].name)
    }
}