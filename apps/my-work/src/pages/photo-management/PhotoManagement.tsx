import { MainLayout } from '@my-work/layouts';
import { FileUpload } from '@tdo-ui/core/lib/Upload/UploadButton.model';
import React from 'react';
import { PhotoActions } from './PhotoActions';
import { PhotoList } from './PhotoList';
import { PhotoManagementContext } from './PhotoManagementContext';

export const PhotoManagement = () => {
  const [photoUpload, setPhotoUpload] = React.useState<
    Record<string, FileUpload>
  >({});

  const removePhotoUpload = (file: FileUpload) => {
    setPhotoUpload((preState) => {
      const newState = { ...preState };
      delete newState[file.key];
      return newState;
    });
  };

  const updatePhotoUpload = (key: string, file: FileUpload) => {
    setPhotoUpload((preState) => ({ ...preState, [key]: file }));
  };

  const addPhotoUpload = (key: string, file: FileUpload) => {
    setPhotoUpload((preState) => ({ ...preState, [key]: file }));
  };

  return (
    <PhotoManagementContext.Provider
      value={{
        photoUpload: photoUpload,
        removePhotoUpload: removePhotoUpload,
        updatePhotoUpload: updatePhotoUpload,
        addPhotoUpload: addPhotoUpload,
        setPhotoUpload: setPhotoUpload,
      }}
    >
      <MainLayout title="Photo Upload" rightAction={<PhotoActions />}>
        <PhotoList />
      </MainLayout>
    </PhotoManagementContext.Provider>
  );
};
