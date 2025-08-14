# 🚂 Railway Backend Deployment Checklist

## ✅ Pre-Deployment Setup

- [x] Backend has `railway.json` configuration
- [x] Backend has `Dockerfile` for reliable builds
- [x] Backend has `Procfile` for process definition
- [x] TypeScript moved to dependencies (not devDependencies)
- [x] CORS configured for frontend domains
- [x] Environment variables documented

## 🚀 Railway Deployment Steps

### 1. Create Railway Project
1. Go to [railway.app/dashboard](https://railway.app/dashboard)
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose your repository
5. **IMPORTANT**: Select `backend` directory only

### 2. Configure Environment Variables
Add these variables in Railway dashboard:

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

### 3. Deploy
1. Click "Deploy Now"
2. Railway will use the Dockerfile to build
3. Monitor the build logs for any errors
4. Wait for deployment to complete

### 4. Test Backend
1. Get your Railway URL (e.g., `https://your-app.railway.app`)
2. Test the health endpoint: `https://your-app.railway.app/`
3. Test the categories endpoint: `https://your-app.railway.app/categories`

## 🔍 Troubleshooting

### Build Failures
- Check Railway logs for TypeScript compilation errors
- Ensure all dependencies are in `package.json`
- Verify `tsconfig.json` is correct

### Runtime Errors
- Check environment variables are set correctly
- Verify database connection (Supabase credentials)
- Check Redis connection (Upstash URL)

### CORS Errors
- Ensure `FRONTEND_URL` is set correctly
- Check the CORS configuration in `main.ts`

## 🎯 Success Indicators

✅ Build completes without errors
✅ Application starts successfully
✅ Health check endpoint responds
✅ Database connection established
✅ Redis connection established
✅ API endpoints return data

## 📞 Next Steps

After successful Railway deployment:
1. Note your Railway URL
2. Deploy frontend to Vercel
3. Update Railway CORS with Vercel domain
4. Test full application

## 💡 Pro Tips

- **Monitor Logs**: Use Railway's log viewer to debug issues
- **Environment Variables**: Double-check all variables are set
- **Database**: Ensure Supabase is accessible from Railway
- **Caching**: Verify Upstash Redis connection works
- **Health Checks**: Railway will automatically restart if health checks fail
