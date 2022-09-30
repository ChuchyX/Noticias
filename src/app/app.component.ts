import { Component } from '@angular/core';
import { NoticiasServiceService } from './Services/noticias-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Noticias';

  loading = false;

  constructor(private servicioNoticias: NoticiasServiceService){}

  paisSeleccionado = 'CU';
  categoriaSeleccionada = 'general';
  categorias: any[] = [
    {valor: 'general', nombre: 'General'},
    {valor: 'business', nombre: 'Negocios'},
    {valor: 'entertainment', nombre: 'Entretenimiento'},
    {valor: 'health', nombre: 'Salud'},
    {valor: 'science', nombre: 'Ciencia'},
    {valor: 'sports', nombre: 'Deportes'},
    {valor: 'technology', nombre: 'Tecnologia'}
  ]

  paises: any[] = [
    {valor: 'CU', nombre: 'Cuba'},
    {valor: 'US', nombre: 'Estados Unidos'},
    {valor: 'MX', nombre: 'Mexico'},
    {valor: 'GB', nombre: 'Reino Unido'},
    {valor: 'AR', nombre: 'Argentina'},
    {valor: 'BR', nombre: 'Brasil'},
    {valor: 'FR', nombre: 'Francia'},
    {valor: 'RU', nombre: 'Rusia'}
  ]

  articles: any[] = [];

  buscarNoticias()
  {
    this.loading = true;
    this.servicioNoticias.getNews(this.paisSeleccionado, this.categoriaSeleccionada).subscribe(data => {
      console.log(data);
      this.loading = false;
      this.articles = data.articles;
    }, error => {
      console.log(error);
    })
  }
}
