/**
 * Blog.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'blogs',

  attributes: {

    titulo:{
      type:'string',
      unique: true,
      required: true
    },
    
    contenido:{
      type:'string',
      required: true
    },

    puntuacion: {
      type: 'number',
      min: 1,
      max: 5,
      required: false,
    },
    
    imagen:{
      type: 'string',
      required: true,

    },
    /*
    direccion:{
      type: 'string',
      required: true,
    },
    autor:{
      model:'usuario',

    },
    */

  }
};

