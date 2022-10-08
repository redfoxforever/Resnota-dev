<template>
    <div class="catalog__tags">
        <span
          class="catalog__tag"
          v-for="(tag, idx) in tags"
          :key="idx"
          :class="{ active: tag.active }"
          @click="addActiveTag(idx, $event)"
        >
          {{ tag.name }}
        </span>
    </div>
</template>

<script>
export default {
    name: "Tags",
    props: {
      tags: {
        type: Array,
        default: [
          {
            name: "все",
            active: true
          }
        ],
        required: true
      }
    },
    methods: {
      addActiveTag(id, event) {
        this.$emit('clickedBtn', event)

        this.tags.forEach(element => {
          element.active = false
        });
        this.tags[id].active = true;
      },
    }
}
</script>

<style lang="scss" scoped>

.catalog__tags {
  max-width: 775px;
  width: 100%;
  gap: 10px;
  display: flex;
  flex-wrap: wrap;

  .catalog__tag {
    padding: 9px 14px;
    border-radius: 20px;
    border: 1px solid #d5af86;
    font-size: 15px;
    color: var(--main-blue-color);
    text-transform: capitalize;
    cursor: pointer;
    transition: 0.4s;

    &.active {
      border-color: #b8c1ca;
      color: #717171;
    }

    &:hover {
      border-color: #b8c1ca;
      color: var(--main-white-color);
      background-color: #b8c1ca;
    }
  }
}

</style>