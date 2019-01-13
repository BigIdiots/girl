<template>
<div class="hello">
	<header>
	 	<img class="head" :src="src">
	 	<router-link to="/follow" tag="span">关注</router-link>
		<router-link to="/discover" tag='span'>发现</router-link>
		<router-link to="/about" tag='span'>附近</router-link>
	</header>
	<mt-search v-model="value" autofocus="true" placeholder="大家都在搜“玩转春节”">
		<!--<mt-cell
		    v-for="item in result"
		    :title="item.title"
		    :value="item.value">
		</mt-cell>-->
	</mt-search>

</div>
</template>

<script>
	
	
	export default {
  name: 'Search',
  data () {
    return {
      value: ''
    }
  },
  mounted(){
  	
  },
  methods(){
  	
  }
}
</script>

	

<style>
</style>