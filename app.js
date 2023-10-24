const starwars= async ()=>{
    try{
    const res = await fetch('https://swapi.dev/api/people/4')
    const data = await res.json()
    console.log(data)
    const res2 = await fetch('https://swapi.dev/api/people/30')
    const data2 = await res2.json()
    console.log(data2)
    }
    catch{
        console.log('error',err)
    }
}

starwars()