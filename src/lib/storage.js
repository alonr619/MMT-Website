import { browser } from "$app/environment";
import { writable } from "svelte/store";

const defaultValue = "";
const initialValue = browser
  ? window.localStorage.getItem("mmt2023token") ?? defaultValue
  : defaultValue;

const token = writable < string > initialValue;

token.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem("mmt2023token", value);
  }
});

export default token;
