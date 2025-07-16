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
