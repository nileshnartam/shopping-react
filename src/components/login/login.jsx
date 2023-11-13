import './login.css';

export function Login(){
    return (
            <section className="vh-100">
            <div className="container py-5 h-100">
                <div className="row d-flex align-items-center justify-content-center h-100">
                <div className="col-md-8 col-lg-7 col-xl-6">
                    <img src={'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg'}
                    className="img-fluid" alt="Phone image" />
                </div>
                <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                <form action="/examples/actions/confirmation.php" method="post">
                    <div class="mb-3">
                        <label class="form-label" for="inputEmail">Email</label>
                        <input type="email" class="form-control" id="inputEmail" placeholder="Email" required />
                    </div>
                    <div class="mb-3">
                        <label class="form-label" for="inputPassword">Password</label>
                        <input type="password" class="form-control" id="inputPassword" placeholder="Password" required />
                    </div>
                    <div class="mb-3">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="checkRemember" />
                            <label class="form-check-label" for="checkRemember">Remember me</label>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </form>
                </div>
                </div>
            </div>
            </section>        
    );
}