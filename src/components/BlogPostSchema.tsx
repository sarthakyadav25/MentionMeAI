import React from 'react';

interface BlogPostSchemaProps {
    headline: string;
    description: string;
    publishedTime: string; // ISO 8601 format
    modifiedTime: string; // ISO 8601 format
    url: string;
    image: string;
    author: string;
}

const BlogPostSchema: React.FC<BlogPostSchemaProps> = ({
    headline,
    description,
    publishedTime,
    modifiedTime,
    url,
    image,
    author,
}) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": headline,
        "description": description,
        "image": image,
        "datePublished": publishedTime,
        "dateModified": modifiedTime,
        "author": {
            "@type": "Person",
            "name": author
        },
        // The Critical Link: References the Organization defined in layout.tsx
        "publisher": {
            "@id": "https://mentionmeai.com/#organization"
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": url
        },
        // Linking back to the website entity as well for good measure
        "isPartOf": {
            "@id": "https://mentionmeai.com/#website"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

export default BlogPostSchema;
