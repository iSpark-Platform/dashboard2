import React from 'react';
import Time from '../../utils/time';
import dynamic from 'next/dynamic';

const CountdownTimer = () => {
  return (
    <div className="countdown">
      <div className="countdown-section">
        <div>
          <div className="countdown-number day">{Time('2026-12-30 00:00:00').days}</div>
          <div className="countdown-unit">Days</div>
        </div>
      </div>
      <div className="countdown-section">
        <div>
          <div className="countdown-number hour">{Time('2026-12-30 00:00:00').hours}</div>
          <div className="countdown-unit">Hrss</div>
        </div>
      </div>
      <div className="countdown-section">
        <div>
          <div className="countdown-number minute">{Time('2026-12-30 00:00:00').minutes}</div>
          <div className="countdown-unit">Mints</div>
        </div>
      </div>
      <div className="countdown-section">
        <div>
          <div className="countdown-number second" suppressHydrationWarning>{Time('2026-12-30 00:00:00').seconds}</div>
          <div className="countdown-unit">Sec</div>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(CountdownTimer), { ssr: false });