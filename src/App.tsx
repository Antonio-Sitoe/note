import { useCallback, useContext, useRef, useState } from "react";
import "./App.scss";
import { EDITOR_JS_TOOLS } from "./services/EditorJs";

import { createReactEditorJS } from "react-editor-js";
const ReactEditorJS = createReactEditorJS();
console.log(
  "[App.tsx]",
  `Hello world from Electron ${process.versions.electron}!`
);
const defaultValue = {
  time: 1636709084205,
  blocks: [
    {
      id: "nHmgVVvDk2",
      type: "paragraph",
      data: {
        text: "Let's write an awesome story! ✨",
      },
    },
  ],
  version: "2.22.2",
};
function App() {
  const editorJS = useRef(null);
  const handleInitialize = useCallback((instance) => {
    editorJS.current = instance;
  }, []);

  return (
    <>
      <ReactEditorJS
        defaultValue={defaultValue}
        onInitialize={handleInitialize}
        tools={EDITOR_JS_TOOLS}

        // readOnly={true}
      />
    </>
  );
}

export default App;
