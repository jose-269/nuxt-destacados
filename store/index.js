import Vuex from "vuex";
import axios from "axios";
import json from "../pruebaAutos.json";

export const state = () => ({
  indexCars: [],
  seminuevosCars: [],
  selectedBrands: [],
  selectedCategories: [],
  minMaxYears: [],
  selectedYears: [],
  minMaxPrices: [],
  selectedPrices: [],
  selectedTransmisions: [],
  selectedFuels: [],
  photosArray: [],



  

  seminuevos: [],
  carNumbers: 0,
  // SPINNER
  loader: false,
  data: json.data,
  cars: [],
  // CAMBIO DE FILTRO SEMINUEVOS
  cambioDeFiltro: true,
  // CAMBIO DE FILTRO SOLICITUD FINANCIMIENTO
  FinanciamientoNombres: true,
  // CAMBIO DE FILTRO CONTACTO
  contactoNombres: true,
  // CAMBIO DE FILTRO PAGE
  pageNombres: true,
  // TOGGLE DE FILTRO LATERAL
  categoriasToggle: true,
  marcaToggle: true,
  aniosToggle: true,
  precioToggle: true,
  transmisionToggle: true,
  combustibleToggle: true,
  // FIN TOGGLE DE FILTRO LATERAL
  // TOGGLE BOTONES COMPARADOR
  comparadorComparteAmigo: true,
  cotizarMasdeUno: true,
  cotizaUno: true,
  // FIN TOGGLE BOTONES COMPARADOR
  // ESTADO FILTROS DE LATERALES
  buscador: "",
  categorias: [],
  transmisiones: [],
  combustibles: [],
  marcas: [],
  // RANGO DE AÑOS
  minMaxYear: [],
  todosAnios: [],
  // RANGO DE PRECIOS
  minMaxPrices: [],
  // FIN FILTROS LATERALES
  // SELECCIONADOS COMPARADOR
  seleccionados: [],
  // LIGHTBOX
  showModal: false,
});

export const getters = {
  getFiltrosLateral(state) {
    // CATEGORIA MARCA TRANSMISION COMBUSTIBLE
    if (
      state.selectedCategories.length &&
      state.selectedBrands.length &&
      state.selectedTransmisions.length &&
      state.selectedFuels.length
    )
      return state.seminuevosCars.filter(
        (obj) =>
          state.selectedCategories.includes(obj.CATEGORIAID) &&
          state.selectedBrands.includes(obj.MARCA) &&
          state.selectedTransmisions.includes(obj.TRANSMISION.replace("Transmisión ", "")) &&
          state.selectedFuels.includes(obj.COMBUSTIBLE) &&
          state.selectedYears[0] <= obj.INTANO &&
          state.selectedYears[1] >= obj.INTANO &&
          state.selectedPrices[0] <= obj.VCHPRECIO &&
          state.selectedPrices[1] >= obj.VCHPRECIO
      );
    // CATEGORIA MARCA TRANSMISION
    else if (
      state.selectedCategories.length &&
      state.selectedBrands.length &&
      state.selectedTransmisions.length
    )
      return state.seminuevosCars.filter(
        (obj) =>
          state.selectedCategories.includes(obj.CATEGORIAID) &&
          state.selectedBrands.includes(obj.MARCA) &&
          state.selectedTransmisions.includes(obj.TRANSMISION.replace("Transmisión ", "")) &&
          state.selectedYears[0] <= obj.INTANO &&
          state.selectedYears[1] >= obj.INTANO &&
          state.selectedPrices[0] <= obj.VCHPRECIO &&
          state.selectedPrices[1] >= obj.VCHPRECIO
      );
    // CATEGORIA MARCA COMBUSTIBLE
    else if (
      state.selectedCategories.length &&
      state.selectedBrands.length &&
      state.selectedFuels.length
    )
      return state.seminuevosCars.filter(
        (obj) =>
          state.selectedCategories.includes(obj.CATEGORIAID) &&
          state.selectedBrands.includes(obj.MARCA) &&
          state.selectedFuels.includes(obj.COMBUSTIBLE) &&
          state.selectedYears[0] <= obj.INTANO &&
          state.selectedYears[1] >= obj.INTANO &&
          state.selectedPrices[0] <= obj.VCHPRECIO &&
          state.selectedPrices[1] >= obj.VCHPRECIO
      );
    //CATEGORIA TRANSMISION COMBUSTIBLE
    else if (
      state.selectedCategories.length &&
      state.selectedTransmisions.length &&
      state.selectedFuels.length
    )
      return state.seminuevosCars.filter(
        (obj) =>
          state.selectedCategories.includes(obj.CATEGORIAID) &&
          state.selectedTransmisions.includes(obj.TRANSMISION.replace("Transmisión ", "")) &&
          state.selectedFuels.includes(obj.COMBUSTIBLE) &&
          state.selectedYears[0] <= obj.INTANO &&
          state.selectedYears[1] >= obj.INTANO &&
          state.selectedPrices[0] <= obj.VCHPRECIO &&
          state.selectedPrices[1] >= obj.VCHPRECIO
      );
    // MARCA TRANSMISION COMBUSTIBLE
    else if (
      state.selectedBrands.length &&
      state.selectedTransmisions.length &&
      state.selectedFuels.length
    )
      return state.seminuevosCars.filter(
        (obj) =>
          state.selectedBrands.includes(obj.MARCA) &&
          state.selectedTransmisions.includes(obj.TRANSMISION.replace("Transmisión ", "")) &&
          state.selectedFuels.includes(obj.COMBUSTIBLE) &&
          state.selectedYears[0] <= obj.INTANO &&
          state.selectedYears[1] >= obj.INTANO &&
          state.selectedPrices[0] <= obj.VCHPRECIO &&
          state.selectedPrices[1] >= obj.VCHPRECIO
      );
    // CATEGORIA Y MARCAS
    else if (state.selectedCategories.length && state.selectedBrands.length)
      return state.seminuevosCars.filter(
        (obj) =>
          state.selectedCategories.includes(obj.CATEGORIAID) &&
          state.selectedBrands.includes(obj.MARCA) &&
          state.selectedYears[0] <= obj.INTANO &&
          state.selectedYears[1] >= obj.INTANO &&
          state.selectedPrices[0] <= obj.VCHPRECIO &&
          state.selectedPrices[1] >= obj.VCHPRECIO
      );
    // CATEGORIAS Y TRANSMISION
    else if (
      state.selectedCategories.length &&
      state.selectedTransmisions.length
    )
      return state.seminuevosCars.filter(
        (obj) =>
          state.selectedCategories.includes(obj.CATEGORIAID) &&
          state.selectedTransmisions.includes(obj.TRANSMISION.replace("Transmisión ", "")) &&
          state.selectedYears[0] <= obj.INTANO &&
          state.selectedYears[1] >= obj.INTANO &&
          state.selectedPrices[0] <= obj.VCHPRECIO &&
          state.selectedPrices[1] >= obj.VCHPRECIO
      );
    // CATEGORIAS Y COMBUSTIBLE
    else if (state.selectedCategories.length && state.selectedFuels.length)
      return state.seminuevosCars.filter(
        (obj) =>
          state.selectedCategories.includes(obj.CATEGORIAID) &&
          state.selectedFuels.includes(obj.COMBUSTIBLE) &&
          state.selectedYears[0] <= obj.INTANO &&
          state.selectedYears[1] >= obj.INTANO &&
          state.selectedPrices[0] <= obj.VCHPRECIO &&
          state.selectedPrices[1] >= obj.VCHPRECIO
      );
    // MARCAS Y TRANSMISION
    else if (state.selectedBrands.length && state.selectedTransmisions.length)
      return state.seminuevosCars.filter(
        (obj) =>
          state.selectedBrands.includes(obj.MARCA) &&
          state.selectedTransmisions.includes(obj.TRANSMISION.replace("Transmisión ", "")) &&
          state.selectedYears[0] <= obj.INTANO &&
          state.selectedYears[1] >= obj.INTANO &&
          state.selectedPrices[0] <= obj.VCHPRECIO &&
          state.selectedPrices[1] >= obj.VCHPRECIO
      );
      // MARCAS Y COMBUSTIBLE
    else if (state.selectedBrands.length && state.selectedFuels.length) return state.seminuevosCars.filter(
      (obj) =>
        state.selectedBrands.includes(obj.MARCA) &&
        state.selectedFuels.includes(obj.COMBUSTIBLE) &&
        state.selectedYears[0] <= obj.INTANO &&
        state.selectedYears[1] >= obj.INTANO &&
        state.selectedPrices[0] <= obj.VCHPRECIO &&
        state.selectedPrices[1] >= obj.VCHPRECIO
      );
    // TRANSMISION Y COMBUSTIBLE
    else if (state.selectedTransmisions.length && state.selectedFuels.length)
      return state.seminuevosCars.filter(
        (obj) =>
          state.selectedTransmisions.includes(obj.TRANSMISION.replace("Transmisión ", "")) &&
          state.selectedFuels.includes(obj.COMBUSTIBLE) &&
          state.selectedYears[0] <= obj.INTANO &&
          state.selectedYears[1] >= obj.INTANO &&
          state.selectedPrices[0] <= obj.VCHPRECIO &&
          state.selectedPrices[1] >= obj.VCHPRECIO
      );
    
    // SOLO CATEGORIAS
    else if (state.selectedCategories.length)
      return state.seminuevosCars.filter(
        (obj) =>
          state.selectedCategories.includes(obj.CATEGORIAID) &&
          state.selectedYears[0] <= obj.INTANO &&
          state.selectedYears[1] >= obj.INTANO &&
          state.selectedPrices[0] <= obj.VCHPRECIO &&
          state.selectedPrices[1] >= obj.VCHPRECIO
      );
    // SOLO MARCAS
    else if (state.selectedBrands.length)
      return state.seminuevosCars.filter(
        (obj) =>
          state.selectedBrands.includes(obj.MARCA) &&
          state.selectedYears[0] <= obj.INTANO &&
          state.selectedYears[1] >= obj.INTANO &&
          state.selectedPrices[0] <= obj.VCHPRECIO &&
          state.selectedPrices[1] >= obj.VCHPRECIO
      );
    // SOLO TRANSMISION
    else if (state.selectedTransmisions.length)
      return state.seminuevosCars.filter(
        (obj) =>
          state.selectedTransmisions.includes(obj.TRANSMISION.replace("Transmisión ", "")) &&
          state.selectedYears[0] <= obj.INTANO &&
          state.selectedYears[1] >= obj.INTANO &&
          state.selectedPrices[0] <= obj.VCHPRECIO &&
          state.selectedPrices[1] >= obj.VCHPRECIO
      );
    // SOLO COMBUSTIBLE
    else if (state.selectedFuels.length)
      return state.seminuevosCars.filter(
        (obj) =>
          state.selectedFuels.includes(obj.COMBUSTIBLE) &&
          state.selectedYears[0] <= obj.INTANO &&
          state.selectedYears[1] >= obj.INTANO &&
          state.selectedPrices[0] <= obj.VCHPRECIO &&
          state.selectedPrices[1] >= obj.VCHPRECIO
      );
    // SOLO ANIOS Y PRECIO
    else if (
      !state.selectedFuels.length &&
      !state.selectedTransmisions.length &&
      !state.selectedBrands.length &&
      !state.selectedCategories.length
    )
      return state.seminuevosCars.filter(
        (obj) =>
          state.selectedYears[0] <= obj.INTANO &&
          state.selectedYears[1] >= obj.INTANO &&
          state.selectedPrices[0] <= obj.VCHPRECIO &&
          state.selectedPrices[1] >= obj.VCHPRECIO
      );
    else return state.seminuevosCars;
  },
  /***  CATEGORIAS  ***/
  itemsCategorias(state) {
    const categorias = state.seminuevosCars
      .map((el) => el.CATEGORIAID)
      .filter((categoria, i, arr) => arr.indexOf(categoria) === i);
    return categorias;
  },
  /***  MARCAS  ***/
  brandsItems(state) {
    const marcas = state.seminuevosCars
      .map((el) => el.MARCA)
      .filter((marca, i, arr) => arr.indexOf(marca) === i);
    return marcas;
  },
  /***  TRANSMISIONES  ***/
  itemsTransmision(state) {
    const transmissionNameReplaced = state.seminuevosCars
      .map((el) => el.TRANSMISION.replace("Transmisión ", ""))
      .filter((transmission, i, arr) => arr.indexOf(transmission) === i);
    return transmissionNameReplaced;
  },
  /***  COMBUSTIBLES  ***/
  itemsCombustible(state) {
    const fuels = state.seminuevosCars
      .map((el) => el.COMBUSTIBLE)
      .filter((combustible, i, arr) => arr.indexOf(combustible) === i);
    return fuels;
  },
  /***  AÑOS  ***/
  itemsAnios(state) {
    const anios = state.seminuevosCars
      .map((el) => el.INTANO)
      .filter((anio, i, arr) => arr.indexOf(anio) === i);
    return anios;
  },
  yearsItems(state) {
    let arr = [];
    const anios = state.seminuevosCars
      .map((el) => el.INTANO)
      .filter((anio, i, arr) => arr.indexOf(anio) === i);
    const min = Math.min.apply(null, anios) || 0;
    const max = Math.max.apply(null, anios) || 0;
    arr.push(min);
    arr.push(max);
    return arr;
  },
  /***  PRECIOS  ***/
  itemsPrecios(state) {
    const precios = state.data
      .map((el) => el.precio)
      .filter((precio, i, arr) => arr.indexOf(precio) === i);
    return precios;
  },
  comparadorSeleccion(state) {
    if (state.seleccionados.length > 3) {
      state.seleccionados.pop();
      alert("No puede seleccionar más de 3 automóviles");
    }
    return state.seleccionados;
  },
};

export const mutations = {
  indexData(state, payload) {
    const data = payload;
    if (!data) return;
    state.indexCars = data;
  },
  fillSeminuevosData(state, payload) {
    const data = payload;
    if (!data) return;
    state.seminuevosCars = data;
  },
  fillminMaxYears(state, payload) {
    const data = payload;
    if (!data) return;
    state.minMaxYears = data;
    state.selectedYears = data;
  },
  fillminMaxPrices(state, payload) {
    const data = payload;
    if (!data) return;
    state.minMaxPrices = data;
    state.selectedPrices = data;
  },
  //OBSERVADOR DE MARCAS
  brandsObserver(state, payload) {
    const carga = payload;
    if (!carga) return;
    state.selectedBrands = carga;
  },
  // OBSERVADOR DE CATEGORIAS
  categoriesObserver(state, payload) {
    const carga = payload;
    if (!carga) return;
    state.selectedCategories = carga;
  },

  // OBSERVADOR DE TRANSMISION
  transmissionsObserver(state, payload) {
    const carga = payload;
    if (!carga) return;
    state.selectedTransmisions = carga;
  },
  //OBSERVADOR DE COMBUSTIBLE
  fuelsObserver(state, payload) {
    const carga = payload;
    if (!carga) return;
    state.selectedFuels = carga;
  },
  // OBSERVADOR ANOS
  yearsObserver(state, payload) {
    const carga = payload;
    if (!carga) return;
    state.selectedYears = carga;
  },
  // OBSERVADOR PRECIOS
  pricesObserver(state, payload) {
    const carga = payload;
    if (!carga) return;
    state.selectedPrices = carga;
  },
  fillPhotosArray(state, payload) {
    const carga = payload;
    if (!carga) return;
    state.photosArray = carga;
  },






  seminuevosData(state, payload) {
    const data = payload;
    if (!data) return;
    state.seminuevos = data;
  },
  fillCars(state, payload) {
    const data = payload;
    state.carNumbers = data;
  },


  
  // FORMATEADOR DE PRECIOS CL Y USD
  formatPrices(state) {
    const filtradosCl = state.data.filter((el) => el.moneda === "$");
    filtradosCl.forEach(
      (el) =>
        (el.formatPrecio = `$${el.precio.replace(
          /\B(?=(\d{3})+(?!\d))/g,
          "."
        )}`)
    );
    const formatter = new Intl.NumberFormat("en-US", {
      currency: "USD",
    });
    const filtradosUsd = state.data.filter((el) => el.moneda === "USD");
    filtradosUsd.forEach(
      (el) => (el.formatPrecio = `USD ${formatter.format(el.precio)}`)
    );
  },
  financingPriceFormat(state) {
    const filtradosCl = state.data.filter((el) => el.moneda === "$");
    if (!filtradosCl) return;
    filtradosCl.forEach(
      (el) =>
        (el.financingPriceFormat = `$${el.precioFin.replace(
          /\B(?=(\d{3})+(?!\d))/g,
          "."
        )}`)
    );
    const formatter = new Intl.NumberFormat("en-US", {
      currency: "USD",
    });
    const filtradosUsd = state.data.filter((el) => el.moneda === "USD");
    if (!filtradosUsd) return;
    filtradosUsd.forEach(
      (el) =>
        (el.financingPriceFormat = `USD ${formatter.format(el.precioFin)}`)
    );
  },
  formatKms(state) {
    const filtradosKms = state.data.filter((el) => el.kms);
    filtradosKms.forEach(
      (el) => (el.formatKms = el.kms.replace(/\B(?=(\d{3})+(?!\d))/g, "."))
    );
  },
  // BUSCADOR POR PALABRAS
  setBuscador(state, payload) {
    const carga = payload;
    if (!carga) return;
    state.buscador = carga;
    console.log(carga);
  },

  // OBSERVADOR DE COMPARADOR
  observadorSeleccionado(state, payload) {
    const carga = payload;
    if (!carga) return;
    state.seleccionados = carga;
  },
  deleteByIdSeleccionados(state, payload) {
    const carga = payload;
    if (!carga) return;
    const removeById = state.seleccionados.findIndex((el) => el.id === carga);
    state.seleccionados.splice(removeById, 1);
  },
  deleteTodosSeleccionados(state) {
    state.seleccionados = [];
  },
  getMinMaxPrices(state) {
    let todosPrecios = [];
    const precios = state.data
      .map((el) => el.precio)
      .filter((precio, i, arr) => arr.indexOf(precio) === i);
    const min = Math.min.apply(Math, precios);
    todosPrecios.push(min);
    const max = Math.max.apply(Math, precios);
    todosPrecios.push(max);
    state.minMaxPrices = todosPrecios;
  },

  fillData(state, payload) {
    const carga = payload;
    if (!carga) return;
    state.cars = payload;
  },
  setModal(state, payload) {
    state.showModal = payload;
  },
};

export const actions = {
  // CARGAR DATOS
  async getData({ commit }) {
    const req = axios.create({
      baseURL: "https://api.servicesdtk2.cl/v1",
      headers: {
        Authorization: `Bearer ${"d9982530-725d-4944-9601-4840556c99a8"}`,
      },
    });
    try {
      const pageSizeResponse = await req.get(
        "/carDealers/stock/total?CLIENTEID=1066&TABLA=1"
      );
      const totalCarNumber = await pageSizeResponse.data[0].TOTAL;
      const response = await req.get(
        `/carDealers/stock?CLIENTEID=1066&TABLA=1&PageNumber=1&PageSize=${totalCarNumber}`
      );
      // All Data
      const roughData = response.data;
      //Min Max years
      let minMaxyearsArr = [];
      const minMaxYears = roughData
        .map((obj) => obj.INTANO)
        .filter((el, i, arr) => arr.indexOf(el) === i);
      const min = Math.min.apply(Math, minMaxYears);
      minMaxyearsArr.push(min);
      const max = Math.max.apply(Math, minMaxYears);
      minMaxyearsArr.push(max);
      commit("fillminMaxYears", minMaxyearsArr);
      // Min Max Prices
      let minMaxPricesArr = [];
      const minMaxPrices = roughData
        .map((obj) => obj.VCHPRECIO)
        .filter((el, i, arr) => arr.indexOf(el) === i);
      const minPrice = Math.min.apply(Math, minMaxPrices);
      minMaxPricesArr.push(minPrice);
      const maxPrice = Math.max.apply(Math, minMaxPrices);
      minMaxPricesArr.push(maxPrice);
      commit("fillminMaxPrices", minMaxPricesArr);
      // Index data
      const indexData = roughData.sort(() => Math.random() - 0.5).slice(0, 6);
      commit("indexData", indexData);
      //Seminuevos data
      commit("fillSeminuevosData", roughData);
    } catch (error) {
      console.log(error);
    }
  },
  async getPhotosArray({ commit }, payload) {
    const req = axios.create({
      baseURL: "https://api.servicesdtk2.cl/v1",
      headers: {
        Authorization: `Bearer ${"d9982530-725d-4944-9601-4840556c99a8"}`,
      },
    });
    try {
      const response = await req.get(
        `/cars/single/images?AUTOID=${payload}`
      );
      const photosArray = response.data;
      console.log(photosArray);
      commit("fillPhotosArray", photosArray); 
    } catch (error) {
      console.log(error);
    }
  },
};
