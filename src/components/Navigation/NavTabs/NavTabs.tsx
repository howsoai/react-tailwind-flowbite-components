import type { ComponentProps, FC } from "react";
import { NavLink, type NavLinkProps } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export type NavTabsProps = ComponentProps<"div"> & {
  /** As a nav element, every Tabs component must include a unique label */
  "aria-label": string;
};
/**
 * Specialized "Tabs" integrated with React Router.
 * Typically used for app/page header route navigation.
 **/
const NavTabsComponent: FC<NavTabsProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <nav
      className={twMerge(
        "shrink-0 border-b border-gray-200 bg-white text-center text-sm font-medium text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400",
        className,
      )}
      {...props}
    >
      <ul data-testid="tabs-component" className="-mb-px flex flex-wrap">
        {children}
      </ul>
    </nav>
  );
};
NavTabsComponent.displayName = "NavTabs";

export type TabItemProps = NavLinkProps & {
  disabled?: boolean;
};
const TabItem: FC<TabItemProps> = ({ className, disabled, ...props }) => {
  return (
    <li>
      <NavLink
        aria-disabled={disabled}
        onClick={(e) => {
          if (disabled) e.preventDefault();
        }}
        className={(nav) =>
          twMerge(
            "inline-block border-b-2 border-transparent px-4 py-3",
            !nav.isActive &&
              !disabled &&
              "hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300",
            !nav.isActive &&
              disabled &&
              "cursor-not-allowed text-gray-400 dark:text-gray-500",
            nav.isActive &&
              "border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400",
            typeof className === "function" ? className(nav) : className,
          )
        }
        {...props}
      />
    </li>
  );
};

TabItem.displayName = "NavTabs.Item";

export const NavTabs = Object.assign(NavTabsComponent, {
  Item: TabItem,
});
