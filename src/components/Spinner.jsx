
import ClipLoader from "react-spinners/ClipLoader";

export const Spinner = ({ loading, title = '' }) => {
    if (!loading)
        return null

    return (
        <div className="spinner-load">
            <ClipLoader size={60} color={"#850068"} loading={loading} />

            {title && <p style={{ marginTop: '10px', color: 'white', margin: '2rem', fontSize: '13px'}}>{title}</p>}
        </div>
    )
}
