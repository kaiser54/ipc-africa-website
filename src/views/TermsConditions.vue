<template>
  <div class="body_wrap">
    <div class="container">
      <div class="bookmark-group">
        <h2>ON THIS PAGE</h2>
        <div class="bookmark">
          <a
            href="#termsandcon"
            @click.prevent="scrollToHeadline('termsandcon')"
          >
            Terms and Conditions
          </a>
          <a href="#change" @click.prevent="scrollToHeadline('change')">
            Changes to This Terms and Conditions
          </a>
          <a href="#contact" @click.prevent="scrollToHeadline('contact')">
            Contact Us
          </a>
        </div>
      </div>
      <div class="bookmark-content">
        <div id="termsandcon">
          <div class="tops">
            <p class="update">Last Updated</p>
            <p class="date">Monday, August 28, 2023</p>
          </div>
          <div id="terms">
            <h1>Terms and Conditions</h1>
            <p class="first">
              By downloading or using the app, these terms will automatically
              apply to you – you should make sure therefore that you read them
              carefully before using the app. You’re not allowed to copy or
              modify the app, any part of the app, or our trademarks in any way.
              You’re not allowed to attempt to extract the source code of the
              app, and you also shouldn’t try to translate the app into other
              languages or make derivative versions. The app itself, and all the
              trademarks, copyright, database rights, and other intellectual
              property rights related to it, still belong to Independent
              Purchasing Company Ltd
            </p>
            <p class="second">
              Independent Purchasing Company Ltd is committed to ensuring that
              the app is as useful and efficient as possible. For that reason,
              we reserve the right to make changes to the app or to charge for
              its services, at any time and for any reason. We will never charge
              you for the app or its services without making it very clear to
              you exactly what you’re paying for. The IPC app stores and
              processes personal data that you have provided to us, to provide
              our Service. It’s your responsibility to keep your phone and
              access to the app secure. We therefore recommend that you do not
              jailbreak or root your phone, which is the process of removing
              software restrictions and limitations imposed by the official
              operating system of your device. It could make your phone
              vulnerable to malware/viruses/malicious programs, compromise your
              phone’s security features and it could mean that the IPC app won’t
              work properly or at all.
            </p>
            <p class="third">
              The app does use third-party services that declare their Terms and
              Conditions. Link to Terms and Conditions of third-party service
              providers used by the app
            </p>
            <div class="links">
              <a href="#">Google Play Services</a>
              <a href="#">Google Analytics for Firebase </a>
              <a href="#">Firebase Crashlytics</a>
              <a href="#"> Expo</a>
            </div>
            <p class="forth">
              You should be aware that there are certain things that Independent
              Purchasing Company Ltd will not take responsibility for. Certain
              functions of the app will require the app to have an active
              internet connection. The connection can be Wi-Fi or provided by
              your mobile network provider, but Independent Purchasing Company
              Ltd cannot take responsibility for the app not working at full
              functionality if you don’t have access to Wi-Fi, and you don’t
              have any of your data allowance left.
            </p>
            <p class="fifth">
              If you’re using the app outside of an area with Wi-Fi, you should
              remember that the terms of the agreement with your mobile network
              provider will still apply. As a result, you may be charged by your
              mobile provider for the cost of data for the duration of the
              connection while accessing the app, or other third-party charges.
              In using the app, you’re accepting responsibility for any such
              charges, including roaming data charges if you use the app outside
              of your home territory (i.e. region or country) without turning
              off data roaming. If you are not the bill payer for the device on
              which you’re using the app, please be aware that we assume that
              you have received permission from the bill payer for using the app
            </p>
            <p class="Sixth">
              (a) the rights and licenses granted to you in these terms will end
              <br />
              (b) you must stop using the app, and (if needed) delete it from
              your device.
            </p>
          </div>
        </div>
        <div id="change">
          <h6>Changes to This Terms and Conditions</h6>
          <p>
            We may update our Terms and Conditions from time to time. Thus, you
            are advised to review this page periodically for any changes. We
            will notify you of any changes by posting the new Terms and
            Conditions on this page. These terms and conditions are effective as
            of 2023-08-28
          </p>
        </div>
        <div id="contact">
          <h6>Contact Us</h6>
          <p>
            If you have any questions or suggestions about our Terms and
            Conditions, do not hesitate to contact us at
            <a href="#">support@ipc-africa.com</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: [
        {
          id: 1,
          title: "Terms and Conditions",
        },
        {
          id: 1,
          title: "Changes to This Terms and Conditions",
        },
        {
          id: 1,
          title: "Contact Us",
        },
      ],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  beforeCreate() {
    if (this.$route.path === "/TermsConditions") {
      this.$router.push({ name: "TermsConditions" });
    }
  },
  methods: {
    scrollToHeadline(title) {
      const el = document.getElementById(title);
      const offset = 200; // adjust this value to set the offset from the top of the page

      if (el) {
        const rect = el.getBoundingClientRect();
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;

        window.scrollTo({
          top: rect.top + scrollTop - offset,
          behavior: "smooth",
        });
      }
    },
    generateLink(id) {
      return "#" + id;
    },
  },
};
</script>

<style scoped>
* {
  font-family: "GeneralSans-Medium", "DM Sans", sans-serif;
  text-align: justify;
}
.body_wrap {
  padding: 64px 0px 64px 0px;
}
.container {
  max-width: 85%;
  margin-inline: auto;
  display: flex;
  gap: 64px;
  margin-bottom: 64px;
}

.bookmark-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  max-width: 350px;
  width: 100%;
  position: sticky;
  position: -webkit-sticky;
  top: 200px;
  height: calc(100% - 200px);
}

.bookmark {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
}
.bookmark a {
  transition: 0.3s;
}

.bookmark a:hover {
  color: #0009b3;
  font-size: 17px;
}
.bookmark a:focus,
.bookmark a:active {
  color: #0009b3;
}

.bookmark-content {
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 64px;
}

.update {
  color: var(--grey-grey-1, #303237);
  font-family: "GeneralSans-Medium", "DM Sans", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  /* 150% */
  letter-spacing: 0.08px;
}

.date {
  color: var(--grey-grey-3, #7e8494);
  font-family: "GeneralSans-Medium", "DM Sans", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  /* 150% */
  letter-spacing: 0.08px;
}

#terms {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

#terms h1 {
  color: #00044b;
  font-family: "GeneralSans-Medium", "DM Sans", sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.48px;
}

.tops {
  display: flex;
  gap: 16px;
}

#terms p {
  color: var(--grey-grey-3, #7e8494);
  font-family: "GeneralSans-Medium", "DM Sans", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
  /* 150% */
}

.links {
  display: flex;
  flex-direction: column;
}

.links a {
  color: var(--primary-p-300, #0009b3);
  font-family: "GeneralSans-Medium", "DM Sans", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
  /* 150% */
  text-decoration-line: underline;
}

#change p {
  color: var(--grey-grey-3, #7e8494);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
  /* 150% */
}

#change {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
}
#change h6 {
  color: var(--grey-grey-1, #303237);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
  /* 150% */
}
#contact h6 {
  color: var(--grey-grey-1, #303237);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
  /* 150% */
}

#contact p {
  color: var(--grey-grey-3, #7e8494);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
  /* 150% */
}

#contact {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  /* margin-bottom: 300px; */
}
@media screen and (max-width: 1200px) {
  .bookmark-group {
    display: none;
  }
  .bookmark-content {
    max-width: 85%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 64px;
  }
  #terms h1 {
    color: #00044b;
    font-family: "GeneralSans-Medium", "DM Sans", sans-serif;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.48px;
  }
}
@media screen and (max-width: 600px) {
  .bookmark-group {
    display: none;
  }
  .bookmark-content {
    max-width: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 64px;
  }
  /* .body_wrap {
    padding: 20px 0px 20px 0px;
  } */
  .container {
    max-width: 89%;
    margin-inline: auto;
    display: flex;
    gap: 64px;
    margin-bottom: 64px;
  }
  #terms h1 {
    color: #00044b;
    font-family: "GeneralSans-Medium", "DM Sans", sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.48px;
  }
  #change h6,
  #contact h6 {
    text-align: left;
    font-size: 17px;
    font-weight: 600;
  }
  #terms {
	gap: 16px;
	margin-top: 16px;
  }
  #terms p {
  color: var(--grey-grey-3, #7e8494);
  font-family: "GeneralSans-Medium", "DM Sans", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  /* 150% */
}
}
</style>