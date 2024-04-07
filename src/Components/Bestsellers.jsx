import React from 'react';
import yellow_rec from "../assets/yellow_rec.png"; 
import best1 from '../assets/best1.png';
import best2 from '../assets/best2.png';
import best3 from '../assets/best3.png';
import best4 from '../assets/best4.png';
import { Link } from 'react-router-dom';

const Bestsellers = () => {
    const data = [
        {
            id: 1,
            imgsrc: best1,
            description: "Twice the treat: Buy 1 Get 1 Free!",
            link: "/women",
        },
        {
            id: 2,
            imgsrc: best3,
            description: "Your Daily Dose Of Street Cool",
            link: "/men",
        },
        {
            id: 3,
            imgsrc: best4,
            description: "Get Chillin' In Style",
            link: "/men",
        },
        {
            id: 4,
            imgsrc: best2,
            description: "Save big at a combo carnival",
            link: "/women",
        },
    ];

    return (
        <div className='bg-slate-50 p-2 mt-8'>
            <div className="">
                <div className="flex gap-4 items-center">
                    <img src={yellow_rec} className="w-4 xl:w-6 lg:w-5" alt="Yellow Rectangle" />
                    <h1 className="text-3xl text-[#67ae38] font-semibold p-12">Bestsellers</h1>
                </div>
            </div>
            <div className="flex justify-center items-center flex-wrap gap-4">
                <div className="flex justify-center w-full">
                    {data.slice(0, 2).map((item, i) => (
                        <div key={i} className="max-w-[600px] flex flex-col items-center relative">
                            <Link to={item.link}>
                                <img src={item.imgsrc} alt={`Bestseller ${i + 1}`} className="w-[500px] h-[500px]" />
                                <div className="absolute top-0 left-0 bg-black bg-opacity-75 text-white p-2">{item.description}</div>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center w-full">
                    {data.slice(2, 4).map((item, i) => (
                        <div key={i} className="max-w-[600px] flex flex-col items-center relative">
                            <Link to={item.link}>
                                <img src={item.imgsrc} alt={`Bestseller ${i + 3}`} className="w-[500px] h-[500px]" />
                                <div className="absolute top-0 left-0 bg-black bg-opacity-75 text-white p-2">{item.description}</div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Bestsellers;
