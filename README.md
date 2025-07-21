# Intelliphic Website - Public Frontend Only

## Overview
This website has been simplified to be a public-facing frontend only. All backend and admin functionality has been completely removed, resulting in a lightweight, static website that's easy to deploy.

## Changes Made
- Removed backend server and API endpoints
- Removed all admin functionality and components
- Eliminated mock data and API utilities
- Simplified dependencies in package.json
- Streamlined the app to public pages only

## How to Use

### Running the Application
```
npm install
npm run dev
```

### Available Pages
- Home (`/`)
- About (`/about`)
- Services (`/services`)
- Projects (`/projects`)
- Developers (`/developers`) 
- Careers (`/careers`)
- Contact (`/contact`)
- Privacy Policy (`/privacy`)
- Terms of Service (`/terms`)

## Building for Production
```
npm run build
```
This will create a production-ready build in the `dist` directory that you can deploy to any static file hosting service.

## Deployment
After building, the contents of the `dist` directory can be deployed to any static hosting service such as:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Firebase Hosting
