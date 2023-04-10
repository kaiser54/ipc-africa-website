<template>
  <div class="profile-group">
    <div class="author-group">
      <div class="author-image">
        <img src="../assets/courage-michael.png" alt="Courage Michael" />
      </div>
      <div class="author-details">
        <p class="author-name">Courage Michael</p>
        <p class="author-post">Content writer</p>
      </div>
    </div>
    <div class="bookmark-group">
      <h2>ON THIS PAGE</h2>
      <div class="bookmark">
        <a href="#bp">Better pricing</a>
        <a href="#ip">Increased productivity</a>
        <a href="#el">Ease of logistics</a>
        <a href="#ie">Inevitable emergencies</a>
        <a href="#ts">Timesaving</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.profile-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 64px;
}
.author-group {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
}
.author-image {
  width: 48px;
  height: 48px;
}
.author-image img {
  width: 48px;
  height: auto;
  object-fit: cover;
  border-radius: 50%;
}
.author-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
}
.author-details p {
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  letter-spacing: 0.005em;

  /* Grey/Grey1 */

  color: #303237;
}
.author-details p.author-post {
  font-family: "GeneralSans-Regular", "DM Sans", sans-serif;
  color: #7e8494;
  font-weight: 400;
  letter-spacing: 0.01em;
}
.bookmark-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
}
.bookmark-group h2 {
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  letter-spacing: 0.005em;

  /* Grey/Grey1 */

  color: #303237;
}
.bookmark {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
}
.bookmark a {
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  letter-spacing: 0.01em;

  /* Grey/Grey2 */

  color: #565c69;
  transition: 0.2s ease-in-out;
}
.bookmark a:hover {
  color: #0009b3;
  font-size: 17px;
}
.bookmark a:focus,
.bookmark a:active {
  color: #0009b3;
}
@media screen and (max-width: 1200px) {
  .bookmark-group {
    display: none;
  }
}
</style>
