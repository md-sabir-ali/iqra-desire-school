import { siteConfig } from "@/config/site";

/**
 * FLOATING WHATSAPP BUTTON
 * ---------------------------------------------------------------------------
 * A fixed, bottom-right chat button present on every page (added in layout).
 * - Opens WhatsApp chat with the school with a friendly prefilled message.
 * - Accessible: real <a> with aria-label + visible focus ring.
 * - Animated: a gentle pulse ring draws attention without being annoying.
 * - Respects reduced-motion users (pulse hidden via motion-reduce).
 */
export function WhatsAppButton() {
  const waNumber = siteConfig.contact.whatsapp.replace(/[^\d]/g, "");
  if (!waNumber) return null;

  const prefill = encodeURIComponent(
    `Hello ${siteConfig.shortName}, I would like to know more about admissions.`
  );
  const href = `https://wa.me/${waNumber}?text=${prefill}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 focus:outline-none"
    >
      {/* Tooltip label (slides in on hover, hidden on small screens) */}
      <span className="pointer-events-none hidden translate-x-2 rounded-full bg-brand-800 px-4 py-2 text-sm font-semibold text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        Chat with us
      </span>

      {/* Button with pulse ring */}
      <span className="relative flex h-14 w-14 items-center justify-center">
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-60 motion-safe:animate-pulse-ring motion-reduce:hidden" />
        <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl ring-1 ring-black/5 transition-transform duration-200 group-hover:scale-110 group-focus-visible:ring-4 group-focus-visible:ring-[#25D366]/40">
          <svg
            viewBox="0 0 32 32"
            className="h-7 w-7 fill-current"
            aria-hidden="true"
          >
            <path d="M16.004 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.257.59 4.46 1.712 6.4L3.2 28.8l6.56-1.72a12.76 12.76 0 0 0 6.244 1.62h.005c7.07 0 12.8-5.73 12.8-12.8s-5.73-12.8-12.805-12.7zm0 23.04h-.004a10.6 10.6 0 0 1-5.4-1.48l-.388-.23-4.027 1.056 1.075-3.927-.253-.403a10.6 10.6 0 0 1-1.624-5.656c0-5.867 4.774-10.64 10.645-10.64 2.843 0 5.514 1.108 7.524 3.12a10.57 10.57 0 0 1 3.116 7.524c0 5.867-4.774 10.64-10.64 10.64zm5.835-7.968c-.32-.16-1.892-.933-2.185-1.04-.293-.107-.507-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.187.213-.373.24-.693.08-.32-.16-1.35-.498-2.57-1.587-.95-.848-1.592-1.895-1.779-2.215-.187-.32-.02-.493.14-.652.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.734-.986-2.374-.26-.624-.524-.54-.72-.55l-.613-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.094-1.12 2.667 0 1.574 1.147 3.094 1.307 3.307.16.213 2.257 3.446 5.467 4.834.764.33 1.36.527 1.825.674.767.244 1.464.21 2.016.127.615-.092 1.892-.773 2.159-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z" />
          </svg>
        </span>
      </span>
    </a>
  );
}
