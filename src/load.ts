import { promises as fs } from "fs";
import { Book } from "./type";

/**
 * Saves transformed books to a JSON file
 * @param books - Array of Book objects
 * @param filePath - Path to save the file (default "./data/books.json")
 *
 */

export async function loadBooks( books: Book[], filePath: string ="./data/books.json"):
Promise<void>{

    try {
        //Ensure the directory exists
        const dir = filePath.substring(0,filePath.lastIndexOf("/"));
        await fs.mkdir(dir,{recursive: true});

        //Write books as pretty JSON
        await fs.writeFile(filePath,JSON.stringify(books,null,2),"utf-8");
        
        console.log("Books successfully saved to:",filePath);

    }catch (error){
        console.error("Failed to save books: ",error);
    }
}