import { useState, useEffect } from "react";

export const useScrollTop = (threshold = 10) => {
    const [scrolled, setScrolled]= useState(false)

    useEffect(() => {
        const handelScroll = () => {
            if(window.scrollY > threshold){
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", handelScroll)
        return() => window.removeEventListener("scroll", handelScroll)
    }, [threshold]);

    return scrolled;
}