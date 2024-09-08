# Frontend
FROM node:18 AS build-frontend
WORKDIR /app/frontend
COPY ./frontend/package*.json ./
RUN npm install
COPY ./frontend ./
RUN npm run build

# Backend
FROM node:18 AS build-backend
WORKDIR /app/backend
COPY ./backend/package*.json ./
RUN npm install
COPY ./backend ./
COPY --from=build-frontend /app/frontend/build ./public
RUN npm run build

#Final image
FROM node:18
WORKDIR /app/backend
COPY --from=build-backend /app/backend ./
EXPOSE 3020
CMD ["npm", "run", "start:prod"]