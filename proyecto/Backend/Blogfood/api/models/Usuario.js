/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tablename: 'usuarios',

  attributes: {

    nombre:{
      type:'string',
      unique: true,
      required: true
    },
    
    correo:{
      type:'string',
      isEmail: true,
      unique: true,
      required: true
    },

    password:{
      type:'string',
      required: true,
      
    },

  },

};

