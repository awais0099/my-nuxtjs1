# Stage 1: Build the application
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Production environment
FROM node:22-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.output ./.output

# Set environment variables
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

EXPOSE 3000

# Start the server using the compiled entry point
CMD ["node", ".output/server/index.mjs"]