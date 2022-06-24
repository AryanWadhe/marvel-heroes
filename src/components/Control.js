import React, { useState } from "react";
export default function Control(props) {
  const [img, setImg] = useState("spider.jpg");
  const [name, setName] = useState("SPIDER MAN");
  // const [color, setColor] = useState("main_content__title-first");
  var cursor = document.getElementById("cur");
  document.onmousemove = function (e) {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
  };
  const imgChangeH = () => {
    if (img === "hulk-1.jpg") {
      setImg("spider.jpg");
      setName("SPIDER MAN");
      // setColor("main_content__title-first");
      // props.fname="HULK";
    } else {
      setImg("hulk-1.jpg");
      setName("The HULK");
      document.documentElement.style.setProperty("--hoverColor", "#008000");

      // setColor("Hulk");
    }
  };
  const imgChangeA = () => {
    if (img === "captain.jpg") {
      setImg("spider.jpg");
      setName("SPIDER MAN");
    } else {
      setImg("captain.jpg");
      setName("Captain America");
      document.documentElement.style.setProperty("--hoverColor", "	red");
    }
  };
  const imgChangeAnt = () => {
    if (img === "antman.jpg") {
      setImg("spider.jpg");
      setName("SPIDER MAN");
    } else {
      setImg("antman.jpg");
      setName("Ant Man");
      document.documentElement.style.setProperty("--hoverColor", "	#8B008B");
    }
  };
  const imgChangeiro = () => {
    if (img === "ironman.jpg") {
      setImg("spider.jpg");
      setName("SPIDER MAN");
    } else {
      setImg("ironman.jpg");
      setName("Iron Man");
      document.documentElement.style.setProperty("--hoverColor", "	#b97d10");
    }
  };
  const imgChangedr = () => {
    if (img === "drstrange.jpg") {
      setImg("spider.jpg");
      setName("SPIDER MAN");
    } else {
      setImg("drstrange.jpg");
      setName("DR. Strange");
      document.documentElement.style.setProperty("--hoverColor", " #FFD700");
    }
  };
  const imgChangebat = () => {
    if (img === "batman.jpg") {
      setImg("spider.jpg");
      setName("SPIDER MAN");
    } else {
      setImg("batman.jpg");
      setName("Bat Man");
      document.documentElement.style.setProperty("--hoverColor", "black");
    }
  };
  const imgChangebla = () => {
    if (img === "black.jpg") {
      setImg("spider.jpg");
      setName("SPIDER MAN");
    } else {
      setImg("black.jpg");
      setName("Black Panther");
      document.documentElement.style.setProperty("--hoverColor", "#722F37");
    }
  };
  const imgChangesuper = () => {
    if (img === "superman.jpg") {
      setImg("spider.jpg");
      setName("SPIDER MAN");
    } else {
      setImg("superman.jpg");
      setName("Super Man");
      document.documentElement.style.setProperty("--hoverColor", "	#7F00FF");
    }
  };
  const imgChangeT = () => {
    if (img === "thor-3.jpg") {
      setImg("spider.jpg");
      setName("SPIDER MAN");
    } else {
      setImg("thor-3.jpg");
      setName("The Thor");
      document.documentElement.style.setProperty("--hoverColor", "	#00008B");
    }
  };
  return (
    <>
      <section className="main_content">
        <h2 className="main_content__title">
          <img src={img} id={props.title} alt="" />
          <span className="main_content__title-first">{name}</span>
        </h2>
      </section>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            {/* <img src="hulk-1.jpg" class="d-block w-100" alt="..." /> */}
            <div className="body_2">
              <div className="card">
                <div className="imgboxes" onClick={imgChangeH}>
                  <img src="hulk-1.jpg" id="hulk-1" alt="" />
                  <div className="card-main_content">
                    <h2>
                      <b className="main_text">I Am HULK</b>
                    </h2>
                    <p className="main-text">
                      "I am Sorry, I just get so angry all the time! "
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="imgboxes" onClick={imgChangeT}>
                  <img src="thor-3.jpg" id="hulk-1" alt="" />
                  <div className="card-main_content">
                    <h2>
                      <b className="main_text">I Am THOR</b>
                    </h2>
                    <p className="main-text">
                      “You should know that when you betray me, I will kill
                      you.”.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="imgboxes" onClick={imgChangeA}>
                  <img src="captain.jpg" id="hulk-1" alt="" />
                  <div className="card-main_content">
                    <h2>
                      <strong>
                        {" "}
                        <b className="main_text">I Am Captain</b>
                      </strong>
                    </h2>
                    <p className="main-text">
                      “I don't like bullies;I don't care where they're from.”{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            {/* <img src="thor.jpg" class="d-block w-100" alt="..." /> */}
            <div className="body_2">
              <div className="card">
                <div className="imgboxes" onClick={imgChangedr}>
                  <img src="drstrange.jpg" id="hulk-1" alt="" />
                  <div className="card-main_content">
                    <h2>
                      <b className="main_text">I Am Dr.Strange</b>
                    </h2>
                    <p className="main-text">
                      "Fight like your life depended on it.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="imgboxes" onClick={imgChangeiro}>
                  <img src="ironman.jpg" id="hulk-1" alt="" />
                  <div className="card-main_content">
                    <h2>
                      <b className="main_text">I Am Iron Man</b>
                    </h2>
                    <p className="main-text">
                      "Sometimes you gotta run before you walk"
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="imgboxes" onClick={imgChangebat}>
                  <img src="batman.jpg" id="hulk-1" alt="" />
                  <div className="card-main_content">
                    <h2>
                      <strong>
                        {" "}
                        <b className="main_text">I Am Bat&nbsp; Man</b>
                      </strong>
                    </h2>
                    <p className="main-text">
                      “ The night is darkest just before the dawn. ...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            {/* <img src="captain.jpg" class="d-block w-100" alt="..." /> */}
            <div className="body_2">
              <div className="card">
                <div className="imgboxes" onClick={imgChangesuper}>
                  <img src="superman.jpg" id="hulk-1" alt="" />
                  <div className="card-main_content">
                    <h2>
                      <b className="main_text">I Am Super Man</b>
                    </h2>
                    <p className="main-text">
                      "It doesn't take X-Ray Vision to see you are up to no
                      good'
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="imgboxes" onClick={imgChangebla}>
                  <img src="black.jpg" id="hulk-1" alt="" />
                  <div className="card-main_content">
                    <h2>
                      <b className="main_text">I Am Black Panther</b>
                    </h2>
                    <p className="main-text">
                      "I am not the King of all people.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="imgboxes" onClick={imgChangeAnt}>
                  <img src="antman.jpg" id="hulk-1" alt="" />
                  <div className="card-main_content">
                    <h2>
                      <strong>
                        {" "}
                        <b className="main_text">I Am Ant&nbsp; Man</b>
                      </strong>
                    </h2>
                    <p className="main-text">“Everything is unpredictable"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
