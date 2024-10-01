import React from 'react';

const HomeIcon = ({ size }) => {
	return (
		<svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
			{/* Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com 
			License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
			<path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
		</svg>
	);
}

const SearchIcon = ({ size }) => {
	return (
		<svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
			{/* Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com 
			License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
			<path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
		</svg>
	);
}

const CollectionIcon = ({ size }) => {
	return (
		<svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
			{/* Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com 
			License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
			<path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
		</svg>
	);
}

const PlusIcon = ({ size }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={size} height={size}>
			{/* Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com
			License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
			<path fill='CurrentColor' d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
		</svg>
	);
}

const HeartIcon = ({ size }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
			{/* Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com
			License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
			<path fill='CurrentColor' d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
		</svg>
	);
}


const DownloadIcon = ({ size }) => {
	return (
		<svg fill='CurrentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
			{/* Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
			<path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 416z" />
		</svg>
	);
}

const PrevIcon = ({ size }) => (
	<svg fill='CurrentColor' width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
		{/* Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com 
		License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
		<path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
	</svg>
);

const NextIcon = ({ size }) => (
	<svg fill='CurrentColor' width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
		{/* Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com 
		License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
		<path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
	</svg>
);


const PlayIcon = ({ size = 24, color = 'currentColor' }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 384 512"
		width={size}
		height={size}
		fill={color}
	>
		<path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
	</svg>
);

const PauseIcon = ({ size = 24, color = 'currentColor' }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 320 512"
		width={size}
		height={size}
		fill={color}
	>
		<path d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z" />
	</svg>
);

const PlayerPrevIcon = ({ size = 24, color = 'currentColor' }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 320 512"
		width={size}
		height={size}
		fill={color}
	>
		<path d="M267.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29l0-320c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160L64 241 64 96c0-17.7-14.3-32-32-32S0 78.3 0 96L0 416c0 17.7 14.3 32 32 32s32-14.3 32-32l0-145 11.5 9.6 192 160z" />
	</svg>
);
const PlayerNextIcon = ({ size = 24, color = 'currentColor' }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 320 512"
		width={size}
		height={size}
		fill={color}
	>
		<path d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416L0 96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241l0-145c0-17.7 14.3-32 32-32s32 14.3 32 32l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-145-11.5 9.6-192 160z" />
	</svg>
);

const ShuffleIcon = ({ size = 24, color = 'currentColor' }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 512 512"
		width={size}
		height={size}
		fill={color}
	>
		<path d="M403.8 34.4c12-5 25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6l0-32-32 0c-10.1 0-19.6 4.7-25.6 12.8L284 229.3 244 176l31.2-41.6C293.3 110.2 321.8 96 352 96l32 0 0-32c0-12.9 7.8-24.6 19.8-29.6zM164 282.7L204 336l-31.2 41.6C154.7 401.8 126.2 416 96 416l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c10.1 0 19.6-4.7 25.6-12.8L164 282.7zm274.6 188c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6l0-32-32 0c-30.2 0-58.7-14.2-76.8-38.4L121.6 172.8c-6-8.1-15.5-12.8-25.6-12.8l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c30.2 0 58.7 14.2 76.8 38.4L326.4 339.2c6 8.1 15.5 12.8 25.6 12.8l32 0 0-32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64z" />
	</svg>
);

const RepeatIcon = ({ size = 24, color = 'currentColor' }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 512 512"
		width={size}
		height={size}
		fill={color}
	>
		<path d="M0 224c0 17.7 14.3 32 32 32s32-14.3 32-32c0-53 43-96 96-96l160 0 0 32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9S320 19.1 320 32l0 32L160 64C71.6 64 0 135.6 0 224zm512 64c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 53-43 96-96 96l-160 0 0-32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-32 160 0c88.4 0 160-71.6 160-160z" />
	</svg>
);

const QueueIcon = ({ size = 24, color = 'currentColor' }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 576 512"
		width={size}
		height={size}
		fill={color}
	>
		<path d="M151.6 42.4C145.5 35.8 137 32 128 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L96 146.3 96 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-301.7 32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 480l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0-128l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0-128l160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0-128l224 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32z" />
	</svg>
);

const DeviceIcon = ({ size = 24, color = 'currentColor' }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 640 512"
		width={size}
		height={size}
		fill={color}
	>
		<path d="M128 32C92.7 32 64 60.7 64 96l0 256 64 0 0-256c0-17.7 14.3-32 32-32s32 14.3 32 32l0 256 64 0 0-256c0-35.3-28.7-64-64-64zm384 0c-35.3 0-64 28.7-64 64l0 256 64 0 0-256c0-17.7 14.3-32 32-32s32 14.3 32 32l0 256 64 0 0-256c0-35.3-28.7-64-64-64zm-192 448c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32zm224 0c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32zm-224-128c-88.4 0-160-71.6-160-160V64h320v224c0 88.4-71.6 160-160 160z" />
	</svg>
);

const FullScreenIcon = ({ size = 24, color = 'currentColor' }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 448 512"
		width={size}
		height={size}
		fill={color}
	>
		<path d="M32 32C14.3 32 0 46.3 0 64l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96z" />
	</svg>
);

const PictureInPictureIcon = ({ size = 24, color = 'currentColor' }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 512 512"
		width={size}
		height={size}
		fill={color}
	>
		<path d="M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6l96 0 32 0 208 0c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
	</svg>
);

const VolumeMutedIcon = ({ size = 24, color = 'currentColor' }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 576 512"
		width={size}
		height={size}
		fill={color}
	>
		<path d="M301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" />
	</svg>
);

const VolumeLowIcon = ({ size = 24, color = 'currentColor' }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 448 512"
		width={size}
		height={size}
		fill={color}
	>
		<path d="M301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM412.6 181.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5z" />
	</svg>
);

const VolumeNormalIcon = ({ size = 24, color = 'currentColor' }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 576 512"
		width={size}
		height={size}
		fill={color}
	>
		<path d="M301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" />
	</svg>
);

const VolumeHighIcon = ({ size = 24, color = 'currentColor' }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 576 512"
		width={size}
		height={size}
		fill={color}
	>
		<path d="M301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM439.1 256c0-14.1-1.4-27.7-4.1-40.7-11.3-3.5-21.7-8.8-31.1-15.2 4.6-3.2 9.1-6.8 13.1-10.5C437.8 215.7 448 236.6 448 256s-10.2 40.3-30.6 56.4c-3.8-3.7-8.3-7.3-13-10.5 9.4-6.5 19.8-11.7 31.1-15.2 2.7-13.1 4.1-26.7 4.1-40.7z" />
	</svg>
);




const Icon = ({ name, size = 24 }) => {
	const icons = {
		home: HomeIcon,
		search: SearchIcon,
		collection: CollectionIcon,
		plus: PlusIcon,
		heart: HeartIcon,
		download: DownloadIcon,
		prev: PrevIcon,
		next: NextIcon,
		play: PlayIcon,
		pause: PauseIcon,
		playerPrev: PlayerPrevIcon,
		playerNext: PlayerNextIcon,
		shuffle: ShuffleIcon,
		repeat: RepeatIcon,
		queue: QueueIcon,
		device: DeviceIcon,
		fullScreen: FullScreenIcon,
		pictureInPicture: PictureInPictureIcon,
		volumeMuted: VolumeMutedIcon,
		volumeLow: VolumeLowIcon,
		volumeNormal: VolumeNormalIcon,
		volumeHigh: VolumeHighIcon,
	};

	const Component = icons[name];
	return Component ? <Component size={size} /> : null;
};

export { Icon };
