# Wallet App

A simple wallet app where users can send and receive money through transactions stored in a database.

### Screenshots

![alt text](image.png)
![alt text](image-1.png)
![alt text](image-2.png)
![alt text](image-3.png)

### Features Include

- 🔹 User signup
- 🔹 User signin
- 🔹 User Dashboard view
- 🔹 Users can send money to other users, ensuring secure transactions
- 🔹 Auto-login for previously logged users
- 🔹 Simple and beautiful UI

### Transaction Management

Transactions are managed using session functions to ensure all operations are executed as a single unit. This app adheres to the ACID properties:

- **Atomicity**: Transactions are completed in full or not at all. This is achieved using `session.startSession()`, where either the payment is fully completed (using `session.commitTransaction()`) or completely canceled (using `session.abortTransaction()`).
- **Consistency**: All transactions leave the database in a valid state.
- **Isolation**: Transactions operate independently, preventing interference.
- **Durability**: Completed transactions are stored permanently.

<p>
  <img src="https://img.shields.io/badge/Atomicity-FFCC00?style=flat-square&logo=undefined&logoColor=black" alt="Atomicity" />
  <img src="https://img.shields.io/badge/Consistency-1C7D3C?style=flat-square&logo=undefined&logoColor=white" alt="Consistency" />
  <img src="https://img.shields.io/badge/Isolation-5A67D8?style=flat-square&logo=undefined&logoColor=white" alt="Isolation" />
  <img src="https://img.shields.io/badge/Durability-FF5733?style=flat-square&logo=undefined&logoColor=white" alt="Durability" />
</p>

### Languages and Libraries Used

<p>
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Zod-5B8C4A?style=flat-square&logoColor=white" alt="Zod" />
  <img src="https://img.shields.io/badge/Axios-5A29E3?style=flat-square&logo=axios&logoColor=white" alt="Axios" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
</p>

#### Created by [Ashish Patel](https://www.linkedin.com/in/ashishpatel3009)
