import { FileUpload } from '@tdo-ui/core/lib/Upload/UploadButton.model';
import noop from 'lodash/noop';
import React from 'react';

export type PhotoManagementContextType = {
  photoUpload: Record<string, FileUpload>;
  removePhotoUpload: (file: FileUpload) => void;
  addPhotoUpload: (key: string, file: FileUpload) => void;
  updatePhotoUpload: (key: string, file: FileUpload) => void;
  setPhotoUpload: React.Dispatch<React.SetStateAction<Record<string, FileUpload>>>
};

export const PhotoManagementContext = React.createContext({
  photoUpload: {}, 
  removePhotoUpload: noop,
  addPhotoUpload: noop,
  updatePhotoUpload: noop,
  setPhotoUpload: noop
});
