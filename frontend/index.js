(function () {
    const API = "http://api.weatherapi.com/v1";
  
    new Vue({
      el: "#app",
      data: {
        search:'Mumbai',
        weatherObj: {},
        toast: {
          type: "danger",
          message: null,
          show: false
        }
      },
      mounted() {
        this.getWeatherData();
      },
      methods: {
        getWeatherData() {
           axios
            .get(`${API}/current.json?key=9065ab7a89f4407d8df91550220807&q=${this.search}`)
            .then((response) => {
              this.weatherObj = response.data;
              this.search = '';
            })
            .catch((err) => {
              this.showError("Get", err.message);
            });
        },
        showError(action, message) {
          this.showToast(`${action} failed: ${message}`, "danger");
        },
        showSuccess(message) {
          this.showToast(message, "success");
        },
        showToast(message, type) {
          this.toast.message = message;
          this.toast.show = true;
          this.toast.type = type;
          setTimeout(() => {
            this.toast.show = false;
          }, 3000);
        }
      }
    });
  })();