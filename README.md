
# 🌱 SwapX - Community Clothing Exchange Platform

<div align="center">

![SwapX Logo](https://img.shields.io/badge/SwapX-Community%20Fashion%20Exchange-red?style=for-the-badge&logo=recycle)

[![Next.js](https://img.shields.io/badge/Next.js-14.0-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18.0-green?style=flat-square&logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18-lightgrey?style=flat-square&logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.0-green?style=flat-square&logo=mongodb)](https://mongodb.com/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3-blue?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)

*Sustainable fashion through community-driven clothing exchange*

[Live Demo](https://drive.google.com/file/d/1HdFQejGuOulhPTAKSazeLC1J21EhBCh8/view?usp=sharing)

</div>

---

## 🌍 Problem Statement

**SwapX** tackles the global textile waste crisis by creating a sustainable community-driven clothing exchange platform. With the fashion industry contributing to 10% of global carbon emissions and textile waste filling landfills, SwapX enables users to:

- **♻️ Extend garment lifecycles** through direct swaps and point-based redemption
- **🌱 Reduce environmental impact** by promoting reuse over disposal
- **💚 Foster conscious consumption** within local communities
- **🤝 Build sustainable fashion communities** worldwide

---

## ✨ Features

### 🔐 **Authentication System**
- Secure email/password registration and login
- JWT-based authentication with role-based access
- Email verification and password recovery
- User roles: `user`, `admin`

### 🏠 **Landing Page**
- Engaging hero section with platform introduction
- Featured items carousel showcasing popular swaps
- Call-to-action buttons: "Start Swapping", "Browse Items", "List an Item"
- Success stories and community impact metrics

### 👤 **User Dashboard**
- **Profile Management**: View and edit personal details
- **Points Balance**: Track available coins for redemptions
- **Item Management**: Overview of uploaded items with status
- **Swap History**: Track ongoing and completed exchanges
- **Interactive Modals**: Profile editing, coin management, logout confirmation

### 🛍️ **Item Browsing & Details**
- **Advanced Filtering**: By category, size, condition, type
- **Detailed Item Pages**: High-quality image galleries, comprehensive descriptions
- **Uploader Information**: Contact details and user ratings
- **Action Options**: Request swap or redeem via points
- **Availability Status**: Real-time item availability tracking

### 📦 **Item Listing**
- **Easy Upload**: Drag-and-drop image uploads with preview
- **Comprehensive Details**: Title, description, category, type, size, condition
- **Smart Tagging**: Auto-suggestions and custom tags
- **Instant Publishing**: Items go live immediately (pending admin approval)

### 🛡️ **Admin Panel**
- **Content Moderation**: Approve/reject item listings
- **User Management**: View user activity and manage accounts
- **Spam Detection**: Remove inappropriate or duplicate content
- **Analytics Dashboard**: Platform usage and swap statistics

---

## 🏗️ Project Structure

```
SwapX/
├── 📁 frontend/                    # Next.js Frontend Application
│   ├── 📁 public/                  # Static assets
│   │   ├── 🖼️ Heroimage.png        # Landing page hero image
│   │   ├── 🖼️ loginimage.png       # Login page background
│   │   └── 🖼️ next.svg             # Next.js logo
│   ├── 📁 src/
│   │   ├── 📁 app/                 # App Router (Next.js 14)
│   │   │   ├── 📄 globals.css      # Global styles
│   │   │   ├── 📄 layout.js        # Root layout component
│   │   │   ├── 📄 page.js          # Landing page
│   │   │   ├── 📁 login/           # Authentication pages
│   │   │   │   └── 📄 page.jsx     # Login page
│   │   │   ├── 📁 signup/          # User registration
│   │   │   │   └── 📄 page.jsx     # Signup page
│   │   │   ├── 📁 dashboard/       # User dashboard
│   │   │   │   └── 📄 page.jsx     # Dashboard with modals
│   │   │   ├── 📁 browse/          # Item browsing
│   │   │   │   └── 📄 page.jsx     # Browse items page
│   │   │   ├── 📁 itemdesc/        # Item details
│   │   │   │   └── 📄 page.jsx     # Item detail page
│   │   │   ├── 📁 add-item/        # List new items
│   │   │   │   └── 📄 page.jsx     # Add item form
│   │   │   ├── 📁 admin/           # Admin panel
│   │   │   │   └── 📄 page.jsx     # Admin dashboard
│   │   │   ├── 📁 swap-requests/   # Swap management
│   │   │   │   └── 📄 page.jsx     # Swap requests page
│   │   │   ├── 📁 purchase/        # Purchase flow
│   │   │   │   └── 📄 page.jsx     # Purchase confirmation
│   │   │   ├── 📁 verify/          # Email verification
│   │   │   │   └── 📄 page.jsx     # Verify email page
│   │   │   └── 📁 not-found/       # 404 page
│   │   │       └── 📄 page.jsx     # Custom 404 page
│   │   └── 📁 components/          # Reusable components
│   │       ├── 📄 Navbar.jsx       # Navigation component
│   │       ├── 📄 Footer.jsx       # Footer component
│   │       └── 📄 Featured.jsx     # Featured items carousel
│   ├── 📄 package.json             # Frontend dependencies
│   ├── 📄 next.config.mjs          # Next.js configuration
│   ├── 📄 tailwind.config.js       # TailwindCSS configuration
│   └── 📄 jsconfig.json            # JavaScript configuration
│
├── 📁 backend/                     # Express.js Backend API
│   ├── 📄 server.js                # Main server file
│   ├── 📁 config/                  # Configuration files
│   │   └── 📄 connection.js        # MongoDB connection
│   ├── 📁 middleware/              # Custom middleware
│   │   └── 📄 auth.js              # JWT authentication middleware
│   ├── 📁 models/                  # MongoDB models
│   │   ├── 📄 User.js              # User schema and model
│   │   ├── 📄 Item.js              # Item schema and model
│   │   └── 📄 Otp.js               # OTP schema and model
│   ├── 📁 routes/                  # API route handlers
│   │   ├── 📄 authentication.js    # Auth endpoints
│   │   └── 📄 item.js              # Item management endpoints
│   ├── 📁 utils/                   # Utility functions
│   │   └── 📄 sendEmail.js         # Email service utilities
│   └── 📄 package.json             # Backend dependencies
│
├── 📄 README.md                    # Project documentation
└── 📄 .gitignore                   # Git ignore rules
```

---

## 🚀 API Documentation

### 🔐 Authentication Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/api/auth/register` | User registration | ❌ |
| `POST` | `/api/auth/login` | User login | ❌ |
| `POST` | `/api/auth/verify-email` | Email verification | ❌ |
| `POST` | `/api/auth/forgot-password` | Password reset request | ❌ |
| `POST` | `/api/auth/reset-password` | Reset password | ❌ |
| `GET` | `/api/auth/me` | Get current user | ✅ |
| `PUT` | `/api/auth/profile` | Update user profile | ✅ |

### 📦 Item Management Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/api/items` | Get all items (with filters) | ❌ |
| `GET` | `/api/items/:id` | Get item by ID | ❌ |
| `POST` | `/api/items/add` | Create new item | ✅ |
| `PUT` | `/api/items/:id` | Update item | ✅ (Owner/Admin) |
| `DELETE` | `/api/items/:id` | Delete item | ✅ (Owner/Admin) |
| `GET` | `/api/items/user/:userId` | Get user's items | ✅ |
| `POST` | `/api/items/:id/swap-request` | Request item swap | ✅ |
| `POST` | `/api/items/:id/redeem` | Redeem item with points | ✅ |

### 👑 Admin Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/api/admin/items/pending` | Get pending item approvals | ✅ (Admin) |
| `PUT` | `/api/admin/items/:id/approve` | Approve item | ✅ (Admin) |
| `PUT` | `/api/admin/items/:id/reject` | Reject item | ✅ (Admin) |
| `GET` | `/api/admin/users` | Get all users | ✅ (Admin) |
| `PUT` | `/api/admin/users/:id/ban` | Ban user | ✅ (Admin) |
| `GET` | `/api/admin/stats` | Get platform statistics | ✅ (Admin) |

### 📊 Example API Requests

#### Register New User
```bash
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123",
  "role": "user"
}
```

#### Add New Item
```bash
POST /api/items/add
Authorization: Bearer <jwt_token>
Content-Type: application/json

{
  "title": "Red Cotton Hoodie",
  "description": "Warm and stylish hoodie, worn only twice",
  "image": "https://example.com/hoodie.jpg",
  "category": "Men",
  "type": "Hoodie",
  "size": "L",
  "condition": "Like New",
  "price": 30,
  "tags": ["winter", "hoodie", "red"]
}
```

#### Request Item Swap
```bash
POST /api/items/123/swap-request
Authorization: Bearer <jwt_token>
Content-Type: application/json

{
  "offeredItemId": "456",
  "message": "Would love to swap my jacket for your hoodie!"
}
```

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 with App Router
- **Styling**: TailwindCSS + Custom CSS
- **Language**: JavaScript (ES6+)
- **UI Components**: Custom components with Headless UI
- **Icons**: React Icons
- **Image Optimization**: Next.js Image component

### Backend
- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **File Upload**: Multer (for future file uploads)
- **Email Service**: Nodemailer
- **Validation**: Express Validator

### Development Tools
- **Version Control**: Git & GitHub
- **Package Manager**: npm
- **Development Server**: Nodemon (backend), Next.js dev server (frontend)
- **Environment Management**: dotenv
- **Code Formatting**: Prettier (recommended)
- **Linting**: ESLint (recommended)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0 or higher
- MongoDB 6.0 or higher
- npm or yarn package manager
- Git

### 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/amannitp131/SwapX.git
   cd SwapX
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   
   # Create environment file
   cp .env.example .env
   # Edit .env with your MongoDB URI and JWT secret
   ```

3. **Setup Frontend**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Configuration**
   
   **Backend (.env)**
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/swapx
   JWT_SECRET=your_super_secure_jwt_secret_here
   JWT_EXPIRE=7d
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASSWORD=your_app_password
   ```

   **Frontend (.env.local)**
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

### 🏃‍♂️ Running the Application

1. **Start MongoDB** (if running locally)
   ```bash
   mongod
   ```

2. **Start Backend Server**
   ```bash
   cd backend
   npm run dev
   # Server runs on http://localhost:5000
   ```

3. **Start Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   # Frontend runs on http://localhost:3000
   ```

4. **Access the Application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - API Documentation: http://localhost:5000/api-docs (if implemented)

---

## 📱 User Journey

### 🎯 For Regular Users
1. **Sign Up** → Email verification → **Login**
2. **Browse Items** → Filter by preferences → **View Details**
3. **List Items** → Upload images → Add descriptions → **Publish**
4. **Request Swaps** → Negotiate → **Complete Exchange**
5. **Earn Points** → **Redeem Items** → Build reputation

### 👑 For Administrators
1. **Admin Login** → Access admin panel
2. **Review Listings** → Approve/Reject items
3. **Monitor Users** → Handle reports → Moderate content
4. **Analytics** → Track platform growth → Generate reports

---

## 🔮 Future Enhancements

### Phase 2 Features
- [ ] **Real-time Chat System** for swap negotiations
- [ ] **Mobile App** (React Native)
- [ ] **AI-Powered Recommendations** based on user preferences
- [ ] **Geolocation Services** for local swap meetups
- [ ] **Rating & Review System** for users and items

### Phase 3 Features
- [ ] **Payment Integration** for coin purchases
- [ ] **Social Features** - Follow users, create wishlists
- [ ] **Advanced Analytics** - Carbon footprint tracking
- [ ] **Multi-language Support** for global expansion
- [ ] **AR Try-On Feature** using device cameras

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### 📋 Contribution Guidelines
- Follow existing code style and conventions
- Write clear commit messages
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

---

## 🐛 Known Issues & Troubleshooting

### Common Issues
1. **CORS Errors**: Ensure backend CORS is configured for frontend URL
2. **Authentication Issues**: Check JWT secret consistency between services
3. **Image Loading**: Verify image URLs are accessible and properly formatted
4. **Database Connection**: Ensure MongoDB is running and connection string is correct

### Debug Mode
Enable debug logging by setting environment variables:
```bash
# Backend
DEBUG=swapx:*

# Frontend
NEXT_PUBLIC_DEBUG=true
```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🏆 Team

<table>
  <tr>
    <td align="center">
      <strong>Aman Mishra</strong><br>
      <em>Full Stack Developer</em><br>
      📧 <a href="mailto:amanmis601@gmail.com">amanmis601@gmail.com</a>
    </td>
    <td align="center">
      <strong>Akash Chandra</strong><br>
      <em>Frontend Developer</em><br>
      📧 <a href="mailto:akashc.ug23.cs@nitp.ac.in">akashc.ug23.cs@nitp.ac.in</a>
    </td>
  </tr>
  <tr>
    <td align="center">
      <strong>Jai Kumar</strong><br>
      <em>Backend Developer</em><br>
      📧 <a href="mailto:jaik.ug23.cs@nitp.ac.in">jaik.ug23.cs@nitp.ac.in</a>
    </td>
    <td align="center">
      <strong>Sumit Kumar</strong><br>
      <em>UI/UX Designer</em><br>
      📧 <a href="mailto:sumitk.ug23.cs@nitp.ac.in">sumitk.ug23.cs@nitp.ac.in</a>
    </td>
  </tr>
</table>

---

## 📞 Support

- 📚 **Documentation**: [Wiki](https://github.com/amannitp131/SwapX/wiki)
- 🐛 **Bug Reports**: [Issues](https://github.com/amannitp131/SwapX/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/amannitp131/SwapX/discussions)
- 📧 **Email**: support@swapx.com

---

<div align="center">

### 🌱 Together, let's make fashion sustainable! 

[![GitHub stars](https://img.shields.io/github/stars/amannitp131/SwapX?style=social)](https://github.com/amannitp131/SwapX)
[![GitHub forks](https://img.shields.io/github/forks/amannitp131/SwapX?style=social)](https://github.com/amannitp131/SwapX)
[![GitHub issues](https://img.shields.io/github/issues/amannitp131/SwapX)](https://github.com/amannitp131/SwapX/issues)

**Made with ❤️ for sustainable fashion**

</div>


