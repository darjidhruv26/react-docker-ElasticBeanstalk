import './App.css';

const Gridpage = () => {
  return (
    <>
      <div className="grid_wrapper">
        <div className="grid_header">
          <img
            src="/images/formula-1.png"
            alt="logo"
          />
          <ul>
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
          </ul>
          <img
            src="https://static.thenounproject.com/png/4615397-200.png"
            alt="hamburger"
            className="hamburger_icon"
          />
        </div>
        <div className="grid_banner">
          <div className="grid_banner_child">
            <div className="grid_banner_child_content">
              <div className="bannerimage">
                <img
                  src="/images/or.jpg"
                  alt="Banner Image"
                />
              </div>
              <div className="grid_banner_child_td">
                <p className="bannertitle">F1 use Cloud technology?</p>
                <div className="bannerdesc">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Inventore at culpa placeat, similique nostrum eum dicta
                    delectus repudiandae. Fugiat impedit libero quam saepe sunt
                    eaque cupiditate pariatur voluptas mollitia assumenda nam
                    quas, corrupti neque.
                  </p>
                  <button type="button">Read More</button>
                </div>
              </div>
            </div>
            <div className="bannernew">
              <h3>New</h3>
              <div className="new_content">
                <h4><i>Max Verstappen</i></h4>
                <p>
                Dutch-Belgian motorsports racing driver
                </p>
                <hr />
                <h4><i>Charles Leclerc</i></h4>
                <p>
                Monacan motorsports racing driver
                </p>
                <hr />
                <h4><i>Fernando Alonso</i></h4>
                <p>
                Spanish motorsports racing driver.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid_cards">
          <div className="grid_cards_child">
            <div className="content_with_image">
              <img
                src="/images/or9.jpg"
                alt="retro pc"
              ></img>
              <div className="card_content">
                <p>01 </p>
                <p>Max Verstappen</p>
                <p>Dutch-Belgian motorsports racing driver</p>
              </div>
            </div>
            <div className="content_with_image">
              <img
                src="/images/fr.png"
                alt="laptop"
              ></img>
              <div className="card_content">
                <p>02</p>
                <p>Charles Leclerc</p>
                <p>Monacan motorsports racing driver.</p>
              </div>
            </div>
            <div className="content_with_image">
              <img src="/images/aston.png"></img>
              <div className="card_content">
                <p>03</p>
                <p>Fernando Alonso</p>
                <p>Spanish motorsports racing driver.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gridpage;




