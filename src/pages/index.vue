<template>
  <div>
    <debounce-search/>
  </div>
</template>
<script>
import DebounceSearch from '@/components/DebounceSearch'
export default {
  name: 'index',
  components: {
    DebounceSearch
  }
}
</script>
