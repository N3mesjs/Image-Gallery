"use client"

import Image from 'next/image'
import { useState } from 'react'

import img1 from '../public/image1.jpg'
import img2 from '../public/image2.jpg'
import img3 from '../public/image3.jpg'
import img4 from '../public/image4.jpg'
import img5 from '../public/image5.jpg'

export default function HomePage() {
    const imageArray = [img1, img2, img3, img4, img5];
    const [imageIndex, setImageIndex] = useState(0);

    const prevButton = () => {
        if (imageIndex === 0) {
            setImageIndex(imageArray.length - 1);
        } else {
            setImageIndex(imageIndex - 1);
        }
    };

    const nextButton = () => {
        if (imageIndex === imageArray.length - 1) {
            setImageIndex(0);
        } else {
            setImageIndex(imageIndex + 1);
        }
    };

    return (
        <div className="container">

            {/* Uso map perche effettivamente ho bisogno di un metodo che mi permetta di eseguire una funzione per ogni elemento e che possa ritornare un valore, in se map ritorna un nuovo array. In questo modo posso fare il return delle singole immagini */}

            {imageArray.map((val, i) => (
                <div key={i} className='imageCarrousel' style={{ transform: `translateX(-${imageIndex * 100}%)` }}>
                    <Image src={val} alt="car image" fill />
                </div>
            ))}

            {/* Left Button (prev) */}
            <div className='absolute top-1/2 -translate-y-1/2'>
                <button onClick={prevButton} className='bg-white p-4 m-2 rounded-full'>Prev</button>
            </div>

            {/* Right Button (next) */}
            <div className='absolute top-1/2 right-0 -translate-y-1/2'>
                <button onClick={nextButton} className='bg-white p-4 m-2 rounded-full'>Next</button>
            </div>

            <div className='bottoni'>
                {imageArray.map((_, i) => {
                    if (i === imageIndex) {
                        return <button className='p-3 rounded-full bg-white' key={i} onClick={() => setImageIndex(i)} />;
                    } else {
                        return <button className='p-3 rounded-full bg-[#424242a3]' key={i} onClick={() => setImageIndex(i)} />;
                    }
                })}
            </div>
        </div>
    )
}
