/*
*1. imagen
*2 una parte con texto donde va a ir su nombre
*3.2 links, uno github y uno a likedin 
*4. un
*/
export default function Card({img}) {
  // Estilos para el contenedor principal
  const containerStyle = {
    width: "350px",
    margin: "2rem auto",
    textAlign: "center",
    border: "none",
    borderRadius: "12px",
    padding: "1.5rem",
    backgroundColor: "#ffffff",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Roboto', sans-serif",
  };

  // Estilo para la imagen del perfil
  const imageStyle = {
    borderRadius: "50%",
    width: "300px",
    height: "300px",
    objectFit: "cover",
    marginBottom: "1rem",
    border: "3px solid #e63946",
  };

  // Estilo para el texto del nombre
  const nameStyle = {
    fontSize: "1.8rem",
    color: "#a4161a",
    margin: "0.5rem 0",
    fontWeight: "600",
  };

  // Estilo para los enlaces
  const linkContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "1.5rem",
    marginTop: "1rem",
  };

  const linkStyle = {
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "500",
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    color: "#ffffff",
    backgroundColor: "#d62828",
    transition: "background-color 0.3s ease",
  };

  const linkHoverStyle = {
    backgroundColor: "#a4161a",
  };

  // Componente renderizado
  return (
    <div style={containerStyle}>
      {/* Imagen circular del perfil */}
      <img
        src={img}
        alt="cangrejo"
        style={imageStyle}
      />
      {/* Texto del nombre */}
      <h1 style={nameStyle}>Yoandry Caballero</h1>
      {/* Contenedor para enlaces */}
      <div style={linkContainerStyle}>
        <a
          href="https://github.com/yoandryc"
          style={linkStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = linkHoverStyle.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = " #f77f00")}
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/yoandrycaballerocast/"
          style={linkStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = linkHoverStyle.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#f77f00")}
        >
          LinkedIn
        </a>
      </div>
      {/* 🎵 Reproductor de música */}
      <audio src="song.mp3" autoPlay loop controls style={{ marginTop: "1.5rem", width: "100%" }} />
    </div>
  );
}