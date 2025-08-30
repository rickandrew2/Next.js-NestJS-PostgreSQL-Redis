# Build stage
FROM node:18-alpine AS builder

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

# Production stage
FROM node:18-alpine

WORKDIR /app

# Copy backend package files
COPY backend/package*.json ./backend/

# Install only production dependencies
WORKDIR /app/backend
RUN npm ci --only=production

# Copy built application from builder stage
COPY --from=builder /app/backend/dist ./dist

# Expose port
EXPOSE 3002

# Start the application
CMD ["node", "dist/main.js"]
