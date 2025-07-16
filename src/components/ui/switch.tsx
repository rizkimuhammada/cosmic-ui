import { Frame } from "@/components/ui/frame";
import { twMerge } from "tailwind-merge";
import { Switch } from "@ark-ui/react/switch";

function SwitchRoot({
  className,
  children,
  ...rest
}: React.ComponentProps<typeof Switch.Root>) {
  return (
    <Switch.Root
      className={twMerge(["flex items-center gap-4", className])}
      {...rest}
    >
      {children}
    </Switch.Root>
  );
}

function SwitchHiddenInput() {
  return <Switch.HiddenInput />;
}

function SwitchControl({
  className,
  children,
  ...rest
}: React.ComponentProps<typeof Switch.Control>) {
  return (
    <Switch.Control
      className={twMerge([
        "group relative w-14 h-6 flex items-center p-1 cursor-pointer",
        "[--color-frame-1-stroke:var(--color-primary)]/70",
        "[--color-frame-1-fill:var(--color-primary)]/10",
        "data-[state=checked]:[--color-frame-1-stroke:var(--color-primary)]",
        "data-[state=checked]:[--color-frame-1-fill:var(--color-primary)]/20",
        className,
      ])}
      {...rest}
    >
      <div className="absolute inset-0 z-[-1]">
        <Frame
          paths={JSON.parse(
            '[{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","11","0"],["L","100% + 0","0"],["L","100% + 0","100% + 0"],["L","0","100% + 0"],["L","0","0% + 12"],["L","11","0"]]}]'
          )}
        />
      </div>
      {children}
    </Switch.Control>
  );
}

function SwitchThumb({
  className,
  ...rest
}: React.ComponentProps<typeof Switch.Thumb>) {
  return (
    <Switch.Thumb
      className={twMerge([
        "relative w-1/2 h-3.5 z-[-1] -mb-px transition-all ms-0.5",
        "[--color-frame-1-stroke:var(--color-primary)]/80",
        "[--color-frame-1-fill:var(--color-primary)]/20",
        "group-data-[state=checked]:[--color-frame-1-stroke:var(--color-primary)]",
        "group-data-[state=checked]:[--color-frame-1-fill:var(--color-primary)]/30",
        "group-data-[state=checked]:ms-[47%] group-data-[state=checked]:drop-shadow-[0_0px_20px_var(--color-primary)]",
        className,
      ])}
      {...rest}
    >
      <Frame
        paths={JSON.parse(
          '[{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","7","0"],["L","100% + 0","0"],["L","100% + 0","100% + 0"],["L","0","100% + 0"],["L","0","0% + 7"],["L","7","0"]]}]'
        )}
      />
    </Switch.Thumb>
  );
}

function SwitchLabel({
  className,
  children,
  ...rest
}: React.ComponentProps<typeof Switch.Label>) {
  return (
    <Switch.Label className={className} {...rest}>
      {children}
    </Switch.Label>
  );
}

export {
  SwitchRoot,
  SwitchHiddenInput,
  SwitchControl,
  SwitchThumb,
  SwitchLabel,
};
