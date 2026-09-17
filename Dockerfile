FROM node:26.8-alpine@sha256:ef24c5053d50fdc3e4e56eb4e7ddb7861874ab0fdc797046ba897581deb8e868 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginxinc/nginx-unprivileged:1.28-alpine@sha256:7377697a821c131a924a7105fafbe7414db4e9fcc77a6f08f776f33f141ec3f8
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
