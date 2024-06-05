export const LayoutPublic = ({ children }) => {
    return (
        <div className="public-layout">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xs-12 col-sm-10 col-md-6 col-lg-4 col-xl-4">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
