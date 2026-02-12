import { useState, useEffect } from 'react';

interface PhotoLightboxProps {
  src: string;
  alt: string;
}

const PhotoLightbox = ({ src, alt }: PhotoLightboxProps) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <div
        className="aspect-[3/2] bg-grey-200 border-2 border-foreground overflow-hidden cursor-zoom-in"
        onClick={() => setOpen(true)}
      >
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-8"
          onClick={() => setOpen(false)}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-2"
            onClick={() => setOpen(false)}
            aria-label="Close"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
            </svg>
          </button>

          {/* Image — stop propagation so clicking it doesn't close */}
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-full object-contain"
            style={{ maxHeight: 'calc(100vh - 4rem)' }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default PhotoLightbox;
