import { MoveUpRight } from "lucide-react";
import {
  TabsRoot,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
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
  const data = [
    { value: "item-1", label: "Item one", content: "Item one content" },
    { value: "item-2", label: "Item two", content: "Item two content" },
    { value: "item-3", label: "Item three", content: "Item three content" },
  ];

  return (
    <>
      <Wrapper>
        <div className="flex flex-col gap-20">
          <div>
            <Title>Tabs</Title>
            <Subtitle>
              An accessible tabs component that follows the WAI-ARIA Tabs Design
              Pattern. Each tab in the tab list has associated content, with
              only the selected tab's content being displayed.
            </Subtitle>
            <div className="flex gap-3 mt-5">
              <a
                className="pr-3 pl-3.5 py-0.5 border border-primary/20 bg-primary/10 flex items-center gap-2 text-sm"
                target="_blank"
                href="https://ark-ui.com/docs/components/tabs"
              >
                Docs <MoveUpRight className="stroke-1 size-3" />
              </a>
              <a
                className="pr-3 pl-3.5 py-0.5 border border-primary/20 bg-primary/10 flex items-center gap-2 text-sm"
                target="_blank"
                href="https://ark-ui.com/docs/components/tabs#api-reference"
              >
                Api Reference <MoveUpRight className="stroke-1 size-3" />
              </a>
            </div>
            <Preview>
              {() => ({
                preview: (
                  <>
                    <TabsRoot defaultValue={data[0].value}>
                      <TabsList>
                        {data.map((item) => (
                          <TabsTrigger key={item.value} value={item.value}>
                            {item.label}
                          </TabsTrigger>
                        ))}
                      </TabsList>
                      {data.map((item) => (
                        <TabsContent
                          className="xl:w-150"
                          key={item.value}
                          value={item.value}
                        >
                          {item.content}
                        </TabsContent>
                      ))}
                    </TabsRoot>
                  </>
                ),
                code: (
                  <PreviewCode>
                    {`
const data = [
    { value: "item-1", label: "Item one", content: "Item one content" },
    { value: "item-2", label: "Item two", content: "Item two content" },
    { value: "item-3", label: "Item three", content: "Item three content" },
  ];

<TabsRoot defaultValue={data[0].value}>
  <TabsList>
    {data.map((item) => (
      <TabsTrigger key={item.value} value={item.value}>
        {item.label}
      </TabsTrigger>
    ))}
  </TabsList>
  {data.map((item) => (
    <TabsContent
      className="xl:w-150"
      key={item.value}
      value={item.value}
    >
      {item.content}
    </TabsContent>
  ))}
</TabsRoot>
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
            <PreviewCode title="components/ui/tabs.tsx">
              {`
import { twMerge } from "tailwind-merge";
import { Button } from "@/components/ui/button";
import { Frame } from "@/components/ui/frame";
import { Tabs } from "@ark-ui/react/tabs";

function TabsRoot({
  children,
  className,
  ...rest
}: React.ComponentProps<typeof Tabs.Root>) {
  return (
    <Tabs.Root
      className={twMerge(["flex flex-col gap-2", className])}
      {...rest}
    >
      {children}
    </Tabs.Root>
  );
}

function TabsList({
  children,
  className,
  ...rest
}: React.ComponentProps<typeof Tabs.List>) {
  return (
    <Tabs.List className={twMerge(["px-6 flex", className])} {...rest}>
      {children}
    </Tabs.List>
  );
}

function TabsTrigger({
  children,
  className,
  asChild,
  ...rest
}: React.ComponentProps<typeof Tabs.Trigger>) {
  return (
    <Tabs.Trigger asChild {...rest}>
      {!asChild ? (
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
        >
          {children}
        </Button>
      ) : (
        children
      )}
    </Tabs.Trigger>
  );
}

function TabsContent({
  children,
  className,
  ...rest
}: React.ComponentProps<typeof Tabs.Content>) {
  return (
    <Tabs.Content
      className={twMerge([
        "relative px-10 pt-5 pb-10 min-h-50 w-full data-[selected]:animate-in data-[selected]:fade-in-0 data-[selected]:zoom-in-80 data-[selected]:duration-500",
        "[--color-frame-1-stroke:var(--color-primary)]",
        "[--color-frame-1-fill:var(--color-primary)]/20",
        "[--color-frame-2-stroke:var(--color-primary)]",
        "[--color-frame-2-fill:transparent]",
        className,
      ])}
      {...rest}
    >
      <Frame
        paths={JSON.parse(
          '[{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","19","0"],["L","100% - 18","0"],["L","100% + 0","0% + 18.5"],["L","100% + 0","50% - 21.119592875318066%"],["L","100% - 8","50% - 19.338422391857506%"],["L","100% - 8","50% + 17.557251908396946%"],["L","100% + 0","100% - 30.15267175572519%"],["L","100% + 0","100% - 22.5"],["L","100% - 17","100% - 7.5"],["L","50% + 17.16417910447761%","100% - 7.5"],["L","50% + 15.298507462686567%","100% - 15.5"],["L","50% - 14.552238805970148%","100% - 15.5"],["L","50% - 16.417910447761194%","100% - 6.5"],["L","0% + 17","100% - 7.5"],["L","0% + 0","100% - 24.5"],["L","0% + 0","50% + 19.84732824427481%"],["L","0% + 9","50% + 17.557251908396946%"],["L","0% + 10","50% - 18.829516539440203%"],["L","0","50% - 21.62849872773537%"],["L","0","0% + 19.5"],["L","19","0"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-2-stroke)","fill":"var(--color-frame-2-fill)"},"path":[["M","28","100% - 7.000000000000057"],["L","50% - 16.417910447761194%","100% - 7"],["L","50% - 14.552238805970148%","100% - 15.5"],["L","50% + 15.298507462686567%","100% - 15.5"],["L","50% + 17.16417910447761%","100% - 7.5"],["L","100% - 26","100% - 7.5"],["L","100% - 33","100% + 0"],["L","50% + 16.23134328358209%","100% - 1.1368683772161605"],["L","50% + 14.552238805970148%","100% - 8"],["L","50% - 13.619402985074627%","100% - 8"],["L","50% - 15.111940298507463%","100% + 0"],["L","33","100% + 0"],["L","28","100% - 7"]]}]'
        )}
      />
      <div className="relative">
        <p>{children}</p>
      </div>
    </Tabs.Content>
  );
}
export { TabsRoot, TabsList, TabsTrigger, TabsContent };
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
  TabsRoot,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
              `}
            </PreviewCode>
            <PreviewCode>
              {`
const data = [
  { value: "item-1", label: "Item one", content: "Item one content" },
  { value: "item-2", label: "Item two", content: "Item two content" },
  { value: "item-3", label: "Item three", content: "Item three content" },
];

<TabsRoot defaultValue={data[0].value}>
  <TabsList>
    {data.map((item) => (
      <TabsTrigger key={item.value} value={item.value}>
        {item.label}
      </TabsTrigger>
    ))}
  </TabsList>
  {data.map((item) => (
    <TabsContent
      className="xl:w-150"
      key={item.value}
      value={item.value}
    >
      {item.content}
    </TabsContent>
  ))}
</TabsRoot>
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
