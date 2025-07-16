import { Button } from "@/components/ui/button";
import { MoveUpRight, SquareCheck, Rocket } from "lucide-react";
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
  createToaster,
  Toaster,
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastCloseTrigger,
} from "@/components/ui/toast";

const toaster = createToaster({
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
            <div className="flex gap-3 mt-5">
              <a
                className="pr-3 pl-3.5 py-0.5 border border-primary/20 bg-primary/10 flex items-center gap-2 text-sm"
                target="_blank"
                href="https://ark-ui.com/docs/components/toast"
              >
                Docs <MoveUpRight className="stroke-1 size-3" />
              </a>
              <a
                className="pr-3 pl-3.5 py-0.5 border border-primary/20 bg-primary/10 flex items-center gap-2 text-sm"
                target="_blank"
                href="https://ark-ui.com/docs/components/toast#api-reference"
              >
                Api Reference <MoveUpRight className="stroke-1 size-3" />
              </a>
            </div>
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
const toaster = createToaster({
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
            <InstallPackage>add @ark-ui/react</InstallPackage>
            <SectionContent>
              Copy and paste the following code into your project.
            </SectionContent>
            <PreviewCode title="components/ui/toast.tsx">
              {`
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Frame } from "@/components/ui/frame";
import { twMerge } from "tailwind-merge";
import { Toast, Toaster, createToaster } from "@ark-ui/react/toast";
import { Portal } from "@ark-ui/react/portal";

function ToasterRoot({
  toaster,
  children,
}: React.ComponentProps<typeof Toaster>) {
  return (
    <Portal>
      <Toaster toaster={toaster}>{children}</Toaster>
    </Portal>
  );
}

function ToastRoot({
  children,
  className,
}: React.ComponentProps<typeof Toast.Root>) {
  return (
    <Toast.Root
      className={twMerge([
        "[translate:var(--x)_var(--y)] [scale:var(--scale)] [z-index:var(--z-index)] [height:var(--height)] [opacity:var(--opacity)] [will-change:translate,scale]",
        "[transition:translate_400ms,_scale_400ms,_opacity_400ms] [transition-timing-function:cubic-bezier(0.21,_1.02,_0.73,_1)]",
        "data-[state=closed]:[transition:translate_400ms,_scale_400ms,_opacity_200ms] data-[state=closed]:[transition-timing-function:cubic-bezier(0.06,_0.71,_0.55,_1)]",
      ])}
    >
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
        <Frame
          enableBackdropBlur
          enableViewBox
          paths={JSON.parse(
            '[{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","35","0"],["L","0% + 70.5","0"],["L","0% + 87.5","7"],["L","0% + 81.5","0% + 0"],["L","100% - 96.5","0% + 0"],["L","100% - 91.5","0% + 3"],["L","100% - 86.5","0% + 0"],["L","100% - 32.5","0% + 0"],["L","100% - 18.5","0% + 10"],["L","100% + 0","100% - 16"],["L","100% - 9","100% - 6"],["L","0% + 12","100% - 6"],["L","0","100% - 17.5"],["L","16","0% + 14.5"],["L","35","0"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-2-stroke)","fill":"var(--color-frame-2-fill)"},"path":[["M","20","100% - 6"],["L","100% - 19.5","100% - 6"],["L","100% - 25.5","100% + 0"],["L","26","100% + 0"],["L","20","100% - 6"]]}]'
          )}
        />
        {children}
      </div>
    </Toast.Root>
  );
}

function ToastTitle({
  children,
  className,
  ...rest
}: React.ComponentProps<typeof Toast.Title>) {
  return (
    <Toast.Title
      className={twMerge([
        "flex items-center text-shadow-lg text-shadow-primary font-bold w-full relative text-nowrap",
        className,
      ])}
      {...rest}
    >
      {children}
    </Toast.Title>
  );
}

function ToastDescription({
  children,
  className,
  ...rest
}: React.ComponentProps<typeof Toast.Description>) {
  return (
    <Toast.Description
      className={twMerge(["relative pt-2 opacity-80 text-nowrap", className])}
      {...rest}
    >
      {children}
    </Toast.Description>
  );
}

function ToastCloseTrigger({
  className,
  children,
  asChild,
  ...rest
}: React.ComponentProps<typeof Toast.CloseTrigger>) {
  return (
    <Toast.CloseTrigger asChild {...rest}>
      {!asChild ? (
        <Button
          shape="flat"
          variant="accent"
          enableViewBox
          className={twMerge([
            "absolute right-2 -top-1.5 px-4 py-1.5 transform scale-x-[-1]",
            "[--color-frame-1-fill:var(--color-accent)]/70",
            className,
          ])}
        >
          <X className="size-4" />
        </Button>
      ) : (
        children
      )}
    </Toast.CloseTrigger>
  );
}

export {
  createToaster,
  ToasterRoot as Toaster,
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
  createToaster,
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
const toaster = createToaster({
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
