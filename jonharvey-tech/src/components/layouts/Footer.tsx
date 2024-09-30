import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className='container'>
          <div className='footer_inner'>
            <div className='c-footer'>
              <div className='layout'>
                <div className='layout_item w-25'>
                  <nav className='c-nav-tool'>
                    <h4 className='c-nav-tool_title'>Menu</h4>
                    <ul className='c-nav-tool_list'>
                      <li>
                        <a
                          href='/collections/all'
                          className='c-link'
                        >
                          Services
                        </a>
                      </li>

                      <li>
                        <a
                          href='/pages/about-us'
                          className='c-link'
                        >
                          About
                        </a>
                      </li>

                      <li>
                        <a
                          href='/blogs/community'
                          className='c-link'
                        >
                          Tools
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          className='c-link'
                        >
                          Process
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          className='c-link'
                        >
                          Insights
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          className='c-link'
                        >
                          FAQ
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>

                <div className='layout_item w-25'>
                  <nav className='c-nav-tool'>
                    <h4 className='c-nav-tool_title'>Links</h4>
                    <ul className='c-nav-tool_list'>
                      <li className='c-nav-tool_item'>
                        <a
                          href='/pages/shipping-returns'
                          className='c-link'
                        >
                          LinkedIn
                        </a>
                      </li>

                      <li className='c-nav-tool_item'>
                        <a
                          href='/pages/help'
                          className='c-link'
                        >
                          FAQ
                        </a>
                      </li>

                      <li className='c-nav-tool_item'>
                        <a
                          href='/pages/terms-conditions'
                          className='c-link'
                        >
                          Pay an Invoice
                        </a>
                      </li>

                      <li className='c-nav-tool_item'>
                        <a
                          href='/pages/contact'
                          className='c-link'
                        >
                          Contact
                        </a>
                      </li>

                      <li className='c-nav-tool_item'>
                        <a
                          href='/account/login'
                          className='c-link'
                        >
                          Login
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className='layout c-2'>
                <div className='layout_item w-50'>
                  <ul className='flex'>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
                <div className='layout_item w-25'>
                  <ul className='flex'>
                    <li>
                      <a href='#'></a>
                    </li>
                    <li>
                      <a href='#'></a>
                    </li>
                    <li>
                      <a href='#'></a>
                    </li>
                  </ul>
                </div>
                <div className='layout_item w-25'></div>
              </div>
            </div>
          </div>
        </div>
      © 2024 Jon Harvey. All rights reserved.
    </footer>
  );
};

export default Footer;
