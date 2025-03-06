"use client";

import React from "react";
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";
import Script from "next/script";
import SparklesPreview from "./home/page";

const Page: React.FC = () => {
  return (
    <div>
      {/* SEO Configuration */}
      <NextSeo
        title="SHARE - IIT Kharagpur"
        description="SHARE IIT Kharagpur provides expert finance and consulting services tailored for students. Get financial planning, investment advice, and consulting services from industry professionals at IIT Kharagpur."
        canonical="https://www.share-iitkgp.com"
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "finance consulting, IIT Kharagpur, student financial planning, investment advice, consulting services, IIT KGP, financial services for students, startup consulting, Share IIT Kharagpur, STARTUP",
          },
          {
            name: "author",
            content: "Share IIT Kharagpur Team",
          },
          {
            name: "robots",
            content: "index, follow",
          },
        ]}
        openGraph={{
          type: "website",
          url: "https://www.share-iitkgp.com",
          title:
            "Share IIT Kharagpur | Finance and Consulting Services for Students",
          description:
            "Share IIT Kharagpur provides expert finance and consulting services tailored for students. Get financial planning, investment advice, and consulting services from industry professionals at IIT Kharagpur.",
          images: [
            {
              url: "/logo2.png", // Update with actual image URL
              width: 1200,
              height: 630,
              alt: "Share IIT Kharagpur Logo",
            },
          ],
        }}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/assets/Logo_Share_2.ico",
            type: "image/x-icon",
          },
          {
            rel: "stylesheet",
            href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css",
          },
        ]}
      />

      {/* Google Analytics Script */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-BL4L99VJ9G"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-BL4L99VJ9G');
        `}
      </Script>

      {/* Main Component */}
      <SparklesPreview />
    </div>
  );
};

export default dynamic(() => Promise.resolve(Page), { ssr: false });
