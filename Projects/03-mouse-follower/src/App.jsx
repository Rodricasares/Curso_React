import { useState, useEffect } from "react";

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log("efect", { enabled });

    const handleMove = (event) => {
      const { clientX, clientY } = event;
      console.log("handleMove", { clientX, clientY });
      setPosition({ x: clientX, y: clientY });
    };

    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }
    return () => {
      window.removeEventListener("pointermove", handleMove);
    }; // limpiar subcripción al efecto para reiniciar
  }, [enabled]);

  return (<>
    <div
      style={{
        position: "absolute",
        backgroundColor: " #DB342E",
        borderRadius: "50%",
        border: "2px solid black",
        opacity: "0.8",
        pointerEvents: "none",
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px,${position.y}px)`,
      }}
    />

    <h3>Proyecto III</h3>
    <button onClick={() => setEnabled(!enabled)}>
      {enabled ? "Desactivar" : "Activar"} seguir puntero
    </button>
  </>)
  
};

function App() {
  return (
    <main>
      <FollowMouse />
    </main>
  );
}

export default App;
