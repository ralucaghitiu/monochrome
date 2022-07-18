export default function Footer() {
  return (
    <footer className="footer pt-lg-2">
      <div className="footer-inner container">
        <section className="footer-contact d-none d-lg-block">
          <ul className="mt-3">
            <li>
              <a href="tel:+44 (0)10 2345 6789" title="call us">
                call us <br />
                +44 (0)10 2345 6789
              </a>
            </li>

            <li>
              <a href="mailto:" title="email customer care">
                email customer care
              </a>
            </li>

            <li>
              <a href="" title="see mobile version">
                see mobile version
              </a>
            </li>
          </ul>
        </section>

        <nav className="footer-nav">
          <div className="footer-nav-title d-block d-lg-none">
            <h1>How can we help?</h1>
          </div>

          <div className="footer-nav-list">
            <ul className="mt-3">
              <li className="d-none d-lg-block">
                <a href="" title="style&fit advice">
                  style&fit advice
                </a>
              </li>

              <li className="d-lg-none">
                <a href="" title="style & fit">
                  style & fit
                </a>
              </li>

              <li>
                <a href="" title="faqs">
                  faqs
                </a>
              </li>

              <li>
                <a href="" title="delivery">
                  delivery
                </a>
              </li>

              <li className="d-none d-lg-block">
                <a href="" title="exchanges&returns">
                  exchanges & returns
                </a>
              </li>

              <li className="d-block d-lg-none">
                <a href="" title="exchanges&returns">
                  returns
                </a>
              </li>
            </ul>

            <ul className="mt-3">
              <li>
                <a href="" title="about us">
                  about us
                </a>
              </li>

              <li>
                <a href="" title="careers">
                  careers
                </a>
              </li>

              <li>
                <a href="" title="affiliates">
                  affiliates
                </a>
              </li>

              <li>
                <a href="" title="advertising">
                  advertising
                </a>
              </li>
            </ul>
          </div>

          <p className="terms&conditions mt-4 mb-4 d-flex flex-column align-items-center text-decoration-underline d-lg-none">
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              title="terms&conditions"
            >
              terms & conditions
            </a>

            <a
              href="http://
            "
              target="_blank"
              rel="noopener noreferrer"
              title="privacy&cookies"
            >
              privacy & cookies
            </a>
          </p>
        </nav>

        <section className="footer-connect">
          <section className="footer-newsletter">
            <h1 className="d-block d-lg-none my-3">Let s connect</h1>
            <label htmlFor="email" className="d-lg-none mb-2">
              Be the first to receive exclusives offers
            </label>
            <label htmlFor="email" className="d-none d-lg-block">
              sign up for newsletter
            </label>
            <form
              action=""
              className="d-flex flex-column align-items-center gap-4 gap-lg-2"
            >
              <input
                className="d-lg-none"
                type="email"
                placeholder="Email"
                id="email"
                name="email"
              />
              <input
                className="d-none d-lg-block"
                type="email"
                placeholder=""
                id="email"
                name="email"
              />
              <button
                className="button-submit"
                type="submit"
                title="submit"
                name="submit"
              >
                Submit
              </button>
            </form>

            <p className="d-lg-none mt-4 mb-2">
              I agree with &nbsp;
              <a
                className="text-decoration-underline"
                href="https://"
                target="_blank"
                rel="noopener noreferrer"
                title="Privacy Policy"
              >
                Privacy policy
              </a>
              &nbsp; and I want to receive emails from Monochrome
            </p>
          </section>

          <section className="footer-social">
            <h1 className="d-block d-lg-none">We are highly likeable</h1>

            <ul className="mb-3 my-lg-4">
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Youtube"
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Twitter"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://istagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
          </section>
        </section>
      </div>
    </footer>
  );
}
