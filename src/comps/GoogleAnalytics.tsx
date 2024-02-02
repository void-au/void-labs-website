"use client";

import type { NextWebVitalsMetric } from "next/app";
import { event, GoogleAnalytics as GAnalytics } from "nextjs-google-analytics";

// Send NextJS Web Vitals to GA
export function reportWebVitals({
    id,
    name,
    label,
    value,
}: NextWebVitalsMetric) {
    event(name, {
        category: label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
        value: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
        label: id, // id unique to current page load
        nonInteraction: true, // avoids affecting bounce rate.
    });
}

export default function GoogleAnalytics() {
    return <GAnalytics trackPageViews />;
}