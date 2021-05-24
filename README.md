# NodeJS ListenUp Exercise

In this exercise, you will flesh out an Express web service that combines information from existing
separate web APIs to create a single API endpoint with the combined data using the Friends
and Play services provided below. The web service is based on a theoretical internet radio project
called “ListenUp”.

## Quick Start

Install the dependencies:

## Commands

```bash
yarn install
```

Running locally:

```bash
yarn dev
```

Testing:

```bash
# run all tests
yarn test
```
## Project Structure

```
src\
 |--controllers\    # Route controllers (controller layer)
 |--middlewares\    # Custom express middlewares
 |--facades\        # External API's that can be used by the service
 |--routes\         # Routes
 |--services\       # Business logic (service layer)
 |--utils\          # Utility classes and functions
 |--validations\    # Request data validation schemas
 |--app.js          # Express app
 |--index.js        # App entry point
```

### API Endpoints

List of available routes:

**User routes**:\
`GET /v1/users/:userId` - get user\

## Error Handling

The app has a centralized error handling mechanism.
When running in development mode, the error response also contains the error stack.

## Validation
Request data is validated using [Joi]

## Things I haven't done
1. Linting
2. Custom Logging using any library like Pino etc
3. Environment Variables Setup
4. Prettier
5. Code Coverage
6. CI CD
7. Docker


