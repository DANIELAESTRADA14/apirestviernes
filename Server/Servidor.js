//Importaciones necesarias:

//Importando express
//const express = require('express')

import express from "express";

//Programo clase Servidor
export class Servidor {
  constructor() {
    this.app = express();
    this.enrutarPeticiones()
  }

  //Metodos del servidor (¿Qué hace?)
  despertarServidor(){
    this.app.listen(process.env.PORT,function(){
        console.log("Servidor encendido")
    })
  }

  enrutarPeticiones(){
    this.app.get('/API/v1/viernes', function (req, res) {
        res.send('Hello World')
      })

      this.app.get('/API/v1/viernes', function (req, res) {
        res.send('Hello World')
      })

      this.app.post('/API/v1/viernes', function (req, res) {
        res.send('Hello World')
      })

      this.app.put('/API/v1/viernes', function (req, res) {
        res.send('Hello World')
      })

      this.app.delete('/API/v1/viernes', function (req, res) {
        res.send('Hello World')
      })
  }
}
