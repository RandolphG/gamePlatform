import React, { useEffect } from "react";
import $ from "jquery";

const XpBar = () => {
  useEffect(() => {
    function flicker() {
      $("#xp-increase-fx-flicker").css("opacity", "1");
      $("#xp-increase-fx-flicker").animate(
        { opacity: Math.random() },
        100,
        flicker
      );
    }

    function doit() {
      $("#xp-increase-fx").css("display", "inline-block");
      $("#xp-bar-fill").css(
        "box-shadow",
        /*"0px 0px 15px #06f,*/ "-5px 0px 10px #fff inset"
      );
      setTimeout(function () {
        $("#xp-bar-fill").css("-webkit-transition", "all 2s ease");
        $("#xp-bar-fill").css("width", "75%");
      }, 100);
      setTimeout(function () {
        $("#xp-increase-fx").fadeOut(500);
        $("#xp-bar-fill").css({
          "-webkit-transition": "all 0.5s ease",
          "box-shadow": "",
        });
      }, 2000);
      setTimeout(function () {
        $("#xp-bar-fill").css({ width: "0.1%" });
      }, 3000);
    }

    flicker();
  }, []);

  return (
    <div id="account-bar-wrapper">
      <div id="account-bar">
        <div id="account-bar-name">Character</div>
        <div id="account-bar-level">Level 5</div>
        <div id="xp-bar">
          <div id="xp-bar-fill">
            <div id="xp-increase-fx">
              <div id="xp-increase-fx-flicker">
                <div className="xp-increase-glow1" />
                <div className="xp-increase-glow2" />
                <div className="xp-increase-glow3" />
              </div>
              <div className="xp-increase-glow2" />
            </div>
          </div>
        </div>
        <div id="account-bar-next-level">6</div>
      </div>
      {/*<div onClick='doit();' className='btn' id='doit-btn'>DO IT</div>*/}
    </div>
  );
};

export default XpBar;
