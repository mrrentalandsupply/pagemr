var categorys = new Array("camiones","cargadores","compresores","excavadoras","otros","volquetas");

var data =[
  /*CAMIONES*/
  {
  title: "CAMIÓN CHEVROLET",
  category: categorys[0],
  serial: "SERIAL: 9GDP7H1C4900381 - MODELO: 2009 - MARCA: CHEVROLET",
  features: new Array("Placas: XWC 986", "Número serial: 9GDP7H1C4900381", "Combustible: DIESEL", "Tipo KODIAK: línea 241", "Número de chasis: 9GDP7HC49B009381", "Capacidad: 10 Tn", "Cilindraje: 7200", "Color: blanco arco bicapa"),
  img_src: "img/camiones/chevrolet2009.jpg"
},
  {
  title: "CAMIÓN FTR LWB",
  category: categorys[0],
  serial: "SERIAL: 9GDFTR32X9B000833 - MODELO: 2009 - MARCA: CHEVROLET",
  features: new Array("Motor: 6HE1-413849","Capacidad: 10 toneladas","Cilindraje: 7.125","Modelo: FTR LWB Camión local","Color: blanco","Vhasis: cabinado","Peso: 4.255 Kg","Capacidad de arranque: 25.43%"),
  img_src: "img/camiones/chevrolet2009s.png"
},
  {
  title: "CAMIONETA DMAX",
  category: categorys[0],
  serial: "SERIAL: 8LBDTF2L3d0181488 - MODELO: 2013 MARCA: LUV D-MAX 2.5L 4X2",
  features: new Array("Marca: chevrolet","Modelo: LUV D-MAX 2.5 L 4x2 c/s chasis","Clase: chasis cabina","Color: blanco olímpico","Motor: 274092","Serie: 8LBDTF2L3D0181488","Cilindraje: 2.500"),
  img_src: "img/camiones/dmxs.png"
},
  {
  title: "CAMIONETA DMAX",
  category: categorys[0],
  serial: "SERIAL: 8LBDTF2L290017494 - MODELO: 2009 MARCA: LUV D-MAX 2.5L 4X2",
  features: new Array("Marca: Chevrolet","Clase: chasis","Modelo: LUV D- MAX 2.5 L 4x2 c/s Chasis","Motor: 745946","Color blanco: Mahler"),
  img_src: "img/camiones/dmxs.png"
},
  {
  title: "TRACTOCAMIÓN",
  category: categorys[0],
  serial: "SERIAL: NF80K5H-35628 - MODELO: 1955 MARCA: FORD F-900",
  features: new Array("Placa: XAB 313","Marca: FORD-F 9000","Modelo: 1955","Clase de vehículo: tracto camión","Color azul y blanco","Servicio público","Número de motor 11168603 NF80K5H-35628","Número de chasis NF80K5H-35628","Capacidad 30 toneladas","Número de ejes 3"),
  img_src: "img/camiones/mula.jpg"
},
/*CARGADORES*/
{
  title: "MINICARGADOR BOBCAT",
  category: categorys[1],
  serial: "SERIAL: 51583220 - MODELO: 753G - MARCA: BOBCAT",
  features: new Array("Operativo: 2,15 t","Fabricante del Motor: Kubota","Tipo de motor: V2203-EB","Vía/Ruedas: 7-156PR mm","Energía del motor: 32 KW","Capacidad del balde: 0,6 m3","Dimensiones de equipos L/A/A: 3,06x1,4x1,96 m","Revoluciones al máximo torque: 2650 min-1","Velocidad: 10,6 km/h"),
  img_src: "img/cargadores/bobcat753.jpg"
},
{
  title: "MINICARGADOR BOBCAT",
  category: categorys[1],
  serial: "SERIAL: 509643918 - MODELO: 773 F - MARCA: BOBCAT",
  features: new Array("Máxima altura de descarga","Peso Operativo: 2,4 t","Fabricante del Motor: Kubota","Tipo de motor: V2203-B","Vía/Ruedas: 10.0x16.5 mm","Energía del motor: 35,5 KW","Capacidad del balde: 0,48 m3","Dimensiones de equipos L/A/A: 3,32x1,73x1,93","Velocidad: 11,2 km/h"),
  img_src: "img/cargadores/bobcat773.jpg"
},
{
  title: "BULLDOZER D 6M",
  category: categorys[1],
  serial: "SERIAL: CAT00D6MJ3WN03O15 - MODELO: D 6M MARCA: CATERPILLAR",
  features: new Array("Potencia en el volante: 111.8 kw 150 hp","Transmisión avance: 1.5 3.1 km/h 1.93 hp","1.5 avance","Fuerza en la barra de tiro: 320 kw 71.939 LB","Tanque de combustible: 299 L","Peso en orden de trabajo: 16.668 Kg, 36.670 LB","Presión sobre el suelo: 51.6 KPA 7.48 LB/pulgadas cuadradas","Ancho de la hoja XL SU: 3.154 mm 10 pies 4 pulgadas","Capacidad de la hoja: 4.28 m3 5.6 yardas cubicas","Penetración máxima XL: 473,5 mm"),
  img_src: "img/cargadores/bulldozer1.jpg"
},
{
  title: "BULLDOZER KOMATSU",
  category: categorys[1],
  serial: "SERIAL: 30.433-BN - MODELO: D65A-6 MARCA: KOMATZU",
  features: new Array("El sistema de manejo hidrostático (HSS) proporciona un control liso, rápido, y de gran alcance en condiciones de tierra que varían.","Los frenos húmedos, con múltiples discos eliminan los ajustes de la banda de freno para la operación sin necesidad de mantenimiento.","Los ejes de pivote montados en la delantera aíslan los mecanismos impulsores finales de las cargas de la lámina.","Tren de potencia modular para la utilidad y la durabilidad crecientes."),
  img_src: "img/cargadores/bullkomatsu.jpg"
},
{
  title: "RETROCARGADOR CASE 580 SL",
  category: categorys[1],
  serial: "SERIAL: 45158775 - MODELO: 580SL - MARCA: CASE",
  features: new Array("Potencia bruta del motor: 88 hp (66 kW)","Peso Operacional: 6.698 kg (4x4) 6.570 kg (4x2)","Profundidad Máx.: de Excavación 4.360 mm (14' 3)","Fuerza de Excavación - Cuchara: 10.965 lb (4.978 kg)","Fuerza de Excavación - Balancín: 7.042 lb (3.197 kg)"),
  img_src: "img/cargadores/case.jpg"
},
/*COMPRESORES*/
{
  title: "COMPRESOR",
  category: categorys[2],
  serial: "SERIAL: 330369UFM295 - MODELO: P185WIR-2002 - MARCA: INGERSOLL RAND",
  features: new Array("Desplazamiento: m3/min 5.","Presión de escape nominal bar: 8.","Campo de presión: 5.5-10.","Fabricante del motor diesel: Ingersoll-Ran","Modelo del motor diesel: 4IRH8","Desplazamiento del motor diesel(L): 3.","Velocidad giratoria del motor diesel rpm: 250","Potencia bajo velocidad giratoria nominal: 8","Dimensiones L×A×H (mm): 3498×1739×158","Tamaño de ruedas: 15"),
  img_src: "img/compresores/compresor.png"
},
{
  title: "VIBROCOMPACTADOR",
  category: categorys[2],
  serial: "SERIAL: P/PAL 170398 - MODELO: DD-30 2003 MARCA: INGERSOLL RAND",
  features: new Array("4 cuatro cilindros diesel","Potencia 32,8 HP cilindrada 2197 cm3","Refrigeración por liquido","Sistema de traslación, circuito hidrostático paralelo cerrado","Velocidad marcha adelante y marcha atrás 0-10.7 km/h","Ancho de rodillo 1320mm","Frecuencia de vibración 66.7 HZ","Fuerza centrífuga 33 kN"),
  img_src: "img/compresores/compactador.jpg"
},
{
  title: "VIBROCOMPACTADOR BOMAG",
  category: categorys[2],
  serial: "MARCA: BOMAG",
  features: new Array("Peso construcción 7.8 t","Fabr. del motor Deutz","Modelo motor TCD2011L04","Dimensiones lxanxa 4,913x1,836x2,86m","Rendim. motor 75KW","Vibración e","Tracción A","Revoluciones: 2200 min-1","Velocidad 11 km/h","Frecuencia 40 hz","Ancho de rodillo 1.686m","Diametro de rodillo 1.228m","Amplitud 1,9/0,95mm","Carga lineal estática 24.9"),
  img_src: "img/compresores/bomag.jpg"
},
/*EXCAVADORAS*/
{
  title: "EXCAVADORA HIDRAÚLICA 312 DL",
  category: categorys[0],
  serial: "SERIAL: CAT 0312DKJBC01449 - MODELO: 2012 - MARCA: CATERPILLAR",
  features: new Array("Motor Modelo de motor Cat®: C4.2 ACERT™","Potencia neta: (SAE J1349) 67 kW 90 hp","Potencia bruta: 72 kW 97 hp","Peso en orden de trabajo","Tren de rodaje estándar: 12.920 kg 28.480 lb","Tren de rodaje largo: 13.450 kg 29.650 lb"),
  img_src: "img/excavadoras/312D.jpg"
},
{
  title: "RETROEXCAVADORA 315 DL",
  category: categorys[0],
  serial: "SERIAL: CAT 0315DJCJN03052 - MODELO: 315 D - MARCA: CATERPILLAR",
  features: new Array("Peso de trabajo: 14 t","Modelo motor: C4.2Acert","Dimensiones: 8,525x2,59x2,92 m","Rendim. motor: 86 KW","Capacidad pala: 0,94 m3","Anchura zapata: 600 mm","PlumaMB: 4,25","Revoluciones: 2200 min-1","Alcance lateral: 8,43 m","Profundidad de excavación: 5,72 m","Fuerza de rotura: 95 kN","Ancho cuchara: 1,2 m"),
  img_src: "img/excavadoras/315d.png"
},
{
  title: "EXCAVADORA CASE 160 CX",
  category: categorys[0],
  serial: "SERIAL: DAC0162068 - MODELO: 2005 MARCA: CASE",
  features: new Array("Tipo cuatro tiempos","Turbo alimentado y post enfriado","4 Cilindros","De combustible diesel","Caballos de fuerza por la norma SAE J1349 neto de 120 hp (89.2 kw) y capacidad de combustible 79.3 Galones (300.0 L)","Inyección de combustible directa","Excavadora montada sobre oruga"),
  img_src: "img/excavadoras/case.jpg"
},
{
  title: "RETROEXCAVADORA 416D",
  category: categorys[0],
  serial: "SERIAL: BFP14944 - MODELO: 416D - MARCA: CATERPILLAR",
  features: new Array("Motor: diesel 3054b CATERPILLAR","Modelo operativo: motor diesel 3054T CATERPILLAR con turbo compresión.","Potencia bruta (estándar): 77 HP","Potencia bruta (operativa ): 83 HP","Peso: 6900 kg trabajo nominal","Tracción en todas las ruedas","Cucharon de uso múltiple","Brazo extendible"),
  img_src: "img/excavadoras/excavadora1.jpg"
},
{
  title: "EXCAVADORA PC 220 LC -6",
  category: categorys[0],
  serial: "SERIAL: A80414 - MODELO: SA6D95L - MARCA: KOMATSU",
  features: new Array("Potencia bruta: 158.2 hp","Potencia: 2100 rpm","Desplazamiento: 358.8 pies","Cilindros: 6","Capacidad de combustible: 89.8 galones 340 litros","Peso en operación: 51764.5 libras 23480 kg","Excavadora montada sobre oruga","Modelo fabricación: 2000","Color: amarillo y negro"),
  img_src: "img/excavadoras/komatsu.jpg"
},
{
  title: "TELEHANDLER",
  category: categorys[0],
  serial: "MODELO: 844C- 42 - MARCA: LULL",
  features: new Array("Motor diesel: 110 HP, turbo","Capacidad máxima: 8000 LB","Altura máxima de elevación: 42 FT","Altura de elevación tapa llena: 6000 LB","Máximo alcance delantero: 23(32)","Máximo adelante asenso: 2000 LB (500LB)","Marco de nivelación: 12,5” L/R","Radio de giro (afuera ): 13 FT i IN","Peso de operación: 23.160 LB","Clase de gato: 233-1370"),
  img_src: "img/excavadoras/lull.jpg"
},
{
  title: "RETROEXCAVADORA TEREX 760",
  category: categorys[0],
  serial: "SERIAL: SMFH44TOBDHM1236 - MODELO: 11040-44T - MARCA: TEREX",
  features: new Array("Peso operativo: 7,26 t","Fabricante del motor: Perkins","Tipo de motor: 1004-40T","Ruedas estándar: 12.5x18/16.9x28","Energía del motor: 86 KW","Capacidad del balde: 1,2 m3","Tracción: A",),
  img_src: "img/excavadoras/terexs.png"
},
/*OTROS*/
{
  title: "BASE PARA AHOYADOR",
  category: categorys[0],
  serial: "SERIAL: A90L01398 - MARCA: BOBCAT",
  features: new Array("Peso operativo 955Lbs","Rango de flujo 15-23 gpm","Profundidad de excavación 3” (pie)","Diámetro de zanjado 14”","Ancho de zanja entre 4” y 6”","Largo total 105”","Las profundidades de excavación van de 61 a 152,5 cm."),
  img_src: "img/otros/ahoyador.jpg"
},
{
  title: "BASE PARA AHOYADOR",
  category: categorys[0],
  serial: "SERIAL: 6F 0842 - MODELO: 4010 MARCA: DITCH WITCH",
  features: new Array("Peso operativo 955Lbs","Rango de flujo 15-23 gpm","Profundidad de excavación 3” (pie)","Diámetro de zanjado 14”","Ancho de zanja entre 4” y 6”","Largo total 105”","Las profundidades de excavación van de 61 a 152,5 cm."),
  img_src: "img/otros/otro1.png"
},
{
  title: "AUTOHORMIGUERA",
  category: categorys[0],
  serial: "SERIAL: LH6820361 TIPO LH 682 - MODELO: 2012 MARCA: DIECI",
  features: new Array("Pala de Carga","Tambor","Cabina","Debajo del Capote: Motor, Batería, Tanque Gasol, Tanque Aceite Hidráulico.","Eje diferencial delantero","Puesto Conductor Giratorio","Bomba Agua","Bomba Baja -Sube Canal","Tanque Agua","Prolongación Canal","Canal"),
  img_src: "img/otros/hormigueros.png"
},
{
  title: "BRAZO ELECTROHIDRÁULICO",
  category: categorys[0],
  serial: "SERIAL: NV00044 - MODELO: TB-42 MANLIF DIESEL - MARCA: SNORKEL",
  features: new Array("Modelo: TB-A42 RDZ","Tamaño plataforma: 3º x 60 in 76 x 152 cm","Máxima fuerza manual permitida: 90 LBS 400 N","Carga de la rueda: 8702 LBS 394.7 Kg","Velocidad máxima de viento permitida: 28 MI / H","Dirección eje 6660 LBS: 3021 Kg"),
  img_src: "img/otros/snorkel.png"
},
/*VOLQUETAS*/
{
  title: "VOLQUETAS",
  category: categorys[0],
  serial: "MARCA: Workstar",
  features: new Array("Cummins ISM 345, ISM 385 y ISM 420 EURO 4 S","Potencias: 336 HP, 375HP y 404 HP","Freno Motor JACOBS","Fandrive de 2 velocidades","Chasis canal en C en acero","Carga de la volqueta: 20 toneladas o 15 m3","Tanque de combustible: 100 galones"),
  img_src: "img/volquetas/workstar.jpg"
},
]

