const CoffeeBean = (props) => {
    const { className, width=51, height=67 } = props
    return (
        <svg className={className} width={width} height={height} viewBox="0 0 61 77" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_105_2)">
                <path fillRule="evenodd" clipRule="evenodd" d="M40.916 20.0661C31.716 24.0661 36.368 32.4101 26.664 36.0461C26.664 36.0461 22.18 30.3181 28.264 22.6261C34.308 15.0021 40.916 20.0661 40.916 20.0661ZM25.408 52.9421C25.408 52.9421 21.192 56.1741 17.34 51.3101C13.488 46.4461 16.416 42.5701 16.416 42.5701C22.168 44.9301 19.536 50.4021 25.408 52.9421ZM17.808 40.6501C17.808 40.6501 22.112 37.3341 26.1 42.4901C30.26 47.8661 27.192 51.2901 27.192 51.2901C21.652 48.9421 23.596 43.1101 17.828 40.6501H17.808ZM43.84 21.1981C43.84 21.1981 48.64 26.5741 42.132 35.0021C35.88 43.0821 29.132 37.8861 29.132 37.8861C38.192 34.0301 34.3 24.9061 43.86 21.1981H43.84ZM36.712 46.9381C38.98 52.5381 33.48 55.2821 35.816 61.1021C35.816 61.1021 30.428 60.4021 31.256 53.9381C32.116 47.1941 36.712 46.9381 36.712 46.9381ZM39.084 47.1461C39.084 47.1461 44.348 47.8421 43.632 54.0021C42.912 60.2221 38.104 60.8381 38.104 60.8381C35.708 55.1021 41.44 53.0941 39.084 47.1381V47.1461Z" fill="black" />
            </g>
            <defs>
                <filter id="filter0_d_105_2" x="-3.54803" y="0.738098" width="68" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_105_2" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_105_2" result="shape" />
                </filter>
            </defs>
        </svg>

    )
}

export default CoffeeBean