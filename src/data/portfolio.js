import {
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiTerraform,
  SiPrometheus,
  SiGrafana,
  SiGit,
  SiPython,
  SiGithub,
  SiSonarqubeserver,
  SiLinux,
  SiAnsible,
} from 'react-icons/si';
import { FaAws, FaShieldAlt } from 'react-icons/fa';

export const profile = {
  name: 'Satish Yedida',
  role: 'DevOps Engineer',
  tagline: 'AWS · Kubernetes · CI/CD · DevSecOps',
  summary:
    'AWS DevOps Engineer with 3.7 years of experience designing scalable cloud infrastructure, building CI/CD pipelines, and managing Kubernetes workloads.',
  email: 'satishyedida36@gmail.com',
  phone: '+91 9603178856',
  location: 'India',
  linkedin: 'https://www.linkedin.com/in/satish-yedida',
  github: 'https://github.com/satishyedida',
  resumeUrl: '#',
  yearsOfExperience: 3.7,
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const strengths = [
  {
    title: 'AWS Infrastructure',
    description:
      'Architecting highly available, secure environments with EC2, VPC, IAM, ALB, and Auto Scaling Groups.',
    icon: FaAws,
    accent: 'from-amber-400 to-orange-500',
  },
  {
    title: 'Kubernetes (EKS)',
    description:
      'Production-grade workloads on EKS with Ingress, HPA, Helm, and progressive rollouts.',
    icon: SiKubernetes,
    accent: 'from-sky-400 to-blue-600',
  },
  {
    title: 'CI/CD Automation',
    description:
      'End-to-end delivery pipelines with Jenkins and GitHub Actions — build, test, scan, ship.',
    icon: SiJenkins,
    accent: 'from-rose-400 to-red-500',
  },
  {
    title: 'DevSecOps',
    description:
      'Shift-left security with Trivy and SonarQube — vulnerability scanning baked into every pipeline.',
    icon: FaShieldAlt,
    accent: 'from-emerald-400 to-teal-500',
  },
];

export const skills = [
  { name: 'AWS', icon: FaAws, color: '#FF9900' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
  { name: 'Jenkins', icon: SiJenkins, color: '#D24939' },
  { name: 'Terraform', icon: SiTerraform, color: '#7B42BC' },
  { name: 'Prometheus', icon: SiPrometheus, color: '#E6522C' },
  { name: 'Grafana', icon: SiGrafana, color: '#F46800' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
  { name: 'SonarQube', icon: SiSonarqubeserver, color: '#4E9BCD' },
  { name: 'Linux', icon: SiLinux, color: '#FCC624' },
];

export const experiences = [
  {
    company: 'Tata Consultancy Services (TCS)',
    role: 'DevOps Engineer',
    period: '2022 — 2025',
    location: 'India',
    description:
      'Owned cloud infrastructure and delivery automation for enterprise microservices on AWS, accelerating release velocity while strengthening security posture.',
    achievements: [
      'Reduced release cycle time by 40% by designing automated CI/CD pipelines with Jenkins and GitHub.',
      'Containerized and deployed microservices on Amazon EKS using Docker, Helm, and HPA for auto-scaling.',
      'Implemented Application Load Balancers (ALB) with path/host-based routing and TLS termination.',
      'Integrated DevSecOps gates with Trivy image scans and SonarQube static analysis in every pipeline.',
      'Built observability stack with Prometheus and Grafana for SLO dashboards and proactive alerting.',
      'Provisioned reproducible environments using modular Terraform across VPC, EC2, and EKS.',
    ],
    stack: [
      'AWS',
      'EKS',
      'Docker',
      'Jenkins',
      'Terraform',
      'Prometheus',
      'Grafana',
      'Trivy',
      'SonarQube',
    ],
  },
];

export const projects = [
  {
    title: 'AI CI/CD Failure Analyzer',
    tagline: 'Smarter pipelines, fewer 3 AM pages',
    description:
      'AI-powered Jenkins pipeline that uses OpenAI to triage build failures, surface likely root causes, and flag vulnerabilities directly in pull request comments.',
    highlights: [
      'Real-time log analysis with OpenAI for root-cause hints',
      'Vulnerability detection wired into the build stage',
      'Slack + PR notifications with actionable summaries',
    ],
    tech: ['Node.js', 'Jenkins', 'OpenAI', 'Docker'],
    github: 'https://github.com/satishyedida',
    accent: 'from-fuchsia-500 via-purple-500 to-indigo-500',
    icon: '🤖',
  },
  {
    title: 'EKS Deployment Pipeline',
    tagline: 'GitHub → Jenkins → ECR → EKS',
    description:
      'Production-grade delivery pipeline that builds, scans, and ships containerized microservices to Amazon EKS with Ingress and Horizontal Pod Autoscaler.',
    highlights: [
      'Zero-downtime rolling deployments on EKS',
      'Image promotion from ECR with signed tags',
      'HPA + Ingress for elastic, externally routed traffic',
    ],
    tech: ['AWS', 'Kubernetes', 'Jenkins', 'Docker', 'Helm'],
    github: 'https://github.com/satishyedida',
    accent: 'from-sky-500 via-blue-500 to-indigo-500',
    icon: '☸️',
  },
];

export const stats = [
  { label: 'Years Experience', value: '3.7+' },
  { label: 'Pipelines Shipped', value: '50+' },
  { label: 'Release Cycle Reduced', value: '40%' },
  { label: 'Microservices on EKS', value: '20+' },
];
