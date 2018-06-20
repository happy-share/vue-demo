<template>
  <div>
    <wired-card elevation="5" class="">
      <h4>Elevation: 5 (max)</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </wired-card>
    <wired-button>Click Me</wired-button>
    <wired-listbox>
      <wired-item value="0" text="000"></wired-item>
      <wired-item value="1" text="111"></wired-item>
      <wired-item value="2" text="222"></wired-item>
      <wired-item value="3" text="333"></wired-item>
    </wired-listbox>
  </div>
</template>
<script>
import('wired-elements')

export default {
  name: 'wired-elements',
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
  }
}
</script>
