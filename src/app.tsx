import * as React from 'react';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';

import ContactCard from './components/contactCard';

const App = (): JSX.Element => {
  initializeIcons();

  return (
    <Fabric>
      <div>
        <h1 className="ms-font-xxl">MS UI Fabric</h1>
      </div>

      <div style={{ marginTop: 32 }}>
        <ContactCard />
      </div>
    </Fabric>
  );
};

export default App;
