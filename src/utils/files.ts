type FormatBytesOptions = {
  /* Default: 1 */
  maximumFractionDigits?: number;
  /* Default: true */
  scientific?: boolean;
  /* Default: " " */
  separator?: string;
};

/**
 * Format bytes as human-readable text.
 *
 * @param bytes Number of bytes.
 * @return Formatted string.
 */
export const formatBytes = (
  bytes: number,
  options: FormatBytesOptions = {},
): string => {
  options.maximumFractionDigits ||= 1;
  options.scientific ||= true;
  options.separator ||= " ";

  const formatter = new Intl.NumberFormat(undefined, {
    maximumFractionDigits: options.maximumFractionDigits,
  });

  const thresh = options.scientific ? 1000 : 1024;

  if (Math.abs(bytes) < thresh) {
    return formatter.format(bytes) + options.separator + "B";
  }

  const units = options.scientific
    ? ["kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
    : ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
  let u = -1;
  const r = 10 ** options.maximumFractionDigits;

  do {
    bytes /= thresh;
    ++u;
  } while (
    Math.round(Math.abs(bytes) * r) / r >= thresh &&
    u < units.length - 1
  );

  return formatter.format(bytes) + options.separator + units[u];
};
