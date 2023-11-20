const products = [
    {name:"Juguete de unicornio mágico 3 en 1 de Lego Creator", category:"Lego", description:"Juguete de unicornio mágico 3 en 1 de Lego Creator, de caballito de mar a pavo real 31140, figuras de animales arcoíris, regalo de unicornio para niñas y niños, juguetes para construir", price:8530, stock:10, img:"../img/lego01.jpg", id:"1"},
    {name:"LEGO Technic Race Plane 42117", category:"Lego", description:"LEGO Technic Race Plane 42117 Kit de construcción para niños y niñas que aman los juguetes de avión modelo, nuevo 2021 (154 piezas)", price:16670, stock:5, img:"../img/lego02.jpg", id:"2"},
    {name:"LEGO Creator 3in1 Fantasy Forest Creatures 31125", category:"Lego", description:"LEGO Creator 3in1 Fantasy Forest Creatures 31125 Kit de construcción con búho, conejo y ardilla; juguetes de animales para niños a partir de 7 años que aman la diversión creativa y los modelos de animales (175 piezas)", price:11280, stock:3, img:"../img/lego03.jpg", id:"3"},
    {name:"Juego de juguetes de construcción LEGO Valentine Lovebirds 40522", category:"Lego", description:"Juego de juguetes de construcción LEGO Valentine Lovebirds 40522; para niños, niños y niñas mayores de 8 años (298 piezas)", price:12320, stock:15, img:"../img/lego04.jpg", id:"4"},
    {name:"Vestidor de Playmobil", category:"Playmovil", description:"Prepárate para el baile real en el vestuario. Con varios atuendos entre los que elegir, seguro que encontrarás el perfecto para la ocasión. Ponte frente al espejo mientras decides los accesorios que combinarán con tu atuendo.¡Expande tu reino con el resto del tema Princess de PLAYMOBIL!", price:20640,stock:10, img:"../img/playmovil01.jpg", id:"5"},
    {name:"Fiesta en la piscina de Playmobil", category:"Playmovil", description:"A todo el mundo le encanta venir a la fiesta en la piscina en el patio trasero. Las luces decorativas y el horno de ladrillos para exteriores crean el ambiente perfecto para una reunión al aire libre. Los adultos y los niños se lanzan directamente a la piscina desde el tobogán. Relájese en el sillón bajo la sombrilla o en la balsa flotante de la piscina. Conecta este set al balcón del piso superior de Modern House para divertirte aún más en familia.", price:49300, stock:5, img:"../img/playmovil02.jpg", id:"6"},
    {name:"Camión de bomberos de Playmobil", category:"Playmovil", description:"Conviértete en un héroe en PLAYMO City con el camión de bomberos de PLAYMOBIL. Cuenta con una escalera extensible que gira 360 grados y un cañón de agua giratorio y giratorio para apagar las llamas. Equipa a tus figuras con un respirador y un tanque de oxígeno para la misión de rescate. Usa los grandes compartimentos de ambos lados del vehículo para guardar el equipo de la misión Incluye 2 figuras de PLAYMOBIL.", price:37880, stock:3, img:"../img/playmovil03.jpg", id:"7"},
    {name:"¡Playmobil Scooby-doo! Máquina misteriosa", category:"Playmovil", description:"Asegúrese de que se ajusta introduciendo su número de modelo. Es hora de resolver algunos misterios con los miembros de Mystery, Inc ¡En SCOOBY-DOO! ¡Máquina misteriosa! Este vehículo psicodélico siempre tiene todo lo que necesitas para tus aventuras de caza de fantasmas. Abre las puertas traseras de la furgoneta para descubrir un monitor iluminado, donde puedes insertar tus tarjetas de fantasmas para aprender más sobre el misterio", price:40750, stock:15, img:"../img/playmovil04.jpg", id:"8"},
    {name:"Muñeca y juego de dentista rubia Barbie Careers con accesorios", category:"Barbies", description:"¡Pasa a hacerte un chequeo y prepárate para alegrar las sonrisas con la muñeca Barbie Dentist! Este set de juego viene con 2 muñecas, un puesto dental, una silla para el paciente y accesorios más pequeños, como herramientas dentales, cepillo de dientes y pasta de dientes. Guarda los accesorios en los estantes de la clínica dental. Para un juego de rol realista, ¡las piezas caben perfectamente en las manos de las muñecas!", price:15170, stock:10, img:"../img/barbie01.jpg", id:"9"},
    {name:"Juego de heladería Barbie con muñeca rubia", category:"Barbies", description:"¡Los niños pueden dirigir una heladería con el set de juego Barbie Ice Cream Shop! Con un bonito vestido con estampado de helado y un delantal a rayas, la muñeca Barbie está lista para hacer helados y servir a sus clientes. Incluye heladería, muñeca Barbie (12 pulgadas) y accesorios de heladería: 2 colores para masa, 2 cuencos, 2 conos, 3 adornos decorativos, 2 cucharas, soporte para conos y registro. Para crear helados realistas, los niños pueden usar dos tipos de masa (rosa o azul) y ponerla en la máquina de helados, tirar de la palanca y ver cómo se mueve el «helado» y usar también los adornos para helado.", price:11370, stock:5, img:"../img/barbie02.jpg", id:"10"},
    {name:"Muñeca pequeña Barbie Chelsea Cutie Reveal y accesorios", category:"Barbies", description:"Con 6 sorpresas en un paquete, las muñecas Barbie Cutie Reveal Chelsea ofrecen la experiencia de desempaquetar más linda con la lujosa serie Cozy Cute Tees, amigos de los animales, modas y diversión transformadora. Al abrir la caja encontrarás un cachorro de osito de peluche rosa de peluche con una camiseta cosida y una muñeca de Chelsea en su interior.", price:8860, stock:3, img:"../img/barbie03.jpg", id:"11"},
    {name:"Muñeca Barbie y accesorios, muñeca Career Pastry Chef con sombrero y rebanada de pastel", category:"Barbies",description:"¡A la muñeca Barbie de la pastelera le encanta probar nuevas recetas y ser creativa en la cocina! Viene vestida con un uniforme completo con una chaqueta y un sombrero de chef. También se incluye un delicioso cupcake rosa que cabe perfectamente en la mano de la muñeca Barbie para mejorar el juego narrativo.",price:7300, stock:15, img :"../img/barbie04.jpg", id:"12"},
    {name:"Play-Doh Handout, paquete de 42 unidades de compuesto para modelar no tóxico",category:"Play-Doh", description:"42 minilatas de plastilina Play-Doh en varios colores para compartir la creatividad. Compuesto de modelar no tóxico y sin trigo para niños de 2 años en adelante", price:16120, stock:10, img:"../img/play-doh01.jpg", id:"13"},
    {name:"Juguete de dentista Play-Doh Drill 'n Fill", category:"Play-Doh", description:"Juguete de dentista Play-Doh Drill 'n Fill para niños de 3 años o más con compuesto para modelar con cavidades y colores metálicos, 10 herramientas, 8 latas en total, 2 onzas cada una, no tóxico, varios colores", price:7810, stock:5, img:"../img/play-doh02.jpg", id:"14"},
    {name:"Set de juego Play-Doh Kitchen Creations", category:"Play-Doh", description:"Set de juego Play-Doh Kitchen Creations Busy Chef's Restaurant, juego de cocina de 2 caras, juguetes de cocina preescolar, manualidades para niños, a partir de 3 años", price:17060, stock:3, img:"../img/play-doh03.jpg", id:"15"},
    {name:"Play-Doh Kitchen Creations Magical Mixer Playset", category:"Play-Doh", description:"Play-Doh Kitchen Creations Magical Mixer Playset, batidora de juguete con accesorios de cocina, manualidades para niños de 3 años en adelante", price:8050, stock:15, img:"../img/play-doh04.jpg", id:"16"}
    
  ];
    
    export const getProducts = () => {
      
        return new Promise((resolve, reject) => {
        if (products.length > 0) {
          setTimeout(() => {
            resolve(products);
          }, 2000);
        } else {
          reject("No se ha encontrado ningún producto");
        }
      });
    };
  
    export const getProductById = (id) => {
      
        return new Promise((resolve, reject) => {
        if (products.length > 0) {
            const product = products.find( p => p.id === id);
            setTimeout(() => {
            if(!product) {
                reject(`No se encuentra el productos con el id ${id}`)
                }
                resolve(product);
            }, 2000);
        } else {
            reject("No se han encontrado productos");
            };
        });
    };