<template>
  <div id="wrapper">
    <nav class="navbar navbar-default">
      <div class="container">
        <a class="navbar-brand" href="#">
          <i class="glyphicon glyphicon-time"></i>
          Vue Time Tracker
        </a>
        <ul class="nav navbar-nav">
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="col-sm-3">
        <sidebar :time="totalTime"></sidebar> 
      </div>
      <div class="col-sm-9">
        <router-view 
          @timeUpdate="timeUpdate"
          @deleteTime="deleteTime"
          :time-entries="timeEntries"
        >
        </router-view>
      </div>
    </div>
  </div>
</template>
<script>
  import Sidebar from './components/Sidebar';

  export default {
    name: 'app',
    components: { Sidebar },
    data() {
      const existingEntry = {
        user: {
          firstName: 'Ryan',
          lastName: 'Chenkie',
          email: 'ryanchenkie@gmail.com',
          image: 'https://1.gravatar.com/avatar/7f4ec37467f2f7db6fffc7b4d2cc8dc2?s=250',
        },
        comment: 'First time entry',
        totalTime: 1.5,
        date: '2016-04-08',
      };

      return {
        // Start with the same value as our
        // first time entry. Hard-coded for now
        // because we'll use a different approach
        // in the next article anyway
        timeEntries: [existingEntry],
      };
    },
    computed: {
      totalTime() {
        return this.timeEntries.reduce((total, t) => total + t.totalTime, 0);
      },
    },
    methods: {
      // Increment the totalTime value based on the new
      // time entry that is dispatched up
      timeUpdate(timeEntry) {
        this.totalTime += parseFloat(timeEntry.totalTime);
      },
      // Decrement totalTime when a time entry is deleted
      deleteTime(timeEntry) {
        this.totalTime -= parseFloat(timeEntry.totalTime);
      },
    },
  };
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
