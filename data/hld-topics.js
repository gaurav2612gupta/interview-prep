const hldTopicsData = {
  buildingBlocks: [
    {
      title: "Load Balancers & Reverse Proxies",
      description: "Distributing network traffic across server farms for high availability, fault tolerance, and load distribution.",
      keyConcepts: [
        "Layer 4 (Transport layer - IP/Port based, e.g., HAProxy, NLB) vs Layer 7 (Application layer - HTTP headers/Path based, e.g., NGINX, ALB).",
        "Load Balancing Algorithms: Round Robin, Weighted Round Robin, Least Connections, IP Hash, Consistent Hashing.",
        "Health Checks, SSL Termination, Reverse Proxy vs Forward Proxy."
      ],
      resources: [
        { name: "System Design Primer - Load Balancing", url: "https://github.com/donnemartin/system-design-primer#load-balancer" },
        { name: "NGINX Load Balancing Guide", url: "https://www.nginx.com/resources/glossary/load-balancing/" }
      ]
    },
    {
      title: "Caching Strategies & CDN",
      description: "Speeding up data access, reducing DB load, and caching static/dynamic assets globally.",
      keyConcepts: [
        "Cache Patterns: Cache-Aside (Lazy Loading), Write-Through, Write-Back (Write-Behind), Write-Around.",
        "Eviction Policies: LRU, LFU, FIFO, TTL-based expiry.",
        "Cache Challenges: Cache Stampede (Thundering Herd), Cache Penetration, Cache Breakdown, Cache Invalidation.",
        "CDN (Content Delivery Network): Edge locations, Push vs Pull CDN, Anycast routing."
      ],
      resources: [
        { name: "Redis Documentation - Cache Patterns", url: "https://redis.io/docs/manual/patterns/" },
        { name: "ByteByteGo Caching Deep Dive", url: "https://bytebytego.com/" }
      ]
    },
    {
      title: "Databases: SQL vs NoSQL, Sharding & Indexing",
      description: "Selecting the right storage engine, indexing mechanisms, scaling strategies, and consistency trade-offs.",
      keyConcepts: [
        "Relational (PostgreSQL, MySQL) vs NoSQL (Document: MongoDB, Key-Value: Redis/Dynamo, Wide-Column: Cassandra, Graph: Neo4j).",
        "Indexing Mechanics: B-Tree / B+Tree (Random I/O read heavy) vs LSM-Tree (Log-Structured Merge Tree - Write heavy).",
        "Database Scaling: Vertical vs Horizontal scaling, Read Replicas (Master-Slave), Database Sharding (Horizontal Partitioning).",
        "Sharding Keys & Challenges: Hotspotting, Cross-shard joins, Distributed transactions."
      ],
      resources: [
        { name: "Designing Data-Intensive Applications (DDIA)", url: "https://dataintensive.net/" },
        { name: "System Design Primer - Databases", url: "https://github.com/donnemartin/system-design-primer#database" }
      ]
    },
    {
      title: "Distributed System Theories (CAP, PACELC, ACID vs BASE)",
      description: "Theoretical bounds governing distributed database behavior, consistency, and partition tolerance.",
      keyConcepts: [
        "CAP Theorem: Consistency, Availability, Partition Tolerance (Pick 2 in presence of a partition).",
        "PACELC Theorem: If Partition (P), trade off Availability (A) vs Consistency (C); Else (E), trade off Latency (L) vs Consistency (C).",
        "ACID (Atomicity, Consistency, Isolation, Durability) vs BASE (Basically Available, Soft-state, Eventual consistency).",
        "Isolation Levels: Read Uncommitted, Read Committed, Repeatable Read, Serializable."
      ],
      resources: [
        { name: "CAP Theorem Simply Explained", url: "https://robertgreiner.com/cap-theorem-explained/" },
        { name: "PACELC Theorem Explanation", url: "https://en.wikipedia.org/wiki/PACELC_theorem" }
      ]
    },
    {
      title: "Message Queues & Asynchronous Streaming",
      description: "Decoupling systems, buffering spikes, enabling event-driven architecture, and async task execution.",
      keyConcepts: [
        "Message Queues (RabbitMQ, SQS) vs Distributed Commit Logs (Kafka, Kinesis).",
        "Push vs Pull model, Topic Partitioning, Consumer Groups, Offsets.",
        "Guarantees: At-most-once, At-least-once, Exactly-once processing (Idempotency requirement).",
        "Dead Letter Queue (DLQ), Backpressure, Event Sourcing."
      ],
      resources: [
        { name: "Apache Kafka Core Concepts", url: "https://kafka.apache.org/documentation/#intro_concepts_and_terms" },
        { name: "RabbitMQ Tutorials", url: "https://www.rabbitmq.com/getstarted.html" }
      ]
    },
    {
      title: "Distributed Consensus & Coordination",
      description: "Algorithms for maintaining global state, distributed locks, leader election, and metadata coordination.",
      keyConcepts: [
        "Consistent Hashing & Virtual Nodes (Chord algorithm, Dynamo ring).",
        "Consensus Protocols: Paxos, Raft (Leader election, Log replication).",
        "Distributed Coordination: Apache ZooKeeper, etcd, Consul.",
        "Distributed Locking: Redis Redlock algorithm, ZooKeeper ephemeral nodes."
      ],
      resources: [
        { name: "Raft Consensus Algorithm Visualizer", url: "https://raft.github.io/" },
        { name: "Consistent Hashing Guide", url: "https://www.toptal.com/big-data/consistent-hashing" }
      ]
    }
  ],

  classicSystems: [
    {
      id: "hld-1",
      title: "Design a URL Shortener (TinyURL)",
      difficulty: "Medium",
      scale: "100 Million URLs / day (~1150 Writes/sec, 10,000 Reads/sec)",
      keyComponents: ["Base62 Encoding", "Key Generation Service (KGS)", "Bloom Filter", "Redis Cache", "SQL DB"],
      description: "Design a scalable service that converts long URLs into short 7-character aliases with analytics and expiration.",
      architectureHighlights: [
        "Base62 conversion [a-zA-Z0-9] gives 62^7 = 3.5 Trillion unique short codes.",
        "Pre-generate short keys in Key Generation Service (KGS) into DB to prevent hash collisions during real-time writes.",
        "Use Redis cache for popular 20% URLs (80/20 Pareto principle) to achieve <10ms response time.",
        "301 Permanent Redirect (Browser caches redirect) vs 302 Temporary Redirect (Server tracks click metrics)."
      ],
      links: [
        { title: "System Design Primer - TinyURL", url: "https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/pastebin/README.md" },
        { title: "ByteByteGo TinyURL Architecture", url: "https://bytebytego.com/" }
      ]
    },
    {
      id: "hld-2",
      title: "Design a Distributed Rate Limiter",
      difficulty: "Medium",
      scale: "10 Million requests / sec across global API Gateways",
      keyComponents: ["Token Bucket", "Sliding Window Counter", "Redis Cluster + Lua Scripting", "API Gateway Middleware"],
      description: "Design a high-throughput distributed rate limiter to protect backend APIs from DoS attacks and abuse.",
      architectureHighlights: [
        "Algorithms comparison: Token Bucket (bursts allowed), Leaky Bucket (smooth rate), Sliding Window Counter (memory efficient).",
        "Use Redis Cluster with atomic Lua scripts to prevent race conditions during concurrent count increments.",
        "Local memory caching at API Gateway with asynchronous Redis syncing to minimize latency overhead.",
        "HTTP 429 Too Many Requests response with Headers: X-Ratelimit-Remaining, X-Ratelimit-Limit, X-Ratelimit-Retry-After."
      ],
      links: [
        { title: "Stripe Rate Limiter Engineering Blog", url: "https://stripe.com/blog/rate-limiters" },
        { title: "ByteByteGo Distributed Rate Limiter", url: "https://bytebytego.com/" }
      ]
    },
    {
      id: "hld-3",
      title: "Design WhatsApp / Real-Time Messenger",
      difficulty: "Hard",
      scale: "2 Billion active users, 100 Billion messages / day",
      keyComponents: ["WebSockets / Gateway", "Presence Service", "Message Queue (Kafka)", "Cassandra DB", "Push Notification (APNS/FCM)"],
      description: "Design a low-latency end-to-end messaging platform supporting 1-on-1 chats, group chats, delivery receipts, and online status.",
      architectureHighlights: [
        "Persistent WebSockets / TCP connections managed by micro-gateways.",
        "Cassandra for message history storage (partition key: conversation_id, cluster key: message_id sequence).",
        "Online/Offline status tracked via Heartbeat service and Redis key expiration.",
        "Group messaging: Fan-out service pushes to group members' WebSocket servers or queues push notifications if offline."
      ],
      links: [
        { title: "WhatsApp Architecture High Scalability", url: "http://highscalability.com/blog/2014/2/26/the-whatsapp-architecture-facebook-bought-for-19-billion.html" },
        { title: "Gaurav Sen Chat Application Video", url: "https://www.youtube.com/watch?v=vvhC64hQZMk" }
      ]
    },
    {
      id: "hld-4",
      title: "Design Netflix / YouTube (Video Streaming)",
      difficulty: "Hard",
      scale: "2 Billion users, 1 Billion video hours watched daily (~10 Tbps bandwidth)",
      keyComponents: ["Video Ingestion & Transcoding", "HLS / DASH Protocols", "CDN Edge Servers", "NoSQL Metadata DB", "Recommendation Engine"],
      description: "Design a global video streaming platform handling video upload, adaptive chunking, multi-resolution encoding, and streaming.",
      architectureHighlights: [
        "Chunking: Uploaded videos are sliced into 2-10 second segments and encoded into multiple resolutions (1080p, 720p, 4K) using ffmpeg.",
        "Adaptive Bitrate Streaming (ABR) via HLS/DASH protocols allowing client video player to dynamically switch resolution based on network speed.",
        "95%+ of video traffic served directly from CDN Edge Nodes (e.g. Netflix Open Connect) to keep latency minimal.",
        "Metadata (titles, tags, user watch history) stored in Cassandra/DynamoDB with Elasticsearch for video discovery."
      ],
      links: [
        { title: "Netflix Tech Blog - Streaming Architecture", url: "https://netflixtechblog.com/" },
        { title: "System Design Primer - YouTube", url: "https://github.com/donnemartin/system-design-primer" }
      ]
    },
    {
      id: "hld-5",
      title: "Design Uber / Ride-Hailing Platform",
      difficulty: "Hard",
      scale: "50 Million daily trips, 5 Million active drivers updating location every 4s",
      keyComponents: ["Geohash / H3 / QuadTree", "Driver Location Service (WebSocket)", "Matchmaking Engine", "Dynamic Surge Pricing", "PostgreSQL PostGIS"],
      description: "Design a real-time location-based ride hailing service matching rider requests with nearby driver locations.",
      architectureHighlights: [
        "Spatial Indexing: Use Uber's H3 Hexagonal spatial index or Geohash stored in Redis for fast geospatial radius queries (e.g., find drivers within 3km).",
        "Driver location updates streamed every 4s over WebSockets to Driver Location Service, buffered in Kafka.",
        "Matchmaking service selects optimal driver based on ETA, driver rating, and proximity using Ring Pop / Distributed Lock.",
        "Surge Pricing: Real-time demand-to-supply ratio calculation per geohash cell."
      ],
      links: [
        { title: "Uber Engineering - How Uber Scales Location Services", url: "https://www.uber.com/blog/engineering/" },
        { title: "Gaurav Sen Uber Architecture Breakdown", url: "https://www.youtube.com/watch?v=J3DY3Te3A_A" }
      ]
    },
    {
      id: "hld-6",
      title: "Design a Distributed Key-Value Store (DynamoDB / Cassandra)",
      difficulty: "Hard",
      scale: "Petabytes of data, Sub-10ms read/write latency at scale",
      keyComponents: ["Consistent Hashing Ring", "Virtual Nodes", "SSTables & LSM Tree", "Gossip Protocol", "Vector Clocks", "Quorum Read/Write"],
      description: "Design a highly available, partitioned, fault-tolerant key-value store modeled after Amazon's Dynamo paper.",
      architectureHighlights: [
        "Partitioning: Consistent Hashing ring with virtual nodes for uniform data distribution across nodes.",
        "Replication & Quorum: N replicas per key. Configurable R (read quorum) + W (write quorum) > N ensures strong consistency.",
        "Storage Engine: LSM-Tree (Memtable in RAM + Write-Ahead Log (WAL) + SSTables on disk) for fast write throughput.",
        "Node Health & Conflict: Gossip protocol for node membership and failure detection; Vector Clocks or Last-Write-Wins (LWW) for conflict resolution."
      ],
      links: [
        { title: "Amazon Dynamo Paper (Classic Reference)", url: "https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf" },
        { title: "Cassandra Architecture Overview", url: "https://cassandra.apache.org/doc/latest/cassandra/architecture/overview.html" }
      ]
    },
    {
      id: "hld-7",
      title: "Design a Web Crawler",
      difficulty: "Medium",
      scale: "1 Billion web pages crawled per month",
      keyComponents: ["URL Frontier", "DNS Resolver Cache", "HTML Fetcher & Parser", "SimHash Duplicate Filter", "Robots.txt Parser"],
      description: "Design a scalable web crawler to download, parse, and store web documents for search indexing.",
      architectureHighlights: [
        "URL Frontier: Priority Queue for crawl depth/importance + Politeness Queue (rate limiting requests to same hostname).",
        "DNS Cache: In-memory DNS cache to avoid blocking on DNS lookups.",
        "Duplicate Content Detection: Use SimHash or Fingerprint algorithm to detect duplicate or near-duplicate web pages before indexing.",
        "Storage: Raw HTML stored in S3/HDFS; Link Graph stored in Graph DB for PageRank."
      ],
      links: [
        { title: "System Design Primer - Web Crawler", url: "https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/web_crawler/README.md" }
      ]
    },
    {
      id: "hld-8",
      title: "Design a Distributed Cache (Redis Cluster)",
      difficulty: "Hard",
      scale: "100 Million keys, Sub-1ms latency",
      keyComponents: ["Hash Slots (16384)", "Master-Replica Nodes", "Redis Sentinel / Gossip", "LRU Eviction", "Async Replication"],
      description: "Design a distributed in-memory caching cluster supporting data sharding, node failover, and high throughput.",
      architectureHighlights: [
        "Sharding: Key CRC16 mod 16384 determines which Hash Slot and master node owns the key.",
        "High Availability: Each master node has 1 or more replica nodes; automatic failover using Sentinel election when master drops.",
        "Cache Stampede Protection: Use Mutex locking or Probabilistic Early Expiration (XFetch algorithm).",
        "Data Persistence: RDB snapshots + AOF (Append-Only File) for persistence on restart."
      ],
      links: [
        { title: "Redis Cluster Specification", url: "https://redis.io/docs/reference/cluster-spec/" }
      ]
    },
    {
      id: "hld-9",
      title: "Design a Distributed Notification System",
      difficulty: "Medium",
      scale: "100 Million notifications / day (APNS, FCM, Email, SMS)",
      keyComponents: ["Notification Server", "Message Queue (Kafka)", "Worker Pool", "Idempotency Service", "User Preferences DB"],
      description: "Design a multi-channel notification engine delivering alerts, promotional messages, and transactional emails.",
      architectureHighlights: [
        "Multi-Channel Adapters: Separate worker pools for iOS (APNS), Android (FCM), Email (SendGrid/SES), and SMS (Twilio).",
        "Rate Limiting & User Preferences: Filter opt-outs and throttle max notifications per user per hour.",
        "Idempotency: Deduplication key (notification_id) stored in Redis to prevent sending duplicate push messages.",
        "Retry Mechanism: Exponential backoff with Dead Letter Queue for failed third-party provider calls."
      ],
      links: [
        { title: "ByteByteGo Notification System Architecture", url: "https://bytebytego.com/" }
      ]
    },
    {
      id: "hld-10",
      title: "Design E-Commerce Flash Sale System (Amazon / Flipkart)",
      difficulty: "Hard",
      scale: "100,000 requests/sec for 1,000 inventory items",
      keyComponents: ["Redis Stock Pre-allocation", "Kafka Order Queue", "Inventory Service", "DB Row Locking", "Payment Webhooks"],
      description: "Design a flash-sale purchasing service handling extreme concurrency spikes without overselling inventory.",
      architectureHighlights: [
        "Pre-sale warm-up: Load sale inventory into Redis keys using atomic `DECR` operations.",
        "Async Order Creation: Successful Redis deduction pushes order payload to Kafka topic; user receives 'Order Pending' response immediately.",
        "DB Concurrency: Order workers process queue messages using optimistic locking (`UPDATE stock SET count = count - 1 WHERE item_id = X AND count > 0`).",
        "Hold Expiry: Reserve stock for 10 minutes; if payment webhook fails or times out, release stock back into Redis pool."
      ],
      links: [
        { title: "Designing Flash Sale Architecture", url: "https://arpitbhayani.me/blogs/flash-sale" }
      ]
    },
    {
      id: "hld-11",
      title: "Design Distributed Unique ID Generator (Snowflake)",
      difficulty: "Easy",
      scale: "10,000 IDs / sec per machine, 64-bit sortable integers",
      keyComponents: ["Timestamp bits", "DataCenter & Worker ID bits", "Sequence Counter bits", "NTP Clock Sync"],
      description: "Design a distributed, highly available service generating globally unique 64-bit time-ordered IDs without database coordination.",
      architectureHighlights: [
        "64-Bit Structure: 1 bit sign | 41 bits Epoch Timestamp (~69 years) | 10 bits Worker/Datacenter ID (1024 nodes) | 12 bits Sequence number (4096 IDs/ms per node).",
        "Key Benefits: K-sortable by creation time, fit in standard 64-bit integer, no network round-trip to database.",
        "Clock Drift Mitigation: If local NTP clock moves backwards, wait until clock catches up or throw an exception."
      ],
      links: [
        { title: "Twitter Snowflake Original Blog & Code", url: "https://github.com/twitter-archive/snowflake" }
      ]
    },
    {
      id: "hld-12",
      title: "Design Twitter / News Feed System",
      difficulty: "Hard",
      scale: "300 Million active users, 500 Million tweets/day, Read:Write ratio 100:1",
      keyComponents: ["Fan-out on Write vs Read", "Hybrid Fan-out Model", "Redis Timeline Cache", "Social Graph DB", "Ranking Algorithm"],
      description: "Design a newsfeed service publishing real-time user updates, tweets, and timeline aggregations.",
      architectureHighlights: [
        "Push Model (Fan-out on Write): When user posts tweet, append tweet_id to all followers' Redis timeline cache. Fast reads O(1), but slow for celebrity users with 50M followers.",
        "Pull Model (Fan-out on Read): Followers fetch tweets on-demand when opening feed. Fast writes, but slow read latency.",
        "Hybrid Approach: Push model for standard users (<10k followers); Pull model for celebrity users (Celebrities' tweets fetched and merged at read time).",
        "Cache Storage: In-memory Redis list storing top 800 tweet IDs per user timeline."
      ],
      links: [
        { title: "System Design Primer - Twitter", url: "https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/twitter/README.md" }
      ]
    }
  ],

  frameworkChecklist: [
    {
      step: "1. Clarify Requirements & Scope (5 mins)",
      details: [
        "Ask clarifying questions to narrow down features.",
        "Define Functional Requirements (e.g. User can short URL, User gets redirected).",
        "Define Non-Functional Requirements (High Availability vs Strong Consistency, Scale: 100M DAU, Latency < 100ms, SLA 99.99%)."
      ]
    },
    {
      step: "2. Back-of-the-Envelope Estimation (5 mins)",
      details: [
        "Traffic: Calculate QPS (Queries Per Second) = Daily Active Users * Requests / 86400.",
        "Peak QPS: Typically 2x to 5x of Average QPS.",
        "Storage: Data size per request * Daily requests * 365 * 5 years.",
        "Bandwidth: Incoming QPS * Payload size & Outgoing QPS * Response size.",
        "Memory/Cache: 20% of hot daily requests * size (80/20 rule)."
      ]
    },
    {
      step: "3. Define System APIs & Data Schemas (5 mins)",
      details: [
        "Design clear REST / gRPC API contracts (e.g. `createShortUrl(api_key, original_url, custom_alias)`).",
        "Choose Database type: Relational SQL (ACID, complex queries) vs NoSQL Key-Value/Document (Horizontal scaling, key lookups).",
        "Draft database schema table definitions and indexes."
      ]
    },
    {
      step: "4. High-Level Design Architecture (10-15 mins)",
      details: [
        "Draw block diagram: Client -> CDN / DNS -> Load Balancer -> API Gateway -> Application Services -> Cache -> Database -> Message Queue.",
        "Walk through the main end-to-end user request flow step-by-step."
      ]
    },
    {
      step: "5. Detailed Deep Dive & Bottlenecks (10-15 mins)",
      details: [
        "Identify system single points of failure (SPOF).",
        "Address scaling: Database sharding key selection, cache invalidation, queue backpressure.",
        "Discuss edge cases: Concurrent race conditions, network partitions, clock drift, data recovery."
      ]
    }
  ],

  resources: [
    {
      name: "System Design Primer (GitHub)",
      description: "The most famous open-source repository for learning high-level system design with diagrams and solutions.",
      url: "https://github.com/donnemartin/system-design-primer"
    },
    {
      name: "ByteByteGo System Design Channel & Book",
      description: "Illustrated system design breakdowns by Alex Xu, covering real-world architecture.",
      url: "https://bytebytego.com/"
    },
    {
      name: "Designing Data-Intensive Applications (DDIA)",
      description: "The seminal book by Martin Kleppmann on databases, replication, distributed state, and reliability.",
      url: "https://dataintensive.net/"
    },
    {
      name: "High Scalability Blog",
      description: "Real-world architecture case studies of Amazon, Netflix, Uber, YouTube, and Slack.",
      url: "http://highscalability.com/"
    },
    {
      name: "Gaurav Sen System Design YouTube",
      description: "Video breakdowns of microservices, caching, distributed locks, and real system design problems.",
      url: "https://www.youtube.com/c/GauravSensei"
    },
    {
      name: "Arpit Bhayani System Design",
      description: "Deep technical articles on database internals, distributed systems, and low-level mechanics.",
      url: "https://arpitbhayani.me/blogs"
    }
  ]
};
