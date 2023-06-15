// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

// import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';
import Navigation from "./navigation/navigation";
import '../styles.css';

export function App() {
    let nav;
    return (
    <div className="nav">
      {/*<NxWelcome title="roboCats" />*/}

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}

      {/*<div role="navigation">*/}
        <Navigation />
      {/*</div>*/}

      {/* END: routes */}
    </div>
  );
}

export default App;
