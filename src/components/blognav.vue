<template>
  <div class="blognav">
    <ul>
      <li>
        <router-link :to="{ name: 'blog' }">All</router-link>
      </li>
      <li>
        <a href="#services">Marketing</a>
        <!-- <router-link :to="{ name: '#services' }">Services</router-link> -->
      </li>
      <li>
        <router-link :to="{ name: 'blog' }">Product Update</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'blog' }">Inside IPC</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'blog' }">Business Stories</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.blognav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding: 0px 390px; */
  gap: 10px;
  position: fixed;
  width: 100%;
  /* height: 79px; */
  left: 0px;
  z-index: 15;
  top: 120px;
  background: #ffffff;
  box-shadow: 0px 4px 12px rgb(23 43 77 / 8%);
}
ul li a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;

  height: 71px;

  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  letter-spacing: 0.01em;

  /* Grey/Grey1 */

  color: #303237;

  /* Primary/P300 */
}

ul li a:hover,
ul li a:active {
  color: #0009b3;
  border-bottom: 4px solid #0009b3 !important;
}
</style>
