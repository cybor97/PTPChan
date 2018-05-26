CREATE TABLE IF NOT EXISTS Account(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userName TEXT, 
    passwordHash TEXT,
    signUpDate INTEGER,
    lastActionDate INTEGER
)

CREATE TABLE IF NOT EXISTS Attachment(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    postId INTEGER,
    attachmentName TEXT, 
    attachmentDate INTEGER, 
    attachmentFilename TEXT
)

CREATE TABLE IF NOT EXISTS Board(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    boardName TEXT,
    boardCreationDate INTEGER,
    boardImageFilename TEXT
)

CREATE TABLE IF NOT EXISTS Post(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    accountId INTEGER,
    postTitle TEXT,
    postContent TEXT
)
