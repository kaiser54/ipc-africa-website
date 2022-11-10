<template>
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
                supply-chain, and logistics powerhouse that take
                responsibilities off businesses and consumers and keeps the
                supply chain running.
              </p>
            </div>
            <div class="btn">
              <router-link :to="{ name: '' }">
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

  <div class="main-wrap" id="services">
    <div class="container">
      <div class="text-group">
        <p class="small-head">OUR SERVICES</p>
        <p class="med-head">Making it easy for you</p>
        <p class="body-copy">
          We offer you supply chain credits that allows you operate and serve
          customers without delay
        </p>
      </div>

      <div class="box">
        <div class="box-content">
          <svg
            width="65"
            height="64"
            viewBox="0 0 65 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M58.1267 31.4934L49.46 24.7467L58.1533 17.92C58.4973 17.6501 58.7696 17.2998 58.9463 16.8999C59.1231 16.5 59.1987 16.0627 59.1667 15.6267C59.1242 15.1923 58.9817 14.7736 58.7504 14.4035C58.5191 14.0334 58.2052 13.7219 57.8333 13.4933L44.1267 5.68002C43.6453 5.40921 43.0917 5.29454 42.5424 5.35187C41.9931 5.40919 41.4751 5.63566 41.06 6.00002L32.5 13.4667L23.94 6.00002C23.5249 5.63566 23.0069 5.40919 22.4576 5.35187C21.9083 5.29454 21.3547 5.40921 20.8733 5.68002L7.16668 13.4933C6.79481 13.7219 6.48092 14.0334 6.2496 14.4035C6.01827 14.7736 5.8758 15.1923 5.83334 15.6267C5.8013 16.0627 5.87697 16.5 6.05367 16.8999C6.23038 17.2998 6.50271 17.6501 6.84668 17.92L15.54 24.7467L6.87334 31.3867C6.5245 31.6537 6.24703 32.0028 6.0656 32.4029C5.88416 32.8029 5.80438 33.2417 5.83334 33.68C5.86289 34.1179 6.00004 34.5417 6.23263 34.9138C6.46522 35.2859 6.78605 35.5949 7.16668 35.8134L16.26 41.1467V47.7333C16.2619 48.1891 16.3806 48.6367 16.6046 49.0335C16.8287 49.4303 17.1508 49.7631 17.54 50L31.1133 58.3467C31.5187 58.5807 31.9786 58.7039 32.4467 58.7039C32.9148 58.7039 33.3746 58.5807 33.78 58.3467L47.3533 50C47.7426 49.7631 48.0646 49.4303 48.2887 49.0335C48.5128 48.6367 48.6314 48.1891 48.6333 47.7333V41.12L57.7267 35.92C58.1073 35.7016 58.4281 35.3926 58.6607 35.0205C58.8933 34.6483 59.0305 34.2245 59.06 33.7867C59.1015 33.3574 59.0382 32.9246 58.8756 32.5251C58.7131 32.1257 58.4561 31.7717 58.1267 31.4934ZM43.1667 11.2533L51.78 16.16L44.98 21.4934L36.98 16.5867L43.1667 11.2533ZM40.26 24.9067L32.5 30.24L24.74 24.9067L32.5 20.1333L40.26 24.9067ZM13.2733 16.16L21.8333 11.2533L27.9933 16.5867L19.9933 21.4934L13.2733 16.16ZM13.2733 33.2L19.94 28.08L27.94 33.6267L22.02 38.24L13.2733 33.2ZM43.38 46.16L32.5 52.88L21.5933 46.16V44.0267C21.9829 44.1223 22.3891 44.1288 22.7815 44.0457C23.174 43.9626 23.5426 43.792 23.86 43.5467L32.5 36.88L41.14 43.5467C41.6055 43.9079 42.1775 44.1049 42.7667 44.1067C42.9792 44.1324 43.1941 44.1324 43.4067 44.1067L43.38 46.16ZM42.98 38.16L37.0333 33.6267L45.0333 28.08L51.7267 33.2533L42.98 38.16Z"
              fill="#850DFF"
            />
          </svg>

          <p class="box-head">Procurement for raw food materials</p>

          <p class="box-copy">
            We offer the best rates on food items and materials. Also, enjoy our
            cashback policy on spoilt or damage orders. “we deliver available
            products immediately or procure within 24 hours for you.
          </p>
        </div>
        <div class="box-content" style="background: #e7f5ff">
          <svg
            width="65"
            height="64"
            viewBox="0 0 65 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.16663 33.3333V44C3.16663 44.7073 3.44758 45.3855 3.94767 45.8856C4.44777 46.3857 5.12605 46.6667 5.83329 46.6667H8.49996C8.49996 48.7884 9.34281 50.8232 10.8431 52.3235C12.3434 53.8238 14.3782 54.6667 16.5 54.6667C18.6217 54.6667 20.6565 53.8238 22.1568 52.3235C23.6571 50.8232 24.5 48.7884 24.5 46.6667H40.5C40.5 48.7884 41.3428 50.8232 42.8431 52.3235C44.3434 53.8238 46.3782 54.6667 48.5 54.6667C50.6217 54.6667 52.6565 53.8238 54.1568 52.3235C55.6571 50.8232 56.5 48.7884 56.5 46.6667H59.1666C59.8739 46.6667 60.5521 46.3857 61.0522 45.8856C61.5523 45.3855 61.8333 44.7073 61.8333 44V17.3333C61.8333 15.2116 60.9904 13.1768 59.4901 11.6765C57.9899 10.1762 55.955 9.33334 53.8333 9.33334H23.0066C21.3308 9.33648 19.6982 9.86583 18.3393 10.8467C16.9805 11.8276 15.964 13.2104 15.4333 14.8L11.5933 26.2933L4.36663 31.12C3.9998 31.3616 3.69832 31.69 3.48897 32.0761C3.27963 32.4623 3.1689 32.8941 3.16663 33.3333V33.3333ZM56.5 25.3333H51.1666V14.6667H53.8333C54.5405 14.6667 55.2188 14.9476 55.7189 15.4477C56.219 15.9478 56.5 16.6261 56.5 17.3333V25.3333ZM45.8333 46.6667C45.8333 46.1393 45.9897 45.6237 46.2827 45.1852C46.5757 44.7466 46.9922 44.4048 47.4795 44.203C47.9667 44.0012 48.5029 43.9484 49.0202 44.0513C49.5375 44.1541 50.0126 44.4081 50.3856 44.7811C50.7585 45.154 51.0125 45.6292 51.1154 46.1464C51.2183 46.6637 51.1655 47.1999 50.9636 47.6872C50.7618 48.1744 50.42 48.5909 49.9815 48.8839C49.5429 49.1769 49.0274 49.3333 48.5 49.3333C47.7927 49.3333 47.1144 49.0524 46.6143 48.5523C46.1142 48.0522 45.8333 47.3739 45.8333 46.6667ZM40.5 30.6667H56.5V41.3333H54.42C53.6701 40.5084 52.7562 39.8493 51.7367 39.3982C50.7172 38.9472 49.6147 38.7142 48.5 38.7142C47.3852 38.7142 46.2827 38.9472 45.2632 39.3982C44.2437 39.8493 43.3298 40.5084 42.58 41.3333H40.5V30.6667ZM40.5 14.6667H45.8333V25.3333H40.5V14.6667ZM29.8333 30.6667H35.1666V41.3333H29.8333V30.6667ZM29.8333 14.6667H35.1666V25.3333H29.8333V14.6667ZM24.5 25.3333H17.54L20.4733 16.48C20.6522 15.9504 20.993 15.4903 21.4476 15.1649C21.9022 14.8395 22.4476 14.6652 23.0066 14.6667H24.5V25.3333ZM13.8333 46.6667C13.8333 46.1393 13.9897 45.6237 14.2827 45.1852C14.5757 44.7466 14.9922 44.4048 15.4795 44.203C15.9667 44.0012 16.5029 43.9484 17.0202 44.0513C17.5375 44.1541 18.0126 44.4081 18.3856 44.7811C18.7585 45.154 19.0125 45.6292 19.1154 46.1464C19.2183 46.6637 19.1655 47.1999 18.9636 47.6872C18.7618 48.1744 18.42 48.5909 17.9815 48.8839C17.5429 49.1769 17.0274 49.3333 16.5 49.3333C15.7927 49.3333 15.1144 49.0524 14.6143 48.5523C14.1142 48.0522 13.8333 47.3739 13.8333 46.6667ZM8.49996 34.6667L14.6333 30.6667H24.5V41.3333H22.42C21.6701 40.5084 20.7562 39.8493 19.7367 39.3982C18.7172 38.9472 17.6148 38.7142 16.5 38.7142C15.3852 38.7142 14.2827 38.9472 13.2632 39.3982C12.2437 39.8493 11.3298 40.5084 10.58 41.3333H8.49996V34.6667Z"
              fill="#0D98FF"
            />
          </svg>

          <p class="box-head">Fast and safe food deliveries</p>

          <p class="box-copy">
            We handle your goods/orders (which sounds better?) delicately. Our
            team of professionals handling and delivering your goods allow us
            take the burden of supplies and deliveries off your shoulders.
            Return any product that gets to your doorstep unacceptably.
          </p>
        </div>
        <div class="box-content" style="background: #e6f9f2">
          <svg
            width="65"
            height="64"
            viewBox="0 0 65 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M59.1667 45.3334H5.83335C5.12611 45.3334 4.44783 45.6143 3.94774 46.1144C3.44764 46.6145 3.16669 47.2928 3.16669 48C3.16669 48.7073 3.44764 49.3855 3.94774 49.8856C4.44783 50.3857 5.12611 50.6667 5.83335 50.6667H59.1667C59.8739 50.6667 60.5522 50.3857 61.0523 49.8856C61.5524 49.3855 61.8334 48.7073 61.8334 48C61.8334 47.2928 61.5524 46.6145 61.0523 46.1144C60.5522 45.6143 59.8739 45.3334 59.1667 45.3334ZM59.1667 56H5.83335C5.12611 56 4.44783 56.281 3.94774 56.7811C3.44764 57.2812 3.16669 57.9594 3.16669 58.6667C3.16669 59.3739 3.44764 60.0522 3.94774 60.5523C4.44783 61.0524 5.12611 61.3334 5.83335 61.3334H59.1667C59.8739 61.3334 60.5522 61.0524 61.0523 60.5523C61.5524 60.0522 61.8334 59.3739 61.8334 58.6667C61.8334 57.9594 61.5524 57.2812 61.0523 56.7811C60.5522 56.281 59.8739 56 59.1667 56ZM16.5 18.6667C15.9726 18.6667 15.457 18.8231 15.0185 19.1161C14.58 19.4091 14.2382 19.8256 14.0363 20.3129C13.8345 20.8001 13.7817 21.3363 13.8846 21.8536C13.9875 22.3709 14.2415 22.846 14.6144 23.219C14.9873 23.5919 15.4625 23.8459 15.9798 23.9488C16.4971 24.0517 17.0332 23.9989 17.5205 23.797C18.0078 23.5952 18.4243 23.2534 18.7173 22.8149C19.0103 22.3763 19.1667 21.8608 19.1667 21.3334C19.1667 20.6261 18.8857 19.9478 18.3856 19.4477C17.8855 18.9476 17.2073 18.6667 16.5 18.6667ZM53.8334 2.66669H11.1667C9.04495 2.66669 7.01012 3.50954 5.50983 5.00983C4.00954 6.51012 3.16669 8.54495 3.16669 10.6667V32C3.16669 34.1217 4.00954 36.1566 5.50983 37.6569C7.01012 39.1572 9.04495 40 11.1667 40H53.8334C55.9551 40 57.9899 39.1572 59.4902 37.6569C60.9905 36.1566 61.8334 34.1217 61.8334 32V10.6667C61.8334 8.54495 60.9905 6.51012 59.4902 5.00983C57.9899 3.50954 55.9551 2.66669 53.8334 2.66669ZM56.5 32C56.5 32.7073 56.2191 33.3855 55.719 33.8856C55.2189 34.3857 54.5406 34.6667 53.8334 34.6667H11.1667C10.4594 34.6667 9.78117 34.3857 9.28107 33.8856C8.78097 33.3855 8.50002 32.7073 8.50002 32V10.6667C8.50002 9.95944 8.78097 9.28117 9.28107 8.78107C9.78117 8.28097 10.4594 8.00002 11.1667 8.00002H53.8334C54.5406 8.00002 55.2189 8.28097 55.719 8.78107C56.2191 9.28117 56.5 9.95944 56.5 10.6667V32ZM32.5 13.3334C30.9178 13.3334 29.371 13.8025 28.0555 14.6816C26.7399 15.5606 25.7145 16.8101 25.109 18.2719C24.5035 19.7337 24.3451 21.3422 24.6537 22.8941C24.9624 24.4459 25.7243 25.8714 26.8432 26.9902C27.962 28.109 29.3874 28.871 30.9393 29.1796C32.4911 29.4883 34.0997 29.3299 35.5615 28.7244C37.0233 28.1189 38.2727 27.0935 39.1518 25.7779C40.0308 24.4623 40.5 22.9156 40.5 21.3334C40.5 19.2116 39.6572 17.1768 38.1569 15.6765C36.6566 14.1762 34.6217 13.3334 32.5 13.3334ZM32.5 24C31.9726 24 31.457 23.8436 31.0185 23.5506C30.58 23.2576 30.2382 22.8411 30.0363 22.3538C29.8345 21.8666 29.7817 21.3304 29.8846 20.8131C29.9875 20.2958 30.2415 19.8207 30.6144 19.4477C30.9873 19.0748 31.4625 18.8208 31.9798 18.7179C32.4971 18.615 33.0332 18.6678 33.5205 18.8697C34.0078 19.0715 34.4243 19.4133 34.7173 19.8518C35.0103 20.2904 35.1667 20.8059 35.1667 21.3334C35.1667 22.0406 34.8857 22.7189 34.3856 23.219C33.8855 23.7191 33.2073 24 32.5 24ZM48.5 18.6667C47.9726 18.6667 47.457 18.8231 47.0185 19.1161C46.58 19.4091 46.2382 19.8256 46.0363 20.3129C45.8345 20.8001 45.7817 21.3363 45.8846 21.8536C45.9875 22.3709 46.2415 22.846 46.6144 23.219C46.9873 23.5919 47.4625 23.8459 47.9798 23.9488C48.4971 24.0517 49.0332 23.9989 49.5205 23.797C50.0078 23.5952 50.4243 23.2534 50.7173 22.8149C51.0103 22.3763 51.1667 21.8608 51.1667 21.3334C51.1667 20.6261 50.8857 19.9478 50.3856 19.4477C49.8855 18.9476 49.2073 18.6667 48.5 18.6667Z"
              fill="#00C781"
            />
          </svg>

          <p class="box-head">Credit facility on food materials</p>

          <p class="box-copy">
            Up to N500,000 or more, depending on your supply scale. We allow you
            fulfil your orders and make payments within 7days.
          </p>
        </div>
        <div class="box-content" style="background: #fffae6">
          <svg
            width="65"
            height="64"
            viewBox="0 0 65 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35.9667 32.5866C37.3896 31.355 38.5308 29.8317 39.313 28.12C40.0952 26.4084 40.5001 24.5485 40.5 22.6666C40.5 19.1304 39.0953 15.739 36.5948 13.2386C34.0943 10.7381 30.7029 9.33331 27.1667 9.33331C23.6305 9.33331 20.2391 10.7381 17.7386 13.2386C15.2381 15.739 13.8334 19.1304 13.8334 22.6666C13.8334 24.5485 14.2382 26.4084 15.0204 28.12C15.8026 29.8317 16.9438 31.355 18.3667 32.5866C14.6337 34.277 11.4666 37.0067 9.24399 40.4494C7.02136 43.8921 5.8373 47.9021 5.83337 52C5.83337 52.7072 6.11433 53.3855 6.61442 53.8856C7.11452 54.3857 7.7928 54.6666 8.50004 54.6666C9.20728 54.6666 9.88556 54.3857 10.3857 53.8856C10.8858 53.3855 11.1667 52.7072 11.1667 52C11.1667 47.7565 12.8524 43.6869 15.853 40.6863C18.8536 37.6857 22.9232 36 27.1667 36C31.4102 36 35.4798 37.6857 38.4804 40.6863C41.481 43.6869 43.1667 47.7565 43.1667 52C43.1667 52.7072 43.4477 53.3855 43.9478 53.8856C44.4479 54.3857 45.1261 54.6666 45.8334 54.6666C46.5406 54.6666 47.2189 54.3857 47.719 53.8856C48.2191 53.3855 48.5 52.7072 48.5 52C48.4961 47.9021 47.3121 43.8921 45.0894 40.4494C42.8668 37.0067 39.6997 34.277 35.9667 32.5866ZM27.1667 30.6666C25.5845 30.6666 24.0377 30.1975 22.7221 29.3184C21.4066 28.4394 20.3812 27.1899 19.7757 25.7281C19.1702 24.2663 19.0117 22.6578 19.3204 21.1059C19.6291 19.5541 20.391 18.1286 21.5099 17.0098C22.6287 15.891 24.0541 15.129 25.606 14.8204C27.1578 14.5117 28.7664 14.6701 30.2282 15.2756C31.69 15.8811 32.9394 16.9065 33.8185 18.2221C34.6975 19.5377 35.1667 21.0844 35.1667 22.6666C35.1667 24.7884 34.3239 26.8232 32.8236 28.3235C31.3233 29.8238 29.2884 30.6666 27.1667 30.6666ZM58.3934 24.3466C58.1455 24.0967 57.8505 23.8983 57.5256 23.7629C57.2006 23.6276 56.8521 23.5579 56.5 23.5579C56.148 23.5579 55.7995 23.6276 55.4745 23.7629C55.1495 23.8983 54.8546 24.0967 54.6067 24.3466L49.2734 29.68L47.62 28C47.3721 27.75 47.0772 27.5517 46.7522 27.4163C46.4273 27.2809 46.0787 27.2112 45.7267 27.2112C45.3747 27.2112 45.0261 27.2809 44.7012 27.4163C44.3762 27.5517 44.0813 27.75 43.8334 28C43.3367 28.4996 43.0579 29.1755 43.0579 29.88C43.0579 30.5845 43.3367 31.2603 43.8334 31.76L47.4067 35.3333C47.9063 35.83 48.5822 36.1088 49.2867 36.1088C49.9912 36.1088 50.6671 35.83 51.1667 35.3333L58.2867 28.2133C58.5559 27.9715 58.7731 27.6774 58.9251 27.349C59.077 27.0206 59.1605 26.6646 59.1705 26.3029C59.1805 25.9411 59.1167 25.5812 58.9831 25.2448C58.8495 24.9085 58.6489 24.6029 58.3934 24.3466Z"
              fill="#FFCC00"
            />
          </svg>

          <p class="box-head">Active customer support system</p>

          <p class="box-copy">
            A people you can trust to assist with your inquiries and further
            profer solutions to whatever complaints via our wide range of
            contact means. Your feedback is important to us.
          </p>
        </div>
      </div>
    </div>

    <div class="container max-width">
      <div class="container-wrapper">
        <div class="wrap">
          <div class="text-group">
            <p class="small-head">BUILT FOR YOU</p>
            <p class="med-head">Reduce your average cost of production</p>
            <p class="body-copy">
              With IPC you can do this by taking advantage of our economics of
              scale, even when you do not buy a lot. As we procure directly from
              farmers and manufacturers to get you the best at unbeatable
              prices.
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
            We offer you supply chain credits that allows you operate and serve
            customers without delay
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
              At IPC, we are offering a credit facility that allows you to make
              purchase and make payments later within 7 days.
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
              <rect
                x="0.333374"
                width="60"
                height="60"
                rx="30"
                fill="#FFFAE6"
              />
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
              <rect
                x="0.666748"
                width="60"
                height="60"
                rx="30"
                fill="#E6F9F2"
              />
              <path
                d="M45.1167 26.1499L34.0001 19.7332C33.3241 19.3449 32.5579 19.141 31.7783 19.1418C30.9987 19.1427 30.2331 19.3484 29.558 19.7383C28.8828 20.1282 28.322 20.6885 27.9316 21.3633C27.5412 22.0381 27.3349 22.8036 27.3334 23.5832L20.6667 19.7332C19.9907 19.3449 19.2246 19.141 18.445 19.1418C17.6654 19.1427 16.8997 19.3484 16.2246 19.7383C15.5495 20.1282 14.9887 20.6885 14.5983 21.3633C14.2079 22.0381 14.0016 22.8036 14.0001 23.5832V36.4166C13.996 37.1948 14.1992 37.96 14.5888 38.6337C14.9783 39.3074 15.5402 39.8652 16.2167 40.2499C16.8917 40.6536 17.6636 40.8667 18.4501 40.8666C19.2285 40.8624 19.9925 40.6556 20.6667 40.2666L27.3334 36.4166C27.3298 37.1969 27.5331 37.9643 27.9224 38.6406C28.3118 39.3168 28.8734 39.8779 29.5501 40.2666C30.226 40.6588 30.9936 40.8653 31.7751 40.8653C32.5565 40.8653 33.3241 40.6588 34.0001 40.2666L45.1167 33.8499C45.7914 33.4588 46.3515 32.8973 46.7408 32.2216C47.1302 31.5459 47.3351 30.7798 47.3351 29.9999C47.3351 29.2201 47.1302 28.4539 46.7408 27.7782C46.3515 27.1025 45.7914 26.541 45.1167 26.1499ZM27.3334 32.5666L19.0001 37.3666C18.8318 37.4619 18.6416 37.5118 18.4483 37.5115C18.2549 37.5113 18.0649 37.4608 17.8969 37.365C17.7289 37.2692 17.5886 37.1315 17.4898 36.9652C17.3911 36.799 17.3372 36.6099 17.3334 36.4166V23.5832C17.3372 23.3899 17.3911 23.2008 17.4898 23.0346C17.5886 22.8683 17.7289 22.7306 17.8969 22.6348C18.0649 22.539 18.2549 22.4886 18.4483 22.4883C18.6416 22.488 18.8318 22.538 19.0001 22.6332L27.3334 27.4332V32.5666ZM43.4501 30.8999L32.3334 37.3832C32.1626 37.4781 31.9704 37.5279 31.7751 37.5279C31.5797 37.5279 31.3875 37.4781 31.2167 37.3832C31.0474 37.2855 30.9072 37.1444 30.8106 36.9745C30.7139 36.8046 30.6642 36.612 30.6667 36.4166V23.5832C30.6642 23.3878 30.7139 23.1952 30.8106 23.0253C30.9072 22.8554 31.0474 22.7143 31.2167 22.6166C31.3917 22.5241 31.5855 22.4728 31.7834 22.4666C31.9771 22.4649 32.1674 22.5168 32.3334 22.6166L43.4501 29.0332C43.6196 29.1313 43.7604 29.2722 43.8583 29.4419C43.9562 29.6116 44.0077 29.804 44.0077 29.9999C44.0077 30.1958 43.9562 30.3882 43.8583 30.5579C43.7604 30.7276 43.6196 30.8685 43.4501 30.9666V30.8999Z"
                fill="#00C781"
              />
            </svg>

            <p class="para-head">You pay later</p>
            <p class="para-child">
              At IPC, we are offering a credit facility that allows you to make
              purchase and make payments later within 7 days.
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
          Part of our mission at IPC is to empower your supply chain that keeps
          your business running. We allow you focus on your customers
        </p>
      </div>

      <div class="testimony-box-group">
        <div class="testimony-box">
          <p>
            IPC has shown they love my business and it’s clear from the way they
            operate. We no longer have to deal with multiple suppliers or
            chasing people with phone calls to supply us on time. Take take out
            orders and we expect delivery within 24hours. The service and
            experience is brilliant.
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
            IPC has taken a lot of stress off my business. They handle our
            procurement so we don’t stress about getting the best prices from
            the market - they do they research for us. They also provide the
            logistics service we use daily. It has given us time to focus on
            selling great food to our customers.
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
            IPC is efficient, cost effective and most importantly their staff
            are always ready to proffer solutions to the regular issues Lagos
            will present you with. As a small business owner this is invaluable.
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
          (IPC) is a food procurement, supply-chain, and logistics powerhouse
          that take responsibilities off businesses and consumers and keeps the
          supply chain running.
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
export default {
  name: "HomeView",
  components: {
    imgGroup,
    buttonFill,
    buttonOutline,
    imageSlider,
  },
};
</script>

<style scoped>
.header {
  padding: 228px 16px 64px;
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
  font-family: "GeneralSans-Semibold";
  font-style: normal;
  font-weight: 600;
  font-size: 72px;
  line-height: 97px;
  letter-spacing: -0.01em;

  color: var(--fc-dark);
}

.text p {
  font-family: "GeneralSans-Medium";
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
  font-family: "General Sans";
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
  font-family: "GeneralSans-Semibold" !important;
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
  font-family: "General Sans";
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
  font-family: "General Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 34px;
  line-height: 46px;
  text-align: center;

  /* Primary/primary-900 */
  max-width: 319px;
  color: #00044b;
}

.box-content .box-copy {
  font-family: "General Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  text-align: center;
  letter-spacing: 0.01em;

  /* Neutral/neutral-300 */

  color: #666669;

  max-width: 403px;
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
  font-family: "GeneralSans-Semibold" !important;
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
    padding: 228px 99px 128px;
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
    font-family: "GeneralSans-Semibold";
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