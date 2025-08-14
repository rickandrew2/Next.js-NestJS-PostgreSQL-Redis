FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY backend/package*.json ./backend/

# Install dependencies
RUN npm ci --only=production
RUN cd backend && npm ci

# Copy source code
COPY . .

# Build the backend
RUN cd backend && npm run build

# Expose port
EXPOSE 3002

# Start the application
CMD ["node", "backend/dist/main.js"]
