import ImagePlaceholder from "../icons/imagePlaceholder"
import Button from "../ui/button"

const Section = (props) => {
    const {
        className,
        imageAlignment="right",
        heading="Showcase some headlines!",
        caption="Talk about something great here. Focus on what you want to feature in this section.",
        imageSrc="",
        buttonLink="",
        customButtonAction=null
    } = props
    return (
        <div className={`
            flex
            ${imageAlignment==='left' ? 'flex-col md:flex-row-reverse' : 'flex-col-reverse md:flex-row'}
            ${className}
        `}>
            <div className="sm:flex-[100%] md:flex-[50%] flex-col p-10">
                <div className="max-w-[300px] text-4xl font-bold leading-[50px]">
                    {heading}
                </div>
                <div className="text-zinc-500 mt-5">
                    {caption}
                </div>
                {buttonLink && (
                    <div className="mt-7">
                        <Button className="w-[100%] md:max-w-[150px]" label="Order Now" link={buttonLink} onClick={customButtonAction ? (e) => customButtonAction(e) : null} />
                    </div>
                )}
            </div>
            <div className="flex-[50%] h-[auto] rounded-[100px]">
                {imageSrc ? (
                    <div className="flex items-center justify-center bg-slate-300 max-h-[500px] rounded-[100px]">
                        <img src={imageSrc} className="rounded-[50px]" alt={heading} />
                    </div>
                ) : (
                    <div className="flex items-center justify-center bg-slate-300 max-h-[500px]">
                        <ImagePlaceholder width={500} height={581} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Section