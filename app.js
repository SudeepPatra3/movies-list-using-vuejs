new Vue({
  el: "#app",
  data() {
    return {
      con: [],
      commentsToShow: 4,
      totalleg: 0,
    };
  },
  created() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=100f625c280a240f47f9afb2eaf717b1&language=en-US"
      )
      .then((response) => {
        this.con = response.data.results;
      })
      .catch((err) => console.log(err));
  },
  mounted() {
    this.totalleg = this.con.length;
  },
});

new Vue({
    el: "#app2",
    data() {
      return {
        con: [],
        commentsToShow: 4,
        totalleg: 0,
      };
    },
    created() {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/upcoming?api_key=100f625c280a240f47f9afb2eaf717b1&language=en-US"
        )
        .then((response) => {
          this.con = response.data.results;
        })
        .catch((err) => console.log(err));
    },
    mounted() {
      this.totalleg = this.con.length;
    },
  });

// Truncate filter
var filter = function (text, length, clamp) {
  clamp = clamp || "...";
  var node = document.createElement("div");
  node.innerHTML = text;
  var content = node.textContent;
  return content.length > length ? content.slice(0, length) + clamp : content;
};
Vue.filter("truncate", filter);
