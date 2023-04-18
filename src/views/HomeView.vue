<template>
  <head>
    <title>
      Independent Purchasing Company - Food procurement, supply-chain, and logistics
      powerhouse
    </title>
    <meta
      name="description"
      content="Independent Purchasing Company is a leading provider of transportation and logistics services for businesses of all sizes. We offer a wide range of services including trucking, shipping, and warehousing."
    />
    <meta
      name="keywords"
      content="logistics, transportation, trucking, shipping, warehousing, supply chain"
    />
    <meta
      data-n-head="ssr"
      data-hid="og:description"
      name="og:description"
      property="og:description"
      content="Independent Purchasing Company Ltd (IPC) is a food procurement, supply-chain, and logistics powerhouse that take responsibilities off businesses and consumers and keeps the supply chain running."
    />
    <meta name="author" content="Independent Purchasing Company" />
    <meta name="geo.region" content="NG-LA" />
    <meta name="geo.placename" content="Lekki, Lagos" />
    <meta name="geo.position" content="6.4422;3.3903" />
    <meta name="ICBM" content="6.4422, 3.3903" />
  </head>
  <div class="header">
    <div class="main">
      <div class="bubbles">
        <!-- <img :src="img" alt=""> -->
        <img src="../assets/bubble.png" />
        <img src="../assets/bubble.png" />
        <img src="../assets/bubble.png" />
        <img src="../assets/bubble.png" />
        <img src="../assets/bubble.png" />
      </div>
      <div class="content-group">
        <div class="content">
          <div class="md">
            <div class="text">
              <h1>Enjoy a Hassle-Free hustle today.</h1>
              <p>
                Independent Purchasing Company Ltd (IPC) is a food procurement,
                supply-chain, and logistics powerhouse that take responsibilities off
                businesses and consumers and keeps the supply chain running.
              </p>
            </div>
            <div class="btn">
              <router-link :to="{ name: 'about' }">
                <buttonFill />
              </router-link>
              <router-link :to="{ name: '' }" style="display: flex">
                <buttonOutline />
              </router-link>
            </div>
          </div>
        </div>
        <imgGroup />
      </div>
    </div>
  </div>

  <div class="" id="services">
    <services />
    <div class="container max-width">
      <div class="container-wrapper">
        <div class="wrap">
          <div class="text-group">
            <p class="small-head">BUILT FOR YOU</p>
            <p class="med-head">Reduce your average cost of production</p>
            <p class="body-copy">
              With IPC you can do this by taking advantage of our economics of scale, even
              when you do not buy a lot. As we procure directly from farmers and
              manufacturers to get you the best at unbeatable prices.
            </p>
          </div>
          <div>
            <router-link :to="{ name: '' }">
              <buttonFill />
            </router-link>
          </div>
        </div>
        <div>
          <img src="../assets/Frame.png" alt="" />
        </div>
      </div>
    </div>

    <div class="container">
      <div class="section-group text-group2">
        <div class="text-group2 text-group">
          <p class="small-head">HOW IT WORKS</p>
          <p class="med-head">Steps to a Hassle-Free hustle</p>
          <p class="body-copy">
            We offer you supply chain credits that allows you operate and serve customers
            without delay
          </p>
        </div>
        <div class="body-svg">
          <div class="svg-p-p">
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="60" height="60" rx="30" fill="#EFE7F7" />
              <path
                d="M44.1167 22.2834C44.1167 22.2834 44.1167 22.2834 44.1167 22.1501L44.0167 21.9001C43.9819 21.847 43.9429 21.7969 43.9 21.7501C43.8554 21.6795 43.8053 21.6126 43.75 21.5501L43.6 21.4334L43.3334 21.3001L30.8334 13.5834C30.5685 13.4179 30.2624 13.3301 29.95 13.3301C29.6377 13.3301 29.3316 13.4179 29.0667 13.5834L16.6667 21.3001L16.5167 21.4334L16.3667 21.5501C16.3114 21.6126 16.2613 21.6795 16.2167 21.7501C16.1738 21.7969 16.1348 21.847 16.1 21.9001L16 22.1501C16 22.1501 16 22.1501 16 22.2834C15.9836 22.4274 15.9836 22.5728 16 22.7168V37.2834C15.9995 37.5667 16.0711 37.8454 16.2081 38.0932C16.3452 38.3411 16.5432 38.55 16.7834 38.7001L29.2833 46.4168C29.3603 46.4643 29.4449 46.4981 29.5334 46.5168C29.5334 46.5168 29.6167 46.5168 29.6667 46.5168C29.9487 46.6062 30.2514 46.6062 30.5333 46.5168C30.5333 46.5168 30.6167 46.5168 30.6667 46.5168C30.7552 46.4981 30.8397 46.4643 30.9167 46.4168L43.3334 38.7001C43.5735 38.55 43.7715 38.3411 43.9086 38.0932C44.0456 37.8454 44.1172 37.5667 44.1167 37.2834V22.7168C44.1331 22.5728 44.1331 22.4274 44.1167 22.2834ZM28.3334 42.0168L19.1667 36.3501V25.7168L28.3334 31.3668V42.0168ZM30 28.4834L20.6667 22.7168L30 16.9667L39.3334 22.7168L30 28.4834ZM40.8334 36.3501L31.6667 42.0168V31.3668L40.8334 25.7168V36.3501Z"
                fill="#6112B3"
              />
            </svg>
            <p class="para-head">You order</p>
            <p class="para-child">
              At IPC, we are offering a credit facility that allows you to make purchase
              and make payments later within 7 days.
            </p>
          </div>
          <div class="svg-p-p">
            <svg
              width="61"
              height="60"
              viewBox="0 0 61 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0.333374" width="60" height="60" rx="30" fill="#FFFAE6" />
              <path
                d="M24.5001 38.3333C24.9421 38.3333 25.366 38.1577 25.6786 37.8451C25.9912 37.5325 26.1667 37.1086 26.1667 36.6666C26.1749 36.5556 26.1749 36.4442 26.1667 36.3333C26.1485 36.2288 26.1148 36.1277 26.0667 36.0333C26.0303 35.927 25.9798 35.8262 25.9167 35.7333L25.7167 35.4833C25.5582 35.3315 25.3713 35.2126 25.1667 35.1333C24.8552 34.9866 24.5059 34.94 24.1667 34.9999L23.8667 35.0999L23.5667 35.2499C23.4794 35.3115 23.3959 35.3782 23.3167 35.4499L23.1167 35.6999C23.0537 35.7928 23.0032 35.8937 22.9667 35.9999C22.9187 36.0944 22.885 36.1955 22.8667 36.2999C22.8586 36.4109 22.8586 36.5223 22.8667 36.6333C22.8667 37.0753 23.0423 37.4992 23.3549 37.8118C23.6675 38.1243 24.0914 38.2999 24.5334 38.2999L24.5001 38.3333ZM37.8334 38.3333C38.2754 38.3333 38.6994 38.1577 39.0119 37.8451C39.3245 37.5325 39.5001 37.1086 39.5001 36.6666C39.5083 36.5556 39.5083 36.4442 39.5001 36.3333C39.4818 36.2288 39.4481 36.1277 39.4001 36.0333C39.3636 35.927 39.3132 35.8262 39.2501 35.7333L39.0501 35.4833C38.8881 35.336 38.7021 35.2177 38.5001 35.1333C38.0943 34.9666 37.6392 34.9666 37.2334 35.1333C37.0314 35.2177 36.8454 35.336 36.6834 35.4833L36.4834 35.7333C36.4203 35.8262 36.3699 35.927 36.3334 36.0333C36.2854 36.1277 36.2517 36.2288 36.2334 36.3333C36.2252 36.4442 36.2252 36.5556 36.2334 36.6666C36.2353 37.1038 36.4088 37.5228 36.7167 37.8333C37.0121 38.1355 37.4113 38.3142 37.8334 38.3333ZM32.8334 18.3333H29.5001C29.0581 18.3333 28.6341 18.5088 28.3216 18.8214C28.009 19.134 27.8334 19.5579 27.8334 19.9999C27.8334 20.4419 28.009 20.8659 28.3216 21.1784C28.6341 21.491 29.0581 21.6666 29.5001 21.6666H32.8334C33.2754 21.6666 33.6994 21.491 34.0119 21.1784C34.3245 20.8659 34.5001 20.4419 34.5001 19.9999C34.5001 19.5579 34.3245 19.134 34.0119 18.8214C33.6994 18.5088 33.2754 18.3333 32.8334 18.3333ZM41.1667 13.3333H21.1667C19.8407 13.3333 18.5689 13.86 17.6312 14.7977C16.6935 15.7354 16.1667 17.0072 16.1667 18.3333V38.3333C16.1696 39.3648 16.4915 40.3703 17.0883 41.2117C17.6851 42.0531 18.5275 42.6894 19.5001 43.0333V44.9999C19.5001 45.4419 19.6757 45.8659 19.9882 46.1784C20.3008 46.491 20.7247 46.6666 21.1667 46.6666C21.6088 46.6666 22.0327 46.491 22.3453 46.1784C22.6578 45.8659 22.8334 45.4419 22.8334 44.9999V43.3333H39.5001V44.9999C39.5001 45.4419 39.6757 45.8659 39.9882 46.1784C40.3008 46.491 40.7247 46.6666 41.1667 46.6666C41.6088 46.6666 42.0327 46.491 42.3453 46.1784C42.6578 45.8659 42.8334 45.4419 42.8334 44.9999V43.0333C43.806 42.6894 44.6484 42.0531 45.2452 41.2117C45.8419 40.3703 46.1638 39.3648 46.1667 38.3333V18.3333C46.1667 17.0072 45.64 15.7354 44.7023 14.7977C43.7646 13.86 42.4928 13.3333 41.1667 13.3333ZM42.8334 38.3333C42.8334 38.7753 42.6578 39.1992 42.3453 39.5118C42.0327 39.8243 41.6088 39.9999 41.1667 39.9999H21.1667C20.7247 39.9999 20.3008 39.8243 19.9882 39.5118C19.6757 39.1992 19.5001 38.7753 19.5001 38.3333V33.3333H42.8334V38.3333ZM42.8334 29.9999H19.5001V18.3333C19.5001 17.8912 19.6757 17.4673 19.9882 17.1547C20.3008 16.8422 20.7247 16.6666 21.1667 16.6666H41.1667C41.6088 16.6666 42.0327 16.8422 42.3453 17.1547C42.6578 17.4673 42.8334 17.8912 42.8334 18.3333V29.9999Z"
                fill="#FFCC00"
              />
            </svg>
            <p class="para-head">We deliver</p>
            <p class="para-child">
              Get your food supply delivered in 24hrs. Fast, intact and fresh.
            </p>
          </div>
          <div class="svg-p-p">
            <svg
              width="61"
              height="60"
              viewBox="0 0 61 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0.666748" width="60" height="60" rx="30" fill="#E6F9F2" />
              <path
                d="M45.1167 26.1499L34.0001 19.7332C33.3241 19.3449 32.5579 19.141 31.7783 19.1418C30.9987 19.1427 30.2331 19.3484 29.558 19.7383C28.8828 20.1282 28.322 20.6885 27.9316 21.3633C27.5412 22.0381 27.3349 22.8036 27.3334 23.5832L20.6667 19.7332C19.9907 19.3449 19.2246 19.141 18.445 19.1418C17.6654 19.1427 16.8997 19.3484 16.2246 19.7383C15.5495 20.1282 14.9887 20.6885 14.5983 21.3633C14.2079 22.0381 14.0016 22.8036 14.0001 23.5832V36.4166C13.996 37.1948 14.1992 37.96 14.5888 38.6337C14.9783 39.3074 15.5402 39.8652 16.2167 40.2499C16.8917 40.6536 17.6636 40.8667 18.4501 40.8666C19.2285 40.8624 19.9925 40.6556 20.6667 40.2666L27.3334 36.4166C27.3298 37.1969 27.5331 37.9643 27.9224 38.6406C28.3118 39.3168 28.8734 39.8779 29.5501 40.2666C30.226 40.6588 30.9936 40.8653 31.7751 40.8653C32.5565 40.8653 33.3241 40.6588 34.0001 40.2666L45.1167 33.8499C45.7914 33.4588 46.3515 32.8973 46.7408 32.2216C47.1302 31.5459 47.3351 30.7798 47.3351 29.9999C47.3351 29.2201 47.1302 28.4539 46.7408 27.7782C46.3515 27.1025 45.7914 26.541 45.1167 26.1499ZM27.3334 32.5666L19.0001 37.3666C18.8318 37.4619 18.6416 37.5118 18.4483 37.5115C18.2549 37.5113 18.0649 37.4608 17.8969 37.365C17.7289 37.2692 17.5886 37.1315 17.4898 36.9652C17.3911 36.799 17.3372 36.6099 17.3334 36.4166V23.5832C17.3372 23.3899 17.3911 23.2008 17.4898 23.0346C17.5886 22.8683 17.7289 22.7306 17.8969 22.6348C18.0649 22.539 18.2549 22.4886 18.4483 22.4883C18.6416 22.488 18.8318 22.538 19.0001 22.6332L27.3334 27.4332V32.5666ZM43.4501 30.8999L32.3334 37.3832C32.1626 37.4781 31.9704 37.5279 31.7751 37.5279C31.5797 37.5279 31.3875 37.4781 31.2167 37.3832C31.0474 37.2855 30.9072 37.1444 30.8106 36.9745C30.7139 36.8046 30.6642 36.612 30.6667 36.4166V23.5832C30.6642 23.3878 30.7139 23.1952 30.8106 23.0253C30.9072 22.8554 31.0474 22.7143 31.2167 22.6166C31.3917 22.5241 31.5855 22.4728 31.7834 22.4666C31.9771 22.4649 32.1674 22.5168 32.3334 22.6166L43.4501 29.0332C43.6196 29.1313 43.7604 29.2722 43.8583 29.4419C43.9562 29.6116 44.0077 29.804 44.0077 29.9999C44.0077 30.1958 43.9562 30.3882 43.8583 30.5579C43.7604 30.7276 43.6196 30.8685 43.4501 30.9666V30.8999Z"
                fill="#00C781"
              />
            </svg>

            <p class="para-head">You pay later</p>
            <p class="para-child">
              At IPC, we are offering a credit facility that allows you to make purchase
              and make payments later within 7 days.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-dark">
    <div class="testimony-group container">
      <div class="testimony-text">
        <p class="testimony-head">TESTIMONIALS</p>
        <p class="testimony-p">From some of our clients</p>
        <p class="testimony-body-copy">
          Part of our mission at IPC is to empower your supply chain that keeps your
          business running. We allow you focus on your customers
        </p>
      </div>

      <div class="testimony-box-group">
        <div class="testimony-box">
          <p>
            IPC has shown they love my business and it’s clear from the way they operate.
            We no longer have to deal with multiple suppliers or chasing people with phone
            calls to supply us on time. Take take out orders and we expect delivery within
            24hours. The service and experience is brilliant.
          </p>
          <div class="user">
            <img src="../assets/userImg.png" alt="" />
            <div class="user-id">
              <h2>Demi Odunubi</h2>
              <p>Co-founder City Subs</p>
            </div>
          </div>
        </div>

        <div class="testimony-box">
          <p>
            IPC has taken a lot of stress off my business. They handle our procurement so
            we don’t stress about getting the best prices from the market - they do they
            research for us. They also provide the logistics service we use daily. It has
            given us time to focus on selling great food to our customers.
          </p>
          <div class="user">
            <img src="../assets/userImg.png" alt="" />
            <div class="user-id">
              <h2>Busayo</h2>
              <p>Co-founder Spicy Corner</p>
            </div>
          </div>
        </div>

        <div class="testimony-box">
          <p>
            IPC is efficient, cost effective and most importantly their staff are always
            ready to proffer solutions to the regular issues Lagos will present you with.
            As a small business owner this is invaluable.
          </p>
          <div class="user">
            <img src="../assets/userImg.png" alt="" />
            <div class="user-id">
              <h2>Seun Adebajo</h2>
              <p>Co-founder Red Gourmet Kitchen Lagos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="ion text-group2">
      <div class="text-group2 text-group text-top">
        <p class="small-head">OUR CLIENTS</p>
        <p class="med-head">All your favourite kitchens in one place.</p>
        <p class="body-copy">
          (IPC) is a food procurement, supply-chain, and logistics powerhouse that take
          responsibilities off businesses and consumers and keeps the supply chain
          running.
        </p>
      </div>
    </div>
    <imageSlider />
  </div>

  <div class="bg-accent">
    <div class="container">
      <div class="accent-con">
        <div class="text-group">
          <p class="small-head">PROCUREMENTS</p>
          <p class="med-head">Some of the items we presently procure</p>
        </div>
        <div class="img-procure-group">
          <div class="img-procure-text">
            <div class="img-procure">
              <img src="../assets/proc1.jpg" alt="" />
            </div>
            <p>Vegetables</p>
          </div>
          <div class="img-procure-text">
            <div class="img-procure">
              <img src="../assets/proc2.jpg" alt="" />
            </div>
            <p>Sea food</p>
          </div>
          <div class="img-procure-text">
            <div class="img-procure">
              <img src="../assets/proc3.jpg" alt="" />
            </div>
            <p>Poultry</p>
          </div>
          <div class="img-procure-text">
            <div class="img-procure">
              <img src="../assets/proc4.jpg" alt="" />
            </div>
            <p>Dairies</p>
          </div>
          <div class="img-procure-text">
            <div class="img-procure">
              <img src="../assets/proc5.jpg" alt="" />
            </div>
            <p>Fruits</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import buttonFill from "@/components/buttonFill.vue";
import buttonOutline from "@/components/buttonOutline.vue";
import imgGroup from "@/components/imgGroup.vue";
import imageSlider from "@/components/imageSlider.vue";
import services from "@/components/services.vue";
export default {
  name: "HomeView",
  components: {
    imgGroup,
    buttonFill,
    buttonOutline,
    imageSlider,
    services,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  beforeCreate() {
    if (this.$route.path === "/") {
      this.$router.push({ name: "home" });
    }
  },
};
</script>

<style scoped>
.header {
  padding: 64px 16px 0;
}

.main {
  /* height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center; */
  max-width: 1190px;
  margin: auto;
}

/* .content {
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 706px;
} */

.content-group {
  /* width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.content {
  display: flex;
  flex: 0 0 58%;
  align-items: center;
  position: relative;
  width: 100%;
  /* padding-right: 15px;
  padding-left: 15px; */
}

.text {
  max-width: 706.56px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.text h1 {
  font-family: "GeneralSans-Semibold", "DM Sans", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 72px;
  line-height: 97px;
  letter-spacing: -0.01em;

  color: var(--fc-dark);
}

.text p {
  font-family: "GeneralSans-Medium", "DM Sans", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  /* or 150% */

  letter-spacing: 0.005em;

  max-width: 515px;

  /* Neutral/neutral-300 */

  color: #666669;
}

.bubbles {
  width: 80%;
  max-width: 1190px;
  margin-inline: auto;
  display: flex;
  align-items: center;
  position: absolute;
  justify-content: space-around;
  /* overflow: hidden; */
  /* height: 100vh; */
  bottom: -240px;
  z-index: -1;
}

.bubbles img {
  width: 50px;
  animation: bubble 3s linear infinite;
}

@keyframes bubble {
  0% {
    transform: translateY(0);
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  70% {
    opacity: 1;
  }

  100% {
    transform: translateY(-100vh);
    opacity: 0;
  }
}

.bubbles img:nth-child(1) {
  animation-delay: 0s;
  width: 43px;
}

.bubbles img:nth-child(2) {
  animation-delay: 0.5s;
  width: 37px;
}

.bubbles img:nth-child(3) {
  animation-delay: 2s;
  width: 37px;
}

.bubbles img:nth-child(4) {
  animation-delay: 1s;
  width: 30px;
}

.bubbles img:nth-child(5) {
  animation-delay: 1.5s;
  width: 67px;
}

a {
  white-space: nowrap;
}

.container {
  display: flex;
  gap: 64px;
  flex-direction: column;
  align-items: center;
  /* background: white; */
  /* max-width: 1030px; */
  margin-inline: auto;
  padding: 64px 0;
}

.text-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 16px;
}

.text-group .small-head {
  font-family: "GeneralSans-Medium", "DM Sans", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  text-align: center;
  letter-spacing: 0.2em;

  color: var(--fc-blue);
}

.text-group .med-head {
  font-family: "GeneralSans-Semibold", "DM Sans", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 65px;
  /* identical to box height */

  text-align: center;
  letter-spacing: -0.01em;

  /* Primary/primary-900 */

  color: #00044b;
}

.text-group .body-copy {
  font-family: "GeneralSans-Medium", "DM Sans", sans-serif;

  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  /* or 150% */

  text-align: center;
  letter-spacing: 0.005em;

  /* Neutral/neutral-300 */

  color: #666669;

  max-width: 487px;
}

.box {
  display: flex;
  gap: 2rem;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  max-width: 1030px;
}

.box-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px;
  gap: 32px;
  background: #efe7f7;
  border-radius: 16px;
  max-width: 499px;
}

.box-content .box-head {
  font-family: "GeneralSans-Medium", "DM Sans", sans-serif;

  font-style: normal;
  font-weight: 500;
  font-size: 34px;
  line-height: 46px;
  text-align: center;

  /* Primary/primary-900 */
  max-width: 319px;
  color: #00044b;
}

.container-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.container-wrapper .wrap {
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 496px;
}

.wrap .text-group p {
  text-align: left;
  align-self: flex-start;
}

.text-group2 {
  align-items: flex-start;
}

.text-group2 p {
  text-align: left !important;
}

.container-wrapper img {
  max-width: 419.53px;
}

.section-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 64px;
}

.max-width {
  max-width: 1030px;
}

.body-svg {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  gap: 39px;
  width: 100%;
  justify-content: space-between;
}

.svg-p-p {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 317.33px;
}

.para-head {
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;

  color: var(--fc-dark);
}

.para-child {
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  letter-spacing: 0.01em;

  /* Neutral/neutral-300 */

  color: #666669;
}

.bg-dark {
  background: var(--fc-dark);
}

.testimony-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 16px;

  max-width: 646.44px;
  margin-inline: auto;
}

.testimony-text p {
  color: #ffffff;
}

.testimony-head {
  font-family: "GeneralSans-Semibold", "DM Sans", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  text-align: center;
  letter-spacing: 0.2em;

  /* Primary/primary-100 */

  color: #b0b3e7 !important;
}

.testimony-p {
  font-weight: 600;
  font-size: 48px;
  line-height: 65px;
  /* identical to box height */

  text-align: center;
  letter-spacing: -0.01em;
}

.testimony-body-copy {
  font-size: 20px;
  line-height: 30px;
  /* or 150% */

  text-align: center;
  letter-spacing: 0.005em;

  /* Neutral/neutral-50 */

  color: #e8e8e9 !important;
}

.testimony-box-group {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
  max-width: 1030px;
  justify-content: space-between;
}

.testimony-box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 32px;
  gap: 32px;

  max-width: 321.67px;
  min-height: 420px;

  /* White */

  background: #ffffff;
  box-shadow: 0px 5px 14px rgba(23, 43, 77, 0.08);
  border-radius: 16px;
}

.user {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;
}

.user img {
  width: 60px;
  height: 60px;
}

.user-id h2 {
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height, or 150% */

  letter-spacing: 0.005em;

  color: var(--fc-dark);
}

.user-id p {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  letter-spacing: 0.01em;

  /* Neutral/neutral-300 */

  color: #666669;
}

.testimony-box p {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  letter-spacing: 0.01em;

  /* Neutral/neutral-300 */

  color: #666669;
}

.ion {
  /* margin: 64px 0 48px 0; */
  width: 95%;
  max-width: 1030px;
}

.ion .text-group2 p.med-head {
  max-width: 591px;
}
.ion .text-group2 p.body-copy {
  max-width: 662px;
}

.bg-accent {
  background: #fffae6;
  padding: 64px 0 16px;
}

.accent-con {
  max-width: 1030px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 64px;
}

.img-procure-group {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  /* max-width: 1030px; */
  gap: 24px;
}

.img-procure-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 8px;
}

.img-procure {
  width: 186.8px;
  height: 200px;
  border-radius: 16px;
}

.img-procure img {
  object-fit: cover;
  /* height: 100%; */
  height: 200px;
  border-radius: 16px;
}

@media (min-width: 992px) {
  .header {
    padding: 64px 99px 0;
  }

  .main-wrap,
  .bg-dark {
    padding-inline: 100px;
  }
}

@media (min-width: 992px) {
  .btn {
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: center;
    margin-top: 24px;
    /* width: fit-content; */
  }

  .box-content {
    height: 440px;
  }
}

@media (max-width: 992px) {
  .bg-dark .container {
    max-width: 487px;
  }
  .btn a:nth-child(1) {
    display: block;
    margin-bottom: 16px;
    margin: 24px 0 16px 0;
    white-space: nowrap;
  }

  .content-group {
    flex-direction: column-reverse;
    /* gap: 48px; */
  }

  .bg-dark .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px 0;
  }

  .testimony-head {
    font-weight: 600;
    font-size: 12px;
    line-height: 24px;
    /* identical to box height, or 200% */
    font-family: "GeneralSans-Semibold", "DM Sans", sans-serif;
    text-align: center;
    letter-spacing: 0.2em;

    /* Primary/primary-100 */

    color: #b0b3e7;
  }

  .md {
    margin-inline: auto;
  }

  .main {
    width: 90%;
    margin-inline: auto;
  }

  .text h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 34px;
    line-height: 46px;
    letter-spacing: -0.01em;
  }

  .text p {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    /* or 150% */

    letter-spacing: 0.01em;
  }

  .container {
    width: 90%;
    margin-inline: auto;
    padding-top: 0;
  }

  .box-content {
    gap: 24px;
    padding: 24px;
    height: 400px;
  }

  .ion {
    width: 100%;
  }

  .text-group .med-head {
    font-style: normal;
    font-weight: 600;
    font-size: 34px;
    /* font-size: 33px; */
    line-height: 46px;
    /* text-align: center; */
    letter-spacing: -0.014em;
  }

  .box-content .box-head {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    /* or 150% */

    text-align: center;
  }

  .box-content .box-copy {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    /* or 150% */

    text-align: center;
    letter-spacing: 0.01em;
  }

  .container-wrapper .wrap {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .container-wrapper p {
    text-align: left !important;
  }

  .container-wrapper p:nth-child(1) {
    font-size: 12px;
    line-height: 24px;
  }

  .container-wrapper .text-group {
    align-items: flex-start;
    gap: 24px;
    max-width: 392px;
  }

  .text-group {
    /* max-width: 291px; */
    margin-inline: auto;
  }

  .text-group .body-copy {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    /* or 150% */

    /* text-align: center; */

    /* max-width: 291px; */
  }

  .container-wrapper {
    flex-direction: column;
    gap: 48px;
    align-items: center;
  }

  .container-wrapper img {
    max-width: 336.69px;
    width: 100%;
  }

  .section-group {
    gap: 48px;
  }

  .body-svg {
    flex-direction: column;
    gap: 48px;
  }

  .text-group2 {
    align-items: flex-start;
    margin-inline: 0;
    gap: 16px;
  }

  .text-top {
    margin-top: 64px;
    width: 100%;
  }

  .testimony-box-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 48px;
    min-width: 100%;
  }

  .testimony-p {
    font-weight: 600;
    font-size: 34px;
    line-height: 46px;
    text-align: center;
    letter-spacing: -0.01em;
  }

  .testimony-body-copy {
    font-size: 16px;
    line-height: 24px;
    /* or 150% */

    text-align: center;
    letter-spacing: 0.01em;
  }

  .testimony-box p {
    font-size: 14px;
    line-height: 21px;
    /* or 150% */

    letter-spacing: 0.01em;

    /* Neutral/neutral-300 */

    color: #666669;
  }

  .testimony-box {
    max-width: 100%;
  }
  .text-group .small-head {
    font-size: 12px;
    line-height: 24px;
    letter-spacing: 0.2em;
  }

  .img-procure-group {
    flex-direction: column;
  }

  .img-procure-text {
    width: 100%;
  }

  .img-procure {
    width: 100%;
    height: 200px;
    border-radius: 16px;
  }

  .img-procure img {
    object-fit: cover;
    width: 100%;
    height: 200px;
    border-radius: 16px;
  }
}
</style>
  
