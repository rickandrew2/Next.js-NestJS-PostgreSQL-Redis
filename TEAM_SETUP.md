# 🚀 Team Development Setup Guide

## 🎯 **Hybrid Approach: Docker + Supabase**

This setup gives you the best of both worlds:
- **Docker**: Consistent development environment
- **Supabase**: Shared cloud database for team collaboration

## 📋 **Prerequisites**

### **For All Team Members:**
- Node.js 18+
- Docker Desktop
- Git
- Supabase account (shared credentials)

## 🛠️ **Initial Setup (One Time)**

### **1. Create Supabase Project**
- Go to https://supabase.com
- Create project: `nextjs-stack-team`
- Save database credentials

### **2. Set Up Repository**
```bash
git clone [your-repo-url]
cd nextjs-stack
```

### **3. Configure Environment**
```bash
# Copy environment template
cp backend/.env.example backend/.env

# Update with Supabase credentials
DB_HOST=db.[YOUR-PROJECT-REF].supabase.co
DB_PASSWORD=[YOUR-SUPABASE-PASSWORD]
```

## 👥 **Team Member Setup (Each Developer)**

### **Step 1: Clone Repository**
```bash
git clone [your-repo-url]
cd nextjs-stack
```

### **Step 2: Get Environment Variables**
Ask team lead for:
- `backend/.env` file with Supabase credentials
- Or get Supabase project access

### **Step 3: Start Development Environment**
```bash
# Install dependencies
npm install

# Start local development
docker-compose up -d
```

### **Step 4: Verify Setup**
```bash
# Check backend logs
docker-compose logs backend

# Test API
curl http://localhost:3002/published
```

## 🎯 **Daily Development Workflow**

### **Start of Day:**
```bash
# Pull latest changes
git pull origin main

# Start services
docker-compose up -d

# Start frontend (optional)
cd frontend && npm run dev
```

### **During Development:**
```bash
# View database in Supabase dashboard
# https://app.supabase.com → Table Editor

# View logs
docker-compose logs backend -f

# Test API changes
curl http://localhost:3002/published
```

### **End of Day:**
```bash
# Stop services
docker-compose down

# Commit and push changes
git add .
git commit -m "Your changes"
git push origin main
```

## 🗄️ **Database Management**

### **View Data:**
- **Supabase Dashboard**: https://app.supabase.com
- **Table Editor**: View/edit data like MongoDB Compass
- **SQL Editor**: Run queries like MongoDB shell

### **Add Test Data:**
```sql
-- In Supabase SQL Editor
INSERT INTO published (title, body, userId) 
VALUES ('Team Test Post', 'This is shared data!', 1);
```

### **Real-time Collaboration:**
- All team members see the same data
- Changes appear instantly for everyone
- No local database conflicts

## 🔧 **Troubleshooting**

### **Backend Won't Start:**
```bash
# Check logs
docker-compose logs backend

# Rebuild if needed
docker-compose down
docker-compose up -d --build
```

### **Database Connection Issues:**
- Verify Supabase credentials in `.env`
- Check Supabase project is active
- Ensure IP is not blocked

### **Redis Issues:**
```bash
# Restart Redis
docker-compose restart redis
```

## 🎉 **Benefits of This Setup**

### **For Team Development:**
- ✅ **Same environment** for all developers
- ✅ **Shared database** data
- ✅ **Real-time collaboration**
- ✅ **Beautiful web UI** for data management
- ✅ **Easy onboarding** for new team members

### **For Production:**
- ✅ **Same setup** works in production
- ✅ **Easy to scale**
- ✅ **No migration needed**
- ✅ **Professional database** management

## 🚀 **Next Steps**

### **Phase 1: Team Development (Current)**
- Local development with shared Supabase database
- Team collaboration and data sharing

### **Phase 2: Add Upstash Redis**
- Replace local Redis with Upstash (cloud)
- Better caching and performance

### **Phase 3: Production Deployment**
- Deploy to Railway or similar platform
- Keep same database and cache setup
