# Description

Project from Udemy course - Complete React Developer

# Folder structure

```
└── react-cloth-store
    └── package-lock.json
    └── package.json
    └── public
    └── src
        └── assets
        └── components
        └── contexts
        └── routes
        └── utils
            └── firebase
```

# How to run locally

```bash
npm install
```

Runs the app in the development mode.\

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# Using your own firebase

To use your own firebase, change the `firebaseConfig` constant in the src\utils\firebase\firebase.js file to your own fireabse configuration

```javascript
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};
```
