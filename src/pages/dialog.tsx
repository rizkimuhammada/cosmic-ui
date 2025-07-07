import { MoveUpRight } from "lucide-react";
import {
  DialogRoot,
  DialogTrigger,
  DialogBackdrop,
  DialogPositioner,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogCloseTrigger,
  Portal,
} from "@/components/ui/dialog";
import { Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileUp, Unplug } from "lucide-react";
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

function Main() {
  return (
    <>
      <Wrapper>
        <div className="flex flex-col gap-20">
          <div>
            <Title>Dialog</Title>
            <Subtitle>
              A window overlaid on either the primary window or another dialog
              window, rendering the content underneath inert.
            </Subtitle>
            <div className="flex gap-3 mt-5">
              <a
                className="pr-3 pl-3.5 py-0.5 border border-primary/20 bg-primary/10 flex items-center gap-2 text-sm"
                target="_blank"
                href="https://zagjs.com/components/react/dialog"
              >
                Docs <MoveUpRight className="stroke-1 size-3" />
              </a>
              <a
                className="pr-3 pl-3.5 py-0.5 border border-primary/20 bg-primary/10 flex items-center gap-2 text-sm"
                target="_blank"
                href="https://zagjs.com/components/react/dialog#methods-and-properties"
              >
                Api Reference <MoveUpRight className="stroke-1 size-3" />
              </a>
            </div>
            <Preview>
              {() => ({
                preview: (
                  <DialogRoot>
                    <DialogTrigger>
                      <FileUp className="size-4 me-2.5" /> Dialog
                    </DialogTrigger>
                    <Portal>
                      <DialogBackdrop />
                      <DialogPositioner>
                        <DialogContent>
                          <DialogTitle>Edit Profile</DialogTitle>
                          <DialogDescription>
                            Make changes to your profile here. Click save when
                            you're done.
                          </DialogDescription>
                          <div className="py-5 flex flex-col gap-4">
                            <Input type="text" placeholder="Email" />
                            <Input type="password" placeholder="Password" />
                          </div>
                          <div className="flex flex-col sm:flex-row gap-y-3 justify-end mt-3 pb-2">
                            <DialogCloseTrigger asChild>
                              <Button variant="secondary" className="min-w-30">
                                <Unplug className="size-4 me-2.5" />
                                Cancel
                              </Button>
                            </DialogCloseTrigger>
                            <Button className="min-w-30" type="submit">
                              <Save className="size-4 me-2.5" />
                              Save changes
                            </Button>
                          </div>
                          <DialogCloseTrigger />
                        </DialogContent>
                      </DialogPositioner>
                    </Portal>
                  </DialogRoot>
                ),
                code: (
                  <PreviewCode>
                    {`
<DialogRoot>
  <DialogTrigger>
    <FileUp className="size-4 me-2.5" /> Dialog
  </DialogTrigger>
  <Portal>
    <DialogBackdrop />
    <DialogPositioner>
      <DialogContent>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when
          you're done.
        </DialogDescription>
        <div className="py-5 flex flex-col gap-4">
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Password" />
        </div>
        <div className="flex flex-col sm:flex-row gap-y-3 justify-end mt-3 pb-2">
          <DialogCloseTrigger asChild>
            <Button variant="secondary" className="min-w-30">
              <Unplug className="size-4 me-2.5" />
              Cancel
            </Button>
          </DialogCloseTrigger>
          <Button className="min-w-30" type="submit">
            <Save className="size-4 me-2.5" />
            Save changes
          </Button>
        </div>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogPositioner>
  </Portal>
</DialogRoot>
                `}
                  </PreviewCode>
                ),
              })}
            </Preview>
          </div>
          <div>
            <SectionTitle>Installation</SectionTitle>
            <SectionContent>Install the following dependencies:</SectionContent>
            <InstallPackage>add @zag-js/dialog @zag-js/react</InstallPackage>
            <SectionContent>
              Copy and paste the following code into your project.
            </SectionContent>
            <PreviewCode title="components/ui/dialog.tsx">
              {`
import { twMerge } from "tailwind-merge";
import { Frame } from "@/components/ui/frame";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import * as dialog from "@zag-js/dialog";
import { type Props } from "@zag-js/dialog";
import { useMachine, normalizeProps, Portal } from "@zag-js/react";
import { cloneElement, useId, createContext, useContext } from "react";

const DialogContext = createContext<ReturnType<typeof dialog.connect> | null>(
  null
);

function useDialog() {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialog must be used within DialogProvider");
  }
  return context;
}

function DialogRoot({
  children,
  className,
  onOpenChange,
  id,
  ...rest
}: React.ComponentProps<"div"> & Omit<Props, "id">) {
  const service = useMachine(dialog.machine, {
    id: useId(),
    ...rest,
    onOpenChange(details) {
      const id = api.getContentProps().id;
      if (!details.open) {
        setTimeout(() => {
          id && document.getElementById(id)?.setAttribute("hidden", "true");
        }, 350);
      } else {
        setTimeout(() => {
          id && document.getElementById(id)?.removeAttribute("hidden");
        });
      }

      onOpenChange && onOpenChange(details);
    },
  });
  const api = dialog.connect(service, normalizeProps);

  return (
    <DialogContext.Provider value={api}>{children}</DialogContext.Provider>
  );
}

function DialogTrigger({
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
  const api = useDialog();

  if (asChild && children) {
    return cloneElement(children, {
      ...{ ...api.getTriggerProps() },
      ...rest,
    });
  }

  return (
    <Button {...api.getTriggerProps()} className={className}>
      {children}
    </Button>
  );
}

function DialogBackdrop({ className }: React.ComponentProps<"div">) {
  const api = useDialog();

  return (
    <div
      className={twMerge(["fixed inset-0 bg-background/80 z-50", className])}
      {...api.getBackdropProps()}
    />
  );
}

function DialogPositioner({
  children,
  className,
}: React.ComponentProps<"div">) {
  const api = useDialog();

  return (
    <div {...api.getPositionerProps()} className={className}>
      {children}
    </div>
  );
}

function DialogContent({ children, className }: React.ComponentProps<"div">) {
  const api = useDialog();

  return (
    <div
      className={twMerge([
        "outline-none backdrop-blur-sm fixed top-[50%] left-[50%] z-50 w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] sm:max-w-lg pb-14 pt-11 px-14",
        "[--color-frame-1-stroke:var(--color-primary)]/50",
        "[--color-frame-1-fill:var(--color-primary)]/20",
        "[--color-frame-2-stroke:var(--color-accent)]",
        "[--color-frame-2-fill:var(--color-accent)]/20",
        "[--color-frame-3-stroke:var(--color-accent)]",
        "[--color-frame-3-fill:var(--color-accent)]/20",
        "[--color-frame-4-stroke:var(--color-accent)]",
        "[--color-frame-4-fill:var(--color-accent)]/20",
        "[--color-frame-5-stroke:var(--color-primary)]/23",
        "[--color-frame-5-fill:transparent]",
        className,
      ])}
      {...api.getContentProps()}
      hidden
    >
      <Frame
        className="drop-shadow-2xl drop-shadow-primary/50"
        paths={JSON.parse(
          '[{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","25","12"],["L","100% - 23","12"],["L","100% - 7","30"],["L","100% - 6","0% + 26.666666666666668%"],["L","100% - 14","0% + 28.641975308641975%"],["L","100% - 14","100% - 35.55555555555556%"],["L","100% - 7","100% - 33.33333333333332%"],["L","100% - 7","100% - 40"],["L","100% - 22","100% - 25"],["L","50% + 7.5","100% - 25"],["L","50% - 6.5","100% - 9"],["L","24","100% - 9"],["L","9","100% - 24"],["L","9","100% - 33.58024691358026%"],["L","17","100% - 36.04938271604938%"],["L","17","0% + 28.641975308641975%"],["L","8","0% + 26.666666666666668%"],["L","8","30"],["L","25","12"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-2-stroke)","fill":"var(--color-frame-2-fill)"},"path":[["M","50% + 12.5","100% - 19"],["L","50% + 25","100% - 19"],["L","50% + 17","100% - 11.5"],["L","50% + 4.5","100% - 11.5"],["L","50% + 12.5","100% - 19"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-3-stroke)","fill":"var(--color-frame-3-fill)"},"path":[["M","50% + 30.5","100% - 19"],["L","50% + 40","100% - 19"],["L","50% + 34","100% - 13.5"],["L","50% + 24.5","100% - 13.5"],["L","50% + 30.5","100% - 19"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-4-stroke)","fill":"var(--color-frame-4-fill)"},"path":[["M","50% + 46.5","100% - 19"],["L","50% + 54","100% - 19"],["L","50% + 48","100% - 14.5"],["L","50% + 40.5","100% - 14"],["L","50% + 46.5","100% - 19"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-5-stroke)","fill":"var(--color-frame-5-fill)"},"path":[["M","23","5"],["L","100% - 21","6"],["L","100% + 0","27"],["L","100% + 0","0% + 27.407407407407412%"],["L","100% - 8","0% + 29.876543209876544%"],["L","100% - 8","100% - 41.97530864197531%"],["L","100% + 0","0% + 60.74074074074073%"],["L","100% + 0","100% - 37"],["L","100% - 20","100% - 18"],["L","50% + 61.5","100% - 18"],["L","50% + 48.5","100% - 6"],["L","50% + 3.5","100% - 6"],["L","50% - 3.5","100% + 0"],["L","26","100% + 0"],["L","0","100% - 24"],["L","0","100% - 39.99999999999999%"],["L","11","100% - 42.71604938271605%"],["L","10","0% + 29.135802469135804%"],["L","0","0% + 26.666666666666668%"],["L","0","28"],["L","23","5"]]}]'
        )}
      />
      {children}
    </div>
  );
}

function DialogTitle({ children, className }: React.ComponentProps<"div">) {
  const api = useDialog();

  return (
    <h2
      className={twMerge([
        "font-medium text-shadow-lg text-shadow-primary font-bold text-lg relative",
        className,
      ])}
      {...api.getTitleProps()}
    >
      {children}
    </h2>
  );
}

function DialogDescription({
  children,
  className,
}: React.ComponentProps<"div">) {
  const api = useDialog();

  return (
    <p
      className={twMerge(["opacity-80 py-2 relative", className])}
      {...api.getDescriptionProps()}
    >
      {children}
    </p>
  );
}

function DialogCloseTrigger({
  children,
  className,
  asChild,
  ...rest
}: React.ComponentProps<"button"> &
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
  const api = useDialog();

  if (asChild && children) {
    return cloneElement(children, {
      ...{ ...api.getCloseTriggerProps() },
      ...rest,
    });
  }

  return (
    <Button
      shape="flat"
      className={twMerge([
        "absolute right-0 top-0 px-5 py-1.5 transform scale-x-[-1] drop-shadow-[0_0px_20px_var(--color-accent)]",
        "[--color-frame-1-stroke:var(--color-accent)]",
        "[--color-frame-1-fill:var(--color-accent)]/50",
        className,
      ])}
      {...api.getCloseTriggerProps()}
    >
      <X className="size-4" />
    </Button>
  );
}

export {
  DialogRoot,
  DialogTrigger,
  DialogBackdrop,
  DialogPositioner,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogCloseTrigger,
  Portal,
};
              `}
            </PreviewCode>
            <SectionContent>
              Update the import paths to match your project setup.
            </SectionContent>
          </div>
          <div>
            <SectionTitle>Usage</SectionTitle>
            <PreviewCode>
              {`
import {
  DialogRoot,
  DialogTrigger,
  DialogBackdrop,
  DialogPositioner,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogCloseTrigger,
  Portal,
} from "@/components/ui/dialog";
              `}
            </PreviewCode>
            <PreviewCode>
              {`
<DialogRoot>
  <DialogTrigger>
    <FileUp className="size-4 me-2.5" /> Dialog
  </DialogTrigger>
  <Portal>
    <DialogBackdrop />
    <DialogPositioner>
      <DialogContent>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when
          you're done.
        </DialogDescription>
        <div className="py-5 flex flex-col gap-4">
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Password" />
        </div>
        <div className="flex flex-col sm:flex-row gap-y-3 justify-end mt-3 pb-2">
          <DialogCloseTrigger asChild>
            <Button variant="secondary" className="min-w-30">
              <Unplug className="size-4 me-2.5" />
              Cancel
            </Button>
          </DialogCloseTrigger>
          <Button className="min-w-30" type="submit">
            <Save className="size-4 me-2.5" />
            Save changes
          </Button>
        </div>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogPositioner>
  </Portal>
</DialogRoot>
              `}
            </PreviewCode>
          </div>
        </div>
      </Wrapper>
      <Menu></Menu>
    </>
  );
}

export default Main;
