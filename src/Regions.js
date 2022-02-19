import {useState} from 'react';

const Regions = ({ regions, filter }) => {
	const [active, setActive] = useState('All');
    return (
        <div className='region-container'>
		
            {
                regions.map((region, index) => {
                    return (
						<span key={index} className={`region ${region === active && 'active'}`} onClick={() => {
							  filter(region);
							  setActive(region);
							}
						}>
							{region}
						</span>
					);
                })
            }
        </div>
    );
}

export default Regions;