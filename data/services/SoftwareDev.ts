import {
  ChatBubbleLeftRightIcon,
  Cog8ToothIcon,
  BeakerIcon,
  CheckBadgeIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/vue/20/solid";
import { Component } from "nuxt/schema";

const expertises: Array<{
  title: string;
  body: string;
  url: string;
  svgSource: string;
}> = [
  {
    title: "Machine Learning",
    body: "Our team of machine learning developers helps our clients drive business growth and expand their businesses by extracting valuable insights from unstructured data from multiple resources.",
    svgSource: "",
    url: "",
  },
  {
    title: "Business Intelligence",
    body: "We provide BI & Data Warehouse consulting services and offer Big Data analytics solutions to unlock the potential of your data available and set up efficient data management for enhanced decision-making.",
    svgSource: "",
    url: "",
  },
  {
    title: "Predictive Analysis",
    body: "Our professionals create proprietary models for personalized recommendations, churn prediction, dynamic pricing, fraud detection, sentiment analysis, and customer segmentation.",
    svgSource: "",
    url: "",
  },
  {
    title: "Natural Language Processing",
    body: "We analyze text data from social media, emails and audio to uncover audience insights. With our bespoke NLP solutions, you get to know your users better by detecting sentiment, interests, gender, etc.",
    svgSource: "",
    url: "",
  },
  {
    title: "Data Capture and OCR",
    body: "We automate document processing through data capture and & extraction. We help businesses improve accuracy, boost overall efficiency, and reduce human errors.",
    svgSource: "",
    url: "",
  },
  {
    title: "Computer Vision",
    body: "We empower your business with tech solutions for accurate pose estimation, image recognition, and visual search. We can help with its integration and customization according to your needs.",
    svgSource: "",
    url: "",
  },
];

const timelineEvents: Array<{title:string, body:string}> = [
  {title: "Become data-driven business", body: "Use data to empower your business decisions."},
  {title: "Improve strategic decision making", body: "AI tools help avoid biases in decisions, pull insights out of oceans of data, and make strategic choices quickly."},
  {title: "Enhance customer experience", body: "Use AI to supercharge the customer experience at every stage of the user's journey."},
  {title: "Predict customer churn", body: "Apply cutting edge algorithms to predict customers who are at a high risk of leaving based on behaviour."},
  {title: "Mitigate business risks", body: "Predict imminent business threats and devise strategies to prepare for them."},
  {title: "Forecast future trends", body: "Use past and current data to identify and analyse future trends to make better business decisions."},
  {title: "Improve work efficiency", body: "Customized AI tools can now assist human employees with data-oriented tasks."},
  {title: "Simplify data management", body: "By automating intelligent management, we can now simplify data management and integrate assets."},
  {title: "Increase revenues", body: "Holistic improvement in all aspects of business will help in increased revenues."},
  {title: "Cut down costs", body: "Proper risk management and deploying well-tested strategies ensure minimization of costs. "}
];

const industries: Array<{ title: string; body: string; icon?: string }> = [
  {
    title: "Banking & Finance",
    body: "Harness AI to power smart assistants that help with enhanced decision-making, financial apps to plan budgets, score credits, and detect anomalous transactions for fraud prevention.",
    icon: "bank",
  },
  {
    title: "Automotive Manufacturing",
    body: "Adopt AI solutions for smooth vehicle production. Perform complex simulations and design iterations, enable robust visual inspection and equipment defect detection with efficient AI automotive software.",
    icon: "speedometer",
  },
  {
    title: "Supply Chain & Logistics",
    body: "Facilitate supply planning, invoice and receipt processing, automate warehouse analysis, cargo damage detection, and optimize routes.",
    icon: "truck",
  },
  {
    title: "Insurance",
    body: "Manage claims with the help of AI, predict high loss claims and detect fraud claims, evaluate insurance property cost,  offer more customer-focused services.",
    icon: "shield-plus",
  },
  {
    title: "Retail & E-commerce",
    body: "Predict customer behavior with the help of your AI developer. Enable personalized recommendations, provide customer experience consulting services, increase the efficiency of in-store operations, and cut customer churn.",
    icon: "shop",
  },
  {
    title: "Healthcare & Pharma",
    body: "Let medical professionals use AI-assisted analytics for more effective diagnosis, personalized treatment, and to make better data-based predictions and recommendations, allow advanced evidence analytics to meet life-saving needs.",
    icon: "heart-pulse",
  },
];

const developmentProcess: Array<{
  index: number;
  title: string;
  tasks: Array<string>;
  icon: any;
}> = [
  {
    index: 0,
    title: "Discovery",
    tasks: [
      "Analyze requirements",
      "Make high-level estimation",
      "Provide technology consulting",
      "Exploratory data analysis",
    ],
    icon: ChatBubbleLeftRightIcon,
  },
  {
    index: 1,
    title: "Project Setup",
    tasks: [
      "Select the engagement model",
      "Build the core team",
      "Prepare a roadmap for the project",
      "Prepare tech documents",
    ],
    icon: Cog8ToothIcon,
  },
  {
    index: 2,
    title: "Development",
    tasks: [
      "Use Agile development methodology",
      "Progress reporting on each iteration",
      "Perform internal and release testing",
    ],
    icon: BeakerIcon,
  },
  {
    index: 3,
    title: "Live Release",
    tasks: [
      "Final testing of the complete system",
      "Solve possible issues",
      "Live release after approval",
      "Collect feedback",
    ],
    icon: CheckBadgeIcon,
  },
  {
    index: 4,
    title: "Support",
    tasks: [
      "Knowledge transfer",
      "Perform continuous server monitoring",
      "Allocate team members to fix bugs and make improvements",
    ],
    icon: WrenchScrewdriverIcon,
  },
];

const FAQs: Array<{ question: string; answer: string }> = [
  {
    question: "What is AI in software development?",
    answer:
      "AI is used in software development to help write code faster and more effectively, automate manual tasks, and speed up the testing process. Using AI in software app development, one can expect the app to be more robust, speedy, and almost error-free.",
  },
  {
    question: "How much does an app with AI cost?",
    answer:
      "Custom AI apps may cost from $15 K up to $70-100K and more. The cost usually comes from complexity, functionality, and exclusiveness.",
  },
  {
    question: "What is an AI development company?",
    answer:
      "An AI company is an AI technology vendor who has got broad expertise under their belt, an impressive project portfolio in various business domains. AI, data scientists, software engineers, quality assurance specialists can usually work on an average project.",
  },
  {
    question: "What benefits AI provides business with?",
    answer:
      "Some of the benefits of AI are: <span><ul class='list-disc'><li>Higher revenues</li> <li>reduced costs</li> <li>business process automation</li> <li>improved speed and accuracy</li> <li>simplified data management</li> <li>personalized customer experience, and</li> <li>business risks mitigation</li></ul><span>",
  },
];

export { expertises, timelineEvents, industries, developmentProcess, FAQs };
