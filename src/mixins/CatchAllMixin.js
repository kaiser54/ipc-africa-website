const CatchAllMixin = {
    methods: {
      goToRoute(routeName) {
        this.$router.push({ name: routeName, params: { catchAll: 'path' } });
      },
    },
};

export default CatchAllMixin;
  