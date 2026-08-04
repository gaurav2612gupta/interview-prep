const dsaTopicsData = [
  {
    id: "arrays-hashing",
    name: "Arrays & Hashing",
    description: "Fundamental data structures for frequency counting, prefix sums, and O(1) lookups.",
    icon: "array",
    questions: [
      { id: 1, title: "Two Sum", difficulty: "Easy", link: "https://leetcode.com/problems/two-sum/", company: ["Amazon", "Google", "Meta", "Microsoft"] },
      { id: 217, title: "Contains Duplicate", difficulty: "Easy", link: "https://leetcode.com/problems/contains-duplicate/", company: ["Apple", "Amazon"] },
      { id: 242, title: "Valid Anagram", difficulty: "Easy", link: "https://leetcode.com/problems/valid-anagram/", company: ["Uber", "Google"] },
      { id: 49, title: "Group Anagrams", difficulty: "Medium", link: "https://leetcode.com/problems/group-anagrams/", company: ["Amazon", "Meta", "Affirm"] },
      { id: 347, title: "Top K Frequent Elements", difficulty: "Medium", link: "https://leetcode.com/problems/top-k-frequent-elements/", company: ["Amazon", "Meta", "Uber"] },
      { id: 238, title: "Product of Array Except Self", difficulty: "Medium", link: "https://leetcode.com/problems/product-of-array-except-self/", company: ["Amazon", "Apple", "Google", "Asana"] },
      { id: 36, title: "Valid Sudoku", difficulty: "Medium", link: "https://leetcode.com/problems/valid-sudoku/", company: ["Uber", "Apple"] },
      { id: 271, title: "Encode and Decode Strings", difficulty: "Medium", link: "https://leetcode.com/problems/encode-and-decode-strings/", company: ["Google", "Meta"] },
      { id: 128, title: "Longest Consecutive Sequence", difficulty: "Medium", link: "https://leetcode.com/problems/longest-consecutive-sequence/", company: ["Google", "Spotify", "Amazon"] },
      { id: 560, title: "Subarray Sum Equals K", difficulty: "Medium", link: "https://leetcode.com/problems/subarray-sum-equals-k/", company: ["Meta", "Amazon", "Google"] },
      { id: 169, title: "Majority Element", difficulty: "Easy", link: "https://leetcode.com/problems/majority-element/", company: ["Amazon", "Microsoft"] },
      { id: 18, title: "4Sum", difficulty: "Medium", link: "https://leetcode.com/problems/4sum/", company: ["Amazon", "Apple"] },
      { id: 75, title: "Sort Colors", difficulty: "Medium", link: "https://leetcode.com/problems/sort-colors/", company: ["Microsoft", "Amazon", "Swiggy"] },
      { id: 41, title: "First Missing Positive", difficulty: "Hard", link: "https://leetcode.com/problems/first-missing-positive/", company: ["Amazon", "Google", "Stripe"] },
      { id: 31, title: "Next Permutation", difficulty: "Medium", link: "https://leetcode.com/problems/next-permutation/", company: ["Meta", "Google", "Atlassian"] },
      { id: 53, title: "Maximum Subarray (Kadane's)", difficulty: "Medium", link: "https://leetcode.com/problems/maximum-subarray/", company: ["Amazon", "Microsoft", "Flipkart"] },
      { id: 152, title: "Maximum Product Subarray", difficulty: "Medium", link: "https://leetcode.com/problems/maximum-product-subarray/", company: ["Amazon", "Google"] },
      { id: 380, title: "Insert Delete GetRandom O(1)", difficulty: "Medium", link: "https://leetcode.com/problems/insert-delete-getrandom-o1/", company: ["Meta", "Uber", "Amazon", "Twitter"] }
    ]
  },
  {
    id: "two-pointers-sliding-window",
    name: "Two Pointers & Sliding Window",
    description: "Optimizing O(N^2) search spaces to O(N) using window boundaries and dual pointers.",
    icon: "window",
    questions: [
      { id: 125, title: "Valid Palindrome", difficulty: "Easy", link: "https://leetcode.com/problems/valid-palindrome/", company: ["Meta", "Microsoft"] },
      { id: 15, title: "3Sum", difficulty: "Medium", link: "https://leetcode.com/problems/3sum/", company: ["Amazon", "Meta", "Apple", "Google"] },
      { id: 11, title: "Container With Most Water", difficulty: "Medium", link: "https://leetcode.com/problems/container-with-most-water/", company: ["Google", "Amazon"] },
      { id: 42, title: "Trapping Rain Water", difficulty: "Hard", link: "https://leetcode.com/problems/trapping-rain-water/", company: ["Amazon", "Google", "Goldman Sachs", "Uber"] },
      { id: 167, title: "Two Sum II - Input Array Is Sorted", difficulty: "Medium", link: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/", company: ["Amazon"] },
      { id: 121, title: "Best Time to Buy and Sell Stock", difficulty: "Easy", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", company: ["Amazon", "Apple", "Meta"] },
      { id: 3, title: "Longest Substring Without Repeating Characters", difficulty: "Medium", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", company: ["Amazon", "Google", "Bloomberg"] },
      { id: 424, title: "Longest Repeating Character Replacement", difficulty: "Medium", link: "https://leetcode.com/problems/longest-repeating-character-replacement/", company: ["Uber", "Amazon"] },
      { id: 567, title: "Permutation in String", difficulty: "Medium", link: "https://leetcode.com/problems/permutation-in-string/", company: ["Microsoft", "Meta"] },
      { id: 76, title: "Minimum Window Substring", difficulty: "Hard", link: "https://leetcode.com/problems/minimum-window-substring/", company: ["Meta", "Google", "Amazon", "LinkedIn"] },
      { id: 239, title: "Sliding Window Maximum", difficulty: "Hard", link: "https://leetcode.com/problems/sliding-window-maximum/", company: ["Google", "Amazon", "Citadel"] },
      { id: 1004, title: "Max Consecutive Ones III", difficulty: "Medium", link: "https://leetcode.com/problems/max-consecutive-ones-iii/", company: ["Meta", "Google"] },
      { id: 209, title: "Minimum Size Subarray Sum", difficulty: "Medium", link: "https://leetcode.com/problems/minimum-size-subarray-sum/", company: ["Amazon", "Google"] },
      { id: 992, title: "Subarrays with K Different Integers", difficulty: "Hard", link: "https://leetcode.com/problems/subarrays-with-k-different-integers/", company: ["Amazon"] },
      { id: 904, title: "Fruit Into Baskets", difficulty: "Medium", link: "https://leetcode.com/problems/fruit-into-baskets/", company: ["Google"] },
      { id: 16, title: "3Sum Closest", difficulty: "Medium", link: "https://leetcode.com/problems/3sum-closest/", company: ["Amazon", "Apple"] },
      { id: 581, title: "Shortest Unsorted Continuous Subarray", difficulty: "Medium", link: "https://leetcode.com/problems/shortest-unsorted-continuous-subarray/", company: ["Amazon", "Google"] },
      { id: 283, title: "Move Zeroes", difficulty: "Easy", link: "https://leetcode.com/problems/move-zeroes/", company: ["Meta", "Apple"] }
    ]
  },
  {
    id: "stack-queue",
    name: "Stack & Monotonic Queue",
    description: "LIFO/FIFO ordering, expression evaluation, and monotonic stack next greater/smaller patterns.",
    icon: "stack",
    questions: [
      { id: 20, title: "Valid Parentheses", difficulty: "Easy", link: "https://leetcode.com/problems/valid-parentheses/", company: ["Amazon", "Meta", "Google"] },
      { id: 155, title: "Min Stack", difficulty: "Medium", link: "https://leetcode.com/problems/min-stack/", company: ["Amazon", "Microsoft", "Bloomberg"] },
      { id: 150, title: "Evaluate Reverse Polish Notation", difficulty: "Medium", link: "https://leetcode.com/problems/evaluate-reverse-polish-notation/", company: ["LinkedIn", "Google"] },
      { id: 22, title: "Generate Parentheses", difficulty: "Medium", link: "https://leetcode.com/problems/generate-parentheses/", company: ["Meta", "Amazon"] },
      { id: 739, title: "Daily Temperatures", difficulty: "Medium", link: "https://leetcode.com/problems/daily-temperatures/", company: ["Meta", "Amazon"] },
      { id: 853, title: "Car Fleet", difficulty: "Medium", link: "https://leetcode.com/problems/car-fleet/", company: ["Google"] },
      { id: 84, title: "Largest Rectangle in Histogram", difficulty: "Hard", link: "https://leetcode.com/problems/largest-rectangle-in-histogram/", company: ["Amazon", "Google", "Meta"] },
      { id: 901, title: "Online Stock Span", difficulty: "Medium", link: "https://leetcode.com/problems/online-stock-span/", company: ["Amazon", "Swiggy"] },
      { id: 621, title: "Task Scheduler", difficulty: "Medium", link: "https://leetcode.com/problems/task-scheduler/", company: ["Meta", "Uber"] },
      { id: 71, title: "Simplify Path", difficulty: "Medium", link: "https://leetcode.com/problems/simplify-path/", company: ["Meta", "Amazon"] },
      { id: 394, title: "Decode String", difficulty: "Medium", link: "https://leetcode.com/problems/decode-string/", company: ["Google", "Bloomberg", "Cisco"] },
      { id: 735, title: "Asteroid Collision", difficulty: "Medium", link: "https://leetcode.com/problems/asteroid-collision/", company: ["Uber", "Amazon"] },
      { id: 227, title: "Basic Calculator II", difficulty: "Medium", link: "https://leetcode.com/problems/basic-calculator-ii/", company: ["Meta", "Amazon", "Microsoft"] },
      { id: 407, title: "Trapping Rain Water II", difficulty: "Hard", link: "https://leetcode.com/problems/trapping-rain-water-ii/", company: ["Google", "Twitter"] },
      { id: 496, title: "Next Greater Element I", difficulty: "Easy", link: "https://leetcode.com/problems/next-greater-element-i/", company: ["Amazon"] },
      { id: 232, title: "Implement Queue using Stacks", difficulty: "Easy", link: "https://leetcode.com/problems/implement-queue-using-stacks/", company: ["Microsoft", "Goldman Sachs"] }
    ]
  },
  {
    id: "binary-search",
    name: "Binary Search",
    description: "Logarithmic O(log N) search spaces on sorted arrays, rotated arrays, and binary search on answer ranges.",
    icon: "search",
    questions: [
      { id: 704, title: "Binary Search", difficulty: "Easy", link: "https://leetcode.com/problems/binary-search/", company: ["Apple", "Google"] },
      { id: 74, title: "Search a 2D Matrix", difficulty: "Medium", link: "https://leetcode.com/problems/search-a-2d-matrix/", company: ["Amazon", "Microsoft"] },
      { id: 875, title: "Koko Eating Bananas", difficulty: "Medium", link: "https://leetcode.com/problems/koko-eating-bananas/", company: ["Google", "Airbnb"] },
      { id: 153, title: "Find Minimum in Rotated Sorted Array", difficulty: "Medium", link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/", company: ["Amazon", "Microsoft"] },
      { id: 33, title: "Search in Rotated Sorted Array", difficulty: "Medium", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/", company: ["Amazon", "Meta", "LinkedIn"] },
      { id: 981, title: "Time Based Key-Value Store", difficulty: "Medium", link: "https://leetcode.com/problems/time-based-key-value-store/", company: ["Stripe", "Netflix", "Google"] },
      { id: 4, title: "Median of Two Sorted Arrays", difficulty: "Hard", link: "https://leetcode.com/problems/median-of-two-sorted-arrays/", company: ["Google", "Amazon", "Goldman Sachs"] },
      { id: 34, title: "Find First and Last Position of Element in Sorted Array", difficulty: "Medium", link: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/", company: ["Meta", "Google"] },
      { id: 162, title: "Find Peak Element", difficulty: "Medium", link: "https://leetcode.com/problems/find-peak-element/", company: ["Meta", "Google"] },
      { id: 1011, title: "Capacity To Ship Packages Within D Days", difficulty: "Medium", link: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/", company: ["Google", "Amazon"] },
      { id: 410, title: "Split Array Largest Sum", difficulty: "Hard", link: "https://leetcode.com/problems/split-array-largest-sum/", company: ["Google", "Baidu"] },
      { id: 540, title: "Single Element in a Sorted Array", difficulty: "Medium", link: "https://leetcode.com/problems/single-element-in-a-sorted-array/", company: ["Amazon", "Microsoft"] },
      { id: 240, title: "Search a 2D Matrix II", difficulty: "Medium", link: "https://leetcode.com/problems/search-a-2d-matrix-ii/", company: ["Amazon", "Google"] },
      { id: 378, title: "Kth Smallest Element in a Sorted Matrix", difficulty: "Medium", link: "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/", company: ["Amazon", "Uber"] },
      { id: 1552, title: "Magnetic Force Between Two Balls", difficulty: "Medium", link: "https://leetcode.com/problems/magnetic-force-between-two-balls/", company: ["Amazon", "Atlassian"] },
      { id: 69, title: "Sqrt(x)", difficulty: "Easy", link: "https://leetcode.com/problems/sqrtx/", company: ["Apple", "Bloomberg"] }
    ]
  },
  {
    id: "linked-list",
    name: "Linked List",
    description: "Pointer manipulation, Floyd's cycle detection, dummy nodes, and multi-pointer list merges.",
    icon: "link",
    questions: [
      { id: 206, title: "Reverse Linked List", difficulty: "Easy", link: "https://leetcode.com/problems/reverse-linked-list/", company: ["Amazon", "Meta", "Apple"] },
      { id: 21, title: "Merge Two Sorted Lists", difficulty: "Easy", link: "https://leetcode.com/problems/merge-two-sorted-lists/", company: ["Amazon", "Microsoft"] },
      { id: 143, title: "Reorder List", difficulty: "Medium", link: "https://leetcode.com/problems/reorder-list/", company: ["Meta", "Amazon"] },
      { id: 19, title: "Remove Nth Node From End of List", difficulty: "Medium", link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", company: ["Meta", "Amazon"] },
      { id: 138, title: "Copy List with Random Pointer", difficulty: "Medium", link: "https://leetcode.com/problems/copy-list-with-random-pointer/", company: ["Amazon", "Meta", "Microsoft"] },
      { id: 2, title: "Add Two Numbers", difficulty: "Medium", link: "https://leetcode.com/problems/add-two-numbers/", company: ["Amazon", "Meta", "Google"] },
      { id: 141, title: "Linked List Cycle", difficulty: "Easy", link: "https://leetcode.com/problems/linked-list-cycle/", company: ["Amazon", "Microsoft"] },
      { id: 142, title: "Linked List Cycle II", difficulty: "Medium", link: "https://leetcode.com/problems/linked-list-cycle-ii/", company: ["Amazon"] },
      { id: 287, title: "Find the Duplicate Number", difficulty: "Medium", link: "https://leetcode.com/problems/find-the-duplicate-number/", company: ["Amazon", "Google"] },
      { id: 146, title: "LRU Cache", difficulty: "Medium", link: "https://leetcode.com/problems/lru-cache/", company: ["Amazon", "Meta", "Google", "Apple", "Microsoft"] },
      { id: 460, title: "LFU Cache", difficulty: "Hard", link: "https://leetcode.com/problems/lfu-cache/", company: ["Amazon", "Meta", "Google"] },
      { id: 23, title: "Merge k Sorted Lists", difficulty: "Hard", link: "https://leetcode.com/problems/merge-k-sorted-lists/", company: ["Amazon", "Meta", "Google"] },
      { id: 25, title: "Reverse Nodes in k-Group", difficulty: "Hard", link: "https://leetcode.com/problems/reverse-nodes-in-k-group/", company: ["Amazon", "Microsoft"] },
      { id: 24, title: "Swap Nodes in Pairs", difficulty: "Medium", link: "https://leetcode.com/problems/swap-nodes-in-pairs/", company: ["Amazon"] },
      { id: 160, title: "Intersection of Two Linked Lists", difficulty: "Easy", link: "https://leetcode.com/problems/intersection-of-two-linked-lists/", company: ["Amazon", "Microsoft"] }
    ]
  },
  {
    id: "trees-bst",
    name: "Trees & Binary Search Trees",
    description: "DFS depth traversals, BFS level order, LCA, tree construction, and path sum problems.",
    icon: "tree",
    questions: [
      { id: 226, title: "Invert Binary Tree", difficulty: "Easy", link: "https://leetcode.com/problems/invert-binary-tree/", company: ["Google", "Amazon"] },
      { id: 104, title: "Maximum Depth of Binary Tree", difficulty: "Easy", link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", company: ["Amazon", "Apple"] },
      { id: 543, title: "Diameter of Binary Tree", difficulty: "Easy", link: "https://leetcode.com/problems/diameter-of-binary-tree/", company: ["Meta", "Amazon"] },
      { id: 110, title: "Balanced Binary Tree", difficulty: "Easy", link: "https://leetcode.com/problems/balanced-binary-tree/", company: ["Amazon"] },
      { id: 100, title: "Same Tree", difficulty: "Easy", link: "https://leetcode.com/problems/same-tree/", company: ["Amazon", "Google"] },
      { id: 572, title: "Subtree of Another Tree", difficulty: "Easy", link: "https://leetcode.com/problems/subtree-of-another-tree/", company: ["Amazon"] },
      { id: 235, title: "Lowest Common Ancestor of a BST", difficulty: "Medium", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/", company: ["Amazon", "Meta"] },
      { id: 236, title: "Lowest Common Ancestor of a Binary Tree", difficulty: "Medium", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/", company: ["Meta", "Amazon", "Microsoft"] },
      { id: 102, title: "Binary Tree Level Order Traversal", difficulty: "Medium", link: "https://leetcode.com/problems/binary-tree-level-order-traversal/", company: ["Amazon", "Meta"] },
      { id: 199, title: "Binary Tree Right Side View", difficulty: "Medium", link: "https://leetcode.com/problems/binary-tree-right-side-view/", company: ["Meta", "Amazon"] },
      { id: 1448, title: "Count Good Nodes in Binary Tree", difficulty: "Medium", link: "https://leetcode.com/problems/count-good-nodes-in-binary-tree/", company: ["Microsoft"] },
      { id: 98, title: "Validate Binary Search Tree", difficulty: "Medium", link: "https://leetcode.com/problems/validate-binary-search-tree/", company: ["Amazon", "Meta"] },
      { id: 230, title: "Kth Smallest Element in a BST", difficulty: "Medium", link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/", company: ["Amazon", "Uber"] },
      { id: 105, title: "Construct Binary Tree from Preorder & Inorder Traversal", difficulty: "Medium", link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/", company: ["Amazon", "Google"] },
      { id: 124, title: "Binary Tree Maximum Path Sum", difficulty: "Hard", link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/", company: ["Meta", "Google", "Amazon"] },
      { id: 297, title: "Serialize and Deserialize Binary Tree", difficulty: "Hard", link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", company: ["Meta", "Amazon", "Google", "LinkedIn"] },
      { id: 863, title: "All Nodes Distance K in Binary Tree", difficulty: "Medium", link: "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/", company: ["Meta", "Amazon"] },
      { id: 103, title: "Binary Tree Zigzag Level Order Traversal", difficulty: "Medium", link: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/", company: ["Amazon", "Microsoft"] },
      { id: 114, title: "Flatten Binary Tree to Linked List", difficulty: "Medium", link: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/", company: ["Meta", "Microsoft"] },
      { id: 116, title: "Populating Next Right Pointers in Each Node", difficulty: "Medium", link: "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/", company: ["Meta", "Google"] },
      { id: 1008, title: "Construct BST from Preorder Traversal", difficulty: "Medium", link: "https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/", company: ["Amazon"] },
      { id: 437, title: "Path Sum III", difficulty: "Medium", link: "https://leetcode.com/problems/path-sum-iii/", company: ["Amazon", "Meta"] }
    ]
  },
  {
    id: "tries",
    name: "Tries (Prefix Tree)",
    description: "Prefix matching, autocomplete algorithms, and dictionary-based lookup trees.",
    icon: "trie",
    questions: [
      { id: 208, title: "Implement Trie (Prefix Tree)", difficulty: "Medium", link: "https://leetcode.com/problems/implement-trie-prefix-tree/", company: ["Amazon", "Google", "Twitter"] },
      { id: 211, title: "Design Add and Search Words Data Structure", difficulty: "Medium", link: "https://leetcode.com/problems/design-add-and-search-words-data-structure/", company: ["Meta", "Google"] },
      { id: 212, title: "Word Search II", difficulty: "Hard", link: "https://leetcode.com/problems/word-search-ii/", company: ["Amazon", "Google", "Uber"] },
      { id: 421, title: "Maximum XOR of Two Numbers in an Array", difficulty: "Medium", link: "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/", company: ["Google"] },
      { id: 648, title: "Replace Words", difficulty: "Medium", link: "https://leetcode.com/problems/replace-words/", company: ["Uber"] },
      { id: 2707, title: "Extra Characters in a String", difficulty: "Medium", link: "https://leetcode.com/problems/extra-characters-in-a-string/", company: ["Google"] },
      { id: 1065, title: "Index Pairs of a String", difficulty: "Easy", link: "https://leetcode.com/problems/index-pairs-of-a-string/", company: ["Amazon"] },
      { id: 472, title: "Concatenated Words", difficulty: "Hard", link: "https://leetcode.com/problems/concatenated-words/", company: ["Amazon"] }
    ]
  },
  {
    id: "heap-priority-queue",
    name: "Heap & Priority Queue",
    description: "Min/max heap structures for top-K elements, streaming medians, and dynamic scheduling.",
    icon: "heap",
    questions: [
      { id: 703, title: "Kth Largest Element in a Stream", difficulty: "Easy", link: "https://leetcode.com/problems/kth-largest-element-in-a-stream/", company: ["Amazon"] },
      { id: 1046, title: "Last Stone Weight", difficulty: "Easy", link: "https://leetcode.com/problems/last-stone-weight/", company: ["Amazon"] },
      { id: 973, title: "K Closest Points to Origin", difficulty: "Medium", link: "https://leetcode.com/problems/k-closest-points-to-origin/", company: ["Amazon", "Meta"] },
      { id: 215, title: "Kth Largest Element in an Array", difficulty: "Medium", link: "https://leetcode.com/problems/kth-largest-element-in-an-array/", company: ["Meta", "Amazon", "Google"] },
      { id: 355, title: "Design Twitter", difficulty: "Medium", link: "https://leetcode.com/problems/design-twitter/", company: ["Twitter", "Amazon"] },
      { id: 295, title: "Find Median from Data Stream", difficulty: "Hard", link: "https://leetcode.com/problems/find-median-from-data-stream/", company: ["Amazon", "Google", "Meta", "Apple"] },
      { id: 767, title: "Reorganize String", difficulty: "Medium", link: "https://leetcode.com/problems/reorganize-string/", company: ["Amazon", "Google"] },
      { id: 692, title: "Top K Frequent Words", difficulty: "Medium", link: "https://leetcode.com/problems/top-k-frequent-words/", company: ["Amazon", "Uber"] },
      { id: 632, title: "Smallest Range Covering Elements from K Lists", difficulty: "Hard", link: "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/", company: ["Google"] },
      { id: 373, title: "Find K Pairs with Smallest Sums", difficulty: "Medium", link: "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/", company: ["Amazon", "Google"] },
      { id: 1383, title: "Maximum Performance of a Team", difficulty: "Hard", link: "https://leetcode.com/problems/maximum-performance-of-a-team/", company: ["Amazon"] },
      { id: 1834, title: "Single-Threaded CPU", difficulty: "Medium", link: "https://leetcode.com/problems/single-threaded-cpu/", company: ["Google"] },
      { id: 1845, title: "Seat Reservation Manager", difficulty: "Medium", link: "https://leetcode.com/problems/seat-reservation-manager/", company: ["Amazon"] },
      { id: 857, title: "Minimum Cost to Hire K Workers", difficulty: "Hard", link: "https://leetcode.com/problems/minimum-cost-to-hire-k-workers/", company: ["Google"] },
      { id: 621, title: "Task Scheduler", difficulty: "Medium", link: "https://leetcode.com/problems/task-scheduler/", company: ["Meta"] }
    ]
  },
  {
    id: "graphs",
    name: "Graphs (BFS, DFS, Dijkstra, Union-Find)",
    description: "Network traversals, topological sorting, connected components, shortest paths, and MSTs.",
    icon: "graph",
    questions: [
      { id: 200, title: "Number of Islands", difficulty: "Medium", link: "https://leetcode.com/problems/number-of-islands/", company: ["Amazon", "Google", "Meta", "Microsoft"] },
      { id: 133, title: "Clone Graph", difficulty: "Medium", link: "https://leetcode.com/problems/clone-graph/", company: ["Meta", "Amazon"] },
      { id: 695, title: "Max Area of Island", difficulty: "Medium", link: "https://leetcode.com/problems/max-area-of-island/", company: ["Amazon", "Meta"] },
      { id: 417, title: "Pacific Atlantic Water Flow", difficulty: "Medium", link: "https://leetcode.com/problems/pacific-atlantic-water-flow/", company: ["Google", "Amazon"] },
      { id: 130, title: "Surrounded Regions", difficulty: "Medium", link: "https://leetcode.com/problems/surrounded-regions/", company: ["Uber", "Amazon"] },
      { id: 994, title: "Rotting Oranges", difficulty: "Medium", link: "https://leetcode.com/problems/rotting-oranges/", company: ["Amazon", "Microsoft"] },
      { id: 286, title: "Walls and Gates", difficulty: "Medium", link: "https://leetcode.com/problems/walls-and-gates/", company: ["Meta", "Google"] },
      { id: 207, title: "Course Schedule", difficulty: "Medium", link: "https://leetcode.com/problems/course-schedule/", company: ["Amazon", "Meta", "Google"] },
      { id: 210, title: "Course Schedule II", difficulty: "Medium", link: "https://leetcode.com/problems/course-schedule-ii/", company: ["Amazon", "Meta", "Google"] },
      { id: 261, title: "Graph Valid Tree", difficulty: "Medium", link: "https://leetcode.com/problems/graph-valid-tree/", company: ["LinkedIn", "Google"] },
      { id: 323, title: "Number of Connected Components in an Undirected Graph", difficulty: "Medium", link: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/", company: ["Amazon"] },
      { id: 684, title: "Redundant Connection", difficulty: "Medium", link: "https://leetcode.com/problems/redundant-connection/", company: ["Google", "Amazon"] },
      { id: 127, title: "Word Ladder", difficulty: "Hard", link: "https://leetcode.com/problems/word-ladder/", company: ["Amazon", "Meta", "Google"] },
      { id: 126, title: "Word Ladder II", difficulty: "Hard", link: "https://leetcode.com/problems/word-ladder-ii/", company: ["Amazon", "Google"] },
      { id: 743, title: "Network Delay Time (Dijkstra)", difficulty: "Medium", link: "https://leetcode.com/problems/network-delay-time/", company: ["Google", "Amazon"] },
      { id: 787, title: "Cheapest Flights Within K Stops", difficulty: "Medium", link: "https://leetcode.com/problems/cheapest-flights-within-k-stops/", company: ["Airbnb", "Amazon"] },
      { id: 332, title: "Reconstruct Itinerary", difficulty: "Hard", link: "https://leetcode.com/problems/reconstruct-itinerary/", company: ["Google", "Uber"] },
      { id: 1584, title: "Min Cost to Connect All Points (Prim's / Kruskal's)", difficulty: "Medium", link: "https://leetcode.com/problems/min-cost-to-connect-all-points/", company: ["Amazon"] },
      { id: 778, title: "Swim in Rising Water", difficulty: "Hard", link: "https://leetcode.com/problems/swim-in-rising-water/", company: ["Google"] },
      { id: 269, title: "Alien Dictionary", difficulty: "Hard", link: "https://leetcode.com/problems/alien-dictionary/", company: ["Meta", "Google", "Airbnb"] },
      { id: 1192, title: "Critical Connections in a Network (Tarjan's)", difficulty: "Hard", link: "https://leetcode.com/problems/critical-connections-in-a-network/", company: ["Amazon"] },
      { id: 785, title: "Is Graph Bipartite?", difficulty: "Medium", link: "https://leetcode.com/problems/is-graph-bipartite/", company: ["Meta", "Amazon"] },
      { id: 1631, title: "Path With Minimum Effort", difficulty: "Medium", link: "https://leetcode.com/problems/path-with-minimum-effort/", company: ["Google"] },
      { id: 721, title: "Accounts Merge", difficulty: "Medium", link: "https://leetcode.com/problems/accounts-merge/", company: ["Meta", "Google"] },
      { id: 1162, title: "As Far from Land as Possible", difficulty: "Medium", link: "https://leetcode.com/problems/as-far-from-land-as-possible/", company: ["Amazon"] }
    ]
  },
  {
    id: "dynamic-programming",
    name: "Dynamic Programming (1D, 2D, Grid, Strings)",
    description: "Optimal substructure, memoization, tabular state transitions, and sequence alignment.",
    icon: "dp",
    questions: [
      { id: 70, title: "Climbing Stairs", difficulty: "Easy", link: "https://leetcode.com/problems/climbing-stairs/", company: ["Amazon", "Apple"] },
      { id: 746, title: "Min Cost Climbing Stairs", difficulty: "Easy", link: "https://leetcode.com/problems/min-cost-climbing-stairs/", company: ["Amazon"] },
      { id: 198, title: "House Robber", difficulty: "Medium", link: "https://leetcode.com/problems/house-robber/", company: ["Amazon", "Google"] },
      { id: 213, title: "House Robber II", difficulty: "Medium", link: "https://leetcode.com/problems/house-robber-ii/", company: ["Microsoft", "Google"] },
      { id: 5, title: "Longest Palindromic Substring", difficulty: "Medium", link: "https://leetcode.com/problems/longest-palindromic-substring/", company: ["Amazon", "Meta", "Microsoft"] },
      { id: 647, title: "Palindromic Substrings", difficulty: "Medium", link: "https://leetcode.com/problems/palindromic-substrings/", company: ["Meta", "Google"] },
      { id: 91, title: "Decode Ways", difficulty: "Medium", link: "https://leetcode.com/problems/decode-ways/", company: ["Meta", "Amazon", "Google"] },
      { id: 322, title: "Coin Change", difficulty: "Medium", link: "https://leetcode.com/problems/coin-change/", company: ["Amazon", "Meta", "Google", "Walmart"] },
      { id: 139, title: "Word Break", difficulty: "Medium", link: "https://leetcode.com/problems/word-break/", company: ["Amazon", "Meta", "Google", "Bloomberg"] },
      { id: 300, title: "Longest Increasing Subsequence", difficulty: "Medium", link: "https://leetcode.com/problems/longest-increasing-subsequence/", company: ["Google", "Amazon", "Microsoft"] },
      { id: 416, title: "Partition Equal Subset Sum", difficulty: "Medium", link: "https://leetcode.com/problems/partition-equal-subset-sum/", company: ["Amazon", "Meta"] },
      { id: 62, title: "Unique Paths", difficulty: "Medium", link: "https://leetcode.com/problems/unique-paths/", company: ["Amazon", "Google"] },
      { id: 1143, title: "Longest Common Subsequence", difficulty: "Medium", link: "https://leetcode.com/problems/longest-common-subsequence/", company: ["Amazon", "Google"] },
      { id: 309, title: "Best Time to Buy & Sell Stock with Cooldown", difficulty: "Medium", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/", company: ["Meta"] },
      { id: 518, title: "Coin Change II", difficulty: "Medium", link: "https://leetcode.com/problems/coin-change-ii/", company: ["Amazon"] },
      { id: 494, title: "Target Sum", difficulty: "Medium", link: "https://leetcode.com/problems/target-sum/", company: ["Meta", "Amazon"] },
      { id: 97, title: "Interleaving String", difficulty: "Medium", link: "https://leetcode.com/problems/interleaving-string/", company: ["Google"] },
      { id: 72, title: "Edit Distance", difficulty: "Hard", link: "https://leetcode.com/problems/edit-distance/", company: ["Google", "Amazon", "Microsoft"] },
      { id: 312, title: "Burst Balloons", difficulty: "Hard", link: "https://leetcode.com/problems/burst-balloons/", company: ["Google", "Amazon"] },
      { id: 10, title: "Regular Expression Matching", difficulty: "Hard", link: "https://leetcode.com/problems/regular-expression-matching/", company: ["Meta", "Google"] },
      { id: 221, title: "Maximal Square", difficulty: "Medium", link: "https://leetcode.com/problems/maximal-square/", company: ["Amazon", "Google"] },
      { id: 64, title: "Minimum Path Sum", difficulty: "Medium", link: "https://leetcode.com/problems/minimum-path-sum/", company: ["Amazon", "Google"] },
      { id: 174, title: "Dungeon Game", difficulty: "Hard", link: "https://leetcode.com/problems/dungeon-game/", company: ["Google", "Microsoft"] },
      { id: 132, title: "Palindrome Partitioning II", difficulty: "Hard", link: "https://leetcode.com/problems/palindrome-partitioning-ii/", company: ["Amazon"] },
      { id: 115, title: "Distinct Subsequences", difficulty: "Hard", link: "https://leetcode.com/problems/distinct-subsequences/", company: ["Google"] },
      { id: 44, title: "Wildcard Matching", difficulty: "Hard", link: "https://leetcode.com/problems/wildcard-matching/", company: ["Meta", "Google"] },
      { id: 188, title: "Best Time to Buy and Sell Stock IV", difficulty: "Hard", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/", company: ["Amazon"] },
      { id: 1048, title: "Longest String Chain", difficulty: "Medium", link: "https://leetcode.com/problems/longest-string-chain/", company: ["Google"] },
      { id: 354, title: "Russian Doll Envelopes", difficulty: "Hard", link: "https://leetcode.com/problems/russian-doll-envelopes/", company: ["Google"] },
      { id: 279, title: "Perfect Squares", difficulty: "Medium", link: "https://leetcode.com/problems/perfect-squares/", company: ["Amazon", "Google"] }
    ]
  },
  {
    id: "greedy-backtracking",
    name: "Greedy, Backtracking & Intervals",
    description: "Exploration trees, state constraint pruning, interval merging, and local optimal choices.",
    icon: "greedy",
    questions: [
      { id: 78, title: "Subsets", difficulty: "Medium", link: "https://leetcode.com/problems/subsets/", company: ["Amazon", "Meta"] },
      { id: 90, title: "Subsets II", difficulty: "Medium", link: "https://leetcode.com/problems/subsets-ii/", company: ["Amazon"] },
      { id: 39, title: "Combination Sum", difficulty: "Medium", link: "https://leetcode.com/problems/combination-sum/", company: ["Amazon", "Meta", "Airbnb"] },
      { id: 40, title: "Combination Sum II", difficulty: "Medium", link: "https://leetcode.com/problems/combination-sum-ii/", company: ["Amazon"] },
      { id: 46, title: "Permutations", difficulty: "Medium", link: "https://leetcode.com/problems/permutations/", company: ["Meta", "Amazon", "Google"] },
      { id: 47, title: "Permutations II", difficulty: "Medium", link: "https://leetcode.com/problems/permutations-ii/", company: ["Amazon"] },
      { id: 79, title: "Word Search", difficulty: "Medium", link: "https://leetcode.com/problems/word-search/", company: ["Amazon", "Meta", "Bloomberg"] },
      { id: 131, title: "Palindrome Partitioning", difficulty: "Medium", link: "https://leetcode.com/problems/palindrome-partitioning/", company: ["Google", "Amazon"] },
      { id: 17, title: "Letter Combinations of a Phone Number", difficulty: "Medium", link: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/", company: ["Amazon", "Meta"] },
      { id: 51, title: "N-Queens", difficulty: "Hard", link: "https://leetcode.com/problems/n-queens/", company: ["Amazon", "Meta"] },
      { id: 55, title: "Jump Game", difficulty: "Medium", link: "https://leetcode.com/problems/jump-game/", company: ["Amazon", "Meta"] },
      { id: 45, title: "Jump Game II", difficulty: "Medium", link: "https://leetcode.com/problems/jump-game-ii/", company: ["Amazon", "Google"] },
      { id: 134, title: "Gas Station", difficulty: "Medium", link: "https://leetcode.com/problems/gas-station/", company: ["Amazon", "Google"] },
      { id: 846, title: "Hand of Straights", difficulty: "Medium", link: "https://leetcode.com/problems/hand-of-straights/", company: ["Google"] },
      { id: 56, title: "Merge Intervals", difficulty: "Medium", link: "https://leetcode.com/problems/merge-intervals/", company: ["Amazon", "Meta", "Google", "Apple"] },
      { id: 57, title: "Insert Interval", difficulty: "Medium", link: "https://leetcode.com/problems/insert-interval/", company: ["Google", "Amazon"] },
      { id: 435, title: "Non-overlapping Intervals", difficulty: "Medium", link: "https://leetcode.com/problems/non-overlapping-intervals/", company: ["Amazon"] },
      { id: 763, title: "Partition Labels", difficulty: "Medium", link: "https://leetcode.com/problems/partition-labels/", company: ["Amazon"] },
      { id: 678, title: "Valid Parenthesis String", difficulty: "Medium", link: "https://leetcode.com/problems/valid-parenthesis-string/", company: ["Meta"] },
      { id: 1899, title: "Merge Triplets to Form Target Triplet", difficulty: "Medium", link: "https://leetcode.com/problems/merge-triplets-to-form-target-triplet/", company: ["Amazon"] }
    ]
  },
  {
    id: "bit-manipulation-math",
    name: "Bit Manipulation, Math & Matrix",
    description: "Bitwise logic, XOR tricks, binary representations, matrix rotation, and fast math operations.",
    icon: "bit",
    questions: [
      { id: 136, title: "Single Number", difficulty: "Easy", link: "https://leetcode.com/problems/single-number/", company: ["Amazon", "Google"] },
      { id: 191, title: "Number of 1 Bits", difficulty: "Easy", link: "https://leetcode.com/problems/number-of-1-bits/", company: ["Apple", "Microsoft"] },
      { id: 338, title: "Counting Bits", difficulty: "Easy", link: "https://leetcode.com/problems/counting-bits/", company: ["Apple"] },
      { id: 190, title: "Reverse Bits", difficulty: "Easy", link: "https://leetcode.com/problems/reverse-bits/", company: ["Apple"] },
      { id: 268, title: "Missing Number", difficulty: "Easy", link: "https://leetcode.com/problems/missing-number/", company: ["Amazon"] },
      { id: 371, title: "Sum of Two Integers", difficulty: "Medium", link: "https://leetcode.com/problems/sum-of-two-integers/", company: ["Meta"] },
      { id: 7, title: "Reverse Integer", difficulty: "Medium", link: "https://leetcode.com/problems/reverse-integer/", company: ["Amazon", "Apple"] },
      { id: 50, title: "Pow(x, n)", difficulty: "Medium", link: "https://leetcode.com/problems/powx-n/", company: ["Meta", "Amazon"] },
      { id: 43, title: "Multiply Strings", difficulty: "Medium", link: "https://leetcode.com/problems/multiply-strings/", company: ["Meta", "Google"] },
      { id: 252, title: "Meeting Rooms", difficulty: "Easy", link: "https://leetcode.com/problems/meeting-rooms/", company: ["Amazon", "Meta"] },
      { id: 253, title: "Meeting Rooms II", difficulty: "Medium", link: "https://leetcode.com/problems/meeting-rooms-ii/", company: ["Amazon", "Google", "Meta"] },
      { id: 54, title: "Spiral Matrix", difficulty: "Medium", link: "https://leetcode.com/problems/spiral-matrix/", company: ["Amazon", "Microsoft"] },
      { id: 48, title: "Rotate Image", difficulty: "Medium", link: "https://leetcode.com/problems/rotate-image/", company: ["Amazon", "Meta"] },
      { id: 73, title: "Set Matrix Zeroes", difficulty: "Medium", link: "https://leetcode.com/problems/set-matrix-zeroes/", company: ["Amazon", "Microsoft"] },
      { id: 202, title: "Happy Number", difficulty: "Easy", link: "https://leetcode.com/problems/happy-number/", company: ["Amazon"] }
    ]
  }
];


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


// SDE 2 Preparation Dashboard Application Logic

document.addEventListener('DOMContentLoaded', () => {
  // Storage Keys
  const STORAGE_KEY_COMPLETED = 'sde2_completed_questions_v1';
  const STORAGE_KEY_NOTES = 'sde2_question_notes_v1';

  // Load Saved Progress
  let completedSet = new Set(JSON.parse(localStorage.getItem(STORAGE_KEY_COMPLETED) || '[]'));
  let notesMap = JSON.parse(localStorage.getItem(STORAGE_KEY_NOTES) || '{}');

  // DOM Elements
  const navTabs = document.querySelectorAll('.nav-tab');
  const tabPanels = document.querySelectorAll('.tab-panel');
  const dsaAccordionContainer = document.getElementById('dsa-accordion-container');
  const lldGridContainer = document.getElementById('lld-grid-container');
  const hldGridContainer = document.getElementById('hld-grid-container');
  const roadmapContainer = document.getElementById('roadmap-timeline-container');

  // Global Controls & Stats
  const globalSearchInput = document.getElementById('dsa-search-input');
  const difficultyFilter = document.getElementById('difficulty-filter');
  const statusFilter = document.getElementById('status-filter');
  const btnExpandAll = document.getElementById('btn-expand-all');
  const btnCollapseAll = document.getElementById('btn-collapse-all');
  const btnExportData = document.getElementById('btn-export-data');
  const btnImportData = document.getElementById('btn-import-data');
  const fileImportInput = document.getElementById('file-import-input');

  // Stats Displays
  const statTotalQuestions = document.getElementById('stat-total-questions');
  const statDsaCompleted = document.getElementById('stat-dsa-completed');
  const statDsaPercent = document.getElementById('stat-dsa-percent');
  const dsaProgressBarFill = document.getElementById('dsa-progress-fill');
  const headerDsaCount = document.getElementById('header-dsa-count');
  const headerDsaPercent = document.getElementById('header-dsa-percent');

  // Modal Elements
  const noteModal = document.getElementById('note-modal');
  const noteModalTitle = document.getElementById('note-modal-title');
  const noteTextarea = document.getElementById('note-textarea');
  const btnSaveNote = document.getElementById('btn-save-note');
  const btnCloseNote = document.getElementById('btn-close-note');
  let currentNoteQId = null;

  // Total questions count calculation
  let totalDsaQuestionsCount = 0;
  dsaTopicsData.forEach(topic => {
    totalDsaQuestionsCount += topic.questions.length;
  });

  // Initialize Dashboard
  init();

  function init() {
    setupTabNavigation();
    renderDsaTopics();
    renderLldModule();
    renderHldModule();
    renderRoadmapModule();
    updateStatistics();
    setupEventListeners();
  }

  /* -------------------------------------------------------------
     Tab Navigation
  ------------------------------------------------------------- */
  function setupTabNavigation() {
    navTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetTab = tab.getAttribute('data-tab');
        
        navTabs.forEach(t => t.classList.remove('active'));
        tabPanels.forEach(p => p.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(`tab-${targetTab}`).classList.add('active');
      });
    });
  }

  // Set of open topic accordion IDs (default first topic open)
  let openTopicIds = new Set([dsaTopicsData[0] ? dsaTopicsData[0].id : 'arrays-hashing']);

  /* -------------------------------------------------------------
     Render DSA Section & Accordions
  ------------------------------------------------------------- */
  function renderDsaTopics() {
    dsaAccordionContainer.innerHTML = '';

    const searchTerm = globalSearchInput ? globalSearchInput.value.toLowerCase().trim() : '';
    const selectedDiff = difficultyFilter ? difficultyFilter.value : 'all';
    const selectedStatus = statusFilter ? statusFilter.value : 'all';

    dsaTopicsData.forEach((topic) => {
      // Filter questions in topic
      const filteredQuestions = topic.questions.filter(q => {
        const matchesSearch = q.title.toLowerCase().includes(searchTerm) ||
                              q.id.toString().includes(searchTerm) ||
                              q.company.some(c => c.toLowerCase().includes(searchTerm));
        const matchesDiff = selectedDiff === 'all' || q.difficulty === selectedDiff;
        const isDone = completedSet.has(q.id);
        const matchesStatus = selectedStatus === 'all' || 
                              (selectedStatus === 'done' && isDone) ||
                              (selectedStatus === 'todo' && !isDone);
        return matchesSearch && matchesDiff && matchesStatus;
      });

      // Skip topic if filtering produces 0 questions
      if (filteredQuestions.length === 0 && (searchTerm !== '' || selectedDiff !== 'all' || selectedStatus !== 'all')) {
        return;
      }

      // Automatically open topic if active search term is entered
      if (searchTerm !== '' && filteredQuestions.length > 0) {
        openTopicIds.add(topic.id);
      }

      const completedInTopic = topic.questions.filter(q => completedSet.has(q.id)).length;
      const totalInTopic = topic.questions.length;
      const isOpen = openTopicIds.has(topic.id);

      const topicSection = document.createElement('div');
      topicSection.className = 'dsa-topic-section';
      topicSection.setAttribute('data-topic-id', topic.id);

      const headerDiv = document.createElement('div');
      headerDiv.className = `topic-header ${isOpen ? 'open' : ''}`;
      headerDiv.innerHTML = `
        <div class="topic-meta">
          <div class="topic-badge-icon">
            <i class="fas fa-layer-group"></i>
          </div>
          <div>
            <div class="topic-title">${topic.name}</div>
            <div class="topic-desc">${topic.description}</div>
          </div>
        </div>
        <div class="topic-progress-info">
          <div class="topic-count">${completedInTopic} / ${totalInTopic} Completed</div>
          <span class="chevron-icon"><i class="fas fa-chevron-down"></i></span>
        </div>
      `;

      const listDiv = document.createElement('div');
      listDiv.className = `questions-list ${isOpen ? 'show' : ''}`;

      let rowsHtml = '';
      filteredQuestions.forEach(q => {
        const isChecked = completedSet.has(q.id);
        const hasNote = Boolean(notesMap[q.id]);
        const companyTagsHtml = q.company.map(c => `<span class="tag-co">${c}</span>`).join('');

        rowsHtml += `
          <tr class="q-row ${isChecked ? 'completed' : ''}" data-qid="${q.id}">
            <td style="width: 40px; text-align: center;">
              <div class="custom-checkbox ${isChecked ? 'checked' : ''}" onclick="toggleQuestionDone(${q.id}, event)">
                ${isChecked ? '<i class="fas fa-check"></i>' : ''}
              </div>
            </td>
            <td style="width: 60px; color: var(--text-muted); font-size: 0.82rem;">#${q.id}</td>
            <td>
              <a href="${q.link}" target="_blank" rel="noopener noreferrer" class="q-title-link">
                <span class="q-title">${q.title}</span>
                <i class="fas fa-external-link-alt lc-icon"></i>
              </a>
            </td>
            <td style="width: 110px;">
              <span class="badge-diff ${q.difficulty}">${q.difficulty}</span>
            </td>
            <td>
              <div class="company-tags">${companyTagsHtml}</div>
            </td>
            <td style="width: 50px; text-align: center;">
              <button class="btn-note ${hasNote ? 'has-note' : ''}" onclick="openNoteModal(${q.id}, '${escapeQuotes(q.title)}')" title="Add/Edit Notes">
                <i class="${hasNote ? 'fas' : 'far'} fa-sticky-note"></i>
              </button>
            </td>
          </tr>
        `;
      });

      listDiv.innerHTML = `
        <table class="q-table">
          <thead>
            <tr>
              <th style="width: 40px;">Status</th>
              <th style="width: 60px;">ID</th>
              <th>Problem Title</th>
              <th>Difficulty</th>
              <th>Top Companies</th>
              <th style="text-align: center;">Notes</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml || '<tr><td colspan="6" style="text-align:center; padding: 20px; color: var(--text-muted);">No questions match current filters.</td></tr>'}
          </tbody>
        </table>
      `;

      // Toggle accordion event
      headerDiv.addEventListener('click', () => {
        if (openTopicIds.has(topic.id)) {
          openTopicIds.delete(topic.id);
          headerDiv.classList.remove('open');
          listDiv.classList.remove('show');
        } else {
          openTopicIds.add(topic.id);
          headerDiv.classList.add('open');
          listDiv.classList.add('show');
        }
      });

      topicSection.appendChild(headerDiv);
      topicSection.appendChild(listDiv);
      dsaAccordionContainer.appendChild(topicSection);
    });
  }

  // Window scoped function to toggle completion
  window.toggleQuestionDone = function(qid, event) {
    if (event) event.stopPropagation();

    if (completedSet.has(qid)) {
      completedSet.delete(qid);
    } else {
      completedSet.add(qid);
    }

    localStorage.setItem(STORAGE_KEY_COMPLETED, JSON.stringify(Array.from(completedSet)));
    renderDsaTopics();
    updateStatistics();
  };

  /* -------------------------------------------------------------
     Render LLD Section
  ------------------------------------------------------------- */
  function renderLldModule() {
    lldGridContainer.innerHTML = '';

    // Render Classic LLD Questions Grid
    lldTopicsData.classicProblems.forEach(prob => {
      const card = document.createElement('div');
      card.className = 'lld-card';
      
      const patternTags = prob.patterns.map(p => `<span class="tag-pattern">${p}</span>`).join('');
      const conceptTags = prob.concepts.map(c => `<span class="tag-concept">${c}</span>`).join('');
      const linksHtml = prob.links.map(l => `<a href="${l.url}" target="_blank" class="res-link"><i class="fas fa-link"></i> ${l.title}</a>`).join('');

      card.innerHTML = `
        <div class="card-top">
          <div class="card-header-flex">
            <h3 class="card-title">${prob.title}</h3>
            <span class="badge-diff ${prob.difficulty}">${prob.difficulty}</span>
          </div>
          <p class="card-desc">${prob.description}</p>
          <div class="meta-tags">
            ${patternTags}
            ${conceptTags}
          </div>
          <div class="card-key-list">
            <div class="key-lbl">Key Classes & Interfaces</div>
            <div class="key-items">${prob.keyClasses.join(' • ')}</div>
          </div>
        </div>
        <div class="resource-links">
          ${linksHtml}
        </div>
      `;
      lldGridContainer.appendChild(card);
    });

    // Render Fundamentals Section in LLD Fundamentals tab
    const lldFundContainer = document.getElementById('lld-fundamentals-container');
    if (lldFundContainer) {
      lldFundContainer.innerHTML = '';
      lldTopicsData.fundamentals.forEach(fund => {
        const box = document.createElement('div');
        box.className = 'hero-banner';
        box.style.marginBottom = '20px';

        let content = `<h3 style="font-size: 1.25rem; font-weight:700; margin-bottom:8px; color: var(--accent-purple);">${fund.title}</h3>`;
        content += `<p style="font-size:0.92rem; color:var(--text-secondary); margin-bottom:14px;">${fund.description}</p>`;

        if (fund.keyTakeaways) {
          content += `<ul style="padding-left:20px; font-size:0.9rem; color:var(--text-primary); margin-bottom:14px;">`;
          fund.keyTakeaways.forEach(t => content += `<li style="margin-bottom:4px;">${t}</li>`);
          content += `</ul>`;
        }

        if (fund.patterns) {
          content += `<div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap:12px; margin-bottom:14px;">`;
          fund.patterns.forEach(p => {
            content += `
              <div style="background:rgba(10,14,23,0.6); padding:12px; border-radius:8px; border:1px solid var(--glass-border);">
                <div style="font-weight:700; font-size:0.95rem; color:var(--accent-cyan);">${p.name} <span style="font-size:0.75rem; color:var(--text-muted);">(${p.type})</span></div>
                <div style="font-size:0.85rem; color:var(--text-secondary); margin-top:4px;">${p.usage}</div>
              </div>
            `;
          });
          content += `</div>`;
        }

        if (fund.resources) {
          content += `<div style="display:flex; gap:16px; flex-wrap:wrap;">`;
          fund.resources.forEach(r => content += `<a href="${r.url}" target="_blank" class="res-link"><i class="fas fa-book"></i> ${r.name}</a>`);
          content += `</div>`;
        }

        box.innerHTML = content;
        lldFundContainer.appendChild(box);
      });
    }
  }

  /* -------------------------------------------------------------
     Render HLD Section
  ------------------------------------------------------------- */
  function renderHldModule() {
    hldGridContainer.innerHTML = '';

    // Render Classic HLD Systems
    hldTopicsData.classicSystems.forEach(sys => {
      const card = document.createElement('div');
      card.className = 'hld-card';

      const componentTags = sys.keyComponents.map(c => `<span class="tag-concept">${c}</span>`).join('');
      const highlightsHtml = sys.architectureHighlights.map(h => `<li style="margin-bottom:6px; font-size:0.87rem; color: var(--text-secondary);">${h}</li>`).join('');
      const linksHtml = sys.links.map(l => `<a href="${l.url}" target="_blank" class="res-link"><i class="fas fa-globe"></i> ${l.title}</a>`).join('');

      card.innerHTML = `
        <div class="card-top">
          <div class="card-header-flex">
            <h3 class="card-title">${sys.title}</h3>
            <span class="badge-diff ${sys.difficulty}">${sys.difficulty}</span>
          </div>
          <p class="card-desc">${sys.description}</p>
          <div style="font-size:0.8rem; color: var(--accent-amber); font-weight:600; margin-bottom:12px;">
            <i class="fas fa-tachometer-alt"></i> Scale Target: ${sys.scale}
          </div>
          <div class="meta-tags" style="margin-bottom:12px;">
            ${componentTags}
          </div>
          <div class="card-key-list">
            <div class="key-lbl">Architecture Highlights & Tradeoffs</div>
            <ul style="padding-left: 18px; margin:0;">${highlightsHtml}</ul>
          </div>
        </div>
        <div class="resource-links">
          ${linksHtml}
        </div>
      `;
      hldGridContainer.appendChild(card);
    });

    // Render Building Blocks & Framework
    const hldBlocksContainer = document.getElementById('hld-building-blocks-container');
    if (hldBlocksContainer) {
      hldBlocksContainer.innerHTML = '';
      hldTopicsData.buildingBlocks.forEach(block => {
        const box = document.createElement('div');
        box.className = 'hero-banner';
        box.style.marginBottom = '20px';

        let conceptsListHtml = block.keyConcepts.map(c => `<li style="margin-bottom:6px; font-size:0.9rem;">${c}</li>`).join('');
        let linksHtml = block.resources.map(r => `<a href="${r.url}" target="_blank" class="res-link"><i class="fas fa-external-link-alt"></i> ${r.name}</a>`).join('');

        box.innerHTML = `
          <h3 style="font-size: 1.2rem; font-weight:700; margin-bottom:6px; color: var(--accent-emerald);">${block.title}</h3>
          <p style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:12px;">${block.description}</p>
          <ul style="padding-left:20px; color:var(--text-primary); margin-bottom:14px;">${conceptsListHtml}</ul>
          <div style="display:flex; gap:16px; flex-wrap:wrap;">${linksHtml}</div>
        `;
        hldBlocksContainer.appendChild(box);
      });
    }
  }

  /* -------------------------------------------------------------
     Render Roadmap Section
  ------------------------------------------------------------- */
  function renderRoadmapModule() {
    if (!roadmapContainer) return;
    roadmapContainer.innerHTML = '';

    roadmapData.weeks.forEach(w => {
      const card = document.createElement('div');
      card.className = 'roadmap-week-card';

      card.innerHTML = `
        <div class="week-badge">${w.weekNumber}</div>
        <h3 class="week-title">${w.title}</h3>
        <div class="week-goals-grid">
          <div class="goal-box">
            <div class="goal-title dsa"><i class="fas fa-code"></i> DSA Target</div>
            <div class="goal-desc">${w.dsaGoal}</div>
          </div>
          <div class="goal-box">
            <div class="goal-title lld"><i class="fas fa-sitemap"></i> LLD Goal</div>
            <div class="goal-desc">${w.lldGoal}</div>
          </div>
          <div class="goal-box">
            <div class="goal-title hld"><i class="fas fa-network-wired"></i> HLD Target</div>
            <div class="goal-desc">${w.hldGoal}</div>
          </div>
        </div>
      `;
      roadmapContainer.appendChild(card);
    });
  }

  /* -------------------------------------------------------------
     Update Dashboard Statistics
  ------------------------------------------------------------- */
  function updateStatistics() {
    const completedCount = completedSet.size;
    const percentage = Math.round((completedCount / totalDsaQuestionsCount) * 100);

    if (statTotalQuestions) statTotalQuestions.textContent = totalDsaQuestionsCount;
    if (statDsaCompleted) statDsaCompleted.textContent = completedCount;
    if (statDsaPercent) statDsaPercent.textContent = `${percentage}%`;

    if (headerDsaCount) headerDsaCount.textContent = `${completedCount}/${totalDsaQuestionsCount}`;
    if (headerDsaPercent) headerDsaPercent.textContent = `${percentage}%`;

    if (dsaProgressBarFill) {
      dsaProgressBarFill.style.width = `${percentage}%`;
    }
  }

  /* -------------------------------------------------------------
     Event Listeners
  ------------------------------------------------------------- */
  function setupEventListeners() {
    if (globalSearchInput) {
      globalSearchInput.addEventListener('input', () => renderDsaTopics());
    }
    if (difficultyFilter) {
      difficultyFilter.addEventListener('change', () => renderDsaTopics());
    }
    if (statusFilter) {
      statusFilter.addEventListener('change', () => renderDsaTopics());
    }

    if (btnExpandAll) {
      btnExpandAll.addEventListener('click', () => {
        dsaTopicsData.forEach(t => openTopicIds.add(t.id));
        renderDsaTopics();
      });
    }

    if (btnCollapseAll) {
      btnCollapseAll.addEventListener('click', () => {
        openTopicIds.clear();
        renderDsaTopics();
      });
    }

    // Export Data JSON
    if (btnExportData) {
      btnExportData.addEventListener('click', () => {
        const backupData = {
          completedQuestions: Array.from(completedSet),
          notes: notesMap,
          exportDate: new Date().toISOString()
        };
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupData, null, 2));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", `sde2_prep_backup_${new Date().toISOString().slice(0,10)}.json`);
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
      });
    }

    // Import Data JSON
    if (btnImportData && fileImportInput) {
      btnImportData.addEventListener('click', () => fileImportInput.click());
      fileImportInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function(evt) {
          try {
            const imported = JSON.parse(evt.target.result);
            if (imported.completedQuestions) {
              completedSet = new Set(imported.completedQuestions);
              localStorage.setItem(STORAGE_KEY_COMPLETED, JSON.stringify(Array.from(completedSet)));
            }
            if (imported.notes) {
              notesMap = imported.notes;
              localStorage.setItem(STORAGE_KEY_NOTES, JSON.stringify(notesMap));
            }
            renderDsaTopics();
            updateStatistics();
            alert("Progress data successfully imported!");
          } catch (err) {
            alert("Failed to parse imported JSON file.");
          }
        };
        reader.readAsText(file);
      });
    }

    // Note Modal Controls
    if (btnCloseNote) {
      btnCloseNote.addEventListener('click', closeNoteModal);
    }
    if (btnSaveNote) {
      btnSaveNote.addEventListener('click', saveNoteModal);
    }
  }

  // Note Modal Window Functions
  window.openNoteModal = function(qid, title) {
    currentNoteQId = qid;
    noteModalTitle.textContent = `Notes for #${qid} - ${title}`;
    noteTextarea.value = notesMap[qid] || '';
    noteModal.classList.add('active');
  };

  function closeNoteModal() {
    noteModal.classList.remove('active');
    currentNoteQId = null;
  }

  function saveNoteModal() {
    if (!currentNoteQId) return;
    const text = noteTextarea.value.trim();
    if (text) {
      notesMap[currentNoteQId] = text;
    } else {
      delete notesMap[currentNoteQId];
    }
    localStorage.setItem(STORAGE_KEY_NOTES, JSON.stringify(notesMap));
    closeNoteModal();
    renderDsaTopics();
  }

  function escapeQuotes(str) {
    return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
  }
});
