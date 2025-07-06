import { twMerge } from "tailwind-merge";
import { Frame } from "@/components/ui/frame";
import * as checkbox from "@zag-js/checkbox";
import { type Props } from "@zag-js/checkbox";
import { Check } from "lucide-react";
import { useMachine, normalizeProps } from "@zag-js/react";
import { useId, createContext, useContext } from "react";

const CheckboxContext = createContext<ReturnType<
  typeof checkbox.connect
> | null>(null);

function useCheckbox() {
  const context = useContext(CheckboxContext);
  if (!context) {
    throw new Error("useCheckbox must be used within CheckboxProvider");
  }
  return context;
}

function CheckboxRoot({
  children,
  className,
  id,
  ...rest
}: React.ComponentProps<"label"> & Omit<Props, "id">) {
  const service = useMachine(checkbox.machine, { id: useId(), ...rest });
  const api = checkbox.connect(service, normalizeProps);

  return (
    <CheckboxContext.Provider value={api}>
      <label
        className={twMerge([
          "flex gap-3.5 items-center cursor-pointer",
          className,
        ])}
        {...api.getRootProps()}
      >
        {children}
      </label>
    </CheckboxContext.Provider>
  );
}

function CheckboxLabel({ children, className }: React.ComponentProps<"span">) {
  const api = useCheckbox();

  return (
    <span className={twMerge(["order-2", className])} {...api.getLabelProps()}>
      {children}
    </span>
  );
}

function CheckboxControl({ className }: React.ComponentProps<"span">) {
  const api = useCheckbox();

  return (
    <div
      className={twMerge([
        "group relative size-5 flex items-center justify-center data-[state=checked]:drop-shadow-[0_0px_20px_var(--color-primary)]",
        "[--color-frame-1-stroke:var(--color-primary)]/80",
        "[--color-frame-1-fill:var(--color-primary)]/10",
        className,
      ])}
      {...api.getControlProps()}
    >
      <Frame
        paths={JSON.parse(
          '[{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","50% - 28.125%","0"],["L","50% + 28.125%","0"],["L","100% + 0","50% - 28.125%"],["L","100% + 0","50% + 28.125%"],["L","50% + 28.125%","100% - 0"],["L","50% - 28.125%","100% + 0"],["L","0","50% + 28.125%"],["L","0","50% - 28.125%"],["L","50% - 28.125%","0"]]}]'
        )}
      />
      <Check className="group-data-[state=checked]:opacity-100 opacity-0 size-6 -mt-1 -mr-2 stroke-(--color-primary)/80 drop-shadow-[0_0px_2px_var(--color-primary)] transition-all duration-100" />
    </div>
  );
}

function CheckboxHiddenInput() {
  const api = useCheckbox();

  return <input {...api.getHiddenInputProps()} />;
}

export { CheckboxRoot, CheckboxLabel, CheckboxControl, CheckboxHiddenInput };
