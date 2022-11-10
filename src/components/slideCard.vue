<template>
  <div class="slide-box-con">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.slide-box-con {

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 32px;
gap: 32px;

max-width: 297px;

/* White */

background: #FFFFFF;
/* Neutral/neutral-100 */

border: 1px solid #B8B8BA;
border-radius: 16px;
}
</style>