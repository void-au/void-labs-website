"use client";

import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function MetaAnalytics() {
    const router = useRouter()

    useEffect(() => {
        import('react-facebook-pixel')
            .then((x) => x.default)
            .then((ReactPixel) => {
                ReactPixel.init('730865832281471')
                ReactPixel.pageView()
                router.events.on('routeChangeComplete', () => {
                    ReactPixel.pageView()
                })
            })
    }, [router.events])

    return <></>
}