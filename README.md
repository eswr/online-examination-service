# backend service to conduct online examination

## start/stop

```sh
docker-compose down
docker-compose up
```

## Testing

```sh
curl -X POST http://localhost:3000/api/question   -H "Content-Type: application/json"   -d '{
        "type": "MCQ",
        "questionText": "What is Docker?",
        "options": ["A tool for virtualization", "A container management tool", "A database"],
        "answer": "A container management tool"
      }'
```

```sh
curl -X GET http://localhost:3000/api/exam
```
