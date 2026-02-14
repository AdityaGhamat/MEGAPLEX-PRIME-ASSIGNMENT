export interface AboutProps {
  data?: {
    heading?: string;
    description?: string;
  };
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface FAQProps {
  data?: {
    heading?: string;
    questions?: FAQItem[];
  };
}

export interface FeaturesProps {
  data?: {
    heading?: string;
    items?: { title: string; icon: string }[];
  };
}

export interface HeroProps {
  data?: {
    title?: string;
    subtitle?: string;
    price1?: string;
    price2?: string;
    bgImage?: string;
  };
}

export interface UpdatesProps {
  data?: {
    heading?: string;
    updates?: { title: string; status: string; image: string }[];
  };
}
