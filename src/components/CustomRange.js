import React from 'react';
import { Range } from 'react-range';

const CustomRange = ({ values, step, min, max, onChange }) => {
	return (
		<div className='w-full'>
			<Range
				step={step}
				min={min}
				max={max}
				values={values}
				onChange={onChange}
				onFinalChange={onChange}
				className="w-full h-7 flex"
				renderTrack={({ props, children }) => (
					<div
						{...props}
						className='h-1 w-full rounded-md self-center'
						style={{
							...props.style,
							backgroundColor: '#0bda51', // Çubuğun rengi
						}}
					>
						{children}
					</div>
				)}
				renderThumb={({ props }) => (
					<div
						{...props}
						className='h-4 w-4 rounded-full bg-white border-2 border-green-500'
						style={{
							...props.style,
							backgroundColor: '#fff', // Thumb'un rengi
						}}
					/>
				)}
			/>
		</div>
	);
}

export default CustomRange;
