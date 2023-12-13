


import PropTypes from "prop-types";

import Button from '~/components/button';

export default function StatsModal({ close }) {
    return (
        <div className='w-[600px] '>
            <div className="w-full h-[3.313rem] px-3 flex items-center justify-start">
                <div className="hover:bg-[color:var(--background-secondary)] rounded-full flex items-center justify-center p-2">
                    <button onClick={close} className="w-[1.25rem] h-[1.25rem]">
                        <svg viewBox="0 0 24 24">
                            <g>
                                <path
                                    fill="currentColor"
                                    d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"
                                ></path>
                            </g>
                        </svg>
                    </button>
                </div>
            </div>
            <div className='w-full '>
                <div className='h-full flex flex-col gap-y-8  bg-[color:var(--background-primary)] px-28 pt-10 pb-20  '>
                    <div className='h-full flex flex-col justify-center '>
                        <span className='text-white text-left text-[26px] font-bold '> Görüntülemeler</span>
                        <div className=' text-[color:var(--color-base-secondary)]'>Bu gönderinin görülme sayısı. Daha fazla bilgi almak için 
                            <a className='font-bold underline'> Yardım Merkezi</a>'ni ziyaret et.</div>
                    </div>
                    <Button size={"large"} variant={"white"} onClick={close} >Gizle</Button>
                </div>
            </div>
        </div>

    )
}

StatsModal.propTypes = {
    close: PropTypes.any,
};