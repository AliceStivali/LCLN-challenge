import { useState } from "react";

export function Home() {
  const [show, setShow] = useState(false);
  function showImg() {
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
    }
  }
  return (
    <div className="container">
      <div className="header">
        <div className="title">Lorem ipsum</div>
      </div>
      <div className="aside"></div>
      <div className="main">
        <div className="first-line">
          <div className="boat red-boat" onClick={showImg}>
            {show && <div className="boat-img boat-1-img"></div>}
          </div>
          <div className="boat yellow-boat"></div>
          <div className="boat green-boat"></div>
        </div>
        <div className="second-line">
          <div className="boat green-boat"></div>
          <div className="boat red-boat"></div>
        </div>
      </div>
    </div>
  );
}
