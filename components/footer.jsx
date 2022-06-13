export default function Footer() {
  return (
    <footer className="footer">
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

          <p className="terms&conditions d-flex flex-column align-items-center text-decoration-underline d-lg-none">
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
            <h1 className="d-block d-lg-none">Let's connect</h1>
            <p className="d-block d-lg-none">
              Be the first to receive exclusives offers
            </p>
          </section>

          <form action="" className="footer-newsletter">
            <label htmlFor="email" className="d-none d-lg-block mb-2 mt-3">
              sign up for newsletter
            </label>
            <input
              type="text"
              placeholder="Email"
              id="email"
              name="email"
              required
            />
            <button type="submit" className="button button-submit">
              Submit
            </button>
            <p className="d-block d-lg-none">
              I agree with{' '}
              <a
                href=""
                title="Privacy Policy"
                className="text-decoration-underline"
              >
                Privacy Policy
              </a>
              {''}
              and I want to receive emails from Monochorme
            </p>
          </form>

          <section className="footer-social">
            <h1 className="d-block d-lg-none">We are highly likeable</h1>

            <ul className="mt-3 mt-lg-0">
              <li>
                <a href="" title="Youtube">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>

              <li>
                <a href="" title="Twitter">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>

              <li>
                <a href="" title="Facebook">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>

              <li>
                <a href="" title="Instagram">
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
