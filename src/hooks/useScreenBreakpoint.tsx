import { useEffect, useState } from "react";

type Breakpoint = "sm" | "md" | "lg" | "xl";

const useScreenBreakpoint = (): Breakpoint => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("xl");

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 640) {
        setBreakpoint("sm");
      } else if (screenWidth < 768) {
        setBreakpoint("md");
      } else if (screenWidth < 1024) {
        setBreakpoint("lg");
      } else {
        setBreakpoint("xl");
      }
    };

    // Initial call to set the breakpoint
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return breakpoint;
};

export default useScreenBreakpoint;
