import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,  } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the RegistrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {
usuario=[];
correo='';
contrasena='';
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public storage:Storage) {
    this.usuario=this.navParams.get("usuario");
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarPage');
  }
  clickagregar(){
    if(this.correo.length>0 && this.contrasena.length>0){
      this.usuario.push({correo:this.correo, contrasena:this.contrasena});
      this.storage.set('usuario', JSON.stringify(this.usuario));
      this.navCtrl.pop();

      console.log(this.usuario);
    }
    else{
      const alert=this.alertCtrl.create({
        title:"Oops!", subTitle:"correo y constraseña tienen que estar llenos", buttons:["ok"]
      })
      alert.present();
    }
  }
}
