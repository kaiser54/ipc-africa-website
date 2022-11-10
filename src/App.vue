<template>
  <div class="wrapper">
    <nav>
      <input type="checkbox" id="nav-toggle" />
      <router-link :to="{ name: 'home' }"
        ><img src="./assets/logo.png" alt="IPC logo"
      /></router-link>

      <ul>
        <li>
          <router-link :to="{ name: 'about' }">About Us</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'about' }">Contact Us</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'home' }">Services</router-link>
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

      <label for="nav-toggle" class="icon-burger">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </label>
    </nav>
  </div>
  <router-view />

  <footer>
    <div class="footer-con">
      <div class="logo-p">
        <router-link :to="{ name: 'home' }"
          ><img src="./assets/ipcWhite.png" alt="IPC logo"
        /></router-link>
        <p>
          Independent Purchasing Company Ltd (IPC) is a food procurement,
          supply-chain, and logistics powerhouse that take responsibilities off
          businesses and consumers and keeps the supply chain running.
        </p>
      </div>
      <ul>
        <li>
          <router-link :to="{ name: 'about' }">About Us</router-link>
        </li>
        <li>
          <router-link :to="{ name: '' }">Contact Us</router-link>
        </li>
        <li>
          <a href="#services">go</a>
          <!-- <router-link :to="{ name: '#services' }">Services</router-link> -->
        </li>
      </ul>

      <div class="socials">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.34 5.46C17.1027 5.46 16.8707 5.53038 16.6733 5.66224C16.476 5.79409 16.3222 5.98151 16.2313 6.20078C16.1405 6.42005 16.1168 6.66133 16.1631 6.89411C16.2094 7.12689 16.3236 7.34071 16.4915 7.50853C16.6593 7.67635 16.8731 7.79064 17.1059 7.83694C17.3387 7.88324 17.5799 7.85948 17.7992 7.76866C18.0185 7.67783 18.2059 7.52402 18.3378 7.32668C18.4696 7.12935 18.54 6.89734 18.54 6.66C18.54 6.34174 18.4136 6.03652 18.1885 5.81147C17.9635 5.58643 17.6583 5.46 17.34 5.46ZM21.94 7.88C21.9206 7.0503 21.7652 6.2294 21.48 5.45C21.2257 4.78313 20.83 4.17928 20.32 3.68C19.8248 3.16743 19.2196 2.77418 18.55 2.53C17.7727 2.23616 16.9508 2.07721 16.12 2.06C15.06 2 14.72 2 12 2C9.28 2 8.94 2 7.88 2.06C7.04915 2.07721 6.22734 2.23616 5.45 2.53C4.78168 2.77665 4.17693 3.16956 3.68 3.68C3.16743 4.17518 2.77418 4.78044 2.53 5.45C2.23616 6.22734 2.07721 7.04915 2.06 7.88C2 8.94 2 9.28 2 12C2 14.72 2 15.06 2.06 16.12C2.07721 16.9508 2.23616 17.7727 2.53 18.55C2.77418 19.2196 3.16743 19.8248 3.68 20.32C4.17693 20.8304 4.78168 21.2234 5.45 21.47C6.22734 21.7638 7.04915 21.9228 7.88 21.94C8.94 22 9.28 22 12 22C14.72 22 15.06 22 16.12 21.94C16.9508 21.9228 17.7727 21.7638 18.55 21.47C19.2196 21.2258 19.8248 20.8326 20.32 20.32C20.8322 19.8226 21.2283 19.2182 21.48 18.55C21.7652 17.7706 21.9206 16.9497 21.94 16.12C21.94 15.06 22 14.72 22 12C22 9.28 22 8.94 21.94 7.88ZM20.14 16C20.1327 16.6348 20.0178 17.2637 19.8 17.86C19.6403 18.2952 19.3839 18.6884 19.05 19.01C18.7256 19.3405 18.3332 19.5964 17.9 19.76C17.3037 19.9778 16.6748 20.0927 16.04 20.1C15.04 20.15 14.67 20.16 12.04 20.16C9.41 20.16 9.04 20.16 8.04 20.1C7.38089 20.1123 6.72459 20.0109 6.1 19.8C5.68578 19.6281 5.31136 19.3728 5 19.05C4.66809 18.7287 4.41484 18.3352 4.26 17.9C4.01586 17.2952 3.88044 16.6519 3.86 16C3.86 15 3.8 14.63 3.8 12C3.8 9.37 3.8 9 3.86 8C3.86448 7.35106 3.98295 6.70795 4.21 6.1C4.38605 5.67791 4.65627 5.30166 5 5C5.30381 4.65617 5.67929 4.3831 6.1 4.2C6.70955 3.98004 7.352 3.86508 8 3.86C9 3.86 9.37 3.8 12 3.8C14.63 3.8 15 3.8 16 3.86C16.6348 3.86728 17.2637 3.98225 17.86 4.2C18.3144 4.36865 18.7223 4.64285 19.05 5C19.3777 5.30718 19.6338 5.68273 19.8 6.1C20.0223 6.70893 20.1373 7.35178 20.14 8C20.19 9 20.2 9.37 20.2 12C20.2 14.63 20.19 15 20.14 16ZM12 6.87C10.9858 6.87198 9.99496 7.17453 9.15265 7.73942C8.31035 8.30431 7.65438 9.1062 7.26763 10.0438C6.88089 10.9813 6.78072 12.0125 6.97979 13.0069C7.17886 14.0014 7.66824 14.9145 8.38608 15.631C9.10392 16.3474 10.018 16.835 11.0129 17.0321C12.0077 17.2293 13.0387 17.1271 13.9755 16.7385C14.9123 16.35 15.7129 15.6924 16.2761 14.849C16.8394 14.0056 17.14 13.0142 17.14 12C17.1413 11.3251 17.0092 10.6566 16.7512 10.033C16.4933 9.40931 16.1146 8.84281 15.6369 8.36605C15.1592 7.88929 14.5919 7.51168 13.9678 7.25493C13.3436 6.99818 12.6749 6.86736 12 6.87ZM12 15.33C11.3414 15.33 10.6976 15.1347 10.15 14.7688C9.60234 14.4029 9.17552 13.8828 8.92348 13.2743C8.67144 12.6659 8.6055 11.9963 8.73398 11.3503C8.86247 10.7044 9.17963 10.111 9.64533 9.64533C10.111 9.17963 10.7044 8.86247 11.3503 8.73398C11.9963 8.6055 12.6659 8.67144 13.2743 8.92348C13.8828 9.17552 14.4029 9.60234 14.7688 10.15C15.1347 10.6976 15.33 11.3414 15.33 12C15.33 12.4373 15.2439 12.8703 15.0765 13.2743C14.9092 13.6784 14.6639 14.0454 14.3547 14.3547C14.0454 14.6639 13.6784 14.9092 13.2743 15.0765C12.8703 15.2439 12.4373 15.33 12 15.33Z"
            fill="white"
          />
        </svg>

        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.12 5.32003H17V2.14003C16.0897 2.04538 15.1751 1.99865 14.26 2.00003C11.54 2.00003 9.67999 3.66003 9.67999 6.70003V9.32003H6.60999V12.88H9.67999V22H13.36V12.88H16.42L16.88 9.32003H13.36V7.05003C13.36 6.00003 13.64 5.32003 15.12 5.32003Z"
            fill="white"
          />
        </svg>

        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 5.80021C21.2483 6.1263 20.4534 6.34187 19.64 6.44021C20.4982 5.92753 21.1413 5.12099 21.45 4.17021C20.6436 4.65027 19.7608 4.98851 18.84 5.17021C18.2245 4.50278 17.405 4.05851 16.5098 3.90706C15.6147 3.75562 14.6945 3.90557 13.8938 4.3334C13.093 4.76123 12.4569 5.44274 12.0852 6.27105C11.7135 7.09935 11.6273 8.0276 11.84 8.91021C10.2094 8.82774 8.61444 8.40316 7.15865 7.66407C5.70287 6.92498 4.41885 5.8879 3.39 4.62021C3.02914 5.25038 2.83952 5.96403 2.84 6.69021C2.83872 7.36459 3.00422 8.02883 3.32176 8.62377C3.63929 9.21872 4.09902 9.72592 4.66 10.1002C4.00798 10.0825 3.36989 9.90751 2.8 9.59021V9.64021C2.80489 10.5851 3.13599 11.4993 3.73731 12.2282C4.33864 12.957 5.17326 13.4559 6.1 13.6402C5.74326 13.7488 5.37287 13.806 5 13.8102C4.74189 13.8072 4.48442 13.7838 4.23 13.7402C4.49391 14.553 5.00462 15.2634 5.69107 15.7724C6.37753 16.2814 7.20558 16.5638 8.06 16.5802C6.6172 17.7155 4.83588 18.3351 3 18.3402C2.66574 18.3413 2.33174 18.3213 2 18.2802C3.87443 19.4905 6.05881 20.1329 8.29 20.1302C9.82969 20.1462 11.3571 19.8552 12.7831 19.2743C14.2091 18.6934 15.505 17.8341 16.5952 16.7467C17.6854 15.6593 18.548 14.3656 19.1326 12.9411C19.7172 11.5166 20.012 9.98994 20 8.45021C20 8.28021 20 8.10021 20 7.92021C20.7847 7.33502 21.4615 6.61763 22 5.80021Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  </footer>
</template>

<script>
import buttonFill from "@/components/buttonFill.vue";
import buttonOutline from "@/components/buttonOutline.vue";
export default {
  components: {
    buttonFill,
    buttonOutline,
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
  font-family: "GeneralSans-Medium" !important;
  color: var(--fc-dark);
}

h1 {
  color: var(--fc-dark);
  font-family: "GeneralSans-Semibold";
}

.none {
  display: none;
}

.wrapper {
  box-shadow: 0px 4px 12px rgba(23, 43, 77, 0.08);
  background: #ffffff;

  position: fixed;
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

#nav-toggle {
  position: absolute;
  top: -100px;
}

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

@media (max-width: 992px) {
  nav {
    width: 90%;
  }

  ul {
    gap: 15px;
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

  nav :checked ~ ul {
    bottom: 0;
    margin-top: 19px;
    padding-top: 41px;
  }

  nav :checked ~ .none {
    display: flex;
  }

  nav .icon-burger {
    /* display: block; */
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  nav :checked ~ .icon-burger .line:nth-child(1) {
    transform: translateY(1px) rotate(225deg);
  }

  nav :checked ~ .icon-burger .line:nth-child(3) {
    transform: translateY(-7.5px) rotate(-225deg);
    width: 20px;
  }

  nav :checked ~ .icon-burger .line:nth-child(2) {
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
}
</style>
