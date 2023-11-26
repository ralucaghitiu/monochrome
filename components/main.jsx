import HomeMarketing from './home-marketing/_home-marketing';

export default function Main() {
  return (
    <main className="content">
      <section className="mobile-banner d-lg-none">
        <div className="banner-inner container">
          <button className="button button-new-in button-uppercase">
            new in
          </button>
        </div>
      </section>

      <section className="home-catalog-preview container demo-flex">
        <header>
          <h1 className="d-block d-lg-none">Spring Collection</h1>
          <h1 className="d-none d-lg-block">New Stuff</h1>
        </header>

        <section className="product-tiles gap-2">
          <article className="product-tile d-none d-lg-block">
            <header className="product-tile-header">
              <div className="product-tile-image">
                <img src="/images/products/NS01.png" alt="product01" />
              </div>

              <div className="product-tile-badge">
                <a
                  className="badge badge-wishlist"
                  href=""
                  title="user-wishlist"
                >
                  <i className="fa-solid fa-heart"></i>
                </a>
              </div>

              <div className="product-tile-headings">
                <h1>
                  <a href="" title="Monochrome">
                    Monochrome
                  </a>
                </h1>
              </div>
            </header>

            <section className="product-tile-info">
              <div className="product-tile-pricing">
                <span className="product-price-regular">$425</span>
              </div>
            </section>
          </article>

          <article className="product-tile d-none d-lg-block">
            <header className="product-tile-header">
              <div className="product-tile-image">
                <img src="/images/products/NS02.png" alt="product02" />
              </div>

              <div className="product-tile-badge">
                <a
                  className="badge badge-wishlist"
                  href=""
                  title="user-wishlist"
                >
                  <i className="fa-solid fa-heart"></i>
                </a>
              </div>

              <div className="product-tile-headings">
                <h1>
                  <a href="" title="Monochrome">
                    Monochrome
                  </a>
                </h1>
              </div>
            </header>

            <section className="product-tile-info">
              <div className="product-tile-pricing">
                <span className="product-price-regular">$425</span>
              </div>
            </section>
          </article>

          <article className="product-tile d-none d-lg-block">
            <header className="product-tile-header">
              <div className="product-tile-image">
                <img src="/images/products/NS03.png" alt="product01" />
              </div>

              <div className="product-tile-badge">
                <a
                  className="badge badge-wishlist"
                  href=""
                  title="user-wishlist"
                >
                  <i className="fa-solid fa-heart"></i>
                </a>
              </div>

              <div className="product-tile-headings">
                <h1>
                  <a href="" title="Monochrome">
                    Monochrome
                  </a>
                </h1>
              </div>
            </header>

            <section className="product-tile-info">
              <div className="product-tile-pricing">
                <span className="product-price-regular">$425</span>
              </div>
            </section>
          </article>

          <article className="product-tile d-none d-lg-block">
            <header className="product-tile-header">
              <div className="product-tile-image">
                <img src="/images/products/NS04.png" alt="product01" />
              </div>

              <div className="product-tile-badge">
                <a
                  className="badge badge-wishlist"
                  href=""
                  title="user-wishlist"
                >
                  <i className="fa-solid fa-heart"></i>
                </a>
              </div>

              <div className="product-tile-headings">
                <h1>
                  <a href="" title="Monochrome">
                    Monochrome
                  </a>
                </h1>
              </div>
            </header>

            <section className="product-tile-info">
              <div className="product-tile-pricing">
                <span className="product-price-regular">$425</span>
              </div>
            </section>
          </article>

          <article className="product-tile d-block d-lg-none">
            <header className="product-tile-header">
              <div className="product-tile-image">
                <img src="/images/products/ML02.png" alt="product01" />
              </div>

              <div className="product-tile-badge">
                <a
                  className="badge badge-wishlist"
                  href=""
                  title="user-wishlist"
                >
                  <i className="fa-solid fa-heart"></i>
                </a>
              </div>

              <div className="product-tile-headings">
                <h1>
                  <a href="" title="Monochrome">
                    Monochrome
                  </a>
                </h1>
              </div>
            </header>

            <section className="product-tile-info">
              <div className="product-tile-pricing">
                <span className="product-price-regular">$425</span>
              </div>
            </section>
          </article>

          <article className="product-tile d-block d-lg-none">
            <header className="product-tile-header">
              <div className="product-tile-image">
                <img src="/images/products/NS02.png" alt="product01" />
              </div>

              <div className="product-tile-badge">
                <a
                  className="badge badge-wishlist"
                  href=""
                  title="user-wishlist"
                >
                  <i className="fa-solid fa-heart"></i>
                </a>
              </div>

              <div className="product-tile-headings">
                <h1>
                  <a href="" title="Monochrome">
                    Monochrome
                  </a>
                </h1>
              </div>
            </header>

            <section className="product-tile-info">
              <div className="product-tile-pricing">
                <span className="product-price-regular">$425</span>
              </div>
            </section>
          </article>
        </section>
      </section>

      <section className="home-catalog-preview container demo-flex">
        <header>
          <h1 className="d-none d-lg-block">
            <span>Most loved</span>
          </h1>
          <h1 className="d-block d-lg-none">Best Reviewed</h1>
        </header>

        <section className="product-tiles gap-2">
          <article className="product-tile d-none d-lg-block">
            <header className="product-tile-header">
              <div className="product-tile-image">
                <img src="/images/products/ML01.png" alt="product01" />
              </div>

              <div className="product-tile-badge">
                <a
                  className="badge badge-wishlist"
                  href=""
                  title="user-wishlist"
                >
                  <i className="fa-solid fa-heart"></i>
                </a>
              </div>

              <div className="product-tile-headings">
                <h1>
                  <a href="" title="Monochrome">
                    Monochrome
                  </a>
                </h1>
              </div>
            </header>

            <section className="product-tile-info">
              <div className="product-tile-pricing">
                <span className="product-price-regular">$425</span>
              </div>
            </section>
          </article>

          <article className="product-tile d-none d-lg-block">
            <header className="product-tile-header">
              <div className="product-tile-image">
                <img src="/images/products/ML02.png" alt="product01" />
              </div>

              <div className="product-tile-badge">
                <a
                  className="badge badge-wishlist"
                  href=""
                  title="user-wishlist"
                >
                  <i className="fa-solid fa-heart"></i>
                </a>
              </div>

              <div className="product-tile-headings">
                <h1>
                  <a href="" title="Monochrome">
                    Monochrome
                  </a>
                </h1>
              </div>
            </header>

            <section className="product-tile-info">
              <div className="product-tile-pricing">
                <span className="product-price-regular">$425</span>
              </div>
            </section>
          </article>
          <article className="product-tile d-none d-lg-block">
            <header className="product-tile-header">
              <div className="product-tile-image">
                <img src="/images/products/ML03.png" alt="product01" />
              </div>

              <div className="product-tile-badge">
                <a
                  className="badge badge-wishlist"
                  href=""
                  title="user-wishlist"
                >
                  <i className="fa-solid fa-heart"></i>
                </a>
              </div>

              <div className="product-tile-headings">
                <h1>
                  <a href="" title="Monochrome">
                    Monochrome
                  </a>
                </h1>
              </div>
            </header>

            <section className="product-tile-info">
              <div className="product-tile-pricing">
                <span className="product-price-regular">$425</span>
              </div>
            </section>
          </article>
          <article className="product-tile d-none d-lg-block">
            <header className="product-tile-header">
              <div className="product-tile-image">
                <img src="/images/products/ML04.png" alt="product01" />
              </div>

              <div className="product-tile-badge">
                <a
                  className="badge badge-wishlist"
                  href=""
                  title="user-wishlist"
                >
                  <i className="fa-solid fa-heart"></i>
                </a>
              </div>

              <div className="product-tile-headings">
                <h1>
                  <a href="" title="Monochrome">
                    Monochrome
                  </a>
                </h1>
              </div>
            </header>

            <section className="product-tile-info">
              <div className="product-tile-pricing">
                <span className="product-price-regular">$425</span>
              </div>
            </section>
          </article>

          <article className="product-tile d-block d-lg-none">
            <header className="product-tile-header">
              <div className="product-tile-image">
                <img src="/images/products/ML02.png" alt="product01" />
              </div>

              <div className="product-tile-badge">
                <a
                  className="badge badge-wishlist"
                  href=""
                  title="user-wishlist"
                >
                  <i className="fa-solid fa-heart"></i>
                </a>
              </div>

              <div className="product-tile-headings">
                <h1>
                  <a href="" title="Monochrome">
                    Monochrome
                  </a>
                </h1>
              </div>
            </header>

            <section className="product-tile-info">
              <div className="product-tile-pricing">
                <span className="product-price-regular">$425</span>
              </div>
            </section>
          </article>
          <article className="product-tile d-block d-lg-none">
            <header className="product-tile-header">
              <div className="product-tile-image">
                <img src="/images/products/NS02.png" alt="product01" />
              </div>

              <div className="product-tile-badge">
                <a
                  className="badge badge-wishlist"
                  href=""
                  title="user-wishlist"
                >
                  <i className="fa-solid fa-heart"></i>
                </a>
              </div>

              <div className="product-tile-headings">
                <h1>
                  <a href="" title="Monochrome">
                    Monochrome
                  </a>
                </h1>
              </div>
            </header>

            <section className="product-tile-info">
              <div className="product-tile-pricing">
                <span className="product-price-regular">$425</span>
              </div>
            </section>
          </article>
        </section>
      </section>

      <HomeMarketing></HomeMarketing>

      <section className="home-catalog-preview container demo-flex">
        <header>
          <h1 className="section-title">
            <span>Men s</span>
          </h1>
        </header>

        <section className="product-tiles gap-2">
          <article className="product-tile d-none d-lg-block">
            <header className="product-tile-header">
              <div className="product-tile-image">
                <img src="/images/products/MNS01.png" alt="product01" />
              </div>

              <div className="product-tile-badge">
                <a
                  className="badge badge-wishlist"
                  href=""
                  title="user-wishlist"
                >
                  <i className="fa-solid fa-heart"></i>
                </a>
              </div>

              <div className="product-tile-headings">
                <h1>
                  <a href="" title="Monochrome">
                    Monochrome
                  </a>
                </h1>
              </div>
            </header>

            <section className="product-tile-info">
              <div className="product-tile-pricing">
                <span className="product-price-regular">$425</span>
              </div>
            </section>
          </article>

          <article className="product-tile d-none d-lg-block">
            <header className="product-tile-header">
              <div className="product-tile-image">
                <img src="/images/products/MNS02.png" alt="product02" />
              </div>

              <div className="product-tile-badge">
                <a
                  className="badge badge-wishlist"
                  href=""
                  title="user-wishlist"
                >
                  <i className="fa-solid fa-heart"></i>
                </a>
              </div>

              <div className="product-tile-headings">
                <h1>
                  <a href="" title="Monochrome">
                    Monochrome
                  </a>
                </h1>
              </div>
            </header>

            <section className="product-tile-info">
              <div className="product-tile-pricing">
                <span className="product-price-regular">$425</span>
              </div>
            </section>
          </article>

          <article className="product-tile d-none d-lg-block">
            <header className="product-tile-header">
              <div className="product-tile-image">
                <img src="/images/products/MNS01.png" alt="product01" />
              </div>

              <div className="product-tile-badge">
                <a
                  className="badge badge-wishlist"
                  href=""
                  title="user-wishlist"
                >
                  <i className="fa-solid fa-heart"></i>
                </a>
              </div>

              <div className="product-tile-headings">
                <h1>
                  <a href="" title="Monochrome">
                    Monochrome
                  </a>
                </h1>
              </div>
            </header>

            <section className="product-tile-info">
              <div className="product-tile-pricing">
                <span className="product-price-regular">$425</span>
              </div>
            </section>
          </article>

          <article className="product-tile d-none d-lg-block">
            <header className="product-tile-header">
              <div className="product-tile-image">
                <img src="/images/products/MNS02.png" alt="product02" />
              </div>

              <div className="product-tile-badge">
                <a
                  className="badge badge-wishlist"
                  href=""
                  title="user-wishlist"
                >
                  <i className="fa-solid fa-heart"></i>
                </a>
              </div>

              <div className="product-tile-headings">
                <h1>
                  <a href="" title="Monochrome">
                    Monochrome
                  </a>
                </h1>
              </div>
            </header>

            <section className="product-tile-info">
              <div className="product-tile-pricing">
                <span className="product-price-regular">$425</span>
              </div>
            </section>
          </article>

          <article className="product-tile d-block d-lg-none">
            <header className="product-tile-header">
              <div className="product-tile-image">
                <img src="/images/products/ML02.png" alt="product02" />
              </div>

              <div className="product-tile-badge">
                <a
                  className="badge badge-wishlist"
                  href=""
                  title="user-wishlist"
                >
                  <i className="fa-solid fa-heart"></i>
                </a>
              </div>

              <div className="product-tile-headings">
                <h1>
                  <a href="" title="Monochrome">
                    Monochrome
                  </a>
                </h1>
              </div>
            </header>

            <section className="product-tile-info">
              <div className="product-tile-pricing">
                <span className="product-price-regular">$425</span>
              </div>
            </section>
          </article>

          <article className="product-tile d-block d-lg-none">
            <header className="product-tile-header">
              <div className="product-tile-image">
                <img src="/images/products/NS02.png" alt="product02" />
              </div>

              <div className="product-tile-badge">
                <a
                  className="badge badge-wishlist"
                  href=""
                  title="user-wishlist"
                >
                  <i className="fa-solid fa-heart"></i>
                </a>
              </div>

              <div className="product-tile-headings">
                <h1>
                  <a href="" title="Monochrome">
                    Monochrome
                  </a>
                </h1>
              </div>
            </header>

            <section className="product-tile-info">
              <div className="product-tile-pricing">
                <span className="product-price-regular">$425</span>
              </div>
            </section>
          </article>
        </section>
        <footer className="d-none">
          <a href="" title="View all" className="catalog-preview-cta">
            View all
          </a>
        </footer>
      </section>

      <section className="home-catalog-preview container demo-flex">
        <header>
          <h1 className="section-title">
            <span>Woman s</span>
          </h1>
        </header>

        <section className="product-tiles gap-2">
          <article className="product-tile d-none d-lg-block">
            <header className="product-tile-header">
              <div className="product-tile-image">
                <img src="/images/products/WMN01.png" alt="product01" />
              </div>

              <div className="product-tile-badge">
                <a
                  className="badge badge-wishlist"
                  href=""
                  title="user-wishlist"
                >
                  <i className="fa-solid fa-heart"></i>
                </a>
              </div>

              <div className="product-tile-headings">
                <h1>
                  <a href="" title="Monochrome">
                    Monochrome
                  </a>
                </h1>
              </div>
            </header>

            <section className="product-tile-info">
              <div className="product-tile-pricing">
                <span className="product-price-regular">$425</span>
              </div>
            </section>
          </article>

          <article className="product-tile d-none d-lg-block">
            <header className="product-tile-header">
              <div className="product-tile-image">
                <img src="/images/products/WMN02.png" alt="product01" />
              </div>

              <div className="product-tile-badge">
                <a
                  className="badge badge-wishlist"
                  href=""
                  title="user-wishlist"
                >
                  <i className="fa-solid fa-heart"></i>
                </a>
              </div>

              <div className="product-tile-headings">
                <h1>
                  <a href="" title="Monochrome">
                    Monochrome
                  </a>
                </h1>
              </div>
            </header>

            <section className="product-tile-info">
              <div className="product-tile-pricing">
                <span className="product-price-regular">$425</span>
              </div>
            </section>
          </article>

          <article className="product-tile d-none d-lg-block">
            <header className="product-tile-header">
              <div className="product-tile-image">
                <img src="/images/products/WMN03.png" alt="product01" />
              </div>

              <div className="product-tile-badge">
                <a
                  className="badge badge-wishlist"
                  href=""
                  title="user-wishlist"
                >
                  <i className="fa-solid fa-heart"></i>
                </a>
              </div>

              <div className="product-tile-headings">
                <h1>
                  <a href="" title="Monochrome">
                    Monochrome
                  </a>
                </h1>
              </div>
            </header>

            <section className="product-tile-info">
              <div className="product-tile-pricing">
                <span className="product-price-regular">$425</span>
              </div>
            </section>
          </article>

          <article className="product-tile d-none d-lg-block">
            <header className="product-tile-header">
              <div className="product-tile-image">
                <img src="/images/products/WMN04.png" alt="product01" />
              </div>

              <div className="product-tile-badge">
                <a
                  className="badge badge-wishlist"
                  href=""
                  title="user-wishlist"
                >
                  <i className="fa-solid fa-heart"></i>
                </a>
              </div>

              <div className="product-tile-headings">
                <h1>
                  <a href="" title="Monochrome">
                    Monochrome
                  </a>
                </h1>
              </div>
            </header>

            <section className="product-tile-info">
              <div className="product-tile-pricing">
                <span className="product-price-regular">$425</span>
              </div>
            </section>
          </article>

          <article className="product-tile d-block d-lg-none">
            <header className="product-tile-header">
              <div className="product-tile-image">
                <img src="/images/products/ML02.png" alt="product01" />
              </div>

              <div className="product-tile-badge">
                <a
                  className="badge badge-wishlist"
                  href=""
                  title="user-wishlist"
                >
                  <i className="fa-solid fa-heart"></i>
                </a>
              </div>

              <div className="product-tile-headings">
                <h1>
                  <a href="" title="Monochrome">
                    Monochrome
                  </a>
                </h1>
              </div>
            </header>

            <section className="product-tile-info">
              <div className="product-tile-pricing">
                <span className="product-price-regular">$425</span>
              </div>
            </section>
          </article>

          <article className="product-tile d-block d-lg-none">
            <header className="product-tile-header">
              <div className="product-tile-image">
                <img src="/images/products/NS02.png" alt="product01" />
              </div>

              <div className="product-tile-badge">
                <a
                  className="badge badge-wishlist"
                  href=""
                  title="user-wishlist"
                >
                  <i className="fa-solid fa-heart"></i>
                </a>
              </div>

              <div className="product-tile-headings">
                <h1>
                  <a href="" title="Monochrome">
                    Monochrome
                  </a>
                </h1>
              </div>
            </header>

            <section className="product-tile-info">
              <div className="product-tile-pricing">
                <span className="product-price-regular">$425</span>
              </div>
            </section>
          </article>
        </section>
        <footer>
          <a href="" title="View all" className="catalog-preview-cta">
            View all items
          </a>
        </footer>
      </section>
    </main>
  );
}
