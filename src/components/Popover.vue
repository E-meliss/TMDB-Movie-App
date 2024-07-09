<template>
  <div class="relative" @mouseover="showPopover" >
    <slot></slot>
    <div v-if="visible" class="absolute bg-white text-black p-4 shadow-md rounded mt-2 popover-content" @mouseenter="showPopover" @mouseleave="hidePopover">
      <ul>
        <li class="popover-item" v-for="item in items" :key="item" @click="navigate(item)">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Popover",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    showPopover() {
      this.visible = true;
    },
    hidePopover() {
      this.visible = false;
    },
    navigate(item) {
      this.$emit("navigate", item);
    },
  },
};
</script>

<style scoped>
.popover-content {
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 50;
  min-width: 200px;
  color: black;
}
.popover-item {
  cursor:pointer;
}
</style>
