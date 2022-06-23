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

  const close = () => {
    if (toastIdRef.current) {
      toast.close(toastIdRef.current);
    }
  };

  const onConfirm = () => {
    options.onConfirm();
    close();
  };

  const show = () => {
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
            <Button size="sm" onClick={close}>
              Cancel
            </Button>
            <Button
              size="sm"
              colorScheme="yellow"
              onClick={() => {
                options.onConfirm();
                close();
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
    show,
    close,
    onConfirm
  };
};
