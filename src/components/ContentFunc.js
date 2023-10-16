import Collapse from "./CollapseFunc";

export default function Content() {
    const customSet = {
        collapsedLabel: true,
        expandedLabel: false,
    }
    const collapse = (classAnimation) => {return (
        <div className={"collapse-container " + classAnimation}>
            <div className="card card-body">
                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
            </div>
        </div>
    )};

    return (
        <div className="content-container">
            <Collapse customSet={customSet}>{(isHidden) => (isHidden.expandedLabel ? collapse('open') : collapse('close'))}</Collapse>
        </div>
    )
}