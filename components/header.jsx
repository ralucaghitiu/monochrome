export default function Header() {
  return (
    <header className="header">
      <section className="header-secondary container d-flex align-items-center px-3 px-md-5">
        <h1 className="title d-block d-md-none">Monochrome</h1>
        <div className="header-connect d-none d-md-block mt-4 px-0 px-lg-5">
          <ul className="d-flex align-items-center gap-3">
            <li>
              <a
                href=""
                title="Youtube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-youtube"></i>
              </a>
            </li>

            <li>
              <a
                href=""
                title="Twitter"
                target="_blank"
                rel="noopener noreferre"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>

            <li>
              <a
                href=""
                title="Facebook"
                target="_blank"
                rel="noopener noreferre"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>

            <li>
              <a
                href=""
                title="Instagram"
                target="_blank"
                rel="noopener noreferre"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>

            <li>
              <a href="tel:+44 (0)10 2345 6789" title="Call us">
                CALL US +44 (0)10 2345 6789
              </a>
            </li>
          </ul>
        </div>

        <section className="header-controls px-lg-5 d-flex gap-3 mt-0 mt-md-4">
          <ul className="d-flex justify-content-between">
            <li className="header-search">
              <form className="d-none d-md-block" action="/">
                <button type="submit" title="Search">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <input type="text" placeholder="search"></input>
              </form>
            </li>

            <li>
              <a href="" title="user-account">
                <i class="fa-solid fa-user"></i>
              </a>
            </li>

            <li>
              <a href="" title="user-wishlist">
                <i class="fa-solid fa-heart"></i>
              </a>
            </li>

            <li className="pe-0 pe-xl-5">
              <a href="" title="shopping bag">
                <i class="fa-solid fa-bag-shopping"></i>
              </a>
            </li>
          </ul>
        </section>
      </section>

      <section className="header-primary">
        <div className="header-menu container d-flex d-lg-none justify-content-between align-items-center px-4 py-4">
          <ul className="d-flex">
            <li>
              <a href="" title="Menu">
                <i class="fa-solid fa-bars"></i>
              </a>
            </li>
          </ul>

          <form action="">
            <i class="header-search fa-solid fa-magnifying-glass"></i>
            <input className="header-search" type="text" placeholder="search" />
          </form>
        </div>

        <div className="header-bottom d-none d-md-block">
          <nav className="container">
            <ul className="d-flex justify-content-between align-items-center">
              <li>
                <a href="" title="New arrivals">
                  New arrivals
                </a>
              </li>

              <li>
                <a href="" title="Brands">
                  Brands
                </a>
              </li>

              <li>
                <a href="" title="Men's">
                  Men's
                </a>
              </li>

              <li>
                <a href="" title="Women's">
                  Women's
                </a>
              </li>

              <li>
                <a href="" title="Accessories">
                  Accessories
                </a>
              </li>

              <li>
                <a href="" title="Lookbook">
                  Lookbook
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      <section className="banner-mobile d-lg-none">
        <div>
          <img src="/images/banners/banner-mobile.png" alt="Banner" />
          <button className="new-in btn">New in</button>
        </div>
      </section>
    </header>
  );
}
