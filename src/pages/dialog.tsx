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
                href="https://ark-ui.com/docs/components/dialog"
              >
                Docs <MoveUpRight className="stroke-1 size-3" />
              </a>
              <a
                className="pr-3 pl-3.5 py-0.5 border border-primary/20 bg-primary/10 flex items-center gap-2 text-sm"
                target="_blank"
                href="https://ark-ui.com/docs/components/dialog#api-reference"
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
          <div id="installation">
            <SectionTitle>Installation</SectionTitle>
            <SectionContent>Install the following dependencies:</SectionContent>
            <InstallPackage>add @ark-ui/react</InstallPackage>
            <SectionContent>
              Copy and paste the following code into your project.
            </SectionContent>
            <PreviewCode title="components/ui/dialog.tsx">
              {`
import { twMerge } from "tailwind-merge";
import { Frame } from "@/components/ui/frame";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Dialog } from "@ark-ui/react/dialog";
import { Portal } from "@ark-ui/react/portal";

function DialogRoot({
  children,
  ...rest
}: React.ComponentProps<typeof Dialog.Root>) {
  return <Dialog.Root {...rest}>{children}</Dialog.Root>;
}

function DialogTrigger({
  children,
  className,
  ...rest
}: React.ComponentProps<typeof Dialog.Trigger>) {
  return (
    <Dialog.Trigger asChild {...rest}>
      <Button className={className}>{children}</Button>
    </Dialog.Trigger>
  );
}

function DialogBackdrop({
  className,
  ...rest
}: React.ComponentProps<typeof Dialog.Backdrop>) {
  return (
    <Dialog.Backdrop
      className={twMerge([
        "fixed inset-0 bg-background/80 z-50 [&[data-state='open']]:animate-in [&[data-state='open']]:fade-in-0 [&[data-state='closed']]:animate-out [&[data-state='closed']]:fade-out-0",
        className,
      ])}
      {...rest}
    />
  );
}

function DialogPositioner({
  children,
  className,
  ...rest
}: React.ComponentProps<typeof Dialog.Positioner>) {
  return (
    <Dialog.Positioner className={className} {...rest}>
      {children}
    </Dialog.Positioner>
  );
}

function DialogContent({
  children,
  className,
  ...rest
}: React.ComponentProps<typeof Dialog.Content>) {
  return (
    <Dialog.Content
      className={twMerge([
        "outline-none backdrop-blur-sm fixed top-[50%] left-[50%] z-50 w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] sm:max-w-lg pb-14 pt-11 px-14",
        "[&[data-state='open']]:animate-in [&[data-state='open']]:fade-in-0 [&[data-state='open']]:zoom-in-80 [&[data-state='open']]:duration-250",
        "[&[data-state='closed']]:animate-out [&[data-state='closed']]:fade-out-0 [&[data-state='closed']]:zoom-out-80 [&[data-state='closed']]:duration-400",
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
      {...rest}
    >
      <Frame
        className="drop-shadow-2xl drop-shadow-primary/50"
        paths={JSON.parse(
          '[{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","25","12"],["L","100% - 23","12"],["L","100% - 7","30"],["L","100% - 6","0% + 26.666666666666668%"],["L","100% - 14","0% + 28.641975308641975%"],["L","100% - 14","100% - 35.55555555555556%"],["L","100% - 7","100% - 33.33333333333332%"],["L","100% - 7","100% - 40"],["L","100% - 22","100% - 25"],["L","50% + 7.5","100% - 25"],["L","50% - 6.5","100% - 9"],["L","24","100% - 9"],["L","9","100% - 24"],["L","9","100% - 33.58024691358026%"],["L","17","100% - 36.04938271604938%"],["L","17","0% + 28.641975308641975%"],["L","8","0% + 26.666666666666668%"],["L","8","30"],["L","25","12"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-2-stroke)","fill":"var(--color-frame-2-fill)"},"path":[["M","50% + 12.5","100% - 19"],["L","50% + 25","100% - 19"],["L","50% + 17","100% - 11.5"],["L","50% + 4.5","100% - 11.5"],["L","50% + 12.5","100% - 19"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-3-stroke)","fill":"var(--color-frame-3-fill)"},"path":[["M","50% + 30.5","100% - 19"],["L","50% + 40","100% - 19"],["L","50% + 34","100% - 13.5"],["L","50% + 24.5","100% - 13.5"],["L","50% + 30.5","100% - 19"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-4-stroke)","fill":"var(--color-frame-4-fill)"},"path":[["M","50% + 46.5","100% - 19"],["L","50% + 54","100% - 19"],["L","50% + 48","100% - 14.5"],["L","50% + 40.5","100% - 14"],["L","50% + 46.5","100% - 19"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-5-stroke)","fill":"var(--color-frame-5-fill)"},"path":[["M","23","5"],["L","100% - 21","6"],["L","100% + 0","27"],["L","100% + 0","0% + 27.407407407407412%"],["L","100% - 8","0% + 29.876543209876544%"],["L","100% - 8","100% - 41.97530864197531%"],["L","100% + 0","0% + 60.74074074074073%"],["L","100% + 0","100% - 37"],["L","100% - 20","100% - 18"],["L","50% + 61.5","100% - 18"],["L","50% + 48.5","100% - 6"],["L","50% + 3.5","100% - 6"],["L","50% - 3.5","100% + 0"],["L","26","100% + 0"],["L","0","100% - 24"],["L","0","100% - 39.99999999999999%"],["L","11","100% - 42.71604938271605%"],["L","10","0% + 29.135802469135804%"],["L","0","0% + 26.666666666666668%"],["L","0","28"],["L","23","5"]]}]'
        )}
      />
      {children}
    </Dialog.Content>
  );
}

function DialogTitle({
  children,
  className,
  ...rest
}: React.ComponentProps<typeof Dialog.Title>) {
  return (
    <Dialog.Title
      className={twMerge([
        "font-medium text-shadow-lg text-shadow-primary font-bold text-lg relative",
        className,
      ])}
      {...rest}
    >
      {children}
    </Dialog.Title>
  );
}

function DialogDescription({
  children,
  className,
  ...rest
}: React.ComponentProps<typeof Dialog.Description>) {
  return (
    <Dialog.Description
      className={twMerge(["opacity-80 py-2 relative", className])}
      {...rest}
    >
      {children}
    </Dialog.Description>
  );
}

function DialogCloseTrigger({
  children,
  className,
  asChild,
  ...rest
}: React.ComponentProps<typeof Dialog.CloseTrigger>) {
  return (
    <Dialog.CloseTrigger asChild {...rest}>
      {!asChild ? (
        <Button
          shape="flat"
          className={twMerge([
            "absolute right-0 top-0 px-5 py-1.5 transform scale-x-[-1] drop-shadow-[0_0px_20px_var(--color-accent)]",
            "[--color-frame-1-stroke:var(--color-accent)]",
            "[--color-frame-1-fill:var(--color-accent)]/50",
            className,
          ])}
          {...rest}
        >
          <X className="size-4" />
        </Button>
      ) : (
        children
      )}
    </Dialog.CloseTrigger>
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
          <div id="usage">
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
