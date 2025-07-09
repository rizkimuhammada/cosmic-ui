import { twMerge } from "tailwind-merge";
import { Frame } from "@/components/ui/frame";
import { Button } from "@/components/ui/button";
import * as menu from "@zag-js/menu";
import { type Props } from "@zag-js/menu";
import { useMachine, normalizeProps, Portal } from "@zag-js/react";
import { ChevronDown } from "lucide-react";
import { cloneElement, useId, createContext, useContext } from "react";

const MenuContext = createContext<ReturnType<typeof menu.connect> | null>(null);

function useMenu() {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within MenuProvider");
  }
  return context;
}

function MenuRoot({
  children,
  className,
  onOpenChange,
  id,
  ...rest
}: React.ComponentProps<"div"> & Omit<Props, "id">) {
  const service = useMachine(menu.machine, {
    id: useId(),
    ...rest,
    onOpenChange(details) {
      const id = api.getContentProps().id;
      if (!details.open) {
        setTimeout(() => {
          id && document.getElementById(id)?.setAttribute("hidden", "true");
        }, 180);
      } else {
        setTimeout(() => {
          id && document.getElementById(id)?.removeAttribute("hidden");
        });
      }

      onOpenChange && onOpenChange(details);
    },
  });
  const api = menu.connect(service, normalizeProps);

  return (
    <MenuContext.Provider value={api}>
      <div className={className}>{children}</div>
    </MenuContext.Provider>
  );
}

function MenuTrigger({
  children,
  className,
  asChild,
  ...rest
}: React.ComponentProps<"div"> &
  (
    | {
        asChild?: false;
        children?: React.ReactNode;
      }
    | {
        asChild: true;
        children: React.ReactElement;
      }
  )) {
  const api = useMenu();

  if (asChild && children) {
    return cloneElement(children, {
      ...{ ...api.getTriggerProps() },
      ...rest,
    });
  }

  return (
    <Button
      className={twMerge([
        "data-[state=open]:drop-shadow-[0_0px_20px_var(--color-primary)]",
        className,
      ])}
      {...api.getTriggerProps()}
    >
      {children}
      <span
        className="ms-auto transition-transform group-data-[state=open]:rotate-180"
        {...api.getIndicatorProps()}
      >
        <ChevronDown className="size-4" />
      </span>
    </Button>
  );
}

function MenuPositioner({ children, className }: React.ComponentProps<"div">) {
  const api = useMenu();

  return (
    <Portal>
      <div className={className} {...api.getPositionerProps()}>
        {children}
      </div>
    </Portal>
  );
}

function MenuContent({ children, className }: React.ComponentProps<"div">) {
  const api = useMenu();

  return (
    <div
      {...api.getContentProps()}
      hidden
      className={twMerge([
        "group relative min-w-(--reference-width) px-6 py-7 outline-none mt-1.5",
        "[&[data-state='open']]:animate-in [&[data-state='open']]:zoom-in-80 [&[data-state='open']]:fade-in-0 [&[data-state='open']]:duration-200 [&[data-state='open'][data-placement='bottom-start']]:slide-in-from-top-2 [&[data-state='open'][data-placement='left-start']]:slide-in-from-right-2 [&[data-state='open'][data-placement='right-start']]:slide-in-from-left-2 [&[data-state='open'][data-placement='top-start']]:slide-in-from-bottom-2",
        "[&[data-state='closed']]:animate-out [&[data-state='closed']]:zoom-out-80 [&[data-state='closed']]:fade-out-0 [&[data-state='closed']]:duration-200",
        "[--color-frame-1-stroke:var(--color-primary)]",
        "[--color-frame-1-fill:var(--color-primary)]/20",
        "[--color-frame-2-stroke:var(--color-accent)]",
        "[--color-frame-2-fill:var(--color-accent)]/40",
        "[--color-frame-3-stroke:var(--color-accent)]",
        "[--color-frame-3-fill:var(--color-accent)]/40",
        "[--color-frame-4-stroke:var(--color-accent)]",
        "[--color-frame-4-fill:var(--color-accent)]/40",
        className,
      ])}
    >
      <div className="absolute inset-0 group-data-[placement=top-start]:scale-y-[-1]">
        <Frame
          paths={JSON.parse(
            '[{"show":false,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","14","6"],["L","50% - 7","6"],["L","50% - 2","0"],["L","50% + 4","0"],["L","50% + 9","6"],["L","100% - 13","6"],["L","100% + 0","19"],["L","100% + 0","100% - 26"],["L","100% - 13","100% - 12"],["L","50% + 13","100% - 12"],["L","50% - 0","100% + 0"],["L","0% + 14","100% + 0"],["L","0% + 0","100% - 13"],["L","0","0% + 19"],["L","14","6"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-2-stroke)","fill":"var(--color-frame-2-fill)"},"path":[["M","50% + 16","100% - 8"],["L","50% + 25","100% - 8"],["L","50% + 18","100% - 2"],["L","50% + 9","100% - 2"],["L","50% + 16","100% - 8"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-3-stroke)","fill":"var(--color-frame-3-fill)"},"path":[["M","50% + 30","100% - 8"],["L","50% + 37","100% - 8"],["L","50% + 32","100% - 3"],["L","50% + 25","100% - 3"],["L","50% + 30","100% - 8"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-4-stroke)","fill":"var(--color-frame-4-fill)"},"path":[["M","50% + 42","100% - 8"],["L","50% + 48","100% - 8"],["L","50% + 44","100% - 4"],["L","50% + 38","100% - 4"],["L","50% + 42","100% - 8"]]}]'
          )}
          enableBackdropBlur={true}
        />
      </div>
      <div className="relative flex flex-col gap-2.5">{children}</div>
    </div>
  );
}

function MenuItem({
  children,
  className,
  asChild,
  value,
  ...rest
}: React.ComponentProps<"div"> & {
  value: string;
} & (
    | {
        asChild?: false;
        children?: React.ReactNode;
      }
    | {
        asChild: true;
        children: React.ReactElement;
      }
  )) {
  const api = useMenu();

  if (asChild && children) {
    return cloneElement(children, {
      ...{ ...api.getItemProps({ value }) },
      ...rest,
    });
  }

  return (
    <div
      className={twMerge([
        "cursor-pointer flex items-center -mx-3 -my-0.5 px-3 py-0.5 border border-transparent hover:border-primary/30 hover:bg-primary/10 data-[highlighted]:border-primary/30 data-[highlighted]:bg-primary/10",
        className,
      ])}
      {...api.getItemProps({ value })}
    >
      {children}
    </div>
  );
}

export { MenuRoot, MenuTrigger, MenuPositioner, MenuContent, MenuItem };
