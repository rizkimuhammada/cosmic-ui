import { twMerge } from "tailwind-merge";
import { Frame } from "@/components/ui/frame";
import { Check } from "lucide-react";
import { Checkbox } from "@ark-ui/react/checkbox";

function CheckboxRoot({
  children,
  className,
  ...rest
}: React.ComponentProps<typeof Checkbox.Root>) {
  return (
    <Checkbox.Root
      className={twMerge([
        "flex gap-3.5 items-center cursor-pointer",
        className,
      ])}
      {...rest}
    >
      {children}
    </Checkbox.Root>
  );
}

function CheckboxLabel({
  children,
  className,
  ...rest
}: React.ComponentProps<typeof Checkbox.Label>) {
  return (
    <Checkbox.Label className={twMerge(["order-2", className])} {...rest}>
      {children}
    </Checkbox.Label>
  );
}

function CheckboxControl({
  className,
  ...rest
}: React.ComponentProps<typeof Checkbox.Control>) {
  return (
    <Checkbox.Control
      className={twMerge([
        "group relative size-5 flex items-center justify-center data-[state=checked]:drop-shadow-[0_0px_20px_var(--color-primary)]",
        "[--color-frame-1-stroke:var(--color-primary)]/80",
        "[--color-frame-1-fill:var(--color-primary)]/10",
        className,
      ])}
      {...rest}
    >
      <Frame
        paths={JSON.parse(
          '[{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","50% - 28.125%","0"],["L","50% + 28.125%","0"],["L","100% + 0","50% - 28.125%"],["L","100% + 0","50% + 28.125%"],["L","50% + 28.125%","100% - 0"],["L","50% - 28.125%","100% + 0"],["L","0","50% + 28.125%"],["L","0","50% - 28.125%"],["L","50% - 28.125%","0"]]}]'
        )}
      />
      <Check className="group-data-[state=checked]:opacity-100 opacity-0 size-6 -mt-1 -mr-2 stroke-(--color-primary)/80 drop-shadow-[0_0px_2px_var(--color-primary)] transition-all duration-100" />
    </Checkbox.Control>
  );
}

function CheckboxHiddenInput() {
  return <Checkbox.HiddenInput />;
}

export { CheckboxRoot, CheckboxLabel, CheckboxControl, CheckboxHiddenInput };
