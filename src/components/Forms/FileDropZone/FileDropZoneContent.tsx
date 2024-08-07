"use client";

import { FileIcon, FilesIcon } from "@/components/Icons";
import { Paragraph } from "@/components/Typography";
import { formatBytes } from "@/utils";
import { ComponentProps, FC, InputHTMLAttributes } from "react";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import { FileDropZoneI18nBundle as i18n } from "./FileDropZone.i18n";

export type FileDropZoneContentProps = ComponentProps<"label"> & {
  htmlFor?: string;
  /** The maximum size of files, in bytes. */
  maxSize?: number;
  selectedFiles?: Pick<File, "name">[];
} & Pick<InputHTMLAttributes<File>, "accept" | "multiple">;
/** Provides instructions, criteria, and selected file output */
export const FileDropZoneContent: FC<FileDropZoneContentProps> = ({
  accept,
  htmlFor,
  multiple,
  maxSize,
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
      {selectedFiles?.length ? (
        <Paragraph marginBottom className="max-w-full truncate font-semibold">
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
        </Paragraph>
      ) : (
        <div className="space-y-2 text-center">
          {multiple ? (
            <FileIcon className="mx-auto h-12 w-12" />
          ) : (
            <FilesIcon className="mx-auto h-12 w-12" />
          )}
          <Paragraph marginBottom className="font-medium">
            {t(
              multiple
                ? i18n.strings.instructionsPlural
                : i18n.strings.instructions,
            )}
          </Paragraph>
        </div>
      )}
      {accept && (
        <Paragraph className="text-center text-xs">
          {t(i18n.strings["accepts_{{value}}"], {
            value: accept,
          })}
        </Paragraph>
      )}
      {maxSize && (
        <Paragraph className="text-center text-xs">
          {t(i18n.strings["maxSize_{{value}}"], {
            value: formatBytes(maxSize),
          })}
        </Paragraph>
      )}
    </label>
  );
};
