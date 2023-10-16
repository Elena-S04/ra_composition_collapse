import { useState } from "react";

export default function Collapse({customSet, children}) {

    const [isHidden, setHidden] = useState(customSet || {
            collapsedLabel: true,
            expandedLabel: false,
    });

    const handleClick = () => {
        isHidden.collapsedLabel ? setHidden({collapsedLabel: false, expandedLabel: true}) : setHidden({collapsedLabel: true, expandedLabel: false})
    }

    return (
        <>
            <p>
                <a className="btn btn-primary" href="#collapseExample" role="button" onClick={handleClick}>
                    Link with href
                </a>
                <button className="btn btn-primary" type="button" onClick={handleClick}>
                    Button with data-bs-target
                </button>
            </p>
            {children(isHidden)}
        </>
    )
}