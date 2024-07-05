CREATE TABLE subjects (
    id VARCHAR(255) PRIMARY KEY,
    subject_name VARCHAR(255) NOT NULL, 
    sex VARCHAR(255) NOT NULL,
    diagnosis_at TIMESTAMP NOT NULL, 
    subject_status VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP
);