export const LayoutPublic = ({ children }) => {
    return (
        <div className="public-layout">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
