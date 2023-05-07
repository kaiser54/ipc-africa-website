<template>
  <div class="blogframe-container">
    <div v-for="(item, index) in myData" :key="index">
      <router-link :to="'/blog/' + item.postTitle" class="img-textframe">
        <img :src="item.image" alt="" />
        <div class="textbtn-group">
          <div class="textframe">
            <div class="textframe-header">
              <p>{{ item.category }}</p>
              <p id="timestamp">{{ item.timestamp }}</p>
            </div>
            <h1 v-html="item.title"></h1>
            <p class="snippet">
              {{ item.snippet }}
            </p>
          </div>

          <button class="shift">
            <p>Read more</p>
            <svg
              width="21"
              height="17"
              viewBox="0 0 21 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5 8.55334L12.5 15.5533M1.5 8.55334H19.5H1.5ZM19.5 8.55334L12.5 1.55334L19.5 8.55334Z"
                stroke="#0009B3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import jsonData from '@/../public/data.json';

export default {
  components: {
  },
  data() {
    return {
      myData: jsonData,
    };
  },
};
</script>

<style scoped>
.blogframe-container {
  padding: 64px 0 64px;
}
.img-textframe {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 124px;
  width: 85%;
  max-width: 1243px;
  margin-inline: auto;
}
.img-textframe img {
  max-width: 505.5px;
  width: 100%;
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
  font-size: 34px;
  line-height: 46px;

  /* Primary/primary-900 */

  color: #00044b;
}

.textframe span {
  display: block;
}
.textframe p.snippet {
  font-size: 20px;
  line-height: 30px;
  /* or 150% */

  letter-spacing: 0.005em;

  /* Grey/Grey3 */

  color: #7e8494;
}
.textbtn-group button {
  padding: 0;
}
a:hover h1 {
  text-decoration-line: underline;
}
.shift {
  transition: 0.4s ease-out;
}
a:hover .shift {
  gap: 3rem;
}

@media screen and (max-width: 1200px) {
  .img-textframe {
    flex-direction: column;
    width: 90%;
    gap: 24px;
  }
  .img-textframe img {
    max-width: 100%;
  }
  .textbtn-group button {
    justify-content: flex-start;
  }
  .blogframe-container {
    padding-top: 64px;
  }
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
.router-link-active {
  color: #0009b3;
}
</style>
