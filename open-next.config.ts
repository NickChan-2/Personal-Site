import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

// OpenNext converts the Next.js production output into a Cloudflare Worker.
// These case-study pages are generated at build time, so a read-only static
// asset cache is sufficient until the site needs revalidation or a CMS.
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
  enableCacheInterception: true,
});
