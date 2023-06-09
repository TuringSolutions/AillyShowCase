const expertises: Array<{ title: string; body: string; svg: string }> = [
    {
      title: "Object Detection, Tracking and Labeling",
      body: "We extract insights from visual data for various needs: medical image processing, virtual try-ons, visual search, etc.",
      svg: "object-detection",
    },
    {
      title: "Recommender Systems Based on Visual Search",
      body: "Recommender systems for personalized offers and increased customer engagement and loyalty.",
      svg: "recommender",
    },
    {
      title: "Visual Inspection for Defect Detection",
      body: "Automated visual inspection solutions to look for defects on the production line and cargo damage detection.",
      svg: "defect-finder",
    },
    {
      title: "OCR & Data Capture",
      body: "Custom data capture and extraction solutions developed for document process automation.",
      svg: "doc-scanner",
    },
    {
      title: "Pose Estimation",
      body: "Solutions to track and analyze human movement and activity, and give feedback on user’s workouts.",
      svg: "pose",
    },
    {
      title: "Video Analysis for Automated Surveillance",
      body: "We develop video analytics solutions for violent behavior detection in real time.",
      svg: "video-analysis",
    },
  ];
  
  const benefits: Array<{
    title: string;
    body: string;
    subBenefits: Array<string>;
  }> = [
    {
      title: "Automate Manufacturing Parts Search and Reduce Time and Expenses",
      body: "You can't afford excessive downtime searching for a desirable product manually. A vast array of components adds to the arising difficulties. Our team is ready to help you get back up and running in no time and evade unnecessary time and money losses. An ML model analyses a picture and demonstrates the most similar ones from the database. Automating manufacturing parts search, you cut down on expenses, improve workflow efficiency, and prevent downtime.",
      subBenefits: [
        "Easy search for products",
        "Quick search for similar objects",
        "Downtime prevention",
      ],
    },
    {
      title: "Ensure On-Site Safety with Collision Prevention System",
      body: "With the increasing complexity of supply chain operations and forklift traffic, it becomes paramount to reduce the risks of employee injuries to a minimum. Embed our accident prevention solutions to control the speed, movement, and location of your forklifts on site. Our engineers utilize high-end technologies to help you solve the most challenging forklift safety scenarios and increase employer safety. With real-time monitoring, an operator under risk receives prompt alerts in case of arising danger.",
      subBenefits: [
        "Safe working environment",
        "Avoiding injury payments",
        "Real-time monitoring",
      ],
    },
    {
      title:
        "Make Process-Chain Efficient with Analogue Meters Reading Automation",
      body: "Harsh working conditions and human errors make manual analogue meters reading ineffective. Here, automation is a go-to solution to exponentially reduce the number of incorrect meter readings, cut down expenses, and optimize analogue meters reading on the whole. Switch to automated analogue meter reading to increase meters reading accuracy and prevent energy fraud and electrical losses.",
      subBenefits: [
        "Real-time and accurate gauge measurement",
        "Saving resources",
        "Reducing fraud instances",
      ],
    },
  ];
  
  const useCases: Array<{ title: string; htmlBody: string; imgUrl: string }> = [
    {
      title: "Adopt Multi-Object Detection Models for Automatic Image Tagging",
      htmlBody: "We use convolutional neural networks to teach machines what different objects look like and train algorithms to automatically identify people and objects in the picture.Multi-object detection can be a great asset for E-commerce organizations and social media platforms. It can be used to enhance the customer experience in retail, logistics, and supply chain.",
      imgUrl: "",
    },
    {
      title:
        "Extract More Insights from Visual Data with Image Segmentation Models",
      htmlBody: "Image segmentation splits an image into meaningful parts to make it easier for machines to understand, process, and analyze. Image segmentation can be widely applied for object tracking, medical image processing, face recognition, and more.",
      imgUrl: "",
    },
    {
      title: "Provide Better Experiences with Our Pose Estimation Model",
      htmlBody: "Human pose estimation is one of the most burning issues in today’s computer vision community. Our team is ready to aid you with a pose estimation model that can be implemented into your app or any other 3rd party tool. It’s aimed to predict, identify, and track the presence and location of a person and their movement to help you provide better services. This functionality will empower: Crowd counting and tracking systems, AR experiences (ex. AI-powered coaches), Gaming and entertainment, Robotics",
      imgUrl: "",
    },
    {
      title: "Automate Manual and Repetitive Tasks with OCR & Data Capturing",
      htmlBody: "Businesses deal with big data on a daily basis, and the volume is growing exponentially. Services such as data capture, retrieval, and extraction have become integral parts of organizations' workflows. We deliver high-end computer vision solutions to find, capture, and extract data automatically from unstructured documents and cut down on manual operations.",
      imgUrl: "",
    },
    {
      title:
        "Use Product Matching and Provide Accurate Recommendations with Image Similarity Search",
      htmlBody: "Image similarity search allows customers to quickly find similar products based on visual attributes such as color, shape, texture, etc, across the web. This technology is becoming increasingly important in the era of big data that businesses exploit for growth. We will help you implement the product-matching and recommendation technology to tackle massive amounts of unstructured data more efficiently, increase ROI, prevent cost overruns, and add value to your work.",
      imgUrl: "",
    },
    {
      title: "Create Unique Content with Generative Adversarial Network (GAN)",
      htmlBody: "Animation, entertainment and other visual content creation industries can benefit from GAN to generate creative interpretations of data. It can change sketches into realistic scenes, synthesize characters or scenes similar to the original ones, autocorrect artifacts in drawings, simulate and animate body physics, and generate 3D objects from pictures. ",
      imgUrl: "",
    },
    {
      title:
        "Boost Brand Visibility with Logo Detection & Brand Monitoring Solution",
      htmlBody: "Object detection algorithms facilitate specifying object presence and location in an image, based on the set of categories used to train a custom algorithm. We assist organizations and individuals by delivering machine learning-based logo detection systems. Our solutions help automate real-time recognition of brand logos in an image or in broadcast video streams and show accurate brand visibility analytics.",
      imgUrl: "",
    },
    {
      title: "Harness Big Data with Object Segmentation in 3D Point Clouds",
      htmlBody: "Point clouds are used in 3D modeling to generate accurate models of real-world items or scenes. This technology is in high demand for computer graphics, VR, and communication. Our computer vision developers and infrastructure architects will help you generate immersive 3D models of the physical world easily and with great speed.",
      imgUrl: "",
    },
  ];
  
  const usesOfGAN= "GAN is used for images to Enhance - restore quality, correct the color and lighting, upsample or remove background. Stylize - change the way the image is painted, borrowing from visual artists and styles.</li> <li>Transform - make your users look younger or older, or maybe even zombies or athletes.</li> <li>Generate - build your own portfolio of concept arts, designs or even imagined humans.</li> <li>Visualize - paint a realistic (or not really) picture from the textual description.</li> <li>Edit - vary poses, clothing and facial features such as smiles, eyes, noses or hair.</li>"

  const FAQs: Array<{ question: string; answer: string; }> = [
    {
      question: "How much does a typical computer vision project cost? ",
      answer:
        "An average computer vision project price starts at about 15k$ and can reach 50-100k$ or more. Since every project is one of a kind, the project price is calculated considering its scope, complexity, data available, domain, and target date.",
    },
    {
      question:
        "What technologies do you use to develop computer vision solutions?",
      answer: "OpenCV, Open3D, OpenCL, scikit-image, PyTorch, Tensorflow, CoreML"
    },
    {
      question: "What computer vision apps can you develop?",
      answer:
        "Using computer vision technology, we can solve the following tasks:",
    },
    {
      question: "How does R&D product development work?",
      answer:
        "Our business consultants and data scientists will help you figure out your project's feasibility. We'll study the requirements, and come up with the idea how to solve your business challenge with computer vision.",
    },
    {
      question: "What domains do you work with?",
      answer:
        "Retail/eCom, Wellness & Fitness, Healthcare, Logistics, Marketing & Advertising, Fintech, Entertainment and Gaming, but we are flexible in applying our computer vision expertise to solve business challenges faced by companies in other domains.",
    },
    {
      question:
        "My project requires work with sensitive data. How do you ensure data privacy?",
      answer: "We don't keep your data. Your data is processed locally.",
    },
    {
      question: "What are the key stages of a computer vision-based project?",
      answer:
        "First, we analyze the requirements and give an estimation. During the project setup, we choose the development model and build the team. We move to agile project development (progress reporting during each iteration and testing). Then we do the final testing and collect the feedback. Post-project support is offered upon the project completion.",
    },
  ];

  export {expertises, benefits, useCases, FAQs}