import React, { useEffect, useState } from "react";

const Rank = () => {
  const [number, setNumber] = useState(null);

  function counter(start: number, end: number, duration: number) {
    // let obj: any = document.getElementById(id);
    let current: any = start;
    let range: any = end - start;
    let increment: any = end > start ? 1 : -1;
    let step: any = Math.abs(Math.floor(duration / range));
    let timer: any = setInterval(() => {
      current += increment;
      setNumber(current);
      // obj.textContent = current;
      if (current == end) {
        clearInterval(timer);
      }
    }, step);
  }

  useEffect(() => {
    counter(0, 299, 1000);
  }, []);

  return (
    <div className="profileInfo_container_avatarSection_rank">
      <div className="profileInfo_container_avatarSection_rank__number">
        #{number}
      </div>
      <div className="profileInfo_container_avatarSection_rank__text">Rank</div>
    </div>
  );
};

export default Rank;
