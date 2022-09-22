import React, { useState } from 'react';

const PickYourTrip = () => {
    const [projectSelected, setProjectSelected] = useState<boolean>(false);

    return (
        <div className={'hidden'}>
            <div className={'flex'}>
                <h2>Pick your <br /> trip</h2>
                <p>
                    Our team put together some trips to you to discover,
                    feel free to discover each of them.
                </p>
            </div>
            <ul className={'flex'}>
                <li className={'w-1/4 border-b-2 text-center p-2'}>James Conrad Architect</li>
                <li className={'w-1/4 border-b-2 text-center p-2'}>Trazo Vivo</li>
                <li className={'w-1/4 border-b-2 text-center p-2'}>Inspir Performance</li>
                <li className={'w-1/4 border-b-2 text-center p-2'}>Chally Bridge Farm</li>
            </ul>
        </div>
    )
};

export default PickYourTrip;
