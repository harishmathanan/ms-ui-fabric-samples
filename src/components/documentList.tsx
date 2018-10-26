import * as React from 'react';
import FileIcon from './fileIcon';
import {
  DetailsList,
  DetailsListLayoutMode,
  CheckboxVisibility,
  IColumn
} from 'office-ui-fabric-react/lib/DetailsList';
import {
  HoverCard,
  HoverCardType,
  IPlainCardProps
} from 'office-ui-fabric-react/lib/HoverCard';

import documents from '../mocks/documents';

const DocumentList = (): JSX.Element => {
  return (
    <DetailsList
      items={documents}
      columns={columnDefinition}
      onRenderItemColumn={renderItemColumn}
      isHeaderVisible={false}
      checkboxVisibility={CheckboxVisibility.hidden}
      layoutMode={DetailsListLayoutMode.fixedColumns}
    />
  );
}

const columnDefinition: IColumn[] = [
  {
    key: 'FileTypeColumn',
    name: 'File Type',
    isIconOnly: true,
    fieldName: 'icon',
    minWidth: 16,
    maxWidth: 16
  },
  {
    key: 'FileNameColumn',
    name: 'Name',
    fieldName: 'name',
    minWidth: 210,
    maxWidth: 350,
    isPadded: true
  },
  {
    key: 'FileInfoColumn',
    name: 'More Info',
    isIconOnly: true,
    fieldName: 'info',
    minWidth: 16,
    maxWidth: 16
  }
];

const renderItemColumn = (item: any, index: number, column: IColumn): JSX.Element => {

  if (column.key === 'FileTypeColumn') {
    return (
      <FileIcon fileName={item.name} />
    );

  } else if (column.key === 'FileNameColumn') {
    return (
      <a href="#">{item.name}</a>
    );

  } else {
    const plainCardProps: IPlainCardProps = {
      onRenderPlainCard: renderPlainCard,
      renderData: item
    };

    return (
      <HoverCard
        type={HoverCardType.plain}
        plainCardProps={plainCardProps}
        instantOpenOnClick={true}>

          <i className="ms-Icon ms-Icon--Info" aria-hidden="true" />
      </HoverCard>
    );
  }
}

const renderPlainCard = (item: any): JSX.Element => {
  return (
    <table className="ms-font-s" style={{ padding: 16 }}>
      <tbody>
        <tr>
          <td className="ms-fontWeight-semibold" style={{ paddingRight: 16 }}>Title:</td>
          <td colSpan={2}>{item.title}</td>
        </tr>

        <tr>
          <td className="ms-fontWeight-semibold" style={{ paddingRight: 16 }}>Type:</td>
          <td colSpan={2}>{item.type}</td>
        </tr>

        <tr>
          <td className="ms-fontWeight-semibold" style={{ paddingRight: 16 }}>Owner:</td>
          <td colSpan={2}>{item.owner}</td>
        </tr>

        <tr>
          <td className="ms-fontWeight-semibold" style={{ paddingRight: 16 }}>Status:</td>
          <td colSpan={2}>{item.status}</td>
        </tr>

        <tr>
          <td className="ms-fontWeight-semibold" style={{ paddingRight: 16 }}>Version:</td>
          <td colSpan={2}>{item.version}</td>
        </tr>

        <tr>
          <td className="ms-fontWeight-semibold" style={{ paddingRight: 16 }}>Modified On:</td>
          <td colSpan={2}>{item.modifiedOn}</td>
        </tr>

        <tr>
          <td className="ms-fontWeight-semibold" style={{ paddingRight: 16 }}>Modified By:</td>
          <td colSpan={2}>{item.modifiedBy}</td>
        </tr>
      </tbody>
    </table>
  );
}


export default DocumentList;