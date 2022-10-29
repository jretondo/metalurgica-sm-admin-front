import Index from "views/admin/dashboard";
import DailyOffers from "views/admin/dailyOffers.js";
import CountDown from 'views/admin/contdown.js'
import ProductsItems from 'views/admin/productsItems.js'
import GestionPedidos from 'views/admin/gestionPedidos'
import Cuponera from 'views/admin/cuponera'
import EnvioCupones from 'views/admin/envioCupones'
import EnvioLibre from 'views/admin/envioLibre'
import EnvioMkt from 'views/admin/envioMkt'
import UltimasVisit from 'views/admin/ultVisitas'
import PreciosCorreo from 'views/admin/PreciosCorreo'

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-blue",
    component: Index,
    layout: process.env.PUBLIC_URL + "/admin"
  }, {
    path: "/visitas",
    name: "Últimas Visitas",
    icon: "ni ni-chart-bar-32 text-teal",
    component: UltimasVisit,
    layout: process.env.PUBLIC_URL + "/admin"
  },
  {
    path: "/dailyOff",
    name: "Ofertas diarias",
    icon: "ni ni-planet text-yellow",
    component: DailyOffers,
    layout: process.env.PUBLIC_URL + "/admin"
  },
  {
    path: "/countDown",
    name: "Cuenta Regresiva",
    icon: "ni ni-watch-time text-orange",
    component: CountDown,
    layout: process.env.PUBLIC_URL + "/admin"
  },
  {
    path: "/productItems",
    name: "Lista de Productos",
    icon: "ni ni-shop text-red",
    component: ProductsItems,
    layout: process.env.PUBLIC_URL + "/admin"
  },
  {
    path: "/email-mkt",
    name: "Email Marketing",
    icon: "ni ni-email-83 text-orange",
    component: EnvioMkt,
    layout: process.env.PUBLIC_URL + "/admin"
  }, {
    path: "/email-libre",
    name: "Email Libre",
    icon: "ni ni-email-83 text-red",
    component: EnvioLibre,
    layout: process.env.PUBLIC_URL + "/admin"
  }
];
export default routes;
