import Resume from "../files/Zelazny_Resume.pdf"

const DownloadButton = props => {
    return (<a className="download-btn" href={Resume}>Zelazny Resume.pdf</a>)
}
export default DownloadButton;