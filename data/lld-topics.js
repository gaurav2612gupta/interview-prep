const lldTopicsData = {
  fundamentals: [
    {
      title: "SOLID Principles",
      category: "OOP Design Principles",
      description: "The 5 bedrock principles of object-oriented design for maintainable, scalable software.",
      keyTakeaways: [
        "Single Responsibility Principle (SRP): A class should have only one reason to change.",
        "Open-Closed Principle (OCP): Software entities should be open for extension, closed for modification.",
        "Liskov Substitution Principle (LSP): Subtypes must be substitutable for their base types without altering correctness.",
        "Interface Segregation Principle (ISP): Prefer many client-specific interfaces over one general-purpose interface.",
        "Dependency Inversion Principle (DIP): Depend upon abstractions, not concrete implementations."
      ],
      resources: [
        { name: "Refactoring Guru - SOLID Principles", url: "https://refactoring.guru/solid-principles" },
        { name: "DigitalOcean SOLID Tutorial", url: "https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design" }
      ]
    },
    {
      title: "Design Patterns",
      category: "Gang of Four (GoF)",
      description: "Reusable solutions to commonly occurring software design problems.",
      patterns: [
        { name: "Factory / Abstract Factory", type: "Creational", usage: "Encapsulating object creation (e.g., PaymentGatewayFactory, VehicleFactory)." },
        { name: "Builder Pattern", type: "Creational", usage: "Constructing complex objects step-by-step (e.g., HttpRequestBuilder, PizzaBuilder)." },
        { name: "Singleton Pattern", type: "Creational", usage: "Ensuring single instance with global access (e.g., DB Connection Pool, Logger)." },
        { name: "Strategy Pattern", type: "Behavioral", usage: "Decoupling algorithms from clients (e.g., PricingStrategy, RouteStrategy)." },
        { name: "Observer Pattern", type: "Behavioral", usage: "Event notification system (e.g., Pub-Sub, NotificationService)." },
        { name: "State Pattern", type: "Behavioral", usage: "Encapsulating state-dependent behavior (e.g., ATM Machine, Vending Machine)." },
        { name: "Decorator Pattern", type: "Structural", usage: "Adding responsibilities dynamically without inheritance (e.g., Coffee Toppings, Pizza Base)." },
        { name: "Adapter Pattern", type: "Structural", usage: "Bridging incompatible interfaces (e.g., 3rd-party Payment Provider Adapter)." },
        { name: "Chain of Responsibility", type: "Behavioral", usage: "Passing requests along a chain of handlers (e.g., Middleware, Logger levels)." }
      ],
      resources: [
        { name: "Refactoring Guru - Design Patterns Catalog", url: "https://refactoring.guru/design-patterns/catalog" },
        { name: "Sourcemaking Design Patterns", url: "https://sourcemaking.com/design_patterns" }
      ]
    },
    {
      title: "Concurrency & Multithreading in LLD",
      category: "System Mechanics",
      description: "Handling multi-threaded execution, state synchronized access, locks, and thread pools.",
      keyTakeaways: [
        "Thread Safety & Mutual Exclusion (ReentrantLock, synchronized keywords, Mutex).",
        "Producer-Consumer Pattern using BlockingQueue & Condition Variables.",
        "ReadWriteLock for high-read/low-write data structures.",
        "Avoiding Race Conditions, Deadlocks (Lock ordering), and Thread Starvation.",
        "Double-Checked Locking pattern for lazy initialization."
      ],
      resources: [
        { name: "Baeldung Java Concurrency Guide", url: "https://www.baeldung.com/java-concurrency" },
        { name: "GeeksforGeeks Multithreading in Java", url: "https://www.geeksforgeeks.org/multithreading-in-java/" }
      ]
    }
  ],

  classicProblems: [
    {
      id: "lld-1",
      title: "Parking Lot System",
      difficulty: "Medium",
      patterns: ["Strategy Pattern", "Factory Pattern", "Singleton"],
      concepts: ["Spot allocation strategy", "Multi-vehicle support", "Pricing strategy", "Payment integration"],
      description: "Design an automated multi-floor parking lot system supporting Car, Bike, Truck with hourly/flat pricing.",
      keyClasses: ["ParkingLot", "ParkingFloor", "ParkingSpot (CarSpot, BikeSpot)", "Vehicle", "Ticket", "PricingStrategy", "Payment"],
      links: [
        { title: "LowLevelDesign.io - Parking Lot", url: "https://lowleveldesign.io/courses/lld/parking-lot" },
        { title: "GitHub Code Reference (Awesome LLD)", url: "https://github.com/ashishps1/awesome-low-level-design" }
      ]
    },
    {
      id: "lld-2",
      title: "Elevator Control System",
      difficulty: "Medium",
      patterns: ["State Pattern", "Strategy Pattern (SCAN / LOOK)", "Observer Pattern"],
      concepts: ["Dispatching algorithms", "Floor request queues", "Direction & state transitions", "Emergency override"],
      description: "Design an optimal elevator management system for a high-rise building with N elevators.",
      keyClasses: ["ElevatorController", "ElevatorCar", "InternalButton", "ExternalButton", "Request", "DispatcherStrategy"],
      links: [
        { title: "Elevator System LLD Walkthrough", url: "https://github.com/tsaiw/LLD-Questions/tree/main/ElevatorSystem" }
      ]
    },
    {
      id: "lld-3",
      title: "BookMyShow / Movie Ticket Booking",
      difficulty: "Hard",
      patterns: ["Singleton", "Factory Pattern", "Strategy Pattern"],
      concepts: ["Seat concurrency lock (2-phase locking / Redis lock)", "Show & Theater search", "Dynamic pricing", "Booking timeout"],
      description: "Design a movie ticket booking platform handling concurrent user seat selections without double-booking.",
      keyClasses: ["Movie", "Theater", "Screen", "Show", "Seat (VIP, Regular)", "Booking", "Payment", "SeatLockManager"],
      links: [
        { title: "BookMyShow LLD Architecture Guide", url: "https://lowleveldesign.io/courses/lld/book-my-show" }
      ]
    },
    {
      id: "lld-4",
      title: "Splitwise / Expense Sharing App",
      difficulty: "Medium",
      patterns: ["Strategy Pattern", "Command Pattern"],
      concepts: ["Expense calculation strategies (Equal, Exact, Percentage)", "Balance tracking graph", "Debt simplification algorithm"],
      description: "Design a group expense sharing application that tracks who owes whom and optimizes transaction settlements.",
      keyClasses: ["User", "Group", "Expense", "Split (EqualSplit, ExactSplit, PercentSplit)", "BalanceSheet", "DebtSimplifier"],
      links: [
        { title: "Splitwise LLD Solution & Code", url: "https://github.com/ashishps1/awesome-low-level-design/tree/main/splitwise" }
      ]
    },
    {
      id: "lld-5",
      title: "Rate Limiter (LLD Implementation)",
      difficulty: "Medium",
      patterns: ["Strategy Pattern", "Factory Pattern"],
      concepts: ["Token Bucket", "Leaky Bucket", "Fixed Window", "Sliding Window Log"],
      description: "Design an in-memory client rate limiter enforcing configurable limits (e.g. 100 requests / minute per client).",
      keyClasses: ["RateLimiter", "TokenBucketRateLimiter", "LeakyBucketRateLimiter", "ClientInfo", "RateLimitRule"],
      links: [
        { title: "Rate Limiter LLD Deep Dive", url: "https://leetcode.com/discuss/interview-question/124558/Design-a-Rate-Limiter" }
      ]
    },
    {
      id: "lld-6",
      title: "Snake and Ladder Game",
      difficulty: "Easy",
      patterns: ["State Pattern", "Singleton"],
      concepts: ["Board setup", "Dice rolling mechanism", "Player turns queue", "Winner condition check"],
      description: "Design an extensible multiplayer Snake and Ladder board game with custom board sizes and special jump elements.",
      keyClasses: ["Game", "Board", "Cell", "Snake", "Ladder", "Player", "Dice"],
      links: [
        { title: "Snake & Ladder LLD Implementation", url: "https://github.com/ashishps1/awesome-low-level-design" }
      ]
    },
    {
      id: "lld-7",
      title: "In-Memory LRU / LFU Cache System",
      difficulty: "Medium",
      patterns: ["Decorator Pattern", "Strategy Pattern"],
      concepts: ["Doubly Linked List + HashMap (LRU O(1))", "Frequency buckets (LFU O(1))", "Thread-safe operations"],
      description: "Design a generic key-value cache supporting custom eviction policies (LRU, LFU, FIFO) and key expiry TTL.",
      keyClasses: ["Cache<K,V>", "EvictionPolicy<K>", "LRUEvictionPolicy", "Node<K,V>", "ConcurrentHashMap"],
      links: [
        { title: "LeetCode 146 - LRU Cache", url: "https://leetcode.com/problems/lru-cache/" },
        { title: "LeetCode 460 - LFU Cache", url: "https://leetcode.com/problems/lfu-cache/" }
      ]
    },
    {
      id: "lld-8",
      title: "ATM Machine System",
      difficulty: "Medium",
      patterns: ["State Pattern", "Chain of Responsibility Pattern"],
      concepts: ["State machine transitions (Idle, Card inserted, PIN verified, Dispensing)", "Cash dispenser chain ($100, $50, $20)"],
      description: "Design an Automated Teller Machine handling card authentication, cash withdrawal, balance query, and cash replenishment.",
      keyClasses: ["ATM", "ATMState (IdleState, HasCardState, SelectOperationState)", "Card", "BankAccount", "CashDispenser"],
      links: [
        { title: "ATM Machine LLD Code & Diagram", url: "https://lowleveldesign.io/courses/lld/atm" }
      ]
    },
    {
      id: "lld-9",
      title: "Logging Framework / Utility",
      difficulty: "Medium",
      patterns: ["Chain of Responsibility", "Observer Pattern", "Singleton"],
      concepts: ["Log levels (INFO, DEBUG, ERROR)", "Log sinks (ConsoleAppender, FileAppender)", "Asynchronous logging buffer"],
      description: "Design an extensible logging library similar to Log4j supporting custom log sinks and formatting.",
      keyClasses: ["Logger", "LogManager", "LogProcessor (InfoLogProcessor, ErrorLogProcessor)", "LogSubject", "LogObserver"],
      links: [
        { title: "Logging Framework Design Guide", url: "https://github.com/tsaiw/LLD-Questions" }
      ]
    },
    {
      id: "lld-10",
      title: "Pub-Sub Messaging Queue (In-Memory)",
      difficulty: "Hard",
      patterns: ["Observer Pattern", "Producer-Consumer Pattern"],
      concepts: ["Topic management", "Subscriber offsets", "Thread pool consumer dispatch", "Retry queue & DLQ"],
      description: "Design an in-memory Pub-Sub system like Kafka/RabbitMQ supporting topic subscription, parallel execution, and message offset tracking.",
      keyClasses: ["MessageQueue", "Topic", "TopicSubscriber", "Message", "SubscriberWorker", "Publisher"],
      links: [
        { title: "In-Memory PubSub LLD Guide", url: "https://github.com/ashishps1/awesome-low-level-design" }
      ]
    },
    {
      id: "lld-11",
      title: "Hotel / Flight Booking System",
      difficulty: "Medium",
      patterns: ["Strategy Pattern", "Factory Pattern", "Builder Pattern"],
      concepts: ["Room inventory availability search", "Dynamic pricing based on season", "Reservation state machine"],
      description: "Design a hotel management platform supporting room search, reservation holds, cancellations, and payment flow.",
      keyClasses: ["Hotel", "Room (Single, Double, Suite)", "Reservation", "User", "SearchCriteria", "PaymentService"],
      links: [
        { title: "Hotel Management LLD", url: "https://lowleveldesign.io/" }
      ]
    },
    {
      id: "lld-12",
      title: "Vending Machine",
      difficulty: "Easy",
      patterns: ["State Pattern"],
      concepts: ["State transitions (Idle, Coin Inserted, Product Selected, Dispensing)", "Inventory inventory management", "Coin change calculation"],
      description: "Design a Vending Machine that accepts cash/coins, dispenses products, and returns exact change.",
      keyClasses: ["VendingMachine", "State (IdleState, HasMoneyState, DispenseState)", "Inventory", "Item", "Coin", "Note"],
      links: [
        { title: "Vending Machine LLD Reference", url: "https://github.com/ashishps1/awesome-low-level-design" }
      ]
    }
  ],

  learningResources: [
    {
      title: "Refactoring Guru",
      description: "The gold standard website for clean code, refactoring principles, and visual Gang of Four design patterns.",
      url: "https://refactoring.guru/"
    },
    {
      title: "Awesome Low Level Design GitHub Repo",
      description: "Curated collection of clean object-oriented design problems with Java/Python implementations.",
      url: "https://github.com/ashishps1/awesome-low-level-design"
    },
    {
      title: "LowLevelDesign.io",
      description: "Interactive course and visual walkthroughs of classic SDE 2 LLD interview problems.",
      url: "https://lowleveldesign.io/"
    },
    {
      title: "NeetCode LLD Playlist",
      description: "Video breakdowns of top LLD interview questions with clean code step-by-step.",
      url: "https://youtube.com/playlist?list=PLot-Xpze53lf5C3HSjCnyFghZDHApGY61"
    },
    {
      title: "Arpit Bhayani System Design Substack",
      description: "In-depth articles explaining core software engineering patterns, databases, and low-level mechanics.",
      url: "https://arpitbhayani.me/blogs"
    }
  ]
};
