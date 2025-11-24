'use client'
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { useRouter } from 'next/navigation';
import sal from 'sal.js';
import ScrollToTop from '@/ui/scroll-to-top';
import { get_wishlist_products } from '@/redux/features/wishlist-slice';
import { get_cart_courses } from '@/redux/features/cart-slice';
if (typeof window !== 'undefined') {
    require('bootstrap/dist/js/bootstrap');
}

export default function Wrapper({ children }) {
    const router = useRouter();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(get_wishlist_products());
        dispatch(get_cart_courses());
    }, [dispatch]);

    useEffect(() => {
        sal({ threshold: 0.1, once: true });
    }, [router.asPath]);

    return (
        <>
            {children}
            <ScrollToTop />
            <ToastContainer />
        </>
    )
}
