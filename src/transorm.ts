import { Book } from "./type";

export function transformBooks(apiData: any): Book[] {
    if (!apiData.items || !Array.isArray(apiData.items)){
        return [];
    }
    return apiData.items.map((item: any) =>{
        const info = item.volumeInfo || {};

        const book : Book = {
            title: info.title || "Untitled",
            authors: info.authors || ["Unknown Author"],
            publishedDate: info.publishedDate || "N/A",
            description: info.description || "No description available",
            categories: info.categories || ["Uncategorized"]
        };
        return book;
    });
}