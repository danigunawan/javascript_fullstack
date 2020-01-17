import express from 'express';
import jwt from 'express-jwt';
import cors from 'cors';
import jwks from 'jwks-rsa';
import jwtAuthz from 'express-jwt-authz';

// crear servidor
const app = express();

// configurar el servidor para json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

//  web token valido
const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://zeroidentidad.auth0.com/.well-known/jwks.json"
    }),
    audience: 'http://productos',
    issuer: "https://zeroidentidad.auth0.com/",
    algorithms: ['RS256']
});

// revisamos y validamos los scopes
const checkScopes = jwtAuthz(['read:productos']);

app.get('/productos', jwtCheck, checkScopes, (req, res) => {
    let productos = [
        {
            "id": 0,
            "nombre": "HTML5",
            "precio": 50,
            "imagen": "camisa_1",
            "descripcion": "Es un lenguaje de marcado que se utiliza para el desarrollo de páginas de Internet. Se trata de la siglas que corresponden a HyperText Markup Language, es decir, Lenguaje de Marcas de Hipertexto”."
        },
        {
            "id": 1,
            "nombre": "CSS3",
            "precio": 50,
            "imagen": "camisa_2",
            "descripcion": "Es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en HTML o XML (y por extensión en XHTML)."
        },
        {
            "id": 2,
            "nombre": "NodeJS",
            "precio": 60,
            "imagen": "camisa_3",
            "descripcion": "Es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación ECMAScript, asíncrono, con I/O de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google."
        },
        {
            "id": 3,
            "nombre": "JavaScript",
            "precio": 50,
            "imagen": "camisa_4",
            "descripcion": "Es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, ​ basado en prototipos, imperativo, débilmente tipado y dinámico."
        },
        {
            "id": 4,
            "nombre": "Angular",
            "precio": 60,
            "imagen": "camisa_5",
            "descripcion": "Es un framework para aplicaciones web desarrollado en TypeScript, de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página."
        },
        {
            "id": 5,
            "nombre": "Github",
            "precio": 40,
            "imagen": "camisa_6",
            "descripcion": "Es una forja para alojar proyectos utilizando el sistema de control de versiones Git. Se utiliza principalmente para la creación de código fuente de programas de ordenador. El software que opera GitHub fue escrito en Ruby on Rails. Desde enero de 2010, GitHub opera bajo el nombre de GitHub, Inc."
        },
        {
            "id": 6,
            "nombre": "WordPress",
            "precio": 50,
            "imagen": "camisa_7",
            "descripcion": "Es un sistema de gestión de contenidos lanzado el 27 de mayo de 2003, enfocado a la creación de cualquier tipo de página web. Originalmente alcanzó una gran popularidad en la creación de blogs, para luego convertirse, en una de las principales herramientas para la creación de páginas web comerciales."
        },
        {
            "id": 7,
            "nombre": "React",
            "precio": 60,
            "imagen": "camisa_8",
            "descripcion": "Es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre, han participado en el proyecto más de mil desarrolladores diferentes."
        }
    ]

    res.json(productos);

});

app.listen(4000, () => {
    console.log('Servidor iniciado');
})