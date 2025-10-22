import fetch from "node-fetch";

/**
 * Extracts books from the Google Books API
 * @param query - the search term to find books
 */
export async function extractBooks(query: string): Promise<any> {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
    query
  )}&maxResults=10`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}
