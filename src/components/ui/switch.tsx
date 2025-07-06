import * as zagSwitch from "@zag-js/switch";
import { type Props } from "@zag-js/switch";
import { useMachine, normalizeProps } from "@zag-js/react";
import { useId, createContext, useContext } from "react";
import { Frame } from "@/components/ui/frame";
import { twMerge } from "tailwind-merge";

const SwitchContext = createContext<ReturnType<
  typeof zagSwitch.connect
> | null>(null);

function useSwitch() {
  const context = useContext(SwitchContext);
  if (!context) {
    throw new Error("useSwitch must be used within SwitchProvider");
  }
  return context;
}

function SwitchRoot({
  className,
  children,
  id,
  ...rest
}: React.ComponentProps<"label"> & Omit<Props, "id">) {
  const service = useMachine(zagSwitch.machine, { id: useId(), ...rest });
  const api = zagSwitch.connect(service, normalizeProps);

  return (
    <SwitchContext.Provider value={api}>
      <label
        className={twMerge(["flex items-center gap-4", className])}
        {...api.getRootProps()}
      >
        {children}
      </label>
    </SwitchContext.Provider>
  );
}

function SwitchHiddenInput() {
  const api = useSwitch();
  return <input {...api.getHiddenInputProps()} />;
}

function SwitchControl({ className, children }: React.ComponentProps<"span">) {
  const api = useSwitch();
  return (
    <span
      className={twMerge([
        "group relative w-14 h-6 flex items-center p-1 cursor-pointer",
        "[--color-frame-1-stroke:var(--color-primary)]/70",
        "[--color-frame-1-fill:var(--color-primary)]/10",
        "[&.checked]:[--color-frame-1-stroke:var(--color-primary)]",
        "[&.checked]:[--color-frame-1-fill:var(--color-primary)]/20",
        api.checked && "checked",
        className,
      ])}
      {...api.getControlProps()}
    >
      <div className="absolute inset-0 z-[-1]">
        <Frame
          paths={JSON.parse(
            '[{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","11","0"],["L","100% + 0","0"],["L","100% + 0","100% + 0"],["L","0","100% + 0"],["L","0","0% + 12"],["L","11","0"]]}]'
          )}
        />
      </div>
      {children}
    </span>
  );
}

function SwitchThumb({ className }: React.ComponentProps<"span">) {
  const api = useSwitch();
  return (
    <span
      className={twMerge([
        "relative w-1/2 h-3.5 z-[-1] -mb-px transition-all ms-0.5",
        "[--color-frame-1-stroke:var(--color-primary)]/80",
        "[--color-frame-1-fill:var(--color-primary)]/20",
        "group-[.checked]:[--color-frame-1-stroke:var(--color-primary)]",
        "group-[.checked]:[--color-frame-1-fill:var(--color-primary)]/30",
        "group-[.checked]:ms-[47%] group-[.checked]:drop-shadow-[0_0px_20px_var(--color-primary)]",
        className,
      ])}
      {...api.getThumbProps()}
    >
      <Frame
        paths={JSON.parse(
          '[{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","7","0"],["L","100% + 0","0"],["L","100% + 0","100% + 0"],["L","0","100% + 0"],["L","0","0% + 7"],["L","7","0"]]}]'
        )}
      />
    </span>
  );
}

function SwitchLabel({ className, children }: React.ComponentProps<"span">) {
  const api = useSwitch();
  return (
    <span className={className} {...api.getLabelProps()}>
      {children}
    </span>
  );
}

export {
  SwitchRoot,
  SwitchHiddenInput,
  SwitchControl,
  SwitchThumb,
  SwitchLabel,
};
