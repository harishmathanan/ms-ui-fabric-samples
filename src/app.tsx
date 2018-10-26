import * as React from 'react';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { Route, Link } from 'react-router-dom';

import ContactCard from './components/contactCard';
import DocumentList from './components/documentList';

const App = (): JSX.Element => {
  initializeIcons();

  return (
    <Fabric>
      <div>
        <h1 className="ms-font-xxl">
          <Link to="/">MS UI Fabric</Link>
        </h1>
      </div>

      <div>
        <Link to="/contact-card">Contact Card</Link>
        &nbsp; | &nbsp;
        <Link to="/document-list">Document List</Link>
      </div>

      <div className="ms-font-m" style={{ marginTop: 32 }}>
        <Route
          path="/"
          exact={true}
          render={() => <h3>Click on a sample to view.</h3>}
        />

        <Route path="/contact-card" component={ContactCard} />
        <Route path="/document-list" component={DocumentList} />
      </div>
    </Fabric>
  );
};

export default App;
