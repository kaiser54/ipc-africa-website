<template>
  <div class="content">
    <div class="">
      <p>
        This is a secret top food vendors in Lagos do not want you to know! Read on to
        find out.
      </p>
      <p>
        Being a food vendor can be very demanding, especially when you have to keep up
        with top competitors. You need to have the ability to stay on top of issues as
        much as possible in an already oversaturated market, keep consumers satisfied and
        BUY HEALTHY PRODUCTS to stock your inventory.
      </p>
      <p>
        Any food seller in Lagos would tell you for free that procurement of food
        materials has been one of the key issues faced by food vendors. The pressure of
        finding reliable sellers of healthy food materials at a price that’s business
        friendly is usually an onerous task.
      </p>
      <p id="bp">
        Fortunately, a smarter way has been discovered by food vendors to buy food
        materials without breaking a sweat. The nub of this strategy involves the use of
        skilled procurement agents to buy food materials. Imagine running your food
        business without having to worry about navigating Lagos traffic, finding
        trustworthy sellers, finding knowledgeable buyers, and stocking your inventory
      </p>
      <p>
        Food vendors can now eliminate the hassle that comes with procuring and moving
        food material, and focus on other important aspect of running their business.
      </p>
    </div>
    <div class="content-section">
      <h2 id="ip">Better Pricing</h2>
      <p>
        Food vendors can evade nightmarish inflated prices of food materials by hiring
        knowledgeable buyers to procure quality food materials from the right source.
        Inflated prices by food suppliers can hamper the financial growth of food
        businesses. Vendors can now get the best out of food suppliers without having to
        worry about inaccurate buying strategies.
      </p>
    </div>
    <div class="content-section">
      <h2 id="el">Increased productivity</h2>
      <p>
        The removal of onerous and time-consuming processes associated with traditional
        food procurement will help business owners run businesses smoothly with less
        hassle. The arduous process of purchasing can be a destabilizing factor that
        hampers a vendor’s quality of service, outsourcing this task is an efficient
        strategy that will boost the productivity of food businesses.
      </p>
    </div>
    <div class="content-section">
      <h2 id="ie">Ease of logistics</h2>
      <p>
        One of the common problems faced by business owners in Lagos is logistics. The
        hassle that comes with enduring terrible roads and unbearable traffic can affect
        the procurement process of food businesses.
      </p>
    </div>
    <div class="content-section">
      <h2 id="ts">Inevitable emergencies</h2>
      <p>
        Business owners can’t always stay on top of every situation. Sometimes they are
        faced with situations that are unavoidable like unstocked inventories, or
        inadequate food materials. Food vendors can solve this problem just at the click
        of a button. Procurement companies like IPC
        <router-link :to="{ name: 'home' }">(Independent purchasing company)</router-link>
        are a typical go-to plug for buying food materials.
      </p>
    </div>
    <div class="content-section">
      <h2 id="">Timesaving</h2>
      <p>
        Business owners can attest to the fact that procuring quality food materials can
        be time-consuming, to say the least. Hiring procurement agents will help them
        evade the tedious and time-wasting process it takes to find quality products and
        reliable food suppliers.
      </p>
    </div>
    <p>
      The competition that exists among food businesses can’t be easily overlooked. To be
      able to offer outstanding service to impatient customers, hiring food procurement
      agents is the way to go.
    </p>
    <p>
      <router-link :to="{ name: 'home' }"
        >IPC (Independent purchasing company)</router-link
      >
      is a reliable food procurement, supply chain, and logistics powerhouse that every
      food vendor in Lagos should know about. We take away the hassle of procuring food
      materials from food vendors. We are the game-changer for food vendors in Lagos; we
      are on a mission to help food businesses buy healthy food products for their
      customers, connect them to reliable food suppliers, and offer swift logistics to
      broker a wholesome service.
    </p>
    <waitlist />
  </div>
</template>

<script>
import waitlist from "./waitlist.vue";
export default {
  components: {
    waitlist,
  },
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;

  max-width: 715px;
}
.content p {
  font-family: "GeneralSans-Medium", "DM Sans", sans-serif;

  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  letter-spacing: 0.01em;

  /* Grey/Grey3 */

  color: #7e8494;
}
.content a {
  color: #0009b3;
  text-decoration: underline;
}
.content-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.content-section h2 {
  font-size: 24px;
  line-height: 36px;
  /* identical to box height, or 150% */

  /* Grey/Grey1 */

  color: #303237;
}
@media screen and (max-width: 1200px) {
  .content-section h2 {
    font-size: 20px;
    line-height: 30px;
    /* identical to box height, or 150% */

    letter-spacing: 0.005em;
  }
}
</style>
