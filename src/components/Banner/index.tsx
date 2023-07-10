import banner from './banner.module.sass';
import bannerPng from '../../assets/images/banner.png';
import bannerWebpMobile from '../../assets/images/banner_mobile.webp';
import { useMediaQuery } from 'react-responsive';

export default function Banner() {

    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    return (
        <section id={banner.container} className='container'>
            <img src={isMobile ? bannerWebpMobile : bannerPng} alt="Banner BatCarva" />
        </section>
    );
}