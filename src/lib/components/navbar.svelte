<script>
    let navOpen = false;
    function handleNav() 
    {
       navOpen = !navOpen;
    }
</script>

<nav class="navbar">
    <div class="three-bar" on:click="{handleNav}" class:change={navOpen}>
        <div class="bar" id="bar1"></div>
        <div class="bar" id="bar2"></div>
        <div class="bar" id="bar3"></div>
      </div>
    <div>
    <div class="title">
        <h1><i class="fa-solid fa-pie"></i>Foodies</h1>
    </div>
    <div class="nav-links sidepanel" class:open = {navOpen} class:close = {!navOpen}>
        <a href="#d" class="closebtn" on:click={handleNav}>&times;</a>
        <ul>
            <li><a href="#a"><i class="fa-solid fa-user"></i><p>Account</p></a></li>
            <li><a href="#s"><i class="fa-solid fa-cart-shopping"></i><p>Cart</p></a></li>
            <li><a href="#s"><i class="fa-solid fa-heart"></i><p>Favourite</p></a></li>
            <li><a href="#a"><i class="fa-solid fa-user"></i><p>Support</p></a></li>
            <li><a href="#s"><i class="fa-solid fa-user"></i><p>About</p></a></li>
            <li><a href="#H"><i class="fa-solid fa-user"></i><p>Contact</p></a></li>
        </ul>
    </div> 
    </div>
    <div class="toggletheme">
        <i class="fa fa-moon-o" aria-hidden="true"></i>
        <span>Dark Mode</span>
    </div>
</nav>

<style>

.navbar
{
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  font-size: 18px;
  background-color: whitesmoke;
  border: none;
  
}

.navbar .three-bar
{
    padding-left: 20px;
}

.navbar .title h1
{
    font-size: 20px;
    font-weight: 1000;
}

.navbar .toggletheme
{
    padding-right: 10px;
    font-size: 20px;
    transition: 0.5s;

}
.navbar .toggletheme i
{
    cursor: pointer;
}

.three-bar
{
  display: inline-block;
  cursor: pointer;
}

.bar
{
  
  width: 35px;
  height: 5px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
  border-radius: 6px;
}

.change #bar1 {
  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
  transform: rotate(-45deg) translate(-9px, 6px);
}

.change #bar2 {opacity: 0;}

.change #bar3 
{
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}

/* The sidepanel menu */
.sidepanel 
{
  height: 100vh; /* Specify a height */
  width: 0; 
  position: fixed; 
  z-index: 1; /* Stay on top */
  top: 0px;
  right: 0px;
  background-color: #111; /* Black*/
  overflow-x: hidden;
  overflow-y: auto;
  padding-top: 60px; 
  transition: 0.75s; 
}


.sidepanel ul
{
    list-style-type: none;
}
.sidepanel::-webkit-scrollbar
{
    display: none;
}

.open
{
    width: 250px;
}

.close
{
    width: 0px;
}

.sidepanel a 
{
  display: flex;
  align-items: center;
  padding: 10px 15px;
  text-decoration: none;
  color: #818181;
  transition: 0.3s;

}

.nav-links li a i
{
    font-size: 20px;
    margin-right: 10px;
}

.sidepanel a:hover 
{
  color: #f1f1f1;
}

.sidepanel .closebtn
{
  position: absolute;
  top: 0;
  left: 0px;
  font-size: 36px;
}

</style>