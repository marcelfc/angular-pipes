import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'custom'
})
export class CustomPipe implements PipeTransform {

    transform(items: any[], search: string): any[] {
        if (!items) return [];
        if (!search) return items;

        search = search.toLowerCase();

        return items.filter(it => {
            return it.indexOf(search) >= 0;
        });


    }

}
