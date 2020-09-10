var v = new Vue({
  el: '#app',
  data (){
    return{
    results: null,
    texts: null,
    company: null,
    images: 'https://images.app.goo.gl/X4bEHjKf5xBGPsVNA',
     }
  },
  mounted (){
    axios.get('https://reqres.in/api/users?page=2').then(response => (this.results = response.data.data,this.texts = response.data.ad.text, this.company =response.data.ad.company))
  }
})
