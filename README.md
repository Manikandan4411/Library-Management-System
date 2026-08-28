# 📚 Library Management System

A simple full-stack **Library Management System** built using **React.js, Spring Boot Microservices, REST APIs, JPA/Hibernate, and PostgreSQL**.

The application is designed using a microservices architecture with two independent backend services:

* **Book Microservice** — manages books
* **Member Microservice** — manages library members

The React frontend communicates with both microservices using REST APIs and Axios.

---

## 🚀 Project Overview

The Library Management System provides a simple interface to manage books and library members.

### Main Features

* 📚 Book Management
* 👤 Member Management
* ➕ Add books and members
* 📋 View books and members
* ✏️ Update books and members
* 🗑️ Delete books and members
* 🔍 Get records by ID
* 🔄 REST API communication
* 🗄️ PostgreSQL database
* 🧩 Microservices architecture
* ⚛️ React.js frontend

---

## 🏗️ Architecture

```text
                         React.js Frontend
                              │
                    ┌─────────┴─────────┐
                    │                   │
                    ▼                   ▼
             Book REST API        Member REST API
               Port 8081             Port 8082
                    │                   │
                    ▼                   ▼
            Book Microservice   Member Microservice
                    │                   │
              Controller            Controller
                    │                   │
                 Service              Service
                    │                   │
               Repository           Repository
                    │                   │
                    ▼                   ▼
             PostgreSQL           PostgreSQL
             book database       member database
```

---

## 🛠️ Technology Stack

### Frontend

* React.js
* Vite
* JavaScript
* React Router DOM
* Axios
* HTML5
* CSS3

### Backend

* Java 21
* Spring Boot
* Spring Web
* Spring Data JPA
* Hibernate
* Maven
* REST APIs

### Database

* PostgreSQL 17

### Development Tools

* Visual Studio Code
* Postman
* Git
* GitHub

---

## 📁 Project Structure

```text
library-management-system/
│
├── frontend/
│   └── library-frontend/
│       ├── public/
│       ├── src/
│       │   ├── components/
│       │   ├── pages/
│       │   │   ├── Home.jsx
│       │   │   ├── Books.jsx
│       │   │   └── Members.jsx
│       │   ├── services/
│       │   │   ├── bookService.js
│       │   │   └── memberService.js
│       │   ├── App.jsx
│       │   ├── main.jsx
│       │   └── index.css
│       ├── package.json
│       └── vite.config.js
│
├── book-service/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/library/book/
│   │   │   │   ├── controller/
│   │   │   │   ├── service/
│   │   │   │   ├── repository/
│   │   │   │   ├── entity/
│   │   │   │   └── exception/
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   └── pom.xml
│
├── member-service/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/library/member/
│   │   │   │   ├── controller/
│   │   │   │   ├── service/
│   │   │   │   ├── repository/
│   │   │   │   ├── entity/
│   │   │   │   └── exception/
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   └── pom.xml
│
├── README.md
└── .gitignore
```

---

## 📚 Book Microservice

The Book Microservice is responsible for managing library books.

### Book Fields

```text
id
title
author
isbn
available
```

### Book API

| Method | Endpoint          | Description    |
| ------ | ----------------- | -------------- |
| POST   | `/api/books`      | Create a book  |
| GET    | `/api/books`      | Get all books  |
| GET    | `/api/books/{id}` | Get book by ID |
| PUT    | `/api/books/{id}` | Update a book  |
| DELETE | `/api/books/{id}` | Delete a book  |

### Book Service

```text
Port: 8081
Base URL: http://localhost:8081/api/books
Database: library_book_db
```

---

## 👤 Member Microservice

The Member Microservice is responsible for managing library members.

### Member Fields

```text
id
name
email
phone
```

### Member API

| Method | Endpoint            | Description      |
| ------ | ------------------- | ---------------- |
| POST   | `/api/members`      | Create a member  |
| GET    | `/api/members`      | Get all members  |
| GET    | `/api/members/{id}` | Get member by ID |
| PUT    | `/api/members/{id}` | Update a member  |
| DELETE | `/api/members/{id}` | Delete a member  |

### Member Service

```text
Port: 8082
Base URL: http://localhost:8082/api/members
Database: library_member_db
```

---

## 🔄 Request Flow

### Book Request

```text
React.js
   ↓
Axios
   ↓
Book REST API
   ↓
BookController
   ↓
BookService
   ↓
BookRepository
   ↓
PostgreSQL
```

### Member Request

```text
React.js
   ↓
Axios
   ↓
Member REST API
   ↓
MemberController
   ↓
MemberService
   ↓
MemberRepository
   ↓
PostgreSQL
```

---

## 🗄️ Database Configuration

Two PostgreSQL databases are used.

### Book Database

```text
Database Name: library_book_db
Port: 5432
```

### Member Database

```text
Database Name: library_member_db
Port: 5432
```

The database tables are automatically created/updated by JPA/Hibernate during application startup.

---

## 💻 Prerequisites

Make sure the following are installed:

```text
Java 21
Node.js
npm
Maven
PostgreSQL 17
Git
```

You can verify the installations:

```bash
java -version
node -v
npm -v
mvn -version
psql --version
git --version
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/library-management-system.git
```

Move into the project:

```bash
cd library-management-system
```

---

### 2. Create PostgreSQL Databases

Open PostgreSQL:

```bash
psql -U postgres
```

Create the Book database:

```sql
CREATE DATABASE library_book_db;
```

Create the Member database:

```sql
CREATE DATABASE library_member_db;
```

Exit PostgreSQL:

```sql
\q
```

---

### 3. Configure Book Service

Open:

```text
book-service/src/main/resources/application.properties
```

Configure your PostgreSQL connection.

Example:

```properties
spring.application.name=book-service

server.port=8081

spring.datasource.url=jdbc:postgresql://localhost:5432/library_book_db
spring.datasource.username=postgres
spring.datasource.password=${DB_PASSWORD}

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

---

### 4. Configure Member Service

Open:

```text
member-service/src/main/resources/application.properties
```

Example:

```properties
spring.application.name=member-service

server.port=8082

spring.datasource.url=jdbc:postgresql://localhost:5432/library_member_db
spring.datasource.username=postgres
spring.datasource.password=${DB_PASSWORD}

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

> Never commit your real PostgreSQL password to GitHub.

---

## ▶️ Running the Application

The project contains three applications.

### Terminal 1 — Book Microservice

```bash
cd book-service
mvn spring-boot:run
```

Runs on:

```text
http://localhost:8081
```

---

### Terminal 2 — Member Microservice

```bash
cd member-service
mvn spring-boot:run
```

Runs on:

```text
http://localhost:8082
```

---

### Terminal 3 — React Frontend

```bash
cd frontend/library-frontend
npm install
npm run dev
```

The frontend normally runs on:

```text
http://localhost:5173
```

---

## 🧪 API Testing

The REST APIs were tested using Postman.

### Book APIs

```text
POST   http://localhost:8081/api/books
GET    http://localhost:8081/api/books
GET    http://localhost:8081/api/books/{id}
PUT    http://localhost:8081/api/books/{id}
DELETE http://localhost:8081/api/books/{id}
```

### Member APIs

```text
POST   http://localhost:8082/api/members
GET    http://localhost:8082/api/members
GET    http://localhost:8082/api/members/{id}
PUT    http://localhost:8082/api/members/{id}
DELETE http://localhost:8082/api/members/{id}
```

---

## 🖥️ Frontend Pages

### Home

Provides navigation to:

* Books
* Members

### Books

Provides:

* View books
* Add books
* Edit books
* Delete books

### Members

Provides:

* View members
* Add members
* Edit members
* Delete members

---

## 🔐 Security Note

This project is currently designed as a simple learning and portfolio project.

Authentication and authorization are not included.

Future enhancements can include:

* Spring Security
* JWT Authentication
* Role-based authorization

---

## 🚀 Future Enhancements

Possible future improvements:

* Spring Cloud API Gateway
* Service Discovery with Eureka
* Docker
* Docker Compose
* Kafka
* Redis
* JWT Authentication
* Role-based access control
* Book borrowing and returning
* Due-date management
* Search and filtering
* Pagination
* Unit testing with JUnit and Mockito
* Integration testing
* CI/CD with GitHub Actions
* AWS deployment

---

## 🎯 Learning Objectives

This project demonstrates practical understanding of:

* Java 21
* Spring Boot
* REST API development
* Spring Data JPA
* Hibernate
* PostgreSQL
* Microservices architecture
* React.js
* Axios
* React Router
* CRUD operations
* Frontend-backend integration
* Maven
* Git and GitHub
* API testing with Postman

---

## 👨‍💻 Author

**Manikandan S**

Java Full Stack Developer | Spring Boot | Microservices | React.js

---

## 📄 License

This project is created for learning, portfolio, and demonstration purposes.
