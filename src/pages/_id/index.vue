<script>
export default {
  name: 'userID',
  created(){
    console.log('route', this.$route.params.id)
  }
}
</script>

<template>
  <div>
    <h1>id file here</h1>
  </div>
</template>