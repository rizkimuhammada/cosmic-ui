import {
  Wrapper,
  Title,
  Subtitle,
  Menu,
  SectionTitle,
  SectionContent,
} from "@/components/docs";
function Main() {
  return (
    <>
      <Wrapper>
        <div className="flex flex-col gap-5">
          <div id="introduction">
            <Title>Introduction</Title>
            <Subtitle>
              <a href="https://www.cosmic-ui.com" className="font-medium">
                Cosmic UI
              </a>{" "}
              is a set of beautifully-designed sci-fi components with
              customizable SVG shapes. Built for modern frameworks with
              accessible interactive logic. Open Source. Fully Customizable.
            </Subtitle>
          </div>
          <div>
            <SectionContent className="mb-5 opacity-90">
              <a href="https://www.cosmic-ui.com" className="font-medium">
                Cosmic UI
              </a>{" "}
              is a set of beautifully-crafted, customizable UI components with a
              sci-fi aesthetic. Built to empower you to create interfaces with
              futuristic designs using SVG shapes as the foundation, while
              leveraging{" "}
              <a
                href="https://zagjs.com/"
                target="_blank"
                className="font-medium"
              >
                zag.js
              </a>{" "}
              for interactive components.
            </SectionContent>
            <SectionContent className="mb-5 opacity-90">
              This is not a traditional component library. It is a system to
              build your own sci-fi component library.
            </SectionContent>
            <SectionContent className="mb-5 opacity-90">
              You know how most component libraries work: you install a package,
              import the components, and use them as they are. But when you want
              a UI with a distinctive sci-fi style – sharp edges, frames,
              holographic panels – you often end up writing complex custom SVG
              or CSS code from scratch.
            </SectionContent>
            <SectionContent className="mb-5 opacity-90">
              This is what{" "}
              <a href="https://www.cosmic-ui.com" className="font-medium">
                Cosmic UI
              </a>{" "}
              aims to solve. It is built around the following principles:
            </SectionContent>
            <div className="mb-7 opacity-90">
              <ul className="list-disc [&>li]:mb-1 pl-5">
                <li>
                  SVG First: Components use customizable SVG shapes to achieve a
                  truly sci-fi look.
                </li>
                <li>
                  Selective{" "}
                  <a
                    href="https://zagjs.com/"
                    target="_blank"
                    className="font-medium"
                  >
                    zag.js
                  </a>{" "}
                  Integration: Interactive components are powered by{" "}
                  <a
                    href="https://zagjs.com/"
                    target="_blank"
                    className="font-medium"
                  >
                    zag.js
                  </a>{" "}
                  for accessibility and state management.
                </li>
                <li>
                  Full Control: You own and customize every component’s markup,
                  SVG paths, and styles.
                </li>
                <li>
                  Beautiful Sci-Fi Defaults: Carefully designed shapes, frames,
                  and layouts that work out-of-the-box for sci-fi themed apps,
                  dashboards, and games.
                </li>
              </ul>
            </div>
          </div>
          <div id="svg-first">
            <SectionTitle>SVG First</SectionTitle>
            <SectionContent className="mb-5 opacity-90">
              <a href="https://www.cosmic-ui.com" className="font-medium">
                Cosmic UI
              </a>{" "}
              focuses on building components with SVG shapes at their core. This
              means:
            </SectionContent>
            <div className="mb-7 opacity-90">
              <ul className="list-disc [&>li]:mb-1 pl-5">
                <li>
                  Unique Designs: Break free from generic rectangles and create
                  buttons, cards, modals, and panels with futuristic shapes.
                </li>
                <li>
                  Easy Customization: Modify the SVG paths to match your
                  specific sci-fi design language.
                </li>
                <li>
                  Responsive: Components adapt to different sizes while
                  maintaining shape integrity.
                </li>
              </ul>
            </div>
          </div>
          <div id="zagjs-integration">
            <SectionTitle>
              Selective{" "}
              <a
                href="https://zagjs.com/"
                target="_blank"
                className="font-medium"
              >
                Zag.js
              </a>{" "}
              Integration
            </SectionTitle>
            <SectionContent className="mb-5 opacity-90">
              Not all components require complex state management. For
              components that do (such as menus, dialogs, tabs),{" "}
              <a href="https://www.cosmic-ui.com" className="font-medium">
                Cosmic UI
              </a>{" "}
              leverages{" "}
              <a
                href="https://zagjs.com/"
                target="_blank"
                className="font-medium"
              >
                zag.js
              </a>{" "}
              to provide:
            </SectionContent>
            <div className="mb-7 opacity-90">
              <ul className="list-disc [&>li]:mb-1 pl-5">
                <li>
                  Accessible Logic: Keyboard interactions and ARIA compliance
                  out-of-the-box.
                </li>
                <li>
                  Composable APIs: Consistent usage patterns across interactive
                  components.
                </li>
                <li>
                  Framework Agnostic Logic: Use the underlying{" "}
                  <a
                    href="https://zagjs.com/"
                    target="_blank"
                    className="font-medium"
                  >
                    zag.js
                  </a>{" "}
                  state machines in React, Vue, Solid, or other supported
                  frameworks.
                </li>
              </ul>
            </div>
          </div>
          <div id="scifi-defaults">
            <SectionTitle>Beautiful Sci-Fi Defaults</SectionTitle>
            <SectionContent className="mb-5 opacity-90">
              <a href="https://www.cosmic-ui.com" className="font-medium">
                Cosmic UI
              </a>{" "}
              comes with a collection of components styled with a sci-fi
              aesthetic:
            </SectionContent>
            <div className="mb-7 opacity-90">
              <ul className="list-disc [&>li]:mb-1 pl-5">
                <li>
                  Buttons & Alerts: Styled with holographic glows, sharp angles,
                  and SVG-based frames.
                </li>
                <li>
                  Menus & Modals: Designed to blend seamlessly into sci-fi
                  interfaces with a consistent visual language.
                </li>
              </ul>
            </div>
            <SectionContent className="mb-5 opacity-90">
              These components look good out-of-the-box but are also easy to
              customize for your specific project needs.
            </SectionContent>
          </div>
          <div id="full-control">
            <SectionTitle>Full Control</SectionTitle>
            <SectionContent className="mb-5 opacity-90">
              Unlike traditional libraries, you are not locked into predefined
              styles or markup. You can:
            </SectionContent>
            <div className="mb-7 opacity-90">
              <ul className="list-disc [&>li]:mb-1 pl-5">
                <li>
                  Edit SVG Paths: Modify the structure of your components at the
                  lowest level.
                </li>
                <li>
                  Customize Styles Completely: Tailor colors, glows, gradients,
                  and frames to match your design vision.
                </li>
              </ul>
            </div>
            <SectionContent className="mb-5 opacity-90">
              Extend Freely: Build new components using the same SVG-based
              approach to grow your sci-fi UI system.
            </SectionContent>
          </div>
        </div>
      </Wrapper>
      <Menu>
        <a className="hover:text-foreground py-1" href="#introduction">
          Introduction
        </a>
        <a className="hover:text-foreground py-1" href="#svg-first">
          SVG First
        </a>
        <a className="hover:text-foreground py-1" href="#zagjs-integration">
          Selective Zag.js Integration
        </a>
        <a className="hover:text-foreground py-1" href="#scifi-defaults">
          Beautiful Sci-Fi Defaults
        </a>
        <a className="hover:text-foreground py-1" href="#full-control">
          Full Control
        </a>
      </Menu>
    </>
  );
}

export default Main;
