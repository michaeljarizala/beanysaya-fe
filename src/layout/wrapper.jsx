const Wrapper = (props) => {
    const { children } = props
    return (
        <div className="px-[20px] md:px-[200px]">
            { children }
        </div>
    )
}

export default Wrapper