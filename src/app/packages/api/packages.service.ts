import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPackageDelivered } from '../interfaces/IPackageDelivered';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  URL: string = 'http://cycmultiservicios.com/tome/paquetes';
  // packagesEdited: Array<IPackageDelivered>;

  constructor(private http: HttpClient, private storage: Storage) { }

  getPackages() {
    return this.http.get(this.URL);
    // return this.packages;
  }

  savePackageEdited(packageDelivered: IPackageDelivered) {
    // Printing the value
    console.log(packageDelivered);

    // Storing the value
    this.storage.set(
      packageDelivered.package.id_paquete, // ID
      JSON.stringify(packageDelivered)     // Value
    );

    this.storage.get(packageDelivered.package.id_paquete)
      .then((val :string) => {
        console.log(JSON.parse(val));
      });

  }

  packages = {
    "nodes": [
      {
        "node": {
          "ID Paquete": "52770-1",
          "Peso": "1.86",
          "Estado": "Entregado",
          "Dirección": "LOS ANGELES DE TILARAN GTE 150 MTS  SUR DE IGLESIA DE LOS ANGELES CASA COLOR TERRACOTA A MANO IZQUIERDA                                                                      ",
          "Población": "TILARAN GTE                                  ",
          "Nombre de afiliado": "LOBO CASTELLON FLORA          ",
          "Código de afiliado": "1246",
          "Teléfono": "26951036",
          "Celular": "87784066",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "52770-2",
          "Peso": "2.93",
          "Estado": "Rural",
          "Dirección": "1K AL NORTE DE LA OFICINA DEL PANI EN URBANIZACION ANA MERCEDES CASA MANO DERECHA COLOR VERDE PORTONES NEGROS CIUDAD QUESADA SAN CARLOS. CIUDAD QUESADA                      ",
          "Población": "CIUDAD QUESADA                               ",
          "Nombre de afiliado": "CASTRO RODRIGUEZ VILMA        ",
          "Código de afiliado": "6667",
          "Teléfono": "24610449",
          "Celular": "88194920",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "52770-3",
          "Peso": "1.08",
          "Estado": "Entregado",
          "Dirección": "DE LA IGLESIA CATÓLICA 75 MTS PULPERIA ANGELUZ OROTINA - COYOLAR                                                                                                             ",
          "Población": "OROTINA - COYOLAR                            ",
          "Nombre de afiliado": "VARELA GUNERA ADALUZ          ",
          "Código de afiliado": "30685",
          "Teléfono": "",
          "Celular": "62499895",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "52770-4",
          "Peso": "0.81",
          "Estado": "Entregado",
          "Dirección": "DEJAR EN EL MINISTERIO DE SALUD DE TILARAN GTE BARRIO LOMAS DEL CARMEN CASA # 10 CASA COLOR  TERRACOTA                                                                       ",
          "Población": "TILARAN                                      ",
          "Nombre de afiliado": "DURAN ROJAS MELBA             ",
          "Código de afiliado": "6963",
          "Teléfono": "26955032",
          "Celular": "83319833",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "52770-5",
          "Peso": "1.10",
          "Estado": "Entregado",
          "Dirección": "FRENTE AL HOTEL MONTERREAL  OFICINA DE CONTADORA DAMARIS CESPEDEZ FORTUNA DE SAN CARLOS ALAJUELA                                                                             ",
          "Población": "LA FORTUNA SAN CARLOS                        ",
          "Nombre de afiliado": "CESPEDEZ RODRIGUEZ DAMARIS    ",
          "Código de afiliado": "25150",
          "Teléfono": "",
          "Celular": "85247516",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "52770-6",
          "Peso": "0.48",
          "Estado": "Entregado",
          "Dirección": "250 MTS ESTE DE LA MUNICIPALIDAD, BARRIO LA JOYA, A LA PAR DE REPUESTOS AREASA, SI NO HAY NADIE DEJAR EN LA VENTA DE REPUESTOS PARAISO                                       ",
          "Población": "PARAISO                                      ",
          "Nombre de afiliado": "CHAVEZ MADRIZ PAOLA           ",
          "Código de afiliado": "19491",
          "Teléfono": "",
          "Celular": "88125141",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "52770-7",
          "Peso": "3.19",
          "Estado": "Entregado",
          "Dirección": "BOCA DE ARENAL, DEL INGENIO DE CUTRIZ 75 SUR, CASA AL FONO PORTON DE MADERA SIN PINTAR, SAN CARLOS - CUTRIS                                                                  ",
          "Población": "SAN CARLOS - CUTRIS                          ",
          "Nombre de afiliado": "GONZALES GARCIA ANA ROSA      ",
          "Código de afiliado": "31902",
          "Teléfono": "",
          "Celular": "71779143",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "52770-8",
          "Peso": "1.29",
          "Estado": "Entregado",
          "Dirección": "Bº PILO, LA FORTUNA 300 S DEL PARQUE CASA ESQUINER COLOR MELON LA FORTUNA                                                                                                    ",
          "Población": "LA FORTUNA                                   ",
          "Nombre de afiliado": "VALERIO ZUÑIGA CARMEN         ",
          "Código de afiliado": "1183",
          "Teléfono": "24799105",
          "Celular": "",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "52770-9",
          "Peso": "0.99",
          "Estado": "Entregado",
          "Dirección": "COSTADO SUR DE LA GASOLINERA PRIMER CASA A MANO DERECHA SAN CARLOS - MONTERREY                                                                                               ",
          "Población": "SAN CARLOS - MONTERREY                       ",
          "Nombre de afiliado": "MARTINEZ CHAVES ROSELINE      ",
          "Código de afiliado": "28338",
          "Teléfono": "24780118",
          "Celular": "88608031",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "52770-10",
          "Peso": "0.58",
          "Estado": "Ruta",
          "Dirección": "1 KM NORTE DE LA ESCUELA DE EL PARQUE DE LOS CHILES FRONTERA NORTE M/I COLOR AMARILLA ESQUINERA EL PARQUE DE LOS CHILES F.N.                                                 ",
          "Población": "EL PARQUE DE LOS CHILES F.N.                 ",
          "Nombre de afiliado": "REQUENE GARCIA LUZ MARINA     ",
          "Código de afiliado": "18573",
          "Teléfono": "",
          "Celular": "86744109",
          "Detalles": "El estado cambió a Ruta por fabian( Friday Sep 13 , 2019 04:05:39 PM ) Detalle:11/09/2019 11:48:51 a.m.\tIntento fallido de distribución Razón: Ruta o Salida Posterior\tSUCURSAL LOS CHILES\nEl estado cambió a Rural por fabian( Tuesday Sep 10 , 2019 04:51:46 PM ) Detalle:CORREOS DE COSTA RICA GUIA WS008774868CR\n"
        }
      },
      {
        "node": {
          "ID Paquete": "52770-11",
          "Peso": "2.54",
          "Estado": "Entregado",
          "Dirección": "400 METROS OESTE Y 50 METROS SUR DE LA ESCUELA DE SANTA ROSA DE POCOSOL SAN CARLOS M/I RUSTICA SIN PINTAR POCOSOL SAN CARLOS                                                 ",
          "Población": "POCOSOL SAN CARLOS                           ",
          "Nombre de afiliado": "ARCE RODRIGUEZ GUISELLE       ",
          "Código de afiliado": "21112",
          "Teléfono": "24777096",
          "Celular": "84008367",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "52770-12",
          "Peso": "0.43",
          "Estado": "Entregado",
          "Dirección": "CARTAGO TEJAR DEL GUARCO RESIDENCIAL ANA LUCIA DEL BAR NEUYORK 225SUR 125OESTE CASA NUMERO 21ICOLOR AMARILLA VERJAS ROJAS MANO IZQUIERDA TEJAR DEL GUARCO                    ",
          "Población": "TEJAR DEL GUARCO                             ",
          "Nombre de afiliado": "CALDERON PEREZ AMELIA         ",
          "Código de afiliado": "17170",
          "Teléfono": "25521756",
          "Celular": "88782951",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "52770-13",
          "Peso": "1.00",
          "Estado": "Entregado",
          "Dirección": "SAN ANTONIO DEL TEJAR ALAJUELA URB. LOS TEJARES CASA 14L MANO DERECHA COLOR VERDE CLARO                                                                                      ",
          "Población": "SAN ANTONIO DEL TEJAR ALAJUELA               ",
          "Nombre de afiliado": "CORTES GOMEZ MARITZA          ",
          "Código de afiliado": "22152",
          "Teléfono": "24434023",
          "Celular": "83274502",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "52770-14",
          "Peso": "0.30",
          "Estado": "Entregado",
          "Dirección": "COSTADO SUR DE  LA PLAZA MARACANA, URBANIZACION LA INDEPENDENCIA, CASA H#13,COLOR MELÓN A MANO IZQUIERDA ALAJUELA - ALAJUELA                                                 ",
          "Población": "ALAJUELA - ALAJUELA                          ",
          "Nombre de afiliado": "ARIAS HERRERA CARMEN          ",
          "Código de afiliado": "27095",
          "Teléfono": "",
          "Celular": "60435094",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "52770-15",
          "Peso": "0.29",
          "Estado": "Entregado",
          "Dirección": "TURRUCARES ALAJUELA 500 METROS OESTE DEL CEMENTERIO DE TURRUCARES CARRETERA HACIA CEBADILLA CASA A MONO DERECHA                                                              ",
          "Población": "**TURRUCARES  ALAJUELA                       ",
          "Nombre de afiliado": "CHAVARRIA JIMENEZ ROXANA      ",
          "Código de afiliado": "22238",
          "Teléfono": "24878892",
          "Celular": "88429947",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "52770-16",
          "Peso": "1.60",
          "Estado": "Entregado",
          "Dirección": "250 SUR CRUZ ROJA,CASA PATRIMONIO NACIONAL,COLOR AZULO CON BLANCO., BARVA - SAN PABLO                                                                                        ",
          "Población": "BARVA - SAN PABLO                            ",
          "Nombre de afiliado": "CALLE OSPINA BLANCA LUCERO    ",
          "Código de afiliado": "31342",
          "Teléfono": "",
          "Celular": "83919684",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "52770-17",
          "Peso": "1.68",
          "Estado": "Ruta",
          "Dirección": "LAS BRISAS DE CONTE DE PAVONES DE LAS ESCUELA LIDER CONTE  200 ESTE Y 125 NOROESTE, CASA COLOR NARANJA CON MALLA- GOLFITO - PAVON.                                           ",
          "Población": "GOLFITO - PAVON                              ",
          "Nombre de afiliado": "LEDEZMA ARTAVIA SANDRA PATRICI",
          "Código de afiliado": "31637",
          "Teléfono": "",
          "Celular": "84660726",
          "Detalles": "El estado cambió a Ruta por fabian( Friday Sep 13 , 2019 04:29:30 PM ) Detalle:11/09/2019 11:12:01 a.m.\tIntento fallido de distribución Razón: Ruta o Salida Posterior\tSUCURSAL GOLFITO\nEl estado cambió a Rural por fabian( Tuesday Sep 10 , 2019 05:23:27 PM ) Detalle:CORREOS DE COSTA RICA GUIA WS008776943CR\n"
        }
      },
      {
        "node": {
          "ID Paquete": "52770-18",
          "Peso": "5.23",
          "Estado": "Entregado",
          "Dirección": "HATILLO 7 DE LA GUARDERIA 100 ESTE CASA ESQUINERA TERRACOTA SAN JOSE - HATILLO                                                                                               ",
          "Población": "SAN JOSE - HATILLO                           ",
          "Nombre de afiliado": "OROZCO CRUZ ONEYDA EUNICE     ",
          "Código de afiliado": "30899",
          "Teléfono": "",
          "Celular": "89466479",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "52770-19",
          "Peso": "0.48",
          "Estado": "Entregado",
          "Dirección": "35 MTS NORTE 70 MTS ESTE DE LA ESCUELA SAN RAFAEL LA COLONIA DE HUAPILES CASA COLOR PAPAYA SRA. GEORGINA ZAMORA SANCHEZ PROVINCIA LIMON                                      ",
          "Población": "**GUAPILES-LIMÓN.                            ",
          "Nombre de afiliado": "VALLECILLOS SANCHES TATIANA CR",
          "Código de afiliado": "26254",
          "Teléfono": "27102485",
          "Celular": "88554651",
          "Detalles": "El estado cambió a Entregado por fabian( Friday Sep 13 , 2019 04:14:19 PM )\nPersona que recibe: \"Otros\" (CORREOS DE COSTA RICA) Detalle:Recibido por: GEORGINA ZAMORA SANCHEZ  13/09/2019 11:28:50 a.m.\tENTREGADO\tCENTRO CARTEROS GUAPILES. Telf: 27104837\nEl estado cambió a Rural por fabian( Tuesday Sep 10 , 2019 04:58:53 PM ) Detalle:CORREOS DE COSTA RICA GUIA WS008775758CR\n"
        }
      },
      {
        "node": {
          "ID Paquete": "52849-1",
          "Peso": "0.67",
          "Estado": "Entregado",
          "Dirección": "CONTIGUO A LA ESCUELA DE SAN JOSE DE AZ CASA DE MADERA DOS PLANTAS AGUAS ZARCAS                                                                                              ",
          "Población": "AGUAS ZARCAS                                 ",
          "Nombre de afiliado": "CARBALLO GOMEZ LIGIA          ",
          "Código de afiliado": "25352",
          "Teléfono": "24742013",
          "Celular": "88494724",
          "Detalles": "El estado cambió a Entregado por fabian( Friday Sep 13 , 2019 04:10:36 PM )\nPersona que recibe: \"Otros\" (CORREOS DE COSTA RICA) Detalle:11/09/2019 11:29:01 a.m.\tENTREGADO\tCENTRO DE CARTEROS CIUDAD QUESADA.Telf: 24612249\nEl estado cambió a Rural por fabian( Tuesday Sep 10 , 2019 04:58:00 PM ) Detalle:CORREOS DE COSTA RICA GUIA WS008775625CR\n"
        }
      },
      {
        "node": {
          "ID Paquete": "52849-2",
          "Peso": "1.83",
          "Estado": "Entregado",
          "Dirección": "URB COROBICI CASA 18 COLOR BEIS                                                                                                                                              ",
          "Población": "**CIUDAD QUESADA                             ",
          "Nombre de afiliado": "BARRANTES VINDAS ANA LUCIA    ",
          "Código de afiliado": "11330",
          "Teléfono": "24671097",
          "Celular": "83321749",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "52849-3",
          "Peso": "4.21",
          "Estado": "Entregado",
          "Dirección": "COLEGIO TECNOLOGICO DE UPALA, 150MTS AL ESTE Y 50MTS AL NORTE, BARRIO DON SHU, CASA MANO DERECHA UPALA - UPALA                                                               ",
          "Población": "UPALA - UPALA                                ",
          "Nombre de afiliado": "MENA HERNANDEZ MILADY DEL CARM",
          "Código de afiliado": "29431",
          "Teléfono": "83211745",
          "Celular": "85748383",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "52849-4",
          "Peso": "0.39",
          "Estado": "Ruta",
          "Dirección": "150 M SUR Y 200 M ESTE DE LA ESCUELA DE LA FLOR DE RIO CUARTO DE GRECIA ALAJUELA CASA M. IZQ. CON GALERON GRANDE GRECIA - RIO CUARTO                                         ",
          "Población": "GRECIA - RIO CUARTO                          ",
          "Nombre de afiliado": "CHAVES GONZALEZ ELIZABETH     ",
          "Código de afiliado": "30368",
          "Teléfono": "",
          "Celular": "87831211",
          "Detalles": "El estado cambió a Ruta por fabian( Friday Sep 13 , 2019 04:27:20 PM ) Detalle:12/09/2019 01:43:41 p.m.\tIntento fallido de distribución Razón: Ruta o Salida Posterior\tSUCURSAL PITAL\nEl estado cambió a Rural por fabian( Tuesday Sep 10 , 2019 05:22:49 PM ) Detalle:CORREOS DE COSTA RICA GUIA WS008776872CR\n"
        }
      },
      {
        "node": {
          "ID Paquete": "52849-5",
          "Peso": "2.34",
          "Estado": "Entregado",
          "Dirección": "LA TABLA DE RIO CUARTO GRECIA CASA  CONTIGUO BAR  EL SERPICO  PITAL LA TABLA                                                                                                 ",
          "Población": "LA TABLA PITAL                               ",
          "Nombre de afiliado": "OSES VARGAS MARIA ELIZABETH   ",
          "Código de afiliado": "277",
          "Teléfono": "89840518",
          "Celular": "83506937",
          "Detalles": "El estado cambió a Entregado por fabian( Friday Sep 13 , 2019 03:58:55 PM )\nPersona que recibe: \"Otros\" (CORREOS DE COSTA RICA) Detalle:Recibido por: OSES VARGAS MARIA\nEl estado cambió a Rural por fabian( Tuesday Sep 10 , 2019 04:43:01 PM ) Detalle:CORREOS DE COSTA RICA GUIA WS008773111CR\n"
        }
      },
      {
        "node": {
          "ID Paquete": "52849-7",
          "Peso": "1.19",
          "Estado": "Entregado",
          "Dirección": "ALAJUELA 200 NORTE SUPER MERCADO EL PORO HACIA CALLE AL CEMENTEREIO ENTRADA CONTIGUO AL PUENTE AMARILLO MANO IZQUIERDA SEGUNDA CASA GRECIA EL PORO                           ",
          "Población": "ALAJUELA GRECIA                              ",
          "Nombre de afiliado": "SOLANO GUEVARA MARIA FERNANDA ",
          "Código de afiliado": "25311",
          "Teléfono": "24947359",
          "Celular": "83171407",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "52849-8",
          "Peso": "1.01",
          "Estado": "Entregado",
          "Dirección": "DELA ESCUELA DE SN FRANCISCO 100 MTS NOTE 100 OESTE Y 50 SUR CASA BLANCA ESQUINERA 2 PLANTAS SAN FRANCISCO HEREDIA                                                           ",
          "Población": "**                                           ",
          "Nombre de afiliado": "CASTRO CHAVARRÍA ELSA DEL SOCO",
          "Código de afiliado": "28058",
          "Teléfono": "",
          "Celular": "70181994",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "52849-9",
          "Peso": "0.86",
          "Estado": "Entregado",
          "Dirección": "DEL ESTADIO DE LA LIGA 300 ESTE CONDOMINIO EL TRAPICHE CASA NUMERO 28 ALAJUELA - ALAJUELA                                                                                    ",
          "Población": "ALAJUELA - ALAJUELA                          ",
          "Nombre de afiliado": "GONZALEZ SALAZAR ANA VICTORIA ",
          "Código de afiliado": "28150",
          "Teléfono": "24432319",
          "Celular": "88886304",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "52849-10",
          "Peso": "1.62",
          "Estado": "Entregado",
          "Dirección": "DEL VOCACIONAL 100 NORTE Y 25 ESTE APARTAMENTO COLOR PAPAYA 1 HEREDIA - HEREDIA                                                                                              ",
          "Población": "HEREDIA - HEREDIA                            ",
          "Nombre de afiliado": "SUAREZ CHAVERRI MELBA         ",
          "Código de afiliado": "32119",
          "Teléfono": "",
          "Celular": "83784589",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "52849-11",
          "Peso": "1.13",
          "Estado": "Entregado",
          "Dirección": "IPIS DE GOICOCHEA, DE LA ANTIGUA LONA TICA 100ESTE,25SUR,URBANIZACION EL PROGRESO CASA NUMERO80 COLOR TERRACOTA VERJAS NEGRAS GOICOECHEA - IPIS                              ",
          "Población": "GOICOECHEA - IPIS                            ",
          "Nombre de afiliado": "GONZALEZ TORRES LINSY PAOLA   ",
          "Código de afiliado": "29872",
          "Teléfono": "84368256",
          "Celular": "72029608",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "52849-12",
          "Peso": "1.13",
          "Estado": "Entregado",
          "Dirección": "CORONADO DELCE NOMBRE DEL PALI 200 NORTE 800 OESTE 50 SUR CENCEPCION BARRIO  EL CARMEN CASA N7                                                                               ",
          "Población": "**SAN JOSE CORONADO -DULCE NOM               ",
          "Nombre de afiliado": "ARCE SOTO GISELA              ",
          "Código de afiliado": "29929",
          "Teléfono": "",
          "Celular": "63478815",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "52849-13",
          "Peso": "0.81",
          "Estado": "Entregado",
          "Dirección": "LOS GUIDOS SECTOR 7 EN LA ESCUELA DESAMPARADOS - LOS GUIDO                                                                                                                   ",
          "Población": "DESAMPARADOS - LOS GUIDO                     ",
          "Nombre de afiliado": "SEGURA UREÑA INGRID EUGENIA   ",
          "Código de afiliado": "28716",
          "Teléfono": "25000736",
          "Celular": "87229012",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "52849-14",
          "Peso": "1.67",
          "Estado": "Entregado",
          "Dirección": "DE LA ESCUELA EL DANTO 1 KILOMETRO AL NORTE CASA A MANO IZQUIERDA COLOR ROSADA                                                                                               ",
          "Población": "COTO BRUS - SAN VITO                         ",
          "Nombre de afiliado": "VINDAS CHAVES DIANEY          ",
          "Código de afiliado": "28465",
          "Teléfono": "",
          "Celular": "83105486",
          "Detalles": "El estado cambió a Entregado por fabian( Friday Sep 13 , 2019 04:20:22 PM )\nPersona que recibe: \"Otros\" (CORREOS DE COSTA RICA) Detalle:Recibido por: DIANEY VINDAS CHAVES   12/09/2019 12:25:05 p.m.\tENTREGADO\tSUCURSAL SAN VITO\nEl estado cambió a Rural por fabian( Tuesday Sep 10 , 2019 05:10:21 PM ) Detalle:CORREOS DE COSTA RICA GUIA WS008776413CR\n"
        }
      },
      {
        "node": {
          "ID Paquete": "52849-15",
          "Peso": "1.34",
          "Estado": "Ruta",
          "Dirección": "DEJAR EN SUCURSAL DE CORREOS GUAPILES                                                                                                                                        ",
          "Población": "**                                           ",
          "Nombre de afiliado": "AVENDAÑO ALVAREZ ALONDRA      ",
          "Código de afiliado": "27981",
          "Teléfono": "61098388",
          "Celular": "61098388",
          "Detalles": "El estado cambió a Ruta por fabian( Friday Sep 13 , 2019 04:18:50 PM ) Detalle:11/09/2019 07:55:36 a.m.\tIntento fallido de distribución Razón: Avisado en Apartado o Lista de Correos\tSUCURSAL GUAPILES\nEl estado cambió a Rural por fabian( Tuesday Sep 10 , 2019 05:09:35 PM ) Detalle:CORREOS DE COSTA RICA GUIA WS008776197CR\n"
        }
      },
      {
        "node": {
          "ID Paquete": "52849-16",
          "Peso": "0.75",
          "Estado": "Entregado",
          "Dirección": "FARMACIA TALAMANCA EN GUACIMO CENTRO  150 SUR DE LA CLIENICA DE LA CCSS                                                                                                      ",
          "Población": "**GUAPILES, LIMON                            ",
          "Nombre de afiliado": "VALERIN BUSTOS ELVIS          ",
          "Código de afiliado": "15139",
          "Teléfono": "27100562",
          "Celular": "83186635",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "52849-17",
          "Peso": "0.37",
          "Estado": "Entregado",
          "Dirección": "35 MTS NORTE 70 MTS ESTE DE LA ESCUELA SAN RAFAEL LA COLONIA DE HUAPILES CASA COLOR PAPAYA SRA. GEORGINA ZAMORA SANCHEZ PROVINCIA LIMON                                      ",
          "Población": "**GUAPILES-LIMÓN.                            ",
          "Nombre de afiliado": "VALLECILLOS SANCHES TATIANA CR",
          "Código de afiliado": "26254",
          "Teléfono": "27102485",
          "Celular": "88554651",
          "Detalles": "El estado cambió a Entregado por fabian( Friday Sep 13 , 2019 04:16:02 PM )\nPersona que recibe: \"Otros\" (CORREOS DE COSTA RICA) Detalle:Recibido por: georgina Zamora sanchez   11/09/2019 01:08:03 p.m.\tENTREGADO\tCENTRO CARTEROS GUAPILES. Telf: 27104837\nEl estado cambió a Rural por fabian( Tuesday Sep 10 , 2019 04:59:40 PM ) Detalle:CORREOS DE COSTA RICA GUIA WS008775948CR\n"
        }
      },
      {
        "node": {
          "ID Paquete": "52929-1",
          "Peso": "0.29",
          "Estado": "Entregado",
          "Dirección": "500 ESTE DE LA NACION , CASA MANO DERECHA, COLOR VERDE, DESPUES DEL PUENTE DE LA 32 TIBAS - ANSELMO                                                                          ",
          "Población": "TIBAS - ANSELMO LLORENTE                     ",
          "Nombre de afiliado": "MARTINEZ OCAMPO MARTA EUGENIA ",
          "Código de afiliado": "31482",
          "Teléfono": "22353933",
          "Celular": "89576154",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "52929-2",
          "Peso": "1.76",
          "Estado": "Entregado",
          "Dirección": "SAN PEDRO DE LA IGLESIA CATOLICA 300ESTE, BANCO CATAY                                                                                                                        ",
          "Población": "**MONTES DE OCA - SAN PEDRO                  ",
          "Nombre de afiliado": "CORDOBA FALLAS ALEJANDRA SUSAN",
          "Código de afiliado": "29141",
          "Teléfono": "",
          "Celular": "70108968",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "52929-3",
          "Peso": "8.01",
          "Estado": "Entregado",
          "Dirección": "GUADALUPE CENTRO DETRAS DE LA CLINICA RICARDO JIMENEZ NUÑEZ DIAGONAL REST. CASA MIA CASA AMARILLA NUM.40 REJAS ROJAS CONTIGUO SALON DE BELLEZA FRENTE LOCAL DE BATIDO        ",
          "Población": "GOICOECHEA - GUADALUPE EL CARMEN             ",
          "Nombre de afiliado": "OVIEDO MENDEZ ANA LORENA      ",
          "Código de afiliado": "29643",
          "Teléfono": "70619503",
          "Celular": "89326566",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "52929-4",
          "Peso": "1.05",
          "Estado": "Entregado",
          "Dirección": "LA AURORA DE HEREDIA CONDOMINIO GABRIELA, BAR UMBRALES HEREDIA - ULLOA                                                                                                       ",
          "Población": "HEREDIA - ULLOA                              ",
          "Nombre de afiliado": "TOLEDO SABALLO VELKIN         ",
          "Código de afiliado": "28257",
          "Teléfono": "",
          "Celular": "86558888",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "52929-5",
          "Peso": "1.59",
          "Estado": "Entregado",
          "Dirección": "URBANIZACIÓN ELLINCE CASA 13A                                                                                                                                                ",
          "Población": "DESAMPARADOS - SAN MIGUEL                    ",
          "Nombre de afiliado": "VILLALOBOS RUIZ ROCIO MARCELA ",
          "Código de afiliado": "31179",
          "Teléfono": "22704716",
          "Celular": "70451515",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "52929-6",
          "Peso": "1.38",
          "Estado": "Entregado",
          "Dirección": "LIMON, PACUARE, CARRETERA EL BOSQUE 200NOROESTE DE LA ANTIGUA REGIONAL CERCA DE ZING CASA COLOR VERDE VERJAS NEGRAS LIMON - LIMON                                            ",
          "Población": "LIMON - LIMON                                ",
          "Nombre de afiliado": "MATA VILCHEZ FANNY PATRICIA   ",
          "Código de afiliado": "28952",
          "Teléfono": "",
          "Celular": "85945940",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "52929-7",
          "Peso": "0.26",
          "Estado": "Entregado",
          "Dirección": "LIMÓN BARRIO LOS CORALES 3,125 NORTE Y 75 OESTE DE LA PLAZA DE FUTBOL, CASA COLOR VERDE MANZANO                                                                              ",
          "Población": "LIMON - LIMON                                ",
          "Nombre de afiliado": "TORRES LIZANO SANDRA          ",
          "Código de afiliado": "31444",
          "Teléfono": "27951390",
          "Celular": "88867136",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "52929-8",
          "Peso": "0.88",
          "Estado": "Entregado",
          "Dirección": "FRENTE A LOS TANQUES DEL AYA CASA COLOR BLANCO                                                                                                                               ",
          "Población": "LIMON - LIMON                                ",
          "Nombre de afiliado": "GARCIA MOYA DEIBY DEL CARME   ",
          "Código de afiliado": "31448",
          "Teléfono": "",
          "Celular": "88285662",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "52929-9",
          "Peso": "0.68",
          "Estado": "Entregado",
          "Dirección": "50 AL ESTE DEL MERCADO DEL MUEBLE 100 SUR 75 OESTE EN ABASTECEDOR SHALOM GOICOECHEA - PURRAL                                                                                 ",
          "Población": "GOICOECHEA - PURRAL                          ",
          "Nombre de afiliado": "MELGARA VAZQUEZ CELINA        ",
          "Código de afiliado": "31507",
          "Teléfono": "40338600",
          "Celular": "61523445",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "52929-10",
          "Peso": "0.79",
          "Estado": "Entregado",
          "Dirección": "SAN JOSE-SAN JOSE PAVAS  PAVAS CENTRO  DE LA ESQUINA NOROESTE DE LA PLAZA 100 MTS Y  25 M OESTE CASA CAFE                                                                    ",
          "Población": "SAN JOSE                                     ",
          "Nombre de afiliado": "JIMENEZ CALVO GRETTEL         ",
          "Código de afiliado": "32065",
          "Teléfono": "",
          "Celular": "83477574",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "52929-11",
          "Peso": "0.90",
          "Estado": "Entregado",
          "Dirección": "DEL PARQUEO DE LA GUACAMAYA175 SUR  MANO DERECHA CASA 8 D COLOR TERRACOTA CON VERJAS BLANCAS PASO ANCHO,SAN SEBASTÍAN                                                        ",
          "Población": "PASO ANCHO,SAN SEBASTÍAN                     ",
          "Nombre de afiliado": "SEGURA SANCHEZ BERANIA        ",
          "Código de afiliado": "16784",
          "Teléfono": "22262917",
          "Celular": "85047452",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53012-1",
          "Peso": "0.89",
          "Estado": "Entregado",
          "Dirección": "SAN FRANCISCO LA PALMERA 500M SUR DE LA PLAZA DE DEPORTES A MANO IZQ CONTIGUO A PINCHOS BILLIS, CASA COLOR BEIGE                                                             ",
          "Población": "SAN CARLOS - PALMERA                         ",
          "Nombre de afiliado": "JARA ROJAS FLOR               ",
          "Código de afiliado": "28906",
          "Teléfono": "24748512",
          "Celular": "87258638",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53012-2",
          "Peso": "0.89",
          "Estado": "Entregado",
          "Dirección": "SAN SEBASTIAN DEL WALR MAART  600 ESTE  DIAGONAL A TIENDA PICAROS DE PASO ANCHO Y SAN SEBASTIAN A MANO DERECHA CASA COLOR VERDE SIN NUMERO TECHO DE TEJA, CASA  TODA CERRADA ",
          "Población": "SAN SEBASTIAN                                ",
          "Nombre de afiliado": "ARROYO MONGE CARMEN           ",
          "Código de afiliado": "16982",
          "Teléfono": "22862857",
          "Celular": "71187293",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53012-3",
          "Peso": "1.06",
          "Estado": "Entregado",
          "Dirección": "HATILLO 3 CALLE CENTRAL CASA 99 COLOR LADRILLO CONTIGUO A VIANEY HATILLO                                                                                                     ",
          "Población": "HATILLO                                      ",
          "Nombre de afiliado": "MORA SIBAJA MARIA ELENA       ",
          "Código de afiliado": "21828",
          "Teléfono": "22545078",
          "Celular": "83834590",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53012-4",
          "Peso": "0.55",
          "Estado": "Entregado",
          "Dirección": "CARTAGO TABLÓN DEL GUARCO 150 SUROESTE DE LA SASTRERIA CARTAGINESA BAJANDO CASA MANO DERECHA COLOR VERDE MUSGO EL GUARCO - TOBOSI                                            ",
          "Población": "EL GUARCO - TOBOSI                           ",
          "Nombre de afiliado": "PEREIRA TREJOS CARMEN MARIA   ",
          "Código de afiliado": "29868",
          "Teléfono": "25738473",
          "Celular": "71377030",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53012-5",
          "Peso": "0.73",
          "Estado": "Entregado",
          "Dirección": "CARTAGO PARAISO CENTRO DE LA MUNICIPALIDAD 200ESTE 75NORTE CASA MANO DERECHA PORTON ROJO TEJAS SIMULANDO TECHO CASA METIDA PARAISO                                           ",
          "Población": "PARAISO                                      ",
          "Nombre de afiliado": "LOAIZA ARAYA SILVIA           ",
          "Código de afiliado": "18381",
          "Teléfono": "25744272",
          "Celular": "83550322",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53012-6",
          "Peso": "1.00",
          "Estado": "Entregado",
          "Dirección": "100 MT NORTE AGENCIA MUCAP CASA AMARILLA VERJAS VERDES  ESQUINERA TEJAR DEL GUARCO                                                                                           ",
          "Población": "TEJAR DEL GUARCO                             ",
          "Nombre de afiliado": "ALVARADO RAMIREZ MARCIA       ",
          "Código de afiliado": "10261",
          "Teléfono": "25517559",
          "Celular": "85055280",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53012-7",
          "Peso": "0.27",
          "Estado": "Entregado",
          "Dirección": "DE SODA EL TUCAN 100MTS ESTE Y 200 NORTE CASA 46 U  RESIDENCIAL CARTAGO                                                                                                      ",
          "Población": "CARTAGO                                      ",
          "Nombre de afiliado": "HERRERA ALVAREZ DAMARIS       ",
          "Código de afiliado": "5008",
          "Teléfono": "25921293",
          "Celular": "",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53012-8",
          "Peso": "1.51",
          "Estado": "Entregado",
          "Dirección": "CARTAGO CENTRO DE LA FUNERARIA LA ULTIMA JOYA 275SUR CASA MANO IZQUIERDA DE DOS PLANTAS COLOR NARANJA VERJAS CAFE CARTAGO                                                    ",
          "Población": "CARTAGO                                      ",
          "Nombre de afiliado": "FORRESTER SALAZAR EUGENIA     ",
          "Código de afiliado": "24979",
          "Teléfono": "25923181",
          "Celular": "83426199",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53012-9",
          "Peso": "0.34",
          "Estado": "Entregado",
          "Dirección": "150SUR DE LA IGLESIA DE SAN JOAQUIN  CASA COLOR AMARILLA CON TAPIA COLOR VINO A MANO DERECHA                                                                                 ",
          "Población": "SAN JOAQUIN DE FLORES - SAN JO               ",
          "Nombre de afiliado": "BARRANTES VIQUEZ ROSAISELA    ",
          "Código de afiliado": "28562",
          "Teléfono": "22656022",
          "Celular": "88141958",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53012-10",
          "Peso": "0.42",
          "Estado": "Entregado",
          "Dirección": "ESCUELA HERNANDEZ 2 KM AL SUR URBANIZACION ARBOL DE PLATA GUARARI CASA E 32                                                                                                  ",
          "Población": "**                                           ",
          "Nombre de afiliado": "SEQUEIRA VILLALOBOS EULALIA   ",
          "Código de afiliado": "1757",
          "Teléfono": "",
          "Celular": "85550948",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53012-11",
          "Peso": "1.12",
          "Estado": "Entregado",
          "Dirección": "SAN PABLO HEREDIA, DE LA ESCUELA DEL RINCON DE RICARDO 200 SUR  SOBRE CALLE PRINCIPAL CASA #1 PORTON CAFE  M/I                                                               ",
          "Población": "HEREDIA                                      ",
          "Nombre de afiliado": "LOPEZ LOPEZ HONEYBEE CAROLINA ",
          "Código de afiliado": "6819",
          "Teléfono": "25601136",
          "Celular": "83607134",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53012-12",
          "Peso": "0.74",
          "Estado": "Entregado",
          "Dirección": "LIMON BARRIO VILLA DEL MAR 2 ENTRADA POR LA PISTA CALLE PRINCIPAL DESPUES DEL RESTAURANTE PALADAR SEGUNDO GARAGE A LA IZQUIERDA CASA CON UNA BANDERA DE JAMAICA PINTADA EN LA",
          "Población": "LIMON                                        ",
          "Nombre de afiliado": "PEREZ CENTENO ROSAURA         ",
          "Código de afiliado": "19923",
          "Teléfono": "",
          "Celular": "83046219",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53012-13",
          "Peso": "1.92",
          "Estado": "Entregado",
          "Dirección": "PUNTARENAS, LEPANTO, ISLA VENADO, 100ESTE DEL BAR GAVIOTAS CASA DE CEMENTO SIN PINTAR PUNTARENAS - LEPANTO                                                                   ",
          "Población": "PUNTARENAS - LEPANTO                         ",
          "Nombre de afiliado": "BARRIOS MARTINEZ SILVIA       ",
          "Código de afiliado": "28918",
          "Teléfono": "",
          "Celular": "89062596",
          "Detalles": "El estado cambió a Entregado por fabian( Friday Sep 13 , 2019 04:21:36 PM )\nPersona que recibe: \"Otros\" (CORREOS DE COSTA RICA) Detalle:11/09/2019 12:02:37 p.m.\tENTREGADO\tSUCURSAL JICARAL\nEl estado cambió a Rural por fabian( Tuesday Sep 10 , 2019 05:16:33 PM ) Detalle:CORREOS DE COSTA RICA GUIA WS008776550CR\n"
        }
      },
      {
        "node": {
          "ID Paquete": "53012-14",
          "Peso": "1.42",
          "Estado": "Entregado",
          "Dirección": "CARTAGO-GUARCO ORIENTAL RESINDECIAL LA HACIENDA DEL REY CASA 44 F,FRENTE A ZONA INDUSTRIAL CARTAGO                                                                           ",
          "Población": "CARTAGO                                      ",
          "Nombre de afiliado": "AGUILAR GARITA KATTIA         ",
          "Código de afiliado": "32058",
          "Teléfono": "83123832",
          "Celular": "62948561",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53012-15",
          "Peso": "0.87",
          "Estado": "Entregado",
          "Dirección": "DE LA IGLESIA CATOLICA 75 SUR 25 ESTE CASA VERDE  VERJAS NEGRAS ALAJUELITA - SAN JOSECITO                                                                                    ",
          "Población": "ALAJUELITA - SAN JOSECITO                    ",
          "Nombre de afiliado": "AVILA JIMENEZ GRETTEL ADRIANA ",
          "Código de afiliado": "32121",
          "Teléfono": "",
          "Celular": "84664581",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53012-16",
          "Peso": "1.01",
          "Estado": "Entregado",
          "Dirección": "URBANIZACION LOS CASTORES BAJANDO LAS GRADAS CASA 8 GOICOECHEA - PURRAL                                                                                                      ",
          "Población": "GOICOECHEA - PURRAL                          ",
          "Nombre de afiliado": "MEJIA RIVAS REINA DEL ROSARIO ",
          "Código de afiliado": "31294",
          "Teléfono": "",
          "Celular": "72750602",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53012-17",
          "Peso": "1.72",
          "Estado": "Entregado",
          "Dirección": "DEL SUPER SAN FRANCIS 75 ESTE , 100 SUR CASA DE 3 PISOS MANO DERECHA CALLE SIN SALIDA GOICOECHEA - PURRAL                                                                    ",
          "Población": "GOICOECHEA - PURRAL                          ",
          "Nombre de afiliado": "RIVERA MORALES RAQUEL AUXILIAD",
          "Código de afiliado": "31632",
          "Teléfono": "",
          "Celular": "87960126",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53012-19",
          "Peso": "1.15",
          "Estado": "Entregado",
          "Dirección": "HATILLO#7 CASA #11 FRENTE AL ABASTESEDOR EL V                                                                                                                                ",
          "Población": "LOS HATILLOS                                 ",
          "Nombre de afiliado": "M.TRABAJO-FONSECA HERRERA SAND",
          "Código de afiliado": "12789",
          "Teléfono": "83110937",
          "Celular": "88365680",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53012-20",
          "Peso": "2.09",
          "Estado": "Entregado",
          "Dirección": "HATILLO 7 DIAGONAL A PANADERIA LA EXQUISITA,                                                                                                                                 ",
          "Población": "HATILLO                                      ",
          "Nombre de afiliado": "M.TRABAJO-PORRAS HERRERA MARIE",
          "Código de afiliado": "15042",
          "Teléfono": "22201284",
          "Celular": "88203673",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53012-21",
          "Peso": "1.09",
          "Estado": "Entregado",
          "Dirección": "                                                                                                                                                                             ",
          "Población": "HATILLO                                      ",
          "Nombre de afiliado": "M.TRABAJO-HERRERA ALVAREZ MARI",
          "Código de afiliado": "18565",
          "Teléfono": "22961284",
          "Celular": "",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53012-22",
          "Peso": "1.57",
          "Estado": "Entregado",
          "Dirección": "TIRRASES, CURRIDABAT DE LA ESCUELA 15 DE AGOSTO 400M SUR Y 25M ESTE, PRIMERA ALAMEDA A  MANO DERECHA CASA COLOR VERDE AGUA Y PORTONES NEGROS                                 ",
          "Población": "**TIRRASES, CURRIDABAT                       ",
          "Nombre de afiliado": "VARELA MARTINEZ MARIA         ",
          "Código de afiliado": "4633",
          "Teléfono": "22742852",
          "Celular": "88104849",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53012-23",
          "Peso": "1.35",
          "Estado": "Entregado",
          "Dirección": "SANTA ANA, RIO ORO 300 OESTE DE LA ESCUELA ISABEL LA CATOLICA CASA MANO IZQUIERDA CONTIGO A EL PUENTE DE RIO ORO CASA COLOR CELESTE                                          ",
          "Población": "SANTA ANA                                    ",
          "Nombre de afiliado": "BUSTAMANTE CASTRO VIVIANA     ",
          "Código de afiliado": "22393",
          "Teléfono": "23041980",
          "Celular": "",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53012-24",
          "Peso": "2.15",
          "Estado": "Entregado",
          "Dirección": "HATILLO 7 DE LA GUARDERIA 100 ESTE CASA ESQUI-HATILLO 7                                                                                        HATILLO 7                     ",
          "Población": "SAN JOSE - HATILLO                           ",
          "Nombre de afiliado": "M.TRABAJO-OROZCO CRUZ ONEYDA E",
          "Código de afiliado": "136201",
          "Teléfono": "",
          "Celular": "89466479",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53012-25",
          "Peso": "0.54",
          "Estado": "Entregado",
          "Dirección": "ABAJO DEL BAR EL PERCAL 150 SUR CASA MANO DER REJAS NEGRAS MURO VINO FRENTE A LA ANTIGUA PANADERIA V                                                                         ",
          "Población": "ALAJUELITA - CONCEPCION                      ",
          "Nombre de afiliado": "CAMPOS RODRIGUEZ GERSON DAVID ",
          "Código de afiliado": "31454",
          "Teléfono": "",
          "Celular": "70045905",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53012-26",
          "Peso": "0.97",
          "Estado": "Entregado",
          "Dirección": "200 METROS OESTE DE IMPORTADORA MONGE Y 200 METROS NORTE, CASA COLOR BLANCO MANO DERECHA, VERJAS BLANCAS SANTA CRUZ                                                          ",
          "Población": "SANTA CRUZ                                   ",
          "Nombre de afiliado": "MATARRITA NAVARRETE HILDA     ",
          "Código de afiliado": "14683",
          "Teléfono": "26804501",
          "Celular": "84128581",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53012-27",
          "Peso": "1.53",
          "Estado": "Entregado",
          "Dirección": "CARTAGO-OREAMUNO COT PASO ANCHO DE OREAMUNO 25 ESTE DEL TEMPLO CATOLICO CONTIGUO SALON PARROQUIAL CASA VERDE VERJAS NEGRAS                                                   ",
          "Población": "CARTAGO-OREAMUNO                             ",
          "Nombre de afiliado": "TORRES GOMEZ ROSA MARIA       ",
          "Código de afiliado": "32120",
          "Teléfono": "25366233",
          "Celular": "89565430",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53012-28",
          "Peso": "1.81",
          "Estado": "Entregado",
          "Dirección": "SAN JOSE-MORAVIA-SAN VICENTE-MORAVIA DEL GLOD GYM  75 MTS ESTE  QUINTA CASA  A MANO IZQUIERDA                                                                                ",
          "Población": "SAN JOSE-MORAVIA                             ",
          "Nombre de afiliado": "RAMIREZ ARTAVIA MARIA GABRIELA",
          "Código de afiliado": "32066",
          "Teléfono": "47002968",
          "Celular": "84491641",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-7",
          "Peso": "0.46",
          "Estado": "Entregado",
          "Dirección": "GRAVILIAS DE LA ESCUELA 200 E 25 S CASA Nº81 AMARILLA PORTON CAFE CASA DE ALTO EN LA ENTRADA ALAMEDA ARCO CON AMARILLO DIAGONAL A FOTOCOPIADORA PELUSA                       ",
          "Población": "DESAMPARADOS                                 ",
          "Nombre de afiliado": "CHAVEZ RIVERA GEORGINA        ",
          "Código de afiliado": "1413",
          "Teléfono": "",
          "Celular": "83500101",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-9",
          "Peso": "0.49",
          "Estado": "Entregado",
          "Dirección": "SAN RAFAEL DE CORONADO FRENTE A ESCUELA DE SAN RAFAEL CASA VERDE CORONADO                                                                                                    ",
          "Población": "CORONADO                                     ",
          "Nombre de afiliado": "VARGAS MEDINA ELIA YADIRA     ",
          "Código de afiliado": "6476",
          "Teléfono": "22293360",
          "Celular": "63621626",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-12",
          "Peso": "0.74",
          "Estado": "Entregado",
          "Dirección": "ESCAZU, DE LA ENTRADA PRINCIPAL DEL COSTA RICA CONTRY CLUB, 50 NORTE . EN EL CONDOMINIO CONTRY CLUB. DEJAR CON EL GUARDA ESCAZU                                              ",
          "Población": "ESCAZU                                       ",
          "Nombre de afiliado": "GARCIA ARIAS IRENE            ",
          "Código de afiliado": "13245",
          "Teléfono": "22289632",
          "Celular": "89217569",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-13",
          "Peso": "1.06",
          "Estado": "Entregado",
          "Dirección": "EL CARMEN DE GUADALUPE LOMAS DE TEPEYAC, DE LA FARMACIA LAISA 6 CUADRAS NORTE Y 50 ESTE CASA 14-I A LA PARV DE CASETILLA DEL GUARDA . MATA DE PLATANO ,GUADALUPE             ",
          "Población": "MATA DE PLATANO ,GUADALUPE                   ",
          "Nombre de afiliado": "GAITAN PERALTA LUZ MARIA      ",
          "Código de afiliado": "19787",
          "Teléfono": "22856360",
          "Celular": "83133753",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-14",
          "Peso": "1.39",
          "Estado": "Entregado",
          "Dirección": "DULCE NOMBRE DE CORONADO DE LA ESCUELA DE DULCE NOMBRE  600 O 25 S VILLA NOVA SEGUNDA CASA MANO DERECHA FRENTE AL MUERTO  CASA Nº27 CORONADO                                 ",
          "Población": "CORONADO                                     ",
          "Nombre de afiliado": "BALTODANO PASOS MARIANELA     ",
          "Código de afiliado": "863",
          "Teléfono": "22924058",
          "Celular": "88278899",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-15",
          "Peso": "1.83",
          "Estado": "Entregado",
          "Dirección": "RESIDENCIAL CARLOMAGNO, CASA 12 B, DEL MALL DON PANCHO 700 ESTE 600 NORTE CORONADO                                                                                           ",
          "Población": "SAN ANTONIO CORONADO                         ",
          "Nombre de afiliado": "LORIA ZUÑIGA VIANNEY          ",
          "Código de afiliado": "10290",
          "Teléfono": "22852413",
          "Celular": "89941717",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-16",
          "Peso": "0.57",
          "Estado": "Entregado",
          "Dirección": "SAN JOSE GUADALUPE DE LA MUSMANI MATA PLATANO DEL CARMEN DE GUADALUPE 100 ESTE 50 NORTE Y 100 ESTE CASA COLR AMARILLA ESQUINERA                                              ",
          "Población": "GUADALUPE EL CARMEN                          ",
          "Nombre de afiliado": "OBANDO BRAVO YAMILETH         ",
          "Código de afiliado": "15469",
          "Teléfono": "22851964",
          "Celular": "84581242",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-17",
          "Peso": "0.57",
          "Estado": "Entregado",
          "Dirección": "URBANIZACION CARLOS MARIA JIMENEZ 1ªENTRADA A MANO IZQUIERDA DEL CENTRO COMERCIAL DEL SUR DEAGONAL A LA ANTIGUA BOMBA Y 1ª CASA MANO DERECHA COLOR VERTE PORT BLAN Nº 16 SAN ",
          "Población": "SAN JOSE                                     ",
          "Nombre de afiliado": "RODRIGUEZ SEQUEIRA BLANCA VANE",
          "Código de afiliado": "23589",
          "Teléfono": "22261419",
          "Celular": "83600386",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-18",
          "Peso": "0.41",
          "Estado": "Entregado",
          "Dirección": "ALAHUELA TACARES  DE GRECIA DEL CENTRO DE AMIGOS 1 KM AL NORTE  CALLE CERDAS CASA A MANO DERECHA DE COLOR BLANCO                                                             ",
          "Población": "ALAHUELA                                     ",
          "Nombre de afiliado": "MENA MENDEZ NIDIA             ",
          "Código de afiliado": "27616",
          "Teléfono": "",
          "Celular": "83680178",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-19",
          "Peso": "0.56",
          "Estado": "Entregado",
          "Dirección": "SAN VICENTE DE MORAVIA RES. SAINT CLARE DE POLLOS TUTO 3 CUADRAS ESTE Y 50 SUR CASA 5G MURO CAFE VERJAS BLANCAS                                                              ",
          "Población": "SAN VICENTE DE MORAVIA                       ",
          "Nombre de afiliado": "FLORES OVARES FRANCINI        ",
          "Código de afiliado": "24107",
          "Teléfono": "22851330",
          "Celular": "89393292",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-20",
          "Peso": "2.43",
          "Estado": "Entregado",
          "Dirección": "APARTADO POSTAL, 630-2200, CORONADO SAN ISIDRO SECURSAL SAN ISIDRO VASQUEZ DE CORONADO                                                                                       ",
          "Población": "SAN ISIDRO                                   ",
          "Nombre de afiliado": "RODRIGUEZ TROYO MARCELA       ",
          "Código de afiliado": "27712",
          "Teléfono": "22299220",
          "Celular": "88341330",
          "Detalles": "El estado cambió a Entregado por fabian( Tuesday Sep 10 , 2019 05:31:16 PM )\nPersona que recibe: \"Otros\" (oficinas de correos CORONADO) Detalle:CP000002134BD\n"
        }
      },
      {
        "node": {
          "ID Paquete": "53103-21",
          "Peso": "1.40",
          "Estado": "Entregado",
          "Dirección": "DEL ANTIGUO PACO 375 SE CONDOMINIO CONDADO DEL COUNTRY SPORT 105B GUACHIPELÍN ESCAZÚ DEJAR CON EL GUARDA.-                                                                   ",
          "Población": "GUACHIPELÍN ESCAZÚ                           ",
          "Nombre de afiliado": "OLLÉ TORRENS JULIETA          ",
          "Código de afiliado": "759",
          "Teléfono": "22899713",
          "Celular": "83828150",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-23",
          "Peso": "2.65",
          "Estado": "Entregado",
          "Dirección": "SAN JUAN DE TIBAS DE LA ANTIGUA GUARDIA RURAL 50 MTS SUR Y 50 MTS OESTE SEGUNDA CASA A MANO DERECHA VERJAS BLANCAS                                                           ",
          "Población": "SAN JUAN DE TIBAS                            ",
          "Nombre de afiliado": "PEREZ DESANTI MARIA DE LOS ANG",
          "Código de afiliado": "23845",
          "Teléfono": "22354724",
          "Celular": "85583229",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-24",
          "Peso": "2.90",
          "Estado": "Entregado",
          "Dirección": "CASA DE FIGUERES 300 NORTE URB. CATALUÑA 400 ESTE 75 SUR PENULTIMA CASA COLOR AMARILLA CURRIDABAT                                                                            ",
          "Población": "CURRIDABAT                                   ",
          "Nombre de afiliado": "MORALES VILLALOBOS LILIANA    ",
          "Código de afiliado": "936",
          "Teléfono": "22722794",
          "Celular": "88379053",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-26",
          "Peso": "0.74",
          "Estado": "Entregado",
          "Dirección": "SABANILLA. MONTES DE OCA URBANIZACION LUISIANA  CASA B-9 FRENTE A LA CRUZ ROJA DE SABANILLA DE LA CA                                                                         ",
          "Población": "SABANILLA                                    ",
          "Nombre de afiliado": "QUIROS RUIZ MARIA ELENA       ",
          "Código de afiliado": "1462",
          "Teléfono": "22809718",
          "Celular": "87223019",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-27",
          "Peso": "0.73",
          "Estado": "Entregado",
          "Dirección": "DEL CRISTO DE SABANILLA 800SUROESTE  FRET URB TULIN CASA COLOR ARENA  VERJAS VERJAS VERDE OLIVO CON JARDIN GRANDE AL FRENTE, FRENTE A LA PÀRADA DE BUSES                     ",
          "Población": "SABANILLA                                    ",
          "Nombre de afiliado": "LEON SOTO VIRGINIA MARIA      ",
          "Código de afiliado": "674",
          "Teléfono": "22735794",
          "Celular": "88826705",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-28",
          "Peso": "2.74",
          "Estado": "Entregado",
          "Dirección": "CEDROS DE CORONADO DEL ABASTECEDOR SUPER CAN 100 NORTE 300 ESTE CASA PORTON VERDE M/IZQ                                                                                      ",
          "Población": "CORONADO CEDROS                              ",
          "Nombre de afiliado": "FONSECA MURILLO MERCEDES      ",
          "Código de afiliado": "3531",
          "Teléfono": "22295641",
          "Celular": "83456933",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-30",
          "Peso": "0.40",
          "Estado": "Entregado",
          "Dirección": "SAN RAFAEL DE MONTES DE OCA CONDOMINIO ANDROMEDA Nº 47 200 ANTES DE LLEGAR A LA ESCUELA DE SAN RAFAEL A MANO DERECHA 100 MTS SUR HAY UNA CASETA DONDE ESTA EL RESIDENCIAL    ",
          "Población": "SAN JOSE SAN RAFAEL DE MONTES                ",
          "Nombre de afiliado": "MUÑOZ CANALES SONIA           ",
          "Código de afiliado": "2767",
          "Teléfono": "",
          "Celular": "83095562",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-31",
          "Peso": "0.75",
          "Estado": "Entregado",
          "Dirección": "PAVAS, ROHOMOSER, AL FINAL DEL BOULER, 100 SUR Y 75 AL ESTE, CASA DECIMA A MANO IZQUIERDA MURO COLOR ARENA REJAS NEGRAS ( CALLE AL FRENTE DEL HOTEL ROLAN) PAVAS             ",
          "Población": "PAVAS                                        ",
          "Nombre de afiliado": "ALVAREZ GOMES ELIZABETH       ",
          "Código de afiliado": "19862",
          "Teléfono": "22321991",
          "Celular": "88642135",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-32",
          "Peso": "1.77",
          "Estado": "Entregado",
          "Dirección": "DEJAR EN OFICINAS DE IMPORTADORA DEL FUTURO                                                                                                                                  ",
          "Población": "**SAN PEDRO OFICINAS                         ",
          "Nombre de afiliado": "MARTINEZ VILLARREAL CARMEN    ",
          "Código de afiliado": "26084",
          "Teléfono": "",
          "Celular": "88210937",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-33",
          "Peso": "0.48",
          "Estado": "Entregado",
          "Dirección": "EN CARTAGO CENTRO CALLE 5 ENTRE AVENIDA 9 Y 11, O DEL INS 25 MTS NORTE EN CARTAGO CASA COLOR VERDE CON BEIGE, A MANO DERECHA ES LA SEGUNDA CASA A LA PAR  DE CASA ESQUINERA D",
          "Población": "CARTAGO CENTRO                               ",
          "Nombre de afiliado": "ESQUIVEL SOLERA LIDIA MARÍA   ",
          "Código de afiliado": "13528",
          "Teléfono": "25513807",
          "Celular": "83247184",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-34",
          "Peso": "0.47",
          "Estado": "Entregado",
          "Dirección": "SABANA OESTE DE CEMACO 100 ESTE 125 SUR APARTAMENTO #5 MANO IZQUIERDA TOCAR TIMBRE #5                                                                                        ",
          "Población": "SAN JOSE , SABANA OESTE                      ",
          "Nombre de afiliado": "DESANTI HURTADO CARMEN        ",
          "Código de afiliado": "12033",
          "Teléfono": "22964815",
          "Celular": "83027207",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-35",
          "Peso": "0.32",
          "Estado": "Entregado",
          "Dirección": "HEREDIA SANTO DOMINGO SAN VICENTE CENTRO COMERCIAL PLAZA QUIZARCO, ESTETICA SAKURO SANTO DOMINGO - SANTO DOMINGO                                                             ",
          "Población": "SANTO DOMINGO - SANTO DOMINGO                ",
          "Nombre de afiliado": "ESCOBAR GAVIRIA JANETH        ",
          "Código de afiliado": "27130",
          "Teléfono": "22494381",
          "Celular": "89349922",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-36",
          "Peso": "0.63",
          "Estado": "Entregado",
          "Dirección": "DEL PALI DEL CENTRO, 50 AL OESTE, CASA MANO DERECHA, DE 2 PISOS, COLOR AMARILLA, PORTONES CAFE STA ANA                                                                       ",
          "Población": "STA ANA                                      ",
          "Nombre de afiliado": "GONZALEZ CASTRO SUGEY         ",
          "Código de afiliado": "24184",
          "Teléfono": "25820492",
          "Celular": "87128427",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-37",
          "Peso": "1.90",
          "Estado": "Entregado",
          "Dirección": "SAN FRANCISCO DE HEREDIA CONDOMINIO SAN AGUSTIN CASA NUMERO 38C COLOR BEIGE HEREDIA                                                                                          ",
          "Población": "HEREDIA                                      ",
          "Nombre de afiliado": "FIORAVANTI GUTIERREZ ROXANA   ",
          "Código de afiliado": "22428",
          "Teléfono": "22631455",
          "Celular": "89126140",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-38",
          "Peso": "0.49",
          "Estado": "Entregado",
          "Dirección": "100 OESTE DEL PARQUE  SANTA ROSA CALLE AL COLEGIO DE SR. CONTIGUO A VETERINARIA                                                                                              ",
          "Población": "**SAN CARLOS. POCOSOL                        ",
          "Nombre de afiliado": "ELIZONDO DURAN XINIA MARIA    ",
          "Código de afiliado": "14018",
          "Teléfono": "85798644",
          "Celular": "61972019",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-39",
          "Peso": "2.56",
          "Estado": "Entregado",
          "Dirección": "URBANIZACION COOCIQUE, DE LA ENTRADA PRINCIPAL, 200 MTS ESTE Y 100 MTS AL SURY 75 AL ESTE CASA DE DOS PLANTAS VERJAS CAFE SAN CARLOS - QUESADA                               ",
          "Población": "SAN CARLOS - QUESADA                         ",
          "Nombre de afiliado": "PETERS SOLORZANO ILONKA       ",
          "Código de afiliado": "26800",
          "Teléfono": "24601134",
          "Celular": "83849389",
          "Detalles": "El estado cambió a Entregado por fabian( Friday Sep 13 , 2019 04:17:38 PM )\nPersona que recibe: \"Otros\" (CORREOS DE COSTA RICA) Detalle:Recibido por: Fanny Días   11/09/2019 01:38:04 p.m.\tENTREGADO\tCENTRO DE CARTEROS CIUDAD QUESADA.Telf: 24612249\nEl estado cambió a Rural por fabian( Tuesday Sep 10 , 2019 05:08:41 PM ) Detalle:CORREOS DE COSTA RICA GUIA WS008776016CR\n"
        }
      },
      {
        "node": {
          "ID Paquete": "53103-41",
          "Peso": "0.91",
          "Estado": "Entregado",
          "Dirección": "BARRIO MARIA AUXILIADORA DE SIQUIRRES 50 AL SUR DEL SALON COMUNAL SALON DE BELLEZA CHUBY ANTIGUO INVU VIEJO                                                                  ",
          "Población": "SIQUIRRES                                    ",
          "Nombre de afiliado": "VARGAS MATAMOROS FLORIBETH    ",
          "Código de afiliado": "12718",
          "Teléfono": "27688500",
          "Celular": "89183141",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-42",
          "Peso": "0.50",
          "Estado": "Entregado",
          "Dirección": "SUPER SAN MARTIN FRENTE A LA ESCUELA CAMPO KENNEDY EN LA PARTE DE OFICINAS PARTE ALTA SI NO  SE ENCUENTRA DESTINATARIO DEJAR CON CARLOS VINDAS CERDA                         ",
          "Población": "**POCOSI                                     ",
          "Nombre de afiliado": "GONZALEZ CASTILLO CAROL       ",
          "Código de afiliado": "24782",
          "Teléfono": "27675334",
          "Celular": "83092375",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-43",
          "Peso": "2.31",
          "Estado": "Entregado",
          "Dirección": "DE LA ENTRADA PRINCIPAL DE LAS FINCA AGRÍCOLAS BANANERAS, CUARTA CASA A MANO DERECHA, COLOR BLANCO. CARIARI DE GUAPILES                                                      ",
          "Población": "CARIARI DE GUAPILES                          ",
          "Nombre de afiliado": "ELIZONDO ARGUELLO SHIRLEY     ",
          "Código de afiliado": "7459",
          "Teléfono": "27672158",
          "Celular": "84119163",
          "Detalles": "El estado cambió a Entregado por fabian( Friday Sep 13 , 2019 04:00:33 PM )\nPersona que recibe: \"Otros\" (CORREOS DE COSTA RICA) Detalle:11/09/2019 11:28:34 a.m.\tENTREGADO\nEl estado cambió a Rural por fabian( Tuesday Sep 10 , 2019 04:43:32 PM ) Detalle:CORREOS DE COSTA RICA GUIA WS008773482CR\n"
        }
      },
      {
        "node": {
          "ID Paquete": "53103-44",
          "Peso": "1.89",
          "Estado": "Entregado",
          "Dirección": "HORQUETAS DE SARAPIQUI 150 MTS ESTE DE LA ESCUELA DE LA COLONIA VILLALOBOS  SEGUNDA CASA MANO IZQUIERDA PORTON RUSTICO HORQUETAS DE SARAPIQUI HEREDIA                        ",
          "Población": "HORQUETAS DE SARAPIQUI                       ",
          "Nombre de afiliado": "CUEVAS COREA JOSE FELIX       ",
          "Código de afiliado": "23833",
          "Teléfono": "27643271",
          "Celular": "",
          "Detalles": "El estado cambió a Entregado por fabian( Friday Sep 13 , 2019 04:08:43 PM )\nPersona que recibe: \"Otros\" (CORREOS DE COSTA RICA) Detalle:Recibido por: Martha Gonzalez Campos    13/09/2019 01:58:38 p.m.\tENTREGADO\tSUCURSAL RIO FRIO\nEl estado cambió a Rural por fabian( Tuesday Sep 10 , 2019 04:57:19 PM ) Detalle:CORREOS DE COSTA RICA GUIA WS008775452CR\n"
        }
      },
      {
        "node": {
          "ID Paquete": "53103-45",
          "Peso": "0.90",
          "Estado": "Entregado",
          "Dirección": "PUERTO VIEJO DE SARAPIQUI DIAGONAL A LA CLINICA DE CCSS, CASA BLANCA JUNTO A SALA DE BELLEZA LAURA SARAPIQUI - PUERTO VIEJO                                                  ",
          "Población": "SARAPIQUI - PUERTO VIEJO                     ",
          "Nombre de afiliado": "MEZA ALCOCER MARITZA          ",
          "Código de afiliado": "28773",
          "Teléfono": "87232021",
          "Celular": "87246608",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-46",
          "Peso": "0.54",
          "Estado": "Ausente",
          "Dirección": "100 MTS NORTE Y 75 MTS OESTE DE LA DELEGACION DE SAN MIGUEL DE DESAMPARADOS CASA CON TAPIA DE LADRILLO COLOR TERRACOTA BARRIO GIRASOL                                        ",
          "Población": "SAN MIGUEL DE DESAMPARADOS                   ",
          "Nombre de afiliado": "MADRIZ LIZANO MELIDA MIREYA   ",
          "Código de afiliado": "22992",
          "Teléfono": "25100925",
          "Celular": "89103795",
          "Detalles": "El estado cambió a Ausente por fabian( Wednesday Sep 11 , 2019 09:37:05 AM ) Detalle:sE VISITO Y NO ESTA EN HABITACION, VIA TELEFONICA INDICO QUE ESTABA EN CITA MEDICA Y NO SE SABE A QUE HORA RETORNA\n"
        }
      },
      {
        "node": {
          "ID Paquete": "53103-47",
          "Peso": "0.55",
          "Estado": "Entregado",
          "Dirección": "LAGUNILLA HEREDIAS CONTIGUO ESTACION  DE RITEVE LA EMPRESA SE LLAMA ALCO  PREGUNTAR POR GRACE HIDALGO                                                                        ",
          "Población": "**HEREDIA LAGUNILLA                          ",
          "Nombre de afiliado": "FALLAS RODRIGUEZ MARGARITA    ",
          "Código de afiliado": "23905",
          "Teléfono": "22598071",
          "Celular": "83842365",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-62",
          "Peso": "0.34",
          "Estado": "Entregado",
          "Dirección": "CONDOMINIO LAS AMERICAS SEGUNDA PLANTA LOCAL C1-20  SALA BELLEZA PROFESIONAL SAN JOSE CENTRO                                                                                 ",
          "Población": "SAN JOSE CENTRO                              ",
          "Nombre de afiliado": "MESEN VASQUEZ BLANCA          ",
          "Código de afiliado": "16142",
          "Teléfono": "22238596",
          "Celular": "83167738",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-63",
          "Peso": "0.72",
          "Estado": "Entregado",
          "Dirección": "GUANACASTE GUAYABO DE BAGACES , COLONIA B DEL ICE , CASA 329214 COLOR BLANCA BAGACES GUANACASTE                                                                              ",
          "Población": "BAGACES GUANACASTE                           ",
          "Nombre de afiliado": "RAMIREZ ALVARADO XINIA        ",
          "Código de afiliado": "26255",
          "Teléfono": "",
          "Celular": "85877596",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-65",
          "Peso": "1.14",
          "Estado": "Entregado",
          "Dirección": "ALAJUELA, DE PINTURAS SUR LA AGONIA 100 ESTE 50 SUR ENTRADA CON PORTON NEGRO M/D JUNTO A CORTINA METALICA  GRANDE                                                            ",
          "Población": "ALAJUELA CENTRO                              ",
          "Nombre de afiliado": "RIVERA RODRIGUEZ ESTELA MARIA ",
          "Código de afiliado": "1892",
          "Teléfono": "",
          "Celular": "86524399",
          "Detalles": "El estado cambió a Entregado por fabian( Wednesday Sep 11 , 2019 09:37:48 AM )\nPersona que recibe: \"Titular\" Detalle:\n"
        }
      },
      {
        "node": {
          "ID Paquete": "53103-69",
          "Peso": "0.67",
          "Estado": "Entregado",
          "Dirección": "EL COYOL DE ALAJUELA URB DOÑA BERTILIA DE LA FARMACIA STA CECILIA 300 NORTE MD CASA 3K PORTON CAFE                                                                           ",
          "Población": "**                                           ",
          "Nombre de afiliado": "BRAVO RODRIGUEZ MARIA         ",
          "Código de afiliado": "12556",
          "Teléfono": "24335391",
          "Celular": "70115480",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-82",
          "Peso": "0.34",
          "Estado": "Entregado",
          "Dirección": "100 MTS ESTE 150 NORTE IGLESIA CATOLICA EL COYOL,CALLE LA FLOR,PORTON CAFE,TAPIA AMARILLA CON ROJO A LA PAR DEL GYM ALAJUELA - SAN JOSE                                      ",
          "Población": "ALAJUELA - SAN JOSE                          ",
          "Nombre de afiliado": "CALVO HERNANDEZ MARIA CATALINA",
          "Código de afiliado": "30333",
          "Teléfono": "24332147",
          "Celular": "88475846",
          "Detalles": "El estado cambió a Ruta por fabian( Wednesday Sep 11 , 2019 09:43:46 AM ) Detalle:\n"
        }
      },
      {
        "node": {
          "ID Paquete": "53103-88",
          "Peso": "0.99",
          "Estado": "Entregado",
          "Dirección": "SAN RAMON ALAJUELA EL LLAMARON 50 MTS. OESTE DE VERDULERIA CASA VERDE CLARA MANO DCHA.                                                                                       ",
          "Población": "SAN JUAN                                     ",
          "Nombre de afiliado": "ARREDONDO ARAYA FLORIBETH     ",
          "Código de afiliado": "110",
          "Teléfono": "",
          "Celular": "83149164",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-91",
          "Peso": "1.82",
          "Estado": "Entregado",
          "Dirección": "SAN RAMON DE ALAJUELA COOPE SAN RAMON RL AL COSTADO SUR DE LA PARROQUIA BUSCAR A MARIA MAYELA CUBERO PORRAS Y SINO ESTA DEJAR EN RECEPCION                                   ",
          "Población": "SAN RAMON                                    ",
          "Nombre de afiliado": "VILLALOBOS CUBERO SILVIA ELENA",
          "Código de afiliado": "20815",
          "Teléfono": "86889955",
          "Celular": "83048194",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-100",
          "Peso": "0.89",
          "Estado": "Entregado",
          "Dirección": "HEREDIA CENTRO, DE LA IGLESIA DE LOS ANGELES 100 SUR SALON DE BELLEZA INGRID, ESQUINERO HEREDIA - HEREDIA                                                                    ",
          "Población": "HEREDIA - HEREDIA                            ",
          "Nombre de afiliado": "TORRES ORTEGA ESTHER          ",
          "Código de afiliado": "27456",
          "Teléfono": "40303431",
          "Celular": "88994981",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-104",
          "Peso": "1.23",
          "Estado": "Entregado",
          "Dirección": "GUADALUPE DEL BNCR 100NORTE 100 ESTE 100NORTE 50 ESTE CASA MANO DERECHA VERJA VERDE CASA VERDE CLARO GOICOECHEA - GUADALUPE                                                  ",
          "Población": "GOICOECHEA - GUADALUPE                       ",
          "Nombre de afiliado": "LOPEZ MARIN MARIA ANGELES     ",
          "Código de afiliado": "30265",
          "Teléfono": "",
          "Celular": "86149145",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-108",
          "Peso": "0.73",
          "Estado": "Entregado",
          "Dirección": "DE LA PLAZA DE DEPORTES DE CALLEBLANCOS 100 ESTE 75 SUR CASA MANO DERECHA COLOR TERRACOTA A LA PAR DE LA PULPERIA GOICOECHEA - CALLE BLANCOS                                 ",
          "Población": "GOICOECHEA - CALLE BLANCOS                   ",
          "Nombre de afiliado": "JIMENEZ PEREZ DORA LUZ        ",
          "Código de afiliado": "32129",
          "Teléfono": "",
          "Celular": "71899016",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-109",
          "Peso": "0.92",
          "Estado": "Entregado",
          "Dirección": "IMPORTADORA DEL FUTURO OFICINAS                                                                                                                                              ",
          "Población": "**SAN JOSE, BARRIO LA CALIFORN               ",
          "Nombre de afiliado": "TIJERINO BOLANDI JOSE EDUARDO ",
          "Código de afiliado": "18981",
          "Teléfono": "72742768",
          "Celular": "85099785",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-122",
          "Peso": "1.45",
          "Estado": "Entregado",
          "Dirección": "DEJAR PEDIDO EN IMPORTADORA DEL FUTURO                                                                                                                                       ",
          "Población": "**                                           ",
          "Nombre de afiliado": "BORBON GARITA KARLA           ",
          "Código de afiliado": "28794",
          "Teléfono": "84085201",
          "Celular": "62494805",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-128",
          "Peso": "0.69",
          "Estado": "Entregado",
          "Dirección": "BARRIO MERCEDES 600 SURESTE DEL ABASTECEDOR LOS PINOS  CASA COLOR ROSADA M/D DOS PLANTAS , COTO BRUS PUNTARENAS                                                              ",
          "Población": "COTO BRUS SABALITO, PUNTARENAS               ",
          "Nombre de afiliado": "FONSECA CAMPOS KEMBLY         ",
          "Código de afiliado": "29568",
          "Teléfono": "",
          "Celular": "88902013",
          "Detalles": "El estado cambió a Entregado por fabian( Friday Sep 13 , 2019 04:23:26 PM )\nPersona que recibe: \"Otros\" (CORREOS DE COSTA RICA) Detalle:Recibido por: MARVIN CORRALES VEGA   13/09/2019 01:04:00 p.m.\tENTREGADO\tSUCURSAL SAN VITO\nEl estado cambió a Rural por fabian( Tuesday Sep 10 , 2019 05:17:57 PM ) Detalle:CORREOS DE COSTA RICA GUIA WS008776815CR\nEl estado cambió a Rural por fabian( Tuesday Sep 10 , 2019 05:17:52 PM ) Detalle:CORREOS DE COSTA RICA GUIA WS008776815CR\n"
        }
      },
      {
        "node": {
          "ID Paquete": "53103-138",
          "Peso": "1.30",
          "Estado": "Entregado",
          "Dirección": "HATILLO#3 FRENTE AL CENTRO COMERCIAL TOPACIO LOCAL SALA DE BELLEZA FRANCIS LOS HATILLOS                                                                                      ",
          "Población": "HATILLO 3                                    ",
          "Nombre de afiliado": "CASTILLO VARGAS FRANCIS       ",
          "Código de afiliado": "12444",
          "Teléfono": "",
          "Celular": "88869087",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-157",
          "Peso": "0.53",
          "Estado": "Entregado",
          "Dirección": "DE LA UNIDAD SANITARIA DE 3 RIOS100 METRSO SUR 25 ESTE                                                                                                                       ",
          "Población": "**                                           ",
          "Nombre de afiliado": "GOMEZ ALVAREZ MARITZA         ",
          "Código de afiliado": "16063",
          "Teléfono": "22780413",
          "Celular": "88142341",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-162",
          "Peso": "1.31",
          "Estado": "Entregado",
          "Dirección": "JACO 600 NORTE DE FERRETERIA GARABITO CASA COLOR CREMA PORTON CAFE JACO                                                                                                      ",
          "Población": "JACO                                         ",
          "Nombre de afiliado": "CARVAJAL CARVAJAL MARJORIE    ",
          "Código de afiliado": "22815",
          "Teléfono": "",
          "Celular": "60148233",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-164",
          "Peso": "0.92",
          "Estado": "Entregado",
          "Dirección": "CARRIZAL   PUNTARENAS  DE YIENDA SAYFER 50 NORTE Y 15 AL OESTE CASA COLOR ROSADA A MANO DERECHA CARRIZAL DE PUNTARENAS CARRIZAL                                              ",
          "Población": "CARRIZAL  PUNTARENAS                         ",
          "Nombre de afiliado": "ARAGON ROSALES PAMELA         ",
          "Código de afiliado": "17362",
          "Teléfono": "26642950",
          "Celular": "87416794",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-165",
          "Peso": "1.32",
          "Estado": "Entregado",
          "Dirección": "CURRIDABAT TIRRASES 300 NORTE 200 ESTE 50 NORTE DEL SALON COMUNAL DE  TIRRASES  ( URBANIZACION BERRUIBA)  CASA MI  2 CASA COLUMNA DE LADRILLO                                ",
          "Población": "CURRIDABAT TIRRASES                          ",
          "Nombre de afiliado": "ARAYA MENDEZ XINIA            ",
          "Código de afiliado": "23460",
          "Teléfono": "22765155",
          "Celular": "83187571",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-166",
          "Peso": "0.54",
          "Estado": "Entregado",
          "Dirección": "NICOYA FRENTE AL ALMACEN RODRIGO CHAN NICOYA                                                                                                                                 ",
          "Población": "NICOYA                                       ",
          "Nombre de afiliado": "PALMA VALLEJOS MIREYA         ",
          "Código de afiliado": "3626",
          "Teléfono": "26855056",
          "Celular": "",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-1",
          "Peso": "0.45",
          "Estado": "Entregado",
          "Dirección": "TILARAN GTE 200 MTR AL SUR Y 25 OESTE DE LA CATEDRAL CASA COLOR MARRON A MANO IZQUIERDA OFICINA DE VIAJES COLON                                                              ",
          "Población": "TILARAN                                      ",
          "Nombre de afiliado": "MARTINEZ BADILLA MARICELA     ",
          "Código de afiliado": "8660",
          "Teléfono": "26955108",
          "Celular": "83561598",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-2",
          "Peso": "0.82",
          "Estado": "Entregado",
          "Dirección": "DEL PLAY DE LOTO 3 100 NORTE Y 25 ESTE SEGUNDA CASA ESQUINERA A MANO DERECHA VERJAS NEGRAS                                                                                   ",
          "Población": "**SAN JERONIMO DE DESAMPARADOS               ",
          "Nombre de afiliado": "VARGAS BARRANTES ELIZABETH    ",
          "Código de afiliado": "131",
          "Teléfono": "22506171",
          "Celular": "83016362",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-3",
          "Peso": "0.77",
          "Estado": "Entregado",
          "Dirección": "DEJAR EN SUCURSAL DE CORREOS DE SAN FRANCISCO  DE  DOS RIOS.                                                                                                                 ",
          "Población": "**                                           ",
          "Nombre de afiliado": "MENA AMADOR MAIRA             ",
          "Código de afiliado": "10090",
          "Teléfono": "22501551",
          "Celular": "87046715",
          "Detalles": "El estado cambió a Entregado por fabian( Tuesday Sep 10 , 2019 05:32:12 PM )\nPersona que recibe: \"Otros\" (oficinas de correos SAN FRANCISCO DE DOS RIOS) Detalle:CP000000439BG\n"
        }
      },
      {
        "node": {
          "ID Paquete": "53103-4",
          "Peso": "0.52",
          "Estado": "Entregado",
          "Dirección": "PLAZA CRISTAL FRENTE AL BANCO DE COSTA RICA LOCAL  12 Y 13  A  LA PAR DE PORT TOPORT CURRIDABAT                                                                              ",
          "Población": "**                                           ",
          "Nombre de afiliado": "VADO CRUZ MARÍA DANELIA       ",
          "Código de afiliado": "28115",
          "Teléfono": "22724857",
          "Celular": "86471736",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-5",
          "Peso": "0.38",
          "Estado": "Entregado",
          "Dirección": "GUATUSO DE PATARRA DE DESAMPARADOS 200 MTS  OESTE DE LA TERMINAL DE BUSES PENULTIMA CASA A MANO DERECHA PORTON ROJO  ,                                                       ",
          "Población": "GUATUSO DESAMP, DESAMPARADOS                 ",
          "Nombre de afiliado": "DUARTE MARTINEZ LYLLIAM DEL CA",
          "Código de afiliado": "1483",
          "Teléfono": "",
          "Celular": "70867487",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-6",
          "Peso": "0.38",
          "Estado": "Entregado",
          "Dirección": "SAN DIEGO LA UNION, 800 SUR DE PLAZA DE DEPORTES  SOBRE CALLE MESEN URBANIZACION RUBI  ENTREGAR EN COFARMA                                                                   ",
          "Población": "CARTAGO- LA UNIÓN. SAN DIEGO                 ",
          "Nombre de afiliado": "ROJAS GAMBOA ANA MARCELA      ",
          "Código de afiliado": "8277",
          "Teléfono": "88217732",
          "Celular": "83393122",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-8",
          "Peso": "2.17",
          "Estado": "Entregado",
          "Dirección": "SAN FRANCISCO 2 RIOS, DE LA CASETA  DEL GUARDA EN RESIDENCIAL EL BOSQUE, 75 MTS. NORTE, SOBRE CALLE BOULEVARD, FRENTE A PARADAS DE TAXI CASA NO. 419 TERRACOTA, REJAS BLANCAS",
          "Población": "**SAN FRANCISCO DOS RIOS                     ",
          "Nombre de afiliado": "LEIVA BARRANTES NOILY         ",
          "Código de afiliado": "27816",
          "Teléfono": "22507420",
          "Celular": "83437701",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-10",
          "Peso": "3.80",
          "Estado": "Entregado",
          "Dirección": "JARDINES DE TIBAS CASA N# 17 B DE LAS BODEGAS DEL PERIMERCADO 125 MTS OESTE MANO DERECHA CASA DE DOS PLANTAS                                                                 ",
          "Población": "**SAN JOSE , TIBAS                           ",
          "Nombre de afiliado": "FERNANDEZ PEREIRA HUGO        ",
          "Código de afiliado": "1365",
          "Teléfono": "22404991",
          "Celular": "88238087",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-11",
          "Peso": "3.51",
          "Estado": "Entregado",
          "Dirección": "JARDINES DE BODEGAS DE PERIMERCADO 125 OESTE CASA 17 B TIBAS                                                                                                                 ",
          "Población": "TIBAS                                        ",
          "Nombre de afiliado": "PEREIRA MORA ELIA             ",
          "Código de afiliado": "2018",
          "Teléfono": "22971097",
          "Celular": "",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-22",
          "Peso": "1.14",
          "Estado": "Entregado",
          "Dirección": "DE LA IGLESIA CATOLICA DE SAN PEDRO DE  SANTA BARABARA HEREDIA , 300 E, 100 N, 50 O, CASA COLOR CREMA, FRT A LA DISTRIBUIDORA GATO, PORTON TERRACOTA                         ",
          "Población": "HEREDIA SAN PEDRO DE SANTABARBARA            ",
          "Nombre de afiliado": "ARIAS HERRERA ANA LIA         ",
          "Código de afiliado": "19614",
          "Teléfono": "22698165",
          "Celular": "60841376",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-25",
          "Peso": "0.67",
          "Estado": "Entregado",
          "Dirección": "DE LA BONBA SHELL 400 NORTE 100 ESTE CASA MANO DERECHA COLOR CAFE CLARO VERJAS CAFE OSCURO MOmTELIMAR GUADALUPE GUADALUPE                                                    ",
          "Población": "CALLE  BLANCOS                               ",
          "Nombre de afiliado": "MARIM ARCE MARIA EUGENIA      ",
          "Código de afiliado": "7787",
          "Teléfono": "22365415",
          "Celular": "88921575",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-29",
          "Peso": "5.20",
          "Estado": "Entregado",
          "Dirección": "ALAJUELA CENTRO AVE 1ª CALLES 13 Y 15, DE LA FARMACIA CHARPENTIER 50 E CASA MANO DER VERDE REJAS NEGRAS ALAJUELA CENTRO                                                      ",
          "Población": "ALAJUELA                                     ",
          "Nombre de afiliado": "ROJAS SOLANO ANA MARIA        ",
          "Código de afiliado": "1254",
          "Teléfono": "",
          "Celular": "83741458",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-48",
          "Peso": "1.72",
          "Estado": "Entregado",
          "Dirección": "LIMON, BARRIO EL TRIUNFO FRENTE A CAJA DE ANDE CASA 150-B MANO DERECHA BLANCA CON VERJAS NEGRAS DE ARCOS  LIMON                                                              ",
          "Población": "LIMON                                        ",
          "Nombre de afiliado": "CAMACHO CORRALES MARITZA MAYEL",
          "Código de afiliado": "11157",
          "Teléfono": "",
          "Celular": "88489827",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-49",
          "Peso": "2.06",
          "Estado": "Entregado",
          "Dirección": "DEJAR EN SUCURSAL DE GUACIMO                                                                                                                                                 ",
          "Población": "**                                           ",
          "Nombre de afiliado": "CHAVES TREJOS REINA IRIS      ",
          "Código de afiliado": "10307",
          "Teléfono": "27165601",
          "Celular": "87553839",
          "Detalles": "El estado cambió a Entregado por fabian( Friday Sep 13 , 2019 04:02:06 PM )\nPersona que recibe: \"Otros\" (CORREOS DE COSTA RICA) Detalle:Recibido por: REINA IRIS CHAVES TREJOS\nEl estado cambió a Rural por fabian( Tuesday Sep 10 , 2019 04:49:12 PM ) Detalle:CORREOS DE COSTA RICA GUIA WS008774488CR\n"
        }
      },
      {
        "node": {
          "ID Paquete": "53103-50",
          "Peso": "0.47",
          "Estado": "Entregado",
          "Dirección": "HORQUETAS DE SARAPIQUI 25 MTS NORTE DEL CEN LADO IZQUIERDO CASA COLOR CORAL COSTADO OESTE DE LA ESCUELA DE BUENOS AIRES RIO FRIO                                             ",
          "Población": "RIO FRIO                                     ",
          "Nombre de afiliado": "CHAVARRIA ROJAS SINAI         ",
          "Código de afiliado": "18078",
          "Teléfono": "",
          "Celular": "87126064",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-51",
          "Peso": "1.61",
          "Estado": "Entregado",
          "Dirección": "DE LA IGESIA CATOLICA DE S ISIDRO, 400 M. NORTE ULTIMA ALAMEDA, CASA N.80 HEREDIA SAN ISIDRO                                                                                 ",
          "Población": "SAN ISIDRO                                   ",
          "Nombre de afiliado": "SANCHEZ FONSECA ANGIE GABRIELA",
          "Código de afiliado": "26253",
          "Teléfono": "",
          "Celular": "83361503",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-52",
          "Peso": "0.83",
          "Estado": "Entregado",
          "Dirección": "HEREDIA FLORES ,LLORENTE,  DEL  SUPER 2000, 700 MTS  S  75 O, Y 50 AL S CASA 27B , A MANO DERECHA CON PORTON BLANCO. SAN JOAQUIN DE FLORES - LLOREN                          ",
          "Población": "SAN JOAQUIN DE FLORES - LLOREN               ",
          "Nombre de afiliado": "RODRIGUEZ ARCE ANA VICTORIA   ",
          "Código de afiliado": "29221",
          "Teléfono": "89698869",
          "Celular": "63481760",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-53",
          "Peso": "1.69",
          "Estado": "Rural",
          "Dirección": "TURRIALBA- LA SUIZA  100 ESTE 50 NORTE DEL PALLI DE TURRIALBA CASA COLOR BLANCA                                                                                              ",
          "Población": "TURRIALBA CARTAGO                            ",
          "Nombre de afiliado": "ZAMORA JIMENEZ ALICIA         ",
          "Código de afiliado": "31086",
          "Teléfono": "",
          "Celular": "88220688",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-54",
          "Peso": "1.46",
          "Estado": "Entregado",
          "Dirección": "DEL SALON  PARROQUIAL DE SN JOAQUIN DE FLORES 10MTS ESTE 2DA CASA MANO DER.COLOR VERDE MUSGO CON JARDIN FTE.                                                                 ",
          "Población": "HEREDIA,  SAN JUAQUIN                        ",
          "Nombre de afiliado": "RODRIGUEZ CABALLERO ANA TERESA",
          "Código de afiliado": "17840",
          "Teléfono": "",
          "Celular": "88244457",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-55",
          "Peso": "0.62",
          "Estado": "Entregado",
          "Dirección": "GRECIA URBANIZACION  BELLA VISTA CONTIGO AL PLAY  CASA COLOR BEIGE CON PORTONES CAFE GRECIA                                                                                  ",
          "Población": "GRECIA                                       ",
          "Nombre de afiliado": "JIMENEZ MADRIGAL NIDIA MARIA  ",
          "Código de afiliado": "20036",
          "Teléfono": "24445660",
          "Celular": "86954047",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-56",
          "Peso": "1.26",
          "Estado": "Entregado",
          "Dirección": "GRECIA , ESCUELA SAN RAFAEL EN EL CEDRO. GRECIA - SAN JOSE                                                                                                                   ",
          "Población": "**GRECIA ALAJUELA. -EL CEDRO                 ",
          "Nombre de afiliado": "SALAS CASTRO ANA LUCIA        ",
          "Código de afiliado": "30466",
          "Teléfono": "",
          "Celular": "83206009",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-57",
          "Peso": "0.40",
          "Estado": "Entregado",
          "Dirección": "SAN PEDRO  POAS COSTADO  ESTE  DEL TEMPLO CATOLICO  CONTIGUO A TIENDA DE ROPA AMERICANA CASA  PORTON CAFE GRANDE                                                             ",
          "Población": "SAN PEDRO DE POAS                            ",
          "Nombre de afiliado": "ALFARO MORERA MARIA  ELENA    ",
          "Código de afiliado": "25617",
          "Teléfono": "24486474",
          "Celular": "87045414",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-58",
          "Peso": "1.87",
          "Estado": "Entregado",
          "Dirección": "ALAJUELA, NARANJO, 150 MTS ESTE DE LA BOMBA HERMANOS, CASA COLOR  ROSADO CON PORTON CAFE NARANJO                                                                             ",
          "Población": "NARANJO                                      ",
          "Nombre de afiliado": "ALFARO RODRIGUEZ KAREN        ",
          "Código de afiliado": "23822",
          "Teléfono": "24505538",
          "Celular": "83191379",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-59",
          "Peso": "1.12",
          "Estado": "Entregado",
          "Dirección": "SAN SEBASTIAN DEL BAR MAMBO 110 OESTE LOTE 7 A MANO DERECHA CASA DE MURO PEQUEÑO DE LAJA SIN VERJA CASA COLOR VERDE SAN SEBASTIAN                                            ",
          "Población": "SAN SEBASTIAN                                ",
          "Nombre de afiliado": "SANDOVAL AGUERO JEANNETTE     ",
          "Código de afiliado": "15699",
          "Teléfono": "22277424",
          "Celular": "",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-60",
          "Peso": "0.46",
          "Estado": "Entregado",
          "Dirección": "Pavas al final de boulevard 400 norte del supermercado roma 6 cuadras al oeste 100 norte penultima c                                                                         ",
          "Población": "PAVAS BOULEVARD                              ",
          "Nombre de afiliado": "MARIN AGUILAR ELIZABETH       ",
          "Código de afiliado": "11907",
          "Teléfono": "22966753",
          "Celular": "84829760",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-61",
          "Peso": "0.93",
          "Estado": "Entregado",
          "Dirección": "DESAMPARADOS CENTRO DE LA ESQUINA SUR OESTE DEL PARQUE 200 SUR 100OESTE 150 SUR CASA 342 MURO CELESTE VERJA GRIS CON COCHERA CENTRO                                          ",
          "Población": "CENTRO                                       ",
          "Nombre de afiliado": "FLORES GONZALEZ SARA          ",
          "Código de afiliado": "15425",
          "Teléfono": "22597041",
          "Celular": "",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-64",
          "Peso": "0.36",
          "Estado": "Entregado",
          "Dirección": "SAN JOSE ESCAZU , DE PLAZA MUNDO , 300 MTS NORESYE , CONDOMINIO LOS OLIVOS , NUMERO 4 , GUACHIPELIN , ESCAZU , DEJAR PEDIDO CON EL GUARDA DE SEGURIDAD ESCAZU - ESCAZU       ",
          "Población": "ESCAZU - ESCAZU                              ",
          "Nombre de afiliado": "ROMERO ZUÑIGA AGUEDA          ",
          "Código de afiliado": "26505",
          "Teléfono": "",
          "Celular": "88101247",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-67",
          "Peso": "2.51",
          "Estado": "Entregado",
          "Dirección": "DE LA ROTONDA DE LA GIRALDA EN SENTIDO DE OESTE A ESTE SEGUNDA ENTRADA 100MTS AL SUR FRENTE A CASA DE ALTO, CASA A MANO DERECHA NUMERO 49-C URBANIZACION LA GIRALDA          ",
          "Población": "ALAJUELA URB LA GIRALDA                      ",
          "Nombre de afiliado": "HERNANDEZ CASTILLO ANA CECILIA",
          "Código de afiliado": "12625",
          "Teléfono": "24434080",
          "Celular": "84409111",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-68",
          "Peso": "2.76",
          "Estado": "Entregado",
          "Dirección": "LA RIVERA DE BELEN , 100 OESTE Y 50 SUR DEL CEMENTERIO DE LA RIVERA DE BELEN , CASA COLOR BEIGE  PORTON NEGRO MANO IZQ SAN SANTONIO DE BELEN                                 ",
          "Población": "LA RIVERA DE BELEN                           ",
          "Nombre de afiliado": "SANCHEZ MURILLO VIRGINIA      ",
          "Código de afiliado": "26377",
          "Teléfono": "22395312",
          "Celular": "86528125",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-70",
          "Peso": "0.35",
          "Estado": "Entregado",
          "Dirección": "ALAJUELA CONDOMINIO VISTA DEL VALLE CASA NUMERO 8 SABANILLA DE ALAJUELA                                                                                                      ",
          "Población": "**ALAJUELA SABANILLA                         ",
          "Nombre de afiliado": "RODRIGUEZ VIQUEZ ALEJANDRA MAR",
          "Código de afiliado": "10500",
          "Teléfono": "47005319",
          "Celular": "88234312",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-71",
          "Peso": "0.72",
          "Estado": "Entregado",
          "Dirección": "CARTAGO EL GUARCO TEJAR, CARTAGO TEJAR DEL BANCO NACIONAL 200 NORTE Y 175 ESTE CASA VERJAS NEGRAS PORTÓN DE MADERA AL FONDO MANO DERECHA. EL GUARCO - TEJAR                  ",
          "Población": "EL GUARCO - TEJAR                            ",
          "Nombre de afiliado": "CARRANZA ROMERO MARLENE       ",
          "Código de afiliado": "26684",
          "Teléfono": "25523542",
          "Celular": "89651435",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-72",
          "Peso": "0.43",
          "Estado": "Entregado",
          "Dirección": "edificio de sabana sur, torre telecomunicaciones, de la Contraloría General de la República,  100 m. sur, piso 16, preguntar por Evelyn Hernandez.                           ",
          "Población": "**SAN JOSE                                   ",
          "Nombre de afiliado": "HERNANDEZ ROJAS EVELYN        ",
          "Código de afiliado": "24718",
          "Teléfono": "22301000",
          "Celular": "88217911",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-73",
          "Peso": "0.31",
          "Estado": "Entregado",
          "Dirección": "200 NORTE DE LA ESTACION DE SERVICIO DE TIERRA BLANCA  CASA A MANO IZQUIERDA ROSADA CON PORTON AMARILLO CARTAGO                                                              ",
          "Población": "CARTAGO                                      ",
          "Nombre de afiliado": "ANGULO QUESADA LISETH         ",
          "Código de afiliado": "15321",
          "Teléfono": "25301233",
          "Celular": "88914964",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-74",
          "Peso": "0.33",
          "Estado": "Entregado",
          "Dirección": "150 ESTE DE LA CASA CURALDE LA IGLESIA DE TEJAR , CASA MANO DERECHA COLOR ARENA  VENTANAS REDONDAAS CON PORTONES NEGROS  CARTAGO TEJAR DEL GUARCO                            ",
          "Población": "CARTAGO TEJAR                                ",
          "Nombre de afiliado": "RODRIGUEZ LEMUS MARGARITA     ",
          "Código de afiliado": "15155",
          "Teléfono": "25911205",
          "Celular": "88630520",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-75",
          "Peso": "0.36",
          "Estado": "Entregado",
          "Dirección": "ENTREGAR CORREOS COSTA RICA CARTAGO CENTRO, MARIA AUXILIADORA                                                                                                                ",
          "Población": "**CARTAGO CENTRO                             ",
          "Nombre de afiliado": "MASIS DURAN SHIRLEY           ",
          "Código de afiliado": "15798",
          "Teléfono": "25720765",
          "Celular": "83304949",
          "Detalles": "El estado cambió a Entregado por fabian( Tuesday Sep 10 , 2019 05:29:56 PM )\nPersona que recibe: \"Otros\" (oficinas de correos MARIA AUXILIADORA) Detalle:CP000009486DY\n"
        }
      },
      {
        "node": {
          "ID Paquete": "53103-76",
          "Peso": "0.99",
          "Estado": "Entregado",
          "Dirección": "DE SUPER DIVI 200SUR, DOBLANDO A MANO DERECHA YENDO PARA LA MUEBLERIA LEIVA, 150M AL OESTE, FRENTE AL TALLER AUTOMOTRIZ ALPIZA, CASA MURO ROSADO, VERJAS NEGRAS              ",
          "Población": "GUADALUPE CARTAGO                            ",
          "Nombre de afiliado": "ARIAS MONTOYA SUSAN           ",
          "Código de afiliado": "25420",
          "Teléfono": "60312504",
          "Celular": "61245954",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-77",
          "Peso": "0.37",
          "Estado": "Entregado",
          "Dirección": "CARTAGO GUADALUPE 25 SUR DEL SUPER LA JOYA CASA MANO IZQUIERDA COLOR BEIGE PORTÓN MARRON CARTAGO - GUADALUPE (ARENILLA)                                                      ",
          "Población": "CARTAGO - GUADALUPE (ARENILLA)               ",
          "Nombre de afiliado": "QUESADA ROMAN OLGA            ",
          "Código de afiliado": "27128",
          "Teléfono": "25525849",
          "Celular": "87290439",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-78",
          "Peso": "1.33",
          "Estado": "Entregado",
          "Dirección": "ENTREGAR PEDIDO EN DEPOSITO DE MADERAS EL POCHOTE 525MTS OESTE DEL MERCADO CENTRAL CARTAGO -                                                                                 ",
          "Población": "**CARTAGO                                    ",
          "Nombre de afiliado": "CORDOBA MORA ADRIANA          ",
          "Código de afiliado": "30829",
          "Teléfono": "25918920",
          "Celular": "83239857",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-79",
          "Peso": "0.66",
          "Estado": "Entregado",
          "Dirección": "CARTAGO BILINGUE SONY 200 SUR 100 ESTE Y 25 SUR CASA ENTRE DOS LOTES BALDIOS A MANO DERECHA COLOR TERRACOTA CON BEIGE                                                        ",
          "Población": "CARTAGO                                      ",
          "Nombre de afiliado": "ROSA MARIA CHAVEZ CALDERON    ",
          "Código de afiliado": "25149",
          "Teléfono": "",
          "Celular": "88807104",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-80",
          "Peso": "0.72",
          "Estado": "Entregado",
          "Dirección": "CARTAGO CENTRO 175 OESTE DE LA JASEC FRENTE AL RESTAURANTE CAFE TU CASA CASA COLOR VERDE MENTA PORTON NEGRO SOBRE AVENIDA                                                    ",
          "Población": "CARTAGO                                      ",
          "Nombre de afiliado": "RAMIREZ CHACON LUCIA          ",
          "Código de afiliado": "27741",
          "Teléfono": "25912966",
          "Celular": "84852966",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-81",
          "Peso": "0.43",
          "Estado": "Entregado",
          "Dirección": "600 MTS OESTE DEL PARQUE LA TRINIDAD,CASA A MANO DERECHA VERJAS CAFE,PORTON CON TECHITO TIPO TEJA ALAJUELA - SAN JOSE                                                        ",
          "Población": "ALAJUELA - SAN JOSE                          ",
          "Nombre de afiliado": "CALVO ROJAS DORIA DEL ROCIO   ",
          "Código de afiliado": "32132",
          "Teléfono": "24411804",
          "Celular": "89952941",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-83",
          "Peso": "0.85",
          "Estado": "Entregado",
          "Dirección": "SAN RAFAEL DE HEREDIA , URBANIZACION ANA VICTORIA , DE LA ENTRADA PRINCIPAL 75 NORTE , CASA MANO DERECHA COLOR PAPAYA , PORTON VERDE SAN RAFAEL - SAN JOSECITO               ",
          "Población": "SAN RAFAEL - SAN JOSECITO                    ",
          "Nombre de afiliado": "MADRIGAL ROJAS GISETH         ",
          "Código de afiliado": "28429",
          "Teléfono": "22637028",
          "Celular": "88634361",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-85",
          "Peso": "0.65",
          "Estado": "Entregado",
          "Dirección": "TIBAS 4 REINAS DE LA IGLESI CATOLICA 25 ESTE 50SUR CASA AMARILLA 2 PLANTAS 16M                                                                                               ",
          "Población": "**TIBAS 4 REINAS                             ",
          "Nombre de afiliado": "UREÑA CHACON DIEGO            ",
          "Código de afiliado": "27059",
          "Teléfono": "24335201",
          "Celular": "",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-86",
          "Peso": "1.14",
          "Estado": "Entregado",
          "Dirección": "PUNTARENAS, MIRAMAR, DEL SERVIMAX, 250 M NORTE, CASA M/D CON COLUMNAS, FRENTE A ALIMENTOS AGUILAR MIRAMAR                                                                    ",
          "Población": "MIRAMAR                                      ",
          "Nombre de afiliado": "MARIA KARINA RODRIGUEZ ACHIO  ",
          "Código de afiliado": "26309",
          "Teléfono": "",
          "Celular": "87798451",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-87",
          "Peso": "0.86",
          "Estado": "Entregado",
          "Dirección": "SAN JOSE PAVAS ROHMORSER DE LA EMBAJADA AMERICANA 500 M NORTE, DE LA PIZZERIA DOBLE SABOR 75 ESTE  CASA 24 A MANO IZQUIERDA SAN JOSE - PAVAS                                 ",
          "Población": "SAN JOSE - PAVAS                             ",
          "Nombre de afiliado": "ARCIA CASTILLO ILEANA DEL CARM",
          "Código de afiliado": "31350",
          "Teléfono": "",
          "Celular": "83520770",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-90",
          "Peso": "0.97",
          "Estado": "Entregado",
          "Dirección": "DEJAR EN SUCURSAL DE CORREOS SAN RAMON                                                                                                                                       ",
          "Población": "**SAN RAMON ALAJUELA                         ",
          "Nombre de afiliado": "SOLANO SANCHEZ ADRIANA MARIA  ",
          "Código de afiliado": "30058",
          "Teléfono": "62157170",
          "Celular": "86520258",
          "Detalles": "El estado cambió a Entregado por fabian( Friday Sep 13 , 2019 04:25:45 PM )\nPersona que recibe: \"Otros\" (CORREOS DE COSTA RICA) Detalle:Recibido por: ADRIANA SOLANO   13/09/2019 04:09:37 p.m.\tENTREGADO\tSUCURSAL SAN RAMON\nEl estado cambió a Rural por fabian( Tuesday Sep 10 , 2019 05:24:02 PM ) Detalle:CORREOS DE COSTA RICA GUIA WS008777039CR\n"
        }
      },
      {
        "node": {
          "ID Paquete": "53103-92",
          "Peso": "1.55",
          "Estado": "Entregado",
          "Dirección": "URBANIZACIÓN EL PORÓ, ÚLTIMA ENTRADA, CALLE SIN SALIDA, CASA 225 COLOR TERRACOTA CON PORTÓN NEGRO, LADO IZQUIERDO. SAN RAMON - SAN RAMON                                     ",
          "Población": "SAN RAMON - SAN RAMON                        ",
          "Nombre de afiliado": "ARROYO NUÑEZ MARJORIE         ",
          "Código de afiliado": "29923",
          "Teléfono": "88123461",
          "Celular": "88123461",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-93",
          "Peso": "0.96",
          "Estado": "Entregado",
          "Dirección": "SAN JOSE AVENIDA 10 DEL A y A 225 METROS ESTE  EDIFICIO MAN DERECHA  GUIAS Y SCOUTS DE CR                                                                                    ",
          "Población": "**TIBAS-COLIMA                               ",
          "Nombre de afiliado": "SANCHEZ CASTILLO KAREN DE LOS ",
          "Código de afiliado": "28744",
          "Teléfono": "",
          "Celular": "62971967",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-94",
          "Peso": "0.35",
          "Estado": "Entregado",
          "Dirección": "GUADALUPE CENTRO DETRAS DE LA CLINICA RICARDO JIMENEZ NUÑEZ DIAGONAL REST. CASA MIA CASA AMARILLA NUM.40 REJAS ROJAS CONTIGUO SALON DE BELLEZA FRENTE LOCAL DE BATIDO        ",
          "Población": "GOICOECHEA - GUADALUPE EL CARMEN             ",
          "Nombre de afiliado": "OVIEDO MENDEZ ANA LORENA      ",
          "Código de afiliado": "29643",
          "Teléfono": "70619503",
          "Celular": "89326566",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-95",
          "Peso": "0.70",
          "Estado": "Entregado",
          "Dirección": "HEREDIA, SAN JOAQUIN DE FLORES, DEL CEMENTERIO 250 MTS ESTE, CASA A MANO DERECHA, COLOR TERRACOTA. HEREDIA, SAN JOAQUIN DE FLORES                                            ",
          "Población": "HEREDIA, SAN JOAQUIN DE FLORES               ",
          "Nombre de afiliado": "VARELA ZUÑIGA SANDRA          ",
          "Código de afiliado": "20339",
          "Teléfono": "22656493",
          "Celular": "89954229",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-96",
          "Peso": "0.78",
          "Estado": "Entregado",
          "Dirección": "HEREDIA DEL WALLMART DE HEREDIA 200 NORTE Y 75 ESTE MURO LAJA COLOR AMARILLO HEREDIA - MERCEDES                                                                              ",
          "Población": "HEREDIA - MERCEDES                           ",
          "Nombre de afiliado": "MORALES CONEJO FRANK          ",
          "Código de afiliado": "27951",
          "Teléfono": "22603792",
          "Celular": "83946914",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-97",
          "Peso": "0.58",
          "Estado": "Entregado",
          "Dirección": "HEREDIA PLAZA NAOS FRENTE AL NUEVO HOSPITAL HEREDIA ESQUINA NORESTE FRENTE A LOS SEMAFOROS PRIMER PISO CONSULTORIO #13 HEREDIA                                               ",
          "Población": "HEREDIA                                      ",
          "Nombre de afiliado": "MORA SAENZ GUISELLE           ",
          "Código de afiliado": "21065",
          "Teléfono": "",
          "Celular": "88543386",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-99",
          "Peso": "0.79",
          "Estado": "Entregado",
          "Dirección": "ALAJUELA ATENAS . DEL CRUCE DE RIO GRANDE 1 KM Y MEDIO AL ESTE, CARRETERA HACIA ALAJUELA CASA AMARILLA CON UN PORTON GRANDE COLOR MARRON Y CON PALMERAS AL FRENTE PALMARES - ",
          "Población": "ALAJUELA ATENAS                              ",
          "Nombre de afiliado": "BOLAÑOS GONZALEZ ALICE MARIA  ",
          "Código de afiliado": "28173",
          "Teléfono": "",
          "Celular": "83566127",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-101",
          "Peso": "0.85",
          "Estado": "Entregado",
          "Dirección": "SAN JOSE VAZQUEZ DE CORONADO- SAN ISIDRO  DE LA MUNICIPALIDAD 225 METROS  OESTE 2DA MANO DERECHA 2 PLANTAS PAPAYA                                                            ",
          "Población": "SAN JOSE VAZQUEZ DE CORONADO                 ",
          "Nombre de afiliado": "ARAYA SOLANO ADRIANA          ",
          "Código de afiliado": "31655",
          "Teléfono": "22292034",
          "Celular": "84329369",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-102",
          "Peso": "0.43",
          "Estado": "Entregado",
          "Dirección": "San Francisco de coronado del puente el durazno 300mtrs sur   En Ferreteria Fermac exactamente                                                                               ",
          "Población": "MORAVIA-LOS SITIOS                           ",
          "Nombre de afiliado": "RODRIGUEZ ALAVARADO ROXANA    ",
          "Código de afiliado": "31603",
          "Teléfono": "88733496",
          "Celular": "70078412",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-103",
          "Peso": "0.42",
          "Estado": "Entregado",
          "Dirección": "BARRIO TOURNON FRENTE CENTRO COMERCIAL EL PUEBLO OFICENTRO TORRES DEL CAMPO TORRE 1 PISO 1 OFICINAS BANCA PARA DESARROLLO                                                    ",
          "Población": "**GOICOECHEA - SAN FRANCISCO                 ",
          "Nombre de afiliado": "SOLANO MONTOYA ANA LUCIA      ",
          "Código de afiliado": "31710",
          "Teléfono": "25374292",
          "Celular": "87214442",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-105",
          "Peso": "3.65",
          "Estado": "Entregado",
          "Dirección": "CARTAGO CENTRAL-CARTAGO  DIAGONAL A LA JASEC AGENICIA VIAJES MAYRA VARGAS                                                                                                    ",
          "Población": "CARTAGO                                      ",
          "Nombre de afiliado": "MARIN VARGAS VANESSA          ",
          "Código de afiliado": "32116",
          "Teléfono": "22557260",
          "Celular": "62803519",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-106",
          "Peso": "0.45",
          "Estado": "Entregado",
          "Dirección": "PURRAL DE GOCICHEA , CALLE LOS CASTORES A LA PAR DE LA PULPERIA LOS CASTORES , PORTON NEGRO PEQUEÑO GOICOECHEA - PURRAL                                                      ",
          "Población": "GOICOECHEA - PURRAL                          ",
          "Nombre de afiliado": "MENDEZ RIVAS YESSENIA         ",
          "Código de afiliado": "29900",
          "Teléfono": "",
          "Celular": "60116619",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-111",
          "Peso": "0.96",
          "Estado": "Entregado",
          "Dirección": "SAN JOSE ZAPOTE 100 NORTE DE UNIVERSIDAD  VERITAS  MANO IZQ EN LA IGLESIA CENTRO EVANGELISTICO ENTREGAR A DIGNA VARGAS LA  DE LAS SODAS                                      ",
          "Población": "SAN JOSE - ZAPOTE                            ",
          "Nombre de afiliado": "REYES VARGAS KATIA MARGINE    ",
          "Código de afiliado": "30583",
          "Teléfono": "62679909",
          "Celular": "64741950",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-112",
          "Peso": "1.80",
          "Estado": "Entregado",
          "Dirección": "SAN JOSE PEREZ ZELEDON SAN ISIDRO BARRIO SAN ISIDRO DEL GENERAL TIENDA OASIS FRENTE AL BCO BCR MIRIAM EN MERCADO MUNICIPAL CONTIGUO A LA CARNICERIA                          ",
          "Población": "SAN JOSE                                     ",
          "Nombre de afiliado": "SERRANO VIELKA SANTA MARIA    ",
          "Código de afiliado": "31863",
          "Teléfono": "27760245",
          "Celular": "85165125",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-113",
          "Peso": "0.87",
          "Estado": "Entregado",
          "Dirección": "200 NORTE DE PULPERIA LA JULIETA,RIO SEGUNDO DE ALAJUELA CASA A MANO DERECHA AMARILLA CON CAFE ALAJU                                                                         ",
          "Población": "ALAJUELA - RIO SEGUNDO                       ",
          "Nombre de afiliado": "ALFARO CORDERO MAYRA          ",
          "Código de afiliado": "31639",
          "Teléfono": "",
          "Celular": "83045056",
          "Detalles": "El estado cambió a Entregado por fabian( Wednesday Sep 11 , 2019 09:39:04 AM )\nPersona que recibe: \"Titular\" Detalle:\n"
        }
      },
      {
        "node": {
          "ID Paquete": "53103-114",
          "Peso": "0.56",
          "Estado": "Entregado",
          "Dirección": "RIO SEGUNDO DE ALAJUELA,VILLA ELIA, SECTOR IMAS, DETRAS DE LA IGELSIA CATOLICA 25 NORTE ALAJUELA - RIO SEGUNDO                                                               ",
          "Población": "ALAJUELA - RIO SEGUNDO                       ",
          "Nombre de afiliado": "BRENES GONZALEZ KAREN         ",
          "Código de afiliado": "31576",
          "Teléfono": "",
          "Celular": "85229956",
          "Detalles": "El estado cambió a Entregado por fabian( Wednesday Sep 11 , 2019 09:39:56 AM )\nPersona que recibe: \"Titular\" Detalle:\n"
        }
      },
      {
        "node": {
          "ID Paquete": "53103-115",
          "Peso": "0.42",
          "Estado": "Entregado",
          "Dirección": "URBANIZACION LA CUMBRE CASA D46 FRENTE PULPERIA FANNY, CASA PORTON BLANCO HEREDIA - SAN FRANCISCO                                                                            ",
          "Población": "HEREDIA - SAN FRANCISCO                      ",
          "Nombre de afiliado": "JAEN SEQUEIRA YESICA LORENA   ",
          "Código de afiliado": "32131",
          "Teléfono": "",
          "Celular": "60438083",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-116",
          "Peso": "0.54",
          "Estado": "Entregado",
          "Dirección": "URBANIZACIÓN LUZ DEL SOL, CASA 67 VERJAS ROJAS ALAJUELA - SAN ANTONIO                                                                                                        ",
          "Población": "ALAJUELA - SAN ANTONIO                       ",
          "Nombre de afiliado": "CENTENO DE CARBALLO CARMEN ADI",
          "Código de afiliado": "32063",
          "Teléfono": "",
          "Celular": "60679603",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-117",
          "Peso": "2.11",
          "Estado": "Entregado",
          "Dirección": "Hatillo 7 frente al abastecedor el viejo casa esquinera beige verjas negras.  ( Mayela Herrera) gestora,.                                                                    ",
          "Población": "HATILLO 7                                    ",
          "Nombre de afiliado": "TRES CALVO MARIA JULIA        ",
          "Código de afiliado": "16730",
          "Teléfono": "87280224",
          "Celular": "85367108",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-118",
          "Peso": "0.52",
          "Estado": "Entregado",
          "Dirección": "POZOS DE SANTA ANA DE LA PANADERIA LA CHISPA 125MTS NORTE 75 OESTE  CASA MDERECHA CON BANCA ROSADA EN CORREDOR                                                               ",
          "Población": "SANTA ANA, ESCAZU                            ",
          "Nombre de afiliado": "GONZALEZ CHAVARRIA MILENA     ",
          "Código de afiliado": "21760",
          "Teléfono": "",
          "Celular": "88296222",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-119",
          "Peso": "0.67",
          "Estado": "Entregado",
          "Dirección": "SAN JOSE ALAJULITA LOS FILTROS DE LOS TANQUES DE AGUA 200 SUR CASA MANO IZQUIERDA PORTON VERDE FRENTE TORRES DEL ICE                                                         ",
          "Población": "ALAJUELITA                                   ",
          "Nombre de afiliado": "MARADIAGA MARIA DEL PILAR     ",
          "Código de afiliado": "26158",
          "Teléfono": "",
          "Celular": "71000301",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-120",
          "Peso": "0.76",
          "Estado": "Entregado",
          "Dirección": "CARTAGO TRES RIOS CENTRO DEL BANCO NACIONAL 50 SUR EN FARMACIA AMPM                                                                                                          ",
          "Población": "**LA UNION - TRES RIOS                       ",
          "Nombre de afiliado": "SANABRIA ROMAN VANESA         ",
          "Código de afiliado": "30833",
          "Teléfono": "22796847",
          "Celular": "88249976",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-121",
          "Peso": "1.24",
          "Estado": "Entregado",
          "Dirección": "TIRRASES DE CURRIDABAT PROYECTO GLORIA BEJARANO DE LA PULPERIA MIRAVALLES 200 NORTE Y 50 ESTE CASA METIDA A MD COLOR BEIGE                                                   ",
          "Población": "CURRIDABAT                                   ",
          "Nombre de afiliado": "ALVAREZ ALEMAN ORALIA         ",
          "Código de afiliado": "7578",
          "Teléfono": "",
          "Celular": "87393670",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-123",
          "Peso": "0.90",
          "Estado": "Entregado",
          "Dirección": "PAVAS  DE LA IGLESIA MARIA REINA 125 AL OESTE JARDIN INFANTIL RUISEÑOR  O  DE DATA FORMAS PAVAS, 200 NORTE 50 AL ESTE CASA NUMERO 8 MANO DERECHA COLOR BEIGUE VERJAS COLOR VI",
          "Población": "PAVAS                                        ",
          "Nombre de afiliado": "SABORIO REES LILLY            ",
          "Código de afiliado": "8250",
          "Teléfono": "22325466",
          "Celular": "86923216",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-124",
          "Peso": "0.37",
          "Estado": "Entregado",
          "Dirección": "CARTAGO CERVANTES 100 NORTE DE POLLOS TIPICOS CERVANTEÑOS  CASA AZUL MANO IZ. PORTON NEGRO.                                                                                  ",
          "Población": "**TRES RIOS                                  ",
          "Nombre de afiliado": "BONILLA MADRIZ DAMARIS        ",
          "Código de afiliado": "25947",
          "Teléfono": "25348213",
          "Celular": "83378082",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-125",
          "Peso": "0.63",
          "Estado": "Entregado",
          "Dirección": "IMPRENTA LIBERIA 50 MTS ESTE MANO DERECHA CASA VERJAS NEGRAS                                                                                                                 ",
          "Población": "LIBERIA GUANACASTE                           ",
          "Nombre de afiliado": "LOPEZ ANTONIO PEDRO MARCHENA  ",
          "Código de afiliado": "32123",
          "Teléfono": "",
          "Celular": "88100905",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-126",
          "Peso": "0.45",
          "Estado": "Entregado",
          "Dirección": "DEL BAC SAN JOSÉ, 250 NORTE CALLE  MANO IZQUIERDA CASA COLOR MELÓN MANO IZDA PORTONES NEGROS                                                                                 ",
          "Población": "TIBAS - SAN JUAN                             ",
          "Nombre de afiliado": "CUBERO LOPEZ MARIBEL          ",
          "Código de afiliado": "31186",
          "Teléfono": "22363681",
          "Celular": "84966359",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-127",
          "Peso": "1.76",
          "Estado": "Entregado",
          "Dirección": "EL CARMEN DE GUADALUPE DEL PLAY DE TEPEYAC NUMERO 1 200 ESTE 75 SUR CUARTA CASA MANO DERECHA DE DOS PLANTA COLOR BLANCO                                                      ",
          "Población": "**                                           ",
          "Nombre de afiliado": "VARELA CRUZ MARIA JULIETA     ",
          "Código de afiliado": "21378",
          "Teléfono": "22453450",
          "Celular": "83657611",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-129",
          "Peso": "1.87",
          "Estado": "Entregado",
          "Dirección": "90 METROS ESTE DE EL AYA QUINTA CASA A MANO IZQUIERDA BARRIO SAN LUIS PEREZ ZELEDON                                                                                          ",
          "Población": "PEREZ ZELEDON                                ",
          "Nombre de afiliado": "CAMPOS ARCE RUTH              ",
          "Código de afiliado": "7303",
          "Teléfono": "27723537",
          "Celular": "",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-130",
          "Peso": "0.62",
          "Estado": "Entregado",
          "Dirección": "SAN JOSÉ, PÉREZ ZELEDÓN, SAN ISIDRO DE EL GENERAL, OFICINAS DEL REGISTRO CIVIL                                                                                               ",
          "Población": "**PEREZ ZELEDON - SAN ISIDRO D               ",
          "Nombre de afiliado": "CHINCHILLA CORDERO MINOR ANDRE",
          "Código de afiliado": "30181",
          "Teléfono": "27717310",
          "Celular": "87291835",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-131",
          "Peso": "0.47",
          "Estado": "Entregado",
          "Dirección": "SAN JOSÉ, PÉREZ ZELEDÓN, DANIEL FLORES, BARRIO LABORATORIO, CONTIGUO 88 STEREO, A MANO IZQUIERDA, CASA BLANCA PORTONES NEGROS.(LLAMAR 88122049) PEREZ ZELEDON - DANIEL FLORES",
          "Población": "PEREZ ZELEDON - DANIEL FLORES                ",
          "Nombre de afiliado": "FONSECA ARAYA MARION          ",
          "Código de afiliado": "30244",
          "Teléfono": "88122049",
          "Celular": "60895680",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-132",
          "Peso": "1.09",
          "Estado": "Entregado",
          "Dirección": "GOLFITO-RESIDENCIAL UREÑA, CASA A-9 (CONTIGUO A SODA LAS PALMERAS, CASA COLOR PALO ROSA CON MAYAS A MANO IZQUIERDA GOLFITO-GOLFITO                                           ",
          "Población": "GOLFITO-GOLFITO                              ",
          "Nombre de afiliado": "GOMEZ QUIROS DIDIAN           ",
          "Código de afiliado": "21693",
          "Teléfono": "",
          "Celular": "83956343",
          "Detalles": "El estado cambió a Entregado por fabian( Friday Sep 13 , 2019 04:07:15 PM )\nPersona que recibe: \"Otros\" (CORREOS DE COSTA RICA) Detalle:Recibido por: YENESI NIETO GOMEZ   11/09/2019 02:17:58 p.m.\tENTREGADO\tSUCURSAL GOLFITO\nEl estado cambió a Rural por fabian( Tuesday Sep 10 , 2019 04:54:37 PM ) Detalle:CORREOS DE COSTA RICA GUIA WS008775259CR\n"
        }
      },
      {
        "node": {
          "ID Paquete": "53103-133",
          "Peso": "1.09",
          "Estado": "Entregado",
          "Dirección": "SAN.FRANCISCO DE HERD. DE WALMART 600 SUR-400 OESTE COND.BOSQUES DE VELARDE CASA 10 D ULLOA                                                                                  ",
          "Población": "HEREDIA                                      ",
          "Nombre de afiliado": "VALENCIANO CORRALES HILDA. M. ",
          "Código de afiliado": "21999",
          "Teléfono": "",
          "Celular": "87104457",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-134",
          "Peso": "0.39",
          "Estado": "Entregado",
          "Dirección": "HATILLO 7 DEL PLAY 50 OESTE EN ALAMEDA FRENTE AL SUPER VICTORIA 2DA CASA A MANO IZQUIERDA COLOR BEIS BERJAS TERRACOTA  AVENIDA 22B CALLE 70                                  ",
          "Población": "**HATILLO                                    ",
          "Nombre de afiliado": "ESCALANTE MONTOYA GRACE MARIA ",
          "Código de afiliado": "11735",
          "Teléfono": "22329169",
          "Celular": "",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-135",
          "Peso": "0.97",
          "Estado": "Entregado",
          "Dirección": "DESAMPARADOS,LOTO 2 CASA 19 EN PANADERIA DIVINO NIÑO                                                                                                                         ",
          "Población": "DESAMPARADOS                                 ",
          "Nombre de afiliado": "SUAREZ ALVAREZ JOSE ANTENOR   ",
          "Código de afiliado": "18092",
          "Teléfono": "",
          "Celular": "71949361",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-136",
          "Peso": "0.93",
          "Estado": "Entregado",
          "Dirección": "ALAJUELITA CENTRO DEL CEMENTERIO 25 M ESTE Y 50 M NORTE CASA DE MADERA  COLOR PAPAYA A MANO DERECHA CALLE SIN SALIDA  REJAS NEGRAS ALAJUELITA - ALAJUELITA                   ",
          "Población": "ALAJUELITA - ALAJUELITA                      ",
          "Nombre de afiliado": "DURAN MARTINEZ ILEANA         ",
          "Código de afiliado": "30710",
          "Teléfono": "",
          "Celular": "84952526",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-137",
          "Peso": "0.86",
          "Estado": "Entregado",
          "Dirección": "ESCAZU CENTRO DE LA CASA PASTORAL 475 MTS SUR CASA DE PORTON DE MADERA A MI (LLAMAR ANTES) ESCAZU - ESCAZU                                                                   ",
          "Población": "ESCAZU - ESCAZU                              ",
          "Nombre de afiliado": "CRUZ MONTES CARMEN MARIA      ",
          "Código de afiliado": "30788",
          "Teléfono": "",
          "Celular": "72056622",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-139",
          "Peso": "0.33",
          "Estado": "Entregado",
          "Dirección": "COYOL, CONDOMINIO VILA DEL LAGO CASA 33 O DEJAR CON EL GUARDA ALAJUELA - SAN JOSE                                                                                            ",
          "Población": "ALAJUELA - SAN JOSE                          ",
          "Nombre de afiliado": "SANCHEZ PORRAS DIOSLEY        ",
          "Código de afiliado": "30402",
          "Teléfono": "24333552",
          "Celular": "88857923",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-142",
          "Peso": "0.90",
          "Estado": "Rural",
          "Dirección": "FORTUNA DE BAGASES COSTADO NORTE DE LA PLAZA DE DEPORTES EN LA TIENDA FRANCINY BAGACES - LA FORTUNA                                                                          ",
          "Población": "BAGACES - LA FORTUNA                         ",
          "Nombre de afiliado": "QUESADA LOPEZ TAMMY VANESSA   ",
          "Código de afiliado": "31625",
          "Teléfono": "26730462",
          "Celular": "88758682",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-143",
          "Peso": "0.38",
          "Estado": "Entregado",
          "Dirección": "LIBERIA GUANACASTE BARRIO LOS CEDROS DEL PANI 75 METROS AL ESTE CASA MANO DERECHA COLOR BLANCO PORTONES  NEGROS LIBERIA - LIBERIA                                            ",
          "Población": "LIBERIA - LIBERIA                            ",
          "Nombre de afiliado": "ESPINOZA COREA MARIANITA      ",
          "Código de afiliado": "31884",
          "Teléfono": "",
          "Celular": "72254207",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-144",
          "Peso": "1.14",
          "Estado": "Entregado",
          "Dirección": "ALAJUELA GUACIMA,URB 11 MARZO CASA 33 ALAJUELA - GUACIMA                                                                                                                     ",
          "Población": "ALAJUELA - GUACIMA                           ",
          "Nombre de afiliado": "BONILLA VARGAS MELISSA MARIA  ",
          "Código de afiliado": "31618",
          "Teléfono": "64892503",
          "Celular": "61458987",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-145",
          "Peso": "0.66",
          "Estado": "Entregado",
          "Dirección": "SANJOSESANGERONIMODEMORAVIADELSUPERMERCADOZURQUI300NORTEDELAIGLESIACATOLICA CASA COLORVERDE MORAVIA - SAN JERONIMO                                                           ",
          "Población": "MORAVIA - SAN JERONIMO                       ",
          "Nombre de afiliado": "ZUÑIGA MONGE WENDY            ",
          "Código de afiliado": "32126",
          "Teléfono": "61268826",
          "Celular": "61268826",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-146",
          "Peso": "0.45",
          "Estado": "Entregado",
          "Dirección": "ALAJUELAGUACIMAARRIBADEOTTOSBAR250NORTE25OESTETERCERACASAMANOIZQUIERDACOLORTERRACOTA ALAJUELA - GUACIMA                                                                      ",
          "Población": "ALAJUELA - GUACIMA                           ",
          "Nombre de afiliado": "MARTINEZ CARDOSA DANIELA      ",
          "Código de afiliado": "32128",
          "Teléfono": "62311463",
          "Celular": "63012989",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-147",
          "Peso": "1.29",
          "Estado": "Entregado",
          "Dirección": "ALAJUELASANRAFAELURBLAPAZDELAROTONDAMANOIZQSEGUNDAENTRADACASAI14ROSADITAVERJAS ALAJUELA - SAN RAFAEL                                                                         ",
          "Población": "ALAJUELA - SAN RAFAEL                        ",
          "Nombre de afiliado": "VELASQUEZ ZAMORA MIGDALIA DEL ",
          "Código de afiliado": "32130",
          "Teléfono": "85160152",
          "Celular": "87165238",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-148",
          "Peso": "1.31",
          "Estado": "Entregado",
          "Dirección": "ALAJUELA ALAJUELA - GUACIMA ARRIBA ENTRADA LOS MO,LINOS 300 SUR PORTON GRANDE A MANO DERECHA COLOR ROJO EL PORTO DEBEN DE LLAMAR A MARIELA 72671602                          ",
          "Población": "ALAJUELA - GUACIMA                           ",
          "Nombre de afiliado": "LIRA BETANCO MARIA MAGDALENA  ",
          "Código de afiliado": "31773",
          "Teléfono": "",
          "Celular": "61851724",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-149",
          "Peso": "0.37",
          "Estado": "Entregado",
          "Dirección": "ALAJUELITA SAN JOSECITODEL LICEO 300 SUR M/D CASA METIDA CONTIGUO AL TALLER ALEX ALAJUELITA - SAN JOSECITO                                                                   ",
          "Población": "ALAJUELITA - SAN JOSECITO                    ",
          "Nombre de afiliado": "MADRIGAL LEON OLGA LIDIA      ",
          "Código de afiliado": "28889",
          "Teléfono": "",
          "Celular": "60134474",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-150",
          "Peso": "0.80",
          "Estado": "Entregado",
          "Dirección": "BARRIO NACIONES UNIDAS AV 34A LLEGAS AL RESTAURANTE CAMPEÓN Y LLAMAR NO ENTRAR YA QUE EL LUGAR ES DE RIESGO                                                                  ",
          "Población": "**SAN JOSE - CATEDRAL                        ",
          "Nombre de afiliado": "SANDI MARIN GAVINA            ",
          "Código de afiliado": "31914",
          "Teléfono": "",
          "Celular": "83897185",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-151",
          "Peso": "2.05",
          "Estado": "Entregado",
          "Dirección": "ALAJUELA PUEBLO NUEVO, LIBRERIA Y BAZAR ABIGAIL, COSTADO NORTE DE LA ESCUELA GUADALAJARA,SOBRE CALLE PRINCIPAL. ALAJUELA , PUEBLO NUEVO                                      ",
          "Población": "ALAJUELA , PUEBLO NUEVO                      ",
          "Nombre de afiliado": "SALAS MONTERO XINIA           ",
          "Código de afiliado": "20573",
          "Teléfono": "",
          "Celular": "83465803",
          "Detalles": "El estado cambió a Entregado por fabian( Wednesday Sep 11 , 2019 09:33:43 AM )\nPersona que recibe: \"Titular\" Detalle:\n"
        }
      },
      {
        "node": {
          "ID Paquete": "53103-152",
          "Peso": "1.07",
          "Estado": "Entregado",
          "Dirección": "CARTAGO EL GUARCO TEJAR LAS CATALINAS CASA 3I                                                                                                                                ",
          "Población": "CARTAGO                                      ",
          "Nombre de afiliado": "ARAICA DIAS MARIELA           ",
          "Código de afiliado": "32122",
          "Teléfono": "",
          "Celular": "70514470",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-153",
          "Peso": "0.51",
          "Estado": "Entregado",
          "Dirección": "URBANIZACION COCORI FRENTE AL SUPER DEL SUR CASA 187 CARTAGO - AGUACALIENTE O SAN F                                                                                          ",
          "Población": "CARTAGO - AGUACALIENTE O SAN F               ",
          "Nombre de afiliado": "VARGAS GARITA LUCRECIA        ",
          "Código de afiliado": "32125",
          "Teléfono": "25525234",
          "Celular": "86813940",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-154",
          "Peso": "1.64",
          "Estado": "Entregado",
          "Dirección": "COCORI, DE LA ESCUELA 500 MTS AL SUR Y 75 AL ESTE CASA PLANTA ALTA, PASAMANERIA CARTAGO - AGUACALIENTE O SAN F                                                               ",
          "Población": "CARTAGO - AGUACALIENTE O SAN F               ",
          "Nombre de afiliado": "BRENES BRENES GILDA GISELLE   ",
          "Código de afiliado": "32127",
          "Teléfono": "25525001",
          "Celular": "83065658",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-155",
          "Peso": "1.25",
          "Estado": "Entregado",
          "Dirección": "DEL MAS X MENOS DE SAN FRANCISCO 200 MTS OESTE Y 200 MTS SUR CONDOMINIOS BOSQUES DE VELARDE CASA 1G HEREDIA - SAN FRANCISCO                                                  ",
          "Población": "HEREDIA - SAN FRANCISCO                      ",
          "Nombre de afiliado": "SOLANO PORTILLA GUISELLA      ",
          "Código de afiliado": "28900",
          "Teléfono": "",
          "Celular": "89390336",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-156",
          "Peso": "1.47",
          "Estado": "Entregado",
          "Dirección": "75 ESTE LICEO MORAVIA FRENTE A LA MUSMANNI PORTON NEGRO MORAVIA - SAN VICENTE                                                                                                ",
          "Población": "MORAVIA - SAN VICENTE                        ",
          "Nombre de afiliado": "ULATE CASTILLO CARMEN         ",
          "Código de afiliado": "30481",
          "Teléfono": "60250527",
          "Celular": "60250527",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-158",
          "Peso": "2.23",
          "Estado": "Entregado",
          "Dirección": "100 MTS OESTE DE LA CRUZ ROJA, CONTIGUO A LA PULPERIA VIENTO FRESCO, APARTAMENTO SAN ISIDRO DE HEREDIA                                                                       ",
          "Población": "SAN ISIDRO HEREDIA                           ",
          "Nombre de afiliado": "ESQUIVEL REYES RACQUEL        ",
          "Código de afiliado": "19422",
          "Teléfono": "22689367",
          "Celular": "88327675",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-159",
          "Peso": "0.33",
          "Estado": "Entregado",
          "Dirección": "CURRIDABAT RES. HACIENDA VIEJA DEL LICEO DE CURRIDABAT 100 OESTE 125 SUR CASA MANO DERECHA COLOR AMARILLA PORTON BLANCO 2 PLANTAS CONTIGUO APARTAMENTOS                      ",
          "Población": "CURRIDABAT                                   ",
          "Nombre de afiliado": "IBARRA QUESADA MARCELA        ",
          "Código de afiliado": "24596",
          "Teléfono": "22724070",
          "Celular": "84034905",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-160",
          "Peso": "0.57",
          "Estado": "Entregado",
          "Dirección": "URBANIZACION COLINA DE MONTE ALEGRE, CONDOMINIO NOGAL LOTE 8, LA UNION CARTAGO, SAN JUAN                                                                                     ",
          "Población": "CARTAGO, LA UNION, SAN JUAN                  ",
          "Nombre de afiliado": "ABARCA SAGOT IVETTE           ",
          "Código de afiliado": "26363",
          "Teléfono": "22785295",
          "Celular": "83819222",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-161",
          "Peso": "0.33",
          "Estado": "Entregado",
          "Dirección": "DEL CEN-SINAI 200 SUR OESTE CASA COLOR TURQUESA MD CORREDOR Y JARDIN AL FTE LAS JUNTAS ABANGARES                                                                             ",
          "Población": "LAS JUNTAS ABANGARES                         ",
          "Nombre de afiliado": "VILLALOBOS PEREZ YORLENY      ",
          "Código de afiliado": "21340",
          "Teléfono": "26622164",
          "Celular": "83499038",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-163",
          "Peso": "0.36",
          "Estado": "Entregado",
          "Dirección": "PUNTARENAS-MONTES DE ORO-MIRAMAR URBANIZACION  MAR AZUL  CASA NUMERO 19 COLOR PAPAYA MIRAMAR MONTES DE ORO PUNTARENAS                                                        ",
          "Población": "PUNTARENAS                                   ",
          "Nombre de afiliado": "GARCIA BARGAS EDWWIN          ",
          "Código de afiliado": "31876",
          "Teléfono": "",
          "Celular": "89723459",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-167",
          "Peso": "0.70",
          "Estado": "Entregado",
          "Dirección": "GUANACASTE, LIBERIA, BARRIO LOS CERROS, DE CHAPARROS BAR100 METROS NORTE Y 50 OESTE, MANO IZQUIERDA, CASA PORTON BLANCO LIBERIA - LIBERIA                                    ",
          "Población": "LIBERIA - LIBERIA                            ",
          "Nombre de afiliado": "UGARTE SANCHEZ MARLEN MARIETHA",
          "Código de afiliado": "29935",
          "Teléfono": "71117789",
          "Celular": "87405910",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-168",
          "Peso": "0.56",
          "Estado": "Entregado",
          "Dirección": "GUANACASTE. NICOYA, VARILLAL, 300 METROS NORTE DE LA EMPACADORA DE MELON LA COSTENA. CASA CONSTRUCCION MIXTA SIN PINTAR MANO DERECHA NICOYA - NICOYA, CON PIEDRA BLANCA EN LA",
          "Población": "NICOYA - NICOYA                              ",
          "Nombre de afiliado": "UGALDE GOMEZ AURELIA MARIA    ",
          "Código de afiliado": "31853",
          "Teléfono": "62243109",
          "Celular": "60868337",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-66",
          "Peso": "2.70",
          "Estado": "Entregado",
          "Dirección": "ESCULA RINCON DE CACAO 25 OESTE  CASA PORTONES VERDES A MANO IZQUIERDA                                                                                                       ",
          "Población": "ALAJUELA-EL CACAO                            ",
          "Nombre de afiliado": "ALEMAN GALLEGOS FLOR DE MARIA ",
          "Código de afiliado": "26480",
          "Teléfono": "",
          "Celular": "86102122",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-84",
          "Peso": "0.23",
          "Estado": "Entregado",
          "Dirección": "TURRUCARES ALAJUELA 500 METROS OESTE DEL CEMENTERIO DE TURRUCARES CARRETERA HACIA CEBADILLA CASA A MONO DERECHA                                                              ",
          "Población": "**TURRUCARES  ALAJUELA                       ",
          "Nombre de afiliado": "CHAVARRIA JIMENEZ ROXANA      ",
          "Código de afiliado": "22238",
          "Teléfono": "24878892",
          "Celular": "88429947",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-89",
          "Peso": "3.32",
          "Estado": "Entregado",
          "Dirección": "SAN RAMÓN, SAN JUAN EL LLAMARÓN, EN EL NEGOCIO DE BATERIAS, SUPER BATERIAS, FRENTE AL RESTAURANT CHINO. SAN RAMON - SAN JUAN                                                 ",
          "Población": "SAN RAMON - SAN JUAN                         ",
          "Nombre de afiliado": "ESPINOZA PANIAGUA FLORY       ",
          "Código de afiliado": "30491",
          "Teléfono": "24455141",
          "Celular": "85105666",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-98",
          "Peso": "2.02",
          "Estado": "Entregado",
          "Dirección": "MERCEDES SUR, HEREDIA, SAN JORGE, DEL SAMUEL SAENZ 300 OESTE DEL SUPER GIGANTE 2 CUADRAS AL NORTE Y 60 MTS OESTE, SEXTA CASA A MANO DERECHA, PORTON GRIS OBSCURO CERRADO. MER",
          "Población": "CENTRAL                                      ",
          "Nombre de afiliado": "ACHIO FUENTES AGNES           ",
          "Código de afiliado": "21435",
          "Teléfono": "83146849",
          "Celular": "89607799",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-107",
          "Peso": "0.17",
          "Estado": "Entregado",
          "Dirección": "URBANIZACION LOS CASTORES BAJANDO LAS GRADAS CASA 8 GOICOECHEA - PURRAL                                                                                                      ",
          "Población": "GOICOECHEA - PURRAL                          ",
          "Nombre de afiliado": "MEJIA RIVAS REINA DEL ROSARIO ",
          "Código de afiliado": "31294",
          "Teléfono": "",
          "Celular": "72750602",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-110",
          "Peso": "4.49",
          "Estado": "Entregado",
          "Dirección": "SAN JOSE HATILLO 7 DE LA GUARDERIA 75 ESTE FRENTE PULPERIA EL VIEJO CASA VERDE SAN JOSE - HATILLO                                                                            ",
          "Población": "HATILLO 7                                    ",
          "Nombre de afiliado": "GONZALEZ PORRAS VALERY KRISHA ",
          "Código de afiliado": "28747",
          "Teléfono": "22202319",
          "Celular": "87536711",
          "Detalles": ""
        }
      },
      {
        "node": {
          "ID Paquete": "53103-140",
          "Peso": "8.57",
          "Estado": "Entregado",
          "Dirección": "TILARAN GUANACASTE , QUEBRADA GRANDE DE TILARAN 150 MTS SUR Y 100 OESTE DE LA GUARDIA RURAL , CASA VERDE MUSGO , MANO DERECHA TILARAN - QUEBRADA GRANDE                      ",
          "Población": "TILARAN - QUEBRADA GRANDE                    ",
          "Nombre de afiliado": "QUESADA MASIS ANGIE MELISSA   ",
          "Código de afiliado": "30336",
          "Teléfono": "",
          "Celular": "84729843",
          "Detalles": ""
        }
      }
    ]
  }
}
