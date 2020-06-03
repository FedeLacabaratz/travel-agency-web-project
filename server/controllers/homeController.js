const Viaje = require('../models/Viajes');
const Testimonial = require('../models/Testimoniales');

exports.consultasHomePage = async (req, res) => {
    try {
        const viajes = await Viaje.findAll({ limit: 3 })
        const testimoniales = await Testimonial.findAll({ limit: 3 })
    
        // Pasar el promise y ejecutarlo
        res.render('index', {
            pagina: 'Próximos Viajes',
            clase: 'home',
            viajes,
            testimoniales
        })        
    } catch (error) {
        console.log(error)
    }
};