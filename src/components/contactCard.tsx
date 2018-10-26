import * as React from 'react';
import { Persona, PersonaSize } from 'office-ui-fabric-react/lib/Persona';
import {
  HoverCard,
  HoverCardType,
  IPlainCardProps
} from 'office-ui-fabric-react/lib/HoverCard';

import users from '../mocks/users';

const ContactCard = (): JSX.Element => {
  const user = users[0];
  const plainCardProps: IPlainCardProps = {
    onRenderPlainCard: renderPlainCard,
    renderData: user
  };

  return (
    <div className="ms-font-m">
      <HoverCard
        type={HoverCardType.plain}
        plainCardProps={plainCardProps}
        instantOpenOnClick={true}>

        <Persona
          size={PersonaSize.size72}
          imageUrl={user.photoUrl}
          text={user.name}
          secondaryText={user.title}
          tertiaryText={user.department}
        />
      </HoverCard>
    </div>
  );


};

const renderPlainCard = (item: any): JSX.Element => {
  return (
    <div className="ms-font-s" style={{ padding: 16 }}>
      <h4>Contact:</h4>
      <table>
        <tbody>
          <tr>
            <td><i className="ms-Icon ms-Icon--Mail" aria-hidden="true" /></td>
            <td>{item.email}</td>
          </tr>

          <tr>
            <td><i className="ms-Icon ms-Icon--Phone" aria-hidden="true" /></td>
            <td>{item.phone} <br/> {item.mobile}</td>
          </tr>

          <tr>
            <td><i className="ms-Icon ms-Icon--POI" aria-hidden="true" /></td>
            <td>{item.office}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ContactCard;
