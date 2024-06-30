import {Router} from 'express'
const router = Router()


router.get('/', (req, res) => res.render('index',{title: 'Carpintería SAYHUAA'}))

router.get('/about', (req, res) => res.render('about',{title: 'Sobre Nosotros'}))

router.get('/contact', (req, res) => res.render('contact',{title: 'Contáctanos'}))

router.get('/product', (req, res) => res.render('product',{title: 'Productos'}))

router.get('/trabajo', (req, res) => res.render('trabajo',{title: 'Trabajos'}))

router.get('/cita', (req, res) => res.render('cita',{title: 'Cita Previa'}))

router.get('/Descuento', (req, res) => res.render('Descuento',{title: 'Descuentos'}))

router.get('/Promociones', (req, res) => res.render('Promociones',{title: 'Promociones'}))


export default router