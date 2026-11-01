FROM node:26.13.0-alpine@sha256:c6ad9e9c1d80f6eb607c26b4b0a132ff7a2344fad1c78ea3baa2a7d4c8de6d94 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginxinc/nginx-unprivileged:1.31-alpine@sha256:b54ac358b83fc6c965793fd271839b4ea4cdb6e99895bb19618cbc2ca152d972
ARG RELEASE_ID
RUN test -n "${RELEASE_ID}"

ENV RELEASE_ID="${RELEASE_ID}"

LABEL org.opencontainers.image.version="${RELEASE_ID}" \
      com.montra2.release-id="${RELEASE_ID}"

COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN sed -i "s/__HELM_RELEASE_ID__/${RELEASE_ID}/g" /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s \
  CMD wget -qO /dev/null http://localhost:8080/ || exit 1
