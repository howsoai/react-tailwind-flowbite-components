import { FloatingPortal, useFloating } from "@floating-ui/react";
import { Dropdown, type DropdownProps } from "flowbite-react";
import { useEffect, useState, type FC, type ReactNode } from "react";

export type DropdownPortalProps = Omit<DropdownProps, "label" | "trigger"> & {
  trigger: ReactNode;
};
export const DropdownPortal: FC<DropdownPortalProps> = ({
  trigger,
  ...props
}) => {
  const { refs, floatingStyles } = useFloating({
    placement: "bottom",
    strategy: "fixed",
  });

  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
    setDropdownState(true);
  };
  const handleClose = () => {
    setIsOpen(false);
    setDropdownState(false);
  };
  const setDropdownState = (isOpen: boolean) => {
    const dropdownTrigger = refs.floating.current?.querySelector("button");
    if (!dropdownTrigger) return;

    const isExpanded = dropdownTrigger.getAttribute("aria-expanded") === "true";
    if (isExpanded !== isOpen) {
      dropdownTrigger.click();
    }
  };

  // Create a click outside listener sync between the trigger's state and our isOpen.
  // Click outside events can cause the dropdown to fire, without us being made aware.
  // <Dropdown /> offers no event hooks to broadcast it's state handling this.
  useEffect(() => {
    if (!isOpen) return;

    const onDocumentClick = (event: MouseEvent) => {
      const reference = refs.reference.current;
      const floating = refs.floating.current;
      if (!reference || !floating) return;

      if (
        // @ts-expect-error Meh
        !reference.contains(event.target) &&
        // @ts-expect-error Meh
        !floating.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", onDocumentClick);
    return () => {
      document.removeEventListener("click", onDocumentClick);
    };
  }, [isOpen, refs.floating, refs.reference]);

  return (
    <>
      <div ref={refs.setReference} onClick={isOpen ? handleClose : handleOpen}>
        {trigger}
      </div>

      <FloatingPortal>
        <div ref={refs.setFloating} style={floatingStyles}>
          <Dropdown
            label={null}
            placement="bottom"
            inline
            arrowIcon={false}
            {...props}
          />
        </div>
      </FloatingPortal>
    </>
  );
};
