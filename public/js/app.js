const weatherForm = document.querySelector("form");
const address = document.querySelector("input");
const firstPara = document.querySelector(".first");
const secondpara = document.querySelector(".second");

weatherForm.addEventListener("submit", e => {
  firstPara.textContent = "...Loading";
  secondpara.textContent = "";
  fetch(`/weather?address=${address.value}`).then(response => {
    response.json().then(data => {
      if (data.error) {
        firstPara.textContent = data.error;
        secondpara.value = "";
      } else {
        firstPara.textContent = data.location;
        secondpara.textContent = data.forecast;
      }
    });
  });

  e.preventDefault();
});
