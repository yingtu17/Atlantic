<template>
	<div>
		<router-view />
	</div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    _isMobile(){
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag;
    }
  },
  mounted: function() {
    if (this._isMobile()) {
      this.$router.push('/');
    }else {
      this.$router.push('/prompt');
    }
  },
}

</script>

<style scoped></style>
