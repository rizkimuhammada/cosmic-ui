import { useRef, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { type Paths, setupSvgRenderer } from "../../frame/index";

function Frame({
  className,
  paths,
  enableBackdropBlur,
  ...props
}: {
  paths: Paths;
  enableBackdropBlur?: boolean;
} & React.ComponentProps<"svg">) {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (svgRef.current && svgRef.current.parentElement) {
      const instance = setupSvgRenderer({
        el: svgRef.current,
        paths,
        enableBackdropBlur,
      });

      return () => instance.destroy();
    }
  }, [paths]);

  return (
    <svg
      {...props}
      className={twMerge(["absolute inset-0 size-full", className])}
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
    />
  );
}

export { Frame };
