require('dotenv').config()

var host = ""
const local = 1
if (process.env.NODE_ENV === "development") {
    if (local === 1) {
        host = "http://192.168.0.11:3016/test"
    } else {
        host = "https://nekoadmin.com.ar:3015/test"
    }
} else {
    host = "https://nekoadmin.com.ar:3015/test"
}

const UrlServerGral = host
const Loguin = UrlServerGral + "/adminloguin"
const NvaPass = UrlServerGral + "/nvapass"
const RecPass = UrlServerGral + "/recpass"
const Veriflog = UrlServerGral + "/veriflog"

const NvaActividad = UrlServerGral + "/nva-actividad"

const Herodata = UrlServerGral + "/get-hero-slide2"
const HeroChangeState = UrlServerGral + "/change-state-hero"
const HeroDelete = UrlServerGral + "/delete-hero-id"
const DetHero = UrlServerGral + "/get-det-hero/"
const UploadImg = UrlServerGral + "/upload-img-hero"
const ModHeroId = UrlServerGral + "/mod-hero-id"
const NvoHero = UrlServerGral + "/nvo-hero"
const CountDownGet = UrlServerGral + "/get-countdown2"
const CountDownActivar = UrlServerGral + "/change-state-countd"
const CountDownMod = UrlServerGral + "/mod-countd-id"
const CountDownUpl = UrlServerGral + "/upload-img-countd"

const ProductList = UrlServerGral + "/product-list2"
const ProductChangeEstate = UrlServerGral + "/change-state-prod"
const ProductDelete = UrlServerGral + "/delete-prod-id"
const NvoProducto = UrlServerGral + "/nvo-prod"
const UploadImgProd = UrlServerGral + "/upload-img-prod"
const GetCategories = UrlServerGral + "/category-list-acc"
const GetSubCategories = UrlServerGral + "/subcategory-list-acc"
const GetTagList = UrlServerGral + "/tags-list"
const GetDetProduct = UrlServerGral + "/product-detalle/"
const ModificarProducto = UrlServerGral + "/mod-prod-acc"
const OptmizedImg = UrlServerGral + "/optimizador-img-prod"
const OpimizedImgHero = UrlServerGral + "/optimizador-img-hero"
const ListaProveedores = UrlServerGral + "/proveedores"
const AumentarPrecios = UrlServerGral + "/aumentoPrecio"
const AplicarDescuento = UrlServerGral + "/aplicarDescuento"
const EtiquetasGral = UrlServerGral + "/etiquetasGral"
const QuitarEtiqueta = UrlServerGral + "/quitarEtiqueta"

const TiposVariedades = UrlServerGral + "/tiposvar"
const Variedades = UrlServerGral + "/listavariedades"
const AdminPedidos = UrlServerGral + "/AdminPedidos"
const BuscarPedidoUsu = UrlServerGral + "/BuscarPedidoUsu"
const CancelarPedidoAdmin = UrlServerGral + "/CancelarPedidoAdmin"
const ConfirmEnvio = UrlServerGral + "/ConfirmEnvio"
const DetPedidoPendAdmin = UrlServerGral + "/DetPedidoPendAdmin"
const GetInfoEmailPDF = UrlServerGral + "/GetInfoEmailPDF"
const CrearNotaCredAdmin = UrlServerGral + "/CrearNotaCredAdmin"
const EnvioFactura = UrlServerGral + "/EnvioFactura"
const PedidoEntregado = UrlServerGral + "/PedidoEntregado"

const ListaCupones = UrlServerGral + "/ListaCupones"
const NvoCupon = UrlServerGral + "/NvoCupon"
const EliminarCupon = UrlServerGral + "/EliminarCupon"
const EliminarVencidos = UrlServerGral + "/EliminarVencidos"
const ProvHab = UrlServerGral + "/ProvHab"
const CiudadesHab = UrlServerGral + "/CiudadesHab"
const ListaEmails = UrlServerGral + "/ListaEmails"

const PrevEmailCupon = UrlServerGral + "/PrevEmailCupon"
const EmailCupon = UrlServerGral + "/EmailCupon"
const PrevEmailLibre = UrlServerGral + "/PrevEmailLibre"
const EnviarEmailLibre = UrlServerGral + "/EnviarEmailLibre"
const PrevEmailMkt = UrlServerGral + "/PrevEmailMkt"
const EnviarEmaiMkt = UrlServerGral + "/EnviarEmaiMkt"

const ResVisitas = UrlServerGral + "/ResVisitas"
const UltVisitas = UrlServerGral + "/UltVisitas"
const ConsultaIP = UrlServerGral + "/ConsultaIP"
const GetLocation2 = UrlServerGral + "/GetLocation2"
const DeleteOldVisit = UrlServerGral + "/DeleteOldVisit"

const PreciosCorreo = UrlServerGral + "/PreciosCorreo"
const UpdatePricesCourier = UrlServerGral + "/UpdatePricesCourier"

const UrlNodeServer = {
    Loguin,
    NvaPass,
    RecPass,
    Veriflog,
    Herodata,
    HeroChangeState,
    HeroDelete,
    DetHero,
    UploadImg,
    ModHeroId,
    NvoHero,
    CountDownGet,
    CountDownActivar,
    CountDownMod,
    CountDownUpl,
    ProductList,
    ProductChangeEstate,
    ProductDelete,
    NvaActividad,
    NvoProducto,
    UploadImgProd,
    GetCategories,
    GetSubCategories,
    GetTagList,
    GetDetProduct,
    ModificarProducto,
    OptmizedImg,
    OpimizedImgHero,
    TiposVariedades,
    Variedades,
    ListaProveedores,
    AumentarPrecios,
    AdminPedidos,
    BuscarPedidoUsu,
    CancelarPedidoAdmin,
    ConfirmEnvio,
    DetPedidoPendAdmin,
    GetInfoEmailPDF,
    CrearNotaCredAdmin,
    EnvioFactura,
    PedidoEntregado,
    AplicarDescuento,
    EtiquetasGral,
    QuitarEtiqueta,
    ListaCupones,
    NvoCupon,
    EliminarCupon,
    EliminarVencidos,
    ProvHab,
    CiudadesHab,
    ListaEmails,
    PrevEmailCupon,
    EmailCupon,
    PrevEmailLibre,
    EnviarEmailLibre,
    PrevEmailMkt,
    EnviarEmaiMkt,
    ResVisitas,
    UltVisitas,
    ConsultaIP,
    GetLocation2,
    DeleteOldVisit,
    PreciosCorreo,
    UpdatePricesCourier
}

export default UrlNodeServer