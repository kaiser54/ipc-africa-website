<template>
  <div class="wrapper">
    <nav>
      <!-- <input type="checkbox" id="nav-toggle" /> -->
      <router-link :to="{ name: 'home' }"
        ><img src="./assets/logo.png" alt="IPC logo"
      /></router-link>

      <ul :class="{ nav_toggle: isActive }" @click="toggleNav">
        <li>
          <router-link :to="{ name: 'about' }">About Us</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'services' }">Services</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'blog' }">Blog</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'about' }">Contact Us</router-link>
        </li>
        <li class="btn">
          <router-link :to="{ name: 'about' }">
            <buttonFill />
          </router-link>
          <router-link :to="{ name: '' }" class="none">
            <buttonOutline />
          </router-link>
        </li>
      </ul>

      <div :class="{ nav_toggle: isActive }" class="disp-none">
        <label @click="toggleNav" class="icon-burger">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </label>
      </div>
    </nav>
  </div>
  <div style="min-height: calc(100vh - 150px)">
    <router-view />
</div>

  
  <div id="sitelock_shield_logo" class="fixed_btm">
    <a
      href="#"
      onclick="window.open('https://www.sitelock.com/verify.php?site=ipc-africa.com','SiteLock','width=600,height=600,left=160,top=170');"
      ><img
        class="img-fluid"
        alt="SiteLock"
        title="SiteLock"
        src="https://shield.sitelock.com/shield/ipc-africa.com"
    /></a>
  </div>
  <footercomp />
</template>

<script>
import buttonFill from "@/components/buttonFill.vue";
import buttonOutline from "@/components/buttonOutline.vue";
import footercomp from "@/components/footercomp.vue";
export default {
  components: {
    buttonFill,
    buttonOutline,
    footercomp,
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleNav() {
      this.isActive = !this.isActive;
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style>
@font-face {
  font-family: "GeneralSans-Semibold";
  src: url("./assets/GeneralSans_Complete/Fonts/WEB/fonts/GeneralSans-Semibold.woff");
  font-weight: 600;
  font-display: swap;
  font-style: normal;
}
@font-face {
  font-family: "GeneralSans-Medium";
  src: url("./assets/GeneralSans_Complete/Fonts/WEB/fonts/GeneralSans-Medium.woff");
  font-weight: 500;
  font-display: swap;
  font-style: normal;
}

@font-face {
  font-family: "GeneralSans-Regular";
  src: url("./assets/GeneralSans_Complete/Fonts/WEB/fonts/GeneralSans-Regular.woff");
  font-weight: 400;
  font-display: swap;
  font-style: normal;
}
a,
p,
h2 {
  text-decoration: none;
  font-family: "GeneralSans-Medium", "DM Sans", sans-serif;
  color: var(--fc-dark);
}

h1 {
  color: var(--fc-dark);
  font-family: "GeneralSans-Semibold", "DM Sans", sans-serif;
}

.none {
  display: none;
}

.wrapper {
  box-shadow: 0px 4px 12px rgba(23, 43, 77, 0.08);
  background: #ffffff;

  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 9;
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 120px;
  background: #ffffff;
  width: 85%;
  margin-inline: auto;
}

nav a:hover {
  color: var(--fc-blue);
}

.btn {
  display: flex;
  flex-direction: column;
  align-items: center;
}

nav img {
  width: 182.75px;
  height: 56px;
}

nav a {
  display: block;
  padding: 10px;
  white-space: nowrap;
}

ul {
  display: flex;
  list-style: none;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 30px;
}

/* #nav-toggle {
  position: absolute;
  top: -100px;
} */

nav .icon-burger {
  display: none;
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translateY(-50%);
}

nav .icon-burger .line {
  width: 20px;
  height: 2px;
  background-color: rgb(0, 0, 0);
  /* margin: 5px; */
  border-radius: 30px;
  transition: all 0.3s ease-in-out;
}

nav .icon-burger .line:nth-child(3) {
  width: 12px;
}

footer {
  background: #0009b3;
  padding: 72px 0 90px 0;
}

.footer-con {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;
  width: 85%;
  margin: auto;
}

footer .logo-p {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;

  width: 377px;
}

footer .logo-p img {
  width: 231.68px;
}

footer .logo-p p {
  font-size: 14px;
  line-height: 21px;
  max-width: 377px;

  letter-spacing: 0.01em;

  color: #ffffff;
}

.footer-con ul {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
}

.footer-con ul li a {
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.005em;

  color: #ffffff;
}

.socials {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
}

nav .disp-none {
  display: none;
}
.fixed_btm {
  position: fixed;
  bottom: 15px;
  right: 15px;
}

@media (max-width: 992px) {
  nav {
    width: 90%;
  }

  ul {
    gap: 15px;
  }
  nav .disp-none {
    display: block;
  }
}

@media screen and (max-width: 992px) {
  .none {
    display: block;
  }

  nav img {
    width: 130.54px;
    height: 40px;
  }

  nav ul {
    float: none;
    position: fixed;
    z-index: 9;
    left: 0;
    right: 0;
    top: 100px;
    bottom: 100%;
    width: auto;
    height: auto;
    flex-direction: column;
    margin-top: 60px;
    gap: 32px;
    /* justify-content: space-evenly; */
    background-color: rgb(255, 255, 255);
    overflow: hidden;
    box-sizing: border-box;
    transition: all 0.5s ease-in-out;
  }

  nav ul a {
    font-size: 20px;
  }

  ul.nav_toggle {
    bottom: 0 !important;
    margin-top: 19px;
    padding-top: 41px;
  }

  .nav_toggle .none {
    display: flex !important;
  }

  nav .icon-burger {
    /* display: block; */
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  nav .nav_toggle .icon-burger .line:nth-child(1) {
    transform: translateY(1px) rotate(225deg);
  }

  nav .nav_toggle .icon-burger .line:nth-child(3) {
    transform: translateY(-7.5px) rotate(-225deg);
    width: 20px;
  }

  nav .nav_toggle .icon-burger .line:nth-child(2) {
    opacity: 0;
  }

  li {
    width: 100%;
    margin-inline: auto;
    text-align: center;
  }

  .btn {
    display: block;
  }

  button {
    justify-content: center;
    width: 100%;
  }
  .footer-con {
    flex-direction: column;
    align-items: center;
    gap: 48px;
  }

  .footer-con .logo-p {
    align-items: center;
    text-align: center;
    max-width: 273px;
  }

  .footer-con .logo-p img {
    width: 124.27px;
  }
  nav a:active,
  nav a:focus-visible,
  nav a:focus,
  nav a:active,
  nav a:focus-visible,
  nav a:focus,
  .nav_toggle a:active,
  .nav_toggle a:focus-visible,
  .nav_toggle a:focus,
  .nav_toggle a:active,
  .nav_toggle a:focus-visible,
  .nav_toggle a:focus {
    color: var(--fc-blue) !important;
  }
}





.textframe h1 span {
  display: block;
}

@media screen and (max-width: 1200px) {
  .textframe p.snippet {
    font-size: 16px;
    line-height: 24px;
    /* or 150% */

    letter-spacing: 0.005em;
  }
  span {
    display: inline !important;
  }
}

.link-color {
  color: #0009b3 !important;
}





</style>
