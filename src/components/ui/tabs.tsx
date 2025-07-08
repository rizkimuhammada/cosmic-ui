import { twMerge } from "tailwind-merge";
import { Button } from "@/components/ui/button";
import { Frame } from "@/components/ui/frame";
import * as tabs from "@zag-js/tabs";
import { type Props } from "@zag-js/tabs";
import { useMachine, normalizeProps } from "@zag-js/react";
import { useId, createContext, useContext } from "react";

const TabsContext = createContext<ReturnType<typeof tabs.connect> | null>(null);

function useTabs() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("useTabs must be used within TabsProvider");
  }
  return context;
}

function TabsRoot({
  children,
  className,
  onFocusChange,
  id,
  ...rest
}: React.ComponentProps<"div"> & Omit<Props, "id">) {
  const service = useMachine(tabs.machine, {
    id: useId(),
    ...rest,
    onFocusChange: (e) => {
      if (e.focusedValue) {
        api.setValue(e.focusedValue);
      }

      onFocusChange && onFocusChange(e);
    },
  });
  const api = tabs.connect(service, normalizeProps);

  return (
    <TabsContext.Provider value={api}>
      <div
        className={twMerge(["flex flex-col gap-2", className])}
        {...api.getRootProps()}
        {...rest}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
}

function TabsList({ children, className }: React.ComponentProps<"div">) {
  const api = useTabs();

  return (
    <div className={twMerge(["px-6 flex", className])} {...api.getListProps()}>
      {children}
    </div>
  );
}

function TabsTrigger({
  children,
  className,
  value,
}: React.ComponentProps<"div"> & {
  value: string;
}) {
  const api = useTabs();

  return (
    <Button
      className={twMerge([
        "text-nowrap opacity-80 [&>div>svg]:hidden -mr-4",
        "data-[selected]:text-shadow-lg text-shadow-primary",
        "data-[selected]:opacity-100 data-[selected]:drop-shadow-[0_0px_20px_var(--color-primary)]",
        "[&:first-of-type>div>svg:nth-child(1)]:block",
        "[&:not(:first-of-type):not(:last-of-type)>div>svg:nth-child(2)]:block",
        "[&:last-of-type>div>svg:nth-child(3)]:block",
        className,
      ])}
      customPaths={[
        '[{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","18","0"],["L","100% + 0","0"],["L","100% - 22","100% - 5.5"],["L","4","100% - 5.5"],["L","0","100% - 15.5"],["L","18","0"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-2-stroke)","fill":"var(--color-frame-2-fill)"},"path":[["M","10","100% - 6"],["L","100% - 28","100% - 6"],["L","100% - 31","100% + 0"],["L","12","100% + 0"],["L","10","100% - 6"]]}]',
        '[{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","22","0"],["L","100% + 0","0"],["L","100% - 22","100% - 5.5"],["L","0","100% - 5.5"],["L","22","0"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-2-stroke)","fill":"var(--color-frame-2-fill)"},"path":[["M","8","100% - 6"],["L","100% - 26","100% - 6"],["L","100% - 29","100% - 0"],["L","5","100% - 0"],["L","8","100% - 6"]]}]',
        '[{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","22","0"],["L","100% - 6","0"],["L","100% - 0","10"],["L","100% - 16","100% - 5.5"],["L","0","100% - 5.5"],["L","22","0"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-2-stroke)","fill":"var(--color-frame-2-fill)"},"path":[["M","7","100% - 6"],["L","100% - 21","100% - 6"],["L","100% - 24","100% - 0"],["L","3","100% - 0"],["L","7","100% - 6"]]}]',
      ]}
      {...api.getTriggerProps({ value })}
    >
      {children}
    </Button>
  );
}

function TabsContent({
  children,
  className,
  value,
}: React.ComponentProps<"div"> & {
  value: string;
}) {
  const api = useTabs();
  return (
    <div
      className={twMerge([
        "relative px-10 pt-5 pb-10 min-h-50 w-full data-[selected]:animate-in data-[selected]:fade-in-0 data-[selected]:zoom-in-80 data-[selected]:duration-500",
        "[--color-frame-1-stroke:var(--color-primary)]",
        "[--color-frame-1-fill:var(--color-primary)]/20",
        "[--color-frame-2-stroke:var(--color-primary)]",
        "[--color-frame-2-fill:transparent]",
        className,
      ])}
      {...api.getContentProps({ value })}
    >
      <Frame
        paths={JSON.parse(
          '[{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","19","0"],["L","100% - 18","0"],["L","100% + 0","0% + 18.5"],["L","100% + 0","50% - 21.119592875318066%"],["L","100% - 8","50% - 19.338422391857506%"],["L","100% - 8","50% + 17.557251908396946%"],["L","100% + 0","100% - 30.15267175572519%"],["L","100% + 0","100% - 22.5"],["L","100% - 17","100% - 7.5"],["L","50% + 17.16417910447761%","100% - 7.5"],["L","50% + 15.298507462686567%","100% - 15.5"],["L","50% - 14.552238805970148%","100% - 15.5"],["L","50% - 16.417910447761194%","100% - 6.5"],["L","0% + 17","100% - 7.5"],["L","0% + 0","100% - 24.5"],["L","0% + 0","50% + 19.84732824427481%"],["L","0% + 9","50% + 17.557251908396946%"],["L","0% + 10","50% - 18.829516539440203%"],["L","0","50% - 21.62849872773537%"],["L","0","0% + 19.5"],["L","19","0"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-2-stroke)","fill":"var(--color-frame-2-fill)"},"path":[["M","28","100% - 7.000000000000057"],["L","50% - 16.417910447761194%","100% - 7"],["L","50% - 14.552238805970148%","100% - 15.5"],["L","50% + 15.298507462686567%","100% - 15.5"],["L","50% + 17.16417910447761%","100% - 7.5"],["L","100% - 26","100% - 7.5"],["L","100% - 33","100% + 0"],["L","50% + 16.23134328358209%","100% - 1.1368683772161605"],["L","50% + 14.552238805970148%","100% - 8"],["L","50% - 13.619402985074627%","100% - 8"],["L","50% - 15.111940298507463%","100% + 0"],["L","33","100% + 0"],["L","28","100% - 7"]]}]'
        )}
      />
      <div className="relative">
        <p>{children}</p>
      </div>
    </div>
  );
}
export { TabsRoot, TabsList, TabsTrigger, TabsContent };
