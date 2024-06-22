"use client";
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Movie from '../movie/movie';

const calculateItemsToShow = (containerWidth) => {
    
    const itemWidth = 120;
   
    const spacing = 16;
    
    const availableWidth = containerWidth - spacing;
    
    
    let maxItemsDesktop = Math.floor(availableWidth / (itemWidth + spacing));
    let maxItemsTablet = Math.floor(availableWidth / (itemWidth + spacing));
    let maxItemsMobile = Math.floor(availableWidth / itemWidth);

    
    maxItemsDesktop = Math.max(maxItemsDesktop, 1);
    maxItemsTablet = Math.max(maxItemsTablet, 1);
    maxItemsMobile = Math.max(maxItemsMobile, 1);

    return {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: maxItemsDesktop
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: maxItemsTablet
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: maxItemsMobile
        }
    };
};

const MultiItemCarousel = () => {
    
    const [containerWidth, setContainerWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        const handleResize = () => {
            setContainerWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const responsive = calculateItemsToShow(containerWidth);

    const movies = [
        { imageSrc: "/images/image1.jpg", title: "Título do Filme 1" },
        { imageSrc: "/images/image2.jpg", title: "Título do Filme 2" },
        { imageSrc: "/images/image3.jpg", title: "Título do Filme 3" },
        { imageSrc: "/images/image4.jpg", title: "Título do Filme 4" },
        { imageSrc: "/images/image5.jpg", title: "Título do Filme 5" },
        { imageSrc: "/images/image6.jpg", title: "Título do Filme 6" },
        { imageSrc: "/images/image7.jpg", title: "Título do Filme 7" },
        { imageSrc: "/images/image8.jpg", title: "Título do Filme 8" },
        { imageSrc: "/images/image9.jpg", title: "Título do Filme 9" },
        { imageSrc: "/images/image10.jpg", title: "Título do Filme 10" },
        { imageSrc: "/images/image11.jpg", title: "Título do Filme 11" },
        { imageSrc: "/images/image12.jpg", title: "Título do Filme 12" },
        { imageSrc: "/images/image13.jpg", title: "Título do Filme 13" },
        { imageSrc: "/images/image14.jpeg", title: "Título do Filme 14" },
        { imageSrc: "/images/image15.jpg", title: "Título do Filme 15" },
        { imageSrc: "/images/image16.jpg", title: "Título do Filme 16" },
        { imageSrc: "/images/image17.jpg", title: "Título do Filme 17" },
        { imageSrc: "/images/image18.jpg", title: "Título do Filme 18" },
        { imageSrc: "/images/image19.jpg", title: "Título do Filme 19" },
        { imageSrc: "/images/image20.jpg", title: "Título do Filme 20" },
    ];

    return (
        <Carousel responsive={responsive} autoPlay={true} infinite={true}>
            {movies.map((movie, index) => (
                <Movie key={index} imageSrc={movie.imageSrc} title={movie.title} />
            ))}
        </Carousel>
    );
};

export default MultiItemCarousel;