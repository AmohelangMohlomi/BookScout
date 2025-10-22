const { extractBooks } = require("./extract");

async function main(){
    const data = await extractBooks("data engineering");
    console.log(JSON.stringify(data, null, 2));
}

main();