import { useState } from "react";

export function Home() {
  const [showImg1, setShowImg1] = useState(false);
  const [showImg2, setShowImg2] = useState(false);
  const [showImg3, setShowImg3] = useState(false);
  const [showImg4, setShowImg4] = useState(false);
  const [showImg5, setShowImg5] = useState(false);
  function handleShowImg1() {
    if (showImg1 === true) {
      setShowImg1(false);
    } else {
      setShowImg1(true);
    }
  }
  function handleShowImg2() {
    if (showImg2 === true) {
      setShowImg2(false);
    } else {
      setShowImg2(true);
    }
  }
  function handleShowImg3() {
    if (showImg3 === true) {
      setShowImg3(false);
    } else {
      setShowImg3(true);
    }
  }
  function handleShowImg4() {
    if (showImg4 === true) {
      setShowImg4(false);
    } else {
      setShowImg4(true);
    }
  }
  function handleShowImg5() {
    if (showImg5 === true) {
      setShowImg5(false);
    } else {
      setShowImg5(true);
    }
  }
  return (
    <div className="container">
      <div className="header">
        <div className="title">
          Navigate among the boats and click to discover them
        </div>
      </div>
      <div className="aside"></div>
      <div className="main">
        <div className="first-line">
          <div className="boat red-boat" onClick={handleShowImg1}>
            {showImg1 && <div className="boat-img boat-1-img"></div>}
          </div>
          <div className="boat yellow-boat" onClick={handleShowImg2}>
            {showImg2 && <div className="boat-img boat-2-img"></div>}
          </div>
          <div className="boat pink-boat" onClick={handleShowImg3}>
            {showImg3 && <div className="boat-img boat-3-img"></div>}
          </div>
        </div>
        <div className="second-line">
          <div className="boat green-boat" onClick={handleShowImg4}>
            {showImg4 && <div className="boat-img boat-4-img"></div>}
          </div>
          <div className="boat blue-boat" onClick={handleShowImg5}>
            {showImg5 && <div className="boat-img boat-5-img"></div>}
          </div>
        </div>
      </div>
    </div>
  );
}
