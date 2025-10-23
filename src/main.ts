const { extractBooks } = require("./extract");
const { transformBooks } = require("./transorm");
const { loadBooks} = require("./load");


async function main(){
    
    console.log("Extracting books ...");
    const data = await extractBooks("data engineering");

    console.log("Transforming books ...");
    const books = transformBooks(data);

    console.log("Loading books ...")
    await loadBooks(books);

    console.log("ETL pipeline complete!")
}

main();

/**Command to run the pipeline: npx ts-node src/main.ts */