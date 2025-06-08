import { 
  Users,
  IndianRupee,
  CreditCard,
  Store,
  CheckCircle,
  FileText,
  AlertTriangle,
  Calendar,
  CheckSquare,
} from 'lucide-react';

// User data
export const users = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    email: 'rajesh@company.in',
    role: 'Admin',
    status: 'active',
    location: 'Bangalore',
    department: 'Engineering',
    avatarUrl: 'https://api.dicebear.com/6.x/avataaars/svg?seed=Rajesh',
    lastActive: '2023-06-08T10:30:00.000Z'
  },
  {
    id: '2',
    name: 'Priya Sharma',
    email: 'priya@company.in',
    role: 'Manager',
    status: 'active',
    location: 'Mumbai',
    department: 'Product',
    avatarUrl: 'https://api.dicebear.com/6.x/avataaars/svg?seed=Priya',
    lastActive: '2023-06-08T09:15:00.000Z'
  },
  {
    id: '3',
    name: 'Amit Patel',
    email: 'amit@company.in',
    role: 'Developer',
    status: 'active',
    location: 'Pune',
    department: 'Engineering',
    avatarUrl: 'https://api.dicebear.com/6.x/avataaars/svg?seed=Amit',
    lastActive: '2023-06-07T16:45:00.000Z'
  },
  {
    id: '4',
    name: 'Sneha Reddy',
    email: 'sneha@company.in',
    role: 'Designer',
    status: 'active',
    location: 'Hyderabad',
    department: 'Design',
    avatarUrl: 'https://api.dicebear.com/6.x/avataaars/svg?seed=Sneha',
    lastActive: '2023-06-08T11:20:00.000Z'
  },
  {
    id: '5',
    name: 'Vikram Singh',
    email: 'vikram@company.in',
    role: 'Team Lead',
    status: 'active',
    location: 'Delhi',
    department: 'Engineering',
    avatarUrl: 'https://api.dicebear.com/6.x/avataaars/svg?seed=Vikram',
    lastActive: '2023-06-08T08:45:00.000Z'
  }
];

// Dashboard Data
export const chartData = [
  { date: '2023-06-01', visits: 2340 },
  { date: '2023-06-02', visits: 2870 },
  { date: '2023-06-03', visits: 3304 },
  { date: '2023-06-04', visits: 2198 },
  { date: '2023-06-05', visits: 3012 },
  { date: '2023-06-06', visits: 3232 },
  { date: '2023-06-07', visits: 3476 }
];

export const analyticsData = {
  dailyVisits: [
    { date: '2023-06-01', visits: 12340, onlineUsers: 8234 },
    { date: '2023-06-02', visits: 14870, onlineUsers: 9123 },
    { date: '2023-06-03', visits: 13304, onlineUsers: 8876 },
    { date: '2023-06-04', visits: 15198, onlineUsers: 10234 },
    { date: '2023-06-05', visits: 16012, onlineUsers: 11456 },
    { date: '2023-06-06', visits: 15232, onlineUsers: 10789 },
    { date: '2023-06-07', visits: 17476, onlineUsers: 12345 }
  ],
  userStats: {
    total: 125750,
    new: 2356,
    active: 98740,
    inactive: 27010
  },
  revenue: {
    current: 8745000, // ₹87,45,000
    previous: 7890000, // ₹78,90,000
    growth: 10.8
  },
  regionalData: {
    usersByRegion: [
      { region: 'North India', users: 45000, growth: 12.5 },
      { region: 'South India', users: 38000, growth: 15.2 },
      { region: 'West India', users: 32000, growth: 9.8 },
      { region: 'East India', users: 28000, growth: 11.3 }
    ],
    topCities: [
      { city: 'Mumbai', users: 15200, revenue: 2345000 },
      { city: 'Delhi', users: 14800, revenue: 2180000 },
      { city: 'Bangalore', users: 13900, revenue: 2090000 },
      { city: 'Hyderabad', users: 11200, revenue: 1680000 },
      { city: 'Chennai', users: 9800, revenue: 1470000 }
    ]
  },  charts: {
    revenue: {
      title: 'Monthly Revenue (in Lakhs ₹)',
      data: [
        { month: 'Jan', revenue: 4500000, target: 4000000 }, // ₹45L
        { month: 'Feb', revenue: 5200000, target: 4200000 },
        { month: 'Mar', revenue: 4800000, target: 4500000 },
        { month: 'Apr', revenue: 6100000, target: 4800000 },
        { month: 'May', revenue: 5500000, target: 5000000 },
        { month: 'Jun', revenue: 6700000, target: 5200000 }
      ]
    },
    categoryPerformance: {
      title: 'Sales by Category (in Lakhs ₹)',
      data: [
        { category: 'Mobile Phones', revenue: 2800000, growth: 15.5 },
        { category: 'Fashion', revenue: 2200000, growth: 12.8 },
        { category: 'Electronics', revenue: 1900000, growth: 18.2 },
        { category: 'Home & Kitchen', revenue: 1500000, growth: 9.5 },
        { category: 'Books', revenue: 800000, growth: 7.2 }
      ]
    },
    userAcquisition: {
      title: 'User Acquisition Sources',
      data: [
        { source: 'Social Media', users: 28400, percentage: 35 },
        { source: 'Search Engines', users: 24200, percentage: 30 },
        { source: 'Direct Traffic', users: 16200, percentage: 20 },
        { source: 'Partner Sites', users: 8100, percentage: 10 },
        { source: 'Email Marketing', users: 4050, percentage: 5 }
      ]
    },
    deviceDistribution: {
      title: 'Device & Platform Usage',
      data: [
        { device: 'Mobile Android', percentage: 45 },
        { device: 'Mobile iOS', percentage: 25 },
        { device: 'Desktop', percentage: 20 },
        { device: 'Tablet', percentage: 8 },
        { device: 'Others', percentage: 2 }
      ]
    },
    userEngagement: {
      title: 'User Engagement Metrics',
      data: [
        { metric: 'Avg. Session Duration', value: '8.5 mins', trend: 'up' },
        { metric: 'Pages per Session', value: '4.2', trend: 'up' },
        { metric: 'Bounce Rate', value: '32%', trend: 'down' },
        { metric: 'Conversion Rate', value: '3.8%', trend: 'up' }
      ]
    },
    paymentMethods: {
      title: 'Payment Methods Distribution',
      data: [
        { method: 'UPI', percentage: 45, transactions: 58000 },
        { method: 'Credit Card', percentage: 25, transactions: 32000 },
        { method: 'Debit Card', percentage: 15, transactions: 19000 },
        { method: 'Net Banking', percentage: 10, transactions: 13000 },
        { method: 'Wallets', percentage: 5, transactions: 6500 }
      ]
    },
    regionalSales: {
      title: 'Sales by Region (in Lakhs ₹)',
      data: [
        { region: 'North India', revenue: 2800000, orders: 24500 },
        { region: 'South India', revenue: 2500000, orders: 21800 },
        { region: 'West India', revenue: 2200000, orders: 19200 },
        { region: 'East India', revenue: 1800000, orders: 15600 },
        { region: 'Central India', revenue: 1200000, orders: 10400 }
      ]
    }
  }
};

// Messages data
export const messages = [
  {
    id: '1',
    from: users[0], // Rajesh Kumar
    content: 'Team, we need to prepare our systems for the upcoming festival season sale. Please review the load testing results and infrastructure scaling plan.',
    timestamp: '2023-06-08T10:30:00.000Z',
    read: false,
    attachments: [
      { name: 'diwali-sale-prep-2023.pdf', type: 'document', size: '2.4 MB' },
      { name: 'load-test-results.xlsx', type: 'spreadsheet', size: '1.8 MB' }
    ],
    priority: 'high',
    tags: ['festival-sale', 'infrastructure']
  },
  {
    id: '2',
    from: users[1], // Priya Sharma
    content: 'The regional language support for Hindi and Tamil is now live in staging. Please test the UI elements and translations.',
    timestamp: '2023-06-08T09:15:00.000Z',
    read: true,
    attachments: [
      { name: 'translation-guide.pdf', type: 'document', size: '1.2 MB' }
    ],
    priority: 'medium',
    tags: ['localization', 'testing']
  },
  {
    id: '3',
    from: users[2],
    content: 'Weekly report is ready for review. I\'ve included the performance metrics and user feedback from the latest release.',
    timestamp: '2023-06-07T16:45:00.000Z',
    read: true,
    attachments: [
      { name: 'weekly-report-june-7.pdf', type: 'document', size: '1.8 MB' },
      { name: 'performance-metrics.xlsx', type: 'spreadsheet', size: '956 KB' }
    ],
    priority: 'medium'
  },
  {
    id: '4',
    from: users[0],
    content: 'Our client meeting is scheduled for tomorrow at 2 PM. I\'ve attached the presentation and meeting agenda.',
    timestamp: '2023-06-07T15:30:00.000Z',
    read: true,
    attachments: [
      { name: 'client-presentation.pptx', type: 'presentation', size: '3.2 MB' },
      { name: 'meeting-agenda.docx', type: 'document', size: '245 KB' }
    ],
    priority: 'high'
  },
  {
    id: '5',
    from: users[1],
    content: 'The bug in the reporting module has been fixed. The patch includes performance improvements as well.',
    timestamp: '2023-06-07T14:20:00.000Z',
    read: true,
    attachments: [
      { name: 'patch-notes.md', type: 'text', size: '12 KB' }
    ],
    priority: 'low'
  },
  {
    id: '6',
    from: users[2],
    content: 'Need your input on the new analytics dashboard wireframes. I\'ve explored different layouts and visualizations.',
    timestamp: '2023-06-07T11:45:00.000Z',
    read: true,
    attachments: [
      { name: 'analytics-wireframes.fig', type: 'design', size: '1.7 MB' },
      { name: 'design-specs.pdf', type: 'document', size: '845 KB' }
    ],
    priority: 'medium'
  }
];

// Notifications data
export const notifications = [
  {
    id: '1',
    title: 'Festival Sale Alert',
    message: 'Diwali Sale starting tomorrow! All systems need to be prepared for high traffic.',
    type: 'info',
    icon: Users,
    timestamp: '2023-06-08T10:30:00.000Z',
    read: false,
    priority: 'high'
  },
  {
    id: '2',
    title: 'Mumbai Server Alert',
    message: 'High traffic detected on Mumbai region servers. Load balancer scaling initiated.',
    type: 'warning',
    icon: AlertTriangle,
    timestamp: '2023-06-08T09:15:00.000Z',
    read: false,
    priority: 'high'
  },
  {
    id: '3',
    title: 'Task Completed',
    message: 'Database backup completed successfully',
    type: 'success',
    icon: CheckSquare,
    timestamp: '2023-06-07T16:45:00.000Z',
    read: true,
    priority: 'low'
  },
  {
    id: '4',
    title: 'System Update Required',
    message: 'New security patch available for installation',
    type: 'warning',
    icon: AlertTriangle,
    timestamp: '2023-06-08T08:30:00.000Z',
    read: false,
    priority: 'high'
  },
  {
    id: '5',
    title: 'Project Milestone Achieved',
    message: 'E-commerce integration phase completed ahead of schedule',
    type: 'success',
    icon: CheckSquare,
    timestamp: '2023-06-08T07:45:00.000Z',
    read: false,
    priority: 'medium'
  },
  {
    id: '6',
    title: 'New Feature Request',
    message: 'Client requested implementation of social media integration',
    type: 'info',
    icon: FileText,
    timestamp: '2023-06-08T07:00:00.000Z',
    read: false,
    priority: 'medium'
  },
  {
    id: '7',
    title: 'Performance Optimization',
    message: 'Website loading time improved by 25%',
    type: 'success',
    icon: CheckSquare,
    timestamp: '2023-06-07T15:30:00.000Z',
    read: true,
    priority: 'low'
  },
  {
    id: '8',
    title: 'Storage Space Alert',
    message: 'Server storage capacity reaching 90%',
    type: 'warning',
    icon: AlertTriangle,
    timestamp: '2023-06-07T14:15:00.000Z',
    read: true,
    priority: 'high'
  }
];

// Calendar events
export const events = [
  {
    id: '1',
    title: 'All Hands Meeting',
    start: '2023-06-08T10:00:00.000Z',
    end: '2023-06-08T11:30:00.000Z',
    type: 'meeting',
    description: 'Monthly company update with CEO from Bangalore office',
    location: 'Main Conference Room + Zoom',
    attendees: ['Rajesh Kumar', 'Priya Sharma', 'Amit Patel']
  },
  {
    id: '2',
    title: 'Diwali Sale Launch',
    start: '2023-06-15T00:00:00.000Z',
    end: '2023-06-15T23:59:59.000Z',
    type: 'deadline',
    description: 'Major e-commerce festival sale launch',
    location: 'All Offices',
    priority: 'high'
  },
  {
    id: '3',
    title: 'Client Meeting - TCS',
    start: '2023-06-09T15:00:00.000Z',
    end: '2023-06-09T16:00:00.000Z',
    type: 'call',
    description: 'Project requirements discussion with TCS team',
    location: 'Mumbai Office + Teams Call',
    attendees: ['Sneha Reddy', 'Vikram Singh']
  },
  {
    id: '4',
    title: 'Tech Team Sprint Planning',
    start: '2023-06-10T11:00:00.000Z',
    end: '2023-06-10T12:30:00.000Z',
    type: 'meeting',
    description: 'Sprint planning for the next two weeks',
    location: 'Pune Office',
    attendees: ['Amit Patel', 'Vikram Singh']
  },
  {
    id: '5',
    title: 'UPI Integration Review',
    start: '2023-06-12T14:00:00.000Z',
    end: '2023-06-12T15:00:00.000Z',
    type: 'review',
    description: 'Review of new UPI payment integration',
    location: 'Tech Conference Room',
    priority: 'high'
  },
  {
    id: '6',
    title: 'Regional Manager Meeting',
    start: '2023-06-14T09:30:00.000Z',
    end: '2023-06-14T11:00:00.000Z',
    type: 'meeting',
    description: 'Monthly review with all regional managers',
    location: 'Delhi Office + Zoom',
    attendees: ['Rajesh Kumar', 'Priya Sharma']
  }
];

// Kanban board data
export const kanbanData = {
  tasks: [
    {
      id: '1',
      title: 'UPI Payment Integration',
      description: 'Integrate UPI payment gateway with multiple banks support',
      status: 'todo',
      priority: 'high',
      assignee: users[2], // Amit Patel
      dueDate: '2023-06-15T00:00:00.000Z',
      labels: ['feature', 'payment']
    },
    {
      id: '2',
      title: 'Regional Language Support',
      description: 'Add support for Hindi, Tamil, Telugu and Bengali languages',
      status: 'in-progress',
      priority: 'high',
      assignee: users[1], // Priya Sharma
      dueDate: '2023-06-12T00:00:00.000Z',
      labels: ['localization', 'ui']
    },
    {
      id: '3',
      title: 'GST Integration',
      description: 'Implement GST calculation and reporting system',
      status: 'todo',
      priority: 'high',
      assignee: users[4], // Vikram Singh
      dueDate: '2023-06-20T00:00:00.000Z',
      labels: ['finance', 'compliance']
    },
    {
      id: '4',
      title: 'Mobile App Performance',
      description: 'Optimize app performance for low-end Android devices',
      status: 'in-progress',
      priority: 'medium',
      assignee: users[2], // Amit Patel
      dueDate: '2023-06-18T00:00:00.000Z',
      labels: ['performance', 'mobile']
    },
    {
      id: '5',
      title: 'Festival Sale UI Design',
      description: 'Design special UI themes for upcoming festival sales',
      status: 'in-progress',
      priority: 'medium',
      assignee: users[3], // Sneha Reddy
      dueDate: '2023-06-14T00:00:00.000Z',
      labels: ['design', 'festival-sale']
    },
    {
      id: '6',
      title: 'Address Verification System',
      description: 'Implement Aadhaar-based address verification',
      status: 'done',
      priority: 'high',
      assignee: users[0], // Rajesh Kumar
      dueDate: '2023-06-07T00:00:00.000Z',
      labels: ['feature', 'verification']
    },
    {
      id: '7',
      title: 'Cash on Delivery Updates',
      description: 'Update CoD handling process for tier 2 & 3 cities',
      status: 'done',
      priority: 'medium',
      assignee: users[1], // Priya Sharma
      dueDate: '2023-06-05T00:00:00.000Z',
      labels: ['payment', 'logistics']
    }
  ],
  columns: [
    { id: 'todo', title: 'To Do' },
    { id: 'in-progress', title: 'In Progress' },
    { id: 'done', title: 'Done' }
  ]
};

// Activity timeline data
export const activities = [
  {
    id: '1',
    user: users[0], // Rajesh Kumar
    action: 'launched',
    target: 'UPI Payment System',
    details: 'Successfully integrated with major Indian banks',
    timestamp: '2023-06-08T10:30:00.000Z',
    icon: FileText,
    category: 'deployment'
  },
  {
    id: '2',
    user: users[1], // Priya Sharma
    action: 'implemented',
    target: 'Multi-language Support',
    details: 'Added Hindi and Tamil language options',
    timestamp: '2023-06-08T09:15:00.000Z',
    icon: CheckSquare,
    category: 'feature'
  },
  {
    id: '3',
    user: users[2], // Amit Patel
    action: 'optimized',
    target: 'Mobile App Performance',
    details: 'Improved load time by 40% for low-end devices',
    timestamp: '2023-06-07T16:45:00.000Z',
    icon: Calendar,
    category: 'performance'
  },
  {
    id: '4',
    user: users[3], // Sneha Reddy
    action: 'designed',
    target: 'Diwali Sale Campaign',
    details: 'Created festive theme and promotional banners',
    timestamp: '2023-06-07T14:30:00.000Z',
    icon: FileText,
    category: 'design'
  },
  {
    id: '5',
    user: users[4], // Vikram Singh
    action: 'configured',
    target: 'GST Integration',
    details: 'Set up automated GST calculations and reporting',
    timestamp: '2023-06-07T11:15:00.000Z',
    icon: CheckSquare,
    category: 'finance'
  }
];

// Dashboard stats cards data
export const statsCards = [
  {
    id: '1',
    title: 'Total Users',
    value: '1,25,750',
    icon: Users,
    trend: 'up',
    changeValue: 12.5,
    changeDuration: 'vs. last month',
    className: 'bg-blue-50 dark:bg-blue-900/20'
  },
  {
    id: '2',
    title: 'Total Revenue',
    value: '₹8.45 Cr',
    icon: IndianRupee,
    trend: 'up',
    changeValue: 8.2,
    changeDuration: 'vs. last month',
    className: 'bg-green-50 dark:bg-green-900/20'
  },
  {
    id: '3',
    title: 'UPI Transactions',
    value: '45,678',
    icon: CreditCard,
    trend: 'up',
    changeValue: 15.3,
    changeDuration: 'vs. last month',
    className: 'bg-purple-50 dark:bg-purple-900/20'
  },
  {
    id: '4',
    title: 'Active Sellers',
    value: '12,450',
    icon: Store,
    trend: 'up',
    changeValue: 5.7,
    changeDuration: 'vs. last month',
    className: 'bg-amber-50 dark:bg-amber-900/20'
  },
  {
    id: '5',
    title: 'Delivery Success',
    value: '98.5%',
    icon: CheckCircle,
    trend: 'up',
    changeValue: 2.1,
    changeDuration: 'vs. last month',
    className: 'bg-emerald-50 dark:bg-emerald-900/20'
  }
];