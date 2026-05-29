"use client";

import { CALENDLY_URL } from "@/lib/constants";
import { useEffect, useState } from "react";
import { PopupModal } from "react-calendly";

type CalendlyPopupButtonProps = {
  className?: string;
  text: string;
};

export default function CalendlyPopupButton({
  className = "",
  text,
}: CalendlyPopupButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setRootElement(document.body);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [isOpen]);

  return (
    <>
      <button
        className={className}
        onClick={() => setIsOpen(true)}
        type="button"
      >
        {text}
      </button>

      {rootElement ? (
        <PopupModal
          onModalClose={() => setIsOpen(false)}
          open={isOpen}
          rootElement={rootElement}
          url={CALENDLY_URL}
        />
      ) : null}
    </>
  );
}
