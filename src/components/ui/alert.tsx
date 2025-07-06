import { Button } from "@/components/ui/button";
import { Frame } from "@/components/ui/frame";
import { X } from "lucide-react";
import { twMerge } from "tailwind-merge";
import * as presence from "@zag-js/presence";
import { useMachine, normalizeProps } from "@zag-js/react";
import { useState, useContext, createContext, useRef } from "react";

const PresentContext = createContext<{
  present: boolean;
  setPresent: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);

function AlertRoot({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  const alertRef = useRef<HTMLDivElement>(null);
  const [present, setPresent] = useState(true);
  const service = useMachine(presence.machine, {
    present,
    onExitComplete: () => {
      setTimeout(() => {
        alertRef.current?.setAttribute("hidden", "true");
      }, 200);
    },
  });

  const api = presence.connect(service, normalizeProps);

  return (
    <PresentContext.Provider
      value={{
        present,
        setPresent,
      }}
    >
      <div
        className={twMerge([
          "relative px-10 pt-8 pb-6.5 w-full [&>svg]:drop-shadow-[0_0px_20px_var(--color-primary)]",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:duration-200",
          "[--color-frame-1-stroke:var(--color-primary)]",
          "[--color-frame-1-fill:var(--color-primary)]/20",
          "[--color-frame-2-stroke:var(--color-primary)]",
          "[--color-frame-2-fill:transparent]",
          "[--color-frame-3-stroke:var(--color-accent)]",
          "[--color-frame-3-fill:var(--color-accent)]/50",
          className,
        ])}
        ref={alertRef}
        data-state={api.skip ? undefined : present ? "open" : "closed"}
        {...props}
      >
        <Frame
          paths={JSON.parse(
            '[{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","0% + 34","7"],["L","0% + 79.5","7"],["L","0% + 96.5","13"],["L","100% - 21.5","13"],["L","100% + 0","34"],["L","100% - 13","100% - 15"],["L","100% - 26","100% - 6"],["L","0% + 11.5","100% - 6"],["L","0","100% - 18"],["L","13","0% + 28"],["L","34","7"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-2-stroke)","fill":"var(--color-frame-2-fill)"},"path":[["M","18","100% - 6"],["L","100% - 33.5","100% - 6"],["L","100% - 39.5","100% - 0"],["L","24","100% + 0"],["L","18","100% - 6"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-3-stroke)","fill":"var(--color-frame-3-fill)"},"path":[["M","17","7"],["L","0% + 26.5","7"],["L","0% + 12.5","0% + 20"],["L","13","0% + 11"],["L","17","7"]]}]'
          )}
        />
        {children}
      </div>
    </PresentContext.Provider>
  );
}

function AlertTitle({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <h3>
      <div
        className={twMerge([
          "flex items-center text-shadow-lg text-shadow-primary font-bold w-full relative",
          className,
        ])}
        {...props}
      >
        {children}
      </div>
    </h3>
  );
}

function AlertDescription({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={twMerge(["relative pt-2 opacity-80", className])}
      {...props}
    >
      {children}
    </div>
  );
}

function AlertCloseTrigger({
  className,
  ...props
}: React.ComponentProps<"button">) {
  const context = useContext(PresentContext);

  return (
    <Button
      shape="flat"
      variant="accent"
      className={twMerge([
        "absolute -right-1 top-2 px-5 py-1.5 transform scale-x-[-1]",
        "[--color-frame-1-fill:var(--color-accent)]/70",
      ])}
      {...props}
      onClick={() => context?.setPresent(false)}
    >
      <X className="size-4" />
    </Button>
  );
}

export { AlertRoot, AlertTitle, AlertDescription, AlertCloseTrigger };
