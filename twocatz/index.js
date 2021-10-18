const fetch = require('node-fetch')

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    let names = ["Shreya", "Emily", "Fifi", "Beau", "Evelyn", "Julia", "Daniel", "Fardeen"]

    function randomName() {
        let random_value = Math.floor(names.length * Math.random())
        let name = names[random_value]
        return name
    }

    let resp = await fetch("https://cataas.com/cat/cute/says/Bitcamp", {
        method: 'GET'
    });
    let data = await resp.arrayBuffer()
    let cat1 = Buffer.from(data).toString('base64')
    
    let resp2 = await fetch("https://cataas.com/cat/cute/says/Bitcamp", {
        method: 'GET'
    });
    let data2 = await resp2.arrayBuffer()
    let cat2 = Buffer.from(data2).toString('base64')

    let cat1_name = randomName()
    let cat2_name = randomName()
    
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: { 
            cat1: cat1,
            cat2: cat2,
            names: [cat1_name, cat2_name]
         }
    };
}