import React from "react";

function MaieBar() {
  return (
    <div>
      <header>
        <div class="container">
          <img src={"./logo.png"} alt="logo" class="logo" />
          <nav>
            <ul>
              <li>
                <a href="#Home_1">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">pricing</a>
              </li>

              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <center>
        <h3>
          <a name="Home_1"></a>welcome this website allows you to look for or to
          share your space if someone need a place to stay
        </h3>
      </center>
    </div>
  );
}
export default MaieBar;
