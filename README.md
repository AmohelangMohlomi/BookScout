# BookScout

A beginner-friendly **TypeScript ETL pipeline** that extracts, transforms, and loads book data from the **Google Books API** — preparing it for personalized recommendations.

This project was built to **learn TypeScript** while practicing **data engineering concepts** like ETL, API integration, and structured data modeling.

---

## Project Overview

**BookScout** performs a complete ETL (Extract, Transform, Load) workflow:

| Stage         | Description                                                                                                                    |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **Extract**   | Fetches raw book data from the [Google Books API](https://developers.google.com/books/docs/v1/using) based on a search term.   |
| **Transform** | Cleans, structures, and normalizes the data into consistent, strongly typed `Book` objects using TypeScript interfaces.        |
| **Load**      | Saves the transformed data into a local `books.json` file, creating a reusable dataset for future analysis or recommendations. |

---

## What You’ll Learn

* Setting up and running a **TypeScript project**
* Making API requests using **fetch()** in Node.js
* Defining and enforcing **TypeScript interfaces**
* Structuring an **ETL pipeline** from scratch
* Working with **file I/O** in Node.js
* Preparing data for a **recommendation system**

---

## Project Structure

```
BookScout/
├── src/
│   ├── extract.ts        # Extract: Fetches book data from the Google Books API
│   ├── transform.ts      # Transform: Cleans and normalizes API data
│   ├── load.ts           # Load: Saves transformed books into a local JSON file
│   ├── type.ts          # TypeScript interfaces for structured Book objects
│   └── main.ts           # Orchestrates the full ETL process
├── data/
│   └── books.json        # Output file containing transformed book data
├── package.json
├── tsconfig.json
└── README.md
```

---

## Setup Instructions

### Clone the Repository

```bash
git clone https://github.com/your-username/BookScout.git
cd BookScout
```

### Install Dependencies

```bash
npm install
```

### Run the ETL Pipeline

```bash
npx ts-node src/main.ts
```

You should see output similar to:

```
Extracting books...
Transforming books...
Loading books to file...
Books successfully saved to ./data/books.json
ETL pipeline complete!
```

---

## Example Output (books.json)

```json
[
  {
    "title": "Data Engineering with Python",
    "authors": ["Paul Crickard"],
    "publishedDate": "2020",
    "description": "Learn to design and build data pipelines...",
    "categories": ["Computers"],
    "averageRating": 4.5
  },
  {
    "title": "Fundamentals of Data Engineering",
    "authors": ["Joe Reis", "Matt Housley"],
    "publishedDate": "2022",
    "description": "A comprehensive guide to modern data engineering practices.",
    "categories": ["Technology"],
    "averageRating": 4.7
  }
]
```

---

## Technologies Used

* **TypeScript** — for static typing and clean code structure
* **Node.js** — to run server-side scripts and handle file I/O
* **Google Books API** — data source for book information
* **ts-node** — runs TypeScript files without pre-compiling

---

## Next Steps (Upcoming Features)

* [ ] Implement a **recommendation engine** based on categories, authors, or keywords
* [ ] Add a **CLI interface** to search and recommend books interactively
* [ ] Experiment with **data persistence** using a local database (SQLite )
* [ ] Visualize results in a simple **web UI**

---

## Author

**Amohelang Mohlomi**
Exploring data engineering and TypeScript through hands-on projects 

---

## License

MIT License — free to use, modify, and learn from.
