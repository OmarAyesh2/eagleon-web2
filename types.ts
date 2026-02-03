
export type Language = 'en' | 'ar';

export interface ServiceItem {
  title: string;
  desc: string;
  features?: string[];
}

export interface PartnerItem {
  name: string;
  logo: string;
}

export interface PortfolioMedia {
  type: 'image' | 'video';
  url: string;
}

export interface PortfolioItem {
  title: string;
  category: string;
  filter: string;
  coverUrl: string;
  media: PortfolioMedia[];
}

export interface ContentStrings {
  nav: {
    home: string;
    about: string;
    services: string;
    projects: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  partners: {
    title: string;
    items: PartnerItem[];
  };
  services: {
    title: string;
    subtitle: string;
    cta: string;
    items: {
      branding: ServiceItem;
      cgi: ServiceItem;
      web: ServiceItem;
    };
  };
  antiTemplate: {
    title: string;
    subtitle: string;
    cards: {
      template: {
        title: string;
        list: string[];
      };
      custom: {
        title: string;
        list: string[];
      };
    };
  };
  whyUs: {
    title: string;
    reasons: { title: string; desc: string }[];
  };
  about: {
    title: string;
    subtitle: string;
    story: { title: string; content: string };
    philosophy: { title: string; content: string };
    values: { title: string; list: { title: string; desc: string }[] };
  };
  portfolio: {
    title: string;
    subtitle: string;
    viewAll: string;
    cta: string;
    tabs: { id: string; label: string }[];
    items: PortfolioItem[];
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      phone: string;
      service: string;
      message: string;
      submit: string;
      serviceOptions: string[];
    };
    info: {
      email: string;
      phone: string;
      location: string;
    };
  };
  footer: {
    about: { title: string; desc: string };
    links: { title: string; items: string[] };
    services: { title: string; items: string[] };
    contact: { title: string };
    copyright: string;
  };
}
