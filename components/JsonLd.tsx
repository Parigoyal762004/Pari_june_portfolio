const SITE = "https://parigoyal.com";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Pari Goyal",
  url: SITE,
  jobTitle: "AI Automation Builder and Computer Science Student",
  email: "mailto:goyalpari70@gmail.com",
  telephone: "+91-6284013296",
  description:
    "Computer Science student who builds agentic AI systems and automation workflows that get used in production, across marketing, lead generation, and operations.",
  knowsAbout: [
    "AI automation",
    "Agentic workflows",
    "Prompt engineering",
    "n8n",
    "Supabase",
    "Large language model APIs",
    "Python",
    "React",
    "SQL",
    "SEO",
    "GEO",
    "Product",
    "Growth",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Thapar Institute of Engineering and Technology",
  },
  worksFor: {
    "@type": "Organization",
    name: "Akroventures",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does Pari Goyal do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pari Goyal builds agentic AI systems and automation workflows that get used in production, spanning marketing, lead generation, and operations for real clients.",
      },
    },
    {
      "@type": "Question",
      name: "What tools and technologies does Pari Goyal use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "She works with n8n, Supabase, and large language model APIs, along with Claude Code and Cowork, plus Python, Java, React, JavaScript, REST APIs, and SQL.",
      },
    },
    {
      "@type": "Question",
      name: "What kind of role is Pari Goyal looking for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Roles where she can build AI products end to end and own outcomes, not just isolated tasks, across AI automation, product, and growth.",
      },
    },
    {
      "@type": "Question",
      name: "Where does Pari Goyal study?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "She is completing a B.E. in Computer Science and Engineering at Thapar Institute of Engineering and Technology, graduating in 2026.",
      },
    },
  ],
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
