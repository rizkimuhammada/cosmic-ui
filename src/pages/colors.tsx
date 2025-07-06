import {
  Wrapper,
  Title,
  Subtitle,
  Menu,
  Preview,
  PreviewCode,
} from "@/components/docs";
function Main() {
  return (
    <>
      <Wrapper>
        <div className="flex flex-col gap-5">
          <div>
            <Title>Colors</Title>
            <Subtitle>
              <a href="https://www.cosmic-ui.com" className="font-medium">
                Cosmic UI
              </a>{" "}
              A curated list of sci-fi themed colors to power your futuristic UI
              designs.
            </Subtitle>
            <Preview>
              {() => ({
                preview: (
                  <>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <div className="w-40 py-2 border bg-(--color-primary)/30 border-(--color-primary) text-(--color-primary-foreground) flex items-center justify-center">
                        Primary
                      </div>
                      <div className="w-40 py-2 border bg-(--color-accent)/30 border-(--color-accent) text-(--color-accent-foreground) flex items-center justify-center">
                        Accent
                      </div>
                      <div className="w-40 py-2 border bg-(--color-secondary)/30 border-(--color-secondary) text-(--color-secondary-foreground) flex items-center justify-center">
                        Secondary
                      </div>
                      <div className="w-40 py-2 border bg-(--color-destructive)/30 border-(--color-destructive) text-(--color-destructive-foreground) flex items-center justify-center">
                        Destructive
                      </div>
                      <div className="w-40 py-2 border bg-(--color-success)/30 border-(--color-success) text-(--color-success-foreground) flex items-center justify-center">
                        Success
                      </div>
                      <div className="w-40 py-2 border bg-(--color-background)/30 border-(--color-background) text-(--color-background-foreground) flex items-center justify-center">
                        Background
                      </div>
                    </div>
                  </>
                ),
                code: (
                  <PreviewCode title="src/index.css">
                    {`
  --color-primary: rgb(20, 160, 230);
  --color-primary-foreground: rgb(255, 255, 255);
  --color-accent: rgb(202, 65, 34);
  --color-accent-foreground: rgb(255, 255, 255);
  --color-secondary: --alpha(
    color-mix(in oklab, var(--color-primary), var(--color-white) 50%) / 60%
  );
  --color-secondary-foreground: color-mix(
    in oklab,
    var(--color-primary),
    var(--color-white) 70%
  );
  --color-destructive: var(--color-rose-500);
  --color-destructive-foreground: rgb(255, 255, 255);
  --color-success: var(--color-teal-500);
  --color-success-foreground: rgb(255, 255, 255);
  --color-background: color-mix(
    in oklab,
    var(--color-primary),
    var(--color-black) 80%
  );
  --color-foreground: var(--color-white);
                `}
                  </PreviewCode>
                ),
              })}
            </Preview>
          </div>
        </div>
      </Wrapper>
      <Menu></Menu>
    </>
  );
}

export default Main;
