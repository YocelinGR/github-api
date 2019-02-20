<template>
  <div>
    <ul class="nav nav-tabs" role="tablist">
      <li v-for="tab in tabs" :key="tab.id" role="representation">
        <a href="#" role="tab" data-toggle="tab" @click.stop.prevent="setActive(tab)">
          {{ tab.name }}
        </a>
        <span v-if="tab.id == 1" class="number">{{ totalCount && totalCount.repositories}}</span>
        <span v-if="tab.id == 2" class="number">{{ totalCount && totalCount.projects}}</span>
        <span v-if="tab.id == 3" class="number">{{ totalCount && totalCount.starredRepositories}}</span>
        <span v-if="tab.id == 4" class="number">{{ totalCount && totalCount.followers}}</span>
        <span v-if="tab.id == 5" class="number">{{ totalCount && totalCount.following}}</span>
        <span v-if="tab.id === activeTab.id" :class="{ active: tab.id === activeTab.id }"></span>
      </li>
    </ul>
    <div class="tab-content">
      <div v-for="tab in tabs" :key="tab.id" class="tab-pane" :class="{active:tab.id === activeTab.id}" role="tabpanel">
        <p v-if="tab.id === activeTab.id">{{ tab.name }}</p>
      </div>
      <StarsComponent v-if="activeTab.id === 3"></StarsComponent>
    </div>
    <!-- <pre>{{ $data }}</pre> -->
  </div>
</template>

<script>
import StarsComponent from './StarsComponent'
export default {
  components: {
    StarsComponent,
  },
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

<style scoped>
 a {
   font-size: 18px;
   color: rgb(88, 87, 87) !important;
 }
 li {
   justify-content: center;
   padding: 1rem;
   text-align: center;
   padding-bottom: 0px;
 }
 span.active {
   background: orange;
   width: 120%;
   height: 2px;
   display: block;
   justify-content: center;
   margin-top: 10px;
 }
 span.number {
   background-color: rgba(27, 31, 35, 0.08);
   border-radius: 20px;
   color: #586069;
   display: inline-block;
   font-size: 14px;
   font-weight: 600;
   line-height: 1;
   padding: 2px 5px;
 }
</style>
