
# 🚀 Supabase Migration Guide

## Quick Setup Steps

### 1. Create Supabase Account
- Go to: https://supabase.com
- Sign up with GitHub or email
- Create new project: `nextjs-stack-demo`

### 2. Get Your Connection Details
In Supabase Dashboard → Settings → Database:
```
Host: db.[YOUR-PROJECT-REF].supabase.co
Port: 5432
Database: postgres
User: postgres
Password: [YOUR-PROJECT-PASSWORD]
```

### 3. Update Environment Variables
Replace the placeholders in `backend/.env`:
```env
DB_HOST=db.[YOUR-PROJECT-REF].supabase.co
DB_PASSWORD=[YOUR-SUPABASE-PASSWORD]
```

### 4. Create Database Table
In Supabase Dashboard → Table Editor → New Table:

**Table Name**: `published`

**Columns**:
- `id` (int8, primary key, auto-increment)
- `title` (text, not null)
- `body` (text, not null)
- `userId` (int8, not null)
- `createdAt` (timestamptz, default: now())
- `updatedAt` (timestamptz, default: now())

### 5. Restart Docker
```bash
docker-compose down
docker-compose up -d --build
```

## 🎯 What You Get

### Supabase Dashboard Features:
- **Table Editor**: View/edit data like MongoDB Compass
- **SQL Editor**: Run queries like MongoDB shell
- **Real-time**: Live updates across all clients
- **Authentication**: Built-in user management
- **API**: Auto-generated REST API

### Benefits:
- ✅ **Shared Database**: Team can access same data
- ✅ **No Local Setup**: No Docker PostgreSQL needed
- ✅ **Beautiful UI**: Like MongoDB Atlas
- ✅ **Free Tier**: 500MB database, 50MB bandwidth
- ✅ **Backups**: Automatic daily backups

## 🔄 Migration Comparison

| **Before (Docker)** | **After (Supabase)** |
|---|---|
| `localhost:5432` | `db.project.supabase.co:5432` |
| Local only | Cloud accessible |
| Manual setup | Managed service |
| No UI | Beautiful dashboard |

## 🧪 Testing Your Setup

1. **Check Backend Logs**:
   ```bash
   docker-compose logs backend
   ```

2. **Test API**:
   ```bash
   curl http://localhost:3002/published
   ```

3. **Add Test Data**:
   In Supabase Dashboard → Table Editor → published → Insert Row:
   ```json
   {
     "title": "Hello from Supabase!",
     "body": "This is my first cloud post",
     "userId": 1
   }
   ```

4. **View in Dashboard**:
   - Go to Supabase Dashboard
   - Click "Table Editor"
   - Click "published" table
   - See your data in beautiful UI!

## 🎉 Success Indicators

- ✅ Backend connects to Supabase
- ✅ API returns data from cloud database
- ✅ Can view/edit data in Supabase dashboard
- ✅ Frontend still works with cloud backend
