import type { FC } from "react";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { SecondaryButton, type SecondaryButtonProps } from "../../Buttons";
import { Skeleton } from "../../Feedback";
import { PaginationBase, type PaginationBaseProps } from "./(components)";
import { PaginationI18nBundle as i18n } from "./Pagination.i18n";

export type PaginationPreviewProps = Omit<PaginationBaseProps, "controls"> & {
  /** A react component based on <Pagination.ViewAll /> */
  /** If provided, the component will render as a react-router-dom Link */
  to?: string;
  buttonProps?: typeof SecondaryButton;
};
export const PaginationPreview: FC<PaginationPreviewProps> = ({
  buttonProps,
  to,
  ...props
}) => (
  <PaginationBase
    {...props}
    controls={
      <Controls
        to={to}
        {...buttonProps}
        loading={props.loading}
        count={props.count}
      />
    }
  />
);

type ControlsProps = SecondaryButtonProps & {
  count?: number;
  loading?: boolean;
  /** If provided, the component will render as a react-router-dom Link */
  to?: string;
};
/** A specialized <Button /> with content and styling predefined */
const Controls: FC<ControlsProps> = ({ count, loading, to, ...props }) => {
  const { t } = useTranslation(i18n.namespace);

  return (
    <SecondaryButton
      as={to ? Link : undefined}
      to={to}
      disabled={!count}
      {...props}
    >
      <Trans
        t={t}
        i18nKey={i18n.strings["viewAll_{{total}}"]}
        values={{ total: count }}
        components={{
          1: loading ? (
            <Skeleton variant="text" className="w-[2ch]" />
          ) : (
            <span />
          ),
        }}
      />
    </SecondaryButton>
  );
};
