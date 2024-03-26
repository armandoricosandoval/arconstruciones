
const Footer = () => {
  return (
    <footer className="w-full bg-black text-white mx-auto">
      <div className="container mx-auto flex flex-wrap items-top justify-between p-4 md:p-8">
        <div className="w-full md:w-1/4">
          <div className="text-h7 mb-4">
            <b>Servicios</b>
          </div>
          <ul>
            <li>
              <a href="/ofrece-lotes" className="footer-btn">
                Ofrece lotes
              </a>
            </li>
            <li>
              <a href="/calculadora-financiera" className="footer-btn">
                Calculadora financiera
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4">
          <div className="text-h7 mb-4">
            <b>Legal</b>
          </div>
          <ul>
            <li>
              <a href="/politicas-y-condiciones-pse" className="footer-btn">
                Políticas y condiciones PSE
              </a>
            </li>
            <li>
              <a href="/terminos-y-condiciones" className="footer-btn">
                Términos y condiciones
              </a>
            </li>
            <li>
              <a href="/denuncias" className="footer-btn">
                Denuncias
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4">
          <div className="text-h7 mb-4">
            <b>AR Construcciones</b>
          </div>
          <ul>
            <li>
              <a href="/quienes-somos" className="footer-btn">
                Quiénes somos
              </a>
            </li>
            <li>
              <a href="https://app.pill.com.co/grupoar" target="_blank" className="footer-btn">
                Trabaja con nosotros
              </a>
            </li>
            <li>
              <a href="/sea-nuestro-proveedor" className="footer-btn">
                Sé nuestro proveedor
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4">
          <div className="text-h7 mb-4">
            <b>Atención a clientes</b>
          </div>
          <ul>
            <li>
              <a href="/preguntas-frecuentes" className="footer-btn">
                Preguntas frecuentes
              </a>
            </li>
            <li>
              <a href="/contactanos" className="footer-btn">
                Contáctanos
              </a>
            </li>
          </ul>
          <div className="text-h7 mt-4">
            <b>Síguenos:</b>
          </div>
          <ul className="flex">
            <li className="mr-4">
              <a href="https://www.facebook.com/arconstruccionesoficial" target="_blank">
                <i className="fab fa-facebook" style={{ fontSize: 24 }}></i>
              </a>
            </li>
            <li className="mr-4">
              <a href="https://www.instagram.com/arconstrucciones/" target="_blank">
                <i className="fab fa-instagram" style={{ fontSize: 24 }}></i>
              </a>
            </li>
            <li className="mr-4">
              <a href="https://www.youtube.com/@arconstrucciones8986" target="_blank">
                <i className="fab fa-youtube" style={{ fontSize: 24 }}></i>
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@arconstruccionesoficial" target="_blank">
                <i className="fab fa-tiktok" style={{ fontSize: 24 }}></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer_rights_bar">
        <div className="container text-center py-4">
          <p className="text-body2">
            Todos los derechos reservados © 2024 AR CONSTRUCCIONES S.A.S.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
