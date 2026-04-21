# AI Agent API

A NestJS REST API that routes natural-language chat messages to the correct handler using a LangGraph-powered intent-detection agent backed by OpenAI.

## How it works

1. A `POST /chat` request arrives with a user message.
2. The **getIntent** node classifies the message into one of three intents: `customerDetails`, `companyDetails`, or `unsupported`.
3. LangGraph routes the message to the matching node (`customerDetails` or `companyDetails`), which looks up mock data and returns a response.
4. The result is returned to the caller as JSON.

Swagger docs are available at `http://localhost:3000/docs` when the server is running.

## Prerequisites

- Node.js 20+
- An OpenAI API key

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Create the `.env` file

Create a `.env` file in the project root with the following variables:

```env
OPENAI_API_KEY=your-openai-api-key-here
```

| Variable | Required | Description |
|---|---|---|
| `OPENAI_API_KEY` | Yes | OpenAI API key used by the LangGraph agent nodes |

The app validates these variables at startup using a Zod schema and will refuse to start if any required variable is missing or empty.

### 3. Run the server

```bash
# Development (watch mode)
npm run start:dev

# Production
npm run build
npm run start
```

The API will be available at `http://localhost:3000`.

## API

### `POST /chat`

Send a message to the agent.

**Request body:**
```json
{ "message": "Tell me about customer 42" }
```

**Response:**
```json
{ "response": "..." }
```
