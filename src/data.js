import uiux from "./assets/images/uiux1.jpg";
import ecommerce from "./assets/images/ecommerce.jpg";
import iot from "./assets/images/iot.png";
import mobileapp from "./assets/images/mobileapp.png";

export const accordionsWeb = [
    {
        title: "Custom Website Development",
        content: "We build fast, scalable, and fully customized websites tailored to your business goals using modern technologies."
    },
    {
        title: "UI/UX Design",
        content: "Our design approach focuses on user experience, creating visually appealing and intuitive interfaces that engage users."
    },
    {
        title: "E-commerce Development",
        content: "We develop secure and high-performing e-commerce platforms with seamless user journeys and payment integrations."
    },
    {
        title: "Responsive Web Design",
        content: "All our websites are optimized for mobile, tablet, and desktop to ensure a consistent experience across devices."
    },
    {
        title: "Website Maintenance & Support",
        content: "We provide ongoing support, updates, and performance optimization to keep your website running smoothly."
    }
];
export const accordionsAI = [
    {
        title: "Bespoke AI Solutions",
        content: "Custom AI solutions tailored to your business needs."
    },
    {
        title: "Intelligent Process Automation",
        content: "Automate workflows using AI-driven technologies."
    },
    {
        title: "Machine Learning Models",
        content: "Build predictive and data-driven ML models."
    }
];
export const accordionsML = [
    {
        title: "Custom Machine Learning Solutions",
        content: "We build tailored machine learning models designed to solve specific business problems and improve decision-making."
    },
    {
        title: "Predictive Analytics",
        content: "Leverage data-driven models to forecast trends, customer behavior, and business outcomes with high accuracy."
    },
    {
        title: "Data Processing & Feature Engineering",
        content: "We clean, transform, and structure raw data into meaningful features that improve model performance."
    },
    {
        title: "Model Training & Optimization",
        content: "We develop, train, and fine-tune ML models to achieve maximum accuracy, efficiency, and scalability."
    },
    {
        title: "AI Model Deployment",
        content: "Deploy machine learning models into production environments with scalable APIs and real-time performance."
    }
];
export const accordionsIOT = [
    {
        title: "Custom IoT Solutions",
        content: "We design and develop tailored IoT systems to connect devices, automate processes, and solve real-world business challenges."
    },
    {
        title: "Smart Device Integration",
        content: "Seamlessly integrate sensors, microcontrollers, and connected devices for efficient data collection and communication."
    },
    {
        title: "Real-Time Data Monitoring",
        content: "Track and monitor device data in real time with dashboards and alerts for better decision-making and control."
    },
    {
        title: "Edge Computing & Optimization",
        content: "Process data closer to devices to reduce latency, improve performance, and optimize bandwidth usage."
    },
    {
        title: "IoT Deployment & Maintenance",
        content: "Deploy scalable IoT solutions with secure connectivity, cloud integration, and ongoing system support."
    }
];
export const accordionsUIUX = [
    {
        title: "User Interface Design",
        content: "We create visually appealing and modern UI designs that enhance user engagement and brand identity."
    },
    {
        title: "User Experience Research",
        content: "We analyze user behavior and interactions to build intuitive and user-friendly digital experiences."
    },
    {
        title: "Wireframing & Prototyping",
        content: "We design interactive wireframes and prototypes to visualize structure and flow before development."
    },
    {
        title: "Responsive Design Systems",
        content: "We build scalable design systems that ensure consistency across mobile, tablet, and desktop screens."
    },
    {
        title: "Usability Testing & Optimization",
        content: "We test real user interactions and continuously improve designs for better performance and usability."
    }
];
export const accordionsEcommerce = [
    {
        title: "Custom E-commerce Development",
        content: "We build scalable and high-performance e-commerce websites tailored to your business needs and industry."
    },
    {
        title: "Shopping Cart & Checkout Integration",
        content: "We create seamless and secure checkout systems with smooth payment gateway integration for better conversions."
    },
    {
        title: "Product & Inventory Management",
        content: "We implement efficient product catalogs and inventory systems for easy management and real-time updates."
    },
    {
        title: "Responsive E-commerce Design",
        content: "We design mobile-friendly and responsive online stores that provide a smooth shopping experience across all devices."
    },
    {
        title: "Performance & Conversion Optimization",
        content: "We optimize speed, UX, and funnel flow to increase traffic, engagement, and sales conversions."
    }
];
export const accordionsBackend = [
    {
        title: "Custom Backend Development",
        content: "We build secure, scalable, and high-performance backend systems tailored to your application needs."
    },
    {
        title: "API Development & Integration",
        content: "We create RESTful and GraphQL APIs and integrate third-party services for seamless system communication."
    },
    {
        title: "Database Design & Management",
        content: "We design optimized database structures and manage SQL/NoSQL databases for fast and reliable data handling."
    },
    {
        title: "Authentication & Security",
        content: "We implement secure authentication systems, role-based access, and data protection measures."
    },
    {
        title: "Server & Cloud Deployment",
        content: "We deploy and manage backend systems on cloud platforms ensuring scalability, uptime, and performance."
    }
];
export const accordionsMobileApp = [
    {
        title: "Custom Mobile App Development",
        content: "We build tailored mobile applications for Android and iOS that align with your business goals and deliver seamless user experiences."
    },
    {
        title: "UI/UX Design",
        content: "Design intuitive, engaging, and user-friendly interfaces that enhance usability and improve customer satisfaction."
    },
    {
        title: "Cross-Platform Development",
        content: "Develop high-performance apps using frameworks like React Native and Flutter to ensure consistency across multiple platforms."
    },
    {
        title: "App Performance Optimization",
        content: "Optimize app speed, responsiveness, and stability to provide smooth performance even under heavy usage."
    },
    {
        title: "App Deployment & Maintenance",
        content: "Handle app store deployment, updates, and ongoing maintenance to keep your application secure, up-to-date, and scalable."
    }
];
export const services = [
    {
        "path": "/web-service",
        "element": "<AIService />",
        "title": "Web designing and development",
        "description": "We build fast, scalable, and modern websites using React, Tailwind CSS, and other cutting-edge technologies.",
        "icon": "💻",
        "image": "https://ix-marketing.imgix.net/image2_rush-order-tees.png?auto=format,compress&w=1946",
        "accordion": accordionsWeb
    },
    {
        "path": "/uiux-service",
        "element": "<UiuxService />",
        "title": "UI/UX Design",
        "description": "We create intuitive, beautiful, and conversion-focused designs for web and mobile applications.",
        "icon": "🎨",
        "image": uiux ?? null,
        "accordion": accordionsUIUX ?? null
    },
    {
        "path": "/ecommerce-service",
        "element": "<EcommerceService />",
        "title": "E-commerce Solutions",
        "description": "High-performing online stores with secure payment gateways and smooth shopping experiences.",
        "icon": "🛒",
        "image": ecommerce ?? null,
        "accordion": accordionsEcommerce 
    },
    // {
    //     "path": "/seo-service",
    //     "element": "<SeoService />",
    //     "title": "SEO Optimization",
    //     "description": "We optimize your website for search engines to increase visibility and traffic.",
    //     "icon": "🚀"
    // },
    {
        "path": "/backend-service",
        "element": "<BackendService />",
        "title": "Backend Development",
        "description": "Secure and scalable server-side applications using Node.js, Express, and databases.",
        "icon": "🗄️",
        "image": "https://www.shutterstock.com/image-photo/web-development-hands-robot-human-260nw-2614142709.jpg" ?? null,
        "accordion": accordionsBackend

    },
    // {
    //     "path": "/uiux-service",
    //     "element": "<UiuxService />",
    //     "title": "Consulting & Strategy",
    //     "description": "We provide expert advice to help you plan and implement your digital strategy successfully.",
    //     "icon": "📈"
    // },
    {

        "path": "/ai-service",
        "element": "<AIService />",
        "title": "AI development",
        "description": "We provide expert advice to help you plan and implement your digital strategy successfully.",
        "icon": "📈",
        "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995",
        "accordion": accordionsAI ?? null
    },
    {
        "path": "/machine-learning-service",
        "element": "<MLService />",
        "title": "Machine Learning",
        "description": "We provide expert advice to help you plan and implement your digital strategy successfully.",
        "icon": "📈",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy4GPW0r04peWAXU0gUOm0uoPbphkTdXlNWQ&s" || null,
        "accordion": accordionsML ?? null
    },
    {
        "path": "/iot-service",
        "element": "<IotService />",
        "title": "IoT Solutions",
        "description": "We provide expert advice to help you plan and implement your digital strategy successfully.",
        "icon": "📈",
        "image": iot ?? null,
        "accordion": accordionsIOT ?? null
    },
    {
        "path": "/app-service",
        "element": "<AppService />",
        "title": "Mobile app delopment",
        "description": "We provide expert advice to help you plan and implement your digital strategy successfully.",
        "icon": "📈",
        "image": mobileapp ?? null,
        "accordion": accordionsMobileApp ?? null
    }
];
export const links = [
    { "path": "/", "title": "Home" },
    { "path": "/about", "title": "About" },
    { "path": "/projects", "title": "Projects" },
    { "path": "/services", "title": "Services", "children": services },
    { "path": "/contact", "title": "Contact" }
];
export const teams = [
    {
        name: "Ravi Teja",
        role: "Project Manager & Lead Developer",
        bio: "Passionate about building fast, scalable web applications with React and modern tools.",
        img: "https://i.pravatar.cc/150?img=12",
    },
    {
        name: "Aarti Sharma",
        role: "UI/UX Designer",
        bio: "Designs intuitive and beautiful user experiences focused on conversion.",
        img: "https://i.pravatar.cc/150?img=32",
    },
    {
        name: "Rahul Verma",
        role: "Backend Engineer",
        bio: "Expert in secure and scalable backend solutions with Node.js and databases.",
        img: "https://i.pravatar.cc/150?img=47",
    },
];





