import { Modal, ModalProps, getTheme } from "flowbite-react";
import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export type FormModal = ModalProps;

/**
 * Flowbite's Modal with theme additions for using and form as a direct child
 * This ensures that the visual elements act in a unified overflow control method
 * while being wrapped in the required <form /> elements from head to foot.
 */
export const FormModal: FC<FormModal> = ({ children, ...props }): ReactNode => {
  const theme = getTheme();
  return (
    <Modal
      {...props}
      theme={{
        content: {
          inner: twMerge(
            theme.modal.content.inner,
            "*:flex *:max-h-full *:flex-col *:overflow-hidden",
          ),
        },
      }}
    >
      {children}
    </Modal>
  );
};
