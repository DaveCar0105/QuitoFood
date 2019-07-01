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
      isEmail: true,
      unique: true,
      required: true
    },

    puntuacion: {
      type: 'number',
      min: 1,
      max: 5,
      required: true,
    }
  }
};

