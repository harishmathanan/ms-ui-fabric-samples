// Colors taken from https://fluentfabric.azurewebsites.net/#/color/products
import * as React from 'react';

export interface IFileIconProps {
  fileName: string // it is assumed that the file name will be passed in with its extension
};

const FileIcon = (props: IFileIconProps): JSX.Element => {
  const fileExtension = props.fileName.split('.').pop();

  switch(fileExtension) {
    case 'docx':
    case 'doc':
      return <i className="ms-Icon ms-Icon--WordDocument" style={{ color: '#2b579a' }} aria-hidden="true" />;

    case 'xlsx':
    case 'xls':
      return <i className="ms-Icon ms-Icon--ExcelDocument" style={{ color: '#217346' }} aria-hidden="true" />;

    case 'pptx':
    case 'ppt':
      return <i className="ms-Icon ms-Icon--PowerPointDocument" style={{ color: '#b7472a' }} aria-hidden="true" />;

    case 'pdf':
      return <i className="ms-Icon ms-Icon--PDF" style={{ color: '#d83b01' }} aria-hidden="true" />;

    default:
      // blank file icon
      return <i className="ms-Icon ms-Icon--Document" aria-hidden="true" />;
  }
};

export default FileIcon;
