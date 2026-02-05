import React from 'react';

const JsonLd = () => {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://mentionmeai.com/#organization",
                "name": "MentionMeAI",
                "url": "https://mentionmeai.com",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://mentionmeai.com/logo.png", // Placeholder, updated based on actual hosted asset if available
                    "width": 112,
                    "height": 112
                },
                "sameAs": [
                    "https://www.linkedin.com/company/mentionmeai",
                    "https://www.youtube.com/@MentionMeAI",
                    "https://www.instagram.com/mentionmeai"
                ],
                "contactPoint": [
                    {
                        "@type": "ContactPoint",
                        "email": "sales@mentionmeai.com",
                        "contactType": "sales",
                        "areaServed": "Global"
                    },
                    {
                        "@type": "ContactPoint",
                        "email": "support@mentionmeai.com",
                        "contactType": "customer support",
                        "areaServed": "Global"
                    }
                ],
                "description": "MentionMeAI is a leading Generative Engine Optimization (GEO) and AI SEO agency. We help brands rank in AI search engines like Perplexity, ChatGPT, Gemini, and Google AI Overviews by optimizing content for Large Language Models (LLMs)."
            },
            {
                "@type": "Service",
                "@id": "https://mentionmeai.com/#service",
                "name": "Generative Engine Optimization (GEO) Services",
                "provider": {
                    "@id": "https://mentionmeai.com/#organization"
                },
                "serviceType": "AI SEO & Digital Marketing",
                "areaServed": {
                    "@type": "Place",
                    "name": "Global"
                },
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "AI Search Optimization Services",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "LLM Visibility Audit",
                                "description": "Analyze your brand's presence across major AI models and generative search engines."
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Answer Engine Optimization (AEO)",
                                "description": "Optimize content to provide direct, authoritative answers for AI citations."
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "AI Content Structuring",
                                "description": "Format content with entity-rich schemas and prompt-friendly structures for machine readability."
                            }
                        }
                    ]
                }
            },
            {
                "@type": "FAQPage",
                "@id": "https://mentionmeai.com/#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is Generative Engine Optimization (GEO)?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Generative Engine Optimization (GEO) is the strategic process of optimizing digital content to maximize visibility, authority, and citations in Generative AI outputs. Unlike traditional SEO which targets search engine rankings, GEO targets Large Language Models (LLMs) like ChatGPT, Perplexity, Gemini, and Claude to ensure your brand is recommended in AI-generated answers."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How is AI SEO different from traditional SEO?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Traditional SEO focuses on ranking blue links on SERPs using keywords and backlinks. AI SEO (or GEO) focuses on 'Answer Engine Optimization'—optimizing for entities, context, and semantic authority. The goal is to be the direct answer provided by an AI assistant, rather than just a link on a page."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How can I rank in Perplexity, ChatGPT, and Gemini?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "To rank in AI engines like Perplexity or ChatGPT, you need to build 'Knowledge Graph Authority.' This involves structuring your content with high-quality schema (JSON-LD), ensuring consistent brand mentions across authoritative sources, and creating direct, fact-based content that answers specific user intent. MentionMeAI specializes in these strategies."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why is my brand not showing up in AI search results?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "If your brand isn't appearing in AI answers, it likely lacks 'Entity Salience.' AI models may not recognize your brand as a distinct, authoritative entity. This happens due to unstructured data, lack of citations from trusted sources, or content that isn't machine-readable. A GEO audit from MentionMeAI can identify these gaps."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does MentionMeAI guarantee rankings in AI search?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "While no agency can strictly 'guarantee' rankings due to the \"black box\" nature of LLMs, MentionMeAI uses proven, data-driven strategies to significantly increase the probability of your brand being cited. We focus on maximizing your 'Share of Voice' in AI conversations through entity optimization and authority building."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does Generative Engine Optimization work significantly?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "GEO works by aligning your content with the training data preferences of LLMs. It involves three key pillars: 1) Technical Structuring (Schema/JSON-LD), 2) Contextual Authority (co-occurrence with industry terms), and 3) Direct Answer formatting. This makes it easy for AI models to parse, understand, and confidently cite your information."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What industries benefit most from AI SEO services?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Any industry where users ask complex questions benefits from AI SEO. This includes SaaS (software comparisons), Fintech (financial advice), Healthcare (medical queries), Legal services, and E-commerce (product recommendations). If your customers ask 'Which is better, X or Y?', you need GEO."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I control what AI says about my brand?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "You cannot directly edit AI output, but you can influence it. By consistently publishing accurate, structured, and authoritative data about your brand across the web, you 'train' the models to associate your brand with specific attributes and facts. This is the core of Reputation Management in the AI age."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How long does it take to see results from GEO campaigns?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "GEO results can often be faster than traditional SEO because AI models update their knowledge retrieval (RAG) constantly. Technical fixes (like Schema) can show results in weeks. Building deep entity authority for competitive terms typically takes 3-6 months of consistent optimization."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is GEO necessary if I already invest in SEO?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Search behaviors are shifting. Gartner predicts search engine volume will drop by 25% by 2026 as users move to chatbots. SEO protects your current traffic; GEO future-proofs your business for the AI-first world. They are complementary but distinct strategies."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

export default JsonLd;
