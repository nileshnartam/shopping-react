import './netflix-register.css';

export function NetflixRegister(){
    return (
    <form className="mt-4">
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="input-group input-group-lg">
            <input type="email" placeholder="Your email address" className="form-control"/>
            <button className="btn btn-danger ms-2">
                Get Started <span className="bi bi-chevron-right"></span>
            </button>
        </div>
    </form>
    );
}