// Projects highlighted on huyngo.dev — ordered by recency / relevance to AI/Data work.
const projects = [
	{
		title: 'Alliance Rehab: Trilingual AI Phone Receptionist',
		company: 'EnEns LLC',
		role: 'AI Engineer, Founder',
		category: 'AI / Voice',
		year: '2025 – Present',
		technologies: [
			'OpenAI Realtime API',
			'Twilio ConversationRelay',
			'ElevenLabs TTS',
			'Google Calendar API',
			'TypeScript',
			'Node.js',
			'AWS EC2',
			'Caddy / Let’s Encrypt',
			'pm2'
		],
		description:
			'Production trilingual (English / Vietnamese / Spanish) AI phone receptionist for a physical therapy clinic in Fountain Valley, CA. Handles overflow + after-hours calls, books appointments live into Google Calendar, takes messages, and sends SMS confirmations. Engineered half-duplex echo gating, caller barge-in, and mid-call language switching for natural conversational UX. Deployed on AWS EC2 with TLS, pm2 process management, and uptime monitoring.',
		url: ''
	},
	{
		title: 'QD.TEK AI Automation & Decision-Support Platform',
		company: 'EnEns LLC',
		role: 'AI Engineer, Consultant',
		category: 'AI / Consulting',
		year: '2025 – Present',
		technologies: ['Python', 'LLM Orchestration', 'Data Pipelines', 'Decision Logic'],
		description:
			'AI-driven decision-support and logistics POC for QD.TEK’s Purchasing Department. Translated business workflows into automated data pipelines and ML-backed recommendation logic.',
		url: ''
	},
	{
		title: 'Innova Analytics Chatbot (Internal)',
		company: 'Innova Electronics Corporation',
		role: 'Data Analyst',
		category: 'AI / NLQ',
		year: '2025 – Present',
		technologies: ['Snowflake Cortex Analyst', 'Microsoft Teams', 'SQL', 'Python'],
		description:
			'Internal Microsoft Teams natural-language interface powered by Snowflake Cortex Analyst, empowering non-technical stakeholders to query enterprise data conversationally.',
		url: ''
	},
	{
		title: 'Cloud Data Warehouse: AWS Glue → S3 → Snowflake',
		company: 'Innova Electronics Corporation',
		role: 'Data Analyst',
		category: 'Data Engineering',
		year: '2025',
		technologies: ['AWS Glue', 'Amazon S3', 'Snowflake', 'Python', 'SQL'],
		description:
			'Architected the company’s first cloud-native data warehouse by building an AWS Glue, S3, and Snowflake ETL pipeline to unify cross-product reporting and unlock downstream AI/ML workloads.',
		url: ''
	},
	{
		title: 'Inventory Demand Forecasting',
		company: 'Innova Electronics Corporation',
		role: 'Data Analyst',
		category: 'ML / Forecasting',
		year: '2025 – Present',
		technologies: ['Python', 'Time-Series ML', 'Snowflake', 'Statistical Modeling'],
		description:
			'Time-series ML model on historical sales + channel data to optimize stock planning and reduce excess inventory across Innova product lines.',
		url: ''
	},
	{
		title: 'DTC Fault-Code Predictive Model',
		company: 'Innova Electronics Corporation',
		role: 'Data Analyst',
		category: 'ML / Automotive',
		year: '2025 – Present',
		technologies: ['Python', 'Scikit-learn', 'Snowflake', 'Vehicle Telemetry'],
		description:
			'Predictive ML model for Diagnostic Trouble Code (DTC) fault prediction using aggregated vehicle telemetry, advancing automotive diagnostic forecasting capabilities.',
		url: ''
	},
	{
		title: 'RS2 GA4 Data Pipeline & Executive Dashboards',
		company: 'Innova Electronics Corporation',
		role: 'Data Analyst',
		category: 'Analytics',
		year: '2025 – Present',
		technologies: ['Google Analytics 4', 'Power BI', 'Grafana', 'SQL', 'Python'],
		description:
			'Engineered the RS2 GA4 ingestion pipeline and published executive-facing Power BI and Grafana dashboards covering revenue, user engagement, and diagnostic performance across RepairSolutions2, RSPRO, and related platforms.',
		url: ''
	},
	{
		title: 'RepairSolutionsPRO™',
		company: 'Innova Electronics Corporation',
		role: 'Software Product Engineer',
		category: 'Product',
		year: '2022 – 2025',
		technologies: ['JavaScript', 'HTML', 'CSS', 'Figma'],
		description:
			'Owned the product roadmap and UI/UX for RSPRO, Innova’s pro-grade automotive diagnostic platform.',
		url: 'https://pro.repairsolutions.com/'
	},
	{
		title: 'Innova 7111 Smart Diagnostic System',
		company: 'Innova Electronics Corporation',
		role: 'Software Product Engineer',
		category: 'Product',
		year: '2022 – 2025',
		technologies: ['JavaScript', 'HTML', 'CSS', 'Axure'],
		description:
			'Drove the 7111 OBD2 tablet from concept through sustained 40k+ active users; an enthusiast-and-pro diagnostic system with OEM-level coverage in an intuitive tablet form factor.',
		url: 'https://www.innova.com/products/smart-diagnostic-system-obd2-tablet-7111'
	}
];

export default projects;
