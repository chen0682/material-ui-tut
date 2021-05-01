import React from 'react';
import './Materialize.css';

function Materialize() {
  return (
    <div>
      <header>
        <nav className='nav-wrapper transparent'>
          <div className='container'>
            <a href='/#' className='brand-logo'>
              Fang
            </a>
            <a href='/#' className='sidenav-trigger' data-target='mobileMenu'>
              <i className='material-icons'>menu</i>
            </a>
            <ul className='right hide-on-med-and-down'>
              <li>
                <a href='/#'>Photos</a>
              </li>
              <li>
                <a href='/#'>Services</a>
              </li>
              <li>
                <a href='/#'>Contact</a>
              </li>
              <li>
                <a href='/#' className='btn-small transparent'>
                  <span className='material-icons'>facebook</span>
                </a>
              </li>
              <li className='tooltipped' data-tooltip='Language'>
                <a href='/#' className=' btn-small transparent'>
                  <span className='material-icons'>language</span>
                </a>
              </li>
              <li>
                <a href='/#' className=' btn-small transparent'>
                  <span className='material-icons'>settings</span>
                </a>
              </li>
            </ul>
            <ul className='sidenav grey lighten-2' id='mobileMenu'>
              <li>
                <a href='/#'>Photos</a>
              </li>
              <li>
                <a href='/#'>Services</a>
              </li>
              <li>
                <a href='/#'>Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* photo grid */}
      <section className='container section' id='photos'>
        <div className='row'>
          <div className='col l4'>
            <img
              src='https://picsum.photos/1200/600'
              alt=''
              className='responsive-img'
            />
          </div>
          <div className='col l6 offset-l1'>
            <h2 className='indigo-text text-darken-4'>Portraits</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Veritatis esse labore aperiam facilis, doloremque nemo error atque
              laudantium ea et, in corporis at earum accusamus ab beatae. Illum,
              perspiciatis eaque.
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col l4 push-l7'>
            <img
              src='https://picsum.photos/800/600'
              alt=''
              className='responsive-img'
            />
          </div>
          <div className='col l6 pull-l4'>
            <h2 className='indigo-text text-darken-4'>Portraits</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Veritatis esse labore aperiam facilis, doloremque nemo error atque
              laudantium ea et, in corporis at earum accusamus ab beatae. Illum,
              perspiciatis eaque.
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col l4'>
            <img
              src='https://picsum.photos/1100/600'
              alt=''
              className='responsive-img'
            />
          </div>
          <div className='col l6 offset-l1'>
            <h2 className='indigo-text text-darken-4'>Portraits</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Veritatis esse labore aperiam facilis, doloremque nemo error atque
              laudantium ea et, in corporis at earum accusamus ab beatae. Illum,
              perspiciatis eaque.
            </p>
          </div>
        </div>
      </section>

      <div className='parallax-container'>
        <div className='parallax'>
          <img
            src='https://picsum.photos/1500/1000'
            alt=''
            className='responsive-img'
          />
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col xl6 white-text'>
              <h4>This is an parallax</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
                accusamus cumque maiores vero minima mollitia et sint dolorem,
                aliquid, explicabo hic. Perspiciatis, dolore corporis commodi
                sed iusto recusandae laborum dicta?
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className='container section' id='services'>
        <div className='row'>
          <div className='col l4'>
            <h2 className='indigo-text text-darken-4'>What I do...</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              autem est libero provident ratione iste voluptates dolore
              architecto harum. Nemo necessitatibus totam odit alias accusantium
              harum, eligendi consequatur rem. Quae.
            </p>
          </div>
          <div className='col l6 offset-l2'>
            <ul className='tabs'>
              <li className='tab col s6'>
                <a href='/#photography' className='indigo-text text-darken-4'>
                  Photography
                </a>
              </li>
              <li className='tab col s6'>
                <a href='/#editing' className='indigo-text text-darken-4'>
                  Editing
                </a>
              </li>
            </ul>
            <div className='col s12' id='photography'>
              <p className='flow-text indigo-text text-darken-4'>Photography</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Magnam, quidem nesciunt? Expedita eum architecto doloribus
                incidunt quaerat ipsam! Eligendi praesentium aliquid quis cum ex
                odit velit debitis eius unde repellendus.
              </p>
            </div>
            <div className='col s12' id='editing'>
              <p className='flow-text indigo-text text-darken-4'>Editing</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                deserunt nostrum suscipit consequatur modi aspernatur itaque?
                Illum necessitatibus officia reprehenderit consequuntur
                reiciendis, facere sequi incidunt itaque atque. Sed, quod
                soluta.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='parallax-container'>
        <div className='parallax'>
          <img
            src='https://picsum.photos/1500/1200'
            alt=''
            className='responsive-img'
          />
        </div>
      </div>

      <section className='section container' id='contact'>
        <div className='row'>
          <div className='col l5'>
            <h2 className='indigo-text text-darken-4'>Get In Touch</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi dignissimos placeat mollitia aliquid amet obcaecati
              ducimus, sit nulla incidunt aspernatur architecto fugiat unde
              provident doloribus libero quis natus consequatur? Eaque.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi dignissimos placeat mollitia aliquid amet obcaecati
              ducimus, sit nulla incidunt aspernatur architecto fugiat unde
              provident doloribus libero quis natus consequatur? Eaque.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi dignissimos placeat mollitia aliquid amet obcaecati
              ducimus, sit nulla incidunt aspernatur architecto fugiat unde
              provident doloribus libero quis natus consequatur? Eaque.
            </p>
          </div>
          <div className='col l5 offset-l2'>
            <form action=''>
              <div className='input-field'>
                <i className='material-icons prefix'>email</i>
                <input type='email' name='' id='email' />
                <label htmlFor='email'>Your Email</label>
              </div>
              <div className='input-field'>
                <i className='material-icons prefix'>message</i>
                <textarea
                  id='message'
                  className='materialize-textarea'></textarea>
                <label htmlFor='message'>Your Message</label>
              </div>
              <div className='input-field'>
                <i className='material-icons prefix'>event</i>
                <input type='text' id='date' className='datepicker'></input>
                <label htmlFor='date'>Choose a date you need me for...</label>
              </div>
              <div className='input-field'>
                <p>Service Required...</p>
                <p>
                  <label>
                    <input type='checkbox' name='' id='' />
                    <span>Photography</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input type='checkbox' name='' id='' />
                    <span>Editing</span>
                  </label>
                </p>
              </div>
              <div className='input-field center'>
                <button class='btn'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className='page-footer grey darken-3'>
        <div className='container'>
          <div className='row'>
            <div className='col l6'>
              <h5>About Me</h5>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
                voluptatem, fuga modi laborum sequi asperiores at ea ullam
                tempore.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
                commodi accusamus neque laboriosam velit totam odio recusandae
                voluptates.
              </p>
            </div>
            <div className='col l4 offset-l2'>
              <h5>connect</h5>
              <ul>
                <li>
                  <a href='/#' className='grey-text text-lighten-3'>
                    Facebook
                  </a>
                </li>
                <li>
                  <a href='/#' className='grey-text text-lighten-3'>
                    Facebook
                  </a>
                </li>
                <li>
                  <a href='/#' className='grey-text text-lighten-3'>
                    Facebook
                  </a>
                </li>
                <li>
                  <a href='/#' className='grey-text text-lighten-3'>
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='footer-copyright grey darken-4'>
          <div className='container center-align'>&copy; 2021 Fang Chen</div>
        </div>
      </footer>
    </div>
  );
}

export default Materialize;
