const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  //data set is an object that will contain all the data atrributes for that element
  const suffix = this.dataset.sizing || ""; //without empty string we get undefined back

  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((input) => input.addEventListener("input", handleUpdate));
