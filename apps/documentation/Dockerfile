# Install dependencies only when needed
FROM node:18-alpine AS deps

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./ 
RUN npm ci

# Rebuild the source code only when needed
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 docusaurus

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

COPY --from=builder --chown=docusaurus:nodejs /app/build ./build
COPY --from=builder --chown=docusaurus:nodejs /app/server.js ./server.js

USER docusaurus

EXPOSE 4444

ENV PORT 3002
ENV SERVE true

CMD ["node", "server.js"]

# HEALTHCHECK --interval=5s --retries=2 --timeout=1s --start-period=5s CMD curl --fail http://localhost:3002/api/health || exit 1