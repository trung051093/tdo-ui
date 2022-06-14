import {
  Button,
  Stack,
  ToastId,
  Text,
  UseToastOptions,
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import React from 'react';

const defaultToastOptions: UseToastOptions = {
  isClosable: true,
  position: 'top-right',
  variant: 'left-accent',
};

export type UseConfirmMessageOptions = {
  title: string;
  description: string;
  onConfirm: () => void;
};

export const useConfirmMessage = (options: UseConfirmMessageOptions) => {
  const toast = useToast();
  const toastIdRef = React.useRef<ToastId>();

  const closeMessage = () => {
    if (toastIdRef.current) {
      toast.close(toastIdRef.current);
    }
  };

  const showMessage = () => {
    toastIdRef.current = toast({
      ...defaultToastOptions,
      status: 'info',
      title: options.title,
      description: (
        <Stack direction="column">
          <Stack>
            <Text>{options.description}</Text>
          </Stack>
          <Stack direction="row" justifyContent="flex-end">
            <Button size="sm" onClick={closeMessage}>
              Cancel
            </Button>
            <Button
              size="sm"
              colorScheme="yellow"
              onClick={() => {
                options.onConfirm();
                closeMessage();
              }}
            >
              Ok
            </Button>
          </Stack>
        </Stack>
      ),
    });
  };

  return {
    showMessage,
    closeMessage,
  };
};
