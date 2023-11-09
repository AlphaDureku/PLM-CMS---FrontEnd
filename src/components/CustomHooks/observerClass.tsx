import { useEffect } from "react";

interface ObserveConfig {
  selector: string;
  additionalClass?: string;
}

const useIntersectionObserver = (configs: ObserveConfig[]): void => {
  useEffect(() => {
    const classMap: Record<string, string> = {
      left: "slideFromLeft",
      right: "slideFromRight",
      top: "slideFromTop",
      bottom: "slideFromBottom",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { target, isIntersecting } = entry;

        Object.keys(classMap).forEach((key) => {
          const className = classMap[key];
          target.classList.toggle(
            className,
            isIntersecting && target.classList.contains(key)
          );
        });

        target.classList.toggle("show", isIntersecting);
      });
    });

    configs.forEach(({ selector, additionalClass }) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((el) => {
        observer.observe(el);
        if (additionalClass) {
          el.classList.add(additionalClass);
        }
      });
    });

    return () => {
      // Cleanup observer when component unmounts
      observer.disconnect();
    };
  }, [configs]);
};

export default useIntersectionObserver;
