import { Pipe, PipeTransform } from '@angular/core';

@Pipe( {
  name: 'iterateObject'
} )
export class IterateObjectPipe implements PipeTransform {

  transform( object: any, args?: any ): any {
    const properties = [];
    for ( const property in object ) {
      if ( object.hasOwnProperty( property ) ) {
        properties.push( { key: property, value: object[ property ] } );
      }

    }
    return properties;
  }

}
