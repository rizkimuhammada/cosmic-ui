import { twMerge } from "tailwind-merge";
import { Frame } from "@/components/ui/frame";
import * as radio from "@zag-js/radio-group";
import { type Props } from "@zag-js/radio-group";
import { useMachine, normalizeProps } from "@zag-js/react";
import { useId, createContext, useContext } from "react";

const RadioGroupContext = createContext<ReturnType<
  typeof radio.connect
> | null>(null);
const RadioGroupValueContext = createContext<{
  value: string;
}>({
  value: "",
});

function useRadio() {
  const context = useContext(RadioGroupContext);
  if (!context) {
    throw new Error("useRadio must be used within RadioProvider");
  }
  return context;
}

function RadioGroupRoot({
  children,
  className,
  id,
  ...rest
}: React.ComponentProps<"div"> & Omit<Props, "id">) {
  const service = useMachine(radio.machine, { id: useId(), ...rest });
  const api = radio.connect(service, normalizeProps);

  return (
    <RadioGroupContext.Provider value={api}>
      <div
        className={twMerge(["flex flex-col gap-3", className])}
        {...api.getRootProps()}
      >
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
}

function RadioGroupLabel({ children, className }: React.ComponentProps<"h3">) {
  const api = useRadio();

  return (
    <h3 className={twMerge(["font-bold", className])} {...api.getLabelProps()}>
      {children}
    </h3>
  );
}

function RadioGroupItem({
  children,
  className,
  value,
}: React.ComponentProps<"div"> & {
  value: string;
}) {
  const api = useRadio();

  return (
    <RadioGroupValueContext.Provider
      value={{
        value,
      }}
    >
      <label
        className={twMerge([
          "flex gap-3.5 items-center cursor-pointer",
          className,
        ])}
        {...api.getItemProps({ value })}
      >
        {children}
      </label>
    </RadioGroupValueContext.Provider>
  );
}

function RadioItemText({ children, className }: React.ComponentProps<"div">) {
  const api = useRadio();
  const context = useContext(RadioGroupValueContext);

  return (
    <span
      className={twMerge(["order-2", className])}
      {...api.getItemTextProps({ value: context.value })}
    >
      {children}
    </span>
  );
}

function RadioItemHiddenInput() {
  const api = useRadio();
  const context = useContext(RadioGroupValueContext);

  return <input {...api.getItemHiddenInputProps({ value: context.value })} />;
}

function RadioItemControl({ className }: React.ComponentProps<"div">) {
  const api = useRadio();
  const context = useContext(RadioGroupValueContext);

  return (
    <div
      className={twMerge([
        "group relative size-5 flex items-center justify-center data-[state=checked]:drop-shadow-[0_0px_20px_var(--color-primary)]",
        "[--color-frame-1-stroke:var(--color-primary)]/70",
        "[--color-frame-1-fill:var(--color-primary)]/10",
        className,
      ])}
      {...api.getItemControlProps({ value: context.value })}
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
    </div>
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
