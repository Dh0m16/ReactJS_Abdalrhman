import React from 'react';
import SocialItem from './SocialItem';

function Social() {
    return (
        <ul className="list-group">

            <SocialItem

                P={{
                    media: 'ITTIHAD',
                    id: 'ITTIHAD',
                    img: 'https://picsum.photos/60',

                }}
            />
            <SocialItem

                P={{
                    media: 'AlHILAL',
                    id: 'AlHILAL',
                    img: 'https://picsum.photos/61',

                }}
            />
            <SocialItem

                P={{
                    media: 'AlAHLY',
                    id: 'AlAHLY',
                    img: 'https://picsum.photos/62',

                }}
            />
            <SocialItem

                P={{
                    media: 'AlNASR',
                    id: 'AlNASR',
                    img: 'https://picsum.photos/63',

                }}
            />
            <SocialItem

                P={{
                    media: 'AlSHABAB',
                    id: 'AlSHABAB',
                    img: 'https://picsum.photos/64',
                }}
            />





        </ul>
    );
}

export default Social;
