import { useContext, useState } from "react";
import "./App.scss";
import EditorJsContext, { EditorJsStorage } from "./Contexts/EditorJsContext";
import { EDITOR_JS_TOOLS } from "./services/EditorJs";

console.log(
  "[App.tsx]",
  `Hello world from Electron ${process.versions.electron}!`
);

function App() {
  const { handleInitialize } = useContext(EditorJsContext);

  return;
  <EditorJsStorage>
    <ReactEditorJS
      tools={EDITOR_JS_TOOLS}
      onInitialize={handleInitialize}
      // defaultValue={}
      // readOnly={true}
    />
  </EditorJsStorage>;
}

export default App;
