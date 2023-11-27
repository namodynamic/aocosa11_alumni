import { useTimer } from "react-timer-hook";

const Countdown = ({ expiryTimestamp }) => {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
  });

 const formattedDays = String(days).padStart(2, "0");
  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  return (
    <section className="flex gap-5 bg-maroon px-2 rounded-md items-center justify-center">
      <h2 className="text-lg font-bold text-zinc-500 dark:text-zinc-400 tracking-tighter">
        Reunion Countdown:
      </h2>
      <div className="flex text-yellow-400">
        <div className="flex flex-col items-center">
          <p className=" font-bold "> {formattedDays}:</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="font-bold"> {formattedHours}:</div>
        </div>
        <div className="flex flex-col items-center">
          <div className=" font-bold">{formattedMinutes}:</div>
        </div>
        <div className="flex flex-col items-center">
          <div className=" font-bold">{formattedSeconds}</div>
        </div>
      </div>
    </section>
  );
};



export default Countdown;
