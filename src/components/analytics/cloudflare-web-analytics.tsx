import Script from "next/script";

export function CloudflareWebAnalytics() {
  const token = process.env.NEXT_PUBLIC_CLOUDFLARE_WEB_ANALYTICS_TOKEN;
  if (!token) return null;

  // This first-party performance beacon is only rendered when a production
  // token exists. Local development therefore creates no analytics traffic.
  return (
    <Script
      data-cf-beacon={JSON.stringify({ token })}
      id="cloudflare-web-analytics"
      src="https://static.cloudflareinsights.com/beacon.min.js"
      strategy="afterInteractive"
    />
  );
}
