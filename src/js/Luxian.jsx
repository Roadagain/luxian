import React from 'react';
import '../css/style.css';

const Luxian = ({ isUp }) => (
  <div className="luxian">
    <div className="box cactus">
      あたま
    </div>
    <div className="box sand">
      からだ
      <div className="lever-base">
        レバー設置場所
        <div className={`lever ${isUp ? "up" : "down"}`}>
          緑仙の緑仙
        </div>
      </div>
    </div>
  </div>
);

export default Luxian;
