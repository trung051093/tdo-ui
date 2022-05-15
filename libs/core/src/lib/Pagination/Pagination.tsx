import {
  Text,
  Box,
  BoxProps,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import React from 'react';
import noop from 'lodash/noop';
import { FiChevronLeft, FiChevronRight, FiChevronDown } from 'react-icons/fi';

export interface PaginationProps extends BoxProps {
  page?: number;
  total?: number;
  limit?: number;
  limitOptions?: number[];
  onChangePage: (page: number) => void;
  onChangeLimit: (limit: number) => void;
}

export const Pagination = ({
  page = 1,
  total = 0,
  limit = 0,
  limitOptions = [10, 50, 100, 1000, 5000, 10000],
  onChangePage = noop,
  onChangeLimit = noop,
  ...rest
}: PaginationProps) => {
  const offsetStart = (page - 1) * limit + 1;
  const offsetEnd = offsetStart + limit - 1;

  return (
    <Box w="100%" h="10" px="2" py="2" {...rest}>
      <HStack spacing="2" justifyContent="space-between">
        <HStack>
          <Text>Rows per page:</Text>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<FiChevronDown />}
              variant="ghost"
            >
              {limit}
            </MenuButton>
            <MenuList>
              {limitOptions.map((limitNumber: number) => (
                <MenuItem
                  key={limitNumber}
                  onClick={() => onChangeLimit(limitNumber)}
                >
                  {limitNumber}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </HStack>
        <HStack>
          <Text>
            {offsetStart}-{offsetEnd} of {total}
          </Text>
          <Button variant="ghost" onClick={() => onChangePage(page - 1)}>
            <FiChevronLeft />
          </Button>
          <Button variant="ghost" onClick={() => onChangePage(page + 1)}>
            <FiChevronRight />
          </Button>
        </HStack>
      </HStack>
    </Box>
  );
};
