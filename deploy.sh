#!/bin/bash

echo "🚀 Next.js Stack Deployment Helper"
echo "=================================="
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git repository not found. Please initialize git first:"
    echo "   git init"
    echo "   git add ."
    echo "   git commit -m 'Initial commit'"
    echo "   git remote add origin <your-github-repo-url>"
    echo "   git push -u origin main"
    exit 1
fi

# Check if backend is ready
echo "📋 Checking backend configuration..."
if [ -f "backend/railway.json" ] && [ -f "backend/Procfile" ]; then
    echo "✅ Backend is ready for Railway deployment"
else
    echo "❌ Backend configuration files missing"
    exit 1
fi

# Check if frontend is ready
echo "📋 Checking frontend configuration..."
if [ -f "frontend/package.json" ]; then
    echo "✅ Frontend is ready for Vercel deployment"
else
    echo "❌ Frontend configuration missing"
    exit 1
fi

echo ""
echo "🎯 Deployment Steps:"
echo "==================="
echo ""
echo "1. 🚂 Deploy Backend to Railway:"
echo "   - Go to: https://railway.app/dashboard"
echo "   - Create new project"
echo "   - Deploy from GitHub repo"
echo "   - Select 'backend' directory"
echo "   - Add environment variables (see DEPLOYMENT_GUIDE.md)"
echo ""
echo "2. 🌐 Deploy Frontend to Vercel:"
echo "   - Go to: https://vercel.com/dashboard"
echo "   - Import project from GitHub"
echo "   - Select 'frontend' directory"
echo "   - Add environment variables:"
echo "     NEXT_PUBLIC_API_URL=https://your-railway-app.railway.app"
echo ""
echo "3. 🔧 Update Configuration:"
echo "   - Update Railway CORS with Vercel domain"
echo "   - Test API endpoints"
echo "   - Test frontend-backend connection"
echo ""
echo "📖 For detailed instructions, see: DEPLOYMENT_GUIDE.md"
echo ""
echo "🔗 Useful URLs:"
echo "   - Railway Dashboard: https://railway.app/dashboard"
echo "   - Vercel Dashboard: https://vercel.com/dashboard"
echo "   - Supabase Dashboard: https://supabase.com/dashboard"
echo "   - Upstash Dashboard: https://console.upstash.com/"
echo ""

# Check if there are uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  You have uncommitted changes. Consider committing them before deployment:"
    echo "   git add ."
    echo "   git commit -m 'Prepare for deployment'"
    echo "   git push"
    echo ""
fi

echo "🎉 Ready to deploy! Follow the steps above."
