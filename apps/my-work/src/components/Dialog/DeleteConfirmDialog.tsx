import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import noop from 'lodash/noop';

interface DeleteConfirmDialogProps {
  isOpen: boolean;
  isLoading?: boolean;
  title?: string;
  description?: string;
  onClose?: () => void;
  onConfirm?: () => void;
}

export const DeleteConfirmDialog = ({
  isOpen,
  isLoading = false,
  title = 'Delete',
  description = "Are you sure? You can't undo this action afterwards.",
  onClose = noop,
  onConfirm = noop,
}: DeleteConfirmDialogProps) => {
  const cancelRef = React.useRef<HTMLButtonElement | null>(null);

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {title}
          </AlertDialogHeader>

          <AlertDialogBody>{description}</AlertDialogBody>

          <AlertDialogFooter>
            <Button isLoading={isLoading} ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button isLoading={isLoading} colorScheme="red" onClick={onConfirm} ml={3}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};
