import {createServer} from "miragejs";
import {TCrewReq, TOrder} from "../types/ProjTypes.types";


export function makeServer() {
  const server = createServer({

    routes() {
      this.namespace = "api"

      this.get("/crews", (schema, crewReq) => {
        const crews = [
          {
            id: 1,
            car_mark: "BMW",
            car_model: "6 GT",
            car_color: "blue",
            car_number: "В215ВЗ",
            driver_name: "Владимип Кутов",
            driver_phone: "53253",
            lat: 56.867774984269126,
            lon: 53.184668278071555,
            distance: 0
          },
          {
            id: 2,
            car_mark: "Honda",
            car_model: "Accord VIII",
            car_color: "green",
            car_number: "М421АФ",
            driver_name: "Семен Семенов",
            driver_phone: "6436436",
            lat: 56.86468560221348,
            lon: 53.22852507767407,
            distance: 0
          },
          {
            id: 3,
            car_mark: "Nissan",
            car_model: "Qashqai 2020 XE",
            car_color: "white",
            car_number: "Щ210ФТ",
            driver_name: "Виталий Мотвеев",
            driver_phone: "6436743",
            lat: 56.84726540302384,
            lon: 53.20893934025757,
            distance: 0
          },
          {
            id: 4,
            car_mark: "Toyta",
            car_model: "C-HR HOT",
            car_color: "orange",
            car_number: "Я021ПВ",
            driver_name: "Сергей Полуов",
            driver_phone: "7437437",
            lat: 56.87625587889304,
            lon: 53.26684848007888,
            distance: 0
          },
          {
            id: 5,
            car_mark: "Subaru",
            car_model: "Legacy 20MY",
            car_color: "silver",
            car_number: "Ф295ПА",
            driver_name: "Петр Курсов",
            driver_phone: "32523",
            lat: 56.828972173353066,
            lon: 53.22262262595579,
            distance: 0
          }
        ];
        const response = {
          code: 0,
          descr: "OK",
          data: crews
        }
        return response;
      });

      this.post("/orders", (schema, request) => {
        return {order: request.requestBody}
      })
    },
  })

  return server
}


export const API = {
  getCrews(req: TCrewReq) {
    return fetch("api/crews").then(res => {
      return res.json();
    })
  },

  postOrder(order: TOrder) {
    return fetch("api/orders", {
      method: "POST",
      body: JSON.stringify(order)
    })
  },

}


