/**
 * Provides means to programmatically set the value of an input and trigger the onChange event
 * keeping controlled React components in sync
 */
export const setControlledTextFieldValue = (
  input: HTMLInputElement,
  value: string
): void => {
  const setter = Object.getOwnPropertyDescriptor(
    HTMLInputElement.prototype,
    "value"
  )?.set;
  if (!setter) {
    throw new Error(
      "Object.getOwnPropertyDescriptor('value').set is undefined"
    );
  }
  setter.call(input, value);

  dispatchControlledFieldChange(input);
};

/**
 * Provides means to programmatically set the value of an input and trigger the onChange event
 * keeping controlled React components in sync
 */
const dispatchControlledFieldChange = (
  field: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
) => {
  const event = new Event("change", { bubbles: true });
  field.dispatchEvent(event);
};
