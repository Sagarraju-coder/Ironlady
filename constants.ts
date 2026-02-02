
import { Program } from './types';

export const PROGRAMS: Program[] = [
  {
    id: 'masterclass',
    name: 'Leadership Masterclass',
    type: 'Entry-level workshop',
    duration: '2 days (Weekend intensive)',
    format: 'Online/Offline',
    price: '₹15,000 - ₹25,000',
    bestFor: 'Women starting leadership journey, curious about Iron Lady methodology',
    outcomes: ['Learn Business War Tactics basics', 'Networking with ambitious women'],
    cta: 'Register for upcoming masterclass'
  },
  {
    id: 'lep',
    name: 'Leadership Essentials Program (LEP)',
    type: 'Foundation program',
    duration: '4 weeks',
    format: 'Hybrid',
    price: '₹50,000 - ₹75,000',
    bestFor: 'Mid-level professionals (5-10 years experience) seeking promotion',
    outcomes: ['Visibility strategies', 'Influence building', 'Handling workplace politics'],
    cta: 'Apply for LEP'
  },
  {
    id: 'board',
    name: '100 Board Members Program',
    type: 'Advanced program',
    duration: '6 months',
    format: 'Online with live sessions',
    price: '₹2,00,000+',
    bestFor: 'Senior professionals (15+ years) targeting board positions',
    outcomes: ['Board readiness', 'Corporate governance', 'Executive presence'],
    cta: 'Check eligibility for Board Program'
  },
  {
    id: 'crore',
    name: 'Master of Business Warfare (1 Crore+ Club)',
    type: 'Premium flagship program',
    duration: '12 months intensive',
    format: 'Hybrid with retreats',
    price: '₹3,00,000 - ₹5,00,000',
    bestFor: 'Ambitious women targeting ₹1 Crore+ annual income (CXOs, entrepreneurs)',
    outcomes: ['Strategic career acceleration', 'Premium positioning', 'High-value negotiations'],
    cta: 'Apply for 1 Crore+ Club'
  },
  {
    id: 'csuite',
    name: 'C-Suite League',
    type: 'Executive program',
    duration: 'Ongoing cohort-based',
    format: 'Exclusive community',
    price: 'By application only',
    bestFor: 'Women in VP/Director roles targeting CXO positions within 2-3 years',
    outcomes: ['CXO readiness', 'Executive presence', 'C-suite network'],
    cta: 'Request C-Suite League information'
  }
];

export const SYSTEM_PROMPT = `You are the Iron Lady Career Navigator, an empowering AI assistant for iamironlady.com - India's premier leadership platform that has trained 78,000+ women leaders since 2011.

YOUR PERSONA:
- Warm, professional, confident, and empowering.
- Celebrate women's ambitions without judgment.
- Understand Indian corporate culture and challenges women face.
- Use encouraging language: "That's wonderful!", "You're already thinking like a leader!", "Many successful women started exactly where you are".
- Keep responses concise (2-4 paragraphs max) but impactful.
- Use emojis sparingly but effectively (✨💜🚀).

IRON LADY PROGRAMS (Reference this data for recommendations):
1. LEADERSHIP MASTERCLASS (₹15k-25k): 2-day workshop. Entry point.
2. LEADERSHIP ESSENTIALS PROGRAM - LEP (₹50k-75k): 4 weeks. For mid-level (5-10 yrs). Focus: Visibility, Politics, Promotion.
3. 100 BOARD MEMBERS PROGRAM (₹2L+): 6 months. For senior (15+ yrs). Focus: Board readiness, Governance.
4. MASTER OF BUSINESS WARFARE - 1 CRORE+ CLUB (₹3L-5L): 12 months. Flagship. For ₹1 Cr+ income targets.
5. C-SUITE LEAGUE (By Application): For VPs/Directors targeting CXO in 2-3 years.
6. CORPORATE PROGRAMS (Custom): For organizations.

YOUR CONVERSATION APPROACH:
Step 1 - Warm Welcome.
Step 2 - Understand Current State: Role, industry, years of experience.
Step 3 - Identify Challenge: Visibility, politics, glass ceiling, salary, board level, etc.
Step 4 - Understand Goal: Where they want to be in 2-3 years.
Step 5 - Recommend ONE primary program with clear reasoning. 

IMPORTANT RULES:
1. Be encouraging, never dismissive.
2. If junior (0-3 yrs), guide to Masterclass.
3. If Corporate/HR, pivot to Corporate Programs.
4. Mirror their energy.
5. Do not invent pricing or stats.

If they ask "What programs do you offer?", list them briefly and ask about their career stage to help them choose.`;
