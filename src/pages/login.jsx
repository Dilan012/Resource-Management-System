import './login.css'
export function Login(){
    return(
        <div className='login-main'>
            <div className='nav-bar-login'>
                <h1>Admin Portal</h1>
            </div>
            <div className="login-container">
                
                <div>
                    <h1 className='login-header'>Log into Admin account</h1>           
                    <div className="login-form">   
                        <form>
                            <label htmlFor='username'>Username</label><br/>
                            <input type="text" id="username"></input><br/>
                            <label htmlFor="password">Password</label><br/>
                            <input type="password" id="password"></input><br/>
                            <input type="submit" cla/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}