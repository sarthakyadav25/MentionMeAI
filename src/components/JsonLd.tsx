import React from 'react';
import { faqData } from '@/data/faqData';

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
                "mainEntity": faqData.map((faq) => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer
                    }
                }))
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
