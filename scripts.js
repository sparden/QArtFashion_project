var vm = new Vue({
  el: '#app',
  data () {
    return {
      infos: null
    }
  },
  mounted () {
    axios.get('http://dummy.restapiexample.com/api/v1/employees').then(response => (this.infos = response.data.data))
  }
})
