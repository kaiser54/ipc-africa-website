<template>
  <div class="__vue-error-page">
    <div class="error">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="90"
        height="90"
        fill="#DBE1EC"
        viewBox="0 0 48 48"
      >
        <path
          d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
        ></path>
      </svg>
      <div class="title">This page could not be found</div>
      <p class="description">
        <a href="/" class="error-link nuxt-link-active">Back to the home page</a>
      </p>
    </div>
  </div>
</template>

<style scoped>
/* .wrapper {
    display: none !important;
} */
.__vue-error-page {
    padding: 1rem;
    background: #F7F8FB;
    color: #47494E;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
}
.error {
    display: flex;
    flex-direction: column !important;
    align-items: center;
    padding: 0px;
    gap: 8px;
    margin-top: 8px;
}
.error svg {
    fill: #ff3b2d;
}
</style>