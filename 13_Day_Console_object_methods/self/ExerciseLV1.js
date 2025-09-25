//1
import { countries } from '../13_day_starter/data/countries_data.js';
console.table(countries);
//2
console.table(countries[0])
//3
// console.group('Countries')
// for (const country of countries) {
//     console.log(country)
// }
for (const country of countries) {
  console.group(country.name);   // mở group theo tên country
  console.log("Capital:", country.capital);
  console.log("Languages:", country.languages.join(", "));
  console.log("Population:", country.population);
  console.log("Currency:", country.currency);
  console.log("Flag:", country.flag);
  console.groupEnd();            // đóng group
}