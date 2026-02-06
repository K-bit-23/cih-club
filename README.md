# CIH Club - Full Stack Application

A modern full-stack web application built with React (Frontend) and Express/MongoDB (Backend).

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v18 or higher)
- **MongoDB** (running locally or MongoDB Atlas)
- **npm** or **yarn**

### Installation

1. **Install all dependencies** (frontend + backend):
   ```bash
   npm run install:all
   ```

   Or install separately:
   ```bash
   # Frontend dependencies
   npm install

   # Backend dependencies
   cd backend
   npm install
   cd ..
   ```

2. **Configure Environment Variables**:
   - The backend `.env` file is already created at `backend/.env`
   - Update MongoDB URI if needed:
     ```env
     MONGODB_URI=mongodb://localhost:27017/cih-club
     ```
   - For MongoDB Atlas, use:
     ```env
     MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/cih-club
     ```

3. **Start MongoDB** (if running locally):
   ```bash
   # Windows
   mongod

   # Or if installed as service, it might already be running
   ```

### Running the Application

#### Option 1: Run Both Frontend & Backend Together (Recommended)
```bash
npm run dev:all
```
This will start:
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

#### Option 2: Run Separately

**Terminal 1 - Frontend:**
```bash
npm run dev
```

**Terminal 2 - Backend:**
```bash
npm run server
```

## 📁 Project Structure

```
cih-club/
├── backend/                 # Backend server
│   ├── models/             # MongoDB models
│   │   └── User.js
│   ├── routes/             # API routes
│   │   ├── auth.js         # Authentication routes
│   │   └── users.js        # User management routes
│   ├── middleware/         # Custom middleware
│   │   └── auth.js         # JWT authentication
│   ├── .env                # Environment variables
│   ├── server.js           # Express server
│   └── package.json        # Backend dependencies
│
├── src/                    # Frontend React app
│   ├── components/         # React components
│   ├── services/          # API services
│   │   └── api.js         # Axios API client
│   ├── App.jsx
│   └── main.jsx
│
├── package.json           # Frontend dependencies & scripts
└── README.md             # This file
```

## 🔧 Available Scripts

### Frontend + Backend
- `npm run dev:all` - Run both frontend and backend concurrently
- `npm run install:all` - Install dependencies for both

### Frontend Only
- `npm run dev` - Start Vite dev server (port 5173)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend Only
- `npm run server` - Start backend server in dev mode (port 5000)

## 🔐 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Users
- `GET /api/users/me` - Get current user profile (requires auth)
- `PUT /api/users/me` - Update user profile (requires auth)

### Health Check
- `GET /api/health` - Server health status

## 🛠️ Technology Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool
- **TailwindCSS** - Styling
- **Framer Motion** - Animations
- **Axios** - HTTP client
- **React Router** - Routing
- **Lucide React** - Icons

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin support

## 🔒 Environment Variables

Create a `backend/.env` file with:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/cih-club
JWT_SECRET=your_secret_key_here
NODE_ENV=development
```

## 📝 Usage Example

### Register a New User
```javascript
import { authAPI } from './services/api';

const registerUser = async () => {
  try {
    const data = await authAPI.register({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123'
    });
    console.log('User registered:', data);
  } catch (error) {
    console.error('Registration failed:', error);
  }
};
```

### Login
```javascript
import { authAPI } from './services/api';

const loginUser = async () => {
  try {
    const data = await authAPI.login({
      email: 'john@example.com',
      password: 'password123'
    });
    console.log('Login successful:', data);
  } catch (error) {
    console.error('Login failed:', error);
  }
};
```

## 🐛 Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running: `mongod`
- Check if the connection string in `.env` is correct
- For MongoDB Atlas, ensure your IP is whitelisted

### Port Already in Use
- Frontend (5173): Change in `vite.config.js`
- Backend (5000): Change `PORT` in `backend/.env`

### CORS Issues
- Backend is configured to accept requests from `http://localhost:5173`
- Update CORS origin in `backend/server.js` if using different port

## 📦 Deployment

### Frontend
```bash
npm run build
# Deploy the 'dist' folder to your hosting service
```

### Backend
- Set `NODE_ENV=production` in production environment
- Use a process manager like PM2
- Ensure MongoDB is accessible from production server

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is private and belongs to CIH Club.
