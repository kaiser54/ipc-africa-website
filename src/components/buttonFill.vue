<template>
  <button class="button-fill">
    <p>Get Started</p>
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.4538 11.8008L17.4537 11.8008L17.4575 11.81C17.5075 11.9317 17.5075 12.0683 17.4575 12.19L17.4574 12.19L17.4538 12.1992C17.4306 12.2592 17.396 12.3141 17.3519 12.361L12.3564 17.3564L12.355 17.3579C12.3085 17.4048 12.2532 17.442 12.1923 17.4673C12.1314 17.4927 12.066 17.5058 12 17.5058C11.934 17.5058 11.8686 17.4927 11.8077 17.4673C11.7468 17.442 11.6915 17.4048 11.645 17.3579L11.6421 17.355C11.5952 17.3085 11.558 17.2532 11.5327 17.1923C11.5073 17.1314 11.4942 17.066 11.4942 17C11.4942 16.934 11.5073 16.8686 11.5327 16.8077C11.558 16.7468 11.5952 16.6915 11.6421 16.645L11.643 16.6441L14.943 13.3541L15.7997 12.5H14.59H7C6.86739 12.5 6.74022 12.4473 6.64645 12.3536C6.55268 12.2598 6.5 12.1326 6.5 12C6.5 11.8674 6.55268 11.7402 6.64645 11.6464C6.74022 11.5527 6.86739 11.5 7 11.5H14.59H15.7997L14.943 10.6459L11.6436 7.35645C11.6435 7.3564 11.6434 7.35634 11.6434 7.35629C11.549 7.26177 11.4959 7.13362 11.4959 7C11.4959 6.9338 11.5089 6.86825 11.5343 6.80709C11.5596 6.74594 11.5967 6.69037 11.6436 6.64356C11.7381 6.54902 11.8663 6.49591 12 6.49591C12.0662 6.49591 12.1317 6.50895 12.1929 6.53428C12.2541 6.55962 12.3096 6.59675 12.3564 6.64356L12.7083 6.29169L12.3564 6.64356L17.3519 11.639C17.396 11.6859 17.4306 11.7408 17.4538 11.8008Z"
      />
    </svg>
  </button>
</template>

<script>
export default {
  name: "buttonFill",
};
</script>

<style >
button {
  height: 48px;
  border: none;
  outline: none;
  background: transparent;
  padding: 0 32px;
  border-radius: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.button-fill {
  background-color: var(--fc-blue);
}

button p {
  font-family: "GeneralSans-Medium", "DM Sans", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}

.button-fill p {
  color: #ffffff;
}

.button-fill svg {
  fill: #ffffff;
  stroke: #ffffff;
}
.button-fill:hover {
  background: #0008a3;
}
</style>
