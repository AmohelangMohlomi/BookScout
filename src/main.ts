const { extractBooks } = require("./extract");
const { transformBooks } = require("./transorm");


async function main(){
    const data = await extractBooks("data engineering");
    const books = transformBooks(data);
    console.log("Transformed Books: ")
    console.log(books)
}

main();

/**Command to run the pipeline: npx ts-node src/main.ts */