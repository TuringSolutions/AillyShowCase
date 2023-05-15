interface IUseCase { title: string; subtitle: string; url: string }
const UseCases: Array<IUseCase> = [
  {
    title: "Big Data Analytics",
    subtitle: "Enhance your data analytics",
    url: "/",
  },
  {
    title: "Predictive Analysis",
    subtitle: "Predict churn to prevent cost overrun",
    url: "/",
  },
  {
    title: "Natural Language Processing",
    subtitle: "Better understand your brand perception",
    url: "/",
  },
  {
    title: "Data Capture and OCR",
    subtitle: "Enhance accuracy and eliminate errors",
    url: "/",
  },
];

const HelpCases: Array<{caseTitle: string; caseBody: string; url: string}> = [
    {
        caseTitle: "PoC of an AI-Based Solution",
        caseBody:
          "POC is indispensible for adopting any AI solution. If you have a project idea in mind, our consultants will verify the practical feasibility of the concept.",
        url: "/",
      },
      {
        caseTitle: "MVP of an AI-Based Product",
        caseBody:
          "We are here to create the initial working prototype for your breakthrough AI product with the critical features to satisfy your early customers and receive their valuable feedback for future development.",
        url: "/",
      },
      {
        caseTitle: "AI-Driven Mobile/Web App Development",
        caseBody:
          "It's time to superpower your apps with AI features that your users will love. Our developers will discuss your use cases and incorporate AI features to your website and mobile apps.",
        url: "/",
      },
      {
        caseTitle: "ML Consulting",
        caseBody:
          "If you have a project idea and need help implementing it, our data scientists are here for consultation. They can share their insight to help you avoid any unnecessary pitfalls.",
        url: "/",
      },
]

const AWSUseCases: Array<AWSUseCase> = [
    {
      caseTitle: "Improve Customer Experience",
      caseBody: [
        {
          subtitle: "AWS Personalize",
          description: "Recommendation, Personalization",
        },
        {
          subtitle: "AWS Kendra",
          description:
            "Enhance web & apps with NLP to help users find what they search for",
        },
        {
          subtitle: "AWS Connect",
          description: "Contact center to support millions of customers",
        },
      ],
    },
    {
      caseTitle: "Data Extraction & Analysis",
      caseBody: [
        {
          subtitle: "AWS Comprehend",
          description:
            "Sentiment analysis, Topic modelling, Key-phrase extraction, Entity detection, Classification",
        },
        {
          subtitle: "AWS Comprehend Medical",
          description: "Extract information from unstructured medical text",
        },
        {
          subtitle: "AWS Textract",
          description:
            "Document extraction, Document redaction, Table extraction",
        },
      ],
    },
    {
      caseTitle: "Computer Vision",
      caseBody: [
        {
          subtitle: "AWS Rekognition",
          description:
            "Object detection, Text detection, Image moderation, Activity detection",
        },
        {
          subtitle: "AWS Lookout for Vision",
          description:
            "Detect defects, Automate inspection, Identify vehicle & structure damage",
        },
      ],
    },
    {
      caseTitle: "Language AI",
      caseBody: [
        {
          subtitle: "AWS Lex",
          description: "Conversational chatbots, BI chatbots",
        },
        {
          subtitle: "AWS Transcribe",
          description:
            "Speech-to-text, Create transcripts, Content redaction, Vocabulary filtering",
        },
        {
          subtitle: "AWS Polly",
          description: "Text-to-speech, Text dictation",
        },
      ],
    },
    {
      caseTitle: "Business metrics",
      caseBody: [
        {
          subtitle: "AWS Forecast",
          description:
            "Forecast business outcomes, Retail forecasting, Demand forecasting",
        },
        {
          subtitle: "AWS Fraud Detector",
          description:
            "Identify suspicious online payments, Detect new account fraud, Prevent loyalty program abuse",
        },
        {
          subtitle: "AWS Lookout for Metrics",
          description:
            "Detect anomalies in business metrics and identify their root cause, Understand churn & retention, Optimize your digital ad spend, Boost user engagement",
        },
      ],
    },
  ];


const Industries : Array<{title: string, body: string, url: string, icon: string}> = [
  // {
  //   title: "Digital Health",
  //   body: "Introduce neural networks into your mobile app and products to analyze user data and provide accurate services.",
  //   url: "",
  //   icon: ""
  // },
  {
    title: "Retail & E-commerce",
    body: "The entire industry is using AI to make strategic decisions. Don't be left behind! Let our data scientists help you!",
    url: "",
    icon: "shop"
  },
  {
    title: "Entertainment",
    body: "Automate customer feedback analysis and analyze enormous amounts of data to become more productive and provide outstanding services.",
    url: "",
    icon: "film"
  },
  {
    title: "Advertising",
    body: "Improve your advertising capabilities through AI and advanced social media analytics.",
    url: "",
    icon: "megaphone"
  },
  {
    title: "Financial Services",
    body: "Optimize your processes and improve internal safety and security through custom AI solutions and data science services.",
    url: "",
    icon: "cash-coin"
  }
]

interface Testimonial {
    imageSrc: string;
    authorName: string;
    designation: string;
    company: string;
    testimonialBody: string;
  }
  
interface AWSUseCase {
    caseTitle: string;
    caseBody: Array<{ subtitle: string; description: string }>;
  }
export {UseCases, IUseCase, HelpCases, AWSUseCases, AWSUseCase, Testimonial, Industries}