<template>
	<div class="hello">
		<mt-header title="心愿单" style="background: #F8F8F8;color: #101010;">
			  <router-link to="#" slot="left">
			    <mt-button icon="back" @click="back">返回</mt-button>
			  </router-link>
		</mt-header>
		
		<section>
			<mt-checklist
			  title="复选框列表"
			  v-model="value"
			  :options="['选项A']">
			</mt-checklist>
		</section>
	</div>
</template>

<script>
	export default {
  name: 'Wish',
  data () {
    return {
      src: ''
    }
  }
}
</script>

<style>
	
</style>