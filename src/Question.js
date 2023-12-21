const aiQuestions = [
    {
      id: 1,
      question: "What is artificial intelligence?",
      answer: "Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think and learn like humans.",
      options: [
        { text: "A technology used for virtual reality gaming.", correct: false },
        { text: "The simulation of human intelligence in machines.", correct: true },
        { text: "A programming language for web development.", correct: false },
        { text: "An advanced form of robotics.", correct: false }
      ]
    },
    {
      id: 2,
      question: "How does machine learning differ from traditional programming?",
      answer: "In traditional programming, explicit instructions are given to perform tasks. In machine learning, algorithms learn patterns from data and make predictions without being explicitly programmed.",
      options: [
        { text: "By using quantum computing principles.", correct: false },
        { text: "By relying on explicit instructions for every task.", correct: false },
        { text: "By learning patterns from data without explicit programming.", correct: true },
        { text: "By utilizing virtual reality environments.", correct: false }
      ]
    },
    {
      id: 3,
      question: "What are the main types of machine learning?",
      answer: "The main types of machine learning are supervised learning, unsupervised learning, and reinforcement learning.",
      options: [
        { text: "Only supervised learning.", correct: false },
        { text: "Only unsupervised learning.", correct: false },
        { text: "Supervised, unsupervised, and reinforcement learning.", correct: true },
        { text: "Supervised and unsupervised learning only.", correct: false }
      ]
    },
    {
      id: 4,
      question: "Can you give an example of a real-world application of AI?",
      answer: "An example of a real-world AI application is natural language processing (NLP) used in virtual assistants like Siri or chatbots.",
      options: [
        { text: "AI used for predicting weather conditions.", correct: false },
        { text: "AI used for 3D printing technology.", correct: false },
        { text: "AI used in virtual assistants like Siri.", correct: true },
        { text: "AI used for creating virtual reality games.", correct: false }
      ]
    },
    {
      id: 5,
      question: "What is deep learning?",
      answer: "Deep learning is a subset of machine learning that involves neural networks with many layers (deep neural networks) to analyze and learn from data.",
      options: [
        { text: "Machine learning with a shallow understanding of data.", correct: false },
        { text: "Learning with deep philosophical concepts.", correct: false },
        { text: "A subset of machine learning with deep neural networks.", correct: true },
        { text: "Learning about ocean depths using AI.", correct: false }
      ]
    },
    {
      id: 6,
      question: "How is AI used in healthcare?",
      answer: "AI is used in healthcare for tasks like diagnostics, personalized medicine, and predictive analytics to improve patient care and outcomes.",
      options: [
        { text: "AI used for cooking recipes in hospitals.", correct: false },
        { text: "AI used for designing hospital architecture.", correct: false },
        { text: "AI used for healthcare diagnostics and personalized medicine.", correct: true },
        { text: "AI used for managing hospital staff schedules.", correct: false }
      ]
    },
    {
      id: 7,
      question: "What are the ethical concerns related to AI?",
      answer: "Ethical concerns in AI include bias in algorithms, job displacement, privacy issues, and the responsible use of AI technologies.",
      options: [
        { text: "Ethical concerns about time travel in AI.", correct: false },
        { text: "Ethical concerns about AI playing board games.", correct: false },
        { text: "Ethical concerns about bias in algorithms, job displacement, and privacy issues.", correct: true },
        { text: "Ethical concerns about AI creating art.", correct: false }
      ]
    },
    {
      id: 8,
      question: "What is natural language processing (NLP)?",
      answer: "Natural Language Processing is a field of AI that focuses on the interaction between computers and humans using natural language, enabling machines to understand, interpret, and generate human-like text.",
      options: [
        { text: "Processing natural ingredients for cooking.", correct: false },
        { text: "Creating languages for programming.", correct: false },
        { text: "A field of AI focusing on human-computer interaction using natural language.", correct: true },
        { text: "Processing data in a non-natural language.", correct: false }
      ]
    },
    {
      id: 9,
      question: "What are the challenges in developing AI systems?",
      answer: "Challenges in developing AI systems include data quality, interpretability of models, ethical considerations, and addressing the limitations of current AI technologies.",
      options: [
        { text: "Challenges in developing AI-related board games.", correct: false },
        { text: "Challenges in developing AI for creating music.", correct: false },
        { text: "Challenges in developing AI systems related to data quality, interpretability, and ethics.", correct: true },
        { text: "Challenges in developing AI for predicting the future.", correct: false }
      ]
    },
    {
      id: 10,
      question: "What is the future of AI?",
      answer: "The future of AI involves advancements in areas like robotics, autonomous systems, AI ethics, and the integration of AI into various aspects of daily life, business, and technology.",
      options: [
        { text: "The future of AI in underwater exploration only.", correct: false },
        { text: "The future of AI involving advancements in robotics, autonomous systems, and AI ethics.", correct: true },
        { text: "The future of AI limited to board game applications.", correct: false },
        { text: "The future of AI focused solely on predicting the weather.", correct: false }
      ]
    },
    {
      id: 11,
      question: "How does artificial intelligence impact job markets?",
      answer: "AI can lead to job displacement in certain industries but also creates new job opportunities, especially in areas related to AI development and maintenance.",
      options: [
        { text: "AI has no impact on job markets.", correct: false },
        { text: "AI only creates job opportunities in traditional sectors.", correct: false },
        { text: "AI can lead to job displacement but also creates new opportunities in AI-related fields.", correct: true },
        { text: "AI has a negative impact on all job markets.", correct: false }
      ]
    },
    {
      id: 12,
      question: "What is the difference between narrow AI and general AI?",
      answer: "Narrow AI, or weak AI, is designed for a specific task, while general AI, or strong AI, has the ability to understand, learn, and apply knowledge across various domains.",
      options: [
        { text: "There is no difference between narrow AI and general AI.", correct: false },
        { text: "Narrow AI is only used for gaming, while general AI is used in business applications.", correct: false },
        { text: "Narrow AI is designed for specific tasks, while general AI has broader capabilities.", correct: true },
        { text: "General AI is a subset of narrow AI.", correct: false }
      ]
    },
    {
      id: 13,
      question: "How do AI algorithms handle bias, and why is it a concern?",
      answer: "AI algorithms can inherit biases present in training data. Addressing bias in AI is crucial to ensure fair and ethical outcomes, as biased algorithms can lead to discrimination.",
      options: [
        { text: "AI algorithms are immune to bias.", correct: false },
        { text: "Bias in AI algorithms is intentional for better performance.", correct: false },
        { text: "AI algorithms can inherit biases from training data, and addressing bias is crucial for fair outcomes.", correct: true },
        { text: "Bias in AI algorithms is irrelevant to ethical considerations.", correct: false }
      ]
    },
    {
      id: 14,
      question: "What role does AI play in autonomous vehicles?",
      answer: "AI is essential in autonomous vehicles for tasks such as navigation, obstacle detection, and decision-making, enabling vehicles to operate without human intervention.",
      options: [
        { text: "AI has no role in autonomous vehicles.", correct: false },
        { text: "AI is only used for entertainment in autonomous vehicles.", correct: false },
        { text: "AI is essential for tasks like navigation, obstacle detection, and decision-making in autonomous vehicles.", correct: true },
        { text: "Autonomous vehicles operate without any form of AI technology.", correct: false }
      ]
    },
    {
      id: 15,
      question: "Can AI be creative? Give examples.",
      answer: "AI can exhibit creativity by generating art, music, and writing. Examples include AI-generated paintings, music compositions, and even AI-written articles.",
      options: [
        { text: "AI is incapable of any form of creativity.", correct: false },
        { text: "AI can only imitate human creativity.", correct: false },
        { text: "AI can be creative and generate art, music, and writing.", correct: true },
        { text: "Creativity is limited to human intelligence; AI cannot be creative.", correct: false }
      ]
    },
    // Continue with the remaining questions...
  ];
  
  // You can use this extended 'aiQuestions' array in your JavaScript code.
  export default aiQuestions;