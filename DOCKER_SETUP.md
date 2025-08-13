# 🐳 Docker Setup for Next.js + NestJS Stack

## 🚀 Quick Start (5 minutes)

### Prerequisites
- Docker Desktop installed on your machine
- Git

### Setup Steps

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd next-js-stack
   ```

2. **Start all services (PostgreSQL + Redis + Backend):**
   ```bash
   docker-compose up -d
   ```

3. **Start the frontend (in a new terminal):**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

4. **Visit your application:**
   - Frontend: http://localhost:3000
   - Backend: http://localhost:3001
   - Database: PostgreSQL on localhost:5432
   - Cache: Redis on localhost:6379

## 🛠️ Useful Commands

### Start Services
```bash
# Start all services in background
docker-compose up -d

# Start and see logs
docker-compose up
```

### Stop Services
```bash
# Stop all services
docker-compose down

# Stop and remove data volumes
docker-compose down -v
```

### View Logs
```bash
# View all logs
docker-compose logs

# View specific service logs
docker-compose logs backend
docker-compose logs postgres
docker-compose logs redis
```

### Restart Services
```bash
# Restart all services
docker-compose restart

# Restart specific service
docker-compose restart backend
```

## 🗄️ Database Access

### PostgreSQL
- **Host:** localhost
- **Port:** 5432
- **Database:** nextjs_stack
- **Username:** postgres
- **Password:** password

### Redis
- **Host:** localhost
- **Port:** 6379

## 🔧 Troubleshooting

### Port Already in Use
If you get "port already in use" errors:
```bash
# Stop all Docker containers
docker-compose down

# Check what's using the ports
netstat -ano | findstr :3001
netstat -ano | findstr :5432
netstat -ano | findstr :6379
```

### Reset Everything
```bash
# Stop and remove everything
docker-compose down -v

# Remove all images
docker system prune -a

# Start fresh
docker-compose up -d
```

## 🎯 What's Running

- **PostgreSQL:** Your main database
- **Redis:** Caching layer for better performance
- **NestJS Backend:** API server with validation and authentication
- **Next.js Frontend:** React application (runs locally)

## 🚀 Benefits

- ✅ **Consistent Environment:** Same setup for everyone
- ✅ **No Local Installations:** No need to install PostgreSQL/Redis
- ✅ **Easy Onboarding:** New teammates ready in 5 minutes
- ✅ **Production-like:** Same environment as deployment
- ✅ **Isolated:** Doesn't interfere with other projects
