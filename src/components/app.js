import React from 'react';
import Tasks from './tasks';
import '../scss/core.scss';

function App() {
  return (
    <>
      <header>TaskMaster</header>
      <main>
        <Tasks />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;