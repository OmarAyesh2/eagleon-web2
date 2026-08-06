import { ContentStrings } from './types';
import brandatyLogo from './Images/logos/Brandaty.png';
import burgerHunchLogo from './Images/logos/Burger Hunch.png';
import jilyaLogo from './Images/logos/Jilya.png';
import skyLinksLogo from './Images/logos/SkyLinks.png';
import sugarDoseLogo from './Images/logos/Sugar Dose.png';

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
        { name: "RedEYE", logo: "./images/logos/Redeye.png" },
        { name: "Jilya", logo: "./Images/logos/Jilya.png" },
        { name: "Lorenzo", logo: "./images/logos/Lorenzo.png" },
        { name: "Book.JO", logo: "https://placehold.co/200x80/transparent/FFFFFF/png?text=Book.JO" },
        { name: "1/2 M", logo: "https://placehold.co/200x80/transparent/FFFFFF/png?text=1%2F2+M" },
        { name: "Brandaty", logo: "./Images/logos/Brandaty.png" },
        { name: "Burger Hunch", logo: "./Images/logos/Burger Hunch.png" },
        { name: "SkyLinks", logo: "./Images/logos/SkyLinks.png" },
        { name: "Sugar Dose", logo: "./Images/logos/Sugar Dose.png" }
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
          title: "Redeye",
          category: "CGI / Motion Design",
          filter: "cgi",
          coverUrl: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786034412/dfg-05_xmmyms.png",
          media: [
            { type: 'video', url: "https://res.cloudinary.com/dzbsayerm/video/upload/v1742323487/8_vk6qrm.mp4" },
            { type: 'video', url: "https://res.cloudinary.com/dzbsayerm/video/upload/v1740245943/redeye_1_lsfhyo.mp4" },
            { type: 'video', url: "https://res.cloudinary.com/dzbsayerm/video/upload/v1786033526/Comp_2_tspkrh.mp4" }
          ],
          challenge: "Standing out in a saturated coffee market required moving beyond static photography. Redeye needed high-energy visual assets to showcase their venue space and launch signature drinks with maximum visual punch.",
          solution: "We produced 2 photorealistic CGI renders and 1 high-impact 3D motion graphics sequence. By integrating custom lighting and dynamic fluid simulations, we highlighted the brand’s storefront identity and product appeal across digital touchpoints.",
          metrics: [
            { label: "Social Engagement", value: "3.5x" },
            { label: "Reel Watch Time", value: "+65%" },
            { label: "CGI Visual Consistency", value: "100%" }
          ]
        },
        {
          title: "Lorenzo",
          category: "CGI / Motion Design",
          filter: "cgi",
          coverUrl: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786034411/dfg-01_s9pojk.png",
          media: [
            { type: 'video', url: "https://res.cloudinary.com/dzbsayerm/video/upload/v1786033301/CGI_1_dvfmi7.mp4" },
            { type: 'video', url: "https://res.cloudinary.com/dzbsayerm/video/upload/v1786033292/CGI_2_qkdqor.mp4" }
          ],
          challenge: "Capturing appetizing, consistent product visuals through traditional food photography poses logistical and styling limits—especially when maintaining brand standards across multi-branch promotions.",
          solution: "We developed 2 ultra-realistic 3D CGI commercial visuals for Lorenzo Pizza. Focusing on detailed material texturing, perfect studio lighting, and dynamic composition, we delivered scalable assets built for high-converting marketing campaigns.",
          metrics: [
            { label: "Ad Click-Through Rate", value: "+40%" },
            { label: "Food Styling Delays", value: "0" },
            { label: "Campaign Output Speed", value: "2x" }
          ]
        },
        {
          title: "Brandaty",
          category: "Sign Designs",
          filter: "branding",
          coverUrl: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786034411/dfg-02_ylbfiv.png",
          media: [
            { type: 'video', url: "https://res.cloudinary.com/dzbsayerm/video/upload/v1786033523/Black_Colourful_Neon_Light_Cyber_Monday_Instagram_Post_pv3kg9.mp4" }

          ],
          challenge: "Brandaty needed a physical storefront sign that seamlessly translated their digital identity into a high-visibility structural landmark without sacrificing legibility or design fidelity.",
          solution: "We designed a modern, architectural sign system optimized for physical fabrication. By balancing typography hierarchy, scale, and lighting integration, the final design maximized street-level visibility and elevated brand presence.",
          metrics: [
            { label: "Production-Ready Accuracy", value: "100%" },
            { label: "Storefront Foot Traffic Visibility", value: "+50%" },
            { label: "Brand Recognition", value: "High" }
          ]
        },
        {
          title: "Sugar Dose",
          category: "CGI / Automotive",
          filter: "cgi",
          coverUrl: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786034412/dfg-06_y01xcn.png",
          media: [
            { type: 'video', url: "https://res.cloudinary.com/dzbsayerm/video/upload/v1786033536/cgi1_r070g1.mp4" }
          ],
          challenge: "Sugar Dose required a hero visual for a high-stakes campaign launch that needed to look richer and more immersive than standard studio product photography could achieve.",
          solution: "We created a stylized 3D CGI scene featuring custom environmental lighting, detailed product surfaces, and vibrant color grading engineered specifically to grab immediate attention on digital feeds.",
          metrics: [
            { label: "Higher Engagement Rate", value: "2.8x" },
            { label: "Photorealistic Control", value: "100%" },
            { label: "Campaign Reach", value: "+35%" }
          ]
        },
        {
          title: "Jilya",
          category: "Branding / Luxury",
          filter: "branding",
          coverUrl: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786034412/dfg-03_dqk1cf.png",
          media: [
            { type: 'image', url: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786033525/3_lexrpg.png" },
            { type: 'image', url: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786033524/1_2_zk2cgm.png" },
            { type: 'image', url: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786033524/7_u1qemv.png" }
          ],
          challenge: "Jilya needed a cohesive visual identity across their social media feeds to convey their dining experience, drive local foot traffic, and maintain continuous audience interest.",
          solution: "We designed a suite of custom social media assets and campaign templates. Utilizing clean typography, structured layouts, and rich brand colors, we built a visual framework optimized for consistent content deployment.",
          metrics: [
            { label: "Profile Impressions", value: "+80%" },
            { label: "Feed Consistency", value: "100%" },
            { label: "Local Engagement", value: "+25%" }
          ]
        },
        {
          title: "1/2 M",
          category: "CGI",
          filter: "cgi",
          coverUrl: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786034632/Untitled-1_oyrlwh.png",
          media: [
            { type: 'video', url: "https://res.cloudinary.com/dzbsayerm/video/upload/v1786033295/Comp_plgzaa.mp4" }
          ],
          challenge: "To highlight a premium product release, 1/2M Coffee House required a hero visual that delivered a sophisticated, cinematic feel beyond standard promotional imagery.",
          solution: "We built a custom 3D CGI commercial render featuring precision lighting and realistic material shaders to elevate the brand's premium identity across digital and print media.",
          metrics: [
            { label: "Campaign Performance", value: "+50%" },
            { label: "Studio-Grade Precision", value: "100%" },
            { label: "Visual Impact vs Static Photo", value: "3x" }
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
        { name: "RedEYE", logo: "https://placehold.co/200x80/transparent/FFFFFF/png?text=RedEYE" },
        { name: "Jilya", logo: jilyaLogo },
        { name: "Lorenzo", logo: "https://placehold.co/200x80/transparent/FFFFFF/png?text=Lorenzo" },
        { name: "Book.JO", logo: "https://placehold.co/200x80/transparent/FFFFFF/png?text=Book.JO" },
        { name: "1/2 M", logo: "https://placehold.co/200x80/transparent/FFFFFF/png?text=1%2F2+M" },
        { name: "Brandaty", logo: brandatyLogo },
        { name: "Burger Hunch", logo: burgerHunchLogo },
        { name: "SkyLinks", logo: skyLinksLogo },
        { name: "Sugar Dose", logo: sugarDoseLogo }
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
          title: "Redeye",
          category: "CGI / تصميم حركي",
          filter: "cgi",
          coverUrl: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786034412/dfg-05_xmmyms.png",
          media: [
            { type: 'video', url: "https://res.cloudinary.com/dzbsayerm/video/upload/v1742323487/8_vk6qrm.mp4" },
            { type: 'video', url: "https://res.cloudinary.com/dzbsayerm/video/upload/v1740245943/redeye_1_lsfhyo.mp4" },
            { type: 'video', url: "https://res.cloudinary.com/dzbsayerm/video/upload/v1786033526/Comp_2_tspkrh.mp4" }
          ],
          challenge: "تطلب التميز في سوق القهوة المشبع التجاوز عن التصوير الفوتوغرافي الثابت. احتاجت Redeye إلى أصول بصرية عالية الطاقة لإبراز المساحة وإطلاق مشروباتهم الخاصة بأقصى تأثير بصري.",
          solution: "قمنا بإنتاج تصاميم CGI واقعية فائقة الجودة وسلسلة رسوم حركية ثلاثية الأبعاد عالية التأثير. من خلال دمج إضاءة مخصصة ومحاكاة ديناميكية للسوائل، أبرزنا هوية الفرع وجاذبية المنتجات عبر مختلف المنصات الرقمية.",
          metrics: [
            { label: "التفاعل عبر وسائل التواصل", value: "3.5x" },
            { label: "وقت مشاهدة الريلز", value: "+65%" },
            { label: "الاتساق البصري لـ CGI", value: "100%" }
          ]
        },
        {
          title: "Lorenzo",
          category: "CGI / تصميم حركي",
          filter: "cgi",
          coverUrl: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786034411/dfg-01_s9pojk.png",
          media: [
            { type: 'video', url: "https://res.cloudinary.com/dzbsayerm/video/upload/v1786033301/CGI_1_dvfmi7.mp4" },
            { type: 'video', url: "https://res.cloudinary.com/dzbsayerm/video/upload/v1786033292/CGI_2_qkdqor.mp4" }
          ],
          challenge: "إن التقاط صور منتجات شهية ومتسقة من خلال تصوير الأطعمة التقليدي يفرض قيوداً لوجستية وشكلية—خاصة عند الحفاظ على معايير العلامة التجارية عبر عروض ترويجية متعددة الفروع.",
          solution: "طورنا تصاميم إعلانية ثلاثية الأبعاد CGI فائقة الواقعية لبيتزا لورينزو. بالتركيز على تفاصيل إكساء المواد والإضاءة الاحترافية والتكوين الديناميكي، قدمنا أصولاً قابلة للتوسع ومبنية لحملات تسويقية عالية التحويل.",
          metrics: [
            { label: "معدل النقر على الإعلانات", value: "+40%" },
            { label: "تأخير تنسيق الأطعمة", value: "0" },
            { label: "سرعة إنتاج الحملات", value: "2x" }
          ]
        },
        {
          title: "Brandaty",
          category: "تصميم لافتات",
          filter: "branding",
          coverUrl: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786034411/dfg-02_ylbfiv.png",
          media: [
            { type: 'video', url: "https://res.cloudinary.com/dzbsayerm/video/upload/v1786033523/Black_Colourful_Neon_Light_Cyber_Monday_Instagram_Post_pv3kg9.mp4" }
          ],
          challenge: "احتاجت Brandaty إلى لافتة واجهة محل مادية تترجم هويتها الرقمية بسلاسة إلى معلم هيكلي عالي الظهور دون التضحية بوضوح القراءة أو جودة التصميم.",
          solution: "صممنا نظام لافتات معماري حديث محسّن للتصنيع الفعلي. من خلال الموازنة بين التدرج الهرمي للخطوط، الحجم، ودمج الإضاءة، حقق التصميم النهائي أقصى قدر من الظهور على مستوى الشارع ورفع حضور العلامة التجارية.",
          metrics: [
            { label: "دقة جاهزة للإنتاج", value: "100%" },
            { label: "رؤية الواجهة للمارة", value: "+50%" },
            { label: "التعرف على العلامة التجارية", value: "عالي" }
          ]
        },
        {
          title: "Sugar Dose",
          category: "CGI / تجسيم ثلاثي الأبعاد",
          filter: "cgi",
          coverUrl: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786034412/dfg-06_y01xcn.png",
          media: [
            { type: 'video', url: "https://res.cloudinary.com/dzbsayerm/video/upload/v1786033536/cgi1_r070g1.mp4" }
          ],
          challenge: "تطلبت Sugar Dose عنصراً بصرياً رئيسياً لإطلاق حملة رفيعة المستوى، والذي كان بحاجة إلى الظهور بشكل أغنى وأكثر إبهاراً مما يمكن أن تحققه تصاوير المنتجات الاستوديو التقليدية.",
          solution: "أنشأنا مشهداً ثلاثي الأبعاد CGI متميزاً يتميز بإضاءة بيئية مخصصة، وأسطح منتجات دقيقة، وتصحيح ألوان حيوي تم تصميمه خصيصاً لجذب الانتباه الفوري على المنصات الرقمية.",
          metrics: [
            { label: "معدل تفاعل أعلى", value: "2.8x" },
            { label: "تحكم واقعي فائق", value: "100%" },
            { label: "وصول الحملة", value: "+35%" }
          ]
        },
        {
          title: "Jilya",
          category: "هوية بصرية / فخامة",
          filter: "branding",
          coverUrl: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786034412/dfg-03_dqk1cf.png",
          media: [
            { type: 'image', url: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786033525/3_lexrpg.png" },
            { type: 'image', url: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786033524/1_2_zk2cgm.png" },
            { type: 'image', url: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786033524/7_u1qemv.png" }
          ],
          challenge: "احتاجت Jilya إلى هوية بصرية متماسكة عبر حسابات التواصل الاجتماعي لنقل تجربة تناول الطعام لديهم، وزيادة الإقبال المحلي، والحفاظ على اهتمام الجمهور المستمر.",
          solution: "صممنا مجموعة من التصاميم المخصصة لوسائل التواصل الاجتماعي وقوالب الحملات. باستغلال خطوط واضحة، وتنسيقات منظمة، وألوان علامة غنية، بنينا إطاراً بصرياً محسّناً للنشر المستمر.",
          metrics: [
            { label: "انطباعات الصفحة", value: "+80%" },
            { label: "اتساق المحتوى", value: "100%" },
            { label: "التفاعل المحلي", value: "+25%" }
          ]
        },
        {
          title: "1/2 M",
          category: "CGI",
          filter: "cgi",
          coverUrl: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786034632/Untitled-1_oyrlwh.png",
          media: [
            { type: 'video', url: "https://res.cloudinary.com/dzbsayerm/video/upload/v1786033295/Comp_plgzaa.mp4" }
          ],
          challenge: "لتسليط الضوء على إطلاق منتج فاخر، احتاج مقهى 1/2M إلى مشهد بصري رئيسي يمنح إحساساً سينمائياً راقياً يتجاوز الصور الترويجية القياسية.",
          solution: "أنشأنا مجسماً تجارياً ثلاثي الأبعاد CGI مخصصاً يشتمل على إضاءة دقيقة ومواد واقعية لرفع هوية العلامة التجارية الفاخرة عبر الوسائط الرقمية والمطبوعة.",
          metrics: [
            { label: "أداء الحملة", value: "+50%" },
            { label: "دقة بمستوى الاستوديو", value: "100%" },
            { label: "التأثير البصري مقارنة بالصور", value: "3x" }
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
