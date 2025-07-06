import { MoveUpRight } from "lucide-react";
import {
  SwitchRoot,
  SwitchHiddenInput,
  SwitchControl,
  SwitchLabel,
  SwitchThumb,
} from "@/components/ui/switch";
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
            <Title>Switch</Title>
            <Subtitle>
              A control that allows the user to toggle between checked and not
              checked.
            </Subtitle>
            <div className="flex gap-3 mt-5">
              <a
                className="pr-3 pl-3.5 py-0.5 border border-primary/20 bg-primary/10 flex items-center gap-2 text-sm"
                target="_blank"
                href="https://zagjs.com/components/react/switch"
              >
                Docs <MoveUpRight className="stroke-1 size-3" />
              </a>
              <a
                className="pr-3 pl-3.5 py-0.5 border border-primary/20 bg-primary/10 flex items-center gap-2 text-sm"
                target="_blank"
                href="https://zagjs.com/components/react/switch#methods-and-properties"
              >
                Api Reference <MoveUpRight className="stroke-1 size-3" />
              </a>
            </div>
            <Preview>
              {() => ({
                preview: (
                  <>
                    <SwitchRoot>
                      <SwitchControl>
                        <SwitchThumb />
                      </SwitchControl>
                      <SwitchLabel>Airplane Mode</SwitchLabel>
                      <SwitchHiddenInput />
                    </SwitchRoot>
                  </>
                ),
                code: (
                  <PreviewCode>
                    {`
<SwitchRoot>
  <SwitchControl>
    <SwitchThumb />
  </SwitchControl>
  <SwitchLabel>Airplane Mode</SwitchLabel>
  <SwitchHiddenInput />
</SwitchRoot>
                `}
                  </PreviewCode>
                ),
              })}
            </Preview>
          </div>
          <div>
            <SectionTitle>Installation</SectionTitle>
            <SectionContent>Install the following dependencies:</SectionContent>
            <InstallPackage>add @zag-js/switch @zag-js/react</InstallPackage>
            <SectionContent>
              Copy and paste the following code into your project.
            </SectionContent>
            <PreviewCode title="components/ui/switch.tsx">
              {`
import * as zagSwitch from "@zag-js/switch";
import { type Props } from "@zag-js/switch";
import { useMachine, normalizeProps } from "@zag-js/react";
import { useId, createContext, useContext } from "react";
import { Frame } from "@/components/ui/frame";
import { twMerge } from "tailwind-merge";

const SwitchContext = createContext<ReturnType<
  typeof zagSwitch.connect
> | null>(null);

function useSwitch() {
  const context = useContext(SwitchContext);
  if (!context) {
    throw new Error("useSwitch must be used within SwitchProvider");
  }
  return context;
}

function SwitchRoot({
  className,
  children,
  id,
  ...rest
}: React.ComponentProps<"label"> & Omit<Props, "id">) {
  const service = useMachine(zagSwitch.machine, { id: useId(), ...rest });
  const api = zagSwitch.connect(service, normalizeProps);

  return (
    <SwitchContext.Provider value={api}>
      <label
        className={twMerge(["flex items-center gap-4", className])}
        {...api.getRootProps()}
      >
        {children}
      </label>
    </SwitchContext.Provider>
  );
}

function SwitchHiddenInput() {
  const api = useSwitch();
  return <input {...api.getHiddenInputProps()} />;
}

function SwitchControl({ className, children }: React.ComponentProps<"span">) {
  const api = useSwitch();
  return (
    <span
      className={twMerge([
        "group relative w-14 h-6 flex items-center p-1 cursor-pointer",
        "[--color-frame-1-stroke:var(--color-primary)]/70",
        "[--color-frame-1-fill:var(--color-primary)]/10",
        "[&.checked]:[--color-frame-1-stroke:var(--color-primary)]",
        "[&.checked]:[--color-frame-1-fill:var(--color-primary)]/20",
        api.checked && "checked",
        className,
      ])}
      {...api.getControlProps()}
    >
      <div className="absolute inset-0 z-[-1]">
        <Frame
          paths={JSON.parse(
            '[{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","11","0"],["L","100% + 0","0"],["L","100% + 0","100% + 0"],["L","0","100% + 0"],["L","0","0% + 12"],["L","11","0"]]}]'
          )}
        />
      </div>
      {children}
    </span>
  );
}

function SwitchThumb({ className }: React.ComponentProps<"span">) {
  const api = useSwitch();
  return (
    <span
      className={twMerge([
        "relative w-1/2 h-3.5 z-[-1] -mb-px transition-all ms-0.5",
        "[--color-frame-1-stroke:var(--color-primary)]/80",
        "[--color-frame-1-fill:var(--color-primary)]/20",
        "group-[.checked]:[--color-frame-1-stroke:var(--color-primary)]",
        "group-[.checked]:[--color-frame-1-fill:var(--color-primary)]/30",
        "group-[.checked]:ms-[47%] group-[.checked]:drop-shadow-[0_0px_20px_var(--color-primary)]",
        className,
      ])}
      {...api.getThumbProps()}
    >
      <Frame
        paths={JSON.parse(
          '[{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","7","0"],["L","100% + 0","0"],["L","100% + 0","100% + 0"],["L","0","100% + 0"],["L","0","0% + 7"],["L","7","0"]]}]'
        )}
      />
    </span>
  );
}

function SwitchLabel({ className, children }: React.ComponentProps<"span">) {
  const api = useSwitch();
  return (
    <span className={className} {...api.getLabelProps()}>
      {children}
    </span>
  );
}

export {
  SwitchRoot,
  SwitchHiddenInput,
  SwitchControl,
  SwitchThumb,
  SwitchLabel,
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
  SwitchRoot,
  SwitchHiddenInput,
  SwitchControl,
  SwitchLabel,
  SwitchThumb,
} from "@/components/ui/switch";
              `}
            </PreviewCode>
            <PreviewCode>
              {`
<SwitchRoot>
  <SwitchControl>
    <SwitchThumb />
  </SwitchControl>
  <SwitchLabel>Airplane Mode</SwitchLabel>
  <SwitchHiddenInput />
</SwitchRoot>
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
