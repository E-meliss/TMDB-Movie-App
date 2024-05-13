<script>
import SearchDropdown from "./SearchDropdown.vue";
import { onBeforeMount, ref, watch } from "vue";

export default {
  components: { SearchDropdown },
  setup() {
    const search = ref("");
    const isOpen = ref(false);

    function hideDropdown() {
      isOpen.value = false;
    }

    function showDropdown() {
      isOpen.value = true;
    }

    watch(search, () => {
      isOpen.value = true;
    });

    onBeforeMount(() => {
      window.addEventListener("keydown", (e) => {
        if (e.key === " " && e.ctrlKey) {
          document.getElementById("inner_search_v4").focus();
        }
      });
    });

    const updatePage = () => {
      location.reload();
    };

    return {
      search,
      isOpen,
      hideDropdown,
      showDropdown,
      updatePage,
      emitsOptions: {
        click: true
      }
    };
  },
};

</script>

<template>
<div class="banner-container bg-img flex flex-col items-start">
    <div class="title flex items-start flex-col gap-10 font-semibold">
        <h2 class="text-4xl header">Welcome.</h2>
        <h3 class="mt-1 subheader">Millions of movies, TV shows and people to discover. Explore now!</h3>
    </div>
    <div
          class="relative left-2 top-20 w-100 mt-3 md:mt-0"
          v-click-away="{
            handler: hideDropdown,
            events: ['click'],
            middleware: true
          }"
          @keydown.esc="hideDropdown"
        >
    <div class="search">
      <form id="inner_search_form" action="/search" method="get" accept-charset="utf-8" @submit.prevent="updatePage">
        <label>
          <input 
            dir="auto" 
            id="inner_search_v4" 
            name="query" 
            type="text" 
            tabindex="1" 
            autocorrect="off" 
            autofill="off" 
            autocomplete="off" 
            spellcheck="false" 
            v-model="search" 
            @input="showDropdown" 
            placeholder="Search for a movie, tv show, person......"
          >
        </label>
        <input type="submit" value="Search" class="search-button">
      </form>
    </div>
          <search-dropdown :search="search" v-show="isOpen" />
        </div>
    </div>
</template>

