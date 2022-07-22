
function navbar() {
    return `
    <div>
    <img
      src="https://prod.smassets.net/assets/cms/cc/app/2.178.0/images/logo-surveymonkey.svg"
      alt=""
      id="nav_logo"
    />
  </div>
  <div>
    <ul>
      <li id="pro">
        Products
        <span class="material-symbols-outlined"> expand_more </span>
      </li>
      <li id="sol">
        Solutions
        <span class="material-symbols-outlined"> expand_more</span>
      </li>
      <li id="res">
        Resorces
        <span class="material-symbols-outlined"> expand_more </span>
      </li>
      <li id="pri">
        Plans & Pricing
        
      </li>
    </ul>
  </div>
  <div id="nav_right">
    <button id="nav_login"><a href="login.html">Log in</a></button>
    <button id="nav_signup"><a href="signup.html">Sign up free</a></button>
  </div>
   `
}

export default navbar;