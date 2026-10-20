import { siteConfig } from "@/lib/siteConfig";

export function MapSection({ className }: { className?: string }) {
  return (
    <div className={className}>
      <iframe
        title={`${siteConfig.name} location map`}
        src={siteConfig.address.googleMapsEmbedUrl}
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: 360 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="h-full w-full grayscale-[15%]"
      />
    </div>
  );
}
