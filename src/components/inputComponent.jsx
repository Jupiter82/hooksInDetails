import React, { useState } from "react";

export default function inputComponent() {
  const [text, setText] = useState();
  return <input value={text} onChange={(e) => setText(e.target.value)} />;
}
