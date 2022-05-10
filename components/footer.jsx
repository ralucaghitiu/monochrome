export default function Footer() {
  return (
    <footer className="footer p-0 py-md-5 px-md-0">
      <section className="footer-content container d-none d-lg-flex justify-content-between align-items-center">
        <section className="footer-contact d-flex">
          <ul className="d-flex flex-column gap-3 me-xl-5">
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

        <nav className="footer-nav-main">
          <ul className="d-flex flex-column gap-3 me-xl-5">
            <li>
              <a href="" title="style&fit advice">
                style&fit advice
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

            <li>
              <a href="" title="exchanges&returns">
                exchanges&returns
              </a>
            </li>
          </ul>
        </nav>

        <nav className="footer-nav-secondary">
          <ul className="d-flex flex-column gap-3 me-xl-5">
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
        </nav>

        <section className="footer-connect">
          <div className="footer-primary d-flex flex-column gap-1">
            <p>sign up for our newsletter</p>
            <form
              action=""
              className="d-flex align-items-center flex-column gap-3"
            >
              <input className="footer-search" type="text" />
              <button className="button button-submit align-self-start">
                Submit
              </button>
            </form>
          </div>

          <section className="footer-social">
            <ul className="d-flex align-items-center gap-3">
              <li>
                <a href="" title="Youtube">
                  <i class="fa-brands fa-youtube"></i>
                </a>
              </li>

              <li>
                <a href="" title="Twitter">
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </li>

              <li>
                <a href="" title="Facebook">
                  <i class="fa-brands fa-facebook"></i>
                </a>
              </li>

              <li>
                <a href="" title="Instagram">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
          </section>
        </section>
      </section>

      <section className="footer-secondary">
        <div className="footer-secondary-inner container text-center d-bloc d-lg-none">
          <div className="footer-connect">
            <div className="newsletter">
              <h1>Let's connect</h1>
              <p>Be the first to receive exclusives offers</p>
              <form
                action=""
                className="d-flex flex-column alig-items-center justify-content-center gap3"
              >
                <input type="text" placeholder="Email" />
                <button type="submit">Submit</button>
              </form>
              <p>I agree with</p>
              <a
                className="text-decoration-underline"
                href=""
                title="Privacy policy"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
