# BookScout

A beginner-friendly **TypeScript ETL pipeline** that extracts book data from the **Google Books API**, transforms it into clean, typed objects, and prepares it for future **book recommendation** logic.

This project helps you learn **TypeScript**, **API data handling**, and basic **data engineering** concepts — all in one simple project.

---

## Project Overview

**BookScout** performs a basic ETL (Extract, Transform, Load) workflow:

| Step          | Description                                                                                                             |
| ------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **Extract**   | Fetch book data from the [Google Books API](https://developers.google.com/books/docs/v1/using) based on a search query. |
| **Transform** | Clean and normalize the raw JSON response into consistent, typed `Book` objects using TypeScript interfaces.            |
| **Load**      | (Coming soon) Store or use transformed book data for personalized recommendations.                                      |

---

## What You’ll Learn

* Setting up a **TypeScript project** from scratch
* Using **fetch()** in Node.js to call APIs
* Defining and enforcing **TypeScript interfaces**
* Building a simple **ETL pipeline**
* Preparing data for future **recommendation logic**

---

## Project Structure

```
BookScout/
├── src/
│   ├── extract.ts        # Extracts book data from Google Books API
│   ├── transform.ts      # Transforms and cleans API data
│   ├── types.ts          # TypeScript interfaces for structured data
│   └── main.ts           # Entry point (runs extract + transform)
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

### Run the Project

```bash
npx ts-node src/main.ts
```

You should see JSON output from the Google Books API and a cleaned list of book objects.

---

## Example Output

```
Transformed Books:
[
  {
    title: "Data Engineering with Python",
    authors: ["Paul Crickard"],
    publishedDate: "2020",
    description: "Learn to design and build data pipelines...",
    categories: ["Computers"],
    averageRating: 4.5
  },
  {
    title: "Fundamentals of Data Engineering",
    authors: ["Joe Reis", "Matt Housley"],
    publishedDate: "2022",
    ...
  }
]
```

---

## 🛠️ Technologies Used

* **TypeScript** — typed JavaScript for cleaner, safer code
* **Node.js** — runtime environment for executing code
* **Google Books API** — source of book data
* **ts-node** — runs TypeScript directly without compilation

---

## Next Steps (Upcoming Features)

* [ ] **Load stage:** Save transformed books into a local JSON or SQLite database
* [ ] **Recommendation engine:** Suggest books based on user interests or previous reads
* [ ] **Simple CLI or Web UI:** Search and view recommended books interactively

---

## Author

**Amohelang Mohlomi**
Learning data engineering + TypeScript one project at a time 🚀

---

## License

MIT License — feel free to use and adapt for learning or personal projects.
