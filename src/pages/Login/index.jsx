import React from 'react';
function Login() {
    return (
            <div>
                <div className="snipcart__box snipcart-signin snipcart-signin__box">
                    <h2 className="snipcart__font--subtitle snipcart-signin__title">Sign In</h2>
                    <p className="snipcart__font snipcart-signin__register">
                        Don't have an account?
                        <a
                        href="/register"
                        className="snipcart__font--black snipcart-signin__register-link"
                        >
                        Register
                        </a>
                    </p>
                    <form className="snipcart-form snipcart-signin__form">
                        
                        <div className="snipcart-form__field">
                        <label
                            htmlFor="email_6bfa37e5-8929-446f-9fe1-613a90d2f0bf"
                            className="snipcart-form__label"
                            >Email</label
                        >
                        <div className="snipcart-input snipcart-input--icon">
                            <svg
                            viewBox="0 0 64 64"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            alt=""
                            title=""
                            className="snipcart__icon--std snipcart-input__left-icon snipcart__icon"
                            >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M19.609 57c-2.131 0-4.107-.888-5.562-2.499-1.543-1.707-2.268-4.023-1.988-6.342l.856-7.167c.487-4.11 2.666-7.791 5.985-10.095l1.753 2.454c-2.609 1.812-4.329 4.725-4.715 7.989l-.859 7.17a5.074 5.074 0 001.242 3.999c.868.96 2.037 1.491 3.288 1.491H45.39c1.251 0 2.42-.531 3.288-1.491a5.074 5.074 0 001.242-3.999l-.855-7.167c-.39-3.267-2.107-6.177-4.72-7.992l1.754-2.454c3.319 2.307 5.501 5.988 5.989 10.098l.852 7.164c.28 2.319-.445 4.635-1.988 6.342C49.501 56.112 47.523 57 45.391 57H19.61zM18.8 19.5c0-7.443 6.147-13.5 13.7-13.5C40.054 6 46.2 12.057 46.2 19.5S40.053 33 32.5 33c-7.552 0-13.699-6.057-13.699-13.5zm3.045 0c0 5.79 4.78 10.5 10.655 10.5 5.875 0 10.655-4.71 10.655-10.5S38.376 9 32.5 9c-5.876 0-10.655 4.71-10.655 10.5z"
                                fill="currentColor"
                            ></path></svg
                            ><input
                            id="email_6bfa37e5-8929-446f-9fe1-613a90d2f0bf"
                            name="email"
                            type="email"
                            className="
                                snipcart-input__input
                                snipcart__font--secondary snipcart__font--bold
                            "
                            />
                        </div>
                        </div>
                        <div className="snipcart-form__field">
                        <label
                            htmlFor="password_6bfa37e5-8929-446f-9fe1-613a90d2f0bf"
                            className="snipcart-form__label"
                            >Password</label
                        >
                        <div
                            className="snipcart-input--togleable snipcart-input snipcart-input--icon"
                        >
                            <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            alt=""
                            title=""
                            className="snipcart-input__left-icon snipcart__icon"
                            >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M1.125 11.625c0-2.485 2.05-4.5 4.579-4.5 1.69 0 3.15.911 3.944 2.25h10.938l2.289 2.25-2.29 2.25h-1.717l-1.144-.563-1.145.563h-1.145l-1.144-.563-1.145.563H9.648a4.575 4.575 0 01-3.944 2.25c-2.529 0-4.579-2.015-4.579-4.5zm7.534-1.684A3.408 3.408 0 005.704 8.25c-1.893 0-3.434 1.514-3.434 3.375C2.27 13.485 3.81 15 5.704 15a3.408 3.408 0 002.955-1.69l.33-.56h3.886l.903-.444.511-.251.512.25.903.445h.605l.903-.444.512-.251.511.25.904.445h.973l1.144-1.125-1.144-1.125H8.989l-.33-.56zm-4.672 1.684c0-.933.77-1.688 1.717-1.688.948 0 1.717.755 1.717 1.688 0 .933-.77 1.688-1.717 1.688-.948 0-1.717-.755-1.717-1.688zm2.29 0a.568.568 0 00-.573-.563.568.568 0 00-.572.563c0 .31.257.563.572.563a.568.568 0 00.572-.563z"
                                fill="#989BA3"
                            ></path></svg
                            ><input
                            id="password_6bfa37e5-8929-446f-9fe1-613a90d2f0bf"
                            name="password"
                            type="password"
                            className="
                                snipcart-input__input
                                snipcart__font--secondary snipcart__font--bold
                            "
                            />
                        </div>
                        <a
                            href="/forgot-password"
                            className="snipcart-signin__forgot-password snipcart__font--black"
                            >Forgot your password?</a
                        >
                        </div>
                        <button
                        type="submit"
                        className="
                            snipcart-button-primary snipcart-submit snipcart-base-button
                            is-icon-right
                        "
                        >
                        <div className="snipcart-base-button__wrapper">
                            <div className="snipcart-base-button__label">Sign In</div>
                            <div className="snipcart-base-button__icon">
                            <svg
                                viewBox="0 0 64 64"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                alt=""
                                title=""
                                className="snipcart__icon"
                            >
                                <path
                                d="M51.364 30.158H6v3.423h45.628l-9.148 9.055L44.868 45 58 32 44.868 19l-2.388 2.364 8.884 8.794z"
                                fill="currentColor"
                                ></path>
                            </svg>
                            </div>
                        </div>
                        </button>
                    </form>
                </div>

            </div>

        );
    }
    
export default Login;
    