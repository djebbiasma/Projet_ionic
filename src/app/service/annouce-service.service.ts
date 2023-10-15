import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Announce } from 'src/Models/Announce';

@Injectable({
  providedIn: 'root'
})
export class AnnouceServiceService {

  annonces!: Announce[];
  apiUrl = 'http://localhost:5000/Product/';

  //const token = localStorage.getItem('token'); 
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI5MjQ3ZTgyYzI3YzRjYzk3OWM4N2MiLCJFbWFpbCI6ImFsYXRvcmsyQGdtYWlsLmNvbSIsIkZpcnN0X25hbWUiOiJhbGEiLCJMYXN0X25hbWUiOiJ0b3JraGFuaSIsInRpbWUiOiJGcmkgT2N0IDEzIDIwMjMgMjM6MzM6MTYgR01UKzAxMDAgKENlbnRyYWwgRXVyb3BlYW4gU3RhbmRhcmQgVGltZSkiLCJpYXQiOjE2OTcyMzYzOTZ9.qQAPBz0rQK_5TfkDUp0JS5EsoF82mAejXwsr-potE3Q" 


  constructor(private http: HttpClient) {}


  getAnnouncements() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get<Announce[]>(this.apiUrl+"AllProduct", { headers });
  }
  getAnnounceById(id:string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return  this.http.get<Announce>(this.apiUrl+id, { headers });
  }

    getIdUserFromToke(){
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return   this.http.get<string>("localhost:5000/user/GetDataFromToken",{headers})
  }

   getUserAnnounces() {
    try {
      const idUser =  this.getIdUserFromToke(); 
      const endpoint = `http://localhost:5000/Product/ProductsByUser/${idUser}`;
      
      const headers = new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      });
      
      return  this.http.get<Announce[]>(endpoint, { headers }); 
    } catch (error) {
      console.error('Error getting user announces:', error);
      throw error;
    }
  }



  addProduct(product: Announce) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    var userid;
    this.getIdUserFromToke().subscribe(
      (data) => {
        userid= data;
      });

    const newProduct = {
      name: product.name,
      description: product.description,
      Price: product.Price,
      Quantity: product.Quantity,
      Images: product.Images,
      Category: product.Category,
      user: userid
    };

    return this.http.post<Announce>(this.apiUrl + 'AddProducts', newProduct, { headers });
  }

  
  deleteProdace(id:string){
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return   this.http.delete<string>(this.apiUrl+"DeleteProduct/"+id,{headers})
  }
  

  updateProduct(productId: string, productData: Announce) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
  
    return this.http.put<Announce>(`${this.apiUrl}UpdateProduct/${productId}`, productData, { headers });
  }
  
}