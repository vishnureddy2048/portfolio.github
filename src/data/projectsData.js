// Featured projects. `repo` must match the exact GitHub repository name under
// GITHUB_USERNAME (see Projects.jsx) so live stats can be merged in via the
// GitHub REST API. If a repo name changes, update it here.
const projectsData = [
  {
    id: 'hospital',
    repo: 'smart-hospital-management',
    name: 'Smart Hospital Management System',
    endpoint: '/api/v1/hospital',
    description:
      'Full-stack hospital management platform with patient records, appointment scheduling and role-based dashboards for Admin, Manager and Staff.',
    stack: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'JWT', 'RBAC'],
  },
  {
    id: 'warehouse',
    repo: 'warehouse-management-system',
    name: 'Warehouse Management System',
    endpoint: '/api/v1/warehouse',
    description:
      'Inventory and warehouse operations system tracking stock movement, staff roles and order fulfilment with a secure, role-aware REST backend.',
    stack: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'JWT', 'REST API'],
  },
  {
    id: 'lms',
    repo: 'student-learning-platform',
    name: 'Student Learning Platform',
    endpoint: '/api/v1/lms',
    description:
      'Learning management system with course enrollment, content delivery and quiz tracking for students and instructors.',
    stack: ['Java', 'Spring Boot', 'React.js', 'MySQL'],
  },
];

export default projectsData;
