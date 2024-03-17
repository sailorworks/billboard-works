import React from 'react'; 

import { Link } from 'react-router-dom'; 

import 'bulma/css/bulma.min.css'; 

  

function Header() { 

  return ( 

    <header className="has-background-white-ter"> 

      <div className="container is-max-desktops pt-3 pb-3"> 

        <div className="columns"> 

          <div className="column is-two-thirds is-offset-one-quarter"> 

            <nav className="level"> 

              <div className="level-left mr-5"> 

                <div className="level-item"> 

                  <Link to="/" className="title is-size-4 has-text-black"> 

                    Billboard Works 

                  </Link> 

                </div> 

              </div> 

              <div className="level-right ml-5"> 

                <div className="level-item"> 

                  <Link to="/" className="button is-rounded is-light is-outlined mr-1"> 

                    HOME 

                  </Link> 

                </div> 

                <div className="level-item"> 

                  <Link to="/about" className="button is-rounded is-light is-outlined mr-1"> 

                    ABOUT US 

                  </Link> 

                </div> 

                <div className="level-item"> 

                  <Link to="/services" className="button is-rounded is-light is-outlined mr-1"> 

                    SERVICES 

                  </Link> 

                </div> 

                <div className="level-item"> 

                  <Link to="/find-billboards" className="button is-rounded is-success is-outlined mr-1"> 

                    FIND BILLBOARDS 

                  </Link> 

                </div> 

                <div className="level-item"> 

                  <Link to="/sign-up-login" className="button is-rounded is-dark is-outlined"> 

                    SIGN UP / LOG IN 

                  </Link> 

                </div> 

              </div> 

            </nav> 

          </div> 

        </div> 

      </div> 

    </header> 

  ); 

} 

  

export default Header; 