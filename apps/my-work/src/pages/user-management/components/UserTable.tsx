import React from 'react';
import { useSearchUser } from '@my-work/hooks';
import BaseTable, { AutoResizer, Column, ColumnShape } from 'react-base-table';
import 'react-base-table/styles.css';
import { User } from '@my-work/models';
import { Box } from '@chakra-ui/react';
import { Pagination } from '@tdo-ui/core/lib/Pagination';
import './UserTable.css';
import { UserCellActions } from './UserCellActions';

export const UserTable = () => {
  const {isLoading, data: users, onChangeLimit, onChangePage } = useSearchUser({});

  const columns: ColumnShape<User>[] = [
    {
      title: 'Id',
      dataKey: 'id',
      key: 'id',
      width: 100,
    },
    {
      title: 'First Name',
      dataKey: 'firstName',
      key: 'firstName',
      width: 100,
    },
    {
      title: 'Last Name',
      dataKey: 'lastName',
      key: 'lastName',
      width: 100,
    },
    {
      title: 'Address',
      dataKey: 'address',
      key: 'address',
      width: 200,
    },
    {
      title: 'Company',
      dataKey: 'company',
      key: 'company',
      width: 100,
    },
    {
      title: 'Birth Date',
      dataKey: 'birthDate',
      key: 'birthDate',
      width: 200,
    },
    {
      title: 'Gender',
      dataKey: 'gender',
      key: 'gender',
      width: 100,
    },
    {
      title: 'Phone Number',
      dataKey: 'phoneNumber',
      key: 'phoneNumber',
      width: 200,
    },
    {
      title: 'Actions',
      dataKey: 'actions',
      key: 'actions',
      width: 155,
      frozen: Column.FrozenDirection.RIGHT,
      cellRenderer: (data) => <UserCellActions user={data.rowData} />,
    },
  ];

  return (
    <Box w="100%" h="80vh">
      
      <AutoResizer>
        {({ width, height }) => (
          <BaseTable
            fixed
            columns={columns}
            data={users?.data}
            width={width}
            height={height}
            footerHeight={55}
            disabled={isLoading}
            footerRenderer={
              <Pagination
                page={users?.pagination.page}
                total={users?.pagination.total}
                limit={users?.pagination.limit}
                limitOptions={[25, 50, 100]}
                onChangePage={onChangePage}
                onChangeLimit={onChangeLimit}
              />
            }
          />
        )}
      </AutoResizer>
    </Box>
  );
};
