const roadmapData = {
  overview: {
    targetRole: "Software Development Engineer II (SDE 2 / Senior SDE)",
    timeline: "10 - 12 Weeks (Structured Prep Plan)",
    expectationsSDE2: [
      {
        title: "Problem Solving & DSA",
        desc: "Solve Medium/Hard LeetCode problems cleanly in 25-30 minutes with optimal time & space complexity, clean modular code, and edge case handling."
      },
      {
        title: "Low-Level Design (LLD)",
        desc: "Demonstrate clean object-oriented architecture, SOLID design principles, GoF design patterns, concurrency safety, and extensible code structures."
      },
      {
        title: "High-Level Design (HLD)",
        desc: "Architect scalable distributed systems handling high QPS, data partitioning, trade-offs (CAP/PACELC), caching strategy, database selection, and fault tolerance."
      },
      {
        title: "Ownership & Behavioral",
        desc: "Articulate past engineering impact using STAR method, technical trade-offs made, architectural decisions, conflict resolution, and leadership principles."
      }
    ]
  },

  weeks: [
    {
      weekNumber: "Weeks 1 - 2",
      title: "Arrays, Strings, Two Pointers & Basic LLD Concepts",
      dsaGoal: "Complete 35+ Problems (Arrays, Hashing, Two Pointers, Sliding Window)",
      lldGoal: "Master SOLID Principles & Creational Design Patterns (Factory, Builder, Singleton)",
      hldGoal: "Study Networking Basics, HTTP vs WebSockets, Load Balancers (L4 vs L7)",
      actionItems: [
        "Solve LeetCode Top 75 Array & Window problems.",
        "Implement Factory & Builder pattern in clean Java/Python code.",
        "Draw class diagrams for basic OOP problems."
      ]
    },
    {
      weekNumber: "Weeks 3 - 4",
      title: "Stacks, Queues, Binary Search & Structural Patterns",
      dsaGoal: "Complete 35+ Problems (Stack, Monotonic Queue, Binary Search on Answer)",
      lldGoal: "Master Structural Design Patterns (Adapter, Decorator, Facade) & LRU Cache LLD",
      hldGoal: "Master Caching Patterns (Cache-Aside, Write-Through), Redis, and CDN",
      actionItems: [
        "Solve Monotonic Stack (Largest Rectangle in Histogram) & Binary Search (Koko Eating Bananas).",
        "Implement in-memory LRU / LFU cache from scratch with unit tests.",
        "Study Cache stampede and Cache penetration prevention strategies."
      ]
    },
    {
      weekNumber: "Weeks 5 - 6",
      title: "Trees, BST, Tries & Classic LLD (Parking Lot, Elevator)",
      dsaGoal: "Complete 40+ Problems (Binary Trees, BST, LCA, Tree DP, Tries)",
      lldGoal: "Complete Parking Lot System & Elevator System LLD",
      hldGoal: "Master Database Storage (SQL vs NoSQL, B-Tree vs LSM-Tree, Sharding)",
      actionItems: [
        "Solve Tree LCA, Serialize/Deserialize Tree, and Trie Prefix Search.",
        "Code end-to-end Parking Lot System with extensible pricing strategy.",
        "Understand Sharding key selection and database read replica synchronization."
      ]
    },
    {
      weekNumber: "Weeks 7 - 8",
      title: "Graphs, Heaps & High Concurrency LLD (BookMyShow, Rate Limiter)",
      dsaGoal: "Complete 45+ Problems (BFS/DFS, Dijkstra, Topological Sort, Union-Find, Heaps)",
      lldGoal: "Complete BookMyShow, Splitwise & In-Memory PubSub LLD",
      hldGoal: "Master CAP Theorem, Message Queues (Kafka/RabbitMQ) & Distributed Rate Limiter HLD",
      actionItems: [
        "Solve Course Schedule II, Alien Dictionary, Network Delay Time, and Median Stream.",
        "Handle concurrency seat locking mechanism in BookMyShow LLD.",
        "Design Distributed Rate Limiter HLD with Redis Lua script atomic ops."
      ]
    },
    {
      weekNumber: "Weeks 9 - 10",
      title: "Dynamic Programming, Backtracking & Real-World System Design",
      dsaGoal: "Complete 50+ Problems (1D, 2D DP, Interval DP, Backtracking)",
      lldGoal: "Complete ATM Machine, Logging Framework & Vending Machine LLD",
      hldGoal: "Design WhatsApp, Uber, Netflix, and Distributed Key-Value Store (DynamoDB)",
      actionItems: [
        "Solve Edit Distance, Word Break, Coin Change, and N-Queens.",
        "Apply State Pattern to ATM Machine and Vending Machine LLD.",
        "Perform mock HLD design for Uber spatial indexing and Netflix video ingestion pipeline."
      ]
    },
    {
      weekNumber: "Weeks 11 - 12",
      title: "Mock Interviews, Revision & Behavioral Prep (STAR Method)",
      dsaGoal: "Revise Bookmarked/Hard Problems & Speed Drills (25 mins per question)",
      lldGoal: "Timed 45-min LLD Whiteboarding Drills",
      hldGoal: "End-to-End Timed HLD Mock Interviews",
      actionItems: [
        "Practice 5-6 Mock Interviews on platforms like Pramp / Interviewing.io or peer practice.",
        "Draft 8 STAR method stories for behavioral rounds (Technical conflict, Failure, Leadership).",
        "Final review of system estimation blueprints and cheat sheets."
      ]
    }
  ],

  interviewRounds: [
    {
      round: "Round 1: Problem Solving & DSA Coding",
      duration: "45 - 60 Mins",
      focus: "2 Medium or 1 Hard LeetCode problem. Focus on Time/Space complexity, edge cases, dry running.",
      proTips: "Talk out loud constantly. State brute force first, then optimize. Never code immediately without agreeing on approach."
    },
    {
      round: "Round 2: Data Structures & Algorithms Deep Dive",
      duration: "45 - 60 Mins",
      focus: "Advanced Data Structures (Graphs, DP, Trees, Monotonic Stacks, Advanced Binary Search).",
      proTips: "Write clean, modular code with descriptive variable names. Verify constraints and test with boundary examples."
    },
    {
      round: "Round 3: Low-Level Design (LLD) / Object-Oriented Design",
      duration: "60 Mins",
      focus: "Designing extensible class diagrams, SOLID design principles, design patterns, concurrency safety.",
      proTips: "Clarify requirements first, identify entities, draw class diagram or list relationships, then write executable code."
    },
    {
      round: "Round 4: High-Level Design (HLD) / System Design",
      duration: "60 Mins",
      focus: "Scalability, distributed architecture, database choice, API contracts, bottle-necks, CAP trade-offs.",
      proTips: "Follow the 5-step framework. Don't jump into drawing boxes before clarifying requirements and QPS estimates."
    },
    {
      round: "Round 5: Hiring Manager / Behavioral & Leadership",
      duration: "45 - 60 Mins",
      focus: "Past project impact, architecture decisions, technical disagreements, leadership & ownership.",
      proTips: "Use the STAR method (Situation, Task, Action, Result). Highlight your specific contribution and quantifiable impact."
    }
  ]
};
