import { createContext, useCallback, useRef } from "react";

export const EditorJsContext = createContext({});
export function EditorJsStorage({ children }) {
  const editorJS = useRef(null);
  const handleInitialize = useCallback((instance) => {
    editorJS.current = instance;
  }, []);

  const handleSave = useCallback(async () => {
    const savedData = await editorJS.current.save();
    console.log(savedData);
  }, []);

  const handleClear = useCallback(async () => {
    await editorJS.current.clear();
  }, []);
  value = { handleInitialize, handleSave, handleClear };
  return (
    <EditorJsContext.Provider value={value}>
      {children}
    </EditorJsContext.Provider>
  );
}
