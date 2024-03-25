import React from "react";
import { Head } from "next/document";

export default () => (
  <Head>
    <meta charSet="utf-8" />
    <title>Maya Gao</title>
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/static/img/favicon-32x32.png"
    ></link>
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/static/img/favicon-16x16.png"
    ></link>
    <meta
      name="description"
      content="Product Designer building developer tools at Stripe. Previously Mapbox, Lonely Planet."
    />
    <meta name="author" content="Maya Gao" />

    <meta property="og:title" content="Maya Gao" />
    <meta
      property="og:description"
      content="Product Designer building developer tools at Stripe. Previously Mapbox, Lonely Planet."
    />

    <meta property="og:image" content="/static/img/og_image.png" />
    <meta name="twitter:image" content="/static/img/og_image.png" />
    <meta name="twitter:card" content="/static/img/og_image.png" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=.25, user-scalable=yes"
    />
    <link
      rel="stylesheet"
      href="https://unpkg.com/tachyons@4.6.1/css/tachyons.min.css"
    />
    <link rel="stylesheet" href="../static/reset.css" />
    <link rel="stylesheet" href="../static/site.css" />
    <link rel="stylesheet" href="../static/home.css" />
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga'); ga('create', 'UA-48675207-1', 'auto'); ga('send', 'pageview');`,
      }}
    />
  </Head>
);
