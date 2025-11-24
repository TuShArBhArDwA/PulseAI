# PulseAI Prep- AI Powered Interview Assistant 

<img width="1903" height="967" alt="image" src="https://github.com/user-attachments/assets/5b7181f0-2bd2-4c89-a5e1-3b528cc4f0ef" />

**Practice real interviews with AI-powered practice and instant feedback.**  
This platform helps candidates prepare for interviews by simulating live sessions with an AI interviewer and providing detailed performance analysis.



🌐 Live Demo: [Deployed Site](https://ai-interview-platform-pink.vercel.app/)


---

## Table of Contents

1. [Features](#features)
   - [Authentication](#authentication)  
   - [Interview Practice](#interview-practice)  
   - [Feedback & Scoring](#feedback--scoring)
   - [Progress Tracking](#progress-tracking) 
2. [System Architecture Overview](#system-architecture-overview)
   - [High Level Architecture](#high-level-architecture)  
   - [Interview Conversation Workflow](#interview-conversation-workflow)   
3. [Agent Intelligence & Persona Handling](#agent-intelligence--persona-handling)  
4. [Design Decisions & Reasoning](#design-decisions--reasoning)  
5. [UI/UX Design](#uiux-design)  
6. [Tech Stack](#tech-stack)  
7. [Getting Started](#getting-started)  
   - [Clone & Install](#1-clone--install)  
   - [Environment Variables](#2-environment-variables)  
   - [Run Dev Servers](#3-run-dev-servers)  
8. [Demo Video](#demo-video)  
9. [License](#license)  
10. [Contact](#contact)


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


## System Architecture Overview

> Below are the architecture notes describing how PulseAI processes voice conversations, evaluates answers, and stores interview results.


### High Level Architecture


> User → Vapi Voice Agent → Backend API → Gemini LLM → Firestore DB → Back to User


![System Architecture](https://github.com/user-attachments/assets/3e6a800d-ca09-4a43-bef4-3913a6a1563b)


### Interview Conversation Workflow

<img width="308" height="904" alt="Voice Agent Workflow" src="https://github.com/user-attachments/assets/1a3201ad-8db7-4e1c-b0c6-db142df946a1" />

---

## Agent Intelligence & Persona Handling

PulseAI goes beyond basic Q&A by adapting to different user behaviors:

| Persona Type | Agent Response |
|-------------|----------------|
| Confused User | Guides with role suggestions & clarifying questions |
| Efficient User | Shorter interviews, direct questions, less small talk |
| Chatty User | Acknowledges but steers conversation back to topic |
| Edge Case User | Handles impossible or off-topic requests politely |

> Each response is generated based on the user's intent and interview progress.

---


## Design Decisions & Reasoning

- Chose **voice-first** approach to improve realism and confidence building
- Used **Gemini** for detailed interview scoring and follow-up logic
- **Firestore** stores all interview history to track progress over time
- Stateless computing through serverless Firebase Functions for scalability
- Minimal UI, optimized for quick practice sessions


---

## UI/UX Design 

The design for this project was first prototyped in Figma.

🔗 Figma Design: [View Design](https://www.figma.com/design/6BcssTD1cY8k0vCaxccGLL/PulseAI-Prep?node-id=2-2&t=RKX50xQv1kFbrAFI-1)



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

## Demo Video

Watch the product demonstration showcasing multiple personas, adaptive interviews, and feedback:

Video:

https://github.com/user-attachments/assets/47ea40f3-0f25-4667-9bd9-0b329a23cf12





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
