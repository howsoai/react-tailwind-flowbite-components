"use client";

import { ButtonProps } from "@/components/Buttons";
import { FileIcon, FilesIcon, SearchIcon } from "@/components/Icons";
import { ReadabilityConstraint } from "@/components/Typography";
import { UX } from "@/constants";
import { formatBytes } from "@/utils";
import { Button } from "flowbite-react";
import {
  type ComponentProps,
  type FC,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import { FileDropZoneProps } from "./FileDropZone";
import { FileDropZoneI18nBundle as i18n } from "./FileDropZone.i18n";

export type FileDropZoneContentProps = ComponentProps<"label"> &
  Pick<InputHTMLAttributes<File>, "accept" | "multiple"> &
  Pick<FileDropZoneProps, "color"> & {
    /** Default: <FileDropZoneContent.Accepts accept={accept} /> */
    Accepts?: ReactNode;
    /** Default: <FileDropZoneContent.Button accept={accept} /> */
    Button?: ReactNode;
    htmlFor?: string;
    /** Default: <FileDropZoneContent.Icon multiple={multiple} /> */
    Icon?: ReactNode;
    /** Default: <FileDropZoneContent.Instructions multiple={multiple} /> */
    Instructions?: ReactNode;
    /** The maximum size of files, in bytes. */
    maxSize?: number;
    /** Default: <FileDropZoneContent.MaxSize maxSize={maxSize} /> */
    MaxSize?: ReactNode;
    selectedFiles?: Pick<File, "name">[];
  };

const defaultColor: ButtonProps["color"] = "secondary";

/** Provides instructions, criteria, and selected file output */
const FileDropZoneContentComponent: FC<FileDropZoneContentProps> = ({
  Accepts,
  Button,
  accept,
  color = defaultColor,
  htmlFor,
  Icon,
  Instructions,
  multiple,
  maxSize,
  MaxSize,
  selectedFiles,
  ...props
}) => {
  const { t } = useTranslation(i18n.namespace);

  return (
    <label
      {...props}
      htmlFor={htmlFor}
      className={twMerge(
        "block p-4",
        !!htmlFor && "cursor-pointer",
        props.className,
      )}
    >
      <ReadabilityConstraint as="span" className="mx-auto">
        {selectedFiles?.length ? (
          <span
            className={twMerge(
              UX.classes.marginBottom,
              "block max-w-full truncate font-semibold",
            )}
          >
            {selectedFiles.length === 1 ? (
              <span title={selectedFiles.at(0)?.name}>
                {selectedFiles.at(0)?.name}
              </span>
            ) : (
              <span title={selectedFiles.map((file) => file.name).join(", ")}>
                {t(i18n.strings["{{count}}_files"], {
                  count: selectedFiles.length,
                })}
              </span>
            )}
          </span>
        ) : (
          <span className="block text-center">
            {Icon || <FileDropZoneContent.Icon multiple={multiple} />}
            {Instructions || (
              <FileDropZoneContent.Instructions multiple={multiple} />
            )}
          </span>
        )}
        {(Accepts || MaxSize || accept || maxSize) && (
          <span className={twMerge(UX.classes.marginBottom, "block")}>
            {Accepts || <FileDropZoneContent.Accepts accept={accept} />}
            {MaxSize || <FileDropZoneContent.MaxSize maxSize={maxSize} />}
          </span>
        )}
        {Button || <FileDropZoneContent.Button color={color} />}
      </ReadabilityConstraint>
    </label>
  );
};

type FileDropZoneContentIconProps = Pick<
  FileDropZoneContentProps,
  "multiple"
> & {
  SingleIcon?: ReactNode;
  MultipleIcon?: ReactNode;
};
const FileDropZoneContentIcon: FC<FileDropZoneContentIconProps> = ({
  multiple,
  SingleIcon = <FileIcon />,
  MultipleIcon = <FilesIcon />,
}) => {
  return (
    <span
      className={twMerge(
        UX.classes.marginBottom,
        "block opacity-65 *:mx-auto *:h-12 *:w-12",
      )}
    >
      {multiple ? MultipleIcon : SingleIcon}
    </span>
  );
};

type FileDropZoneContentInstructionsProps = Pick<
  FileDropZoneContentProps,
  "multiple"
> &
  ComponentProps<"span"> & {
    /** Additional content to include into the instructions <span />. A space will be provided automatically */
    Additions?: ReactNode;
  };
const FileDropZoneContentInstructions: FC<
  FileDropZoneContentInstructionsProps
> = ({ Additions, multiple, ...props }) => {
  const { t } = useTranslation(i18n.namespace);

  return (
    <span
      {...props}
      className={twMerge(
        UX.classes.marginBottom,
        props.className,
        "block font-medium",
      )}
    >
      {t(
        multiple ? i18n.strings.instructionsPlural : i18n.strings.instructions,
      )}
      {Additions && <> {Additions}</>}
    </span>
  );
};

type FileDropZoneContentAcceptsProps = Pick<FileDropZoneContentProps, "accept">;
const FileDropZoneContentAccepts: FC<FileDropZoneContentAcceptsProps> = ({
  accept,
}) => {
  const { t } = useTranslation(i18n.namespace);

  return (
    accept && (
      <span className={"block text-center text-xs"}>
        {t(i18n.strings["accepts_{{value}}"], {
          value: accept,
        })}
      </span>
    )
  );
};

type FileDropZoneContentMaxSizeProps = Pick<
  FileDropZoneContentProps,
  "maxSize"
>;
const FileDropZoneContentMaxSize: FC<FileDropZoneContentMaxSizeProps> = ({
  maxSize,
}) => {
  const { t } = useTranslation(i18n.namespace);

  return (
    maxSize && (
      <span className={"block text-center text-xs"}>
        {t(i18n.strings["maxSize_{{value}}"], {
          value: formatBytes(maxSize),
        })}
      </span>
    )
  );
};

type FileDropZoneContentButtonProps = Pick<FileDropZoneContentProps, "color">;
const FileDropZoneContentButton: FC<FileDropZoneContentButtonProps> = ({
  color,
}) => {
  const { t } = useTranslation(i18n.namespace);

  return (
    <span className="flex justify-center">
      <Button color={color === "secondary" ? "gray" : color}>
        <SearchIcon className={"mr-1"} />
        {t(i18n.strings.browse)}
      </Button>
    </span>
  );
};

export const FileDropZoneContent = Object.assign(FileDropZoneContentComponent, {
  Icon: FileDropZoneContentIcon,
  Instructions: FileDropZoneContentInstructions,
  Accepts: FileDropZoneContentAccepts,
  MaxSize: FileDropZoneContentMaxSize,
  Button: FileDropZoneContentButton,
});
