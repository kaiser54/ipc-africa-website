<template>
  <head>
    <title>Blog - Independece Purchasing Company</title>
    <meta
      name="description"
      content="Independent Purchasing Company is a leading procurement services provider, offering experienced professionals, tailored procurement services, and a commitment to cost-effectiveness. Read on to learn why we're the best choice for your procurement needs."
    />
    <meta
      name="keywords"
      content="Independent Purchasing Company, procurement services, procurement, procurement professionals, cost-effective procurement, business procurement"
    />
  </head>
  <div class="blog-container">
    <blognav style="display: none" />
    <blogframe class="blog-flex"/>
  </div>
</template>

<script>
import blognav from "@/components/blognav.vue";
import blogframe from "@/components/blogframe.vue";
export default {
  components: {
    blognav,
    blogframe,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  beforeCreate() {
    if (this.$route.path === "/blog") {
      this.$router.push({ name: "blog" });
    }
  },
  // created() {
  // fetch('blogposts.json')
  // .then(response => {
  //   if (!response.ok) {
  //     throw new Error('Network response was not ok');
  //   }
  //   return response.json();
  // })
  // .then(data => {
  //   console.log(data);
  // })
  // .catch(error => {
  //   console.log('Fetch error:', error);
  // });

  // },
};
</script>

<style scoped>
.blog-flex {
  display: flex;
  flex-direction: column;
  gap: 80px;
}
</style>
