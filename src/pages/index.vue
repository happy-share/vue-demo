<template>
  <div>
    <debounce-search/>
    <leaflet-map/>
  </div>
</template>
<script>
import DebounceSearch from '@/components/DebounceSearch'
import LeafletMap from '@/components/LeafletMap'
export default {
  name: 'index',
  components: {
    DebounceSearch,
    LeafletMap
  }
}
</script>
