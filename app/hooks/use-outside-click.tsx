import { useEffect, RefObject, useRef } from "react";

export const useOutsideClick = (
  ref: RefObject<HTMLElement>,
  callback: (event: MouseEvent | TouchEvent) => void
): void => {
  const callbackRef = useRef<(event: MouseEvent | TouchEvent) => void>();

  // Update the callback ref on each render to avoid stale closures
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    /**
     * Event listener for detecting outside clicks.
     *
     * @param event - The triggered event.
     */
    const listener = (event: MouseEvent | TouchEvent) => {
      const el = ref.current;
      // Do nothing if clicking ref's element or its descendants
      if (!el || el.contains(event.target as Node)) {
        return;
      }
      callbackRef.current?.(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref]); // Only re-run if ref changes
};
