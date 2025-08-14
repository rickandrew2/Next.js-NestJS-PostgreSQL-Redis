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

# Build the backend - ensure TypeScript is executable
WORKDIR /app/backend
RUN chmod +x node_modules/.bin/tsc && npm run build

# Expose port
EXPOSE 3002

# Start the application
CMD ["node", "dist/main.js"]
