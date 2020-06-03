const Viaje = require('../models/Viajes');

exports.mostrarViajes = async(req, res) => {
    try {
        const viajes = await Viaje.findAll()
        res.render('viajes', {
            pagina: 'Próximos Viajes',
            viajes: viajes
        });        
    } catch (error) {
        console.log(error)
    }
};

exports.mostrarViaje = async(req, res) => {
    try {
        const viaje = await Viaje.findByPk(req.params.id)
        res.render('viaje', {
            viaje: viaje
        });        
    } catch (error) {
        console.log(error)
    }
};