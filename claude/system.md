# System Description

## What This Is
A NestJS + TypeScript AI agent API that routes user questions by intent using LangGraph and GPT-4o.
Single endpoint: `POST /chat` → returns `{ answer, intent }`.

## Stack
- **NestJS 10** — HTTP layer, DI, module system
- **LangGraph 1.x** — graph-based workflow orchestration
- **LangChain Core 1.x** — `SystemMessage`, `HumanMessage`, model abstraction
- **@langchain/openai** — `ChatOpenAI` with `gpt-4o`
- **Zod** — structured output schema for intent classification + env validation
- **@nestjs/swagger 7** — Swagger UI at `/docs`
- **@nestjs/config** — loads `.env`, validated via Zod on boot

## Project Structure
```
src/
├── config/
│   └── env.validation.ts        # Zod schema for required env vars — app refuses to boot if invalid
├── constants/
│   ├── agent.constants.ts       # UNSUPPORTED_ANSWER fallback string
│   └── model.constants.ts       # LLM_MODEL ("gpt-4o"), LLM_TEMPERATURE (0)
├── chat/
│   ├── chat.controller.ts       # POST /chat
│   ├── chat.service.ts
│   ├── chat.module.ts
│   └── dto/chat.dto.ts          # ChatRequestDto, ChatResponseDto (Swagger decorated)
├── agent/
│   ├── agent.service.ts         # Builds workflow on init, exposes run()
│   ├── agent.module.ts
│   ├── data/
│   │   ├── customer.mock.ts     # Mocked customer record
│   │   └── company.mock.ts      # Mocked company info
│   ├── nodes/
│   │   ├── get-intent.node.ts        # Factory: classifies intent via structured output
│   │   ├── customer-details.node.ts  # Factory: answers from customer mock data
│   │   └── company-details.node.ts   # Factory: answers from company mock data
│   └── graph/
│       ├── state.ts             # LangGraph Annotation state (message, intent, answer)
│       └── workflow.ts          # StateGraph with conditional routing
└── prompt-manager/
    ├── prompt-key.enum.ts       # PromptKey enum — values match .md file names
    ├── prompt-manager.service.ts # Reads + caches .md files by PromptKey
    ├── prompt-manager.module.ts
    └── prompts/
        ├── get-intent.md
        ├── customer-details.md
        └── company-details.md

claude/
├── claude.md    # Working instructions for Claude
└── system.md    # This file — architecture snapshot
```

## LangGraph Workflow
```
START → getIntent → [conditional edge]
  ├── "customerDetails" → customerDetailsNode → END
  ├── "companyDetails"  → companyDetailsNode  → END
  └── "unsupported"     → END  (AgentService returns fallback answer)
```

- `getIntent` uses `withStructuredOutput(intentSchema)` — Zod enum forces one of three values
- Nodes are factory functions; prompts are injected at startup via `PromptManagerService`
- Workflow is built once in `AgentService.onModuleInit()`

## Prompt Management
- System prompts live as `.md` files under `src/prompt-manager/prompts/`
- `PromptManagerService.get(PromptKey)` reads and caches by key
- `nest-cli.json` assets config copies `.md` files to `dist/` on build
- Data nodes append mock JSON to the base prompt at factory-call time

## Environment Variables
| Variable | Required | Purpose |
|---|---|---|
| `OPENAI_API_KEY` | yes | GPT-4o API access |

Validated with Zod in `src/config/env.validation.ts` — app refuses to boot if missing.

## Endpoints
| Method | Path | Description |
|---|---|---|
| POST | `/chat` | Send a message, get `{ answer, intent }` |
| GET | `/docs` | Swagger UI |
