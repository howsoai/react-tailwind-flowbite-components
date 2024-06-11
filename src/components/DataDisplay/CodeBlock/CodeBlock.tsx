import { type HTMLAttributes, useState, useEffect, useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { debounce } from "lodash";
import { UX } from "@/constants";
import { CopyIcon, DownloadIcon } from "@/components/Icons";
import { useDefaultTranslation } from "@/hooks";

export interface CodeBlockProps extends HTMLAttributes<"div"> {
  children?: string;
  /** The number of milliseconds for which the copied state should be displayed. Default: UX.durations.copied */
  inlineNotificationDuration?: number;
  mimeType?: string;
  fileName?: string;
}
export function CodeBlock({
  children,
  inlineNotificationDuration = UX.durations.inlineNotification,
  className,
  mimeType,
  fileName,
}: CodeBlockProps) {
  const { t } = useDefaultTranslation();
  const [isCopied, setIsCopied] = useState(false);

  const hideCopied = useMemo(
    () => debounce(() => setIsCopied(false), inlineNotificationDuration),
    [inlineNotificationDuration, setIsCopied],
  );
  useEffect(() => () => hideCopied.cancel(), [hideCopied]);

  const handleCopy = () => {
    if (children) {
      navigator.clipboard.writeText(children);
      setIsCopied(true);
      hideCopied();
    }
  };

  const handleDownload = () => {
    if (!children || !mimeType || !fileName) {
      return;
    }
    const a = document.createElement("a");
    const file = new Blob([children], { type: mimeType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <div
      className={twMerge(
        "relative min-h-12 rounded-lg border bg-gray-50 px-5 py-3 text-gray-500 dark:border-gray-900 dark:bg-gray-700 dark:text-gray-400",
        className,
      )}
    >
      <div className="float-right flex h-fit flex-row items-center gap-2 pb-2">
        <button
          tabIndex={-1}
          className="flex flex-row items-center gap-1 text-primary-500"
          onClick={handleCopy}
        >
          <>
            <CopyIcon copied={isCopied} className="h-5 w-5" />
            {isCopied
              ? t("DataDisplay.CodeBlock.copied")
              : t("DataDisplay.CodeBlock.copy")}
          </>
        </button>

        {mimeType && fileName && (
          <button
            tabIndex={-1}
            className="flex flex-row items-center gap-1 text-primary-500"
            onClick={handleDownload}
          >
            <>
              <DownloadIcon className="h-5 w-5" />
              {t("DataDisplay.CodeBlock.download")}
            </>
          </button>
        )}
      </div>

      <code className="whitespace-pre text-wrap [overflow-wrap:anywhere]">
        {children}
      </code>
    </div>
  );
}
