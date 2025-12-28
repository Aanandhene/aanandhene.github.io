export const resumeData = {
  // Personal Information
  personal: {
    name: "Anandhene",
    title: "Senior Data Engineer",
    location: "Redmond, WA",
    email: "anandhene.m@gmail.com",
    linkedin: "linkedin.com/in/anandhene",
    github: "github.com/anandhene",
    summary: "Senior Data Engineer with 8+ years of experience in building scalable data pipelines, data warehouses, and analytics platforms. Expertise in cloud data platforms, ETL/ELT processes, and transforming raw data into actionable insights."
  },

  // Work Experience
  experience: [
    {
      id: 1,
      company: "Microsoft",
      location: "Redmond, WA",
      position: "Senior Data Engineer",
      duration: "July 2023 - Present",
      type: "Full-time",
      description: "Building data infrastructure and analytics solutions for Azure cloud services",
      achievements: [
        "Architected and implemented real-time data pipelines processing 50TB+ daily using Spark and Azure Data Factory",
        "Led migration of on-premise data warehouse to Snowflake, reducing query times by 70%",
        "Designed and implemented data quality frameworks improving data accuracy by 95%",
        "Built self-service data platforms enabling 50+ data analysts and scientists"
      ],
      technologies: ["Python", "PySpark", "Azure Data Factory", "Snowflake", "Delta Lake", "dbt", "SQL"]
    },
    {
      id: 2,
      company: "Zscaler",
      location: "San Jose, CA",
      position: "Data Engineer II",
      duration: "July 2021 - June 2023",
      type: "Full-time",
      description: "Developed data infrastructure for security analytics and threat intelligence",
      achievements: [
        "Built real-time ETL pipelines processing 10B+ security events daily using Kafka and Spark Streaming",
        "Designed and implemented data lake architecture on S3 reducing storage costs by 60%",
        "Created automated data validation frameworks ensuring 99.9% data quality",
        "Developed metrics and dashboards used by executive leadership for strategic decisions"
      ],
      technologies: ["Python", "Apache Spark", "Kafka", "AWS Glue", "Redshift", "Airflow", "Terraform"]
    },
    {
      id: 3,
      company: "Oracle",
      location: "Bengaluru, India",
      position: "Data Engineer",
      duration: "August 2018 - June 2021",
      type: "Full-time",
      description: "Developed data integration solutions and analytics platforms",
      achievements: [
        "Built ETL/ELT pipelines integrating data from 20+ sources into enterprise data warehouse",
        "Optimized SQL queries improving performance by 65% and reducing costs by 40%",
        "Implemented data governance frameworks ensuring compliance with GDPR and SOC2",
        "Automated data operations reducing manual effort by 80%"
      ],
      technologies: ["Python", "SQL", "Oracle DB", "Apache Airflow", "Kubernetes", "Docker", "Jenkins"]
    }
  ],

  // Education
  education: [
    {
      id: 1,
      institution: "San Jose State University",
      location: "San Jose, CA",
      degree: "Master of Science in Computer Science",
      duration: "2016 - 2018",
      gpa: "3.8/4.0"
    },
    {
      id: 2,
      institution: "Anna University",
      location: "Chennai, India",
      degree: "Bachelor of Engineering in Computer Science",
      duration: "2012 - 2016",
      gpa: "8.5/10"
    }
  ],

  // Skills
  skills: {
    languages: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 95 },
      { name: "Scala", level: 80 },
      { name: "Java", level: 75 },
      { name: "Shell Scripting", level: 85 }
    ],
    frameworks: [
      { name: "Apache Spark", level: 90 },
      { name: "Apache Airflow", level: 90 },
      { name: "dbt", level: 85 },
      { name: "Kafka", level: 85 },
      { name: "Hadoop", level: 80 }
    ],
    cloud: [
      { name: "Azure Data Factory", level: 90 },
      { name: "AWS Glue", level: 85 },
      { name: "Snowflake", level: 90 },
      { name: "Databricks", level: 85 },
      { name: "GCP Dataflow", level: 75 }
    ],
    databases: [
      { name: "PostgreSQL", level: 90 },
      { name: "Snowflake", level: 90 },
      { name: "Redshift", level: 85 },
      { name: "BigQuery", level: 85 },
      { name: "MongoDB", level: 75 },
      { name: "Redis", level: 80 }
    ],
    tools: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 80 },
      { name: "Terraform", level: 85 },
      { name: "CI/CD", level: 85 }
    ]
  },

  // Projects
  projects: [
    {
      id: 1,
      title: "Real-Time Analytics Pipeline",
      description: "Built end-to-end real-time data pipeline for streaming analytics and dashboarding",
      role: "Lead Data Engineer",
      duration: "2023 - Present",
      technologies: ["Python", "Spark Streaming", "Kafka", "Delta Lake", "Azure"],
      highlights: [
        "Processing 50TB+ of data daily with sub-second latency",
        "Reduced time-to-insight from hours to real-time",
        "Enabled data-driven decisions for 500+ business users"
      ]
    },
    {
      id: 2,
      title: "Cloud Data Lake Migration",
      description: "Led migration of on-premise data warehouse to cloud data lake architecture",
      role: "Technical Lead",
      duration: "2021 - 2023",
      technologies: ["AWS", "Glue", "S3", "Redshift", "Airflow"],
      highlights: [
        "Migrated 5PB of data with zero downtime",
        "Reduced infrastructure costs by 60%",
        "Improved query performance by 70%"
      ]
    },
    {
      id: 3,
      title: "Customer 360 Data Platform",
      description: "Designed and implemented unified customer data platform for analytics and ML",
      role: "Data Engineer",
      duration: "2019 - 2021",
      technologies: ["Python", "SQL", "Airflow", "Snowflake", "dbt"],
      highlights: [
        "Integrated data from 15+ source systems",
        "Created single source of truth for 100M+ customers",
        "Enabled advanced analytics and ML use cases"
      ]
    }
  ],

  // Certifications
  certifications: [
    "Microsoft Certified: Azure Data Engineer Associate",
    "AWS Certified Data Analytics - Specialty",
    "Databricks Certified Data Engineer Professional",
    "Google Cloud Professional Data Engineer"
  ]
};
