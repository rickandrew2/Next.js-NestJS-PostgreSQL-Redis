# 🚀 Deployment Guide - Next.js Stack

This guide will help you deploy your Next.js stack application with:
- **Frontend**: Next.js → Vercel
- **Backend**: NestJS → Railway
- **Database**: Supabase PostgreSQL (already deployed)
- **Cache**: Upstash Redis (already deployed)

## 📋 Prerequisites

1. **GitHub Account**: Your code should be in a GitHub repository
2. **Vercel Account**: [vercel.com](https://vercel.com)
3. **Railway Account**: [railway.app](https://railway.app)
4. **Supabase Project**: Already set up
5. **Upstash Redis**: Already set up

## 🎯 Step 1: Deploy Backend to Railway

### 1.1 Prepare Your Repository
Your backend is already configured with:
- `railway.json` - Railway configuration
- `Procfile` - Process definition
- Updated `main.ts` - CORS and port configuration

### 1.2 Deploy to Railway

1. **Go to Railway Dashboard**: [railway.app/dashboard](https://railway.app/dashboard)
2. **Create New Project**: Click "New Project"
3. **Deploy from GitHub**: Select "Deploy from GitHub repo"
4. **Select Repository**: Choose your repository
5. **Select Directory**: Choose the `backend` folder
6. **Configure Environment Variables**:

```bash
# Database Configuration
DB_HOST=aws-0-us-east-2.pooler.supabase.com
DB_PORT=5432
DB_USERNAME=postgres.wwvzwqbtlaugflwkdzyp
DB_PASSWORD=Daedaluzxlangmalakas123?
DB_NAME=postgres

# Redis Configuration
UPSTASH_REDIS_URL=rediss://default:AXzWAAIjcDFiMzY4ZjI1NTg2MDY0NTkzYmY2MTUyNTQ3ZDg0NTE0MnAxMA@able-snipe-31958.upstash.io:6379

# Application Configuration
NODE_ENV=production
PORT=3002

# Frontend URL (update after Vercel deployment)
FRONTEND_URL=https://your-frontend-domain.vercel.app
```

7. **Deploy**: Railway will automatically build and deploy your NestJS app
8. **Get Your Backend URL**: Railway will provide a URL like `https://your-app-name.railway.app`

## 🎯 Step 2: Deploy Frontend to Vercel

### 2.1 Prepare Environment Variables

Create a `.env.local` file in your `frontend` directory:

```bash
# Backend API URL (update with your Railway URL)
NEXT_PUBLIC_API_URL=https://your-app-name.railway.app
```

### 2.2 Deploy to Vercel

1. **Go to Vercel Dashboard**: [vercel.com/dashboard](https://vercel.com/dashboard)
2. **Import Project**: Click "New Project"
3. **Import Git Repository**: Select your GitHub repository
4. **Configure Project**:
   - **Framework Preset**: Next.js
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`

5. **Environment Variables**: Add the same variables as above
6. **Deploy**: Vercel will build and deploy your Next.js app

### 2.3 Update Backend CORS

After getting your Vercel domain, update the Railway environment variables:

```bash
FRONTEND_URL=https://your-vercel-domain.vercel.app
```

## 🔧 Step 3: Update Configuration

### 3.1 Update Frontend API URL

In your Vercel project settings, ensure the environment variable is set:

```bash
NEXT_PUBLIC_API_URL=https://your-railway-app.railway.app
```

### 3.2 Update Backend CORS

In your Railway project, update the `FRONTEND_URL` environment variable with your actual Vercel domain.

## 🧪 Step 4: Test Your Deployment

1. **Test Backend**: Visit `https://your-railway-app.railway.app/categories`
2. **Test Frontend**: Visit your Vercel domain
3. **Test API Connection**: Check if frontend can fetch data from backend

## 🔍 Troubleshooting

### Common Issues:

1. **CORS Errors**: Ensure `FRONTEND_URL` is correctly set in Railway
2. **Database Connection**: Verify Supabase credentials in Railway
3. **Build Failures**: Check Railway logs for TypeScript compilation errors
4. **Environment Variables**: Ensure all variables are set in both Vercel and Railway

### Railway Logs:
```bash
# View Railway logs
railway logs
```

### Vercel Logs:
Check the "Functions" tab in your Vercel dashboard for any build errors.

## 🎉 Success!

Your stack is now deployed:
- ✅ Frontend: `https://your-app.vercel.app`
- ✅ Backend: `https://your-app.railway.app`
- ✅ Database: Supabase PostgreSQL
- ✅ Cache: Upstash Redis

## 🔄 Continuous Deployment

Both Vercel and Railway will automatically redeploy when you push changes to your GitHub repository.

## 💰 Cost Optimization

- **Vercel**: Free tier includes 100GB bandwidth/month
- **Railway**: Free tier includes $5 credit/month
- **Supabase**: Free tier includes 500MB database
- **Upstash**: Free tier includes 10,000 requests/day

## 🛠️ Local Development

For local development, use:
- Frontend: `npm run dev` (runs on localhost:3000)
- Backend: `npm run dev` (runs on localhost:3002)

Remember to update your local `.env` files with the production URLs when testing against deployed services.
