import { Button } from "@/components/ui/button";
import { SquareCheck, Rocket } from "lucide-react";
import {
  Wrapper,
  Title,
  Subtitle,
  Menu,
  Preview,
  SectionTitle,
  SectionContent,
  InstallPackage,
  PreviewCode,
} from "@/components/docs";
import {
  createStore,
  Toaster,
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastCloseTrigger,
} from "@/components/ui/toast";

const toaster = createStore({
  overlap: true,
  placement: "bottom-end",
  offsets: "1.6rem",
  max: 3,
});

function Main() {
  return (
    <>
      <Wrapper>
        <div className="flex flex-col gap-20">
          <div>
            <Title>Toast</Title>
            <Subtitle>
              The toast component is used to give feedback to users after an
              action has taken place.
            </Subtitle>
            <Preview>
              {() => ({
                preview: (
                  <>
                    <Button
                      onClick={() => {
                        toaster.create({
                          title: (
                            <>
                              <SquareCheck className="flex-none size-4 me-2.5" />{" "}
                              Success! Event has been created!
                            </>
                          ),
                          description:
                            "This is a toast with icon, title and description.",
                          duration: 100000000,
                        });
                      }}
                      className="min-w-30"
                      type="submit"
                    >
                      <Rocket className="size-4 me-2.5" />
                      Launch Project
                    </Button>
                    <Toaster toaster={toaster}>
                      {(toast) => (
                        <ToastRoot key={toast.id}>
                          <ToastTitle>{toast.title}</ToastTitle>
                          <ToastDescription>
                            {toast.description}
                          </ToastDescription>
                          <ToastCloseTrigger />
                        </ToastRoot>
                      )}
                    </Toaster>
                  </>
                ),
                code: (
                  <PreviewCode>
                    {`
const toaster = createStore({
  overlap: true,
  placement: "bottom-end",
  offsets: "1.6rem",
  max: 3,
});

<Button
    onClick={() => {
    toaster.create({
        title: (
        <>
            <SquareCheck className="flex-none size-4 me-2.5" />{" "}
            Success! Event has been created!
        </>
        ),
        description:
        "This is a toast with icon, title and description.",
        duration: 100000000,
    });
    }}
    className="min-w-30"
    type="submit"
>
    <Rocket className="size-4 me-2.5" />
    Launch Project
</Button>
<Toaster toaster={toaster}>
    {(toast) => (
    <ToastRoot key={toast.id}>
        <ToastTitle>{toast.title}</ToastTitle>
        <ToastDescription>{toast.description}</ToastDescription>
        <ToastCloseTrigger />
    </ToastRoot>
    )}
</Toaster>
                `}
                  </PreviewCode>
                ),
              })}
            </Preview>
          </div>
          <div id="installation">
            <SectionTitle>Installation</SectionTitle>
            <SectionContent>Install the following dependencies:</SectionContent>
            <InstallPackage>add @zag-js/toast @zag-js/react</InstallPackage>
            <SectionContent>
              Copy and paste the following code into your project.
            </SectionContent>
            <PreviewCode title="components/ui/toast.tsx">
              {`
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Frame } from "@/components/ui/frame";
import { twMerge } from "tailwind-merge";
import { useMachine, normalizeProps, Portal } from "@zag-js/react";
import * as toast from "@zag-js/toast";
import { type Props, type GroupService, type GroupProps } from "@zag-js/toast";
import { useId, createContext, useContext } from "react";

const { createStore } = toast;

const ToastContext = createContext<ReturnType<typeof toast.connect> | null>(
  null
);
const ToasterContext = createContext<{
  toast: Props;
  parent: GroupService;
  index: number;
} | null>(null);

function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
}

function Toaster({
  toaster,
  children,
}: {
  toaster: GroupProps["store"];
  children: (toast: Props, index: number) => React.ReactElement;
}) {
  const service = useMachine(toast.group.machine, {
    id: useId(),
    store: toaster,
  });
  const api = toast.group.connect(service, normalizeProps);
  return (
    <Portal>
      <div {...api.getGroupProps()}>
        {api.getToasts().map((toast, index) => (
          <ToasterContext
            value={{
              toast,
              parent: service,
              index,
            }}
          >
            {children(toast, index)}
          </ToasterContext>
        ))}
      </div>
    </Portal>
  );
}

function ToastRoot({ children, className }: React.ComponentProps<"div">) {
  const context = useContext(ToasterContext);
  const machineProps = {
    ...context?.toast,
    parent: context?.parent,
    index: context?.index,
  };
  const service = useMachine(toast.machine, machineProps);
  const api = toast.connect(service, normalizeProps);

  return (
    <ToastContext.Provider value={api}>
      <div {...api.getRootProps()}>
        <div
          className={twMerge([
            "relative me-1 px-10 py-6 font-orbitron text-sm",
            "[--color-frame-1-stroke:var(--color-primary)]",
            "[--color-frame-1-fill:var(--color-primary)]/20",
            "[--color-frame-2-stroke:var(--color-primary)]",
            "[--color-frame-2-fill:var(--color-primary)]/20",
            "[--color-frame-3-stroke:var(--color-accent)]",
            "[--color-frame-3-fill:var(--color-accent)]/35",
            className,
          ])}
        >
          <div {...api.getGhostBeforeProps()}></div>
          <div {...api.getGhostAfterProps()}></div>
          <Frame
            enableBackdropBlur
            enableViewBox
            paths={JSON.parse(
              '[{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","35","0"],["L","0% + 70.5","0"],["L","0% + 87.5","7"],["L","0% + 81.5","0% + 0"],["L","100% - 96.5","0% + 0"],["L","100% - 91.5","0% + 3"],["L","100% - 86.5","0% + 0"],["L","100% - 32.5","0% + 0"],["L","100% - 18.5","0% + 10"],["L","100% + 0","100% - 16"],["L","100% - 9","100% - 6"],["L","0% + 12","100% - 6"],["L","0","100% - 17.5"],["L","16","0% + 14.5"],["L","35","0"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-2-stroke)","fill":"var(--color-frame-2-fill)"},"path":[["M","20","100% - 6"],["L","100% - 19.5","100% - 6"],["L","100% - 25.5","100% + 0"],["L","26","100% + 0"],["L","20","100% - 6"]]}]'
            )}
          />
          {children}
        </div>
      </div>
    </ToastContext.Provider>
  );
}

function ToastTitle({ children, className }: React.ComponentProps<"div">) {
  const api = useToast();

  return (
    <h3
      {...api.getTitleProps()}
      className={twMerge([
        "flex items-center text-shadow-lg text-shadow-primary font-bold w-full relative text-nowrap",
        className,
      ])}
    >
      {children}
    </h3>
  );
}

function ToastDescription({
  children,
  className,
}: React.ComponentProps<"div">) {
  const api = useToast();

  return (
    <div
      {...api.getDescriptionProps()}
      className={twMerge(["relative pt-2 opacity-80 text-nowrap", className])}
    >
      {children}
    </div>
  );
}

function ToastCloseTrigger({ className }: React.ComponentProps<"button">) {
  const api = useToast();

  return (
    <Button
      shape="flat"
      variant="accent"
      enableViewBox
      className={twMerge([
        "absolute right-2 -top-1.5 px-4 py-1.5 transform scale-x-[-1]",
        "[--color-frame-1-fill:var(--color-accent)]/70",
        className,
      ])}
      onClick={api.dismiss}
    >
      <X className="size-4" />
    </Button>
  );
}

export {
  createStore,
  Toaster,
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastCloseTrigger,
};
              `}
            </PreviewCode>
            <SectionContent>
              Update the import paths to match your project setup.
            </SectionContent>
          </div>
          <div id="usage">
            <SectionTitle>Usage</SectionTitle>
            <PreviewCode>
              {`
import {
  createStore,
  Toaster,
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastCloseTrigger,
} from "@/components/ui/toast";
              `}
            </PreviewCode>
            <PreviewCode>
              {`
const toaster = createStore({
  overlap: true,
  placement: "bottom-end",
  offsets: "1.6rem",
  max: 3,
});

<Button
    onClick={() => {
    toaster.create({
        title: (
        <>
            <SquareCheck className="flex-none size-4 me-2.5" />{" "}
            Success! Event has been created!
        </>
        ),
        description:
        "This is a toast with icon, title and description.",
        duration: 100000000,
    });
    }}
    className="min-w-30"
    type="submit"
>
    <Rocket className="size-4 me-2.5" />
    Launch Project
</Button>
<Toaster toaster={toaster}>
    {(toast) => (
    <ToastRoot key={toast.id}>
        <ToastTitle>{toast.title}</ToastTitle>
        <ToastDescription>{toast.description}</ToastDescription>
        <ToastCloseTrigger />
    </ToastRoot>
    )}
</Toaster>
              `}
            </PreviewCode>
          </div>
        </div>
      </Wrapper>
      <Menu>
        <a className="hover:text-foreground py-1" href="#installation">
          Installation
        </a>
        <a className="hover:text-foreground py-1" href="#usage">
          Usage
        </a>
      </Menu>
    </>
  );
}

export default Main;
