<template>
  <div class="about">
    <div class="about-wrap">
      <div class="about-img">
        <div class="img">
          <img src="../assets/image-4.png" alt="" />
        </div>
      </div>
      <div class="about-content-group">
        <div class="about-content">
          <h1 class="about-header">Be the first to know when we go live.</h1>
          <p class="about-copy">
            We are building digital products to make it easy for you work with
            us. Join waitlist.
          </p>
          <div class="waitlist-cta">


            <form action="/subscribe" method="POST" class="form">
              <div class="form-item">
                <input class="input-mail" v-model="email_value" type="email" name="email" id="email" placeholder="Enter your email address" required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                <input type="submit" value="Join waitlist" class="button" id="cta"  @click="joinList"/>
              </div>
              <div id="error" :class ="{ shown2: shown }" class="error">
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8 11.1667C7.86814 11.1667 7.73925 11.2058 7.62962 11.279C7.51999 11.3523 7.43454 11.4564 7.38408 11.5782C7.33362 11.7 7.32042 11.8341 7.34614 11.9634C7.37187 12.0927 7.43536 12.2115 7.52859 12.3048C7.62183 12.398 7.74062 12.4615 7.86994 12.4872C7.99926 12.5129 8.1333 12.4997 8.25512 12.4493C8.37694 12.3988 8.48106 12.3134 8.55431 12.2037C8.62757 12.0941 8.66667 11.9652 8.66667 11.8334C8.66667 11.6565 8.59643 11.487 8.4714 11.3619C8.34638 11.2369 8.17681 11.1667 8 11.1667ZM15.1133 12.1467L9.74667 2.81335C9.5732 2.50236 9.31986 2.24332 9.01279 2.063C8.70573 1.88267 8.35609 1.7876 8 1.7876C7.6439 1.7876 7.29426 1.88267 6.9872 2.063C6.68014 2.24332 6.42679 2.50236 6.25333 2.81335L0.919999 12.1467C0.740529 12.4494 0.644094 12.794 0.640428 13.1459C0.636763 13.4978 0.725997 13.8444 0.899123 14.1507C1.07225 14.4571 1.32314 14.7123 1.62645 14.8907C1.92977 15.0691 2.27479 15.1643 2.62667 15.1667H13.3733C13.728 15.1702 14.0773 15.0793 14.3853 14.9033C14.6933 14.7273 14.9489 14.4726 15.126 14.1652C15.3031 13.8579 15.3952 13.509 15.393 13.1542C15.3908 12.7995 15.2943 12.4518 15.1133 12.1467ZM13.96 13.48C13.9016 13.584 13.8163 13.6704 13.7131 13.7302C13.6099 13.79 13.4926 13.821 13.3733 13.82H2.62667C2.50741 13.821 2.39006 13.79 2.28688 13.7302C2.18369 13.6704 2.09843 13.584 2.04 13.48C1.98149 13.3787 1.95068 13.2637 1.95068 13.1467C1.95068 13.0297 1.98149 12.9147 2.04 12.8134L7.37333 3.48002C7.42928 3.37082 7.51427 3.27917 7.61896 3.21518C7.72365 3.15119 7.84397 3.11733 7.96667 3.11733C8.08936 3.11733 8.20968 3.15119 8.31437 3.21518C8.41906 3.27917 8.50405 3.37082 8.56 3.48002L13.9267 12.8134C13.9928 12.9132 14.0308 13.0291 14.0367 13.1488C14.0425 13.2684 14.0161 13.3875 13.96 13.4934V13.48ZM8 5.83335C7.82319 5.83335 7.65362 5.90359 7.52859 6.02861C7.40357 6.15364 7.33333 6.32321 7.33333 6.50002V9.16669C7.33333 9.3435 7.40357 9.51307 7.52859 9.63809C7.65362 9.76311 7.82319 9.83335 8 9.83335C8.17681 9.83335 8.34638 9.76311 8.4714 9.63809C8.59643 9.51307 8.66667 9.3435 8.66667 9.16669V6.50002C8.66667 6.32321 8.59643 6.15364 8.4714 6.02861C8.34638 5.90359 8.17681 5.83335 8 5.83335Z"
                    fill="#FF4040" />
                </svg>
                <p>Please enter an email</p>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        email_value: "",
        shown: true
      }
    },

    methods: {
      joinList(event) {
        event.preventDefault()
        if (this.email_value == null || this.email_value == "") {
          this.shown = false
          // console.log('error')
        } else {
          let fetchData = {
            method: 'POST',
            body: JSON.stringify({email: this.email_value, js: true}),
            headers: {"content-type": "application/json"}
          }

          fetch('/subscribe', fetchData)
            .then(res => {
              if (res.ok) {
                console.log('wow')
              } else {
                this.shown = true
              }
            })
        }

      }
    }
  }
</script>

<style scoped>
.about {
  /* height: calc(100vh - 120px); */
  /* height: 100vh; */
  margin-top: 120px;
  width: 100%;
}

.about-wrap {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  width: 95%;
  margin-left: auto;
}

.about-img {
  position: relative;
}

.about-wrap .about-img .img img {
  /* height: 687px; */
  /* position: absolute; */
  max-width: 726px;
  width: 100%;
  right: 0;
}

.about-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;

  max-width: 511px;
}

.about-header {
  font-weight: 600;
  font-size: 48px;
  line-height: 65px;
  letter-spacing: -0.01em;

  /* Primary/primary-900 */

  color: #00044b;
  max-width: 463px;
}

.about-copy {
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  /* or 150% */

  letter-spacing: 0.005em;
  max-width: 463px;
  color: #666669;
}

.waitlist-cta {
  width: 100%;
}

.form-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-inline: 32px 16px;
  gap: 10px;
  height: 80px;
  width: 100%;
  background: #E8E8E9;
  border-radius: 100px;
}

input {
  outline: none;
  border: none;
  background: transparent;
  width: 100%;
  height: 100%;
}

input[placeholder="Enter your email address"] {
  font-family: "GeneralSans-Medium";
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  letter-spacing: 0.01em;

  /* Neutral/neutral-200 */

  color: #969698;
}

.button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 32px;

  width: 153px;
  height: 48px;

  /* Primary/primary-500 */

  background: #0009B3;
  border-radius: 100px;
}

input[value="Join waitlist"] {
  font-family: "GeneralSans-Medium";
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
}


.error {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
  margin-left: 32px;
  margin-top: 8px;
}

.error p {
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height, or 150% */

  letter-spacing: 0.01em;

  /* Error/error-500 */

  color: #FF4040;
}

.shown2 {
  display: none;
}
@media screen and (max-width: 992px) {
  .about-wrap {
    flex-direction: column;
  }

  .about-header {
    font-family: "GeneralSans-Semibold";
    font-weight: 600;
font-size: 34px;
line-height: 46px;
letter-spacing: -0.01em;

max-width: 342px;
  }

  .about-copy {
    font-weight: 500;
font-size: 14px;
line-height: 21px;

max-width: 288.81px;
  }
  .form-item {
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: center;
    padding-inline: 0;
    gap: 16px;
    height: auto;
    background: none;
    width: 100%
  }
  .button {
    width: 100%;
  }
  .input-mail {
    display: flex;
flex-direction: row;
align-items: center;
padding: 16px;
gap: 10px;

width: 100%;
height: 48px;

/* Neutral/neutral-50 */

background: #E8E8E9;
border-radius: 100px;

  }
  .about {
    margin-bottom: 64px;
  }
  .about-content {
    padding-right: 5%;
  }
  .error {
    justify-content: center;
    margin-inline: auto;
  }
}
</style>
