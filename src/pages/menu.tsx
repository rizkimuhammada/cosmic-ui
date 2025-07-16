import { MoveUpRight } from "lucide-react";
import {
  MenuRoot,
  MenuTrigger,
  MenuPositioner,
  MenuContent,
  MenuItem,
} from "@/components/ui/menu";
import { PenLine, FilePenLine, CopySlash, Eraser, FileUp } from "lucide-react";
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
            <Title>Menu</Title>
            <Subtitle>
              Displays a button or a component that looks like a button.
            </Subtitle>
            <div className="flex gap-3 mt-5">
              <a
                className="pr-3 pl-3.5 py-0.5 border border-primary/20 bg-primary/10 flex items-center gap-2 text-sm"
                target="_blank"
                href="https://ark-ui.com/docs/components/menu"
              >
                Docs <MoveUpRight className="stroke-1 size-3" />
              </a>
              <a
                className="pr-3 pl-3.5 py-0.5 border border-primary/20 bg-primary/10 flex items-center gap-2 text-sm"
                target="_blank"
                href="https://ark-ui.com/docs/components/menu#api-reference"
              >
                Api Reference <MoveUpRight className="stroke-1 size-3" />
              </a>
            </div>
            <Preview>
              {() => ({
                preview: (
                  <>
                    <MenuRoot>
                      <MenuTrigger className="w-56">
                        <PenLine className="size-4 me-2.5" /> Actions
                      </MenuTrigger>
                      <MenuPositioner>
                        <MenuContent>
                          <MenuItem value="edit">
                            <FilePenLine className="size-4 me-2.5" /> Edit
                          </MenuItem>
                          <MenuItem value="duplicate">
                            <CopySlash className="size-4 me-2.5" /> Duplicate
                          </MenuItem>
                          <MenuItem value="delete">
                            <Eraser className="size-4 me-2.5" /> Delete
                          </MenuItem>
                          <MenuItem value="export">
                            <FileUp className="size-4 me-2.5" /> Export...
                          </MenuItem>
                        </MenuContent>
                      </MenuPositioner>
                    </MenuRoot>
                  </>
                ),
                code: (
                  <PreviewCode>
                    {`
<MenuRoot>
  <MenuTrigger className="w-56">
    <PenLine className="size-4 me-2.5" /> Actions
  </MenuTrigger>
  <MenuPositioner>
    <MenuContent>
      <MenuItem value="edit">
        <FilePenLine className="size-4 me-2.5" /> Edit
      </MenuItem>
      <MenuItem value="duplicate">
        <CopySlash className="size-4 me-2.5" /> Duplicate
      </MenuItem>
      <MenuItem value="delete">
        <Eraser className="size-4 me-2.5" /> Delete
      </MenuItem>
      <MenuItem value="export">
        <FileUp className="size-4 me-2.5" /> Export...
      </MenuItem>
    </MenuContent>
  </MenuPositioner>
</MenuRoot>
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
            <PreviewCode title="components/ui/menu.tsx">
              {`
import { twMerge } from "tailwind-merge";
import { Frame } from "@/components/ui/frame";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Menu } from "@ark-ui/react/menu";
import { Portal } from "@ark-ui/react/portal";

function MenuRoot({
  children,
  ...rest
}: React.ComponentProps<typeof Menu.Root>) {
  return <Menu.Root {...rest}>{children}</Menu.Root>;
}

function MenuTrigger({
  children,
  className,
  asChild,
  ...rest
}: React.ComponentProps<typeof Menu.Trigger>) {
  return (
    <Menu.Trigger asChild {...rest}>
      {!asChild ? (
        <Button
          className={twMerge([
            "data-[state=open]:drop-shadow-[0_0px_20px_var(--color-primary)]",
            className,
          ])}
        >
          {children}
          <Menu.Indicator className="ms-auto transition-transform group-data-[state=open]:rotate-180">
            <ChevronDown className="size-4" />
          </Menu.Indicator>
        </Button>
      ) : (
        children
      )}
    </Menu.Trigger>
  );
}

function MenuPositioner({
  children,
  className,
  ...rest
}: React.ComponentProps<typeof Menu.Positioner>) {
  return (
    <Portal>
      <Menu.Positioner className={className} {...rest}>
        {children}
      </Menu.Positioner>
    </Portal>
  );
}

function MenuContent({
  children,
  className,
  ...rest
}: React.ComponentProps<typeof Menu.Content>) {
  return (
    <Menu.Content
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
      {...rest}
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
    </Menu.Content>
  );
}

function MenuItem({
  children,
  className,
  asChild,
  ...rest
}: React.ComponentProps<typeof Menu.Item>) {
  return (
    <Menu.Item asChild {...rest}>
      {!asChild ? (
        <div
          className={twMerge([
            "cursor-pointer flex items-center -mx-3 -my-0.5 px-3 py-0.5 border border-transparent hover:border-primary/30 hover:bg-primary/10 data-[highlighted]:border-primary/30 data-[highlighted]:bg-primary/10",
            className,
          ])}
        >
          {children}
        </div>
      ) : (
        children
      )}
    </Menu.Item>
  );
}

export { MenuRoot, MenuTrigger, MenuPositioner, MenuContent, MenuItem };
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
  MenuRoot,
  MenuTrigger,
  MenuPositioner,
  MenuContent,
  MenuItem,
} from "@/components/ui/menu";
              `}
            </PreviewCode>
            <PreviewCode>
              {`
<MenuRoot>
  <MenuTrigger className="w-56">
    <PenLine className="size-4 me-2.5" /> Actions
  </MenuTrigger>
  <MenuPositioner>
    <MenuContent>
      <MenuItem value="edit">
        <FilePenLine className="size-4 me-2.5" /> Edit
      </MenuItem>
      <MenuItem value="duplicate">
        <CopySlash className="size-4 me-2.5" /> Duplicate
      </MenuItem>
      <MenuItem value="delete">
        <Eraser className="size-4 me-2.5" /> Delete
      </MenuItem>
      <MenuItem value="export">
        <FileUp className="size-4 me-2.5" /> Export...
      </MenuItem>
    </MenuContent>
  </MenuPositioner>
</MenuRoot>
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
