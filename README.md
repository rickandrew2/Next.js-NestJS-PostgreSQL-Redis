# Next.js + NestJS + PostgreSQL + Redis Learning Stack

A comprehensive learning project where I'm exploring modern full-stack development with cutting-edge technologies.

## 🎯 Project Overview

This repository contains my journey learning and experimenting with a modern web development stack. I'm building a full-stack application to understand how these technologies work together in a real-world scenario.

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Next.js 15    │    │    NestJS API   │    │   PostgreSQL    │
│   Frontend      │◄──►│   Backend       │◄──►│   Database      │
│   (React 19)    │    │   (TypeScript)  │    │   (TypeORM)     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                              │
                              ▼
                       ┌─────────────────┐
                       │     Redis       │
                       │   (Caching)     │
                       └─────────────────┘
```

## 🛠️ Technology Stack

### Frontend (`/frontend`)
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React features and hooks
- **TypeScript** - Type safety across the application
- **Tailwind CSS v4** - Modern utility-first CSS framework
- **ESLint** - Code quality and consistency

### Backend (`/backend`)
- **NestJS** - Progressive Node.js framework with decorators
- **TypeORM** - Database ORM with TypeScript support
- **PostgreSQL** - Robust relational database
- **Redis** - In-memory data store for caching and sessions
- **JWT** - Stateless authentication
- **Passport** - Authentication middleware
- **bcryptjs** - Secure password hashing
- **Jest** - Comprehensive testing framework

## 📚 Learning Journey

### What I'm Learning
- **Full-Stack Development** - Understanding how frontend and backend work together
- **Modern JavaScript/TypeScript** - Latest language features and best practices
- **Database Design** - Relational database modeling and optimization
- **API Design** - RESTful API patterns and best practices
- **Authentication & Security** - JWT, password hashing, and security measures
- **Testing** - Unit tests, integration tests, and e2e testing
- **Performance** - Caching strategies and optimization techniques
- **Deployment** - CI/CD pipelines and production deployment

### Current Focus Areas
- [ ] User authentication and authorization
- [ ] Database schema design and migrations
- [ ] API endpoint development
- [ ] Frontend state management
- [ ] Real-time features with WebSockets
- [ ] Testing strategies
- [ ] Performance optimization
- [ ] Security hardening

## 🧪 Experimentation Features

As I learn, I'm implementing various features:

### Backend Features
- User registration and login
- JWT token management
- Database CRUD operations
- API rate limiting
- Error handling middleware
- Logging and monitoring

### Frontend Features
- Responsive UI components
- Form validation
- State management
- API integration
- Error boundaries
- Loading states

## 📖 Documentation

- [Frontend README](./frontend/README.md) - Detailed frontend setup and features
- [Backend README](./backend/README.md) - Backend architecture and API documentation

## 🔧 Development Commands

### Backend
```bash
cd backend
npm run start:dev    # Development server
npm run build        # Build for production
npm run test         # Run tests
npm run test:e2e     # Run e2e tests
npm run lint         # Lint code
```

### Frontend
```bash
cd frontend
npm run dev          # Development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Lint code
```

## 📝 Notes

This is an active learning project. The codebase will evolve as I discover better patterns, learn new techniques, and implement additional features. Each commit represents a step in my learning journey.

## 🤝 Contributing

While this is primarily a personal learning project, I welcome:
- Suggestions for improvements
- Bug reports
- Feature requests
- Code reviews and feedback

## 📄 License

This project is for educational purposes. Feel free to use it as a reference for your own learning projects.

---

**Happy Learning! 🚀**
