# 🚀 SDE 2 Interview Mastery Hub

An interactive, high-performance preparation dashboard for **Software Development Engineer II (SDE 2 / Senior SDE)** interviews at top tech companies (*Amazon, Google, Meta, Microsoft, Uber, Apple, Swiggy, Atlassian*). 

This repository contains a comprehensive **DSA Question Tracker (230+ Curated LeetCode Problems)**, **Low-Level Design (LLD / Machine Coding) Guide**, **High-Level Design (HLD / Distributed Systems) Blueprint**, and a **12-Week Structured Roadmap**.

---

## 🌟 Key Features

### 🧩 1. Data Structures & Algorithms Tracker (230+ Questions)
- **12 Core Categories**: Arrays & Hashing, Two Pointers & Sliding Window, Monotonic Stack & Queue, Binary Search, Linked Lists, Trees & BSTs, Tries, Heaps / Priority Queue, Graphs (BFS, DFS, Dijkstra, Union-Find), Dynamic Programming (1D, 2D, Grid), Greedy & Backtracking, Bit Manipulation & Math.
- **Direct LeetCode Links**: One-click access to every problem on LeetCode.
- **Difficulty Badges & Company Tags**: Tagged by difficulty (*Easy, Medium, Hard*) and target company interview frequency.
- **Interactive Progress Tracking**: Check off completed problems with instant progress state persistence in `localStorage`.
- **Search & Multi-Filters**: Filter by problem title, problem ID (e.g., `#42`), difficulty, completion status (*Done / Pending*), or company (*e.g., Amazon, Google*).
- **Personal Problem Notes**: Save custom notes, edge case observations, or solution links per problem.

### 🏗️ 2. Low-Level Design (LLD) & Machine Coding
- **SOLID Principles**: Comprehensive guide to Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion.
- **Gang of Four (GoF) Design Patterns**: Creational (*Factory, Builder, Singleton*), Structural (*Adapter, Decorator, Facade*), and Behavioral (*Strategy, Observer, State, Chain of Responsibility*).
- **Multithreading & Concurrency**: Locks, synchronization, thread safety, producer-consumer queues, and deadlock avoidance.
- **12 Classic Machine Coding Problems**:
  1. Parking Lot System
  2. Elevator Control System
  3. BookMyShow / Movie Ticket Booking (Concurrent Seat Lock)
  4. Splitwise / Expense Sharing App
  5. In-Memory Rate Limiter (LLD)
  6. Snake and Ladder Board Game
  7. In-Memory Cache (LRU / LFU)
  8. ATM Machine System (State Pattern)
  9. Logging Framework / Utility
  10. In-Memory Pub-Sub Messaging Queue
  11. Hotel / Flight Booking System
  12. Vending Machine

### 🌐 3. High-Level Design (HLD) & Distributed Systems
- **Core Building Blocks**: Load Balancers (L4 vs L7), Caching Strategies & CDN, Databases (SQL vs NoSQL, Indexing, Sharding), Distributed Theories (*CAP Theorem, PACELC, ACID vs BASE*), Message Queues (*Kafka, RabbitMQ*), and Distributed Consensus (*Consistent Hashing, Paxos/Raft*).
- **12 Real-World Distributed Architecture Systems**:
  1. URL Shortener (*TinyURL*)
  2. Distributed Rate Limiter (*Redis Lua*)
  3. WhatsApp / Messenger (*WebSockets & Cassandra*)
  4. Video Streaming Service (*Netflix / YouTube HLS/DASH*)
  5. Ride Sharing Service (*Uber / Lyft H3 Spatial Index*)
  6. Distributed Key-Value Store (*DynamoDB / Cassandra*)
  7. Distributed Web Crawler
  8. Distributed Cache (*Redis Cluster Hash Slots*)
  9. Distributed Notification Engine
  10. E-Commerce Flash Sale System
  11. Distributed Unique ID Generator (*Twitter Snowflake*)
  12. Twitter / Instagram News Feed (*Fan-out Push/Pull*)
- **5-Step HLD Interview Framework**: Requirements clarification, back-of-the-envelope estimation, API & DB schema design, high-level architecture diagramming, and bottleneck deep-dives.

### 🗺️ 4. 12-Week Structured Preparation Roadmap
- A week-by-week game plan balancing DSA problem solving, LLD machine coding, HLD architecture design, and behavioral STAR method interview preparation.

### 💾 5. Progress Backup & Restore
- Export your study progress and notes to a `.json` backup file anytime and restore it easily across devices.

---

## 💻 How to Run Locally

No external build tools or node dependencies required! The app is lightweight, portable, and built with Vanilla JavaScript, HTML5, and CSS3.

### Option 1: Direct Browser Opening
Simply double click or open [`index.html`](file:///Users/gaurav/workspace/job-switch/index.html) in any modern web browser (*Chrome, Safari, Firefox, Edge*).

### Option 2: Local Dev Server
```bash
# Clone the repository
git clone https://github.com/gaurav2612gupta/interview-prep.git
cd interview-prep

# Run using Python 3
python3 -m http.server 8080

# Or run using Node http-server
npx http-server . -p 8080
```
Open [http://localhost:8080](http://localhost:8080) in your browser.

---

## 📁 Repository Structure

```
.
├── index.html            # Main Dashboard Application Layout
├── styles.css            # Dark Mode Glassmorphism CSS Design System
├── app.js                # Core JS logic, state management & local storage
├── data/
│   ├── dsa-questions.js  # 230+ Curated LeetCode Problems Dataset
│   ├── lld-topics.js     # LLD Principles, Design Patterns & 12 Machine Coding Problems
│   ├── hld-topics.js     # HLD Concepts, System Architectures & Framework
│   └── roadmap-data.js   # 12-Week SDE 2 Preparation Roadmap & Interview Tips
└── README.md             # Documentation & Guide
```

---

## 🎯 Target Role & Companies
- **Target Role**: SDE 2 / Senior Software Engineer / Member of Technical Staff (MTS 2)
- **Target Companies**: Amazon, Google, Meta, Microsoft, Uber, Swiggy, Flipkart, Atlassian, Stripe, Salesforce, Adobe.

---

## 📄 License
Licensed under the [MIT License](LICENSE). Feel free to fork, customize, and use this dashboard for your own interview preparation!
