<template>
  <div>
    <ul class="nav nav-tabs" role="tablist">
      <li v-for="tab in tabs" :key="tab.id" role="representation" :class="{active:tab.isactive}">
        <a href="#" role="tab" data-toggle="tab" @click.stop.prevent="setActive(tab)">
          {{ tab.name }}
          <span v-if="tab.id == 1">{{ totalCount && totalCount.repositories}}</span>
          <span v-if="tab.id == 2">{{ totalCount && totalCount.projects}}</span>
          <span v-if="tab.id == 3">{{ totalCount && totalCount.starredRepositories}}</span>
          <span v-if="tab.id == 4">{{ totalCount && totalCount.followers}}</span>
          <span v-if="tab.id == 5">{{ totalCount && totalCount.following}}</span>
        </a>
      </li>
    </ul>
    <div class="tab-content">
      <div v-for="tab in tabs" :key="tab.id" class="tab-pane" :class="{active:tab.isActive}" role="tabpanel">
        <p v-if="tab.id === activeTab.id">{{ tab.name }}</p>
      </div>
    </div>
    <pre>{{ $data }}</pre>
  </div>
</template>

<script>
export default {
  props: {
    totalCount: Object,
  },
  data: () => ({
      tabs: [{
        name: "Overview",
        id: 0,
        isActive: true,
      },
      {
        name: "Repositories",
        id: 1,
        isActive: false,
      },
      {
        name: "Projects",
        id: 2,
        isActive: false,
      },
      {
        name: "Stars",
        id: 3,
        isActive: false,
      },
      {
        name: "Followers",
        id: 4,
        isActive: false,
      },
      {
        name: "Following",
        id: 5,
        isActive: false,
      }],
      activeTab: {}
  }),
  ready: function() {
      this.setActive(this.tabs[0]);
    },
  methods: {
    setActive: function (tab){
      const self = this;
      tab.isActive = true;
      this.activeTab = tab;
      this.tabs.forEach(function(tab){
        if(tab.id !== self.activeTab.id) {
          tab.isActive = false;
        }
      });
    }
  },
}
</script>

<style lang="scss" module>
@import '@design';


</style>
