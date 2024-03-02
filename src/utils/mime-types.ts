export const getMimeTypeDisplay = (mimeType: string): string => {
  if (!mimeType.includes("/")) {
    throw new Error(`Invalid mimetype: ${mimeType}`);
  }
  return mimeType.split("/")[1].toUpperCase();
};
