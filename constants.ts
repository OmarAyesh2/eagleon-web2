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
      title: "WE ENGINEER DIGITAL SUPREMACY",
      subtitle: "We Transform Digital Challenges into Tangible Growth Opportunities Through Engineering Precision and Calculated Creativity.",
      cta: "Let's Build",
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
      title: "CORE CAPABILITIES",
      subtitle: "We don't deliver conventional digital services—we provide integrated solutions that combine technical precision with creative vision to achieve measurable results.",
      cta: "Explore Our Services",
      items: {
        branding: {
          title: "Brand Identity Systems",
          desc: "High-impact visual positioning and digital assets designed to command attention and separate your business from the competition.",
          features: ["Identity Strategy", "Logo & Asset Design", "Design Systems", "Communication Strategy"]
        },
        cgi: {
          title: "CGI & Cinema Grade VFX",
          desc: "High-fidelity 3D production, realistic product simulations, and elite visual effects engineered to give your media an undeniable edge.",
          features: ["Product 3D Modeling", "Cinematic Visual Effects", "Architectural Visualization", "Virtual Environments"]
        },
        web: {
          title: "Web Applications & Platforms",
          desc: "Custom, high-speed full-stack architecture built to scale. Zero bloated templates just clean code optimized for maximum performance and security",
          features: ["Full-stack web development", "Custom SaaS solutions", "Data visualization interfaces", "Secure API integrations"]
        },
      },
    },
    antiTemplate: {
      title: "THE ANTI-TEMPLATE APPROACH",
      subtitle: "Why generic solutions fail to deliver strategic results in the modern B2B landscape.",
      cards: {
        template: {
          title: "The Template Trap",
          list: ["Weak security from cheap, pre-made plugins", "Slow loading speeds that lose you customers", "Rigid layouts that are hard to change or expand later", "Boring, copy-paste designs that look like everyone else"]
        },
        custom: {
          title: "Eagleon Custom Build",
          list: ["Solid, custom-built security from scratch", "100% flexible to add any new feature anytime", "Unique, custom design built to win you clients", "Lightning-fast performance and instant loading"]
        }
      }
    },
    whyUs: {
      title: "WHY CHOOSE EAGLEON?",
      reasons: [
        { title: "Design with a Purpose", desc: "We don't create visual gimmicks just to look pretty. Every layout, button, and user path is built to guide your visitors exactly where you want them to go." },
        { title: "World-Class Quality", desc: "Our custom code and 3D renders match the caliber of top-tier international production houses. You get elite, studio-grade execution without any compromises." },
        { title: "Built to Make Sense", desc: "We get rid of the superficial fluff that slows websites down. We focus purely on building fast, secure, and stable systems that protect your data and help you scale." },
        { title: "Blunt, Honest Engineering", desc: "We aren’t blind order-takers. If your technical plan has a structural flaw that will break under pressure later, we will call it out immediately and give you the right fix." }
      ]
    },
    about: {
      title: "TECHNICAL PRECISION. VISUAL DOMINANCE.",
      subtitle: "We bring custom software development and elite visual production under one roof to build digital products that perform flawlessly.",
      story: {
        title: "Our Mission",
        content: "Eagleon was started with a clear goal: to eliminate lazy templates, fragile code, and cookie-cutter designs. We bridge the gap between heavy technical engineering and high-end creative production. Whether we are writing clean, scalable code or rendering studio-grade visuals, we build custom digital assets designed to give your business an undeniable edge."
      },
      philosophy: {
        title: "Our Approach",
        content: "We believe your digital presence should look incredible and work flawlessly at the same time. No bloated code, no recycled design shortcuts, and no agency jargon. We focus strictly on absolute data security, sub-second loading speeds, and bespoke visual execution tailored directly to your business goals."
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
          ],
          challenge: "Quantum Dynamics struggled with conveying the complex inner workings of their next-gen microprocessors to enterprise clients using standard 2D schematics, resulting in low engagement during technical pitches.",
          solution: "We engineered a hyper-realistic 3D motion design sequence that visually deconstructs the microprocessor's architecture, translating abstract technical specifications into an intuitive, high-impact visual narrative.",
          metrics: [
            { label: "Increase in Engagement", value: "215%" },
            { label: "Pitch Conversion Rate", value: "+45%" },
            { label: "Rendering Cost Saved", value: "60%" }
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
          ],
          challenge: "Apex Finance faced severe user drop-offs during their onboarding process due to a fragmented, legacy web interface that failed to establish trust or guide institutional investors effectively.",
          solution: "We architected a custom, high-performance web platform utilizing a bespoke design system built on the Golden Ratio, ensuring seamless onboarding, robust security perception, and streamlined user flows.",
          metrics: [
            { label: "Onboarding Drop-off", value: "-73%" },
            { label: "User Retention", value: "+82%" },
            { label: "Platform Load Speed", value: "<1.2s" }
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
          ],
          challenge: "Launching an electric vehicle line required high-end marketing assets before physical prototypes were fully manufactured, limiting their pre-launch marketing capabilities.",
          solution: "Our team developed full-scale, photorealistic CGI environments and automotive models, providing marketing teams with pixel-perfect promotional assets months ahead of production.",
          metrics: [
            { label: "Pre-orders Generated", value: "12,000+" },
            { label: "Time-to-Market Saved", value: "4 Months" },
            { label: "Visual Fidelity", value: "100% CGI" }
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
          ],
          challenge: "Velvet Interiors needed to pivot from a mid-market furniture retailer to a premium B2B interior design consultancy but lacked a visual identity that communicated luxury and exclusivity.",
          solution: "We crafted a sophisticated brand identity rooted in mathematical precision, redesigning their communication strategy, brand guidelines, and visual assets to position them as a high-end industry authority.",
          metrics: [
            { label: "Average Deal Size", value: "+310%" },
            { label: "Premium Client Inquiries", value: "+150%" },
            { label: "Market Repositioning", value: "Complete" }
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
          ],
          challenge: "A leading entertainment studio required vast, immersive futuristic cityscapes for a virtual production, but traditional set building was cost-prohibitive and lacked flexibility.",
          solution: "We designed dynamic, scalable 3D CGI environments optimized for real-time virtual production, allowing directors complete creative freedom over lighting, angles, and atmospheric effects.",
          metrics: [
            { label: "Production Costs Reduced", value: "75%" },
            { label: "Set Setup Time", value: "-90%" },
            { label: "Render Assets Created", value: "500+" }
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
        message: "Identify your primary technical or conversion bottleneck.",
        submit: "Send Your Request",
        serviceOptions: ["Brand Identity Development", "High-Fidelity CGI & Digital Twins", "High-Performance Web Architecture", "Strategic Consultation", "Other"]
      },
      info: {
        email: "info@eagleon.digital",
        phone: "+962 7 9318 8188",
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
      title: "حلول تقنية متكاملة وإنتاج بصري متفوق",
      subtitle: "نحوّل التحديات الرقمية إلى فرص نمو ملموسة من خلال الدقة الهندسية والإبداع المحسوب.",
      cta: "تواصل معنا",
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
      title: "قدراتنا الأساسية",
      subtitle: "نحن لسنا مجرد وكالة تصميم أو تطوير؛ بل شريك استراتيجي متكامل يجمع بين الهندسة الدقيقة والابتكار البصري المتطور.",
      cta: "تواصل معنا",
      items: {
        branding: {
          title: "الهويات التجارية والبصرية",
          desc: "بناء أنظمة بصرية متكاملة تفرض حضور علامتك التجارية وتضمن تميزها الكامل في السوق.",
          features: ["هوية استراتيجية", "تصميم الشعارات", "أنظمة التصميم", "استراتيجية الاتصال"]
        },
        cgi: {
          title: "إنتاج CGI ومؤثرات بصرية VFX",
          desc: "رسوم متحركة ثلاثية الأبعاد ومحاكاة بصرية متطورة تمنح حملاتك التسويقية تفوقاً مشهوداً.",
          features: ["نمذجة ثلاثية الأبعاد", "تصوير CGI واقعي", "فيديوهات ترويجية", "بيئات افتراضية"]
        },
        web: {
          title: "تطبيقات ومنصات الويب",
          desc: "بنية برمجية مخصصة وعالية السرعة قابلة للتوسع. بدون قوالب جاهزة أو أكواد زائدة، نركز بالكامل على كفاءة الأداء واستقرار المنصة.",
          features: ["تطوير مخصص", "بنية قابلة للتوسع", "تحسين الأداء", "تجربة مستخدم متطورة"]
        },
      },
    },
    antiTemplate: {
      title: "لا للقوالب الجاهزة",
      subtitle: "لماذا تفشل الحلول العامة في تحقيق نتائج استراتيجية في سوق الأع مال الحديث.",
      cards: {
        template: {
          title: "فخ القوالب الجاهزة",
          list: ["أكواد برمجية ممتلئة تبطئ سرعة المنصة", "بطء شديد في التصفح يتسبب في خسارة الزوار", "هويات بصرية مكررة ومبنية على تصميمات جاهزة", "قالب جامد يصعب تعديله أو إضافة ميزات جديدة له لاحقاً"]
        },
        custom: {
          title: "بنية رقمية مخصصة",
          list: ["سرعة فائقة في التحميل والاستجابة فور النقر", "نظام آمن ومحمي بالكامل مبني خصيصاً لك من الصفر", "مرونة مطلقة تتيح لك تطوير وتوسيع موقعك في أي وقت", "صميم فريد ومخصص بالكامل لجذب عملائك وزيادة مبيعاتك"]
        }
      }
    },
    whyUs: {
      title: "لماذا تختار EAGLEON؟",
      reasons: [
        { title: "تصميم يهدف للنتيجة", desc: "لا نصمم لمجرد المظهر الجمالي. كل صفحة وزر نضعه مبني بهدف واضح: توجيه زوارك للشراء أو التواصل معك مباشرة بدون تشتيت" },
        { title: "جودة بمستوى عالمي", desc: "برمجتنا المخصصة وتصاميم الـ CGI لدينا تضاهي أعمال أكبر الاستوديوهات العالمية. ستحصل على جودة تنفيذ احترافية تنافس على أي مستوى" },
        { title: "أنظمة عملية ومستقرة", desc: "نتخلص من التعقيدات الزائدة التي تبطئ الأداء. نركز بالكامل على بناء أنظمة سريعة، آمنة، ومحمية تحمي بياناتك وتساعدك على التوسع الفعلي" },
        { title: "شفافية تقنية مطلقة", desc: "لسنا مجرد منفذين للأوامر. إذا وجدنا أي مشكلة أو ثغرة في خطتك التقنية قد تعطل مشروعك مستقبلاً، سنخبرك بها فوراً ونعطيك الحل الصحيح مباشرة" }
      ]
    },
    about: {
      title: "كفاءة تقنية. تميز بصري.",
      subtitle: "نجمع بين البرمجة المخصصة والإنتاج الإبداعي الفائق لنبني مشاريع رقمية متكاملة تعمل بكفاءة مطلقة.",
      story: {
        title: "قصتنا",
        content: "تأسست Eagleon لإنهاء عصر القوالب الجاهزة، الأكواد الضعيفة، والتصاميم المستهلكة. لقد سددنا الفجوة بين الهندسة البرمجية الدقيقة والإنتاج البصري الاحترافي. سواء كنا نكتب كوداً مخصصاً وقابلاً للتوسع أو نصنع أصولاً بصرية بجودة عالمية، نحن نبني منصات رقمية تمنح مشروعك الأفضلية الكاملة في السوق."
      },
      philosophy: {
        title: "أسلوبنا",
        content: "نؤمن بأن حضورك الرقمي يجب أن يظهر بشكل مذهل ويعمل بكفاءة فائقة في نفس الوقت. لا نعتمد على برمجيات ممتلئة بالملفات الزائدة أو حلول جاهزة مكررة، بل نركز تماماً على الأمان العالي، سرعة التحميل الفائقة، والتنفيذ المخصص الذي يخدم أهداف عملك بشكل مباشر وعملي."
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
          ],
          challenge: "عانت 'ديناميكيات الكم' من صعوبة نقل التفاصيل المعقدة لمعالجاتها الدقيقة لعملائها من الشركات باستخدام المخططات ثنائية الأبعاد التقليدية، مما أدى إلى انخفاض التفاعل في العروض التقديمية التقنية.",
          solution: "قمنا بهندسة تسلسل تصميم حركي ثلاثي الأبعاد فائق الواقعية يفكك بنية المعالج الدقيق بصرياً، ويترجم المواصفات الفنية المجردة إلى سرد مرئي بديهي وعالي التأثير.",
          metrics: [
            { label: "زيادة التفاعل", value: "215%" },
            { label: "معدل تحويل العروض التقديمية", value: "+45%" },
            { label: "توفير تكلفة التصميم والتصوير", value: "60%" }
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
          ],
          challenge: "واجهت 'أبيكس للتمويل' تسرباً كبيراً للمستخدمين أثناء عملية التسجيل بسبب واجهة ويب قديمة ومشتتة فشلت في بناء الثقة وتوجيه المستثمرين المؤسسيين بفعالية.",
          solution: "قمنا بتصميم وبناء منصة ويب مخصصة وعالية الأداء تعتمد على نظام تصميم مبني على النسبة الذهبية، مما يضمن تسجيلاً سلساً وموثوقية أمنية عالية وتجربة مستخدم مبسطة.",
          metrics: [
            { label: "انخفاض تسرب المستخدمين", value: "-73%" },
            { label: "الاحتفاظ بالمستخدمين", value: "+82%" },
            { label: "سرعة تحميل المنصة", value: "<1.2s" }
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
          ],
          challenge: "تطلب إطلاق خط السيارات الكهربائية أصولاً تسويقية متطورة قبل أن يتم تصنيع النماذج الأولية المادية بالكامل، مما حد من قدرات التسويق قبل الإطلاق.",
          solution: "طور فريقنا بيئات CGI واقعية بالكامل ونماذج سيارات دقيقة، مما وفر لفرق التسويق أصولاً ترويجية مثالية قبل أشهر من بدء الإنتاج الفعلي.",
          metrics: [
            { label: "الطلبات المسبقة", value: "12,000+" },
            { label: "توفير وقت الوصول للسوق", value: "4 أشهر" },
            { label: "الدقة البصرية", value: "100% CGI" }
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
          ],
          challenge: "احتاجت 'فيلفت للديكور' إلى التحول من بائع أثاث بالتجزئة إلى استشارات تصميم داخلي للشركات (B2B)، ولكنها افتقرت إلى هوية بصرية تعكس الفخامة والحصرية.",
          solution: "صممنا هوية تجارية راقية متجذرة في الدقة الرياضية، وأعدنا تصميم استراتيجية الاتصال الخاصة بهم، وأدلة العلامة التجارية، والأصول المرئية لوضعهم كسلطة صناعية رائدة وراقية.",
          metrics: [
            { label: "متوسط حجم الصفقة", value: "+310%" },
            { label: "استفسارات العملاء المتميزين", value: "+150%" },
            { label: "إعادة التموضع في السوق", value: "مكتمل" }
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
          ],
          challenge: "تطلب استوديو ترفيهي رائد مناظر مدينة مستقبلية واسعة وغامرة لإنتاج افتراضي، لكن بناء المجموعات المادية التقليدية كان باهظ التكلفة وافتقر إلى المرونة الكافية.",
          solution: "صممنا بيئات CGI ثلاثية الأبعاد ديناميكية وقابلة للتطوير ومحسنة للإنتاج الافتراضي في الوقت الفعلي، مما أتاح للمخرجين حرية إبداعية كاملة في الإضاءة والزوايا والمؤثرات الجوية.",
          metrics: [
            { label: "خفض تكاليف الإنتاج", value: "75%" },
            { label: "وقت إعداد المجموعة", value: "-90%" },
            { label: "الأصول الرقمية المنشأة", value: "500+" }
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
        message: "حدد العائق التقني أو عقبة التحويل الرئيسية لديك.",
        submit: "أرسل طلبك",
        serviceOptions: ["بناء هوية تجارية", "CGI عالي الدقة وتوائم رقمية", "هيكلية ويب عالية الأداء", "استشارة استراتيجية", "أخرى"]
      },
      info: {
        email: "info@eagleon.digital",
        phone: "+962 7 9318 8188",
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
