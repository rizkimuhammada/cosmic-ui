import { MoveUpRight } from "lucide-react";
import {
  RadioGroupRoot,
  RadioGroupLabel,
  RadioGroupItem,
  RadioItemText,
  RadioItemHiddenInput,
  RadioItemControl,
} from "@/components/ui/radio-group";
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
  const items = [
    { id: "apple", label: "Apples" },
    { id: "orange", label: "Oranges" },
    { id: "mango", label: "Mangoes" },
    { id: "grape", label: "Grapes" },
  ];

  return (
    <>
      <Wrapper>
        <div className="flex flex-col gap-20">
          <div>
            <Title>Radio Group</Title>
            <Subtitle>
              A set of checkable buttons—known as radio buttons—where no more
              than one of the buttons can be checked at a time.
            </Subtitle>
            <div className="flex gap-3 mt-5">
              <a
                className="pr-3 pl-3.5 py-0.5 border border-primary/20 bg-primary/10 flex items-center gap-2 text-sm"
                target="_blank"
                href="https://ark-ui.com/docs/components/radio-group"
              >
                Docs <MoveUpRight className="stroke-1 size-3" />
              </a>
              <a
                className="pr-3 pl-3.5 py-0.5 border border-primary/20 bg-primary/10 flex items-center gap-2 text-sm"
                target="_blank"
                href="https://ark-ui.com/docs/components/radio-group#api-reference"
              >
                Api Reference <MoveUpRight className="stroke-1 size-3" />
              </a>
            </div>
            <Preview>
              {() => ({
                preview: (
                  <>
                    <RadioGroupRoot defaultValue="apple">
                      <RadioGroupLabel>Airplane Mode</RadioGroupLabel>
                      {items.map((opt) => (
                        <RadioGroupItem value={opt.id} key={opt.id}>
                          <RadioItemText>{opt.label}</RadioItemText>
                          <RadioItemHiddenInput />
                          <RadioItemControl />
                        </RadioGroupItem>
                      ))}
                    </RadioGroupRoot>
                  </>
                ),
                code: (
                  <PreviewCode>
                    {`
<RadioGroupRoot defaultValue="apple">
  <RadioGroupLabel>Airplane Mode</RadioGroupLabel>
  {items.map((opt) => (
    <RadioGroupItem value={opt.id} key={opt.id}>
      <RadioItemText>{opt.label}</RadioItemText>
      <RadioItemHiddenInput />
      <RadioItemControl />
    </RadioGroupItem>
  ))}
</RadioGroupRoot>
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
            <PreviewCode title="components/ui/radio-group.tsx">
              {`
import { twMerge } from "tailwind-merge";
import { Frame } from "@/components/ui/frame";
import { RadioGroup } from "@ark-ui/react/radio-group";

function RadioGroupRoot({
  children,
  className,
  ...rest
}: React.ComponentProps<typeof RadioGroup.Root>) {
  return (
    <RadioGroup.Root
      className={twMerge(["flex flex-col gap-3", className])}
      {...rest}
    >
      {children}
    </RadioGroup.Root>
  );
}

function RadioGroupLabel({
  children,
  className,
  ...rest
}: React.ComponentProps<typeof RadioGroup.Label>) {
  return (
    <RadioGroup.Label className={twMerge(["font-bold", className])} {...rest}>
      {children}
    </RadioGroup.Label>
  );
}

function RadioGroupItem({
  children,
  className,
  ...rest
}: React.ComponentProps<typeof RadioGroup.Item>) {
  return (
    <RadioGroup.Item
      className={twMerge([
        "flex gap-3.5 items-center cursor-pointer",
        className,
      ])}
      {...rest}
    >
      {children}
    </RadioGroup.Item>
  );
}

function RadioItemText({
  children,
  className,
  ...rest
}: React.ComponentProps<typeof RadioGroup.ItemText>) {
  return (
    <RadioGroup.ItemText className={twMerge(["order-2", className])} {...rest}>
      {children}
    </RadioGroup.ItemText>
  );
}

function RadioItemHiddenInput() {
  return <RadioGroup.ItemHiddenInput />;
}

function RadioItemControl({
  className,
  ...rest
}: React.ComponentProps<typeof RadioGroup.ItemControl>) {
  return (
    <RadioGroup.ItemControl
      className={twMerge([
        "group relative size-5 flex items-center justify-center data-[state=checked]:drop-shadow-[0_0px_20px_var(--color-primary)]",
        "[--color-frame-1-stroke:var(--color-primary)]/70",
        "[--color-frame-1-fill:var(--color-primary)]/10",
        className,
      ])}
      {...rest}
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
    </RadioGroup.ItemControl>
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
  RadioGroupRoot,
  RadioGroupLabel,
  RadioGroupItem,
  RadioItemText,
  RadioItemHiddenInput,
  RadioItemControl,
} from "@/components/ui/radio-group";
              `}
            </PreviewCode>
            <PreviewCode>
              {`
const items = [
  { id: "apple", label: "Apples" },
  { id: "orange", label: "Oranges" },
  { id: "mango", label: "Mangoes" },
  { id: "grape", label: "Grapes" },
];

<RadioGroupRoot defaultValue="apple">
  <RadioGroupLabel>Airplane Mode</RadioGroupLabel>
  {items.map((opt) => (
    <RadioGroupItem value={opt.id} key={opt.id}>
      <RadioItemText>{opt.label}</RadioItemText>
      <RadioItemHiddenInput />
      <RadioItemControl />
    </RadioGroupItem>
  ))}
  <RadioItemHiddenInput />
</RadioGroupRoot>
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
