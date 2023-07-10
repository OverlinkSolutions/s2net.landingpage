import * as React from 'react';
import banner from './banner.module.sass';
import bannerImg from '../../assets/images/banner.webp';
import bannerImgMobile from '../../assets/images/banner_mobile.webp';
import { useMediaQuery } from 'react-responsive';

export default function Banner() {

    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    return (
        <section id={banner.container} className='container'>
            <img src={isMobile ? bannerImgMobile : bannerImg} alt="Banner BatCarva" />
        </section>
    );
}