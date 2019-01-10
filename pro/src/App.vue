<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'App'
	}
</script>

<style>
	body,html,figure,figcaption,h1,h2,h3,h4,h5,h6,p,ul,li {
		margin: 0;
		padding: 0;
	}
	
	a {
		text-decoration: none;
	}
	
	img {
		display: block;
		border: none;
	}
	
	ul,li {
		list-style: none;
	}
	
	p.multiLine {
		width: 100%;
		word-wrap: break-word;
		word-break: break-all;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: 14px;
	}
</style>