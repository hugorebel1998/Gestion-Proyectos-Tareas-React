import { Navbar } from "./components/Navbar"

export const LayoutPrivate = ({ children }) => {
    return (
        <>
            <div className="private-layout">
            <Navbar />
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
