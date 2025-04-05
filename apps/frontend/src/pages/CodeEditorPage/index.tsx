import { H1 } from '@lib/ui/Typography';
import { useEffect, useState } from 'react';

function CodeEditorPage() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("http://localhost:8080/")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
  
  return (
    <>
      <H1>{message ?? "Loading..."}</H1>
    </>
  );
}

export default CodeEditorPage;
