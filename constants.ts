import { ContentStrings } from './types';

export const CONTENT: Record<'en' | 'ar', ContentStrings> = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      title: "Beyond Reality. Above Standards.",
      subtitle: "We Transform Digital Challenges into Tangible Growth Opportunities Through Engineering Precision and Calculated Creativity.",
      cta: "Book Strategic Consultation",
    },
    partners: {
      title: "TRUSTED BY INDUSTRY VISIONARIES",
      items: [
        { name: "NEXUS", logo: "https://placehold.co/200x80/030303/FFFFFF/png?text=NEXUS" },
        { name: "VERTEX", logo: "https://placehold.co/200x80/030303/FFFFFF/png?text=VERTEX" },
        { name: "QUANTUM", logo: "https://placehold.co/200x80/030303/FFFFFF/png?text=QUANTUM" },
        { name: "CYBERDYNE", logo: "https://placehold.co/200x80/030303/FFFFFF/png?text=CYBERDYNE" },
        { name: "OMEGA", logo: "https://placehold.co/200x80/030303/FFFFFF/png?text=OMEGA" },
        { name: "HELIOS", logo: "https://placehold.co/200x80/030303/FFFFFF/png?text=HELIOS" },
        { name: "TITAN", logo: "https://placehold.co/200x80/030303/FFFFFF/png?text=TITAN" },
        { name: "APEX", logo: "https://placehold.co/200x80/030303/FFFFFF/png?text=APEX" },
        { name: "ECHO", logo: "https://placehold.co/200x80/030303/FFFFFF/png?text=ECHO" },
        { name: "FLUX", logo: "https://placehold.co/200x80/030303/FFFFFF/png?text=FLUX" }
      ],
    },
    services: {
      title: "STRATEGIC SERVICES",
      subtitle: "We don't deliver conventional digital services—we provide integrated solutions that combine technical precision with creative vision to achieve measurable results.",
      cta: "Explore Our Services",
      items: {
        branding: {
          title: "Brand Identity Development",
          desc: "Visual identities built on the Golden Ratio, designed to reflect your brand's essence and distinguish it in the market.",
          features: ["Strategic Analysis", "Visual Identity Design", "Brand Guidelines", "Communication Strategy"]
        },
        cgi: {
          title: "CGI & 3D Modeling",
          desc: "Advanced digital imaging that surpasses traditional photography—complete flexibility, scientific precision, and savings up to 60%.",
          features: ["Product 3D Modeling", "Hyper-realistic CGI", "Product Animations", "Virtual Environments"]
        },
        web: {
          title: "Web Development",
          desc: "Fast and secure websites designed to convert visitors into clients, with focus on user experience and results.",
          features: ["Custom Websites", "E-commerce Platforms", "SEO Optimization", "Conversion Focus"]
        },
      },
    },
    antiTemplate: {
      title: "THE ANTI-TEMPLATE APPROACH",
      subtitle: "Why generic solutions fail to deliver strategic results in the modern B2B landscape.",
      cards: {
        template: {
          title: "Standard Templates",
          list: ["Generic designs used by thousands", "Bloated code affecting performance", "Limited scalability", "Zero strategic differentiation"]
        },
        custom: {
          title: "Eagleon Custom Architecture",
          list: ["Bespoke design systems", "Performance-optimized engineering", "Unlimited scalability", "Strategic alignment with business goals"]
        }
      }
    },
    whyUs: {
      title: "WHY CHOOSE EAGLEON?",
      reasons: [
        { title: "Mathematical Precision", desc: "We use the Golden Ratio in every design—not as a marketing element, but as a working methodology ensuring perfect visual balance." },
        { title: "Global Technologies", desc: "We deliver CGI and 3D modeling capabilities matching international studios—in Amman's local market." },
        { title: "Deep B2B Understanding", desc: "We recognize your decisions require time and analysis. We focus on credibility and real value, not superficial dazzle." },
        { title: "True Partnership", desc: "We don't wait for you to tell us what you want—we help you determine what you actually need to achieve your objectives." }
      ]
    },
    about: {
      title: "WE'RE NOT JUST A MEDIA AGENCY",
      subtitle: "We are a strategic partner merging engineering precision with visual creativity to build digital solutions that deliver tangible results.",
      story: {
        title: "Our Story",
        content: "EAGLEON was founded in Amman on a simple conviction: the digital world needs more precision and less randomness. We chose the eagle as our symbol not only for its strength and sharp vision, but because it embodies our core principle: dominance comes from the right altitude and clear vision. We built our entire visual identity on the Golden Ratio—because we believe true design is not coincidence, but science."
      },
      philosophy: {
        title: "Our Philosophy",
        content: "Every visual decision must be built on a mathematical foundation. Every digital strategy must achieve a measurable objective. Every client relationship must evolve into a long-term strategic partnership."
      },
      values: {
        title: "Core Values",
        list: [
          { title: "Calculated Creativity", desc: "Ideas stemming from precise analysis." },
          { title: "Engineering Precision", desc: "Precision is the foundation of excellence." },
          { title: "Holistic Vision", desc: "Connecting all digital presence elements." },
          { title: "Bold Execution", desc: "Staying ahead of the market." },
          { title: "Absolute Reliability", desc: "Fixed operational standards, not promises." }
        ]
      }
    },
    portfolio: {
      title: "SUCCESS PARTNERS",
      subtitle: "Our clients don't purchase services—they invest in results. Here's how we helped leading companies achieve quantum leaps.",
      viewAll: "View All Projects",
      cta: "Want to achieve similar results?",
      tabs: [
        { id: 'all', label: 'All' },
        { id: 'web', label: 'Web' },
        { id: 'branding', label: 'Branding' },
        { id: 'cgi', label: 'CGI / 3D' }
      ],
      items: [
        {
          title: "Quantum Dynamics",
          category: "CGI / Motion Design",
          filter: "cgi",
          coverUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
          media: [
             { type: 'video', url: "https://drive.google.com/file/d/14dKaQYnwsz8BRScHiKZPVS5vlGWndgtt/view?usp=sharing" }
          ]
        },
        {
          title: "Apex Finance",
          category: "Web Platform / Fintech",
          filter: "web",
          coverUrl: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1000&auto=format&fit=crop",
          media: [
             { type: 'image', url: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1000&auto=format&fit=crop" },
             { type: 'image', url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" }
          ]
        },
        {
          title: "Neon Horizon",
          category: "CGI / Automotive",
          filter: "cgi",
          coverUrl: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1000&auto=format&fit=crop",
          media: [
            { type: 'image', url: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1000&auto=format&fit=crop" },
            { 
              type: 'video', 
              url: "https://res.cloudinary.com/dzbsayerm/video/upload/v1742588195/Transparent_Video_ve4wwu.mp4" 
            }
          ]
        },
        {
          title: "Velvet Interiors",
          category: "Branding / Luxury",
          filter: "branding",
          coverUrl: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop",
          media: [
            { type: 'image', url: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop" },
            { type: 'image', url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop" },
            { type: 'image', url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=1000&auto=format&fit=crop" }
          ]
        },
        {
          title: "Cyberpunk 2099",
          category: "3D Environment",
          filter: "cgi",
          coverUrl: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop",
          media: [
            { type: 'image', url: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop" },
            { type: 'video', url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" }
          ]
        }
      ]
    },
    contact: {
      title: "LET'S START A STRATEGIC CONVERSATION",
      subtitle: "Whether you're looking for a strategic partner for a complete project or need consultation on a specific digital challenge—we're here to listen and help.",
      form: {
        name: "Full Name / Company",
        email: "Email Address",
        phone: "Phone Number",
        service: "Required Service Type",
        message: "Your Message / Challenge",
        submit: "Send Your Request",
        serviceOptions: ["Brand Identity Development", "CGI & 3D Modeling", "Web Development", "Strategic Consultation", "Other"]
      },
      info: {
        email: "contact@eagleondigital.com",
        phone: "+962 7 7511 6339",
        phone: "+962 7 9000 0000",
        location: "246, 5th floor, Ramalla center, Khalid Bin Al Waleed St, Jabal Al Hussain, Amman"
      }
    },
    footer: {
      about: {
        title: "About EAGLEON",
        desc: "Your strategic partner for digital growth in Amman, Jordan. We transform challenges into opportunities through engineering precision and calculated creativity."
      },
      links: {
        title: "Quick Links",
        items: ["Home", "About Us", "Services", "Projects", "Contact Us"]
      },
      services: {
        title: "Our Services",
        items: ["Brand Identity", "CGI & 3D Modeling", "Web Development"]
      },
      contact: {
        title: "Contact Us"
      },
      copyright: "© 2026 EAGLEON Digital Solutions. All Rights Reserved."
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      projects: "مشاريعنا",
      contact: "تواصل معنا",
    },
    hero: {
      title: "شريك النمو الاستراتيجي",
      subtitle: "نحوّل التحديات الرقمية إلى فرص نمو ملموسة من خلال الدقة الهندسية والإبداع المحسوب.",
      cta: "احجز استشارة استراتيجية",
    },
    partners: {
      title: "شركات رائدة تثق بنا",
      items: [
        { name: "نيكسوس", logo: "https://placehold.co/200x80/030303/FFFFFF/png?text=NEXUS" },
        { name: "فيرتكس", logo: "https://placehold.co/200x80/030303/FFFFFF/png?text=VERTEX" },
        { name: "كوانتوم", logo: "https://placehold.co/200x80/030303/FFFFFF/png?text=QUANTUM" },
        { name: "سايبرداين", logo: "https://placehold.co/200x80/030303/FFFFFF/png?text=CYBERDYNE" },
        { name: "أوميغا", logo: "https://placehold.co/200x80/030303/FFFFFF/png?text=OMEGA" },
        { name: "هيليوس", logo: "https://placehold.co/200x80/030303/FFFFFF/png?text=HELIOS" },
        { name: "تيتان", logo: "https://placehold.co/200x80/030303/FFFFFF/png?text=TITAN" },
        { name: "أبيكس", logo: "https://placehold.co/200x80/030303/FFFFFF/png?text=APEX" },
        { name: "إيكو", logo: "https://placehold.co/200x80/030303/FFFFFF/png?text=ECHO" },
        { name: "فلوكس", logo: "https://placehold.co/200x80/030303/FFFFFF/png?text=FLUX" }
      ],
    },
    services: {
      title: "خدماتنا الاستراتيجية",
      subtitle: "لا نقدم خدمات رقمية تقليدية — بل حلولاً متكاملة تدمج بين الدقة التقنية والرؤية الإبداعية لتحقيق نتائج قابلة للقياس.",
      cta: "استكشف خدماتنا",
      items: {
        branding: {
          title: "بناء الهويات التجارية",
          desc: "هويات بصرية مبنية على النسبة الذهبية، مصممة لتعكس جوهر علامتك وتميّزها في السوق.",
          features: ["تحليل استراتيجي", "تصميم الهوية البصرية", "دليل الهوية التجارية", "استراتيجية الاتصال"]
        },
        cgi: {
          title: "CGI & 3D Modeling",
          desc: "تصوير رقمي متقدم يتجاوز التصوير التقليدي — مرونة كاملة، دقة علمية، وتوفير يصل إلى 60%.",
          features: ["نمذجة ثلاثية الأبعاد", "تصوير CGI واقعي", "فيديوهات ترويجية", "بيئات افتراضية"]
        },
        web: {
          title: "تطوير المواقع الإلكترونية",
          desc: "مواقع سريعة وآمنة مُصممة لتحويل الزوار إلى عملاء، مع تركيز على تجربة المستخدم والنتائج.",
          features: ["مواقع مخصصة", "متاجر إلكترونية", "تحسين محركات البحث", "تحسين معدلات التحويل"]
        },
      },
    },
    antiTemplate: {
      title: "نهج يرفض القوالب",
      subtitle: "لماذا تفشل الحلول العامة في تحقيق نتائج استراتيجية في سوق الأعمال الحديث.",
      cards: {
        template: {
          title: "القوالب الجاهزة",
          list: ["تصاميم عامة يستخدمها الآلاف", "كود متضخم يؤثر على الأداء", "قابلية توسع محدودة", "غياب التميز الاستراتيجي"]
        },
        custom: {
          title: "هندسة إيجلون المخصصة",
          list: ["أنظمة تصميم مفصلة خصيصاً", "هندسة برمجية محسنة للأداء", "قابلية توسع لا محدودة", "توافق استراتيجي مع أهداف العمل"]
        }
      }
    },
    whyUs: {
      title: "لماذا تختار EAGLEON؟",
      reasons: [
        { title: "الدقة الرياضية", desc: "نستخدم النسبة الذهبية في كل تصميم — ليس كعنصر تسويقي، بل كمنهجية عمل تضمن التوازن البصري المثالي." },
        { title: "تقنيات عالمية", desc: "نقدم قدرات CGI ونمذجة ثلاثية الأبعاد تضاهي الاستوديوهات العالمية — في سوق عمان المحلي." },
        { title: "فهم عميق لـ B2B", desc: "ندرك أن قراراتكم تحتاج وقتاً ودراسة. لذلك نركز على المصداقية والقيمة الحقيقية، وليس الإبهار السطحي." },
        { title: "شراكة حقيقية", desc: "لا ننتظر أن تخبرنا بما تريد — نساعدك في تحديد ما تحتاجه فعلاً لتحقيق أهدافك." }
      ]
    },
    about: {
      title: "لسنا مجرد وكالة ميديا",
      subtitle: "نحن شريك استراتيجي يدمج بين الدقة الهندسية والإبداع البصري لبناء حلول رقمية تحقق نتائج ملموسة.",
      story: {
        title: "قصتنا",
        content: "تأسست EAGLEON في عمّان على قناعة بسيطة: العالم الرقمي يحتاج إلى دقة أكثر وعشوائية أقل. اخترنا النسر شعاراً لنا ليس فقط لقوته ورؤيته الثاقبة، بل لأنه يُجسّد مبدأنا الأساسي: السيادة تأتي من الارتفاع الصحيح والرؤية الواضحة. وبنينا هويتنا البصرية بالكامل على النسبة الذهبية — لأننا نؤمن أن التصميم الحقيقي ليس صدفة، بل علم."
      },
      philosophy: {
        title: "فلسفتنا",
        content: "كل قرار بصري يجب أن يُبنى على أساس رياضي. كل استراتيجية رقمية يجب أن تحقق هدفاً قابلاً للقياس. كل علاقة مع عميل يجب أن تتحول إلى شراكة استراتيجية طويلة الأمد."
      },
      values: {
        title: "قيمنا الجوهرية",
        list: [
          { title: "الإبداع المحسوب", desc: "أفكار تنطلق من تحليل دقيق." },
          { title: "الدقة الهندسية", desc: "الدقة هي أساس التميز." },
          { title: "الشمولية في الرؤية", desc: "رؤية تربط كل العناصر الرقمية." },
          { title: "الجرأة في التنفيذ", desc: "نسبق السوق بخطوة." },
          { title: "الموثوقية المطلقة", desc: "معايير تشغيل ثابتة، ليست وعوداً." }
        ]
      }
    },
    portfolio: {
      title: "شركاء النجاح",
      subtitle: "عملاؤنا لا يشترون خدمات — بل يستثمرون في نتائج. إليك كيف ساعدنا شركات رائدة على تحقيق قفزات نوعية في أسواقها.",
      viewAll: "شاهد كل المشاريع",
      cta: "هل تريد تحقيق نتائج مماثلة؟",
      tabs: [
        { id: 'all', label: 'الكل' },
        { id: 'web', label: 'ويب' },
        { id: 'branding', label: 'هوية بصرية' },
        { id: 'cgi', label: 'CGI / 3D' }
      ],
      items: [
        {
          title: "ديناميكيات الكم",
          category: "CGI / حركة",
          filter: "cgi",
          coverUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
          media: [
             { type: 'video', url: "https://drive.google.com/file/d/14dKaQYnwsz8BRScHiKZPVS5vlGWndgtt/view?usp=sharing" }
          ]
        },
        {
          title: "أبيكس للتمويل",
          category: "منصة ويب / تكنولوجيا مالية",
          filter: "web",
          coverUrl: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1000&auto=format&fit=crop",
          media: [
             { type: 'image', url: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1000&auto=format&fit=crop" },
             { type: 'image', url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" }
          ]
        },
        {
          title: "أفق النيون",
          category: "CGI / سيارات",
          filter: "cgi",
          coverUrl: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1000&auto=format&fit=crop",
          media: [
            { type: 'image', url: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1000&auto=format&fit=crop" },
            { type: 'video', url: "https://drive.google.com/file/d/14dKaQYnwsz8BRScHiKZPVS5vlGWndgtt/view?usp=sharing" }
          ]
        },
        {
          title: "فيلفت للديكور",
          category: "هوية بصرية / فخامة",
          filter: "branding",
          coverUrl: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop",
          media: [
            { type: 'image', url: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop" },
            { type: 'image', url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop" },
            { type: 'image', url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=1000&auto=format&fit=crop" }
          ]
        },
        {
          title: "سايبر بانك ٢٠٩٩",
          category: "بيئة ثلاثية الأبعاد",
          filter: "cgi",
          coverUrl: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop",
          media: [
            { type: 'image', url: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop" },
            { type: 'video', url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" }
          ]
        }
      ]
    },
    contact: {
      title: "لنبدأ محادثة استراتيجية",
      subtitle: "سواء كنت تبحث عن شريك استراتيجي لمشروع كامل، أو تحتاج لاستشارة حول تحدٍ رقمي محدد — نحن هنا للاستماع ومساعدتك.",
      form: {
        name: "الاسم الكامل / الشركة",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        service: "نوع الخدمة المطلوبة",
        message: "رسالتك / التحدي الذي تواجهه",
        submit: "أرسل طلبك",
        serviceOptions: ["بناء هوية تجارية", "CGI & 3D Modeling", "تطوير موقع إلكتروني", "استشارة استراتيجية", "أخرى"]
      },
      info: {
        email: "contact@eagleondigital.com",
        phone: "٠٠٠٠ ٠٠٠ ٧٩ ٩٦٢+",
        location: "٢٤٦، الطابق الخامس، مركز رام الله، شارع خالد بن الوليد، جبل الحسين، عمان"
      }
    },
    footer: {
      about: {
        title: "عن EAGLEON",
        desc: "شريكك الاستراتيجي للنمو الرقمي في عمّان، الأردن. نحوّل التحديات إلى فرص من خلال الدقة الهندسية والإبداع المحسوب."
      },
      links: {
        title: "روابط سريعة",
        items: ["الرئيسية", "من نحن", "خدماتنا", "مشاريعنا", "تواصل معنا"]
      },
      services: {
        title: "خدماتنا",
        items: ["بناء الهويات التجارية", "CGI & 3D Modeling", "تطوير المواقع الإلكترونية"]
      },
      contact: {
        title: "تواصل معنا"
      },
      copyright: "© 2026 EAGLEON Digital Solutions. جميع الحقوق محفوظة."
    }
  }
};
