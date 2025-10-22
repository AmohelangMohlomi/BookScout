"use strict";
const { extractBooks } = require("./extract");
async function main() {
    const data = await extractBooks("data engineering");
    console.log(data);
}
main();
