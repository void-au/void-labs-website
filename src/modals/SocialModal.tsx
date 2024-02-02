"use client";

import Image from "next/image";

export interface Props {
    open: boolean;
    onClose: () => void;
}

export const SocialModal = (props: Props) => {
    return (
        <div className="modal" id={props.open ? "modal-open" : "modal-closed"}>
            <div className="modal-content">
                <span className="close" onClick={props.onClose}>&times;</span>
                <h2>Don't forget to Connect!</h2>

                <div className="socials-cons">
                    <div className="social-con" onClick={() => window.location.href = 'mailto:matt@voidstudios.com.au'}>
                        <Image src="/img/socials/mail.png" alt="Email" width={96} height={72} />
                    </div>
                    <div className="social-con" onClick={() => window.open('https://www.linkedin.com/company/97417693', '_blank')}>
                        <Image src="/img/socials/linkedin.png" alt="LinkedIn Logo" width={76} height={72} />
                    </div>
                    <div className="social-con" onClick={() => window.open('https://www.instagram.com/voidlabs_au', '_blank')}>
                        <Image src="/img/socials/insta.png" alt="Instagram Logo" width={80} height={80} />
                    </div>
                </div>
            </div>
        </div>
    );
}