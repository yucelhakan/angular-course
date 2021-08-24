import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  user = {
    name: "Hakan",
    surname: "Yücel",
    job: "Kendine Yazılımcı",
    image: "https://www.yucelhakan.com/dosyalar/hakkimda/r20201128160958-afsfefswe.jpg",
    editTable: false
  }

  constructor() { }

  ngOnInit(): void {
  }

  buttonClick(){
    alert("naber");
  }

  inputKey(value:any){
    //console.log(value);
    alert(value.target.value + " geldi");
  }
}
