import { Icon } from 'Icons';
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useAudio } from 'react-use';
import { secondsToTime } from 'Utils';
import CustomRange from '../CustomRange';
import { useDispatch, useSelector } from 'react-redux'
import { setControls } from 'components/stores/player';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import FullScreenPlayer from 'components/FullScreenPlayer';

const Player = ({ toggle }) => {

	const handle = useFullScreenHandle();

	const dispatch = useDispatch()
	const { current } = useSelector(state => state.player)

	const [audio, state, controls, ref] = useAudio({
		src: current?.src
	});

	const volumeIcon = useMemo(() => {
		if (state.volume === 0) return 'volumeMuted';
		if (state.volume < 0.33) return 'volumeLow';
		if (state.volume < 0.66) return 'volumeNormal';
		return 'volumeHigh';
	}, [state.volume]);

	const handlePlay = () => {
		if (state.playing) {
			controls.pause();
		} else {
			controls.play();
		}
	};


	const handleNext = () => console.log("Next track functionality");
	const handlePrevious = () => console.log("Previous track functionality");
	const handleShuffle = () => console.log("Shuffle functionality");
	const handleRepeat = () => console.log("Repeat functionality");

	const toggleMute = () => {
		if (state.muted) {
			controls.unmute();
		} else {
			controls.mute();
		}
	};

	//useEffect(() => {
	//	if (current?.src) {
	//		controls.stop(); // Önceki sesi durdur
	//		controls.load(); // Yeni kaynağı yükle
	//		controls.play(); // Yeni kaynağı çalmaya başla
	//	}
	//}, [current, controls]);


	useEffect(() => {
		const audioElement = ref.current;

		const updateTime = () => {
			if (audioElement) {
				const currentTime = audioElement.currentTime;
				controls.seek(currentTime); // Güncel süreyi ayarla
				console.log("Updated time:", currentTime); // Debugging line
			}
		};

		if (audioElement) {
			audioElement.addEventListener('timeupdate', updateTime);
		}

		return () => {
			if (audioElement) {
				audioElement.removeEventListener('timeupdate', updateTime);
			}
		};
	}, [ref, controls]);



	return (
		<div className='flex px-4 justify-between items-center h-full'>
			<audio ref={ref} />

			<div className='min-w-[11.25rem] w-[30%] flex items-center'>
				{
					current && (
						<div className='flex items-center '>
							<div className='flex items-center'>
								<div className='w-14 h-14 mr-3 flex-shrink-0'>
									<img src={current.image} alt="" />
								</div>
								<div>
									<h6 className='text-sm line-clamp-1'>{current.title}</h6>
									<p className='text-[0.688rem] text-white text-opacity-70'>{current.artist}</p>
								</div>
							</div>
							<button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70' onClick={handleShuffle} aria-label="Shuffle">
								<Icon size={16} name='hearh' />
							</button>

							<button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70' onClick={handleShuffle} aria-label="Shuffle">
								<Icon size={16} name='pictureInPicture' />
							</button>
						</div>
					)
				}
			</div>
			<div className='flex flex-col items-center p-4'>
				<div className='flex items-center gap-x-2'>
					{/* Control buttons */}
					<button onClick={handleShuffle} aria-label="Shuffle">
						<Icon size={16} name='shuffle' />
					</button>
					<button onClick={handlePrevious} aria-label="Previous Track">
						<Icon size={16} name='playerPrev' />
					</button>
					<button onClick={handlePlay} aria-label={state.playing ? "Pause" : "Play"}>
						<Icon size={16} name={state.playing ? 'pause' : 'play'} />
					</button>
					<button onClick={handleNext} aria-label="Next Track">
						<Icon size={16} name='playerNext' />
					</button>
					<button onClick={handleRepeat} aria-label="Repeat">
						<Icon size={16} name='repeat' />
					</button>
				</div>

				<div className='mt-4 flex items-center gap-x-2 min-w-full'>
					<div className='text-[0.688rem] text-white text-opacity-70'>
						{secondsToTime(state.time)}
					</div>

					{state.duration > 0 && (
						<CustomRange
							step={0.1}
							min={0}
							max={state.duration}
							values={[state.time]} // Ensure this is an array
							onChange={value => controls.seek(value)}
						/>
					)}


					<div className='text-[0.688rem] text-white text-opacity-70'>
						{secondsToTime(state.duration)}
					</div>
				</div>
			</div>

			<div className='min-w-[11.25rem] w-[30%] flex items-center justify-end gap-x-4'>
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
				<button aria-label="Full Screen" onClick={handle.enter}>

					<Icon size={16} name='fullScreen' />
				</button>
			</div>
			<FullScreen handle={handle}>
				{
					handle.active && (
						<FullScreenPlayer
							toggle={toggle}
							state={state}
							controls={controls}
						/>
					)
				}
			</FullScreen>
		</div>
	);
};

export default Player;
