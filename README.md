# Ejeh Save Lives - Blood Donation App

## Overview
**Ejeh Save Lives** is a modern, user-friendly blood donation platform built to connect **donors**, **hospitals**, and **blood banks**. The app facilitates blood donation by allowing individuals to register as donors, find nearby donation centers, and schedule appointments, while enabling hospitals and blood banks to manage blood inventory and request donations. With a visually appealing UI powered by GSAP animations, the app ensures an engaging experience for all users.

This project is a frontend application built with **React**, **TypeScript**, and **Vite**, with plans for backend integration to support real-time data and authentication.

## Features

### For Donors (Persons)
- **Donor Registration**: Sign up with personal details and blood type.
- **Find Donation Centers**: Locate nearby blood banks or hospitals using a searchable list (powered by Axios API calls).
- **Appointment Scheduling**: Book donation slots with date and time (formatted using Moment.js).
- **Donation History**: View past donations and track impact (managed via Redux state).
- **Animated UI**: Smooth animations for hero sections, buttons, and lists (using GSAP).

### For Hospitals
- **Blood Request System**: Request specific blood types from blood banks.
- **Inventory Dashboard**: View available blood units (planned backend integration).
- **Donor Communication**: Notify donors of urgent needs (future feature).
- **Real-Time Updates**: Fetch blood availability data via Axios.

### For Blood Banks
- **Inventory Management**: Track blood stock by type (e.g., A+, O-).
- **Donor Management**: Register and manage donor profiles.
- **Appointment Management**: Approve or reschedule donor appointments.
- **API Integration**: Sync inventory with hospitals (planned).

## Tech Stack
- **Frontend**: React, TypeScript, Vite
- **State Management**: Redux, @reduxjs/toolkit
- **Routing**: react-router-dom
- **API Requests**: Axios
- **Animations**: GSAP (GreenSock Animation Platform)
- **Date Handling**: Moment.js
- **Styling**: Custom CSS (with plans for Tailwind CSS or Material-UI)
- **Development Tools**: VS Code, npm

## Project Structure
```
frontend-ejeh-save-lives/
├── public/                 # Static assets (e.g., logo, favicon)
├── src/                    # Source code
│   ├── assets/             # Images, SVGs (e.g., blood drop)
│   ├── components/         # Reusable React components
│   ├── pages/              # Page components (Home, Donate, About)
│   ├── store/              # Redux store and slices
│   ├── App.tsx             # Main app with routing
│   ├── main.tsx            # Entry point
│   ├── App.css             # Global styles
│   └── index.css           # Root styles
├── .eslintrc.json          # ESLint configuration
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
├── package.json            # Dependencies and scripts
└── README.md               # Project documentation
```

## Getting Started

### Prerequisites
- **Node.js**: Version ≥ 14.0.0 (includes npm)
- **VS Code**: Recommended for development with extensions like ESLint, Prettier, and #region Folding.

### Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/frontend-ejeh-save-lives.git
   cd frontend-ejeh-save-lives
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   - Opens the app at `http://localhost:5173`.

### Scripts
- `npm run dev`: Start the Vite development server.
- `npm run build`: Build the app for production.
- `npm run preview`: Preview the production build locally.
- `npm run lint`: Run ESLint for code linting.

## Usage

1. **Navigate the App**:
   - **Home**: View the hero section with GSAP animations (`opacity: 0, xPercent: -40`).
   - **Donate**: Find donation centers via Axios (mock API or static JSON).
   - **About**: See upcoming blood drives with Moment.js-formatted dates.

2. **Manage State**:
   - Use Redux to track donation counts or user data (`src/store/donationSlice.ts`).

3. **Customize Animations**:
   - Edit GSAP animations in `src/pages/Home.tsx` or other components.

## Planned Features
- **Backend Integration**: Node.js/Express API for real-time inventory and authentication.
- **User Authentication**: Login for donors, hospitals, and blood banks.
- **Push Notifications**: Notify donors of urgent blood needs.
- **Map Integration**: Show donation centers on a map (e.g., using Leaflet).
- **Responsive Design**: Optimize for mobile devices with Tailwind CSS.

## Contributing
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/new-feature`).
3. Commit changes (`git commit -m "Add new feature"`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a pull request.

## License
This project is licensed under the MIT License.

## Contact
- **Project Maintainer**: [Your Name] (your.email@example.com)
- **GitHub**: [your-username/frontend-ejeh-save-lives](https://github.com/your-username/frontend-ejeh-save-lives)

## Acknowledgments
- Inspired by blood donation platforms like American Red Cross and NHS Blood and Transplant.
- Built with love for saving lives through technology.