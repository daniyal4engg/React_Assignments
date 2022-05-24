import { useEffect, useState } from "react";

export const Timer = () => {
  const [time, setTime] = useState(null);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [id, setID] = useState(null);

  useEffect(() => {
    if (time === 0) {
      clearInterval(id);
    }
  }, [time, id]);

  // isTimerRunning?
  // regular  interval we need to update it
  //  we need to pause it
  // we need to stop it
  //  reset button
  const handleUpdate = (time) => {
    setTime(time);
    setIsTimerRunning(true);
    handleStart();
  };

  const handleStart = () => {
    if (id !== null) return;

    const _id = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
    setID(_id);
    setIsTimerRunning(true);
  };

  const handleStop = () => {
    clearInterval(id);
    setIsTimerRunning(false);
    setID(null);
  };
  const handleReset = () => {
    handleStop();
    setTime(0);
  };
  return (
    <div>
      {time === null ? (
        <TimerInput handleUpdate={handleUpdate} />
      ) : (
        <div>
          <div>Timer : {time}</div>
          {isTimerRunning ? (
            <button onClick={handleStop}>stop</button>
          ) : (
            <button onClick={handleStart}>start</button>
          )}
          <button onClick={handleReset}>reset</button>
        </div>
      )}
    </div>
  );
};

const TimerInput = ({ handleUpdate }) => {
  const [time, setTime] = useState(null);
  const handleTimeUpdate = (value) => {
    if (Number.isNaN(value)) {
      alert("plese input number");
      return;
    }
    setTime(Number(value));
  };
  return (
    <div>
      <input
        value={time}
        onChange={(e) => {
          handleTimeUpdate(e.target.value);
        }}
      />
      <button onClick={() => handleUpdate(time)}>Start Timer</button>
    </div>
  );
};
