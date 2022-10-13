# talking-clock

A human-friendly clock which can be used either via a CLI or RESTful API.

## Instructions to run

1. Ensure node and npm are installed (developed and tested with node v16 and npm v8)
1. Clone repo
1. Within project root:
   - Install dependencies: `npm i`
   - Build: `npm run build`
   - Start API Server: `npm run api`
   - Run CLI App: `npm run cli`
   - Run Unit Tests: `npm t`

## API Instructions

The API Server runs on port 3000 and the endpoint's path is `/human-time`.

For example, to run locally: `http://localhost:3000/human-time?time=12:39`
