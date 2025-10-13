# PulseAI Prep- AI Powered Interview Assistant 

<img width="1903" height="967" alt="image" src="https://github.com/user-attachments/assets/5b7181f0-2bd2-4c89-a5e1-3b528cc4f0ef" />

**Practice real interviews with AI-powered practice and instant feedback.**  
This platform helps candidates prepare for interviews by simulating live sessions with an AI interviewer and providing detailed performance analysis.

🌐 Live Demo: [Deployed Site](https://ai-interview-platform-pink.vercel.app/)


---

## 📑 Table of Contents

1. [Features](#features)  
2. [Tech Stack](#tech-stack)  
3. [Getting Started](#getting-started)  
   - Clone & Install  
   - Environment Variables  
   - Run Dev Servers   
4. [Contributing](#contributing)  
5. [License](#license)  

---



## Features

### Authentication
- Sign up with your details to create an account.  
- Secure login to track interview history and progress.  

### Interview Practice
- Choose from **popular interview presets** (different roles & positions), or start a **custom AI interview** directly.  
- Configure your session:
  - Role you’re applying for  
  - Experience level  
  - Interview type (Technical, Behavioral, or Mixed)  
- Grant **microphone permission** so the AI interviewer can interact with you in real time.  
- Conversation history is displayed at the bottom of the screen.  

### Feedback & Scoring
- Once you finish, the AI generates a **comprehensive feedback report**, including:
  - **Overall Impression score** (e.g., 2/100)  
  - **Interview date & time**  
  - **Detailed breakdown** of:
    - Communication  
    - Problem-Solving  
    - Technical Knowledge  
    - Behavioral Skills  
  - **Strengths & Areas for Improvement**  
- Example feedback:  
  > *"The candidate has potential but needs to work on providing more comprehensive and well-structured answers. Focusing on clarity, detail, and specific examples will improve overall performance."*

### Progress Tracking
- Track all your past interviews and improvements over time from your personal dashboard.  
- View scores, summaries, and AI feedback for each practice session.  

---

## Tech Stack

- **Frontend**: React (Next.js 13+), TypeScript, TailwindCSS  
- **AI**: Gemini (for Q&A generation, evaluation, and feedback)  
- **Voice Assistant**: VAPI for real-time conversational interviews with mic access  
- **Backend**: Firebase (Auth, Firestore, Storage, Functions)  
- **Hosting**: Vercel (frontend) + Firebase Functions (backend APIs)  

---


## Getting Started

### 1. Clone & Install
```bash
git clone https://github.com/TuShArBhArDwA/PulseAI
cd PulseAI
npm install
```

### 2. Environment Variables

Create `.env.local` in the root with:

```bash
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=xxx
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=xxx
NEXT_PUBLIC_FIREBASE_PROJECT_ID=xxx
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=xxx
NEXT_PUBLIC_FIREBASE_APP_ID=xxx

# AI & Voice
GEMINI_API_KEY=your_gemini_key
VAPI_API_KEY=your_vapi_key

# Backend
NEXT_PUBLIC_API_BASE_URL=http://localhost:5001/<project-id>/us-central1/api
```

### 3. Run Dev Servers
```bash
npm run dev        # frontend (Next.js)
firebase emulators:start   # backend (Firestore/Auth/Functions)
```

### 4. Open in browser
```bash
http://localhost:3000
```


---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contact
- **Meet T-Bot** - [Discover My Work](https://t-bot-blush.vercel.app/)
- **Tushar Bhardwaj** - [Portfolio](https://tushar-bhardwaj.vercel.app/)
- **Connect 1:1** - [Topmate](https://topmate.io/tusharbhardwaj)
- **GitHub:** [TuShArBhArDwA](https://github.com/TuShArBhArDwA)
- **LinkedIn:** [Tushar Bhardwaj](https://www.linkedin.com/in/bhardwajtushar2004/)
- **Email:** [tusharbhardwaj2617@example.com](mailto:tusharbhardwaj2617@example.com)
