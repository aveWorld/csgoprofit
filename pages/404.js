import Navbar from '../components/Navbar'

const error = () => (
    <div className="error">
        <Navbar />
        <div className="error_wrapper">
            <h1 className="error-title">404 - Page Not Found</h1>
            <img src="/gaben_404.png" alt="Gabe Newell" className="error-img"/>
        </div>
    </div>
)

export default error;