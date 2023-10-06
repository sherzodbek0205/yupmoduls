import "./stlye.css";
import * as yup from "yup";

const brand: HTMLInputElement = document.querySelector(".brand")!;
const description: HTMLInputElement = document.querySelector(".description")!;
const website: HTMLInputElement = document.querySelector(".website")!;
const country: HTMLSelectElement = document.querySelector(".country")!;
const category: HTMLSelectElement = document.querySelector(".category")!;
const form: HTMLFormElement = document.querySelector("form")!;
const errorbrand: HTMLDivElement = document.querySelector(".errorbrand")!;
const errordescription: HTMLDivElement = document.querySelector(".errordescription")!;
const errorurl: HTMLDivElement = document.querySelector(".errorurl")!;



const schema = yup.object().shape({
 brand: yup
  .string()
  .matches(/^[A-Za-z\s]+$/)
  .required("Brand is required"),
 name: yup
  .string()
  .matches(/^[A-Za-z\s]+$/)
  .required("Name is required"),
 web: yup.string().url("Invalid website URL").required("Website is required"),
 country: yup.string().required("Country is required"),
 category: yup.string().required("Category is required"),
});

const regexp = /^[A-Za-z\s]+$/;
form.addEventListener("submit", (e) => {
 e.preventDefault();

 const formData = {
  brand: brand.value,
  name: description.value,
  web: website.value,
  country: country.value,
  category: category.value,
 };


 console.log(formData);
 schema
  .validate(formData)
  .then(() => {})
  .catch((error) => {
   if (error.path === "brand"||brand.value === ""||!regexp.test(brand.value)) {

    errorbrand.innerText = "Please enter only English letters";
   }
   if (error.path === "name"||description.value === "" ||!regexp.test(description.value)) {
    errordescription.innerText = "Please enter only English letters";
   }
   if (error.path === "web" || website.value === "") {
    errorurl.innerText = "Please enter correct (URL-link)";
   }

  });
});