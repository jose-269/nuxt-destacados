import Vuex from "vuex";
import axios from "axios";
import json from "../pruebaAutos.json";

export const state = () => ({
    fullCars: [],
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
		// BUSCADOR POR PALABRA
		if(state.buscador) return state.data.filter(word => word.marca.match(state.buscador.toLocaleLowerCase()) || word.anio.match(state.buscador) || word.transmision.match(state.buscador.toLocaleLowerCase()));
		// FIN BUSCADOR
		// CHECKBOXES
		if(state.categorias.length && state.marcas.length && state.transmisiones.length && state.combustibles.length) return state.data.filter(obj => state.categorias.includes(obj.categoria) && state.marcas.includes(obj.marca) && state.transmisiones.includes(obj.transmision) && state.combustibles.includes(obj.combustible) && state.minMaxYear[0] <= obj.anio && state.minMaxYear >= obj.anio);
		// if(state.minMaxYear) return state.data.filter(obj => state.minMaxYear[0] <= obj.anio)
		
		else if(state.categorias.length && state.marcas.length && state.transmisiones.length) return state.data.filter(obj => state.categorias.includes(obj.categoria) && state.marcas.includes(obj.marca) && state.transmisiones.includes(obj.transmision));
		else if(state.categorias.length && state.marcas.length && state.combustibles.length) return state.data.filter(obj => state.categorias.includes(obj.categoria) && state.marcas.includes(obj.marca) && state.combustibles.includes(obj.combustible));

		else if(state.categorias.length && state.marcas.length) return state.data.filter(obj => state.categorias.includes(obj.categoria) && state.marcas.includes(obj.marca));
		else if(state.categorias.length && state.transmisiones.length) return state.data.filter(obj => state.categorias.includes(obj.categoria) && state.transmisiones.includes(obj.transmision));
		else if(state.categorias.length && state.combustibles.length) return state.data.filter(obj => state.categorias.includes(obj.categoria) && state.combustibles.includes(obj.combustible));
		else if(state.transmisiones.length && state.combustibles.length) return state.data.filter(obj => state.transmisiones.includes(obj.transmision) && state.combustibles.includes(obj.combustible));
		else if(state.transmisiones.length && state.marcas.length) return state.data.filter(obj => state.transmisiones.includes(obj.transmision) && state.marcas.includes(obj.marca));
		else if(state.combustibles.length && state.marcas.length) return state.data.filter(obj => state.combustibles.includes(obj.combustible) && state.marcas.includes(obj.marca));
		
		else if(state.categorias.length) return state.data.filter(obj => state.categorias.includes(obj.categoria) && state.minMaxYear[0] <= obj.anio && state.minMaxYear[1] >= obj.anio);
		else if(state.marcas.length) return state.data.filter(obj => state.marcas.includes(obj.marca));
		else if(state.transmisiones.length) return state.data.filter(obj => state.transmisiones.includes(obj.transmision) && state.minMaxYear[0] <= obj.anio && state.minMaxYear[1] >= obj.anio);
		else if(state.combustibles.length) return state.data.filter(obj => state.combustibles.includes(obj.combustible) && state.minMaxYear[0] <= obj.anio && state.minMaxYear[1] >= obj.anio);

		else if(!state.categorias.length && !state.marcas.length && !state.transmisiones.length && !state.combustibles.length) return state.data.filter(obj => state.minMaxYear[0] <= obj.anio && state.minMaxYear[1] >= obj.anio && state.minMaxPrices[0] <= obj.precio && state.minMaxPrices[1] >= obj.precio);
		
		else return state.data
		// FIN CHECKBOXES
	},
		/***  CATEGORIAS  ***/
	itemsCategorias(state) {
		const categorias = state.data.map(el => el.categoria).filter((categoria, i, arr) => arr.indexOf(categoria) === i);
		return categorias;
	},
	/***  TRANSMISIONES  ***/
	itemsTransmision(state) {
		const transmisiones = state.data.map(el => el.transmision).filter((transmision, i, arr) => arr.indexOf(transmision) === i);
		return transmisiones;
	},
	/***  COMBUSTIBLES  ***/
	itemsCombustible(state) {
		const combustibles = state.data.map(el => el.combustible).filter((combustible, i, arr) => arr.indexOf(combustible) === i);
		return combustibles;
	},
	/***  AÑOS  ***/
	itemsAnios(state) {
		const anios = state.data.map(el => el.anio).filter((anio, i, arr) => arr.indexOf(anio) === i);
		return anios;
	},
	/***  AÑOS  ***/
	itemsPrecios(state) {
		const precios = state.data.map(el => el.precio).filter((precio, i, arr) => arr.indexOf(precio) === i);
		return precios;
	},
	/***  MARCAS  ***/
	itemsMarcas(state) {
		const marcas = state.data.map(el => el.marca).filter((marca,i, arr) => arr.indexOf(marca) === i);
		return marcas;
	},
	comparadorSeleccion(state) {
		if(state.seleccionados.length > 3) {
			state.seleccionados.pop();
			alert("No puede seleccionar más de 3 automóviles");
		};
		return state.seleccionados;
	},
};

export const mutations = {
	fullData  (state, payload) {
		const data = payload;
		if(!data) return;
		state.fullCars = data;
	},
	// FORMATEADOR DE PRECIOS CL Y USD
	formatPrices(state) {
		const filtradosCl = state.data.filter((el) => el.moneda === "$");
		filtradosCl.forEach((el) => (el.formatPrecio = `$${el.precio.replace(/\B(?=(\d{3})+(?!\d))/g,".")}`)
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
		const filtradosCl = state.data.filter(el => el.moneda === "$");
		if(!filtradosCl) return;
		filtradosCl.forEach(el => el.financingPriceFormat = `$${el.precioFin.replace(/\B(?=(\d{3})+(?!\d))/g,".")}`);
		const formatter = new Intl.NumberFormat("en-US", {
			currency: "USD",
		});
		const filtradosUsd = state.data.filter(el => el.moneda === "USD");
		if(!filtradosUsd) return;
		filtradosUsd.forEach(el => el.financingPriceFormat = `USD ${formatter.format(el.precioFin)}`)
	},
	formatKms(state) {
		const filtradosKms = state.data.filter(el => el.kms);
		filtradosKms.forEach(el => el.formatKms = el.kms.replace(/\B(?=(\d{3})+(?!\d))/g,"."));
	},
	// BUSCADOR POR PALABRAS
	setBuscador(state, payload) {
		const carga = payload;
		if(!carga) return;
		state.buscador = carga;
		console.log(carga);
	},
	// OBSERVADOR DE CATEGORIAS
	categoriasObserver(state, payload) {
		const carga = payload;
		if (!carga) return;
		state.categorias = carga;
	},
	// OBSERVADOR DE TRANSMISION
	transmisionObserver(state, payload) {
		const carga = payload;
		if(!carga) return
		state.transmisiones = carga;
	},
	//OBSERVADOR DE COMBUSTIBLE
	combustiblesObserver(state, payload) {
		const carga = payload;
		if(!carga) return;
		state.combustibles = carga;
	},
	 //OBSERVADOR DE MARCAS
	 marcasObserver(state, payload) {
		const carga = payload;
		if(!carga) return;
		state.marcas = carga;
	 },
	// OBSERVADOR DE COMPARADOR
	observadorSeleccionado(state, payload) {
		const carga = payload;
		if(!carga) return;
		state.seleccionados = carga;
	},
	deleteByIdSeleccionados(state, payload) {
		const carga = payload;
		if(!carga) return;
		const removeById = state.seleccionados.findIndex(el => el.id === carga);
		state.seleccionados.splice(removeById, 1)
	},
	deleteTodosSeleccionados(state) {
		state.seleccionados = [];
	},
	// RANGO DE AÑOS
	getMinMaxYear(state){
		let arr = []
		const anios = state.data.map(el => el.anio).filter((anio, i, arr) => arr.indexOf(anio) === i);
		const min = Math.min.apply(Math, anios);
		arr.push(min)
		const max = Math.max.apply(Math, anios);
		arr.push(max)
		state.minMaxYear = arr;
	},
	setYears(state, payload) {
		const carga = payload;
		if(!carga) return;
		state.minMaxYear = carga;
	},
	getMinMaxPrices(state) {
		let todosPrecios = [];
		const precios = state.data.map(el => el.precio).filter((precio, i, arr) => arr.indexOf(precio) === i);
		const min = Math.min.apply(Math, precios); 
		todosPrecios.push(min);
		const max = Math.max.apply(Math, precios);
		todosPrecios.push(max);
		state.minMaxPrices = todosPrecios;
	},
	setPrices(state, payload) {
		const carga = payload;
		if(!carga) return;
		state.minMaxPrices = carga;
	},
	fillData(state, payload) {
		const carga = payload;
		if (!carga) return;
		state.cars = payload;
	},
	setModal(state, payload) {
		state.showModal = payload;
	}
};

export const actions = {
	// CARGAR DATOS
	async getData({ commit }) { 
		const req =  axios.create({
			baseURL: 'https://api.servicesdtk2.cl/v1',
			headers: {
				Authorization: `Bearer ${'d9982530-725d-4944-9601-4840556c99a8'}`
			}
		});
		
		try {
			const response = await req.get('/cars');
			const data = response.data;
			commit('fullData', data);
			console.log(data);
		} catch (error) {
			console.log(error);
		}

	}
};

