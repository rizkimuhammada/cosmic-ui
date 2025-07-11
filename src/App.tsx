import { createContext, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Github, Zap } from "lucide-react";
import { Frame } from "@/components/ui/frame";
import { Button } from "@/components/ui/button";
import { Outlet, Link } from "react-router";

export const MobileMenuContext = createContext<{
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  showMenu: true,
  setShowMenu: () => {},
});

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <MobileMenuContext.Provider value={{ showMenu, setShowMenu }}>
      <div
        className={twMerge([
          "min-h-screen",
          "before:fixed before:inset-0 before:bg-noise before:z-[-1]",
          "after:bg-temper after:opacity-15 after:bg-contain after:fixed after:inset-0 after:blur-xl after:z-[-1]",
        ])}
      >
        <div className="before:fixed before:inset-x-0 before:top-0 before:h-80 before:bg-gradient-to-b before:from-black/50 before:to-transparent before:z-[-1]">
          <div className="h-18 mt-2 mx-2 lg:-mt-px lg:-mx-px flex fixed top-0 inset-x-0 z-50">
            <div
              className={twMerge([
                "size-full relative -mr-[11px] hidden lg:block",
                "[--color-frame-1-stroke:var(--color-primary)]/90",
                "[--color-frame-1-fill:var(--color-primary)]/8",
                "[--color-frame-2-stroke:var(--color-primary)]/23",
                "[--color-frame-2-fill:transparent]",
              ])}
            >
              <Frame
                className="drop-shadow-2xl drop-shadow-primary"
                paths={JSON.parse(
                  '[{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","0","0"],["L","100% - 6","0"],["L","100% - 11","100% - 64"],["L","100% + 0","0% + 29"],["L","0","11"],["L","0","0"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-2-stroke)","fill":"var(--color-frame-2-fill)"},"path":[["M","0","14"],["L","100% - 7","33"]]}]'
                )}
              />
            </div>
            <div className="flex lg:container h-full relative flex-none w-full">
              <div
                className={twMerge([
                  "flex-none h-full px-14 relative w-full lg:w-auto",
                  "[--color-frame-1-stroke:var(--color-primary)]",
                  "[--color-frame-1-fill:var(--color-primary)]/20",
                  "[--color-frame-2-stroke:var(--color-primary)]/57",
                  "[--color-frame-2-fill:transparent]",
                  "[--color-frame-3-stroke:var(--color-primary)]/23",
                  "[--color-frame-3-fill:transparent]",
                ])}
              >
                <Frame
                  enableBackdropBlur
                  className="drop-shadow-2xl drop-shadow-primary/40"
                  paths={JSON.parse(
                    '[{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","6","0"],["L","100% - 6.5","0"],["L","100% + 0","0% + 9"],["L","100% - 28","100% - 15"],["L","162","100% - 15"],["L","164","100% - 30"],["L","153","100% - 15"],["L","27","100% - 15"],["L","0","0% + 8"],["L","6","0"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-2-stroke)","fill":"var(--color-frame-2-fill)"},"path":[["M","32","100% - 15"],["L","0% + 152.5","100% - 15"],["L","0% + 163.5","100% - 29"],["L","0% + 161.5","100% - 15"],["L","100% - 32.5","100% - 15"],["L","100% - 36.5","100% - 7"],["L","0% + 163.5","100% - 7"],["L","0% + 165.5","100% - 23"],["L","0% + 152.5","100% - 7"],["L","37","100% - 7"],["L","32","100% - 15"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-3-stroke)","fill":"var(--color-frame-3-fill)"},"path":[["M","0","0% + 33"],["M","4","0% + 33"],["L","0% + 18.5","100% - 12"],["L","0% + 23.5","100% - 12"],["L","29","100% + 0"],["L","155","100% - 0"],["L","160","100% - 8"],["L","161","100% - 0"],["L","100% - 28","100% + 0"],["L","100% - 23","100% - 11"],["L","100% - 17","100% - 11"],["L","100% - 14","100% - 14"],["L","100% + 0","100% - 14"]],"name":"Frame 3"}]'
                  )}
                />
                <div className="flex items-center mt-4.5 relative">
                  <Link
                    to="/"
                    className="me-16 font-bold text-shadow-lg text-shadow-primary"
                  >
                    COSMIC UI
                  </Link>
                  <div className="hidden lg:flex gap-8 font-medium [&>a]:hover:text-shadow-lg [&>a]:hover:text-shadow-primary/40">
                    <Link
                      className="hover:text-shadow-lg hover:text-shadow-primary/50"
                      to="/docs"
                    >
                      Docs
                    </Link>
                    <Link
                      className="hover:text-shadow-lg hover:text-shadow-primary/50"
                      to="/docs/frame"
                    >
                      Components
                    </Link>
                    <Link
                      className="hover:text-shadow-lg hover:text-shadow-primary/50"
                      to="/docs/colors"
                    >
                      Colors
                    </Link>
                  </div>
                  <div
                    onClick={() => setShowMenu(true)}
                    className="cursor-pointer ms-auto flex items-center gap-2 lg:hidden font-medium"
                  >
                    <Zap className="size-4" />
                    Menu
                  </div>
                </div>
              </div>
              <div
                className={twMerge([
                  "w-full relative -ml-[25px] lg:flex justify-end pe-8 hidden",
                  "[--color-frame-1-stroke:var(--color-primary)]",
                  "[--color-frame-1-fill:var(--color-primary)]/10",
                  "[--color-frame-2-stroke:var(--color-primary)]/23",
                  "[--color-frame-2-fill:transparent]",
                ])}
              >
                <Frame
                  enableBackdropBlur
                  className="drop-shadow-2xl drop-shadow-primary/40"
                  paths={JSON.parse(
                    '[{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","19","0"],["L","100% - 5","0"],["L","100% + 0","0% + 7"],["L","100% - 36","100% - 20"],["L","0","100% - 20"],["L","25","8.999992370605469"],["L","19","1"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-2-stroke)","fill":"var(--color-frame-2-fill)"},"path":[["M","25","100% - 14"],["L","100% - 32","100% - 13"],["L","100% - 15","36"]],"name":"Frame 2"}]'
                  )}
                />
                <div className="flex items-center -mt-3.5">
                  <Button
                    shape="flat"
                    className="font-normal px-9 py-[0.45rem] text-xs text-foreground [--color-frame-1-stroke:var(--color-primary)]/50 [--color-frame-1-fill:var(--color-primary)]/8"
                  >
                    <div className="me-10">Search Docs…</div>
                    <div className="ms-auto">⌘+k</div>
                  </Button>
                  <a
                    target="_blank"
                    href="https://github.com/rizkimuhammada/cosmic-ui"
                  >
                    <Button
                      shape="flat"
                      className="py-[0.45rem] px-6 ms-1 text-foreground [--color-frame-1-stroke:var(--color-accent)]/50 [--color-frame-1-fill:var(--color-accent)]/20"
                    >
                      <Github className="size-4 stroke-[1.2]" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
            <div
              className={twMerge([
                "size-full relative -ml-[18px] hidden lg:block",
                "[--color-frame-1-stroke:var(--color-primary)]/90",
                "[--color-frame-1-fill:var(--color-primary)]/8",
                "[--color-frame-2-stroke:var(--color-primary)]/23",
                "[--color-frame-2-fill:transparent]",
              ])}
            >
              <Frame
                paths={JSON.parse(
                  '[{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","12","0"],["L","100% + 0","0"],["L","100% + 0","0% + 16"],["L","0","100% - 42"],["L","18","7"],["L","12","0"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-2-stroke)","fill":"var(--color-frame-2-fill)"},"path":[["M","3","100% - 36"],["L","100% + 0","20"]],"name":"Frame 2"}]'
                )}
              />
            </div>
          </div>
          <div className="container mx-auto px-4 sm:px-0">
            <Outlet />
            <div className="text-center text-foreground/60 mt-24 mb-20">
              Powered by synthetic caffeine ∙ Deployed by{" "}
              <a
                href="https://github.com/rizkimuhammada"
                target="_blank"
                className="font-medium text-foreground/70"
              >
                Left4code
              </a>{" "}
              ∙ Signal traceable on{" "}
              <a
                href="https://github.com/rizkimuhammada/cosmic-ui"
                target="_blank"
                className="font-medium text-foreground/70"
              >
                GitHub
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </MobileMenuContext.Provider>
  );
}

export default App;
