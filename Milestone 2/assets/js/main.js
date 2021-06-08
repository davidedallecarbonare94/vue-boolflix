var root = new Vue({
    el: "#root",
    data: {
        series: "",
        films: "",
        query: "",
        url: "https://api.themoviedb.org/3",
        api_key: "30db9530ead0b63d24c933102d9ad862",
        /* flag: "https://www.countryflags.io/" + "/flat/64.png" */
    },
    methods: {
        searchAFilm: function () {
            axios.get(`${this.url}/search/movie?api_key=${this.api_key}&query=${this.query}`)
            .then(result => {
                this.films = result.data.results;
                console.log(this.films);
            })
            axios.get(`${this.url}/search/tv?api_key=${this.api_key}&query=${this.query}`)
                .then(res => {
                    this.series = res.data.results;
                    console.log(this.series);
                })
        }
    },
    mounted() {
        
    }
    
})