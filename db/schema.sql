CREATE TABLE Todo(
    id integer PRIMARY KEY AUTOINCREMENT,
    content text NOT NULL,
    createdAt datetime DEFAULT CURRENT_TIMESTAMP
);
 