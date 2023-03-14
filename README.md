# Sidenav Template Angular

## Recursos necesarios

### Bootstrap 

Para instalar bootstrap para angular cli en su proyecto ejecute el siguiente comando: 

```bash
ng add @ng-bootstrap/ng-bootstrap
```

Si necesita más información puede ver la [documentación oficial.](https://ng-bootstrap.github.io/#/home)

### Angular material 

Para instalar Angular Material para angular cli en su proyecto ejecute el siguiente comando: 

```bash
ng add @angular/material
```

Si necesita más información puede ver la [documentación oficial.](https://material.angular.io/)

# Implementacion de la plantilla en un proyecto

## Immmportación componentes de angular material

Para usar la plantilla son necesarios varuios componentes de angular material. Estos deben configurarse de manera global por lo que se deben hacer las siguientes importaciones en el archivo **app.module.ts**

```typescript
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
```

El Modulo de importaciones deberá verse de la siguiente manera 

```typescript
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    //Angular material
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule
    //fin angular material
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

## Creacion de componentes

Los nombres de los componentes que se vayan a utilizar pueden varias, para esta plantilla se utilizaron ciertos nombre que puede cambiar segun lo requiera su proyecto.

### HomeComponent 

Este componente contiene todo lo necesario para mostrar la plantilla inicial.

Para crear el componente en angular cli use el siguiente comando:
```bash
ng g c components/home
```
