<template>
  <div class="icon-wrap">
    <svg
      :width="width"
      :height="height"
      :aria-labelledby="name"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      role="presentation"
    >
      <g :fill="color">
        <component :is="name" />
      </g>
    </svg>
  </div>
</template>

<script>
import IconSearch from '@/assets/svg/IconSearch'
import IconFavorite01 from '@/assets/svg/IconFavorite01'
import IconFavorite02 from '@/assets/svg/IconFavorite02'
import IconCart from '@/assets/svg/IconCart'

export default {
  components: {
    search: IconSearch,
    favorite01: IconFavorite01,
    favorite02: IconFavorite02,
    cart: IconCart,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    width: {
      type: [Number, String],
      default: 20,
    },
    height: {
      type: [Number, String],
      default: 20,
    },
    color: {
      type: String,
      default: 'currentColor',
    },
  },
}
</script>

<style lang="scss" scoped>
.icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
}
svg {
  display: inline-block;
  color: #2a3139;
}
</style>
