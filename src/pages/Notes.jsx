import '../pages/Notes.css';

export default function Notes() {
  return (
    <div>
      <nav className='nav-wraper indigo'>
        <div className='container'>
          <a href='/#' className='brand-logo'>
            Logo
          </a>
          <a href='/#' className='sidenav-trigger' data-target='mobile-link'>
            <i className='material-icons'>menu</i>
          </a>
          <ul className='right hide-on-med-and-down'>
            <li>
              <a href='/#'>Home</a>
            </li>
            <li>
              <a href='/#'>About</a>
            </li>
            <li>
              <a href='/#'>Contact</a>
            </li>
            <li>
              <a href='/#' className='btn-floating indigo darken-4 z-depth-0'>
                <i className='material-icons'>notifications</i>
              </a>
            </li>
            <li>
              <span className='badge white-text pink new'>5</span>
            </li>
          </ul>
        </div>
      </nav>

      <div className='container'>
        <h2>Modals</h2>
        <a href='#terms' className='btn orange modal-trigger'>
          Terms & Conditions
        </a>

        <div className='modal' id='terms'>
          <div className='modal-content'>
            <h4>Terms & Conditions</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              laudantium nisi consectetur commodi non consequatur possimus,
              suscipit corporis fuga accusantium est molestiae similique amet
              molestias aperiam! Ipsa expedita architecto reiciendis?
            </p>
          </div>
          <div className='modal-footer'>
            <a href='/#' className='modal-close btn orange'>
              Agree & Close
            </a>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col m6'>
            <ul className='collection with-header'>
              <li className='collection-header'>
                <h6>Customs</h6>
              </li>
              <li className='collection-item avatar'>
                <i className='material-icons circle blue'>person</i>
                <span className='title'>Div</span>
                <p className='grey-text'>black-belt</p>
                <a href='/#' className='secondary-content'>
                  <i className='material-icons'>email</i>
                </a>
              </li>
              <li className='collection-item avatar'>
                <i className='material-icons circle blue'>person</i>
                <span className='title'>Div</span>
                <p className='grey-text'>black-belt</p>
                <a href='/#' className='secondary-content'>
                  <i className='material-icons'>email</i>
                </a>
              </li>
              <li className='collection-item avatar'>
                <i className='material-icons circle blue'>person</i>
                <span className='title'>Div</span>
                <p className='grey-text'>black-belt</p>
                <a href='/#' className='secondary-content'>
                  <i className='material-icons'>email</i>
                </a>
              </li>
              <li className='collection-item avatar'>
                <i className='material-icons circle blue'>person</i>
                <span className='title'>Div</span>
                <p className='grey-text'>black-belt</p>
                <a href='/#' className='secondary-content'>
                  <i className='material-icons'>email</i>
                </a>
              </li>
              <li className='collection-item avatar'>
                <i className='material-icons circle blue'>person</i>
                <span className='title'>Div</span>
                <p className='grey-text'>black-belt</p>
                <a href='/#' className='secondary-content'>
                  <i className='material-icons'>email</i>
                </a>
              </li>
              <li className='collection-item avatar'>
                <i className='material-icons circle blue'>person</i>
                <span className='title'>Div</span>
                <p className='grey-text'>black-belt</p>
                <a href='/#' className='secondary-content'>
                  <i className='material-icons'>email</i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <h4>Collections</h4>
      </div>

      <div className='container'>
        <h2>Cards</h2>
        <div className='row'>
          <div className='col l6'>
            <div className='card'>
              <div className='card-image'>
                <img src='https://source.unsplash.com/random' alt='random' />
                <a href='/#' className='btn-floating pink halfway-fab'>
                  <i className='material-icons'>favorite</i>
                </a>
              </div>
              <div className='card-content'>
                <span className='card-title'>This is an unsplash image</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat magnam veritatis, ullam temporibus ab labore debitis
                  neque non nemo libero voluptatem accusantium tenetur provident
                  iste consectetur possimus sequi vitae quidem.
                </p>
              </div>
              <div className='card-action'>
                <a href='/#'>More Details</a>
                <a href='/#'>View Data</a>
              </div>
            </div>
          </div>
          <div className='col l6'>
            <div className='card'>
              <div className='card-image'>
                <img
                  src='https://source.unsplash.com/user/erondu'
                  alt='random'
                />
                <a href='/#' className='btn-floating pink halfway-fab'>
                  <i className='material-icons'>favorite</i>
                </a>
              </div>
              <div className='card-content'>
                <span className='card-title'>This is an unsplash image</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat magnam veritatis, ullam temporibus ab labore debitis
                  neque non nemo libero voluptatem accusantium tenetur provident
                  iste consectetur possimus sequi vitae quidem.
                </p>
              </div>
              <div className='card-action'>
                <a href='/#'>More Details</a>
                <a href='/#'>View Data</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container border'>
        <h1 className='center-align'>Hello, world.</h1>
        <h2 className='right-align'>Hello, world.</h2>
        <h3>Hello, world.</h3>
        <h4 className='btn btn-floating pulse'>Hello, world.</h4>
        <h5 className='btn-small indigo'>Hello, world.</h5>
        <h6 className='hide-on-small-only'>Hello, world -6.</h6>
        <div className='container grey lighten-2 box valign-wrapper'>
          <i className='material-icons center-block red-text lighten-2'>
            error
          </i>
          <i className='material-icons center-block red-text lighten-2'>
            warning
          </i>
          <i className='material-icons center-block red-text lighten-2'>
            cloud
          </i>
          <i className='material-icons center-block blue-text lighten-2'>
            folder
          </i>
          <i className='material-icons center-block red-text lighten-2'>
            error
          </i>
        </div>
        <a href='/#' className='btn indigo'>
          <span>send</span>
          <i className='material-icons right'>send</i>
        </a>
        <a href='/#' className='btn-floating indigo'>
          <i className='material-icons'>add</i>
        </a>
        <a href='/#' className='btn-floating indigo'>
          <i className='material-icons red'>remove</i>
        </a>

        <p className='truncate'>
          This is a paragraph. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ut voluptate consequatur, ducimus amet libero
          officiis dolorum dignissimos numquam nisi corrupti, saepe impedit
          cumque asperiores et ullam atque? Nesciunt, dolores rerum.
        </p>
      </div>
    </div>
  );
}
