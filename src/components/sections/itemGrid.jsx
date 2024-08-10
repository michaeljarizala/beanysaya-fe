import React from "react"

const Section = (props) => {
    const { children } = props

    const newChildren = children && React.Children.map(children, child => {
        return React.cloneElement(child, { ...child.props, className: "flex-[30%] grow-0" });
    });

    return (
        <div className="flex flex-col md:flex-row gap-10 md:gap-[30px] md:flex-wrap">
            {newChildren}
        </div>
    )
}

export default Section