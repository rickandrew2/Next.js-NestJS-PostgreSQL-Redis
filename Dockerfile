FROM node:18-alpine

WORKDIR /app

# Copy backend package files
COPY backend/package*.json ./backend/

# Install backend dependencies
WORKDIR /app/backend
RUN npm ci

# Copy source code
WORKDIR /app
COPY . .

# Build the backend
WORKDIR /app/backend
RUN npm run build

# Expose port
EXPOSE 3002

# Start the application
CMD ["node", "dist/main.js"]
