import React, { useEffect } from "react";
import $ from "jquery";
import "./styles/_volumeButtonStyles.scss";

const VolumeButton = () => {
  useEffect(() => {
    let a: any = 20;
    let b: any = -10;
    let c: any = 5;
    // $(".tooltip-inner").html(c);
    $(".min").click(function () {
      if (a > 20) {
        a = a - 20;
        b = b - 20;
        c = c - 5;
        $(".l-2").css("width", +a + "px");
        $(".slider-tip").css("margin-left", +b + "px");
        $(".tooltip-inner").html(c);
      }
    });
    $(".pls").click(function () {
      if (a < 400) {
        a = a + 20;
        b = b + 20;
        c = c + 5;
        $(".l-2").css("width", +a + "px");
        $(".slider-tip").css("margin-left", +b + "px");
        for (let i: any = 0; i <= c; i++) {
          $(".tooltip-inner").html(i);
          i++;
        }
      }
    });
  });
  return (
    <main>
      <input type="range" />
    </main>
  );
};

export default VolumeButton;
