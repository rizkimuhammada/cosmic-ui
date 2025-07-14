import { twMerge } from "tailwind-merge";
import { Frame } from "@/components/ui/frame";
import {
  RadioGroup,
  type RadioGroupItemControlProps,
  type RadioGroupItemProps,
  type RadioGroupItemTextProps,
  type RadioGroupLabelProps,
  type RadioGroupRootProps,
} from "@ark-ui/react/radio-group";

function RadioGroupRoot({ children, className, ...rest }: RadioGroupRootProps) {
  return (
    <RadioGroup.Root
      className={twMerge(["flex flex-col gap-3", className])}
      {...rest}
    >
      {children}
    </RadioGroup.Root>
  );
}

function RadioGroupLabel({
  children,
  className,
  ...rest
}: RadioGroupLabelProps) {
  return (
    <RadioGroup.Label className={twMerge(["font-bold", className])} {...rest}>
      {children}
    </RadioGroup.Label>
  );
}

function RadioGroupItem({ children, className, ...rest }: RadioGroupItemProps) {
  return (
    <RadioGroup.Item
      className={twMerge([
        "flex gap-3.5 items-center cursor-pointer",
        className,
      ])}
      {...rest}
    >
      {children}
    </RadioGroup.Item>
  );
}

function RadioItemText({
  children,
  className,
  ...rest
}: RadioGroupItemTextProps) {
  return (
    <RadioGroup.ItemText className={twMerge(["order-2", className])} {...rest}>
      {children}
    </RadioGroup.ItemText>
  );
}

function RadioItemHiddenInput() {
  return <RadioGroup.ItemHiddenInput />;
}

function RadioItemControl({ className, ...rest }: RadioGroupItemControlProps) {
  return (
    <RadioGroup.ItemControl
      className={twMerge([
        "group relative size-5 flex items-center justify-center data-[state=checked]:drop-shadow-[0_0px_20px_var(--color-primary)]",
        "[--color-frame-1-stroke:var(--color-primary)]/70",
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
      <div
        className={twMerge([
          "group-data-[state=checked]:opacity-100 opacity-0 relative size-3 transition-all duration-100",
          "[--color-frame-1-stroke:var(--color-primary)]",
          "[--color-frame-1-fill:var(--color-primary)]/30",
        ])}
      >
        <Frame
          paths={JSON.parse(
            '[{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","50% - 28.125%","0"],["L","50% + 28.125%","0"],["L","100% + 0","50% - 28.125%"],["L","100% + 0","50% + 28.125%"],["L","50% + 28.125%","100% - 0"],["L","50% - 28.125%","100% + 0"],["L","0","50% + 28.125%"],["L","0","50% - 28.125%"],["L","50% - 28.125%","0"]]}]'
          )}
        />
      </div>
    </RadioGroup.ItemControl>
  );
}

export {
  RadioGroupRoot,
  RadioGroupLabel,
  RadioGroupItem,
  RadioItemText,
  RadioItemHiddenInput,
  RadioItemControl,
};
