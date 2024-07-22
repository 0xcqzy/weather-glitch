const Nav = () => {
    return (
        <div className="sm:absolute sm:top-5">
            <nav className="sm:h-full sm:w-full sm:grid sm:grid-rows-5  lg:flex gap-12 lg:p-2" >
                <div className="sm:rotate-270 uppercase">date</div>
                <div className="sm:rotate-270 uppercase">time</div>
                <div className="sm:rotate-270 uppercase">place</div>
                <div className="sm:rotate-270 uppercase">temp</div>
                <div className="sm:rotate-270 uppercase">uv</div>
            </nav>
        </div>
    )
}

export default Nav; 