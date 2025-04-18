import { FC, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import { IconButton, IconButtonProps } from "../../Buttons";
import { ContextMenuIcon } from "../../Icons";
import { DropdownPortal } from "../../Navigation";
import { ContextMenuI18nBundle as i18n } from "./ContextMenu.i18n";

export type ContextMenuProps = {
  buttonProps?: IconButtonProps;
  isLoading?: boolean;
  /** Expected to be a ReactNode comprised of <Dropdown.* /> items */
  children: ReactNode;
};
/** A generic context menu wrapper. Provides basic label defers all contents as children. */
export const ContextMenu: FC<ContextMenuProps> = ({
  buttonProps,
  isLoading,
  children,
}) => {
  const { t } = useTranslation(i18n.namespace);
  return (
    <DropdownPortal
      label={
        <IconButton
          title={t(i18n.strings.menu)}
          {...buttonProps}
          disabled={isLoading || buttonProps?.disabled}
          className={twMerge(
            buttonProps?.className,
            isLoading && "cursor-not-allowed opacity-40",
          )}
        >
          <ContextMenuIcon />
        </IconButton>
      }
    >
      {children}
    </DropdownPortal>
  );
};
