<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Colombia Travel Forum</title>
  <link rel="stylesheet" href="styles.css" />
  <script defer src="script.js"></script>
</head>

<body>
  <!-- ======= HEADER ======= -->
  <header class="navbar">
    <div class="logo">🌴 Colombia Travel Forum</div>
    <nav class="nav-links">
      <a href="#inicio">Inicio</a>
      <a href="#destinos">Destinos</a>
      <a href="#historias">Historias</a>
      <a href="#contacto">Contacto</a>
      <button id="theme-toggle" title="Modo oscuro">🌓</button>
    </nav>
  </header>

  <!-- ======= HERO ======= -->
  <section id="inicio" class="hero">
    <div class="hero-content">
      <h1>Explora Colombia</h1>
      <p>Descubre la magia de los paisajes, culturas y sabores de nuestra tierra.  
      Comparte tus experiencias y conecta con otros viajeros.</p>
      <a href="#destinos" class="btn">Ver destinos</a>
    </div>
  </section>

  <!-- ======= GALERÍA ======= -->
  <section id="destinos" class="gallery">
    <h2>Destinos Destacados</h2>
    <div class="gallery-grid">
      <div class="card">
        <img src="https://source.unsplash.com/800x600/?cartagena" alt="Cartagena" />
        <h3>Cartagena</h3>
        <p>Historia, playas y arquitectura colonial.</p>
      </div>
      <div class="card">
        <img src="https://source.unsplash.com/800x600/?medellin" alt="Medellín" />
        <h3>Medellín</h3>
        <p>La ciudad de la eterna primavera.</p>
      </div>
      <div class="card">
        <img src="https://source.unsplash.com/800x600/?amazonas,colombia" alt="Amazonas" />
        <h3>Amazonas</h3>
        <p>Selva, naturaleza y biodiversidad única.</p>
      </div>
      <div class="card">
        <img src="https://source.unsplash.com/800x600/?cocora" alt="Valle del Cocora" />
        <h3>Valle del Cocora</h3>
        <p>Las palmas más altas del mundo.</p>
      </div>
    </div>
  </section>

  <!-- ======= HISTORIAS ======= -->
  <section id="historias" class="stories">
    <h2>Historias de Viajeros</h2>
    <div class="story-list">
      <article class="story">
        <h3>Mi viaje por el Eje Cafetero</h3>
        <p>"Nunca imaginé ver tantas montañas verdes y probar un café tan delicioso. La amabilidad de la gente fue lo mejor del viaje."</p>
        <span>- Laura Gómez</span>
      </article>
      <article class="story">
        <h3>Aventura en el Parque Tayrona</h3>
        <p>"Despertar frente al mar y caminar entre palmas gigantes fue una experiencia inolvidable. Volveré pronto."</p>
        <span>- Carlos Pérez</span>
      </article>
    </div>
  </section>

  <!-- ======= CONTACTO ======= -->
  <section id="contacto" class="contact">
    <h2>Comparte tu experiencia</h2>
    <form id="formulario">
      <input type="text" placeholder="Tu nombre" required />
      <textarea placeholder="Cuéntanos tu historia..." required></textarea>
      <button type="submit" class="btn">Enviar historia</button>
    </form>
    <p id="mensaje"></p>
  </section>

  <!-- ======= FOOTER ======= -->
  <footer class="footer">
    <p>© 2025 Colombia Travel Forum | Creado con 💚 por la comunidad</p>
    <div class="social">
      <a href="#">🌐</a>
      <a href="#">📸</a>
      <a href="#">🐦</a>
    </div>
  </footer>
</body>
</html>
