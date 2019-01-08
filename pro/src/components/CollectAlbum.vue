<template>
	<div class="">
		<mt-cell title="创建新专辑" >
		  <img slot="icon" src="../../build/logo.png" width="30" height="30" style="display: inline-block;border-radius: 50%;">
		</mt-cell>

	</div>
</template>

<script>
			export default {
  name: 'CollectAlbum',
  data () {
    return {
      src: ''
    }
  }
}
</script>

<style>
	.mint-cell-title{
		font-size: 14px;
	}
	.mint-cell-text{
		margin-left: 10px;
	}
	.mint-cell-wrapper{
		margin-top: 5px;
	}
</style>