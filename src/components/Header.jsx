import "../styles/Header.css";

export default function Header({ children, onQuit }) {
  return (
    <header className="header">
      <h1>
        <button onClick={onQuit} className="logo-button">
          
          <span>
            <span className="poke">Memory</span>
            <span className="memo">Grid</span>
          </span>
        </button>
      </h1>
      {children}
    </header>
  );
}
