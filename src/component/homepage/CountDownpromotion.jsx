import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function CountDownpromotion() {

    const [countdownDate, setCountdownDate] = useState(new Date('12/25/2020').getTime());
    const [state, setState] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        setInterval(() => setNewTime(), 1000);
    }, []);

    const setNewTime = () => {
        if (countdownDate) {
            const currentTime = new Date().getTime();

            const distanceToDate = countdownDate - currentTime;

            let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
            let hours = Math.floor(
                (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
            );
            let minutes = Math.floor(
                (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
            );
            let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

            const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

            days = `${days}`;
            if (numbersToAddZeroTo.includes(hours)) {
                hours = `0${hours}`;
            } else if (numbersToAddZeroTo.includes(minutes)) {
                minutes = `0${minutes}`;
            } else if (numbersToAddZeroTo.includes(seconds)) {
                seconds = `0${seconds}`;
            }

            setState({ days: days, hours: hours, minutes, seconds });
        }
    };

    return (
        <div className="basis-3/3 lg:basis-1/3 lg:absolute lg:top-0 lg:right-0 w-full lg:w-1/3 h-full">
            <div className=" h-full w-full relative flex flex-col items-center justify-center">
                <div className="absolute z-10">
                    <div className="text-center text-2xl font-semibold uppercase">Khuyến mãi lớn</div>
                    <div className="text-center italic mt-1">( giảm tới 50% nhân dịp năm mới )</div>
                    <div className="flex gap-5 mt-8">
                        <div className="flex flex-col">
                            <div className="text-xl py-3 bg-main-brown-700 font-semibold text-white min-w-14 text-center">{state.days}</div>
                            <div className="text-center mt-2">Ngày</div>
                        </div>
                        <div className="flex flex-col">
                            <div className="text-xl py-3 bg-main-brown-700 font-semibold text-white min-w-14 text-center">{state.hours}</div>
                            <div className="text-center mt-2">Giờ</div>
                        </div>
                        <div className="flex flex-col">
                            <div className="text-xl py-3 bg-main-brown-700 font-semibold text-white min-w-14 text-center">{state.minutes}</div>
                            <div className="text-center mt-2">Phút</div>
                        </div>
                        <div className="flex flex-col">
                            <div className="text-xl py-3 bg-main-brown-700 font-semibold text-white min-w-14 text-center">{state.seconds}</div>
                            <div className="text-center mt-2">Giây</div>
                        </div>
                    </div>
                    <Link to={'/tat-ca-san-pham'} className="block bg-main-brown-700 text-white px-4 py-3 w-max mx-auto text-sm mt-10 hover:text-main-brown-700 hover:bg-white border border-main-brown-700 transition-all duration-300">Xem thêm</Link>
                </div>
                <div className="w-full min-h-[300px] lg:min-h-[450px] block bg-white lg:absolute inset-0 top-0 opacity-80"></div>
            </div>
        </div>
    );
}

export default CountDownpromotion;