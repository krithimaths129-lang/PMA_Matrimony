/* =====================================================
PMA MATRIMONY
GLOBAL JAVASCRIPT
===================================================== */

/* =====================================================
PASSWORD TOGGLE
===================================================== */

function togglePassword(inputId) {
const input =
    document.getElementById(inputId);

if (!input) return;

const button =
    input.parentElement.querySelector(
        ".password-toggle"
    );


if (input.type === "password") {

    input.type = "text";

    button.textContent = "Hide";

} else {

    input.type = "password";

    button.textContent = "Show";

}

}

/* =====================================================
LOGIN
===================================================== */

const loginForm =
document.getElementById("loginForm");

if (loginForm) {

loginForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const loginId =
            document
                .getElementById("loginId")
                .value
                .trim();


        const password =
            document
                .getElementById("password")
                .value;


        const loginIdError =
            document.getElementById(
                "loginIdError"
            );


        const passwordError =
            document.getElementById(
                "passwordError"
            );


        const loginSuccess =
            document.getElementById(
                "loginSuccess"
            );


        loginIdError.textContent = "";

        passwordError.textContent = "";

        loginSuccess.textContent = "";


        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        const mobilePattern =
            /^[6-9]\d{9}$/;


        const validEmail =
            emailPattern.test(loginId);


        const validMobile =
            mobilePattern.test(loginId);


        let valid = true;


        if (!validEmail && !validMobile) {

            loginIdError.textContent =
                "Enter a valid email address or 10-digit mobile number.";

            valid = false;

        }


        if (password.length === 0) {

            passwordError.textContent =
                "Please enter your password.";

            valid = false;

        }


        if (!valid) return;


        /*
           FRONTEND DEMO AUTHENTICATION

           Real authentication should later
           be handled by your Node.js backend.
        */

        const demoEmail =
            "demo@pma.com";

        const demoMobile =
            "9876543210";

        const demoPassword =
            "PMA@123";


        const correctUser =
            loginId === demoEmail ||
            loginId === demoMobile;


        if (
            !correctUser ||
            password !== demoPassword
        ) {

            passwordError.textContent =
                "Incorrect login credentials. Please try again.";

            return;

        }


        localStorage.setItem(
            "pmaLoggedIn",
            "true"
        );


        localStorage.setItem(
            "pmaUser",
            loginId
        );


        loginSuccess.textContent =
            "Login successful. Redirecting...";


        setTimeout(function () {

            window.location.href =
                "homepage.html";

        }, 800);

    }
);

}

/* =====================================================
SIGNUP
===================================================== */

const signupForm =
document.getElementById("signupForm");

if (signupForm) {

signupForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const firstName =
            document
                .getElementById("firstName")
                .value
                .trim();


        const email =
            document
                .getElementById("signupEmail")
                .value
                .trim();


        const mobile =
            document
                .getElementById("signupMobile")
                .value
                .trim();


        const age =
            document.getElementById("age").value;


        const gender =
            document.getElementById("gender").value;


        const password =
            document
                .getElementById("signupPassword")
                .value;


        const terms =
            document.getElementById("terms").checked;


        const emailError =
            document.getElementById(
                "signupEmailError"
            );


        const mobileError =
            document.getElementById(
                "signupMobileError"
            );


        const signupError =
            document.getElementById(
                "signupError"
            );


        emailError.textContent = "";

        mobileError.textContent = "";

        signupError.textContent = "";


        let valid = true;


        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        const mobilePattern =
            /^[6-9]\d{9}$/;


        if (!emailPattern.test(email)) {

            emailError.textContent =
                "Please enter a valid email address.";

            valid = false;

        }


        if (!mobilePattern.test(mobile)) {

            mobileError.textContent =
                "Enter a valid 10-digit mobile number.";

            valid = false;

        }


        if (
            firstName === "" ||
            age === "" ||
            gender === "" ||
            password.length < 6
        ) {

            signupError.textContent =
                "Please complete all required fields. Password must contain at least 6 characters.";

            valid = false;

        }


        if (!terms) {

            signupError.textContent =
                "Please accept the Terms & Privacy Policy.";

            valid = false;

        }


        if (!valid) return;


        localStorage.setItem(
            "pmaSignupEmail",
            email
        );


        localStorage.setItem(
            "pmaSignupMobile",
            mobile
        );


        localStorage.setItem(
            "pmaSignupName",
            firstName
        );


        window.location.href =
            "profile_setup.html";

    }
);

}

/* =====================================================
DATE VALIDATION - DD/MM/YYYY
===================================================== */

function isValidDateOfBirth(dateString) {

const pattern =
    /^(\d{2})\/(\d{2})\/(\d{4})$/;


const match =
    dateString.match(pattern);


if (!match) return false;


const day =
    Number(match[1]);


const month =
    Number(match[2]);


const year =
    Number(match[3]);


if (
    month < 1 ||
    month > 12 ||
    day < 1 ||
    day > 31
) {

    return false;

}


const date =
    new Date(
        year,
        month - 1,
        day
    );


if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
) {

    return false;

}


/*
   Matrimony profile should be 18+.
*/

const today =
    new Date();


let age =
    today.getFullYear() - year;


const birthdayNotReached =
    (
        today.getMonth() < month - 1
    ) ||
    (
        today.getMonth() === month - 1 &&
        today.getDate() < day
    );


if (birthdayNotReached) {

    age--;

}


if (age < 18) {

    return false;

}


return true;

}

/* =====================================================
AUTO FORMAT DOB
===================================================== */

const dobInput =
document.getElementById("dob");

if (dobInput) {

dobInput.addEventListener(
    "input",
    function () {

        let value =
            this.value.replace(
                /\D/g,
                ""
            );


        if (value.length > 8) {

            value =
                value.substring(
                    0,
                    8
                );

        }


        if (value.length >= 5) {

            value =
                value.substring(0, 2) +
                "/" +
                value.substring(2, 4) +
                "/" +
                value.substring(4);

        } else if (value.length >= 3) {

            value =
                value.substring(0, 2) +
                "/" +
                value.substring(2);

        }


        this.value = value;

    }
);


}

/* =====================================================
PROFILE SETUP
===================================================== */

const profileForm =
document.getElementById("profileForm");

if (profileForm) {


profileForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const profileError =
            document.getElementById(
                "profileError"
            );


        const dobError =
            document.getElementById(
                "dobError"
            );


        profileError.textContent = "";

        dobError.textContent = "";


        let valid = true;


        /* BASIC DETAILS */

        const name =
            document
                .getElementById("profileName")
                .value
                .trim();


        const dob =
            document
                .getElementById("dob")
                .value
                .trim();


        const gender =
            document
                .getElementById("profileGender")
                .value;


        const state =
            document
                .getElementById("state")
                .value;


        const city =
            document
                .getElementById("city")
                .value;


        /* EDUCATION */

        const education =
            document
                .getElementById("education")
                .value;


        const profession =
            document
                .getElementById("profession")
                .value
                .trim();


        /* LIFESTYLE */

        const diet =
            document
                .getElementById("diet")
                .value;


        /* PARTNER PREFERENCES */

        const ageFrom =
            Number(
                document
                    .getElementById(
                        "preferredAgeFrom"
                    )
                    .value
            );


        const ageTo =
            Number(
                document
                    .getElementById(
                        "preferredAgeTo"
                    )
                    .value
            );


        /* =========================
           REQUIRED VALIDATION
        ========================= */


        if (name === "") {

            profileError.textContent =
                "Please enter your full name.";

            valid = false;

        }


        if (!isValidDateOfBirth(dob)) {

            dobError.textContent =
                "Please enter a valid date in DD/MM/YYYY format. You must be at least 18 years old.";

            valid = false;

        }


        if (gender === "") {

            profileError.textContent =
                "Please select your gender.";

            valid = false;

        }


        if (state === "") {

            profileError.textContent =
                "Please select your state or union territory.";

            valid = false;

        }


        if (city === "") {

            profileError.textContent =
                "Please select your city.";

            valid = false;

        }


        if (education === "") {

            profileError.textContent =
                "Please select your highest education.";

            valid = false;

        }


        if (profession === "") {

            profileError.textContent =
                "Please enter your profession.";

            valid = false;

        }


        if (diet === "") {

            profileError.textContent =
                "Please select your food preference.";

            valid = false;

        }


        if (
            !ageFrom ||
            !ageTo
        ) {

            profileError.textContent =
                "Please enter your preferred partner age range.";

            valid = false;

        }


        if (
            ageFrom &&
            ageTo &&
            (
                ageFrom < 18 ||
                ageTo > 80 ||
                ageFrom > ageTo
            )
        ) {

            profileError.textContent =
                "Please enter a valid preferred age range.";

            valid = false;

        }


        if (!valid) {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

            return;

        }


        /* =========================
           SAVE PROFILE DATA
        ========================= */

        const profileData = {

            name:
                name,

            dob:
                dob,

            gender:
                gender,

            religion:
                document
                    .getElementById("religion")
                    .value,

            community:
                document
                    .getElementById("community")
                    .value,

            motherTongue:
                document
                    .getElementById("motherTongue")
                    .value,

            state:
                state,

            city:
                city,

            education:
                education,

            profession:
                profession,

            company:
                document
                    .getElementById("company")
                    .value,

            income:
                document
                    .getElementById("income")
                    .value,

            familyType:
                document
                    .getElementById("familyType")
                    .value,

            familyValues:
                document
                    .getElementById("familyValues")
                    .value,

            siblings:
                document
                    .getElementById("siblings")
                    .value,

            familyLocation:
                document
                    .getElementById(
                        "familyLocation"
                    )
                    .value,

            familyAbout:
                document
                    .getElementById(
                        "familyAbout"
                    )
                    .value,

            lifestyle: {

                diet:
                    diet,

                smoking:
                    document
                        .getElementById("smoking")
                        .value,

                drinking:
                    document
                        .getElementById("drinking")
                        .value,

                fitness:
                    document
                        .getElementById("fitness")
                        .value,

                hobbies:
                    document
                        .getElementById("hobbies")
                        .value,

                aboutMe:
                    document
                        .getElementById("aboutMe")
                        .value

            },

            preferences: {

                ageFrom:
                    ageFrom,

                ageTo:
                    ageTo,

                religion:
                    document
                        .getElementById(
                            "preferredReligion"
                        )
                        .value,

                location:
                    document
                        .getElementById(
                            "preferredLocation"
                        )
                        .value,

                education:
                    document
                        .getElementById(
                            "preferredEducation"
                        )
                        .value,

                profession:
                    document
                        .getElementById(
                            "preferredProfession"
                        )
                        .value,

                diet:
                    document
                        .getElementById(
                            "preferredDiet"
                        )
                        .value,

                family:
                    document
                        .getElementById(
                            "preferredFamily"
                        )
                        .value,

                lifestyle:
                    document
                        .getElementById(
                            "preferredLifestyle"
                        )
                        .value,

                marriageIntent:
                    document
                        .getElementById(
                            "marriageIntent"
                        )
                        .value,

                description:
                    document
                        .getElementById(
                            "partnerDescription"
                        )
                        .value

            }

        };


        localStorage.setItem(
            "pmaProfile",
            JSON.stringify(profileData)
        );


        localStorage.setItem(
            "pmaProfileComplete",
            "true"
        );


        /*
           For the current frontend prototype,
           profile completion takes the user
           to the homepage.
        */

        window.location.href =
            "homepage.html";

    }
);


}

/* =====================================================
SAVE PROFILE DRAFT
===================================================== */

function saveProfileDraft() {


const form =
    document.getElementById(
        "profileForm"
    );


if (!form) return;


const formData =
    new FormData(form);


const draft = {};


formData.forEach(
    function (value, key) {

        draft[key] = value;

    }
);


localStorage.setItem(
    "pmaProfileDraft",
    JSON.stringify(draft)
);


alert(
    "Your profile draft has been saved."
);


}

/* =====================================================
LOGOUT
===================================================== */

function logoutUser() {


localStorage.removeItem(
    "pmaLoggedIn"
);

localStorage.removeItem(
    "pmaUser"
);

window.location.href =
    "landing_page.html";


}

/* =====================================================
HOMEPAGE PROTECTION
===================================================== */

if (
window.location.pathname.includes(
"homepage.html"
)
) {


const loggedIn =
    localStorage.getItem(
        "pmaLoggedIn"
    );


const profileComplete =
    localStorage.getItem(
        "pmaProfileComplete"
    );


if (
    !loggedIn &&
    !profileComplete
) {

    window.location.href =
        "login.html";

}

}

/* =====================================================
MOBILE NUMBER INPUT
===================================================== */

document.addEventListener(
"DOMContentLoaded",
function () {


    const mobileInputs =
        document.querySelectorAll(
            'input[type="tel"]'
        );


    mobileInputs.forEach(
        function (input) {

            input.addEventListener(
                "input",
                function () {

                    this.value =
                        this.value.replace(
                            /\D/g,
                            ""
                        );

                }
            );

        }
    );

}

);

/* =====================================================
   PREMIUM SPLASH BUFFER
   Intercepts landing page links that lead to
   login.html / signup.html, plays the splash,
   then navigates while still fully opaque so the
   destination page never flashes the landing page.
===================================================== */

(function () {

    const overlay =
        document.getElementById("splashOverlay");

    if (!overlay) return;


    /* Only intercept links on the landing page. */

    const links = document.querySelectorAll(
        'a[href="login.html"], a[href="signup.html"]'
    );

    if (!links.length) return;

/*
   If the page is restored from the browser's
   back-forward cache (e.g. user pressed Back),
   reset the overlay so the landing page is
   visible again.
*/

window.addEventListener("pageshow", function (event) {

    if (event.persisted || overlay.classList.contains("active")) {

        overlay.classList.remove("active");
        overlay.classList.remove("fade-out");
        overlay.setAttribute("aria-hidden", "true");

        navigating = false;
    }

});

    let navigating = false;


    /*
       Timings must match the CSS animation delays.

       Animations:
         - letters:  0.20s → 0.70s start, each 0.35s
         - sub:      starts 1.00s, 0.7s duration  → ends 1.70s
         - divider:  starts 1.25s, 0.7s duration  → ends 1.95s
         - quote:    starts 1.50s, 0.9s duration  → ends 2.40s
    */

    const TOTAL_SPLASH_TIME = 2400; // wait for quote to finish

    const MIN_VISIBLE_TIME  = 200;  // ensure the overlay has painted


    links.forEach(function (link) {

        link.addEventListener("click", function (event) {

            event.preventDefault();

            if (navigating) return;
            navigating = true;


            const target =
                link.getAttribute("href");


            /* Show the overlay. */

            overlay.classList.add("active");
            overlay.setAttribute("aria-hidden", "false");


            /*
               Navigate while the overlay is STILL fully
               opaque. Do NOT add .fade-out — that is what
               caused the landing page to flash through.

               The destination page (login/signup) has the
               same white/ivory background, so the transition
               is seamless.
            */

            setTimeout(function () {

                window.location.href = target;

            }, TOTAL_SPLASH_TIME);

        });

    });

})();
/* =====================================================
   AUTH VIEW SWITCHER + FORGOT PASSWORD FLOW
   Sign In ↔ Forgot Password inside login.html
===================================================== */

(function () {

    /* ---------------------------------------------
       VIEW SWITCHER
    --------------------------------------------- */

    const viewSignIn = document.getElementById("viewSignIn");
    const viewForgot = document.getElementById("viewForgot");

    /* If we're not on the login page, stop here. */
    if (!viewSignIn || !viewForgot) return;


    const forgotLink  = document.getElementById("forgotPassword");
    const backToLogin = document.getElementById("backToLogin");


    function showView(view) {

        document
            .querySelectorAll(".auth-view")
            .forEach(function (v) {
                v.classList.remove("active");
            });

        view.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    /* "Forgot password?" link → open Forgot view */

    if (forgotLink) {

        forgotLink.addEventListener("click", function (e) {

            e.preventDefault();

            resetForgotFlow();

            showView(viewForgot);

        });

    }


    /* "← Back to Sign In" link → return to login */

    if (backToLogin) {

        backToLogin.addEventListener("click", function (e) {

            e.preventDefault();

            showView(viewSignIn);

        });

    }


    /* ---------------------------------------------
       STAGE A — SEND OTP
    --------------------------------------------- */

    const sendOtpBtn      = document.getElementById("sendOtpBtn");
    const resetIdInput    = document.getElementById("resetId");
    const resetIdError    = document.getElementById("resetIdError");
    const resetSuccess    = document.getElementById("resetSuccess");
    const otpTarget       = document.getElementById("otpTarget");

    const stageIdentifier = document.getElementById("stageIdentifier");
    const stageOtp        = document.getElementById("stageOtp");


    const emailPattern  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobilePattern = /^[6-9]\d{9}$/;


    if (sendOtpBtn) {

        sendOtpBtn.addEventListener("click", function () {

            resetIdError.textContent = "";
            resetSuccess.textContent = "";

            const value = resetIdInput.value.trim();

            const validEmail  = emailPattern.test(value);
            const validMobile = mobilePattern.test(value);


            if (!validEmail && !validMobile) {

                resetIdError.textContent =
                    "Enter a valid email address or 10-digit mobile number.";

                return;
            }


            /*
               FRONTEND DEMO ONLY.

               Real OTP generation and delivery must
               happen on the backend (Node.js):

                 POST /api/auth/request-otp
                 body: { identifier: value }
            */


            otpTarget.textContent = value;

            resetSuccess.textContent =
                "OTP sent successfully. Please check your inbox.";


            stageIdentifier.classList.add("hidden");
            stageOtp.classList.remove("hidden");


            /* Focus the first OTP box shortly after reveal */

            setTimeout(function () {

                const firstBox =
                    document.querySelector(".otp-input");

                if (firstBox) firstBox.focus();

            }, 100);

        });

    }


    /* ---------------------------------------------
       STAGE B — OTP INPUT BEHAVIOUR
    --------------------------------------------- */

    const otpInputs = document.querySelectorAll(".otp-input");
    const otpError  = document.getElementById("otpError");


    if (otpInputs.length) {

        otpInputs.forEach(function (input, index) {

            /* Digits only + auto-advance */

            input.addEventListener("input", function () {

                this.value =
                    this.value.replace(/\D/g, "").slice(0, 1);

                this.classList.toggle(
                    "filled",
                    this.value !== ""
                );


                if (
                    this.value &&
                    index < otpInputs.length - 1
                ) {

                    otpInputs[index + 1].focus();

                }


                otpError.textContent = "";

            });


            /* Backspace moves focus backward */

            input.addEventListener("keydown", function (e) {

                if (
                    e.key === "Backspace" &&
                    !this.value &&
                    index > 0
                ) {

                    otpInputs[index - 1].focus();

                }

            });


            /* Paste a full 6-digit OTP */

            input.addEventListener("paste", function (e) {

                const pasted =
                    (
                        e.clipboardData ||
                        window.clipboardData
                    )
                        .getData("text")
                        .replace(/\D/g, "")
                        .slice(0, 6);


                if (!pasted) return;

                e.preventDefault();


                pasted.split("").forEach(function (digit, i) {

                    if (otpInputs[i]) {

                        otpInputs[i].value = digit;

                        otpInputs[i].classList.add("filled");

                    }

                });


                const next =
                    otpInputs[
                        Math.min(
                            pasted.length,
                            otpInputs.length - 1
                        )
                    ];


                if (next) next.focus();

            });

        });

    }


    /* ---------------------------------------------
       STAGE B — VERIFY
    --------------------------------------------- */

    const verifyOtpBtn = document.getElementById("verifyOtpBtn");


        if (verifyOtpBtn) {

        verifyOtpBtn.addEventListener("click", function () {

            otpError.textContent = "";

            let otp = "";


            otpInputs.forEach(function (i) {
                otp += i.value;
            });


            if (otp.length !== 6) {

                otpError.textContent =
                    "Please enter all 6 digits of the OTP.";

                return;
            }


            /*
               FRONTEND DEMO ONLY.

               Real verification must happen on the backend:

                 POST /api/auth/verify-otp
                 body: { identifier, otp }

               On success, the backend returns a short-lived
               reset token that the client stores temporarily.
            */


            /* Remember the identifier for Stage C display */

            const verifiedTarget =
                document.getElementById("verifiedTarget");

            if (verifiedTarget) {
                verifiedTarget.textContent =
                    otpTarget.textContent;
            }


            /* Advance to Stage C */

            stageOtp.classList.add("hidden");
            stageNewPassword.classList.remove("hidden");


            setTimeout(function () {

                const firstPwd =
                    document.getElementById("newPassword");

                if (firstPwd) firstPwd.focus();

            }, 100);

        });

    }
        /* ---------------------------------------------
       STAGE C — RESET PASSWORD
    --------------------------------------------- */

    const stageNewPassword  =
        document.getElementById("stageNewPassword");

    const stageSuccess      =
        document.getElementById("stageSuccess");

    const newPasswordInput  =
        document.getElementById("newPassword");

    const confirmPasswordInput =
        document.getElementById("confirmPassword");

    const newPasswordError  =
        document.getElementById("newPasswordError");

    const confirmPasswordError =
        document.getElementById("confirmPasswordError");

    const resetPasswordBtn  =
        document.getElementById("resetPasswordBtn");


    if (resetPasswordBtn) {

        resetPasswordBtn.addEventListener("click", function () {

            newPasswordError.textContent = "";
            confirmPasswordError.textContent = "";

            const pwd     = newPasswordInput.value;
            const confirm = confirmPasswordInput.value;

            let valid = true;


            if (pwd.length < 6) {

                newPasswordError.textContent =
                    "Password must be at least 6 characters.";

                valid = false;
            }


            if (pwd !== confirm) {

                confirmPasswordError.textContent =
                    "Passwords do not match.";

                valid = false;
            }


            if (!valid) return;


            /*
               FRONTEND DEMO ONLY.

               Real reset must happen on the backend:

                 POST /api/auth/reset-password
                 body: { identifier, resetToken, newPassword }
            */


            stageNewPassword.classList.add("hidden");
            stageSuccess.classList.remove("hidden");

        });

    }


    /* ---------------------------------------------
       STAGE D — BACK TO SIGN IN
    --------------------------------------------- */

    const goToLoginBtn =
        document.getElementById("goToLoginBtn");


    if (goToLoginBtn) {

        goToLoginBtn.addEventListener("click", function () {

            resetForgotFlow();
            showView(viewSignIn);

            /* Focus the login ID for convenience */

            const loginIdField =
                document.getElementById("loginId");

            if (loginIdField) loginIdField.focus();

        });

    }


    /* ---------------------------------------------
       RESET FLOW WHEN RE-ENTERING FORGOT VIEW
    --------------------------------------------- */

        function resetForgotFlow() {

        if (resetIdInput)  resetIdInput.value = "";
        if (resetIdError)  resetIdError.textContent = "";
        if (resetSuccess)  resetSuccess.textContent = "";
        if (otpError)      otpError.textContent = "";


        otpInputs.forEach(function (i) {

            i.value = "";
            i.classList.remove("filled");

        });


        if (newPasswordInput)      newPasswordInput.value = "";
        if (confirmPasswordInput)  confirmPasswordInput.value = "";
        if (newPasswordError)      newPasswordError.textContent = "";
        if (confirmPasswordError)  confirmPasswordError.textContent = "";


        const verifiedTarget =
            document.getElementById("verifiedTarget");

        if (verifiedTarget) verifiedTarget.textContent = "";


        if (stageIdentifier)  stageIdentifier.classList.remove("hidden");
        if (stageOtp)         stageOtp.classList.add("hidden");
        if (stageNewPassword) stageNewPassword.classList.add("hidden");
        if (stageSuccess)     stageSuccess.classList.add("hidden");

    }})();
