import React from 'react';
import { useSelector } from 'react-redux';
import { Icon } from 'Icons'; // Icon bileşenini uygun şekilde import et
import { secondsToTime } from 'Utils'; // Eğer secondsToTime yardımcı fonksiyonunu başka bir yerden alıyorsan
import CustomRange from '../components/CustomRange'; // CustomRange bileşenini uygun yerden import et

const FullScreenPlayer = ({ toggle, state, controls }) => {
	const { current } = useSelector((state) => state.player);

	// Play ve Pause kontrolü
	const handlePlay = () => {
		state.playing ? controls.pause() : controls.play();
	};

	// Diğer kontrol fonksiyonları
	const handleShuffle = () => {
		console.log('Shuffle clicked');
	};

	const handlePrevious = () => {
		console.log('Previous clicked');
	};

	const handleNext = () => {
		console.log('Next clicked');
	};

	const handleRepeat = () => {
		console.log('Repeat clicked');
	};

	// Ses kapatma/açma toggle fonksiyonu
	const toggleMute = () => {
		state.muted ? controls.unmute() : controls.mute();
	};

	// Ses ikonu duruma göre değiştiriliyor
	const volumeIcon = state.muted || state.volume === 0 ? 'volumeMuted' : 'volume';

	// Tam ekran fonksiyonu
	const handleFullScreen = () => {
		if (document.fullscreenElement) {
			document.exitFullscreen();
		} else {
			document.documentElement.requestFullscreen();
		}
	};


	return (
		<div className="bg-black-100 h-full flex flex-col items-center p-4 relative">
			{current && current.image ? (
				<div
					className="absolute inset-0 bg-cover bg-center"
					style={{ backgroundImage: `url(${current.image})`, zIndex: '-1' }} // Z-index'i düşürdük
				/>
			) : (
				<div className="absolute inset-0 bg-cover bg-center bg-gray-800" style={{ zIndex: '-1' }} />
			)}

			<div className='w-full absolute bottom-4 flex flex-col flex-col-reverse items-center px-4'>
				<div className='flex items-center gap-x-4 justify-start'>
					{/* Kontrol düğmeleri */}
					<button onClick={handleShuffle} aria-label="Shuffle">
						<Icon size={24} name='shuffle' />
					</button>
					<button onClick={handlePrevious} aria-label="Previous Track">
						<Icon size={24} name='playerPrev' />
					</button>
					<button onClick={handlePlay} aria-label={state.playing ? "Pause" : "Play"}>
						<Icon size={24} name={state.playing ? 'pause' : 'play'} />
					</button>
					<button onClick={handleNext} aria-label="Next Track">
						<Icon size={24} name='playerNext' />
					</button>
					<button onClick={handleRepeat} aria-label="Repeat">
						<Icon size={24} name='repeat' />
					</button>
				</div>

				<div className='min-w-[11.25rem] w-[30%] flex items-center justify-end gap-x-4 absolute right-4'>
					<button onClick={handleShuffle} aria-label="Queue">
						<Icon size={16} name='queue' />
					</button>
					<button onClick={handleShuffle} aria-label="Device">
						<Icon size={16} name='device' />
					</button>
					<button onClick={toggleMute} aria-label="Volume">
						<Icon size={16} name={volumeIcon} />
					</button>
					<div className='w-[5.813rem] max-w-full'>
						{state.volume > 0 && (
							<CustomRange
								step={0.01}
								min={0}
								max={1}
								values={[state.muted ? 0 : state.volume]}
								onChange={value => {
									if (value === 0) {
										controls.mute();
									} else {
										controls.unmute();
									}
									controls.volume(value);
								}}
							/>
						)}
					</div>
					<button aria-label="Full Screen" onClick={handleFullScreen}>
						<Icon size={16} name='fullScreen' />
					</button>
				</div>

				<div className='mt-4 flex items-center gap-x-2 min-w-full absolute bottom-3 left-4'>
					<div className='text-[0.688rem] text-white text-opacity-70'>
						{secondsToTime(state.time)}
					</div>

					{state.duration > 0 && (
						<CustomRange
							step={0.1}
							min={0}
							max={state.duration}
							values={[state.time]} // Bu array olarak olmalı
							onChange={value => controls.seek(value)}
						/>
					)}

					<div className='text-[0.688rem] text-white text-opacity-70'>
						{secondsToTime(state.duration)}
					</div>
				</div>

			</div>
		</div>
	);
};

export default FullScreenPlayer;
