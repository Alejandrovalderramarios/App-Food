import { Injectable } from '@angular/core';
import { Food } from './food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  menu: Food[]=[
    {
      id:1,
      name:'FOCACCIA',
      descripcion:'Con extra queso',
      category: 'food',
      image:'https://2trendies.com/hero/2023/09/focaccia.jpg?width=1200&aspect_ratio=16:9',
      price: 170
    },
    {
      id:2,
      name:'FOCACCIA',
      descripcion:'Con extra queso',
      category: 'food',
      image:'https://2trendies.com/hero/2023/09/focaccia.jpg?width=1200&aspect_ratio=16:9',
      price: 170
    },
    {
      id:3,
      name:'FOCACCIA',
      descripcion:'Con extra queso',
      category: 'food',
      image:'https://2trendies.com/hero/2023/09/focaccia.jpg?width=1200&aspect_ratio=16:9',
      price: 170
    },
    {
      id:4,
      name:'FOCACCIA',
      descripcion:'Con extra queso',
      category: 'food',
      image:'https://2trendies.com/hero/2023/09/focaccia.jpg?width=1200&aspect_ratio=16:9',
      price: 170
    },
    {
      id:5,
      name:'FOCACCIA',
      descripcion:'Con extra queso',
      category: 'food',
      image:'https://2trendies.com/hero/2023/09/focaccia.jpg?width=1200&aspect_ratio=16:9',
      price: 170
    },
    {
      id:6,
      name:'FOCACCIA',
      descripcion:'Con extra queso',
      category: 'food',
      image:'https://2trendies.com/hero/2023/09/focaccia.jpg?width=1200&aspect_ratio=16:9',
      price: 170
    },
    {
      id:7,
      name:'FOCACCIA',
      descripcion:'Con extra queso',
      category: 'food',
      image:'https://2trendies.com/hero/2023/09/focaccia.jpg?width=1200&aspect_ratio=16:9',
      price: 150
    }
  ]

  constructor() { }

  public getAllFoods():Food[]{
    return this.menu;
  };

  //Obtener una comida del arreglo
  public getOne(id:number):Food | undefined{
    return this.menu.find(item=>item.id == id);
  };

  //Añadir nueva comida
  public addFood(food:Food) {
    this.menu.push(food);
  };

  //Actualizar comida
  public updateFood(newFood:Food){
    this.menu.forEach((food, index)=>{
      if(food.id == newFood.id){
        this.menu[index] = newFood;
      }
    });
  };

  //Eliminar comida
  public deleteFood(deleteFood:Food){
    this.menu.forEach((food, index)=>{
      if(food.id == deleteFood.id){
        this.menu.splice(index,1);
      }
    });
  };

}
