export default function Header() {
  return (
    <header className="header">
      <section className="header-secondary">
        <section className="header-secondary-inner container">
          <div className="header-connect d-none d-lg-block mt-3">
            <ul>
              <li>
                <a href="" title="YouTube">
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

              <li>
                <a href="tel:+44 (0)10 2345 6789" title="Call us">
                  CALL US +44 (0)10 2345 6789
                </a>
              </li>
            </ul>
          </div>

          <div className="title d-block d-lg-none mt-4 mb-3">
            <h1>Monochrome</h1>
          </div>

          <div className="header-site-controls mt-3">
            <ul>
              <li>
                <form className="d-none d-lg-block" action="/">
                  <button type="submit" title="Search" className="searchsubmit">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                  <input
                    type="text"
                    placeholder="search"
                    title="search"
                    id="search"
                  ></input>
                </form>
              </li>

              <li>
                <a href="" title="User">
                  <i className="fa-solid fa-user"></i>
                </a>
              </li>

              <li>
                <a href="" title="Wishlist">
                  <i className="fa-solid fa-heart"></i>
                </a>
              </li>

              <li>
                <a href="" title="shopping bag">
                  <i className="fa-solid fa-bag-shopping"></i>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </section>

      <section className="header-primary">
        <div className="header-primary-menu container">
          <section className="header-primary-mobile d-lg-none">
            <div className="menu-bars">
              <a href="" title="Menu">
                <i className="fa-solid fa-bars"></i>
              </a>
            </div>

            <form action="" className="header-primary-search">
              <input
                type="text"
                name="header-search"
                id="header-search"
                title="header-search"
                placeholder="search"
              />
              <button type="submit" className="header-search">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </section>

          <nav className="nav-primary container d-none d-lg-block">
            <ul className="d-flex justify-content-between">
              <li>
                <a href="" title="New Arrivals">
                  New Arrivals
                </a>
              </li>

              <li>
                <a href="" title="Brands">
                  Brands
                </a>
              </li>

              <li>
                <a href="" title="Men's">
                  Mens
                </a>
              </li>

              <li>
                <a href="" title="Women's">
                  Womens
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
    </header>
  );
}
