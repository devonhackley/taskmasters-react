import React from 'react';
import Tasks from './tasks';
import '../scss/core.scss';

function App() {
  return (
    <>
      <header>TaskMaster</header>
      <main>
        <section>
         <p>This is a list of tasks. Click each to toggle it's status</p>
        </section>
        <Tasks />
      </main>
    </>
  );
}

export default App;