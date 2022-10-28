import QRCode from "qrcode";
import { useEffect, useRef, useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const canvasRef = useRef();

  useEffect(() => {
    QRCode.toCanvas(
      canvasRef.current,
      // QR code doesn't work with an empty string
      // so we are using a blank space as a fallback
      text || " ",
      (error) => error && console.error(error)
    );
  }, [text]);

  return (
    <div>
      <input
        value={text} className='bg-red-200'
        onChange={(e) => setText(e.target.value)}
      />
      
      <br />

      <canvas ref={canvasRef} />
    </div>
  );
}