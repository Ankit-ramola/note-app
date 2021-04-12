import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTerm: any): any {
    if(searchTerm===""){
      return value;
    }
    return value.filter(function(search){
      return search.name.toLowerCase().includes(searchTerm.toLowerCase());
    })
  }

}
