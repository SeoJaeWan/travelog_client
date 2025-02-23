FROM node:20.16-alpine3.19 AS base

FROM base AS builder
RUN apk add --no-cache libc6-compat
WORKDIR /build
COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile
COPY . .
RUN yarn build

FROM base AS runner
WORKDIR /app

COPY --from=builder /build/dist ./dist

RUN yarn global add serve

CMD ["serve", "-s", "dist", "-l", "3004"]