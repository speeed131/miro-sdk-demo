import * as React from 'react';
import {createRoot} from 'react-dom/client';

import type { ShapeProps } from "@mirohq/websdk-types";


async function addSticky() {
  const stickyNote = await miro.board.createStickyNote({
    content: 'Hello, World!',
  });

  await miro.board.viewport.zoomTo(stickyNote);
}

async function addShape(shapeProps: ShapeProps) {
  const stickyNote = await miro.board.createShape(shapeProps);

  await miro.board.viewport.zoomTo(stickyNote);
}


function App() {
  React.useEffect(() => {
    // addSticky();
    addShape({
      width: 400,
      height: 300,
      x: 300,
      y: 300,
    });
    addShape({
      width: 400,
      height: 150,
      x: 800,
      y: 800,
    });
  }, []);

  React.useState()

  return (
    <div className="grid wrapper">
      <div className="cs1 ce12">
        <img src="/src/assets/congratulations.png" alt="" />
      </div>
      <div className="cs1 ce12">
        <h1>Congratulations!</h1>
        <p>You've just created your first Miro app!</p>
        <p>
          To explore more and build your own app, see the Miro Developer
          Platform documentation.
        </p>
      </div>
      <div className="cs1 ce12">
        <a
          className="button button-primary"
          target="_blank"
          href="https://developers.miro.com"
        >
          Read the documentation
        </a>
      </div>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
