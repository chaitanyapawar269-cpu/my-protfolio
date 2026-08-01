export const stats = [
  { title: 'Total Colleges', value: '128', change: '+12%', icon: 'Building2', accent: 'from-sky-500 to-cyan-400' },
  { title: 'Pending Colleges', value: '14', change: '+3%', icon: 'Clock3', accent: 'from-amber-500 to-orange-400' },
  { title: 'Companies', value: '96', change: '+8%', icon: 'Briefcase', accent: 'from-violet-500 to-fuchsia-400' },
  { title: 'Pending Companies', value: '9', change: '+2%', icon: 'ShieldAlert', accent: 'from-emerald-500 to-green-400' },
];

export const activity = [
  { id: 1, title: 'New college verification submitted', meta: 'MIT College • 2 mins ago', type: 'success' },
  { id: 2, title: 'Placement report uploaded', meta: 'TechCorp • 15 mins ago', type: 'info' },
  { id: 3, title: 'Pricing plan duplicated', meta: 'Growth Plan • 42 mins ago', type: 'warning' },
];

export const applications = [
  { id: 1, student: 'Riya Patel', company: 'Stripe', status: 'Shortlisted' },
  { id: 2, student: 'Arjun Rao', company: 'Linear', status: 'Interview' },
  { id: 3, student: 'Meera Shah', company: 'Vercel', status: 'Pending' },
];

export const events = [
  { id: 1, title: 'Partner sync', time: '09:30 AM' },
  { id: 2, title: 'Revenue review', time: '01:00 PM' },
  { id: 3, title: 'Leadership update', time: '04:30 PM' },
];

export const notifications = [
  { id: 1, title: 'Payment gateway configured', detail: 'New enterprise webhook connected' },
  { id: 2, title: 'Security review pending', detail: '2 admins need attention' },
  { id: 3, title: 'Weekly report ready', detail: 'Export generated successfully' },
];

export const revenueSeries = [
  { name: 'Jan', revenue: 42 },
  { name: 'Feb', revenue: 51 },
  { name: 'Mar', revenue: 47 },
  { name: 'Apr', revenue: 66 },
  { name: 'May', revenue: 76 },
  { name: 'Jun', revenue: 88 },
];

export const applicationSeries = [
  { name: 'Mon', applications: 14 },
  { name: 'Tue', applications: 19 },
  { name: 'Wed', applications: 16 },
  { name: 'Thu', applications: 24 },
  { name: 'Fri', applications: 20 },
  { name: 'Sat', applications: 11 },
];

export const revenueSources = [
  { name: 'Enterprise', value: 42 },
  { name: 'Growth', value: 31 },
  { name: 'Starter', value: 27 },
];

export const pricingPlans = [
  { id: 1, name: 'Starter', price: '$29', billing: 'per seat', status: 'Active', badge: 'Popular', order: 1 },
  { id: 2, name: 'Growth', price: '$99', billing: 'per seat', status: 'Active', badge: 'Discount', order: 2 },
  { id: 3, name: 'Enterprise', price: '$249', billing: 'per seat', status: 'Draft', badge: 'Coming Soon', order: 3 },
];

export const colleges = [
  { id: 1, name: 'MIT Pune', status: 'Verified', city: 'Pune', programs: 28 },
  { id: 2, name: 'IIT Delhi', status: 'Pending', city: 'Delhi', programs: 41 },
  { id: 3, name: 'NIT Trichy', status: 'Verified', city: 'Trichy', programs: 36 },
];

export const students = [
  { id: 1, name: 'Asha Nair', college: 'MIT Pune', degree: 'B.Tech', status: 'Placed' },
  { id: 2, name: 'Dev Menon', college: 'IIT Delhi', degree: 'M.Tech', status: 'Interviewing' },
  { id: 3, name: 'Naina Das', college: 'NIT Trichy', degree: 'BBA', status: 'Applied' },
];

export const companies = [
  { id: 1, name: 'Stripe', industry: 'Fintech', employees: '500+', status: 'Active' },
  { id: 2, name: 'Vercel', industry: 'SaaS', employees: '250+', status: 'Pending' },
  { id: 3, name: 'Linear', industry: 'Productivity', employees: '180+', status: 'Active' },
];

export const jobs = [
  { id: 1, title: 'Frontend Engineer', company: 'Stripe', location: 'Remote', status: 'Live' },
  { id: 2, title: 'Product Analyst', company: 'Vercel', location: 'Hybrid', status: 'Draft' },
  { id: 3, title: 'Data Engineer', company: 'Linear', location: 'Onsite', status: 'Live' },
];

export const partners = [
  { id: 1, name: 'SkillForge', tier: 'Gold', status: 'Active' },
  { id: 2, name: 'CampusLink', tier: 'Silver', status: 'Pending' },
  { id: 3, name: 'HirePilot', tier: 'Platinum', status: 'Active' },
];

export const auditLogs = [
  { id: 1, action: 'Plan updated', user: 'A. Singh', time: '4h ago' },
  { id: 2, action: 'College verified', user: 'M. Kumar', time: '7h ago' },
  { id: 3, action: 'Report exported', user: 'J. Sharma', time: '11h ago' },
];
