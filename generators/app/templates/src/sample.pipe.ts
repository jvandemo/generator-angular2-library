import { Injectable, PipeTransform, Pipe } from '@angular/core';

/**
 * Transforms any input value
 */
@Pipe({
  name: 'samplePipe'
})
@Injectable()
export class SamplePipe implements PipeTransform {
  transform(value: any, args: any[] = null): string {
    return value;
  }
}
