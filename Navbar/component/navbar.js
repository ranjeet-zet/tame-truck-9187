
function navbar() {
    return `
    <img src="https://prod.smassets.net/assets/cms/cc/app/2.178.0/images/logo-surveymonkey.svg" alt="" id="nav_logo">

<!-- navbar middle part-->
<div id="nav_middle">
    <div id="nav_products">
        <h3>Products<i class="fa-solid fa-angle-down" id="nav_icon"></i></h3>
    </div>
    <div id="nav_solutions">
        <h3>Solutions<i class="fa-solid fa-angle-down" id="nav_icon"></i></h3>
    </div>
    
    <div id="nav_resources">
    <h3>Resources<i class="fa-solid fa-angle-down" id="nav_icon"></i></h3>
</div>

<div id="nav_plans">
    <h3>Plans & Pricing<i class="fa-solid fa-angle-down" id="nav_icon"></i></h3>
</div>


</div>


<!-- navbar right part-->
<div id="nav_right">
    <a href="login.html" id="logIn">Log in</a>
    <a href="signup.html" id="signUp">Sign up free</a>
</div>
   `
}

export default navbar;