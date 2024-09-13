# backend service to conduct online examination

## start/stop

```sh
docker-compose down # destroys db
docker-compose up
```

## Testing

1. Add a new multiple choice question

    ```sh
    curl -X POST http://localhost:3000/api/question   -H "Content-Type: application/json"   -d '{
            "type": "MCQ",
            "questionText": "What is Docker?",
            "options": ["A tool for virtualization", "A container management tool", "A database"],
            "answer": "A container management tool"
        }'
    ```

2. Add a new descriptive question without the image

    ```sh
    curl -X POST http://localhost:3000/api/question \
    -H "Content-Type: application/json" \
    -d '{
            "type": "DESCRIPTIVE",
            "questionText": "Explain the concept of cloud computing.",
            "answer": "Cloud computing is the delivery of computing services over the internet."
        }'
    ```

3. Add a new descriptive question with the image

    ```sh
    curl -X POST http://localhost:3000/api/question \
    -H "Content-Type: application/json" \
    -d '{
            "type": "DESCRIPTIVE",
            "questionText": "Describe the water cycle.",
            "answer": "The water cycle describes the continuous movement of water on, above, and below the surface of the Earth.",
            "image": "https://example.com/path/to/image.png"
        }'
    ```

1. Get 10 questions for the exam

    ```sh
    curl -X GET http://localhost:3000/api/exam
    ```
