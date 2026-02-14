const DynamicBackground = () => {
    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 1440 800"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: "absolute", top: 0, left: 0 }}
        >
            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "white", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "black", stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "red", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "white", stopOpacity: 1 }} />
                </linearGradient>
            </defs>
            <path fill="url(#grad1)" d="M0,400 C400,200 800,600 1440,400 L1440,800 L0,800 Z" />
            <path fill="url(#grad2)" d="M0,600 C400,800 800,400 1440,600 L1440,800 L0,800 Z" />
        </svg>
    );
};

export default DynamicBackground;