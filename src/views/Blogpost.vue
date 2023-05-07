<template>
  <head>
    <title>{{ this.myData.postTitle }} | Blog - IPC</title>
    <meta
      name="description"
      content="Independence Purchasing Company is a leading procurement services provider, offering experienced professionals, tailored procurement services, and a commitment to cost-effectiveness. Read on to learn why we're the best choice for your procurement needs."
    />
    <meta
      name="keywords"
      content="Independence Purchasing Company, procurement services, procurement, procurement professionals, cost-effective procurement, business procurement"
    />
  </head>

  <div class="blogpost-container">
    <div class="textgroup-frame">
      <div class="textframe">
        <div class="textframe-header">
          <p>{{ myData.category }}</p>
          <p id="timestamp">{{ this.myData.timestamp }}</p>
        </div>
        <h1 v-html="this.myData.title"></h1>
        <p class="snippet">{{ this.myData.snippet }}</p>
      </div>
      <img :src="`/${this.myData.image}`" alt="Image" />
      <div class="content-group">
        <div class="profile-group">
          <div class="profile-group" style="position: sticky; top: 150px">
            <div class="author-group">
              <div class="author-image">
                <img
                  :src="`/${this.myData.profile ? this.myData.profile[0]?.image : ''}`"
                  alt="Image"
                />
              </div>
              <div class="author-details">
                <p class="author-name">
                  {{ this.myData.profile ? this.myData.profile[0]?.name : "" }}
                </p>
                <p class="author-post">
                  {{ this.myData.profile ? this.myData.profile[0]?.post : "" }}
                </p>
              </div>
            </div>
            <div class="bookmark-group">
              <h2>ON THIS PAGE</h2>
              <div class="bookmark">
                <a
                  v-for="(head, index) in this.myData.headline"
                  :key="index"
                  :href="generateLink(head.title)"
                  @click.prevent="scrollToHeadline(head.title)"
                  >{{ head.title }}</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="">
            <p v-for="(content, index) in this.myData.content" :key="index">
              {{ content.paragraph }}
            </p>
          </div>
          <div
            class="content-section"
            v-for="(headline, index) in this.myData.headline"
            :key="index"
          >
            <h2 :id="headline.title">{{ headline.title }}</h2>
            <p>{{ headline.snippet }}</p>
            <div class="content-image">
              <img v-if="headline.image" :src="`/${headline.image}`" alt="Image" />
            </div>
          </div>
          <p
            v-for="(conclusion, index) in this.myData.conclusion"
            :key="index"
            v-html="conclusion.snippet"
          ></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jsonData from "@/../public/blogposts.json";
export default {
  props: {
    postTitle: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      myPostTitle: this.$route.params.postTitle,
      myData: {},
      profile: "",
    };
  },
  methods: {
    generateLink(id) {
      return "#" + id;
    },
    scrollToHeadline(title) {
      const el = document.getElementById(title);
      const offset = 200; // adjust this value to set the offset from the top of the page

      if (el) {
        const rect = el.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        window.scrollTo({
          top: rect.top + scrollTop - offset,
          behavior: "smooth",
        });
      }
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    this.myData = jsonData.find(
      (item) => item.postTitle === this.myPostTitle);
    // this.myData = jsonData.find(
    //   (item) => item.postTitle === "9_popular_markets_in_Lagos_you_need_to_visit"
    // );
    // this.myData = jsonData.find((item) => item.postTitle === "Food_vendors_in_Lagos_are_hiring_procurers_for_their_business");

  },
};
</script>

<style scoped>
.blogpost-container {
  padding: 64px 0 64px;
}
.textgroup-frame {
  max-width: 1031.18px;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 64px;
  margin-bottom: 64px;
}
.textgroup-frame h1 {
  max-width: 820px;
  font-weight: 600;
  font-size: 48px;
  line-height: 65px;
  letter-spacing: -0.01em;
}
.textgroup-frame img {
  width: 100%;
}
.content-group {
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 1200px) {
  .textgroup-frame {
    flex-direction: column;
    width: 90%;
    padding: 0px;
    gap: 16px;
  }
  .textgroup-frame h1 {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
  }
  .content-group {
    flex-direction: column;
    gap: 24px;
  }
}

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
.content-image img {
  margin-top: 32px;
  max-width: 450px;
}
@media screen and (max-width: 1200px) {
  .content-section h2 {
    font-size: 20px;
    line-height: 30px;
    /* identical to box height, or 150% */

    letter-spacing: 0.005em;
  }
}

.textframe {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
}
.textframe-header {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
}
.textframe-header p {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  letter-spacing: 0.005em;

  /* Grey/Grey1 */

  color: #303237;
}
.textframe-header p#timestamp {
  color: #7e8494;
}
.textframe h1 {
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 64.8px;

  /* Primary/primary-900 */

  color: #00044b;
}

.textframe p.snippet {
  font-size: 20px;
  line-height: 30px;
  /* or 150% */

  letter-spacing: 0.005em;

  /* Grey/Grey3 */

  color: #7e8494;
}
@media screen and (max-width: 1200px) {
  .textframe {
    gap: 16px;
  }
  .textframe-header p {
    font-size: 14px;
    line-height: 21px;
  }
  .textframe h1 {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
  }
  .textframe p.snippet {
    font-size: 16px;
    line-height: 24px;
    /* or 150% */

    letter-spacing: 0.005em;
  }
}

.textframe h1 span {
  display: block;
}

@media screen and (max-width: 1200px) {
  .textframe p.snippet {
    font-size: 16px;
    line-height: 24px;
    /* or 150% */

    letter-spacing: 0.005em;
  }
  span {
    display: inline !important;
  }
}

.profile-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
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
.router-link-active .router-link-exact-active {
  color: #0009b3;
}
</style>
