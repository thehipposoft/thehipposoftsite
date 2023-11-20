import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta property='og:type' content='website' />
                    <meta property='og:title' content='The Hipposoft' />
                    <meta property='og:description' content="We create to connect. We create and build digital experiences to boost your business. We want to inspire you." />
                    <meta property='og:site_name' content='The Hipposoft' />

                    {/* Netlify Widget */}
                    <script async src="https://identity.netlify.com/v1/netlify-identity-widget.js" />

                    <script type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: `{
                                "@context": "https://schema.org",
                                "@type": "Organization",
                                "name": "Hipposoft",
                                "url": "https://www.thehipposoft.com/",
                                "logo": "https://www.thehipposoft.com/assets/logo.png",
                                "contactPoint": {
                                    "@type": "ContactPoint",
                                    "telephone": "0414286242",
                                    "contactType": "customer service",
                                    "areaServed": "DE",
                                    "availableLanguage": "de"
                                },
                                "sameAs": []
                            }`,
                        }}
                    />
                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=G-8JFFD0YM8L"
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', 'G-8JFFD0YM8L', {
                                  page_path: window.location.pathname,
                                });
                              `,
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }

}
