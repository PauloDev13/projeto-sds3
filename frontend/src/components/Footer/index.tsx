const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
        <p className="text-light">
          App desenvolvido por{' '}
          <a
            href="https://github.com/PauloDev13"
            target="_blank"
            rel="noreferrer"
          >
            Paulo Roberto
          </a>
        </p>
        <p className="text-light">
          <small>
            <strong>Semana Spring React</strong>
            <br />
            Evento promovido pela escola DevSuperior:{' '}
            <a
              href="https://instagram.com/prmorais_13"
              target="_blank"
              rel="noreferrer"
            >
              @prmorais_13
            </a>
          </small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
